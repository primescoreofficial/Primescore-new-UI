"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Bell,
  Settings,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  CreditCard,
  Building2,
  Gavel,
  Zap,
  CheckCircle2,
  Sliders,
  Table,
  Home,
  User,
  X
} from "lucide-react";

export interface BureauData {
  id: string;
  name: string;
  score: number;
  maxScore: number;
  rating: string;
  trend: string;
  accounts: number;
  active: number;
  hasDiscrepancy?: boolean;
  color: string;
  iconBg: string;
}

const BUREAUS: BureauData[] = [
  {
    id: "cibil",
    name: "TransUnion CIBIL",
    score: 743,
    maxScore: 900,
    rating: "Very Good",
    trend: "+12 pts",
    accounts: 16,
    active: 7,
    color: "#0284C7",
    iconBg: "bg-emerald-500"
  },
  {
    id: "crif",
    name: "CRIF High Mark",
    score: 757,
    maxScore: 900,
    rating: "Very Good",
    trend: "+8 pts",
    accounts: 16,
    active: 7,
    color: "#06B6D4",
    iconBg: "bg-blue-500"
  },
  {
    id: "experian",
    name: "Experian India",
    score: 770,
    maxScore: 900,
    rating: "1 Issue Found",
    trend: "Discrepancy",
    accounts: 15,
    active: 7,
    hasDiscrepancy: true,
    color: "#2563EB",
    iconBg: "bg-rose-500"
  },
  {
    id: "equifax",
    name: "Equifax India",
    score: 817,
    maxScore: 900,
    rating: "Tier 1 Excellent",
    trend: "+24 pts",
    accounts: 16,
    active: 7,
    color: "#10B981",
    iconBg: "bg-emerald-600"
  }
];

export default function PrimeScoreMobileApp() {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [isDisputeOpen, setIsDisputeOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const getDisplayScore = () => {
    const matched = BUREAUS.find((b) => b.id === activeTab);
    if (matched) {
      return { label: matched.name, score: matched.score };
    }
    return { label: "PrimeScore Composite", score: 771 };
  };

  const currentScore = getDisplayScore();

  return (
    <div className="relative mx-auto flex h-[890px] w-[416px] flex-col overflow-hidden rounded-[54px] bg-[#080D1A] font-sans text-slate-900 shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_0_12px_#1E293B]">
      {/* Dynamic Island */}
      <div className="absolute left-1/2 top-[10px] z-50 flex h-[32px] w-[124px] -translate-x-1/2 items-center justify-end rounded-full bg-black pr-3">
        <div className="h-[10px] w-[10px] rounded-full border border-[#1a2a40] bg-[#0c1829]" />
      </div>

      {/* Main Scrollable View */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-[#1882FF] pb-24 scrollbar-none">
        {/* Toast */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              className="absolute left-5 right-5 top-16 z-50 flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-xs font-semibold text-white shadow-xl"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 1. VIBRANT BLUE HEADER SECTION */}
        <div className="bg-gradient-to-b from-[#1882FF] to-[#157BF5] px-5 pb-6 pt-12 text-white">
          {/* iOS Status Row */}
          <div className="mb-4 flex items-center justify-between text-xs font-bold tracking-tight text-white/90">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <span>5G</span>
              <div className="h-2.5 w-5 rounded-sm border border-white/80 p-[1px]">
                <div className="h-full w-full bg-white" />
              </div>
            </div>
          </div>

          {/* User Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-extrabold text-slate-900 shadow-md">
                SS
              </div>
              <div className="text-lg font-bold tracking-tight text-white">
                Welcome, Sawai
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <button
                onClick={() => setIsDisputeOpen(true)}
                className="relative text-white active:scale-90"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border-2 border-[#1882FF] bg-red-500" />
              </button>
              <button
                onClick={() => showToast("KYC & Settings Verified")}
                className="text-white active:scale-90"
              >
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Segmented Pill Tabs */}
          <div className="mt-5 -mx-5 flex items-center gap-2 overflow-x-auto px-5 scrollbar-none">
            {["overview", "cibil", "crif", "experian", "equifax", "disputes"].map((tab) => {
              const isActive = activeTab === tab;
              const labels: Record<string, string> = {
                overview: "Overview",
                cibil: "CIBIL",
                crif: "CRIF High",
                experian: "Experian",
                equifax: "Equifax",
                disputes: "Disputes (4)"
              };

              return (
                <button
                  key={tab}
                  onClick={() => {
                    if (tab === "disputes") {
                      setIsDisputeOpen(true);
                    } else {
                      setActiveTab(tab);
                    }
                  }}
                  className={`relative rounded-full px-5 py-2 text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-white text-slate-900 shadow-lg"
                      : "bg-transparent text-white/85 hover:text-white"
                  }`}
                >
                  {labels[tab]}
                </button>
              );
            })}
          </div>

          {/* Center Hero Score */}
          <div className="mt-4 flex flex-col items-center justify-center text-center">
            <button
              onClick={() => showToast("Switching Bureau View")}
              className="flex items-center gap-1.5 text-xs font-semibold text-white/90"
            >
              <span>{currentScore.label}</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>

            <motion.div
              key={currentScore.score}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="mt-1 flex items-baseline gap-1.5 text-5xl font-extrabold tracking-tight"
            >
              <span>{currentScore.score}</span>
              <span className="text-lg font-semibold text-white/70">/ 900</span>
            </motion.div>

            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsDisputeOpen(true)}
              className="mt-2 flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md"
            >
              <Zap className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
              <span>+48 Pts Potential via Rectification</span>
            </motion.button>
          </div>
        </div>

        {/* 2. ROUNDED WHITE CARDS SECTION */}
        <div className="flex flex-1 flex-col gap-4 rounded-t-[32px] bg-slate-100 px-4 pt-5 pb-6 shadow-inner">
          {/* CARD 1: ALL 4 BUREAUS */}
          <div className="flex flex-col gap-4 rounded-[26px] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 text-sm font-bold text-slate-500">
                All 4 Credit Bureaus <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              </span>
              <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs font-bold text-blue-600">
                Live Synced
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {BUREAUS.map((b) => (
                <motion.div
                  key={b.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (b.hasDiscrepancy) {
                      setIsDisputeOpen(true);
                    } else {
                      setActiveTab(b.id);
                    }
                  }}
                  className="flex cursor-pointer items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-md ${b.iconBg}`}
                    >
                      {b.hasDiscrepancy ? (
                        <AlertTriangle className="h-5 w-5" />
                      ) : (
                        <ShieldCheck className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <div className="text-base font-bold text-slate-900">{b.name}</div>
                      <div
                        className={`text-xs font-medium ${
                          b.hasDiscrepancy ? "text-rose-600 font-semibold" : "text-slate-500"
                        }`}
                      >
                        {b.hasDiscrepancy ? "1 Account Missing (Rectify)" : `${b.accounts} Accounts • ${b.active} Active`}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div
                      className={`text-base font-extrabold ${
                        b.hasDiscrepancy ? "text-rose-600" : "text-slate-900"
                      }`}
                    >
                      {b.score}
                    </div>
                    <div
                      className={`flex items-center justify-end gap-0.5 text-xs font-bold ${
                        b.hasDiscrepancy ? "text-rose-600" : "text-emerald-600"
                      }`}
                    >
                      {!b.hasDiscrepancy && <TrendingUp className="h-3 w-3" />}
                      <span>{b.trend}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CARD 2: CARDS & LOANS BREAKDOWN */}
          <div className="flex flex-col gap-4 rounded-[26px] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 text-sm font-bold text-slate-500">
                Cards & Loans <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              </span>
              <span className="text-xs font-bold text-emerald-600">28% Utilized</span>
            </div>

            <div className="flex flex-col gap-4">
              <div
                onClick={() => showToast("HDFC Millennia Credit Card")}
                className="flex cursor-pointer items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-8 w-12 flex-col justify-between rounded-md bg-gradient-to-br from-sky-600 to-blue-800 p-1 text-[8px] font-extrabold text-white shadow-sm">
                    <span>HDFC</span>
                    <span>•••• 4492</span>
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900">HDFC Millennia</div>
                    <div className="text-xs font-medium text-slate-500">Limit ₹2,50,000</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-base font-extrabold text-slate-900">₹34,210</div>
                  <div className="text-xs font-bold text-emerald-600">All Clear</div>
                </div>
              </div>

              <div
                onClick={() => showToast("SBI Personal Loan")}
                className="flex cursor-pointer items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-8 w-12 flex-col justify-between rounded-md bg-gradient-to-br from-emerald-600 to-teal-900 p-1 text-[8px] font-extrabold text-white shadow-sm">
                    <span>SBI</span>
                    <span>LOAN</span>
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900">SBI Personal Loan</div>
                    <div className="text-xs font-medium text-slate-500">EMI: ₹9,400 / mo</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-base font-extrabold text-slate-900">₹1,12,000</div>
                  <div className="text-xs font-medium text-slate-500">On Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: 1-CLICK RECTIFICATION BANNER */}
          <div className="flex flex-col gap-2.5 rounded-[26px] border border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100/70 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 rounded-md bg-amber-500 px-2 py-0.5 text-[10px] font-extrabold text-amber-950 uppercase tracking-wide">
                <Gavel className="h-3 w-3" /> Prime Rectification
              </span>
              <span className="text-xs font-extrabold text-amber-900">4 Issues Found</span>
            </div>
            <div className="text-sm font-extrabold text-amber-900">
              HDFC Card Closed in CIBIL but Active in Experian
            </div>
            <p className="text-xs text-amber-800/90 leading-relaxed">
              This data error is suppressing your Experian score by ~35 points. File 1-click dispute with PrimeScore advocates now.
            </p>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsDisputeOpen(true)}
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-amber-600 py-2.5 text-xs font-bold text-white shadow-md hover:bg-amber-700"
            >
              <ShieldCheck className="h-4 w-4" /> Rectify All 4 Discrepancies →
            </motion.button>
          </div>
        </div>
      </div>

      {/* 3. NATIVE BOTTOM NAVIGATION */}
      <div className="absolute bottom-0 left-0 right-0 flex h-[78px] items-center justify-around border-t border-slate-200/80 bg-white/95 px-3 pb-3 backdrop-blur-lg">
        <button
          onClick={() => showToast("Dashboard Home")}
          className="flex flex-col items-center gap-1 text-[10px] font-bold text-blue-600"
        >
          <Home className="h-5 w-5" />
          <span>Home</span>
        </button>

        <button
          onClick={() => showToast("4-Bureau Matrix")}
          className="flex flex-col items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-slate-700"
        >
          <Table className="h-5 w-5" />
          <span>Bureaus</span>
        </button>

        <button
          onClick={() => setIsDisputeOpen(true)}
          className="relative flex flex-col items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-slate-700"
        >
          <Gavel className="h-5 w-5" />
          <span>Disputes</span>
          <span className="absolute -right-1.5 -top-1 rounded-full border border-white bg-red-500 px-1 py-[1px] text-[8px] font-extrabold text-white">
            4
          </span>
        </button>

        <button
          onClick={() => showToast("Score Simulator")}
          className="flex flex-col items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-slate-700"
        >
          <Sliders className="h-5 w-5" />
          <span>Simulator</span>
        </button>

        <button
          onClick={() => showToast("User Profile")}
          className="flex flex-col items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-slate-700"
        >
          <User className="h-5 w-5" />
          <span>Profile</span>
        </button>
      </div>

      {/* 4. DISPUTE BOTTOM SHEET */}
      <AnimatePresence>
        {isDisputeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-end bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full rounded-t-[32px] bg-white p-6 pb-8"
            >
              <div className="mx-auto mb-4 h-1.5 w-11 rounded-full bg-slate-300" />
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-base font-extrabold text-slate-900">
                  <Gavel className="h-5 w-5 text-amber-500" /> Credit Rectification Desk
                </h3>
                <button
                  onClick={() => setIsDisputeOpen(false)}
                  className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                PrimeScore advocates will file official dispute dossiers with Experian, CIBIL & CRIF on your behalf.
              </p>

              <div className="mt-4 flex flex-col gap-3">
                <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-3.5">
                  <div className="flex items-center justify-between">
                    <strong className="text-xs font-bold text-slate-900">
                      HDFC Credit Card Status Mismatch
                    </strong>
                    <span className="rounded bg-rose-100 px-1.5 py-0.5 text-[9px] font-extrabold text-rose-700">
                      HIGH
                    </span>
                  </div>
                  <div className="mt-1 text-[11px] text-slate-600">
                    Experian shows Active (₹42k), CIBIL shows Closed.
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-3.5">
                  <div className="flex items-center justify-between">
                    <strong className="text-xs font-bold text-slate-900">
                      Axis Two-Wheeler False DPD
                    </strong>
                    <span className="rounded bg-rose-100 px-1.5 py-0.5 text-[9px] font-extrabold text-rose-700">
                      HIGH
                    </span>
                  </div>
                  <div className="mt-1 text-[11px] text-slate-600">
                    False 30+ DPD reported in March 2024.
                  </div>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setIsDisputeOpen(false);
                  showToast("Dispute #PS-9921 Filed with Legal Advocates!");
                }}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-amber-600 py-3 text-xs font-bold text-white shadow-lg hover:bg-amber-700"
              >
                Submit Dispute to Prime Advocates →
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
