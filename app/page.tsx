"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import posthog from "posthog-js";
import StarburstCanvas from "@/components/Starburst";

type HoveredApp = "swipecardz" | "goldenloopz" | "braintunez" | "squirrelsafe" | "whitenoize" | "repz" | null;
type Platform = "ios" | "android" | "desktop";
type QrApp = "swipecardz" | "goldenloopz" | null;
type UpcomingAppId = "braintunez" | "squirrelsafe" | "whitenoize" | "repz";

const UPCOMING_APPS: { id: UpcomingAppId; name: string; icon: string; subtitle: string }[] = [
  { id: "braintunez", name: "Brain Tunez", icon: "/Focus-Icon.png", subtitle: "Timer + distraction-free music." },
  { id: "squirrelsafe", name: "Squirrel Safe", icon: "/Photo Vault - Icon.png", subtitle: "Private photo & video vault." },
  { id: "whitenoize", name: "White Noize", icon: "/Fan-icon.png", subtitle: "Calming noise & smart alarms." },
  { id: "repz", name: "Repz", icon: "/Muscle-Icon.png", subtitle: "Track sets, reps & weight." },
];

const APP_STORE_LINKS = {
  swipecardz: "https://apps.apple.com/us/app/swipecardz/id6755474814",
  goldenloopz: "https://apps.apple.com/us/app/golden-loopz-time-tracker/id6757961830",
};

const QR_IMAGES = {
  swipecardz: "/swipecardz_qr.svg",
  goldenloopz: "/goldenloopz_qr.svg",
};

const QR_LABELS = {
  swipecardz: "Swipe Cardz",
  goldenloopz: "Golden Loopz",
};

function AppIcon({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // A cached image can already be complete before onLoad fires, so check on mount.
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <div className="relative w-[120px] h-[120px] md:w-[180px] md:h-[180px]">
      {!loaded && (
        <div className="absolute inset-0 rounded-[22%] bg-gray-200 animate-heartbeat" />
      )}
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        width={180}
        height={180}
        priority={priority}
        onLoad={() => setLoaded(true)}
        className={`w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-[22%] shadow-lg pointer-events-none transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)" }}
      />
    </div>
  );
}

export default function Home() {
  const [hoveredApp, setHoveredApp] = useState<HoveredApp>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [platform, setPlatform] = useState<Platform>("desktop");
  const [qrModal, setQrModal] = useState<QrApp>(null);
  const [notifyModal, setNotifyModal] = useState<UpcomingAppId | null>(null);
  const [selectedApps, setSelectedApps] = useState<Set<UpcomingAppId>>(new Set());
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyPhone, setNotifyPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [notifyError, setNotifyError] = useState("");

  const openNotifyModal = (appId: UpcomingAppId) => {
    posthog.capture("get_notified_click", { app: appId, page: "homepage" });
    setSelectedApps(new Set([appId]));
    setNotifyEmail("");
    setNotifyPhone("");
    setSubmitted(false);
    setNotifyError("");
    setNotifyModal(appId);
  };

  const toggleApp = (appId: UpcomingAppId) => {
    setSelectedApps((prev) => {
      const next = new Set(prev);
      if (next.has(appId)) {
        next.delete(appId);
      } else {
        next.add(appId);
      }
      return next;
    });
  };

  const handleNotifySubmit = async () => {
    if (!notifyEmail && !notifyPhone) {
      setNotifyError("Please enter an email or phone number.");
      return;
    }
    if (selectedApps.size === 0) {
      setNotifyError("Please select at least one app.");
      return;
    }
    setNotifyError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: notifyEmail || undefined,
          phone: notifyPhone || undefined,
          apps: Array.from(selectedApps),
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setNotifyError(data.error || "Something went wrong.");
      } else {
        setSubmitted(true);
        setTimeout(() => setNotifyModal(null), 2000);
      }
    } catch {
      setNotifyError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotifyPhone(formatPhone(e.target.value));
  };

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) {
      setPlatform("ios");
    } else if (/Android/.test(ua)) {
      setPlatform("android");
    }
  }, []);


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const maxTilt = 15;
    const tiltX = (mouseY / (rect.height / 2)) * maxTilt;
    const tiltY = (mouseX / (rect.width / 2)) * -maxTilt;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setHoveredApp(null);
    setTilt({ x: 0, y: 0 });
  };

  const appleIcon = (
    <svg className="w-3.5 h-3.5" viewBox="0 0 384 512" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-62.1 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );

  const renderAppStoreCta = (app: "swipecardz" | "goldenloopz") => {
    if (platform === "ios") {
      return (
        <a
          href={APP_STORE_LINKS[app]}
          className="text-xs px-3 py-1.5 text-white rounded-full font-medium transition-colors inline-flex items-center gap-1.5"
          style={{ backgroundColor: "#635BFF" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5249E6")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#635BFF")}
          onClick={() => posthog.capture("app_store_click", { app, page: "homepage", platform })}
        >
          {appleIcon}
          App Store
        </a>
      );
    }
    if (platform === "android") {
      return (
        <p className="text-[11px] text-gray-400 text-center">
          iOS only — Google Play coming soon!
        </p>
      );
    }
    return (
      <button
        className="text-xs px-3 py-1.5 text-white rounded-full font-medium transition-colors cursor-pointer inline-flex items-center gap-1.5"
        style={{ backgroundColor: "#635BFF" }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5249E6")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#635BFF")}
        onClick={() => { posthog.capture("app_store_click", { app, page: "homepage", platform }); setQrModal(app); }}
      >
        {appleIcon}
        App Store
      </button>
    );
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background — Stripe-inspired drifting gradient mesh */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f6f9fc] to-[#e9ecef]" />
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
          style={{
            background: "radial-gradient(circle, #635BFF, transparent 70%)",
            top: "-10%",
            left: "-10%",
            animation: "drift1 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-35"
          style={{
            background: "radial-gradient(circle, #80E9FF, transparent 70%)",
            top: "10%",
            right: "5%",
            animation: "drift2 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[550px] h-[550px] rounded-full blur-[120px] opacity-30"
          style={{
            background: "radial-gradient(circle, #FF80B5, transparent 70%)",
            bottom: "5%",
            left: "15%",
            animation: "drift3 16s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[450px] h-[450px] rounded-full blur-[100px] opacity-30"
          style={{
            background: "radial-gradient(circle, #0ACF83, transparent 70%)",
            top: "40%",
            left: "40%",
            animation: "drift1 20s ease-in-out infinite reverse",
          }}
        />
        <style>{`
          @keyframes drift1 {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(100px, 60px); }
            50% { transform: translate(-50px, 120px); }
            75% { transform: translate(70px, -40px); }
          }
          @keyframes drift2 {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(-80px, 50px); }
            50% { transform: translate(60px, -70px); }
            75% { transform: translate(-40px, 90px); }
          }
          @keyframes drift3 {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(50px, -80px); }
            50% { transform: translate(-90px, 40px); }
            75% { transform: translate(40px, 70px); }
          }
        `}</style>
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 py-3 md:px-8 md:py-6 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-1.5">
          <span className="text-lg md:text-xl text-gray-900 tracking-tight">
            <span className="font-bold">plymouth</span>{" "}
            <span className="font-light">app labs</span>
          </span>
        </Link>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center px-6 py-8 md:px-8 md:py-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight text-center mb-2">
          Premium utility apps<br /> without monthly fees.
        </h2>
        <p className="text-base md:text-lg text-gray-500 text-center mb-8 md:mb-12">
          High quality design & usability without subscriptions.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-[700px] justify-items-center">
          {/* SwipeCardz */}
          <div className="flex flex-col items-center gap-2 relative">
            <div
              className="relative transition-transform duration-100 ease-out"
              onMouseEnter={() => setHoveredApp("swipecardz")}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform:
                  hoveredApp === "swipecardz"
                    ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.05)`
                    : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
              }}
            >
              <AppIcon src="/swipecardz.png" alt="SwipeCardz" priority />
            </div>
            <h2 className="text-[15px] font-normal text-gray-900 tracking-tight mt-1 text-center max-w-[120px] md:max-w-[180px]">
              Swipe Cardz
            </h2>
            <p className="text-xs text-gray-400 text-center max-w-[120px] md:max-w-[180px] leading-snug">
              Simple, swipeable study.
            </p>
            {renderAppStoreCta("swipecardz")}
          </div>

          {/* Golden Loopz */}
          <div className="flex flex-col items-center gap-2 relative">
            <div
              className="relative transition-transform duration-100 ease-out"
              onMouseEnter={() => setHoveredApp("goldenloopz")}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform:
                  hoveredApp === "goldenloopz"
                    ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.05)`
                    : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
              }}
            >
              <AppIcon src="/goldenloopzicon.png" alt="Golden Loopz" priority />
            </div>
            <h2 className="text-[15px] font-normal text-gray-900 tracking-tight mt-1 text-center max-w-[120px] md:max-w-[180px]">
              Golden Loopz
            </h2>
            <p className="text-xs text-gray-400 text-center max-w-[120px] md:max-w-[180px] leading-snug">
              Daily habits for builders.
            </p>
            {renderAppStoreCta("goldenloopz")}
          </div>

          {/* Brain Tunez */}
          <div className="flex flex-col items-center gap-2 relative">
            <div
              className="relative transition-transform duration-100 ease-out"
              onMouseEnter={() => setHoveredApp("braintunez")}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform:
                  hoveredApp === "braintunez"
                    ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.05)`
                    : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
              }}
            >
              <AppIcon src="/Focus-Icon.png" alt="Brain Tunez" />
            </div>
            <h2 className="text-[15px] font-normal text-gray-900 tracking-tight mt-1 text-center max-w-[120px] md:max-w-[180px]">
              Brain Tunez
            </h2>
            <p className="text-xs text-gray-400 text-center max-w-[120px] md:max-w-[180px] leading-snug">
              Timer + distraction-free music.
            </p>
            <button
              className="text-xs px-3 py-1.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors cursor-pointer inline-flex items-center gap-1.5"
              onClick={() => openNotifyModal("braintunez")}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              Get Notified
            </button>
          </div>

          {/* SquirrelSafe */}
          <div className="flex flex-col items-center gap-2 relative">
            <div
              className="relative transition-transform duration-100 ease-out"
              onMouseEnter={() => setHoveredApp("squirrelsafe")}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform:
                  hoveredApp === "squirrelsafe"
                    ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.05)`
                    : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
              }}
            >
              <AppIcon src="/Photo Vault - Icon.png" alt="SquirrelSafe" />
            </div>
            <h2 className="text-[15px] font-normal text-gray-900 tracking-tight mt-1 text-center max-w-[120px] md:max-w-[180px]">
              Squirrel Safe
            </h2>
            <p className="text-xs text-gray-400 text-center max-w-[120px] md:max-w-[180px] leading-snug">
              Private photo & video vault.
            </p>
            <button
              className="text-xs px-3 py-1.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors cursor-pointer inline-flex items-center gap-1.5"
              onClick={() => openNotifyModal("squirrelsafe")}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              Get Notified
            </button>
          </div>

          {/* WhiteNoize */}
          <div className="flex flex-col items-center gap-2 relative">
            <div
              className="relative transition-transform duration-100 ease-out"
              onMouseEnter={() => setHoveredApp("whitenoize")}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform:
                  hoveredApp === "whitenoize"
                    ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.05)`
                    : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
              }}
            >
              <AppIcon src="/Fan-icon.png" alt="WhiteNoize" />
            </div>
            <h2 className="text-[15px] font-normal text-gray-900 tracking-tight mt-1 text-center max-w-[120px] md:max-w-[180px]">
              White Noize
            </h2>
            <p className="text-xs text-gray-400 text-center max-w-[120px] md:max-w-[180px] leading-snug">
              Calming noise & smart alarms.
            </p>
            <button
              className="text-xs px-3 py-1.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors cursor-pointer inline-flex items-center gap-1.5"
              onClick={() => openNotifyModal("whitenoize")}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              Get Notified
            </button>
          </div>

          {/* Repz */}
          <div className="flex flex-col items-center gap-2 relative">
            <div
              className="relative transition-transform duration-100 ease-out"
              onMouseEnter={() => setHoveredApp("repz")}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform:
                  hoveredApp === "repz"
                    ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.05)`
                    : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
              }}
            >
              <AppIcon src="/Muscle-Icon.png" alt="Repz" />
            </div>
            <h2 className="text-[15px] font-normal text-gray-900 tracking-tight mt-1 text-center max-w-[120px] md:max-w-[180px]">
              Repz
            </h2>
            <p className="text-xs text-gray-400 text-center max-w-[120px] md:max-w-[180px] leading-snug">
              Track sets, reps & weight.
            </p>
            <button
              className="text-xs px-3 py-1.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors cursor-pointer inline-flex items-center gap-1.5"
              onClick={() => openNotifyModal("repz")}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              Get Notified
            </button>
          </div>
        </div>
      </main>

      {/* Starburst + Mascot */}
      <section className="relative z-10 w-full h-[300px] md:h-[380px] mb-24 md:mb-32 overflow-visible">
        {/* Canvas is bottom-anchored and a bit taller than the section so the
            burst gets headroom and overflows upward instead of being clipped.
            The canvas itself is pointer-events:none, so the overflow is harmless. */}
        <div className="absolute inset-x-0 bottom-0 h-[420px] md:h-[560px] pointer-events-none">
          <StarburstCanvas />
        </div>
        <div className="absolute inset-0 flex flex-col items-center pointer-events-none" style={{ top: '77%', transform: 'translateY(-50%)' }}>
          <Image
            src="/PlymouthMascot.png"
            alt="Plym — Plymouth App Labs mascot"
            width={200}
            height={140}
            className="w-48 md:w-64 h-auto mb-2 pointer-events-auto"
          />
          <p className="text-xs text-gray-400 text-center pointer-events-auto">
            Meet Plym, our mascot.
          </p>
        </div>
      </section>

      {/* QR Code Modal */}
      {qrModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setQrModal(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-4 max-w-xs w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {QR_LABELS[qrModal]}
            </h3>
            <p className="text-sm text-gray-500 text-center">
              Scan to download from the App Store
            </p>
            <Image
              src={QR_IMAGES[qrModal]}
              alt={`${QR_LABELS[qrModal]} QR Code`}
              width={200}
              height={200}
              className="w-[200px] h-[200px]"
            />
            <button
              className="mt-2 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm cursor-pointer"
              onClick={() => setQrModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Notify Modal */}
      {notifyModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setNotifyModal(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-4 max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {submitted ? (
              <>
                <h3 className="text-lg font-semibold text-gray-900">
                  You&apos;re on the list!
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  We&apos;ll notify you when your selected apps launch.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-gray-900">
                  Get notified at launch
                </h3>
                <div className="grid grid-cols-2 gap-3 w-full">
                  {UPCOMING_APPS.map((app) => (
                    <button
                      key={app.id}
                      type="button"
                      className={`relative flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-colors cursor-pointer ${
                        selectedApps.has(app.id)
                          ? "border-green-500 bg-green-50/50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => toggleApp(app.id)}
                    >
                      {selectedApps.has(app.id) && (
                        <span className="absolute top-1.5 right-1.5 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      )}
                      <Image
                        src={app.icon}
                        alt={app.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-[22%]"
                      />
                      <span className="text-xs font-medium text-gray-700">
                        {app.name}
                      </span>
                      <span className="text-[10px] text-gray-400 leading-tight text-center">
                        {app.subtitle}
                      </span>
                    </button>
                  ))}
                </div>
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="Phone (optional)"
                  value={notifyPhone}
                  onChange={handlePhoneChange}
                  maxLength={12}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                <p className="text-[11px] text-gray-400 text-center">
                  Enter an email or phone number (or both)
                </p>
                {notifyError && (
                  <p className="text-xs text-red-500 text-center">{notifyError}</p>
                )}
                <button
                  className="w-full px-4 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleNotifySubmit}
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Notify Me"}
                </button>
                <button
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm cursor-pointer"
                  onClick={() => setNotifyModal(null)}
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 mt-4 border-t border-gray-100 px-8 py-8">
        <div className="max-w-[700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Plymouth App Labs, a Jitterliss, Inc. company. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-gray-600 transition-colors">
              Terms & Support
            </Link>
            <a href="mailto:support@plymouthapplabs.com" className="hover:text-gray-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
