"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Bell,
  Settings,
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
  X,
  FileDown,
  RefreshCw,
  Crown,
  Share2,
  PhoneCall,
  Sparkles,
  ArrowRight,
  PieChart,
  Search,
  Filter,
  Check,
  Calendar,
  Clock,
  ArrowUpRight,
  HelpCircle,
  UploadCloud,
  FileText,
  BadgeCheck,
  Info,
  Eye,
  Mic,
  Send,
  Paperclip,
  Bot,
  Gauge,
  Layers,
  Activity,
  History,
  Scale,
  Maximize2,
  ChevronRight,
  ChevronDown,
  CheckCircle,
  XCircle,
  PlusCircle,
  ExternalLink
} from "lucide-react";

export default function PrimeScoreDesktopApp() {
  const [activeNav, setActiveNav] = useState<string>("dashboard");
  const [isDisputeModalOpen, setIsDisputeModalOpen] = useState<boolean>(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
  const [disputePrefill, setDisputePrefill] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [matrixFilter, setMatrixFilter] = useState<"all" | "discrepancies" | "cards" | "loans">("discrepancies");
  const [chartBureau, setChartBureau] = useState<"composite" | "cibil" | "crif" | "experian" | "equifax">("composite");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [simPaydown, setSimPaydown] = useState<number>(45000);
  const [simFixDisputes, setSimFixDisputes] = useState<boolean>(true);
  const [simCloseLoan, setSimCloseLoan] = useState<boolean>(false);
  const [simNoInquiries, setSimNoInquiries] = useState<boolean>(true);

  const [parthInput, setParthInput] = useState<string>("");
  const [isParthOpen, setIsParthOpen] = useState<boolean>(false);
  const [isParthLoading, setIsParthLoading] = useState<boolean>(false);
  const [parthMessages, setParthMessages] = useState<Array<{ sender: "user" | "parth"; text: string; actionText?: string; actionType?: string }>>([
    {
      sender: "parth",
      text: "Hello Sawai! I'm Parth, your desktop AI Credit Intelligence Copilot. I've analyzed your 4-bureau records (Composite: 771). You have 4 fixable discrepancies that can recover +48 points. What would you like to inspect today?"
    }
  ]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [activeNav]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    showToast("Synchronizing live credit records across CIBIL, CRIF, Experian & Equifax...");
    setTimeout(() => {
      setIsRefreshing(false);
      showToast("All 4 credit bureaus synchronized with latest RBI data feeds!");
    }, 1200);
  };

  const openDispute = (title?: string) => {
    if (title) setDisputePrefill(title);
    setIsNotificationOpen(false);
    setIsDisputeModalOpen(true);
  };

  const calculateSimScore = () => {
    let base = 771;
    if (simFixDisputes) base += 48;
    base += Math.round((simPaydown / 150000) * 32);
    if (simCloseLoan) base += 14;
    if (simNoInquiries) base += 8;
    return Math.min(base, 900);
  };

  const simulatedScore = calculateSimScore();

  const askParth = (query: string) => {
    if (!query.trim()) return;
    const userMsg = query.trim();
    setParthInput("");
    setIsParthLoading(true);

    setParthMessages((prev) => [...prev, { sender: "user", text: userMsg }]);

    setTimeout(() => {
      let reply = "";
      let actionText: string | undefined;
      let actionType: string | undefined;

      const lower = userMsg.toLowerCase();
      if (lower.includes("800") || lower.includes("score")) {
        reply = "Aapka current PrimeScore 771 hai. 800+ target reach karne ke liye:\n1. Experian me HDFC card mismatch rectify kijiye (+35 pts)\n2. Credit card utilization 28% se 14% drop kijiye (+18 pts)\n3. 90 days tak koi nayi hard inquiry avoid kijiye (+8 pts).\nProjected Composite Score: 832/900!";
        actionText = "Open Rectification Desk";
        actionType = "dispute";
      } else if (lower.includes("loan") || lower.includes("approval") || lower.includes("interest")) {
        reply = "Aapka overall risk grade 'Low' hai with 100% on-time payment track record. SBI Personal loan active hai bina kisi DPD ke. HDFC mismatch rectify hone ke baad aapko HDFC aur ICICI se pre-approved personal loans lowest interest rate (10.25% p.a.) par milenge.";
        actionText = "Simulate Debt Paydown";
        actionType = "simulator";
      } else if (lower.includes("dispute") || lower.includes("cibil") || lower.includes("rectify")) {
        reply = "PrimeScore ne aapke portfolio me 4 discrepancies detect ki hain. Sabse critical HDFC card status mismatch hai jo CIBIL me closed hai par Experian me active dikh raha hai. Prime advocates iska legal bureau dossier 14-21 days me resolve kar dete hain.";
        actionText = "File 1-Click Bureau Notice";
        actionType = "dispute";
      } else {
        reply = `Sawai, aapke 4-bureau dossier ke basis par: CIBIL 743, CRIF 757, Experian 770*, Equifax 817. Payment history 100% on-time hai aur credit age 4.8 years hai. "${userMsg}" ke bare me detailed insights generate ho chuke hain.`;
        actionText = "Run Score Simulation";
        actionType = "simulator";
      }

      setParthMessages((prev) => [
        ...prev,
        {
          sender: "parth",
          text: reply,
          actionText,
          actionType
        }
      ]);
      setIsParthLoading(false);
    }, 700);
  };


  return (
    <div className="flex min-h-screen w-full bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl bg-slate-900 px-5 py-3.5 text-xs font-bold text-white shadow-2xl border border-slate-800"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
           LEFT NAVIGATION DOCK (DESKTOP)
           ========================================================= */}
      <aside className="fixed bottom-0 left-0 top-0 flex w-72 flex-col border-r border-slate-200/80 bg-white p-5 z-30 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        {/* Brand Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#1882FF] via-[#1474E8] to-[#0D62C9] text-white shadow-lg shadow-blue-500/20">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-slate-900">
                  Prime<span className="text-[#1882FF]">Score</span>
                </span>
                <span className="rounded-md bg-blue-50 border border-blue-200/60 px-1.5 py-0.5 text-[9px] font-black text-[#1882FF]">
                  DESK
                </span>
              </div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                4-Bureau Intelligence
              </div>
            </div>
          </div>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-extrabold text-emerald-700 border border-emerald-200">
            PRO
          </span>
        </div>

        {/* Navigation Core Engine */}
        <div className="mt-5 text-[10px] font-black uppercase tracking-widest text-slate-400 px-3">
          Intelligence Modules
        </div>
        <nav className="mt-2 flex flex-col gap-1">
          {[
            { id: "dashboard", label: "Command Center", icon: Home, desc: "Overview & Multi-Bureau Score" },
            { id: "matrix", label: "4-Bureau Deep Matrix", icon: Table, desc: "Side-by-side bureau audit", badge: "Live", badgeColor: "bg-blue-50 text-blue-700 border border-blue-200/60" },
            { id: "accounts", label: "Accounts & Credit Mix", icon: CreditCard, desc: "16 credit lines & cards" },
            { id: "disputes", label: "Rectification Kanban Desk", icon: Gavel, desc: "Legal dispute desk", badge: "4 Fixable", badgeColor: "bg-amber-50 text-amber-800 border border-amber-200" },
            { id: "simulator", label: "Score Simulator", icon: Sliders, desc: "Forecast 800+ score trajectory" },
            { id: "enquiries", label: "Enquiry Audit Radar", icon: Eye, desc: "Hard inquiry monitoring" },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`group relative flex items-center gap-3 rounded-2xl px-3.5 py-3 text-left transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#1882FF] text-white shadow-md shadow-blue-500/25 font-bold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-semibold"
                }`}
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors shrink-0 ${
                  isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500 group-hover:text-slate-800"
                }`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold truncate">{item.label}</span>
                  {item.badge && (
                    <span className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-extrabold ${
                      isActive ? "bg-white/25 text-white" : item.badgeColor
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </nav>

        {/* User Profile Bar Dock Bottom */}
        <div className="mt-auto border-t border-slate-100 pt-4">
          <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 border border-slate-100">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 font-black text-xs text-white shadow-sm">
              SS
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="truncate text-xs font-black text-slate-900">SAWAI SHARMA</div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-amber-600">
                <Crown className="h-3 w-3 fill-amber-500 text-amber-500" /> Tier-1 Prime Member
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* =========================================================
           MAIN DESKTOP WORKSPACE (WIDESCREEN MULTI-PANEL)
           ========================================================= */}
      <main className="ml-72 flex-1 pb-16 min-w-0">
        {/* Top Desktop App Bar */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200/80 bg-white/95 px-8 backdrop-blur-md">
          {/* Global Search & Command Bar */}
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="flex items-center gap-2.5 rounded-full bg-slate-100/90 px-4 py-2 text-xs text-slate-500 w-full border border-slate-200/70">
              <Search className="h-4 w-4 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Search across all 16 bureau accounts, lenders (HDFC, SBI, Axis), or DPD tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xs font-medium text-slate-800 placeholder-slate-400 outline-none"
              />
              <kbd className="hidden sm:inline-block rounded bg-white px-1.5 py-0.5 text-[9px] font-extrabold text-slate-400 shadow-sm border border-slate-200">
                ⌘K
              </kbd>
            </div>
          </div>

          {/* Right Action Icons & Utilities */}
          <div className="flex items-center gap-3.5">
            <div className="hidden lg:flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs">
              <span className="font-bold text-slate-400">PAN</span>
              <span className="font-mono font-extrabold text-slate-800">KMMPS••••R</span>
            </div>

            <button
              onClick={handleRefresh}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin text-blue-600" : "text-slate-500"}`} />
              <span className="hidden sm:inline">Sync Bureaus</span>
            </button>

            {/* Notification Bell with Animated Tray */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="relative rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
                title="Notifications"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              </button>

              <AnimatePresence>
                {isNotificationOpen && (
                  <>
                    <div onClick={() => setIsNotificationOpen(false)} className="fixed inset-0 z-40" />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 5 }}
                      style={{ transformOrigin: "top right" }}
                      className="absolute right-0 top-12 z-50 w-84 rounded-3xl bg-white p-4 text-slate-900 shadow-2xl border border-slate-200/80"
                    >
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                        <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
                          <span>Discrepancy Alerts</span>
                          <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[9px] font-extrabold text-rose-700">3 Pending</span>
                        </div>
                        <button
                          onClick={() => {
                            showToast("All marked as read");
                            setIsNotificationOpen(false);
                          }}
                          className="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer"
                        >
                          Mark read
                        </button>
                      </div>

                      <div className="mt-3 flex flex-col gap-2.5 max-h-80 overflow-y-auto">
                        <div
                          onClick={() => openDispute("HDFC Status Mismatch")}
                          className="flex cursor-pointer gap-3 rounded-2xl bg-amber-50/70 p-3 hover:bg-amber-100/60 transition-colors border border-amber-200/60"
                        >
                          <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-xs font-bold text-slate-900 block">HDFC Card Status Mismatch</strong>
                            <p className="text-[11px] text-slate-600 mt-0.5">Experian shows Active (₹42k), CIBIL shows Closed.</p>
                            <span className="text-[10px] font-extrabold text-amber-700 mt-1 block">Rectify Dispute →</span>
                          </div>
                        </div>

                        <div
                          onClick={() => {
                            showToast("Equifax Score Jumped to 817 (Tier 1 Excellent)");
                            setIsNotificationOpen(false);
                          }}
                          className="flex cursor-pointer gap-3 rounded-2xl bg-slate-50 p-3 hover:bg-slate-100 transition-colors border border-slate-100"
                        >
                          <TrendingUp className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-xs font-bold text-slate-900 block">Equifax Score Jump (+24 Pts)</strong>
                            <p className="text-[11px] text-slate-600 mt-0.5">Equifax score updated to 817 (Tier 1 Excellent).</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Settings Gear Button */}
            <button
              onClick={() => showToast("Opening Prime KYC & Account Settings")}
              className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
              title="Settings & Profile"
            >
              <Settings className="h-4 w-4" />
            </button>

            {/* Download Report Button */}
            <button
              onClick={() => showToast("Generating Consolidated 4-Bureau Official Audit PDF...")}
              className="flex items-center gap-2 rounded-xl bg-[#1882FF] px-4 py-2 text-xs font-extrabold text-white shadow-md hover:bg-blue-600 transition-colors cursor-pointer"
            >
              <FileDown className="h-3.5 w-3.5" />
              <span>Download 4-Bureau Dossier</span>
            </button>
          </div>
        </header>

        {/* Dynamic Desktop Workspace Area */}
        <div className="mx-auto max-w-[1600px] px-8 pt-6 flex flex-col gap-6">

          {/* =========================================================
               TAB 1: DESKTOP COMMAND CENTER (3-COLUMN MODULAR GRID)
               ========================================================= */}
          {activeNav === "dashboard" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6">
              
              {/* TOP WIDESCREEN COMMAND STRIP */}
              <div className="grid grid-cols-12 gap-5 items-stretch">
                
                {/* 1. HERO SCORE CARD (5 Cols - Original Clean Version) */}
                <div className="col-span-12 lg:col-span-5 rounded-[32px] bg-gradient-to-br from-[#1882FF] via-[#1474E8] to-[#0D62C9] p-7 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
                  <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
                  
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-extrabold backdrop-blur-md">
                        <Gauge className="h-3.5 w-3.5" /> PrimeScore Composite
                      </div>
                      <span className="rounded-full bg-white/20 border border-white/30 px-2.5 py-0.5 text-[10px] font-extrabold text-white">
                        Tier-1 Prime
                      </span>
                    </div>

                    <div className="mt-5 flex items-baseline gap-3">
                      <span className="text-6xl font-black tracking-tight">771</span>
                      <span className="text-2xl font-bold text-white/70">/ 900</span>
                    </div>

                    <p className="mt-2 text-xs text-white/90 leading-relaxed max-w-sm">
                      Consolidated index across TransUnion CIBIL, CRIF, Experian & Equifax. Top 12% in India.
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/15 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-amber-200">
                        <Zap className="h-4 w-4 fill-amber-300 text-amber-300" />
                        <span>+48 Pts Potential via Rectification</span>
                      </div>
                      <button
                        onClick={() => openDispute()}
                        className="rounded-full bg-white px-4 py-2 text-xs font-extrabold text-[#1882FF] shadow-lg hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
                      >
                        Fix 4 Issues →
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2. 4-BUREAU LIVE CARDS WITH ACCURATE RED-YELLOW-GREEN SPEEDOMETER GAUGES (7 Cols) */}
                <div className="col-span-12 lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  {[
                    {
                      id: "cibil",
                      name: "TransUnion CIBIL",
                      tag: "CIBIL",
                      score: "743",
                      numericScore: 743,
                      trend: "+12 pts",
                      status: "Very Good",
                      grade: "Low Risk",
                      accounts: "16 Total • 7 Active",
                      badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
                      borderColor: "border-slate-200/90 hover:border-sky-300",
                      accentDot: "bg-sky-500",
                      ratingColor: "text-emerald-600",
                    },
                    {
                      id: "crif",
                      name: "CRIF High Mark",
                      tag: "CRIF",
                      score: "757",
                      numericScore: 757,
                      trend: "+8 pts",
                      status: "Very Good",
                      grade: "Low Risk",
                      accounts: "16 Total • 7 Active",
                      badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
                      borderColor: "border-slate-200/90 hover:border-cyan-300",
                      accentDot: "bg-cyan-500",
                      ratingColor: "text-emerald-600",
                    },
                    {
                      id: "experian",
                      name: "Experian India",
                      tag: "Experian",
                      score: "770*",
                      numericScore: 770,
                      trend: "Mismatch",
                      status: "1 Discrepancy",
                      grade: "Action Required",
                      accounts: "15 Total • 1 Missing",
                      badgeBg: "bg-rose-50 text-rose-700 border-rose-200 font-black",
                      borderColor: "border-rose-300 bg-rose-50/20 hover:border-rose-400 shadow-rose-500/5",
                      accentDot: "bg-rose-500",
                      hasAlert: true,
                      alertNote: "⚠️ HDFC Card Active Mismatch",
                      ratingColor: "text-rose-600",
                    },
                    {
                      id: "equifax",
                      name: "Equifax India",
                      tag: "Equifax",
                      score: "817",
                      numericScore: 817,
                      trend: "+24 pts",
                      status: "Tier 1 Excellent",
                      grade: "Prime Grade",
                      accounts: "16 Total • 7 Active",
                      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200 font-black",
                      borderColor: "border-slate-200/90 hover:border-emerald-300",
                      accentDot: "bg-emerald-500",
                      ratingColor: "text-emerald-600",
                    },
                  ].map((b) => {
                    // Correct Score Math: 300 (Left, 0%) to 900 (Right, 100%)
                    const pct = Math.max(0, Math.min(1, (b.numericScore - 300) / 600));
                    // Semicircle arc radius 40, center (55, 50)
                    const rad = Math.PI * pct;
                    const dotX = 55 - 40 * Math.cos(rad);
                    const dotY = 50 - 40 * Math.sin(rad);

                    return (
                      <div
                        key={b.id}
                        onClick={() => {
                          if (b.hasAlert) openDispute("Experian Missing Record");
                          else setActiveNav("matrix");
                        }}
                        className={`flex flex-col rounded-[26px] bg-white p-4 border ${b.borderColor} shadow-sm hover:shadow-md transition-all cursor-pointer group relative`}
                      >
                        {/* 1. Header: Bureau Tag & Trend Delta */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className={`h-2 w-2 rounded-full ${b.accentDot}`} />
                            <strong className="text-xs font-black text-slate-800">{b.tag}</strong>
                          </div>
                          <span className={`rounded-full px-2 py-0.5 text-[9px] font-extrabold border ${b.badgeBg}`}>
                            {b.trend}
                          </span>
                        </div>

                        {/* 2. Red -> Yellow -> Green Gauge & Score Readout */}
                        <div className="relative mt-2 flex flex-col items-center justify-center">
                          <svg className="w-32 h-18 overflow-visible" viewBox="0 0 110 58">
                            <defs>
                              <linearGradient id={`rygGradient-${b.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#EF4444" />
                                <stop offset="35%" stopColor="#F87171" />
                                <stop offset="55%" stopColor="#F59E0B" />
                                <stop offset="75%" stopColor="#10B981" />
                                <stop offset="100%" stopColor="#059669" />
                              </linearGradient>
                            </defs>

                            {/* Full Background Spectrum Track (Red -> Yellow -> Green) */}
                            <path
                              d="M 15 50 A 40 40 0 0 1 95 50"
                              fill="none"
                              stroke={`url(#rygGradient-${b.id})`}
                              strokeWidth="7"
                              strokeLinecap="round"
                              opacity="0.9"
                            />

                            {/* Needle / Pointer Circle at Exact Score Position */}
                            <circle
                              cx={dotX}
                              cy={dotY}
                              r="5"
                              className="fill-white stroke-slate-900 stroke-2 shadow-md"
                            />
                            <circle
                              cx={dotX}
                              cy={dotY}
                              r="2"
                              className={pct >= 0.75 ? "fill-emerald-500" : pct >= 0.5 ? "fill-amber-500" : "fill-rose-500"}
                            />

                            {/* Scale Endpoints */}
                            <text x="10" y="56" textAnchor="end" className="text-[7px] font-bold fill-rose-500">300</text>
                            <text x="100" y="56" textAnchor="start" className="text-[7px] font-bold fill-emerald-600">900</text>
                          </svg>

                          {/* Center Score Readout */}
                          <div className="text-center -mt-7">
                            <div className="text-2xl font-black tabular-nums tracking-tight text-slate-900 leading-none">
                              {b.score}
                            </div>
                            <div className={`text-[10px] font-extrabold mt-1 ${b.ratingColor}`}>
                              {b.status}
                            </div>
                          </div>
                        </div>

                        {/* 3. Bureau Telemetry Details (Eliminates Empty Space) */}
                        <div className="mt-3 flex flex-col gap-1.5 rounded-xl bg-slate-50/80 p-2 text-[10px] border border-slate-100">
                          <div className="flex items-center justify-between text-slate-600">
                            <span>Risk Grade:</span>
                            <span className="font-extrabold text-slate-800">{b.grade}</span>
                          </div>
                          <div className="flex items-center justify-between text-slate-600">
                            <span>Payment DPD:</span>
                            <span className="font-extrabold text-emerald-600">0 Overdue</span>
                          </div>
                          {b.hasAlert && (
                            <div className="rounded bg-rose-100/70 px-1.5 py-0.5 font-bold text-rose-700 text-[9px] text-center border border-rose-200/60">
                              {b.alertNote}
                            </div>
                          )}
                        </div>

                        {/* 4. Bottom Footer */}
                        <div className="mt-3 border-t border-slate-100 pt-2 flex items-center justify-between text-[10px] text-slate-400">
                          <span className="font-medium truncate">{b.accounts}</span>
                          <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* MIDDLE WIDESCREEN 2-COLUMN WORKSPACE */}
              <div className="grid grid-cols-12 gap-6 items-start">
                
                {/* LEFT MAIN AREA (8 Cols): Exposure Report, Discrepancy Matrix & Factor Diagnostics */}
                <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">

                  {/* 2. CREDIT EXPOSURE & PORTFOLIO DEBT ALLOCATION REPORT */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Total Debt Exposure */}
                    <div className="rounded-[28px] bg-white p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                              <PieChart className="h-4 w-4" />
                            </div>
                            <strong className="text-sm font-extrabold text-slate-900">Total Credit Exposure</strong>
                          </div>
                          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600">
                            16 Total Accounts
                          </span>
                        </div>

                        <div className="mt-4 flex items-baseline gap-2">
                          <span className="text-2xl font-black text-slate-900">₹47.10 Lakhs</span>
                          <span className="text-xs text-slate-400 font-medium">Total Sanctioned Limit</span>
                        </div>

                        {/* Split Bar */}
                        <div className="mt-3 flex h-3 w-full rounded-full overflow-hidden bg-slate-100">
                          <div className="bg-blue-600 h-full" style={{ width: "68%" }} title="Home Loan: 68%" />
                          <div className="bg-cyan-500 h-full" style={{ width: "14%" }} title="Auto Loan: 14%" />
                          <div className="bg-purple-500 h-full" style={{ width: "14%" }} title="Personal Loan: 14%" />
                          <div className="bg-amber-500 h-full" style={{ width: "4%" }} title="Credit Cards: 4%" />
                        </div>

                        <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
                          <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-blue-600" />
                            <span className="text-slate-600">Home Loan (₹32.0L - 68%)</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-cyan-500" />
                            <span className="text-slate-600">Auto Loan (₹6.5L - 14%)</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-purple-500" />
                            <span className="text-slate-600">Personal Loan (₹6.8L - 14%)</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-amber-500" />
                            <span className="text-slate-600">Cards (₹1.8L - 4%)</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 border-t border-slate-100 pt-2.5 flex items-center justify-between text-[11px] text-slate-500">
                        <span>Active Balance: ₹39.4L</span>
                        <span className="font-extrabold text-emerald-600">0 Overdue DPD</span>
                      </div>
                    </div>

                    {/* Credit Card Utilization Gauge */}
                    <div className="rounded-[28px] bg-white p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                              <CreditCard className="h-4 w-4" />
                            </div>
                            <strong className="text-sm font-extrabold text-slate-900">Revolving Card Utilization</strong>
                          </div>
                          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-700">
                            Healthy (&lt;30%)
                          </span>
                        </div>

                        <div className="mt-4 flex items-baseline justify-between">
                          <div>
                            <span className="text-2xl font-black text-slate-900">28.0%</span>
                            <span className="text-xs text-slate-400 font-medium ml-2">₹1.82L / ₹6.50L Limit</span>
                          </div>
                          <span className="text-xs font-bold text-blue-600">₹4.68L Available</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-3 h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-blue-600" style={{ width: "28%" }} />
                        </div>

                        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                          <span>Recommended for 800+: &lt;15%</span>
                          <span className="font-bold text-amber-700">Pay down ₹85k for +18 pts</span>
                        </div>
                      </div>

                      <div className="mt-4 border-t border-slate-100 pt-2.5 flex items-center justify-between text-[11px]">
                        <span className="text-slate-500">3 Active Cards (HDFC, ICICI, Axis)</span>
                        <button onClick={() => setActiveNav("accounts")} className="font-bold text-blue-600 hover:underline cursor-pointer">
                          View Accounts →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 3. CROSS-BUREAU DISCREPANCY AUDIT TABLE */}
                  <div className="rounded-[30px] bg-white p-6 shadow-sm border border-slate-200/80">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                          <AlertTriangle className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-extrabold text-slate-900">
                            Cross-Bureau Discrepancy Matrix
                          </h3>
                          <p className="text-xs text-slate-500">
                            Comparing 16 accounts across CIBIL, CRIF, Experian & Equifax
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-extrabold text-rose-700 border border-rose-200">
                          4 Discrepancies Detected
                        </span>
                        <button
                          onClick={() => setActiveNav("matrix")}
                          className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          Full Matrix View <ArrowRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    {/* Table View */}
                    <div className="mt-4 overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-slate-100 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                            <th className="pb-3 pl-2">Account / Lender</th>
                            <th className="pb-3">CIBIL</th>
                            <th className="pb-3">CRIF</th>
                            <th className="pb-3">Experian</th>
                            <th className="pb-3">Equifax</th>
                            <th className="pb-3 pr-2 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr className="hover:bg-amber-50/40 transition-colors">
                            <td className="py-3.5 pl-2 font-bold text-slate-900">
                              <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-rose-500" />
                                <div>
                                  <div>HDFC Bank Credit Card</div>
                                  <div className="text-[10px] text-slate-400 font-mono">•••• 4492</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 text-emerald-600 font-bold">Closed (₹0)</td>
                            <td className="py-3.5 text-emerald-600 font-bold">Closed (₹0)</td>
                            <td className="py-3.5 font-bold text-rose-600 bg-rose-50/60 px-2 rounded-lg">
                              Active (₹42,000) ⚠️
                            </td>
                            <td className="py-3.5 text-emerald-600 font-bold">Closed (₹0)</td>
                            <td className="py-3.5 pr-2 text-right">
                              <button
                                onClick={() => openDispute("HDFC Credit Card Status Mismatch")}
                                className="rounded-xl bg-amber-500 px-3 py-1.5 text-xs font-extrabold text-slate-950 hover:bg-amber-400 transition-colors cursor-pointer"
                              >
                                Rectify
                              </button>
                            </td>
                          </tr>

                          <tr className="hover:bg-amber-50/40 transition-colors">
                            <td className="py-3.5 pl-2 font-bold text-slate-900">
                              <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-rose-500" />
                                <div>
                                  <div>Axis Bank Auto Loan</div>
                                  <div className="text-[10px] text-slate-400 font-mono">•••• 9920</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 text-emerald-600 font-bold">000 (Clean)</td>
                            <td className="py-3.5 font-bold text-rose-600 bg-rose-50/60 px-2 rounded-lg">
                              30 DPD (Mar 24) ⚠️
                            </td>
                            <td className="py-3.5 text-emerald-600 font-bold">000 (Clean)</td>
                            <td className="py-3.5 text-emerald-600 font-bold">000 (Clean)</td>
                            <td className="py-3.5 pr-2 text-right">
                              <button
                                onClick={() => openDispute("Axis Bank False 30 DPD")}
                                className="rounded-xl bg-amber-500 px-3 py-1.5 text-xs font-extrabold text-slate-950 hover:bg-amber-400 transition-colors cursor-pointer"
                              >
                                Rectify
                              </button>
                            </td>
                          </tr>

                          <tr className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-3.5 pl-2 font-bold text-slate-900">
                              <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                <div>
                                  <div>SBI Personal Loan</div>
                                  <div className="text-[10px] text-slate-400 font-mono">•••• 1120</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 text-emerald-600 font-bold">Active Regular</td>
                            <td className="py-3.5 text-emerald-600 font-bold">Active Regular</td>
                            <td className="py-3.5 text-emerald-600 font-bold">Active Regular</td>
                            <td className="py-3.5 text-emerald-600 font-bold">Active Regular</td>
                            <td className="py-3.5 pr-2 text-right">
                              <span className="text-[11px] font-extrabold text-emerald-600">Synced ✓</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 4 CREDIT HEALTH FACTORS (DESKTOP) */}
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { label: "Payment History", val: "100%", sub: "36/36 on-time", status: "Excellent", color: "text-emerald-600", bg: "bg-emerald-50" },
                      { label: "Credit Utilization", val: "28%", sub: "₹34.2k / ₹2.5L", status: "Healthy (<30%)", color: "text-blue-600", bg: "bg-blue-50" },
                      { label: "Credit Age", val: "4.8 Yrs", sub: "Oldest: 7.2 yrs", status: "Very Good", color: "text-purple-600", bg: "bg-purple-50" },
                      { label: "Hard Inquiries", val: "2", sub: "Last 6 months", status: "Low Risk", color: "text-emerald-600", bg: "bg-emerald-50" },
                    ].map((f, i) => (
                      <div key={i} className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                        <div className="text-[11px] font-bold text-slate-500">{f.label}</div>
                        <div className={`text-2xl font-black mt-1 ${f.color}`}>{f.val}</div>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-[10px]">
                          <span className="text-slate-400 font-medium">{f.sub}</span>
                          <span className={`font-extrabold px-1.5 py-0.5 rounded ${f.bg} ${f.color}`}>{f.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* RIGHT DOCKED WORKSPACE (4 Cols): "ASK PARTH" DESKTOP AI COPILOT */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
                  <div className="flex flex-col h-[600px] rounded-[30px] bg-gradient-to-b from-[#EEF2F6] to-[#F5F8FC] border border-slate-200/80 p-5 shadow-sm">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md">
                          <Bot className="h-5 w-5" />
                          <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <strong className="text-sm font-extrabold text-slate-900">Ask Parth</strong>
                            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[9px] font-extrabold text-blue-700">
                              AI Copilot
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-500 font-medium">
                            Synced with Sawai&apos;s 4 Bureaus (771)
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Live
                      </span>
                    </div>

                    {/* Desktop Looping Marquee Suggestions */}
                    <div className="relative my-2 overflow-hidden py-1">
                      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-4 bg-gradient-to-r from-[#EEF2F6] to-transparent" />
                      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-4 bg-gradient-to-l from-[#EEF2F6] to-transparent" />
                      <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 48, repeat: Infinity }}
                        className="flex w-max items-center gap-2"
                      >
                        {[
                          "Mera credit score 800+ kaise hoga?",
                          "CIBIL me dispute kaise kare?",
                          "Negative remarks remove kaise kare?",
                          "Mera credit score 800+ kaise hoga?",
                          "CIBIL me dispute kaise kare?",
                          "Negative remarks remove kaise kare?"
                        ].map((text, idx) => (
                          <button
                            key={idx}
                            onClick={() => askParth(text)}
                            className="flex shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-800 shadow-sm border border-slate-200/80 hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
                          >
                            <Sparkles className="h-3 w-3 text-pink-500" />
                            <span>{text}</span>
                          </button>
                        ))}
                      </motion.div>
                    </div>

                    {/* Conversation Stream */}
                    <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                      {parthMessages.map((m, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
                        >
                          <div
                            className={`max-w-[90%] rounded-2xl p-3 text-xs leading-relaxed ${
                              m.sender === "user"
                                ? "bg-[#1882FF] text-white rounded-br-none shadow-sm font-medium"
                                : "bg-white text-slate-800 rounded-bl-none shadow-sm border border-slate-200/80"
                            }`}
                          >
                            <div className="whitespace-pre-line">{m.text}</div>
                            {m.actionText && (
                              <button
                                onClick={() => {
                                  if (m.actionType === "dispute") openDispute();
                                  if (m.actionType === "simulator") setActiveNav("simulator");
                                }}
                                className="mt-2.5 flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-extrabold text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer"
                              >
                                <Zap className="h-3 w-3 text-blue-600" />
                                <span>{m.actionText} →</span>
                              </button>
                            )}
                          </div>
                        </motion.div>
                      ))}

                      {isParthLoading && (
                        <div className="flex items-center gap-2 rounded-2xl bg-white p-3 text-xs text-slate-500 shadow-sm border border-slate-200/80 w-fit">
                          <div className="flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                            <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                            <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                          </div>
                          <span className="text-[11px]">Analyzing multi-bureau metrics...</span>
                        </div>
                      )}
                    </div>

                    {/* Copilot Input Bar */}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        askParth(parthInput || "Meri credit summary aur suggestions batao");
                      }}
                      className="mt-3 flex items-center gap-2"
                    >
                      <div className="flex flex-1 items-center justify-between rounded-full bg-white px-4 py-2.5 shadow-sm border border-slate-200/80">
                        <input
                          type="text"
                          value={parthInput}
                          onChange={(e) => setParthInput(e.target.value)}
                          placeholder="Ask Parth anything..."
                          className="w-full bg-transparent text-xs font-medium text-slate-800 placeholder-slate-400 outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => showToast("Upload Bureau PDF / Bank Statement for Parth AI")}
                          className="text-slate-400 hover:text-slate-600 pl-2 cursor-pointer"
                        >
                          <Paperclip className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        type="submit"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1882FF] text-white shadow-md active:scale-95 transition-transform hover:bg-blue-600 cursor-pointer"
                      >
                        {parthInput.trim() ? <Send className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                      </button>
                    </form>
                  </div>
                </div>

              </div>

            </motion.div>
          )}

          {/* =========================================================
               TAB 2: 4-BUREAU DEEP MATRIX (SIDE-BY-SIDE AUDIT)
               ========================================================= */}
          {activeNav === "matrix" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">4-Bureau Cross-Audit Matrix</h2>
                  <p className="text-xs text-slate-500">
                    Comprehensive field-by-field verification of all 16 accounts across TransUnion CIBIL, CRIF, Experian & Equifax.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setMatrixFilter("all")}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-colors cursor-pointer ${
                      matrixFilter === "all" ? "bg-slate-900 text-white" : "bg-white text-slate-600 border border-slate-200"
                    }`}
                  >
                    All Accounts (16)
                  </button>
                  <button
                    onClick={() => setMatrixFilter("discrepancies")}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-colors cursor-pointer ${
                      matrixFilter === "discrepancies" ? "bg-rose-600 text-white" : "bg-white text-rose-600 border border-rose-200"
                    }`}
                  >
                    Discrepancies Only (4)
                  </button>
                </div>
              </div>

              {/* Full Matrix Table */}
              <div className="rounded-[30px] bg-white p-6 shadow-sm border border-slate-200/80 overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-black uppercase text-slate-600">
                      <th className="py-3 px-4 rounded-l-xl">Credit Line</th>
                      <th className="py-3 px-3">Type</th>
                      <th className="py-3 px-3">Sanction / Limit</th>
                      <th className="py-3 px-3">CIBIL (743)</th>
                      <th className="py-3 px-3">CRIF (757)</th>
                      <th className="py-3 px-3">Experian (770)</th>
                      <th className="py-3 px-3">Equifax (817)</th>
                      <th className="py-3 px-4 text-right rounded-r-xl">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900">
                        <div>HDFC Millennia Credit Card</div>
                        <span className="text-[10px] text-slate-400 font-mono">ACC: ••••4492</span>
                      </td>
                      <td className="py-4 px-3 text-slate-500 font-semibold">Credit Card</td>
                      <td className="py-4 px-3 font-bold text-slate-900">₹2,50,000</td>
                      <td className="py-4 px-3 text-emerald-600 font-bold">Closed (₹0)</td>
                      <td className="py-4 px-3 text-emerald-600 font-bold">Closed (₹0)</td>
                      <td className="py-4 px-3 font-bold text-rose-600 bg-rose-50 px-2 rounded-lg">
                        Active (₹42,000) ⚠️
                      </td>
                      <td className="py-4 px-3 text-emerald-600 font-bold">Closed (₹0)</td>
                      <td className="py-4 px-4 text-right">
                        <button
                          onClick={() => openDispute("HDFC Credit Card Status Mismatch")}
                          className="rounded-xl bg-amber-500 px-3.5 py-1.5 text-xs font-extrabold text-slate-950 hover:bg-amber-400 cursor-pointer shadow-sm"
                        >
                          Dispute Dossier
                        </button>
                      </td>
                    </tr>

                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900">
                        <div>Axis Bank Two-Wheeler Loan</div>
                        <span className="text-[10px] text-slate-400 font-mono">ACC: ••••9920</span>
                      </td>
                      <td className="py-4 px-3 text-slate-500 font-semibold">Auto Loan</td>
                      <td className="py-4 px-3 font-bold text-slate-900">₹85,000</td>
                      <td className="py-4 px-3 text-emerald-600 font-bold">000 Clean</td>
                      <td className="py-4 px-3 font-bold text-rose-600 bg-rose-50 px-2 rounded-lg">
                        30 DPD (Mar 24) ⚠️
                      </td>
                      <td className="py-4 px-3 text-emerald-600 font-bold">000 Clean</td>
                      <td className="py-4 px-3 text-emerald-600 font-bold">000 Clean</td>
                      <td className="py-4 px-4 text-right">
                        <button
                          onClick={() => openDispute("Axis Bank False 30 DPD")}
                          className="rounded-xl bg-amber-500 px-3.5 py-1.5 text-xs font-extrabold text-slate-950 hover:bg-amber-400 cursor-pointer shadow-sm"
                        >
                          Dispute Dossier
                        </button>
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900">
                        <div>SBI Personal Loan</div>
                        <span className="text-[10px] text-slate-400 font-mono">ACC: ••••1120</span>
                      </td>
                      <td className="py-4 px-3 text-slate-500 font-semibold">Personal Loan</td>
                      <td className="py-4 px-3 font-bold text-slate-900">₹3,00,000</td>
                      <td className="py-4 px-3 text-emerald-600 font-bold">Active (₹1.12L)</td>
                      <td className="py-4 px-3 text-emerald-600 font-bold">Active (₹1.12L)</td>
                      <td className="py-4 px-3 text-emerald-600 font-bold">Active (₹1.12L)</td>
                      <td className="py-4 px-3 text-emerald-600 font-bold">Active (₹1.12L)</td>
                      <td className="py-4 px-4 text-right">
                        <span className="text-xs font-extrabold text-emerald-600">4/4 Matched ✓</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* =========================================================
               TAB 3: RECTIFICATION KANBAN DESK
               ========================================================= */}
          {activeNav === "disputes" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Prime Credit Rectification Kanban</h2>
                  <p className="text-xs text-slate-500">
                    Track formal dispute dossiers filed by PrimeScore advocates with RBI ombudsman & bureau heads.
                  </p>
                </div>
                <button
                  onClick={() => openDispute()}
                  className="flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-extrabold text-slate-950 shadow-md hover:bg-amber-400 cursor-pointer"
                >
                  <Gavel className="h-4 w-4" /> File New Bureau Dispute
                </button>
              </div>

              {/* Kanban Columns */}
              <div className="grid grid-cols-4 gap-5">
                {[
                  {
                    title: "1. Detected Discrepancies",
                    count: 2,
                    badge: "Action Required",
                    items: [
                      { title: "HDFC Card Status Mismatch", bureau: "Experian", impact: "+35 Pts", desc: "Active in Experian, Closed in CIBIL." },
                      { title: "Axis Two-Wheeler False DPD", bureau: "CRIF", impact: "+18 Pts", desc: "False 30+ DPD reported in March 2024." }
                    ]
                  },
                  {
                    title: "2. Evidence Prepared",
                    count: 1,
                    badge: "Legal Ready",
                    items: [
                      { title: "ICICI Old Address Mismatch", bureau: "CIBIL", impact: "+6 Pts", desc: "NOC submitted to CIBIL dispute cell." }
                    ]
                  },
                  {
                    title: "3. Filed with Bureau",
                    count: 1,
                    badge: "In Verification",
                    items: [
                      { title: "Bajaj Finance Duplicate Line", bureau: "Equifax", impact: "+12 Pts", desc: "Ticket #EQ-88421 under 14-day statutory review." }
                    ]
                  },
                  {
                    title: "4. Rectified & Updated",
                    count: 3,
                    badge: "Resolved",
                    items: [
                      { title: "Kotak False Late Fee", bureau: "CIBIL", impact: "+22 Pts (Done)", desc: "Removed in July 2024 cycle." }
                    ]
                  }
                ].map((col, idx) => (
                  <div key={idx} className="flex flex-col gap-3.5 rounded-[28px] bg-slate-100/80 p-4 border border-slate-200/70">
                    <div className="flex items-center justify-between px-1">
                      <strong className="text-xs font-extrabold text-slate-800">{col.title}</strong>
                      <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-extrabold text-slate-700 shadow-sm">
                        {col.count}
                      </span>
                    </div>

                    <div className="flex flex-col gap-3">
                      {col.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          onClick={() => openDispute(item.title)}
                          className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200 hover:shadow-md transition-all cursor-pointer"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                              {item.bureau}
                            </span>
                            <span className="text-[10px] font-extrabold text-emerald-600">
                              {item.impact}
                            </span>
                          </div>
                          <strong className="text-xs font-extrabold text-slate-900 mt-2 block">
                            {item.title}
                          </strong>
                          <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* =========================================================
               TAB 4: INTERACTIVE SCORE SIMULATOR
               ========================================================= */}
          {activeNav === "simulator" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Score Trajectory Simulator</h2>
                  <p className="text-xs text-slate-500">
                    Model simulated credit outcomes to reach 800+ Tier-1 status with optimal financial actions.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 font-bold">Current: <strong className="text-slate-900">771</strong></span>
                  <span className="text-xs text-blue-600 font-bold">Simulated: <strong className="text-emerald-600 text-lg">{simulatedScore}</strong></span>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-6 items-stretch">
                {/* Sliders (7 Cols) */}
                <div className="col-span-12 lg:col-span-7 rounded-[30px] bg-white p-7 shadow-sm border border-slate-200/80 flex flex-col gap-6">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-800">
                      <span>1. Pay Down Outstanding Credit Card Debt</span>
                      <strong className="text-blue-600">₹{simPaydown.toLocaleString("en-IN")}</strong>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="150000"
                      step="5000"
                      value={simPaydown}
                      onChange={(e) => setSimPaydown(Number(e.target.value))}
                      className="mt-3 w-full h-2 bg-slate-200 rounded-lg accent-[#1882FF] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>₹0 (28% Utilization)</span>
                      <span>₹75,000 (15% Utilization)</span>
                      <span>₹1,50,000 (0% Utilization)</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 flex flex-col gap-3">
                    <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer">
                      <div>
                        <strong className="text-xs font-bold text-slate-900 block">2. Rectify All 4 Bureau Discrepancies</strong>
                        <span className="text-[11px] text-slate-500">Removes false DPD & active record mismatches</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={simFixDisputes}
                        onChange={(e) => setSimFixDisputes(e.target.checked)}
                        className="h-5 w-5 rounded accent-blue-600 cursor-pointer"
                      />
                    </label>

                    <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer">
                      <div>
                        <strong className="text-xs font-bold text-slate-900 block">3. Freeze Hard Inquiries for 90 Days</strong>
                        <span className="text-[11px] text-slate-500">Prevents inquiry score deduction penalties</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={simNoInquiries}
                        onChange={(e) => setSimNoInquiries(e.target.checked)}
                        className="h-5 w-5 rounded accent-blue-600 cursor-pointer"
                      />
                    </label>
                  </div>
                </div>

                {/* Score Projection Outcome (5 Cols) */}
                <div className="col-span-12 lg:col-span-5 rounded-[30px] bg-gradient-to-br from-[#1882FF] to-[#0D62C9] p-7 text-white shadow-xl flex flex-col justify-between">
                  <div>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-extrabold backdrop-blur-md">
                      Simulated Forecast
                    </span>
                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-6xl font-black">{simulatedScore}</span>
                      <span className="text-2xl font-semibold text-white/70">/ 900</span>
                    </div>
                    <div className="mt-2 text-sm font-extrabold text-emerald-300">
                      +{simulatedScore - 771} Points Projected Improvement
                    </div>
                    <p className="mt-3 text-xs text-white/85 leading-relaxed">
                      At {simulatedScore} PrimeScore, you unlock pre-approved HDFC Infinia credit card and home loan interest rates below 8.40% p.a.
                    </p>
                  </div>

                  <button
                    onClick={() => openDispute()}
                    className="mt-6 w-full rounded-full bg-white py-3.5 text-xs font-extrabold text-[#1882FF] shadow-lg hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
                  >
                    Execute Rectification Plan Now →
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* =========================================================
               TAB 5: ACCOUNTS & CREDIT MIX
               ========================================================= */}
          {activeNav === "accounts" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Credit Lines & Accounts (16)</h2>
                  <p className="text-xs text-slate-500">Live synchronized records across all 4 licensed bureaus.</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700 border border-emerald-200">
                  100% On-Time Payments
                </span>
              </div>

              <div className="grid grid-cols-3 gap-5">
                {[
                  { lender: "HDFC Bank", product: "Millennia Credit Card", limit: "₹2,50,000", balance: "₹34,210", emi: "Full Pay", status: "Active (14% Used)", dpd: "000/000/000", color: "from-sky-600 to-blue-800" },
                  { lender: "SBI Bank", product: "Personal Loan", limit: "₹3,00,000", balance: "₹1,12,000", emi: "₹9,400 / mo", status: "Active Regular", dpd: "000/000/000", color: "from-emerald-600 to-teal-800" },
                  { lender: "Axis Bank", product: "Two-Wheeler Loan", limit: "₹85,000", balance: "₹18,400", emi: "₹3,200 / mo", status: "Active (1 False DPD)", dpd: "030/000/000", color: "from-rose-600 to-amber-700", hasDispute: true },
                ].map((acc, i) => (
                  <div key={i} className="rounded-[26px] border border-slate-200/80 bg-white p-5 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className={`h-8 px-3 rounded-lg bg-gradient-to-r ${acc.color} text-white font-extrabold text-xs flex items-center shadow-sm w-fit`}>
                        {acc.lender}
                      </div>
                      <h3 className="mt-3 text-sm font-extrabold text-slate-900">{acc.product}</h3>
                      <div className="mt-2 text-xs text-slate-500">Limit: <strong className="text-slate-800">{acc.limit}</strong></div>
                    </div>

                    <div className="mt-4 border-t border-slate-100 pt-3 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Balance: <strong className="text-blue-600 font-bold">{acc.balance}</strong></span>
                      {acc.hasDispute ? (
                        <button onClick={() => openDispute(acc.product)} className="text-[10px] font-extrabold text-rose-600 bg-rose-50 px-2 py-1 rounded cursor-pointer">
                          Rectify DPD
                        </button>
                      ) : (
                        <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Clean</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* =========================================================
               TAB 6: ENQUIRIES
               ========================================================= */}
          {activeNav === "enquiries" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6">
              <h2 className="text-2xl font-black text-slate-900">Hard Enquiry Radar (2)</h2>
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-bold text-slate-900">
                  You have only 2 hard inquiries in the last 6 months. This has minimal impact (-4 pts) on your score.
                </div>
              </div>
            </motion.div>
          )}

          {/* =========================================================
               TAB 7: 1-ON-1 ADVISORY
               ========================================================= */}
          {activeNav === "advisory" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6">
              <h2 className="text-2xl font-black text-slate-900">1-on-1 Legal Credit Advocate Consultation</h2>
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <button onClick={() => showToast("Advisory call booked with Advocate Sharma for tomorrow 11:00 AM!")} className="rounded-full bg-[#1882FF] px-6 py-3 text-xs font-extrabold text-white cursor-pointer shadow-md">
                  Book Free 30-Min Consultation →
                </button>
              </div>
            </motion.div>
          )}

        </div>
      </main>

      {/* DISPUTE MODAL (DESKTOP) */}
      <AnimatePresence>
        {isDisputeModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-xl rounded-[32px] bg-white p-7 shadow-2xl border border-slate-200"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5 text-lg font-black text-slate-900">
                  <Gavel className="h-5 w-5 text-amber-500" /> File Official Bureau Rectification Dossier
                </div>
                <button onClick={() => setIsDisputeModalOpen(false)} className="text-slate-400 hover:text-slate-700 cursor-pointer">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {disputePrefill && (
                <div className="mt-4 rounded-2xl bg-amber-50 border border-amber-200 p-3 text-xs font-bold text-amber-900">
                  Selected Discrepancy: {disputePrefill}
                </div>
              )}

              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                PrimeScore legal advocates will prepare statutory dispute notices under RBI Credit Information Companies (Regulation) Act, 2005 on your behalf.
              </p>

              <div className="mt-6 flex gap-3">
                <button onClick={() => setIsDisputeModalOpen(false)} className="flex-1 rounded-xl border border-slate-200 py-3 text-xs font-bold text-slate-700 cursor-pointer">
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsDisputeModalOpen(false);
                    showToast("Dispute Dossier #PS-9921 Submitted to Legal Advocates!");
                  }}
                  className="flex-1 rounded-xl bg-amber-500 py-3 text-xs font-extrabold text-slate-950 shadow-md cursor-pointer hover:bg-amber-400"
                >
                  Submit to Prime Advocates →
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Parth AI Copilot Dialog */}
      <AnimatePresence>
        {isParthOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="flex h-[75vh] w-full max-w-2xl flex-col rounded-[32px] bg-slate-50 shadow-2xl overflow-hidden border border-slate-200/80"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200/80 bg-white px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md">
                    <Bot className="h-5 w-5" />
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <strong className="text-base font-extrabold text-slate-900">Parth</strong>
                      <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-extrabold text-blue-700">
                        Credit AI Copilot
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      Synced with Sawai&apos;s 4-Bureau Dossier (Composite: 771 / 900)
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsParthOpen(false)}
                  className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Chat Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {parthMessages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-5 py-3.5 text-xs leading-relaxed ${
                        m.sender === "user"
                          ? "bg-[#1882FF] text-white rounded-br-none shadow-sm font-medium"
                          : "bg-white text-slate-800 rounded-bl-none shadow-sm border border-slate-200/70"
                      }`}
                    >
                      <div className="whitespace-pre-line">{m.text}</div>

                      {m.actionText && (
                        <div className="mt-3 border-t border-slate-100 pt-2.5">
                          <button
                            onClick={() => {
                              setIsParthOpen(false);
                              if (m.actionType === "dispute") openDispute();
                              if (m.actionType === "simulator") setActiveNav("simulator");
                            }}
                            className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-extrabold text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer"
                          >
                            <Zap className="h-3.5 w-3.5 text-blue-600" />
                            <span>{m.actionText} →</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {isParthLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-xs text-slate-500 shadow-sm border border-slate-200/70 w-fit"
                  >
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                    <span className="text-xs font-medium">Parth is computing cross-bureau analytics...</span>
                  </motion.div>
                )}
              </div>

              {/* Quick Prompts */}
              <div className="border-t border-slate-200/60 bg-white/80 px-6 py-2.5">
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
                  <button
                    onClick={() => askParth("HDFC card status mismatch kaise rectify hoga?")}
                    className="whitespace-nowrap rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 cursor-pointer"
                  >
                    🔍 Rectify HDFC Mismatch
                  </button>
                  <button
                    onClick={() => askParth("Credit utilization kaise reduce kare?")}
                    className="whitespace-nowrap rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 cursor-pointer"
                  >
                    💳 Reduce 28% Utilization
                  </button>
                  <button
                    onClick={() => askParth("Mujhe pre-approved personal loan offer milega?")}
                    className="whitespace-nowrap rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 cursor-pointer"
                  >
                    ⚡ Check Pre-approved Loan
                  </button>
                </div>
              </div>

              {/* Chat Input Bar */}
              <div className="border-t border-slate-200 bg-white p-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    askParth(parthInput);
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="flex flex-1 items-center justify-between rounded-full bg-slate-100 px-5 py-3">
                    <input
                      type="text"
                      value={parthInput}
                      onChange={(e) => setParthInput(e.target.value)}
                      placeholder="Ask Parth anything about your credit score or rectification..."
                      className="w-full bg-transparent text-xs font-medium text-slate-800 placeholder-slate-400 outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => showToast("Attaching bureau PDF report")}
                      className="text-slate-400 hover:text-slate-600 pl-2 cursor-pointer"
                    >
                      <Paperclip className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1882FF] text-white shadow-md active:scale-95 transition-transform cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
