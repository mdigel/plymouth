"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const gradientRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const gradient = gradientRef.current;
    if (!gradient) return;

    let position = 0;
    const animate = () => {
      position += 0.5;
      gradient.style.backgroundPosition = `${position}% 50%`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate tilt (max 15 degrees)
    const maxTilt = 15;
    const tiltX = (mouseY / (rect.height / 2)) * maxTilt;
    const tiltY = (mouseX / (rect.width / 2)) * -maxTilt;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleImageClick = () => {
    setShowModal((prev) => !prev);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Animated soft gradient */}
        <div
          ref={gradientRef}
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "linear-gradient(120deg, #f9fafb 0%, #eef2ff 25%, #fdf2ff 50%, #e0f2fe 75%, #f9fafb 100%)",
            backgroundSize: "200% 200%",
          }}
        />

        {/* Glow blobs */}
        <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-sky-100 via-indigo-100 to-purple-100 blur-3xl opacity-80" />
        <div className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-gradient-to-tr from-amber-100 via-rose-100 to-pink-100 blur-3xl opacity-80" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>
      
      {/* Header */}
      <header className="relative z-10 px-8 py-6">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
          plymouth app labs
        </h1>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-8 py-16">
        <div className="flex flex-col items-center gap-2 relative">
          {/* Dialog Box */}
          {showModal && (
            <div className="absolute bottom-full mb-4 z-50">
              <div
                className="bg-white rounded-xl shadow-2xl p-4 w-48 border border-gray-200"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col gap-2">
                  <Link
                    href="/swipecardz/support"
                    className="w-full px-4 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-center text-sm"
                    onClick={handleCloseModal}
                  >
                    Support
                  </Link>
                  <Link
                    href="/swipecardz/privacy-policy"
                    className="w-full px-4 py-2.5 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center text-sm"
                    onClick={handleCloseModal}
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          )}
          
          {/* App Icon */}
          <div
            ref={imageRef}
            className="relative cursor-pointer transition-transform duration-100 ease-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleImageClick}
            style={{
              transform: isHovered
                ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.05)`
                : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
            }}
          >
            <Image
              src="/swipecardz.png"
              alt="SwipeCardz"
              width={180}
              height={180}
              priority
              className="w-[180px] h-[180px] rounded-[22%] shadow-lg pointer-events-none"
              style={{
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              }}
            />
          </div>
          {/* App Name Label */}
          <h2 className="text-[15px] font-normal text-gray-900 tracking-tight mt-1 text-center max-w-[180px]">
            SwipeCardz
          </h2>
        </div>
      </main>
    </div>
  );
}
