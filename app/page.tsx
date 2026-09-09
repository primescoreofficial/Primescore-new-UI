"use client";

import React, { useState } from "react";
import PrimeScoreMobileApp from "@/components/PrimeScoreMobileApp";
import PrimeScoreDesktopApp from "@/components/PrimeScoreDesktopApp";
import { Smartphone, Monitor, Maximize2, Sparkles } from "lucide-react";

export default function HomePage() {
  const [viewMode, setViewMode] = useState<"phone" | "phone-full" | "desktop">("phone");

  return (
    <main className="min-h-screen w-full bg-[#080D1A] text-white">
      {/* Top Floating View Switcher Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-800/80 bg-slate-950/80 px-6 py-3.5 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-extrabold text-white">
            P
          </div>
          <div>
            <div className="text-sm font-extrabold tracking-tight">
              Prime<span className="text-blue-500">Score</span> Live Interactive Suite
            </div>
            <div className="text-[10px] text-slate-400 font-semibold">
              4-Bureau Fintech Experience
            </div>
          </div>
        </div>

        {/* View Switcher Pills */}
        <div className="flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/90 p-1">
          <button
            onClick={() => setViewMode("phone")}
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              viewMode === "phone"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone className="h-3.5 w-3.5" />
            <span>iPhone 16 View</span>
          </button>

          <button
            onClick={() => setViewMode("phone-full")}
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              viewMode === "phone-full"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Maximize2 className="h-3.5 w-3.5" />
            <span>Mobile Fullscreen</span>
          </button>

          <button
            onClick={() => setViewMode("desktop")}
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              viewMode === "desktop"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Monitor className="h-3.5 w-3.5" />
            <span>Desktop Dashboard</span>
          </button>
        </div>
      </div>

      {/* Main View Area */}
      <div className="flex items-center justify-center p-4 md:p-8">
        {viewMode === "phone" && (
          <div className="py-4">
            <PrimeScoreMobileApp isStandalone={false} />
          </div>
        )}

        {viewMode === "phone-full" && (
          <div className="w-full max-w-md mx-auto">
            <PrimeScoreMobileApp isStandalone={true} />
          </div>
        )}

        {viewMode === "desktop" && (
          <div className="w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <PrimeScoreDesktopApp />
          </div>
        )}
      </div>
    </main>
  );
}
