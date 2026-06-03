'use client';

import { useEffect, useRef } from 'react';

// ── Config ──────────────────────────────────────────────
const NUM_RAYS = 320;
const REPEL_RADIUS = 300;
const REPEL_STRENGTH = 35;
const DOT_RADIUS_MIN = 1.0;
const DOT_RADIUS_MAX = 2.2;
const SPEED_MIN = 0.000225;
const SPEED_MAX = 0.0007;
const LENGTH_MIN = 0.32;
const LENGTH_MAX = 0.48;
// Burst origin sits this many px above the canvas bottom (keeps it on the mascot
// regardless of how tall the canvas is, so the burst can overflow upward).
const ORIGIN_FROM_BOTTOM = 70;

function rayColor(t: number): [number, number, number] {
  const colors: [number, number, number][] = [
    [240, 96, 158],
    [210, 80, 180],
    [160, 80, 210],
    [120, 80, 220],
  ];
  const seg = t * (colors.length - 1);
  const i = Math.min(Math.floor(seg), colors.length - 2);
  const f = seg - i;
  const a = colors[i], b = colors[i + 1];
  return [
    Math.round(a[0] + (b[0] - a[0]) * f),
    Math.round(a[1] + (b[1] - a[1]) * f),
    Math.round(a[2] + (b[2] - a[2]) * f),
  ];
}

class Ray {
  ox = 0; oy = 0;
  baseAngle = 0; angle = 0;
  baseLen = 0; len = 0;
  swayAmp = 0; swaySpeed = 0; swayPhase = 0;
  phase = 0; speed = 0; pulseAmp = 0;
  dotR = 0; colorT = 0;
  // eased tip position
  cx = 0; cy = 0;

  constructor(W: number, H: number) {
    this.reset(W, H);
  }

  reset(W: number, H: number) {
    this.ox = W * 0.5 + (Math.random() - 0.5) * 8;
    this.oy = (H - ORIGIN_FROM_BOTTOM) + (Math.random() - 0.5) * 8;
    this.baseAngle = -(Math.PI * (0.02 + Math.random() * 0.96));
    this.angle = this.baseAngle;
    const diag = Math.hypot(W, H) / 2;
    this.baseLen = (LENGTH_MIN + Math.random() * (LENGTH_MAX - LENGTH_MIN)) * diag;
    this.len = this.baseLen;
    this.swayAmp = 0.018 + Math.random() * 0.032;
    this.swaySpeed = SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN) * 0.6;
    this.swayPhase = Math.random() * Math.PI * 2;
    this.phase = Math.random() * Math.PI * 2;
    this.speed = SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN);
    this.pulseAmp = 0.06 + Math.random() * 0.12;
    this.dotR = DOT_RADIUS_MIN + Math.random() * (DOT_RADIUS_MAX - DOT_RADIUS_MIN);
    this.colorT = Math.random();
    this.cx = this.ox;
    this.cy = this.oy;
  }

  tipBase(t: number) {
    const l = this.baseLen * (1 + Math.sin(t * this.speed + this.phase) * this.pulseAmp);
    const a = this.baseAngle + Math.sin(t * this.swaySpeed + this.swayPhase) * this.swayAmp;
    return { x: this.ox + Math.cos(a) * l, y: this.oy + Math.sin(a) * l };
  }

  draw(ctx: CanvasRenderingContext2D, t: number, mouse: { x: number; y: number }) {
    const b = this.tipBase(t);
    const dx = b.x - mouse.x, dy = b.y - mouse.y;
    const dist = Math.hypot(dx, dy);
    let targetX = b.x, targetY = b.y;
    if (dist < REPEL_RADIUS && dist > 0.1) {
      const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
      targetX += (dx / dist) * force;
      targetY += (dy / dist) * force;
    }
    // Ease current position toward target (0.04 = slow drift)
    this.cx += (targetX - this.cx) * 0.04;
    this.cy += (targetY - this.cy) * 0.04;
    const tx = this.cx, ty = this.cy;

    const [r, g, bv] = rayColor(this.colorT);

    // pulse goes 0→1→0, drives opacity + size oscillation
    const pulse = (Math.sin(t * this.speed + this.phase) + 1) / 2; // 0..1
    const alpha = 0.04 + pulse * 0.7;          // fades almost to nothing
    const dotR  = 0.3 + pulse * this.dotR;     // shrinks almost to a point
    const lw    = 0.15 + pulse * 0.7;          // line nearly disappears

    const FADE_START = 38;
    const dx2 = tx - this.ox, dy2 = ty - this.oy;
    const totalLen = Math.hypot(dx2, dy2);
    const startFrac = Math.min(FADE_START / totalLen, 0.85);
    const sx = this.ox + dx2 * startFrac;
    const sy = this.oy + dy2 * startFrac;

    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(tx, ty);
    ctx.strokeStyle = `rgba(${r},${g},${bv},${(alpha * 0.55).toFixed(3)})`;
    ctx.lineWidth = lw;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(tx, ty, dotR, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r},${g},${bv},${alpha.toFixed(3)})`;
    ctx.fill();
  }
}

function drawBackground(ctx: CanvasRenderingContext2D, W: number, H: number) {
  ctx.clearRect(0, 0, W, H);
}

export default function StarburstCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;
    let rays: Ray[] = [];
    let mouse = { x: -9999, y: -9999 };
    let rafId: number;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.scale(dpr, dpr);
      rays = Array.from({ length: NUM_RAYS }, () => new Ray(W, H));
    }

    function loop(ts: number) {
      rafId = requestAnimationFrame(loop);
      ctx!.clearRect(0, 0, W, H);
      drawBackground(ctx!, W, H);
      rays.forEach(r => r.draw(ctx!, ts, mouse));

      // Bloom over origin
      const ox = W * 0.5, oy = H - ORIGIN_FROM_BOTTOM;
      const bloom = ctx!.createRadialGradient(ox, oy, 0, ox, oy, 90);
      bloom.addColorStop(0,    'rgba(255, 220, 200, 1)');
      bloom.addColorStop(0.25, 'rgba(255, 210, 190, 0.92)');
      bloom.addColorStop(0.55, 'rgba(255, 200, 180, 0.45)');
      bloom.addColorStop(1,    'rgba(255, 200, 180, 0)');
      ctx!.fillStyle = bloom;
      ctx!.beginPath();
      ctx!.arc(ox, oy, 90, 0, Math.PI * 2);
      ctx!.fill();
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function onTouchMove(e: TouchEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse = { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    }
    function onTouchEnd() { mouse = { x: -9999, y: -9999 }; }

    resize();
    // Listen on the window (not the canvas) so the canvas can be
    // pointer-events:none and overflow upward without blocking the buttons it
    // overlaps. Touch is passive so page scrolling still works.
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  );
}
