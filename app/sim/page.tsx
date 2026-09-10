"use client";

import React, { useState, useEffect } from "react";
import PrimeScoreMobileApp from "@/components/PrimeScoreMobileApp";
import PrimeScoreDesktopApp from "@/components/PrimeScoreDesktopApp";

export default function SimulatorPage() {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen w-full bg-[#F8FAFC]" />;
  }

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC]">
      {isMobile ? (
        <PrimeScoreMobileApp isStandalone={true} initialTab="simulator" />
      ) : (
        <PrimeScoreDesktopApp initialNav="simulator" />
      )}
    </div>
  );
}
