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

  return (
    <main className="min-h-screen w-full bg-[#F8FAFC]">
      {isMobileScreen ? (
        <PrimeScoreMobileApp isStandalone={true} />
      ) : (
        <PrimeScoreDesktopApp />
      )}
    </main>
  );
}
