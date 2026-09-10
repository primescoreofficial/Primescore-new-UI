"use client";

import React, { useState, useEffect } from "react";
import PrimeScoreMobileApp from "@/components/PrimeScoreMobileApp";
import PrimeScoreDesktopApp from "@/components/PrimeScoreDesktopApp";
import { Smartphone, Monitor } from "lucide-react";

export default function HomePage() {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(true);
  const [userOverride, setUserOverride] = useState<"auto" | "phone" | "desktop">("auto");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen w-full bg-[#F8FAFC]" />;
  }

  const effectiveView = userOverride === "auto" ? (isMobileScreen ? "phone" : "desktop") : userOverride;

  return (
    <main className="min-h-screen w-full bg-[#F8FAFC]">
      {/* On Mobile Screens: Fullscreen Mobile App */}
      {effectiveView === "phone" && (
        <div className="min-h-screen w-full">
          {/* Floating Dev Mode Switcher on Desktop when previewing Phone */}
          {!isMobileScreen && (
            <div className="fixed top-3 right-3 z-50 flex items-center gap-1.5 rounded-full bg-slate-900/85 backdrop-blur-md px-3 py-1.5 text-xs text-white shadow-xl border border-slate-700">
              <span className="text-[10px] text-slate-400 font-bold">Preview:</span>
              <button
                onClick={() => setUserOverride("desktop")}
                className="flex items-center gap-1 text-[11px] font-bold text-blue-400 hover:text-white"
              >
                <Monitor className="h-3.5 w-3.5" /> Switch to Desktop Dashboard
              </button>
            </div>
          )}
          <PrimeScoreMobileApp isStandalone={true} />
        </div>
      )}

      {/* On Desktop Screens: Full Widescreen Desktop App */}
      {effectiveView === "desktop" && (
        <div className="min-h-screen w-full">
          {/* Floating Dev Mode Switcher on Desktop */}
          <div className="fixed top-3 right-5 z-50 flex items-center gap-2 rounded-full bg-slate-900/85 backdrop-blur-md px-3 py-1.5 text-xs text-white shadow-xl border border-slate-700">
            <span className="text-[10px] text-slate-400 font-bold">View:</span>
            <button
              onClick={() => setUserOverride(userOverride === "phone" ? "desktop" : "phone")}
              className="flex items-center gap-1 text-[11px] font-bold text-blue-400 hover:text-white"
            >
              <Smartphone className="h-3.5 w-3.5" /> Switch to Mobile View
            </button>
          </div>
          <PrimeScoreDesktopApp />
        </div>
      )}
    </main>
  );
}
