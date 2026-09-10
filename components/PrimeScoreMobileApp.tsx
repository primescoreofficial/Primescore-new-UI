"use client";

import React, { useState, useEffect, useRef } from "react";
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
  X,
  FileDown,
  Calendar,
  Clock,
  PhoneCall,
  Crown,
  UploadCloud,
  Eye,
  Check,
  Sparkles,
  RefreshCw,
  CheckCheck,
  Gauge,
  Mic,
  Send,
  Paperclip,
  Bot,
  ArrowLeft,
  HelpCircle,
  MoreVertical,
  Ticket,
  FileText,
  Briefcase,
  GraduationCap,
  Bookmark,
  MapPin,
  Wallet,
  RotateCcw,
  Lock,
  LogOut,
  Landmark,
  Coins,
  Calculator,
  ChevronUp,
  Trash2,
  Video,
  Play
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

export default function PrimeScoreMobileApp({ isStandalone = false }: { isStandalone?: boolean }) {
  const [activeBottomNav, setActiveBottomNav] = useState<"home" | "bureaus" | "parth" | "cards" | "loans" | "profile" | "disputes" | "simulator">("home");
  const [activeHeaderTab, setActiveHeaderTab] = useState<string>("overview");
  const [isDisputeOpen, setIsDisputeOpen] = useState<boolean>(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
  const [selectedDisputeTitle, setSelectedDisputeTitle] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cards Sub-Tab State
  const [cardSubTab, setCardSubTab] = useState<"your_cards" | "get_card">("your_cards");

  // Loans Sub-Tab State
  const [loanSubTab, setLoanSubTab] = useState<"active_loans" | "pre_approved" | "emi_calc">("active_loans");
  const [loanCalcAmount, setLoanCalcAmount] = useState<number>(500000);
  const [loanCalcTenure, setLoanCalcTenure] = useState<number>(36);
  const [loanCalcRoi, setLoanCalcRoi] = useState<number>(10.25);

  // Simulator State
  const [simPaydown, setSimPaydown] = useState<number>(60000);
  const [simFixDisputes, setSimFixDisputes] = useState<boolean>(true);
  const [simCloseLoan, setSimCloseLoan] = useState<boolean>(false);
  const [simNoInquiries, setSimNoInquiries] = useState<boolean>(true);

  // Subfilters & Bureau Selection
  const [selectedBureauId, setSelectedBureauId] = useState<string>("cibil");
  const [bureauMatrixFilter, setBureauMatrixFilter] = useState<"all" | "mismatch" | "cards" | "loans">("all");
  const [disputeFilter, setDisputeFilter] = useState<"all" | "action" | "review" | "resolved">("all");

  // Parth Advisory State
  const [isParthOpen, setIsParthOpen] = useState<boolean>(false);
  const [isOpportunitiesOpen, setIsOpportunitiesOpen] = useState<boolean>(true);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState<boolean>(false);
  const [parthInput, setParthInput] = useState<string>("");
  const [isParthLoading, setIsParthLoading] = useState<boolean>(false);
  const [parthMessages, setParthMessages] = useState<Array<{ sender: "user" | "parth"; text: string; actionText?: string; actionType?: string }>>([
    {
      sender: "parth",
      text: "Hello Sawai! I have audited your credit reports across TransUnion CIBIL, CRIF, Experian & Equifax (Composite: 771/900). 4 discrepancy opportunities are available to boost your score by +48 points. How can I assist you with your report, disputes, or loan approvals today?"
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const modalMessagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    modalMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [parthMessages, isParthLoading, activeBottomNav, isParthOpen]);

  const askParth = (query: string) => {
    if (!query.trim()) return;
    const userMsg = query.trim();
    setParthInput("");
    setActiveBottomNav("parth");
    setIsParthLoading(true);

    setParthMessages((prev) => [...prev, { sender: "user", text: userMsg }]);

    setTimeout(() => {
      let reply = "";
      let actionText: string | undefined;
      let actionType: string | undefined;

      const lower = userMsg.toLowerCase();
      if (lower.includes("800") || lower.includes("score") || lower.includes("kaise")) {
        reply = "Aapka Composite Score 771 hai. 800+ target reach karne ke liye:\n1. Experian me HDFC card mismatch rectify kijiye (+35 pts)\n2. Credit card utilization 28% se 14% drop kijiye (+18 pts)\n3. 90 days tak koi nayi hard enquiry mat lagne dijiye (+8 pts).\nProjected Score: 832/900!";
        actionText = "Open Rectification Desk";
        actionType = "dispute";
      } else if (lower.includes("dispute") || lower.includes("cibil") || lower.includes("negative") || lower.includes("rectify")) {
        reply = "PrimeScore ne aapke portfolio me 4 discrepancies detect ki hain. Sabse critical HDFC card status mismatch hai jo CIBIL me closed hai par Experian me active dikh raha hai. Prime advocates iska legal bureau notice 14-21 days me resolve kar dete hain.";
        actionText = "File 1-Click Bureau Notice";
        actionType = "dispute";
      } else if (lower.includes("utilization") || lower.includes("card") || lower.includes("limit")) {
        reply = "Aapka total card utilization 28.0% (₹1.82L out of ₹6.50L limit) hai across 3 active cards (HDFC, ICICI, Axis). Agar aap ₹85,000 paydown karte hain, to utilization 15% ke niche aa jayega aur score instantly +18 points boost hoga!";
        actionText = "Simulate Debt Paydown";
        actionType = "simulator";
      } else {
        reply = `Maine aapke 4-bureau records (Composite: 771, CIBIL: 743, Experian: 770, CRIF: 757, Equifax: 817) inspect kar liye hain. Aapka overall risk grade 'Low' hai with 100% on-time repayment history. Discrepancy rectify hote hi aap pre-approved lowest interest offers ke liye eligible ho jayenge.`;
        actionText = "View 4-Bureau Matrix";
        actionType = "dispute";
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

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const openDisputeModal = (title?: string) => {
    if (title) setSelectedDisputeTitle(title);
    setIsNotificationOpen(false);
    setIsDisputeOpen(true);
  };

  const getDisplayScore = () => {
    const matched = BUREAUS.find((b) => b.id === activeHeaderTab);
    if (matched) {
      return { label: matched.name, score: matched.score, max: matched.maxScore, rating: matched.rating };
    }
    return { label: "PrimeScore Composite", score: 771, max: 900, rating: "Tier 1 Prime" };
  };

  const currentScore = getDisplayScore();
  const simulatedTotal = 771 + (simFixDisputes ? 48 : 0) + Math.round((simPaydown / 150000) * 32) + (simCloseLoan ? 14 : 0) + (simNoInquiries ? 8 : 0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to top whenever switching main tabs or sub-pages
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [activeBottomNav, cardSubTab, loanSubTab, selectedBureauId]);

  return (
    <div className={`relative flex flex-col overflow-hidden bg-[#F8FAFC] font-sans text-slate-900 ${
      isStandalone 
        ? "w-full h-screen max-h-screen" 
        : "mx-auto h-[890px] w-[416px] rounded-[54px] shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_0_12px_#1E293B]"
    }`}>
      {/* Dynamic Island on Mockup Frame */}
      {!isStandalone && (
        <div className="absolute left-1/2 top-[10px] z-50 flex h-[32px] w-[124px] -translate-x-1/2 items-center justify-end rounded-full bg-black pr-3 pointer-events-none">
          <div className="h-[10px] w-[10px] rounded-full border border-[#1a2a40] bg-[#0c1829]" />
        </div>
      )}

      {/* Main Scrollable View */}
      <div 
        ref={scrollContainerRef}
        className={`relative flex flex-1 flex-col overflow-x-hidden bg-[#F8FAFC] scrollbar-none ${
          activeBottomNav === "parth" ? "overflow-hidden" : "overflow-y-auto"
        }`}
      >
        
        {/* Toast Notification */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              className="fixed left-6 right-6 top-16 z-[100] flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-xs font-semibold text-white shadow-2xl"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =========================================================
             1. HOME PAGE HEADER (ONLY ON HOME TAB)
             ========================================================= */}
        {activeBottomNav === "home" ? (
          <div className="relative bg-gradient-to-b from-[#1882FF] to-[#1474E8] px-5 pb-8 pt-5 text-white">
            {/* User Greeting Row */}
            <div className="flex items-center justify-between relative">
              <div
                onClick={() => {
                  setIsNotificationOpen(false);
                  setActiveBottomNav("profile");
                }}
                className="flex items-center gap-3 cursor-pointer active:scale-95 transition-transform"
                title="Open Profile"
              >
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white font-extrabold text-slate-900 shadow-md">
                  SS
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
                </div>
                <div>
                  <div className="text-lg font-bold tracking-tight text-white leading-tight">
                    Welcome, Sawai
                  </div>
                  <div className="text-[10px] text-white/80 font-semibold">View Profile &amp; KYC →</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 relative">
                {/* Bell Button */}
                <button
                  onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                  className="relative text-white active:scale-90 p-1.5 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute 1 top-1 right-1 h-2 w-2 rounded-full border-2 border-[#1882FF] bg-red-500 animate-pulse" />
                </button>

                {/* Settings Gear Button */}
                <button
                  onClick={() => {
                    setIsNotificationOpen(false);
                    setActiveBottomNav("profile");
                  }}
                  className="relative z-20 flex h-8 w-8 items-center justify-center rounded-full text-white hover:bg-white/20 active:scale-90 transition-all cursor-pointer"
                  title="Settings & Profile"
                >
                  <Settings className="h-5 w-5 pointer-events-none" />
                </button>

                {/* NOTIFICATION TRAY */}
                <AnimatePresence>
                  {isNotificationOpen && (
                    <>
                      <div onClick={() => setIsNotificationOpen(false)} className="fixed inset-0 z-40" />
                      <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: -8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: -8 }}
                        transition={{ type: "spring", damping: 22, stiffness: 350 }}
                        style={{ transformOrigin: "top right" }}
                        className="absolute right-0 top-11 z-50 w-[310px] rounded-3xl bg-white p-4 text-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.3),0_0_0_1px_rgba(0,0,0,0.06)]"
                      >
                        <div className="absolute right-7 -top-1.5 h-3 w-3 rotate-45 bg-white border-t border-l border-slate-100" />
                        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                          <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
                            <span>Notifications</span>
                            <span className="rounded-full bg-rose-100 px-1.5 py-0.5 text-[9px] font-extrabold text-rose-700">3 New</span>
                          </div>
                          <button
                            onClick={() => {
                              showToast("All marked as read");
                              setIsNotificationOpen(false);
                            }}
                            className="text-[10px] font-bold text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <CheckCheck className="h-3 w-3" /> Mark read
                          </button>
                        </div>

                        <div className="mt-2.5 flex flex-col gap-2 max-h-[320px] overflow-y-auto scrollbar-none">
                          <div
                            onClick={() => openDisputeModal("HDFC Status Mismatch")}
                            className="flex cursor-pointer gap-3 rounded-2xl bg-amber-50/70 p-2.5 hover:bg-amber-100/60 transition-colors border border-amber-200/60"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white font-extrabold text-xs">
                              !
                            </div>
                            <div>
                              <div className="text-xs font-extrabold text-slate-900">
                                Discrepancy Found (Experian)
                              </div>
                              <div className="text-[10px] text-slate-600 leading-tight">
                                HDFC Card shows active (₹42,000) instead of closed.
                              </div>
                            </div>
                          </div>

                          <div
                            onClick={() => openDisputeModal("Axis Two-Wheeler DPD")}
                            className="flex cursor-pointer gap-3 rounded-2xl bg-slate-50 p-2.5 hover:bg-slate-100 transition-colors border border-slate-100"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white font-extrabold text-xs">
                              ✓
                            </div>
                            <div>
                              <div className="text-xs font-extrabold text-slate-900">
                                Equifax Score Synced (+24 Pts)
                              </div>
                              <div className="text-[10px] text-slate-600 leading-tight">
                                Equifax score updated to 817 (Tier 1 Excellent).
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* =========================================================
                 5-ITEM CAPSULE BAR WITH DISTINCT CIRCLE ICON IN CENTER
                 ========================================================= */}
            <div className="mt-5 flex items-center justify-between gap-1 rounded-full bg-black/15 p-1.5 backdrop-blur-md">
              {/* 1. Left 1: CIBIL */}
              <button
                onClick={() => setActiveHeaderTab("cibil")}
                className={`flex-1 flex h-8 items-center justify-center rounded-full text-xs font-extrabold transition-all duration-200 ${
                  activeHeaderTab === "cibil"
                    ? "bg-white text-slate-900 shadow-md"
                    : "bg-transparent text-white/85 hover:text-white"
                }`}
              >
                CIBIL
              </button>

              {/* 2. Left 2: CRIF */}
              <button
                onClick={() => setActiveHeaderTab("crif")}
                className={`flex-1 flex h-8 items-center justify-center rounded-full text-xs font-extrabold transition-all duration-200 ${
                  activeHeaderTab === "crif"
                    ? "bg-white text-slate-900 shadow-md"
                    : "bg-transparent text-white/85 hover:text-white"
                }`}
              >
                CRIF
              </button>

              {/* 3. MIDDLE: DISTINCT CIRCULAR SCORE ICON BUTTON */}
              <button
                onClick={() => setActiveHeaderTab("overview")}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                  activeHeaderTab === "overview"
                    ? "bg-white text-slate-900 shadow-xl scale-110 ring-2 ring-white/40"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
                title="PrimeScore Index"
              >
                <Gauge className="h-5 w-5 text-blue-600" />
              </button>

              {/* 4. Right 1: Experian */}
              <button
                onClick={() => setActiveHeaderTab("experian")}
                className={`flex-1 flex h-8 items-center justify-center rounded-full text-xs font-extrabold transition-all duration-200 ${
                  activeHeaderTab === "experian"
                    ? "bg-white text-slate-900 shadow-md"
                    : "bg-transparent text-white/85 hover:text-white"
                }`}
              >
                Experian
              </button>

              {/* 5. Right 2: Equifax */}
              <button
                onClick={() => setActiveHeaderTab("equifax")}
                className={`flex-1 flex h-8 items-center justify-center rounded-full text-xs font-extrabold transition-all duration-200 ${
                  activeHeaderTab === "equifax"
                    ? "bg-white text-slate-900 shadow-md"
                    : "bg-transparent text-white/85 hover:text-white"
                }`}
              >
                Equifax
              </button>
            </div>

            {/* Center Hero Score */}
            <div className="mt-4 flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white/90">
                <span>{currentScore.label}</span>
                <span className="rounded bg-white/20 px-1.5 py-0.5 text-[9px] font-bold">{currentScore.rating}</span>
              </div>

              <motion.div
                key={currentScore.score}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-1 flex items-baseline gap-1.5 text-5xl font-extrabold tracking-tight"
              >
                <span>{currentScore.score}</span>
                <span className="text-lg font-semibold text-white/70">/ {currentScore.max}</span>
              </motion.div>

              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => openDisputeModal()}
                className="mt-2 flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md"
              >
                <Zap className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
                <span>+48 Pts Potential via Rectification</span>
              </motion.button>
            </div>
          </div>
        ) : activeBottomNav !== "profile" && activeBottomNav !== "parth" ? (
          /* NATIVE NARROW HEADER FOR OTHER TABS (Bureaus, Disputes, Simulator) */
          <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-4 py-3 border-b border-slate-200/80">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-extrabold text-slate-900">
                  {activeBottomNav === "bureaus" && "Bureau Reports"}
                  {activeBottomNav === "cards" && "Cards"}
                  {activeBottomNav === "loans" && "Loans"}
                  {activeBottomNav === "disputes" && "Legal Rectification Desk"}
                  {activeBottomNav === "simulator" && "Score Simulator"}
                </h1>
                <p className="text-[11px] text-slate-500 font-medium">
                  {activeBottomNav === "bureaus" && "Cross-bureau verification & discrepancies"}
                  {activeBottomNav === "cards" && "Track dues, utilization & curated cards"}
                  {activeBottomNav === "loans" && "Active EMIs, pre-approvals & calculator"}
                  {activeBottomNav === "disputes" && "Official bureau rectification dossiers"}
                  {activeBottomNav === "simulator" && "Forecast composite score changes"}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {activeBottomNav === "bureaus" && (
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                    4/4 Synced
                  </span>
                )}
                {activeBottomNav === "cards" && (
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700">
                    3 Active
                  </span>
                )}
                {activeBottomNav === "loans" && (
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                    2 Active
                  </span>
                )}
                {activeBottomNav === "disputes" && (
                  <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold text-amber-900">
                    4 Active
                  </span>
                )}
                {activeBottomNav === "simulator" && (
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700">
                    AI Active
                  </span>
                )}
                
                {/* Settings Gear Button on Non-Home Header */}
                <button
                  onClick={() => {
                    setIsNotificationOpen(false);
                    setActiveBottomNav("profile");
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 active:scale-90 transition-all cursor-pointer"
                  title="Open Settings"
                >
                  <Settings className="h-4.5 w-4.5 pointer-events-none" />
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {/* =========================================================
             2. PAGE CONTENT AREA
             ========================================================= */}
        <div className={`flex flex-1 flex-col ${
          activeBottomNav === "parth"
            ? "h-full overflow-hidden p-0 pb-[72px]"
            : activeBottomNav === "profile"
            ? "p-0 pb-36 bg-[#F8FAFC]"
            : activeBottomNav === "home"
            ? "relative -mt-6 z-10 rounded-t-[32px] bg-[#F8FAFC] pt-5 shadow-lg px-4 pb-36 gap-4"
            : "pt-4 bg-[#F8FAFC] px-4 pb-36 gap-4"
        }`}>

          {/* TAB 1: HOME */}
          {activeBottomNav === "home" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
              {/* CARD 1: 4 BUREAUS */}
              <div className="flex flex-col gap-4 rounded-[26px] bg-white p-5 shadow-sm border border-slate-100">
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
                          openDisputeModal("Experian Missing Record");
                        } else {
                          setActiveHeaderTab(b.id);
                        }
                      }}
                      className="flex cursor-pointer items-center justify-between"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-md ${b.iconBg}`}>
                          {b.hasDiscrepancy ? <AlertTriangle className="h-5 w-5" /> : <ShieldCheck className="h-5 w-5" />}
                        </div>
                        <div>
                          <div className="text-base font-bold text-slate-900">{b.name}</div>
                          <div className={`text-xs font-medium ${b.hasDiscrepancy ? "text-rose-600 font-semibold" : "text-slate-500"}`}>
                            {b.hasDiscrepancy ? "1 Account Missing (Rectify)" : `${b.accounts} Accounts • ${b.active} Active`}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className={`text-base font-extrabold ${b.hasDiscrepancy ? "text-rose-600" : "text-slate-900"}`}>{b.score}</div>
                        <div className={`flex items-center justify-end gap-0.5 text-xs font-bold ${b.hasDiscrepancy ? "text-rose-600" : "text-emerald-600"}`}>
                          {!b.hasDiscrepancy && <TrendingUp className="h-3 w-3" />}
                          <span>{b.trend}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CARD: ASK PARTH AI COPILOT */}
              <div className="flex flex-col gap-3 rounded-[28px] bg-[#EEF2F6]/90 p-4 border border-slate-200/70 shadow-sm">
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#1882FF] overflow-hidden shadow-sm">
                      <img src="/parth-logo.png" alt="Parth" className="h-full w-full object-contain p-0.5" />
                    </div>
                    <span className="text-base font-extrabold text-slate-900">Ask Parth</span>
                  </div>
                </div>

                {/* Infinite Looping Marquee Ticker Rows */}
                <div className="relative flex flex-col gap-2 overflow-hidden py-1">
                  {/* Left & Right Edge Soft Vignette Fades */}
                  <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-4 bg-gradient-to-r from-[#EEF2F6] to-transparent" />
                  <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-4 bg-gradient-to-l from-[#EEF2F6] to-transparent" />

                  {/* ROW 1: Loops Left */}
                  <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 48, repeat: Infinity }}
                    className="flex w-max items-center gap-2"
                  >
                    {[
                      { text: "Mera credit score 800+ kaise hoga?", icon: TrendingUp },
                      { text: "CIBIL me dispute kaise kare?", icon: ShieldCheck },
                      { text: "Negative remarks remove kaise kare?", icon: AlertTriangle },
                      { text: "Score update kab hota hai?", icon: RefreshCw },
                      { text: "Mera credit score 800+ kaise hoga?", icon: TrendingUp },
                      { text: "CIBIL me dispute kaise kare?", icon: ShieldCheck },
                      { text: "Negative remarks remove kaise kare?", icon: AlertTriangle },
                      { text: "Score update kab hota hai?", icon: RefreshCw }
                    ].map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <button
                          key={`r1-${idx}`}
                          onClick={() => askParth(item.text)}
                          className="flex shrink-0 items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-sm border border-slate-200/70 hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
                        >
                          <IconComponent className="h-3.5 w-3.5 text-[#1882FF] shrink-0" />
                          <span>{item.text.length > 28 ? item.text.slice(0, 26) + "..." : item.text}</span>
                        </button>
                      );
                    })}
                  </motion.div>

                  {/* ROW 2: Loops Right */}
                  <motion.div
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ ease: "linear", duration: 55, repeat: Infinity }}
                    className="flex w-max items-center gap-2"
                  >
                    {[
                      { text: "Loan approval ke chances kaise badhaye?", icon: Zap },
                      { text: "Experian score low kyu hai?", icon: AlertTriangle },
                      { text: "Best credit card for 770 score?", icon: CreditCard },
                      { text: "Credit limit double kaise kare?", icon: TrendingUp },
                      { text: "Loan approval ke chances kaise badhaye?", icon: Zap },
                      { text: "Experian score low kyu hai?", icon: AlertTriangle },
                      { text: "Best credit card for 770 score?", icon: CreditCard },
                      { text: "Credit limit double kaise kare?", icon: TrendingUp }
                    ].map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <button
                          key={`r2-${idx}`}
                          onClick={() => askParth(item.text)}
                          className="flex shrink-0 items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-sm border border-slate-200/70 hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
                        >
                          <IconComponent className="h-3.5 w-3.5 text-[#1882FF] shrink-0" />
                          <span>{item.text.length > 28 ? item.text.slice(0, 26) + "..." : item.text}</span>
                        </button>
                      );
                    })}
                  </motion.div>
                </div>

                {/* Input Bar */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    askParth(parthInput || "Meri credit summary aur suggestions batao");
                  }}
                  className="flex items-center gap-2.5 mt-1"
                >
                  <div className="flex flex-1 items-center justify-between rounded-full bg-white px-4 py-2.5 shadow-sm border border-slate-200/80">
                    <input
                      type="text"
                      value={parthInput}
                      onChange={(e) => setParthInput(e.target.value)}
                      placeholder="Ask Anything"
                      className="w-full bg-transparent text-xs font-medium text-slate-800 placeholder-slate-400 outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => showToast("Upload Bureau PDF / Loan Statement for Parth")}
                      className="text-slate-400 hover:text-slate-600 active:scale-90 pl-2"
                      title="Attach bureau report or statement"
                    >
                      <Paperclip className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1882FF] text-white shadow-md active:scale-90 transition-transform hover:bg-blue-600"
                    title={parthInput.trim() ? "Send Question" : "Voice Query"}
                  >
                    {parthInput.trim() ? <Send className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </button>
                </form>
              </div>

              {/* CARD 2: CARDS & LOANS */}
              <div className="flex flex-col gap-4 rounded-[26px] bg-white p-5 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-sm font-bold text-slate-500">
                    Credit Cards & Loans <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                  </span>
                  <span className="text-xs font-bold text-emerald-600">28% Utilized</span>
                </div>

                <div className="flex flex-col gap-4">
                  <div onClick={() => showToast("HDFC Millennia Credit Card details")} className="flex cursor-pointer items-center justify-between">
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

                  <div onClick={() => showToast("SBI Personal Loan details")} className="flex cursor-pointer items-center justify-between">
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
              <div className="flex flex-col gap-3 rounded-[26px] border border-amber-200 bg-gradient-to-br from-amber-50 via-amber-50 to-amber-100/80 p-5 shadow-sm">
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
                  onClick={() => openDisputeModal("HDFC Card Status Mismatch")}
                  className="mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-amber-600 py-3 text-xs font-extrabold text-white shadow-md hover:bg-amber-700 active:bg-amber-800"
                >
                  <ShieldCheck className="h-4 w-4" /> Rectify All 4 Discrepancies →
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* TAB 2: BUREAUS MATRIX */}
          {activeBottomNav === "bureaus" && (() => {
            const currentBureau = BUREAUS.find((b) => b.id === selectedBureauId) || BUREAUS[0];

            return (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-3.5 pb-24">
                
                {/* 1. 4-BUREAU SELECTION TILES (CLICKABLE) */}
                <div className="grid grid-cols-4 gap-2 text-center">
                  {BUREAUS.map((b) => {
                    const isSelected = selectedBureauId === b.id;
                    return (
                      <motion.button
                        key={b.id}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setSelectedBureauId(b.id)}
                        className={`rounded-2xl p-3 shadow-xs transition-all cursor-pointer flex flex-col items-center justify-between border ${
                          isSelected
                            ? "bg-white border-[#1882FF] ring-2 ring-blue-500/20 shadow-md scale-[1.02]"
                            : "bg-white border-slate-200/80 hover:border-slate-300"
                        }`}
                      >
                        <span className={`text-[10px] font-extrabold uppercase ${isSelected ? "text-[#1882FF]" : "text-slate-400"}`}>
                          {b.name.split(" ")[0]}
                        </span>
                        <div className={`text-base font-black font-mono mt-1 ${
                          b.hasDiscrepancy ? "text-rose-600" : isSelected ? "text-slate-900" : "text-slate-700"
                        }`}>
                          {b.score}{b.hasDiscrepancy ? "*" : ""}
                        </div>
                        <span className={`mt-1 h-1 w-5 rounded-full ${isSelected ? "bg-[#1882FF]" : "bg-transparent"}`} />
                      </motion.button>
                    );
                  })}
                </div>

                {/* 2. SELECTED BUREAU SUMMARY & OFFICIAL DOWNLOAD BANNER */}
                <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200/90 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-black text-slate-900">{currentBureau.name} Report</h3>
                        <span className={`rounded-md px-2 py-0.5 text-[9px] font-extrabold ${
                          currentBureau.hasDiscrepancy 
                            ? "bg-rose-50 text-rose-700 border border-rose-200" 
                            : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        }`}>
                          {currentBureau.rating}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-slate-500 font-medium">
                        {currentBureau.accounts} Accounts Reported • {currentBureau.active} Active • Updated 3 days ago
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-2xl font-black text-slate-900 font-mono">{currentBureau.score}</span>
                      <span className="text-xs text-slate-400 font-medium">/900</span>
                    </div>
                  </div>

                  {/* Official PDF Download Button */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-3 gap-2">
                    <button
                      onClick={() => showToast(`Downloading official ${currentBureau.name} Credit Dossier (PDF)...`)}
                      className="flex-1 rounded-xl bg-[#1882FF] py-2.5 text-xs font-bold text-white hover:bg-blue-600 active:scale-[0.98] transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2"
                    >
                      <FileDown className="h-4 w-4" />
                      <span>Download {currentBureau.name.split(" ")[0]} Report (PDF)</span>
                    </button>

                    <button
                      onClick={() => showToast(`Syncing latest official records from ${currentBureau.name}...`)}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 active:scale-95 transition-all cursor-pointer"
                      title="Sync Report"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* 3. FILTER PILLS */}
                <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {[
                    { id: "all", label: "All 16 Accounts" },
                    { id: "mismatch", label: "Mismatches (4)" },
                    { id: "cards", label: "Cards" },
                    { id: "loans", label: "Loans" },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setBureauMatrixFilter(f.id as any)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                        bureauMatrixFilter === f.id
                          ? "bg-[#1882FF] text-white shadow-xs"
                          : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                {/* 4. CROSS-BUREAU MISMATCH CARD */}
                <div className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm border border-slate-200/90">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-extrabold text-slate-900">HDFC Millennia Credit Card</h3>
                      <div className="text-[11px] text-slate-400 font-medium">•••• 4492 • Limit ₹2.50L</div>
                    </div>
                    <span className="rounded-md bg-rose-50 border border-rose-200 px-2 py-0.5 text-[9px] font-extrabold text-rose-700 uppercase">
                      Status Mismatch
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-slate-400 text-[10px] font-bold uppercase">CIBIL:</span>
                      <div className="font-bold text-emerald-600">Closed (₹0)</div>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] font-bold uppercase">Experian:</span>
                      <div className="font-bold text-rose-600">Active (₹42,000)</div>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] font-bold uppercase">CRIF High:</span>
                      <div className="font-bold text-emerald-600">Closed (₹0)</div>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] font-bold uppercase">Equifax:</span>
                      <div className="font-bold text-emerald-600">Closed (₹0)</div>
                    </div>
                  </div>

                  <button
                    onClick={() => openDisputeModal("HDFC Credit Card Status Mismatch")}
                    className="w-full rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white hover:bg-[#1882FF] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>File 1-Click Rectification Request</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })()}

          {/* TAB 3: CARDS DESK (MANAGE YOUR CARDS - UNIFIED PRIMESCORE FINTECH REDESIGN) */}
          {activeBottomNav === "cards" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-3.5 pb-24">
              
              {/* UNIFIED HEADER, SUBTABS & STATUS CARD */}
              <div className="rounded-[28px] bg-white p-4 shadow-sm border border-slate-200/80 flex flex-col gap-3.5">
                {/* Header Title & Active Badge */}
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-black text-slate-900 tracking-tight">Manage Your Cards</h2>
                    <p className="text-xs text-slate-500 font-medium">3 Linked Credit Cards • 100% On-Time Record</p>
                  </div>
                  <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[10px] font-black text-[#1882FF]">
                    3 Active
                  </span>
                </div>

                {/* Subtab Segmented Switcher */}
                <div className="flex items-center border-b border-slate-100 gap-6 text-xs">
                  <button
                    onClick={() => setCardSubTab("your_cards")}
                    className={`pb-2 font-extrabold transition-colors relative cursor-pointer ${
                      cardSubTab === "your_cards" ? "text-[#1882FF]" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    Your Cards
                    {cardSubTab === "your_cards" && (
                      <motion.div layoutId="cardSubTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1882FF]" />
                    )}
                  </button>

                  <button
                    onClick={() => setCardSubTab("get_card")}
                    className={`pb-2 font-extrabold transition-colors relative flex items-center gap-1.5 cursor-pointer ${
                      cardSubTab === "get_card" ? "text-[#1882FF]" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <span>Get a Card</span>
                    <span className="rounded bg-[#1882FF] px-1.5 py-0.2 text-[8px] font-black text-white">
                      NEW
                    </span>
                    {cardSubTab === "get_card" && (
                      <motion.div layoutId="cardSubTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1882FF]" />
                    )}
                  </button>
                </div>

                {/* Integrated 0 Dues Status Pill inside the unified card */}
                {cardSubTab === "your_cards" && (
                  <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-blue-50/60 via-slate-50 to-emerald-50/40 p-3 border border-slate-100">
                    <div>
                      <h3 className="text-sm font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" /> 0 dues found
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium">All accounts active &amp; reported clean across 4 bureaus</p>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-black text-emerald-800">
                      Clean Record
                    </span>
                  </div>
                )}
              </div>

              {/* VIEW 1: YOUR CARDS */}
              {cardSubTab === "your_cards" && (
                <div className="flex flex-col gap-3.5">

                  {/* Active Credit Cards Section Header */}
                  <div className="flex items-center justify-between px-1">
                    <span className="text-xs font-black text-slate-600 uppercase tracking-wider">
                      Active credit cards
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 border border-slate-200">
                      ₹0 platform fee
                    </span>
                  </div>

                  {/* Card List Items */}
                  {[
                    {
                      bank: "ICICI Bank",
                      cardName: "Sapphiro Visa Signature",
                      mask: "•••• 4821",
                      limit: "₹5,00,000",
                      utilization: "34%",
                      dueDate: "18 Oct",
                      balance: "₹1,72,947",
                      minDue: "₹8,650",
                      badge: "Active",
                      badgeColor: "bg-blue-50 text-[#1882FF] border-blue-200"
                    },
                    {
                      bank: "RBL Bank",
                      cardName: "Platinum Maxima Mastercard",
                      mask: "•••• 8912",
                      limit: "₹2,50,000",
                      utilization: "39%",
                      dueDate: "22 Oct",
                      balance: "₹99,853",
                      minDue: "₹4,990",
                      badge: "Active",
                      badgeColor: "bg-blue-50 text-[#1882FF] border-blue-200"
                    },
                    {
                      bank: "HDFC Bank",
                      cardName: "Regalia Gold Visa",
                      mask: "•••• 1042",
                      limit: "₹4,00,000",
                      utilization: "6%",
                      dueDate: "28 Oct",
                      balance: "₹24,310",
                      minDue: "₹1,200",
                      badge: "Optimal (6%)",
                      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
                    }
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className="rounded-[24px] bg-white p-4 shadow-sm border border-slate-200/80 hover:border-blue-300 transition-all"
                    >
                      {/* Top Bank Name & Chevron Row */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-extrabold text-slate-900">{card.bank}</h4>
                          <span className="text-[10px] font-bold text-slate-400">{card.mask}</span>
                          <span className={`rounded-full px-2 py-0.5 text-[9px] font-black border ${card.badgeColor}`}>
                            {card.badge}
                          </span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-400" />
                      </div>

                      {/* Card Utilization Details */}
                      <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                        <span>Limit: <strong className="text-slate-800">{card.limit}</strong></span>
                        <span>Util: <strong className="text-slate-800">{card.utilization}</strong></span>
                        <span>Due: <strong className="text-slate-800">{card.dueDate}</strong></span>
                      </div>

                      {/* Lower Balance & Pay Now Button Row */}
                      <div className="mt-3.5 flex items-center justify-between pt-2 border-t border-slate-100">
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                            Current Balance
                          </div>
                          <div className="text-xl font-black text-slate-900 tracking-tight">
                            {card.balance}
                          </div>
                          <div className="text-[10px] text-slate-400 font-medium">
                            Min due: {card.minDue}
                          </div>
                        </div>

                        <button
                          onClick={() => showToast(`Initiating UPI payment for ${card.bank} (${card.balance})`)}
                          className="rounded-full bg-slate-900 px-6 py-2 text-xs font-black text-white shadow-sm hover:bg-[#1882FF] active:scale-95 transition-all cursor-pointer"
                        >
                          Pay Now
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Yellow/Gold Floating Reward Discount Strip */}
                  <div
                    onClick={() => showToast("Prime Coins applied: ₹7.90 instant discount ready")}
                    className="rounded-2xl bg-amber-50 border border-amber-300/80 p-3 shadow-sm flex items-center justify-between cursor-pointer hover:bg-amber-100/70 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-slate-950 font-black text-xs shadow-sm">
                        🪙
                      </div>
                      <span className="text-xs font-bold text-amber-950">
                        Use your coins and get a discount of ₹7.90
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-amber-700" />
                  </div>
                </div>
              )}

              {/* VIEW 2: GET A CARD (PRE-APPROVED OFFERS) */}
              {cardSubTab === "get_card" && (
                <div className="flex flex-col gap-3.5">
                  <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200/90">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1882FF]">
                        Pre-Approved Cards
                      </span>
                      <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[9px] font-bold text-emerald-700">
                        771+ Unlocked
                      </span>
                    </div>
                    <h3 className="mt-1.5 text-base font-black text-slate-900">Pre-Approved Credit Cards</h3>
                    <p className="mt-0.5 text-xs text-slate-500 font-medium">Zero paperwork • Instant digital card generation</p>
                  </div>

                  {[
                    {
                      bank: "ICICI Bank",
                      card: "Sapphiro Card",
                      type: "Lifetime Free • Visa Signature",
                      perks: "₹5,000 Gift Vouchers + 2 Free Lounge Visits/Quarter",
                      tag: "Pre-Approved",
                      tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
                    },
                    {
                      bank: "HDFC Bank",
                      card: "Diners Club Black",
                      type: "Premium Travel & Rewards",
                      perks: "10x Reward Points on SmartBuy + Unlimited Airport Lounges",
                      tag: "High Reward",
                      tagColor: "bg-blue-50 text-blue-700 border-blue-200"
                    },
                    {
                      bank: "Axis Bank",
                      card: "Atlas Card",
                      type: "Frequent Flyer Miles",
                      perks: "5,000 Bonus EDGE Miles on 1st Transaction + Hotel Upgrades",
                      tag: "Special Offer",
                      tagColor: "bg-purple-50 text-purple-700 border-purple-200"
                    }
                  ].map((offer, i) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between gap-3.5"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold border ${offer.tagColor}`}>
                            {offer.tag}
                          </span>
                          <div className="mt-2">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{offer.bank}</span>
                            <h4 className="text-sm font-extrabold text-slate-900 leading-tight">{offer.card}</h4>
                          </div>
                          <p className="mt-1 text-[11px] font-semibold text-slate-500">{offer.type}</p>
                          <p className="mt-1.5 text-xs text-slate-600 leading-snug">{offer.perks}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => showToast(`Applying for ${offer.card}... Zero CIBIL hard hit!`)}
                        className="w-full rounded-xl bg-[#1882FF] py-2.5 text-xs font-bold text-white hover:bg-blue-600 active:scale-[0.98] transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                      >
                        <span>Apply in 60 Seconds</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 4: LOANS DESK (INSTITUTIONAL BORROWINGS & EMI CALCULATOR - UNIFIED REDESIGN) */}
          {activeBottomNav === "loans" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-3.5 pb-24">
              
              {/* UNIFIED HEADER, SUBTABS & STATUS CARD */}
              <div className="rounded-[28px] bg-white p-4 shadow-sm border border-slate-200/80 flex flex-col gap-3.5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-black text-slate-900 tracking-tight">Manage Your Loans</h2>
                    <p className="text-xs text-slate-500 font-medium">2 Active Borrowings • ₹17.65L Principal Remaining</p>
                  </div>
                  <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[10px] font-black text-[#1882FF]">
                    2 Active
                  </span>
                </div>

                {/* Subtab Segmented Switcher */}
                <div className="flex items-center border-b border-slate-100 gap-5 text-xs">
                  <button
                    onClick={() => setLoanSubTab("active_loans")}
                    className={`pb-2 font-extrabold transition-colors relative cursor-pointer ${
                      loanSubTab === "active_loans" ? "text-[#1882FF]" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    Active Loans
                    {loanSubTab === "active_loans" && (
                      <motion.div layoutId="loanSubTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1882FF]" />
                    )}
                  </button>

                  <button
                    onClick={() => setLoanSubTab("pre_approved")}
                    className={`pb-2 font-extrabold transition-colors relative flex items-center gap-1 cursor-pointer ${
                      loanSubTab === "pre_approved" ? "text-[#1882FF]" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <span>Pre-Approved</span>
                    <span className="rounded bg-[#1882FF] px-1.5 py-0.2 text-[8px] font-black text-white">
                      4 OFFERS
                    </span>
                    {loanSubTab === "pre_approved" && (
                      <motion.div layoutId="loanSubTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1882FF]" />
                    )}
                  </button>

                  <button
                    onClick={() => setLoanSubTab("emi_calc")}
                    className={`pb-2 font-extrabold transition-colors relative cursor-pointer ${
                      loanSubTab === "emi_calc" ? "text-[#1882FF]" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    EMI Calculator
                    {loanSubTab === "emi_calc" && (
                      <motion.div layoutId="loanSubTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1882FF]" />
                    )}
                  </button>
                </div>

                {/* Integrated Status Row */}
                {loanSubTab === "active_loans" && (
                  <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-blue-50/60 via-slate-50 to-emerald-50/40 p-3 border border-slate-100">
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Total Monthly EMI</div>
                      <h3 className="text-base font-black text-slate-900 tracking-tight">₹42,500 <span className="text-[10px] font-normal text-slate-500">/mo • Next auto-debit: 5th Oct</span></h3>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[9px] font-black text-emerald-800 flex items-center gap-1">
                      <Check className="h-3 w-3" /> Autopay Active
                    </span>
                  </div>
                )}
              </div>

              {/* VIEW 1: ACTIVE LOANS */}
              {loanSubTab === "active_loans" && (
                <div className="flex flex-col gap-3.5">

                  {/* Active Institutional Loans Header */}
                  <div className="flex items-center justify-between px-1">
                    <span className="text-xs font-black text-slate-600 uppercase tracking-wider">
                      Active institutional loans
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 border border-slate-200">
                      4-Bureau Synced
                    </span>
                  </div>

                  {/* Loan List Items */}
                  {[
                    {
                      bank: "HDFC Bank Home Loan",
                      account: "•••• 9210",
                      sanctioned: "₹25 Lakhs",
                      roi: "8.55% p.a.",
                      tenureLeft: "18 yrs left",
                      outstanding: "₹14,25,000",
                      emi: "₹24,800",
                      tag: "Regular On-Time",
                      tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
                    },
                    {
                      bank: "ICICI Bank Personal Loan",
                      account: "•••• 3314",
                      sanctioned: "₹5 Lakhs",
                      roi: "10.40% p.a.",
                      tenureLeft: "14 mos left",
                      outstanding: "₹3,40,000",
                      emi: "₹17,700",
                      tag: "Regular On-Time",
                      tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
                    }
                  ].map((loan, idx) => (
                    <div
                      key={idx}
                      className="rounded-[24px] bg-white p-4 shadow-sm border border-slate-200/80 hover:border-blue-300 transition-all"
                    >
                      {/* Top Row */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-extrabold text-slate-900">{loan.bank}</h4>
                          <span className="text-[10px] font-bold text-slate-400">{loan.account}</span>
                          <span className={`rounded-full px-2 py-0.5 text-[9px] font-black border ${loan.tagColor}`}>
                            {loan.tag}
                          </span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-400" />
                      </div>

                      {/* Details Row */}
                      <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                        <span>ROI: <strong className="text-slate-800">{loan.roi}</strong></span>
                        <span>Tenure: <strong className="text-slate-800">{loan.tenureLeft}</strong></span>
                        <span>Sanctioned: <strong className="text-slate-800">{loan.sanctioned}</strong></span>
                      </div>

                      {/* Outstanding & Pay EMI Button Row */}
                      <div className="mt-3.5 flex items-center justify-between pt-2 border-t border-slate-100">
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                            Outstanding Principal
                          </div>
                          <div className="text-xl font-black text-slate-900 tracking-tight">
                            {loan.outstanding}
                          </div>
                          <div className="text-[10px] text-slate-400 font-medium">
                            Monthly EMI: {loan.emi}
                          </div>
                        </div>

                        <button
                          onClick={() => showToast(`Opening EMI payment portal for ${loan.bank} (${loan.emi})`)}
                          className="rounded-full bg-slate-900 px-6 py-2 text-xs font-black text-white shadow-sm hover:bg-[#1882FF] active:scale-95 transition-all cursor-pointer"
                        >
                          Pay EMI
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Yellow/Gold Floating Reward Discount Strip */}
                  <div
                    onClick={() => showToast("Fee Waiver applied on next Top-up Loan")}
                    className="rounded-2xl bg-amber-50 border border-amber-300/80 p-3 shadow-sm flex items-center justify-between cursor-pointer hover:bg-amber-100/70 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-slate-950 font-black text-xs shadow-sm">
                        🪙
                      </div>
                      <span className="text-xs font-bold text-amber-950">
                        Use Prime coins to get 100% processing fee waiver on loan disbursals
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-amber-700" />
                  </div>
                </div>
              )}

              {/* VIEW 2: PRE-APPROVED LOAN OFFERS */}
              {loanSubTab === "pre_approved" && (
                <div className="flex flex-col gap-3.5">
                  {/* Clean PrimeScore Banner (White Theme) */}
                  <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200/90">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1882FF]">
                        Pre-Approved Limits
                      </span>
                      <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[9px] font-bold text-emerald-700">
                        0 Hard Inquiries
                      </span>
                    </div>
                    <h3 className="mt-1.5 text-base font-black text-slate-900">Institutional Borrowing Limits</h3>
                    <p className="mt-0.5 text-xs text-slate-500 font-medium">Direct disbursal to verified salary account</p>
                  </div>

                  {[
                    {
                      bank: "HDFC Bank",
                      title: "Instant Personal Loan",
                      amount: "₹15,00,000",
                      roi: "10.25% p.a.",
                      tenure: "Flexible 12 to 60 Months",
                      feature: "Instant 2-minute disbursal with zero branch visits",
                      tag: "Instant Disbursal",
                      tagColor: "bg-blue-50 text-blue-700 border-blue-200"
                    },
                    {
                      bank: "Axis Bank",
                      title: "Prime Auto Loan",
                      amount: "₹8,50,000",
                      roi: "8.75% p.a.",
                      tenure: "Up to 7 Years",
                      feature: "100% on-road funding + Zero foreclosure fee after 6 mos",
                      tag: "Special ROI",
                      tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
                    },
                    {
                      bank: "SBI Bank",
                      title: "Home Loan Balance Transfer",
                      amount: "₹25,00,000",
                      roi: "8.35% p.a.",
                      tenure: "Up to 25 Years",
                      feature: "Reduce current EMI rate & save up to ₹3.4L interest",
                      tag: "Save ₹3.4L",
                      tagColor: "bg-purple-50 text-purple-700 border-purple-200"
                    }
                  ].map((offer, i) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between gap-3.5"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold border ${offer.tagColor}`}>
                            {offer.tag}
                          </span>
                          <span className="text-xs font-black text-emerald-600 font-mono">{offer.roi}</span>
                        </div>

                        <div className="mt-2 flex items-baseline justify-between">
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{offer.bank}</span>
                            <h4 className="text-sm font-extrabold text-slate-900 leading-tight">{offer.title}</h4>
                          </div>
                          <div className="text-lg font-black text-slate-900 font-mono">{offer.amount}</div>
                        </div>

                        <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                          <span>{offer.tenure}</span>
                        </div>

                        <p className="mt-1.5 text-xs text-slate-600 leading-snug">{offer.feature}</p>
                      </div>

                      <button
                        onClick={() => showToast(`Claiming offer: ${offer.title} (${offer.amount})`)}
                        className="w-full rounded-xl bg-[#1882FF] py-2.5 text-xs font-bold text-white hover:bg-blue-600 active:scale-[0.98] transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                      >
                        <span>Avail Pre-Approved Loan</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* VIEW 3: EMI CALCULATOR (ENHANCED PRIMESCORE FINTECH UI) */}
              {loanSubTab === "emi_calc" && (() => {
                const monthlyRoi = loanCalcRoi / 1200;
                const calculatedEmi = Math.round(
                  (loanCalcAmount * monthlyRoi * Math.pow(1 + monthlyRoi, loanCalcTenure)) /
                    (Math.pow(1 + monthlyRoi, loanCalcTenure) - 1)
                );
                const totalPayment = calculatedEmi * loanCalcTenure;
                const totalInterest = Math.max(0, totalPayment - loanCalcAmount);
                const principalPercent = Math.min(100, Math.max(1, Math.round((loanCalcAmount / totalPayment) * 100)));
                const interestPercent = 100 - principalPercent;
                const marketRateEmi = Math.round(
                  (loanCalcAmount * (13.5 / 1200) * Math.pow(1 + 13.5 / 1200, loanCalcTenure)) /
                    (Math.pow(1 + 13.5 / 1200, loanCalcTenure) - 1)
                );
                const monthlySavings = Math.max(0, marketRateEmi - calculatedEmi);
                const totalSavings = monthlySavings * loanCalcTenure;
                const firstMonthInterest = Math.round(loanCalcAmount * monthlyRoi);
                const firstMonthPrincipal = Math.max(0, calculatedEmi - firstMonthInterest);

                return (
                  <div className="flex flex-col gap-3.5">
                    
                    {/* 1. TOP HERO CARD (Crisp PrimeScore Theme - Clean White with Blue & Emerald Accents) */}
                    <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200/90 relative overflow-hidden">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                          <Calculator className="h-3.5 w-3.5 text-[#1882FF]" /> ESTIMATED MONTHLY EMI
                        </span>
                        <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600" /> Prime 771 Rate
                        </span>
                      </div>

                      {/* Main Monthly EMI Number */}
                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="text-3xl font-black tracking-tight text-slate-900 font-mono">
                          ₹{calculatedEmi.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">/ month</span>
                      </div>

                      {/* Green Monthly Savings Badge */}
                      <div className="mt-3.5 flex items-center gap-2.5 rounded-xl bg-emerald-50 border border-emerald-200/80 p-3 text-xs">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white font-black text-xs shadow-xs">
                          ₹
                        </div>
                        <div className="leading-snug">
                          <div className="font-extrabold text-emerald-900 text-xs">
                            Save ₹{monthlySavings.toLocaleString("en-IN")}/mo with PrimeScore (₹{totalSavings.toLocaleString("en-IN")} total)
                          </div>
                          <div className="text-[10px] text-emerald-700 font-medium mt-0.5">
                            Standard market rate is 13.50% • Your 771 score unlocked {loanCalcRoi}%
                          </div>
                        </div>
                      </div>

                      {/* Visual Payment Distribution Bar */}
                      <div className="mt-4 pt-3.5 border-t border-slate-100">
                        <div className="flex items-center justify-between text-[11px] font-bold mb-2">
                          <span className="text-[#1882FF] flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-[#1882FF]" /> Principal ({principalPercent}%)
                          </span>
                          <span className="text-emerald-700 flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Total Interest ({interestPercent}%)
                          </span>
                        </div>

                        {/* Dual Progress Track */}
                        <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-slate-100 border border-slate-200/50">
                          <div
                            style={{ width: `${principalPercent}%` }}
                            className="h-full bg-[#1882FF] transition-all duration-300"
                          />
                          <div
                            style={{ width: `${interestPercent}%` }}
                            className="h-full bg-emerald-500 transition-all duration-300"
                          />
                        </div>

                        {/* 3 Metric Mini Cards */}
                        <div className="mt-3.5 grid grid-cols-3 gap-2 text-center">
                          <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Principal</div>
                            <div className="text-xs font-black text-slate-900 mt-0.5 font-mono">
                              ₹{loanCalcAmount.toLocaleString("en-IN")}
                            </div>
                          </div>

                          <div className="rounded-xl bg-emerald-50/70 p-2.5 border border-emerald-100">
                            <div className="text-[9px] font-bold text-emerald-700 uppercase tracking-wider">Interest</div>
                            <div className="text-xs font-black text-emerald-700 mt-0.5 font-mono">
                              ₹{totalInterest.toLocaleString("en-IN")}
                            </div>
                          </div>

                          <div className="rounded-xl bg-blue-50/70 p-2.5 border border-blue-100">
                            <div className="text-[9px] font-bold text-blue-700 uppercase tracking-wider">Total Payable</div>
                            <div className="text-xs font-black text-slate-900 mt-0.5 font-mono">
                              ₹{totalPayment.toLocaleString("en-IN")}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2. INTERACTIVE SLIDER CONTROLS CARD WITH DIRECT MANUAL EDITING */}
                    <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200/90 flex flex-col gap-5">
                      
                      {/* Control 1: Loan Principal */}
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <span className="text-xs font-extrabold text-slate-900">Loan Principal</span>
                            <span className="block text-[10px] text-slate-400 font-medium">Choose or enter borrowing amount</span>
                          </div>
                          
                          {/* Editable Principal Input Box */}
                          <div className="flex items-center gap-1 rounded-xl bg-blue-50/80 px-2.5 py-1 border border-blue-200 focus-within:border-[#1882FF] focus-within:bg-white transition-colors">
                            <span className="text-xs font-extrabold text-[#1882FF]">₹</span>
                            <input
                              type="number"
                              min="10000"
                              max="10000000"
                              step="5000"
                              value={loanCalcAmount}
                              onChange={(e) => {
                                const val = Number(e.target.value);
                                setLoanCalcAmount(isNaN(val) ? 0 : val);
                              }}
                              className="w-24 bg-transparent text-right text-sm font-black text-[#1882FF] font-mono outline-none"
                            />
                          </div>
                        </div>

                        <input
                          type="range"
                          min="50000"
                          max="2500000"
                          step="25000"
                          value={Math.min(2500000, Math.max(50000, loanCalcAmount))}
                          onChange={(e) => setLoanCalcAmount(Number(e.target.value))}
                          className="mt-2.5 w-full h-2 bg-slate-200 rounded-lg accent-[#1882FF] cursor-pointer"
                        />

                        {/* Min / Max labels */}
                        <div className="mt-1 flex justify-between text-[10px] text-slate-400 font-semibold">
                          <span>₹50,000</span>
                          <span>₹12.50 Lakhs</span>
                          <span>₹25 Lakhs</span>
                        </div>

                        {/* Quick Amount Chips */}
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {[
                            { amt: 100000, label: "₹1L" },
                            { amt: 300000, label: "₹3L" },
                            { amt: 500000, label: "₹5L" },
                            { amt: 1000000, label: "₹10L" },
                            { amt: 1500000, label: "₹15L" },
                            { amt: 2000000, label: "₹20L" }
                          ].map((item) => (
                            <button
                              key={item.amt}
                              onClick={() => setLoanCalcAmount(item.amt)}
                              className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold transition-all cursor-pointer ${
                                loanCalcAmount === item.amt
                                  ? "bg-[#1882FF] text-white shadow-sm"
                                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/70"
                              }`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Control 2: Loan Tenure */}
                      <div className="border-t border-slate-100 pt-4">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <span className="text-xs font-extrabold text-slate-900">Loan Tenure</span>
                            <span className="block text-[10px] text-slate-400 font-medium">Repayment period in months</span>
                          </div>

                          {/* Editable Tenure Input Box */}
                          <div className="flex items-center gap-1 rounded-xl bg-blue-50/80 px-2.5 py-1 border border-blue-200 focus-within:border-[#1882FF] focus-within:bg-white transition-colors">
                            <input
                              type="number"
                              min="3"
                              max="360"
                              step="1"
                              value={loanCalcTenure}
                              onChange={(e) => {
                                const val = Number(e.target.value);
                                setLoanCalcTenure(isNaN(val) ? 0 : val);
                              }}
                              className="w-10 bg-transparent text-right text-sm font-black text-[#1882FF] font-mono outline-none"
                            />
                            <span className="text-xs font-extrabold text-[#1882FF]">Months</span>
                          </div>
                        </div>

                        <input
                          type="range"
                          min="6"
                          max="84"
                          step="6"
                          value={Math.min(84, Math.max(6, loanCalcTenure))}
                          onChange={(e) => setLoanCalcTenure(Number(e.target.value))}
                          className="mt-2.5 w-full h-2 bg-slate-200 rounded-lg accent-[#1882FF] cursor-pointer"
                        />

                        <div className="mt-1 flex justify-between text-[10px] text-slate-400 font-semibold">
                          <span>6 Months</span>
                          <span>36 Months ({Math.round((loanCalcTenure / 12) * 10) / 10} yrs)</span>
                          <span>84 Months (7 yrs)</span>
                        </div>

                        {/* Quick Tenure Chips */}
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {[
                            { m: 12, label: "12 Mos (1y)" },
                            { m: 24, label: "24 Mos (2y)" },
                            { m: 36, label: "36 Mos (3y)" },
                            { m: 48, label: "48 Mos (4y)" },
                            { m: 60, label: "60 Mos (5y)" },
                            { m: 84, label: "84 Mos (7y)" }
                          ].map((t) => (
                            <button
                              key={t.m}
                              onClick={() => setLoanCalcTenure(t.m)}
                              className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold transition-all cursor-pointer ${
                                loanCalcTenure === t.m
                                  ? "bg-[#1882FF] text-white shadow-sm"
                                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/70"
                              }`}
                            >
                              {t.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Control 3: Interest Rate (ROI) */}
                      <div className="border-t border-slate-100 pt-4">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <span className="text-xs font-extrabold text-slate-900">Interest Rate (ROI)</span>
                            <span className="block text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3" /> Unlocked Tier-1 Rate
                            </span>
                          </div>

                          {/* Editable ROI Input Box */}
                          <div className="flex items-center gap-1 rounded-xl bg-emerald-50 px-2.5 py-1 border border-emerald-200 focus-within:border-emerald-500 focus-within:bg-white transition-colors">
                            <input
                              type="number"
                              min="1"
                              max="40"
                              step="0.05"
                              value={loanCalcRoi}
                              onChange={(e) => {
                                const val = Number(e.target.value);
                                setLoanCalcRoi(isNaN(val) ? 0 : val);
                              }}
                              className="w-14 bg-transparent text-right text-sm font-black text-emerald-700 font-mono outline-none"
                            />
                            <span className="text-xs font-extrabold text-emerald-700">% p.a.</span>
                          </div>
                        </div>

                        <input
                          type="range"
                          min="8.0"
                          max="18.0"
                          step="0.25"
                          value={Math.min(18.0, Math.max(8.0, loanCalcRoi))}
                          onChange={(e) => setLoanCalcRoi(Number(e.target.value))}
                          className="mt-2.5 w-full h-2 bg-slate-200 rounded-lg accent-emerald-500 cursor-pointer"
                        />

                        <div className="mt-1 flex justify-between text-[10px] text-slate-400 font-semibold">
                          <span className="text-emerald-600 font-bold">8.0% (Prime Home)</span>
                          <span>12.5%</span>
                          <span>18.0%</span>
                        </div>

                        {/* Quick Rate Chips */}
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {[
                            { r: 8.5, label: "8.50% (Home Loan)" },
                            { r: 10.25, label: "10.25% (Prime Personal)" },
                            { r: 12.5, label: "12.50% (Standard)" },
                            { r: 14.75, label: "14.75% (Non-Prime)" }
                          ].map((rate) => (
                            <button
                              key={rate.r}
                              onClick={() => setLoanCalcRoi(rate.r)}
                              className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold transition-all cursor-pointer ${
                                loanCalcRoi === rate.r
                                  ? "bg-emerald-600 text-white shadow-sm"
                                  : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200"
                              }`}
                            >
                              {rate.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 3. MONTHLY AMORTIZATION & REPAYMENT SCHEDULE INSIGHTS */}
                    <div className="rounded-[28px] bg-white p-5 shadow-sm border border-slate-200/80 flex flex-col gap-3.5">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                            <Coins className="h-4 w-4 text-emerald-600" /> Monthly Payment Breakdown
                          </h4>
                          <p className="text-[11px] text-slate-500 font-medium">How your ₹{calculatedEmi.toLocaleString("en-IN")} monthly EMI is applied</p>
                        </div>
                        <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[9px] font-black text-emerald-700">
                          Month 1
                        </span>
                      </div>

                      {/* Split Columns */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="rounded-2xl bg-blue-50/70 border border-blue-100 p-3">
                          <div className="text-[10px] font-bold text-blue-700 uppercase">Towards Principal</div>
                          <div className="text-base font-black text-slate-900 mt-0.5 font-mono">
                            ₹{firstMonthPrincipal.toLocaleString("en-IN")}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5 font-medium">Reduces debt directly</div>
                        </div>

                        <div className="rounded-2xl bg-emerald-50/70 border border-emerald-100 p-3">
                          <div className="text-[10px] font-bold text-emerald-700 uppercase">Towards Interest</div>
                          <div className="text-base font-black text-slate-900 mt-0.5 font-mono">
                            ₹{firstMonthInterest.toLocaleString("en-IN")}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5 font-medium">Bank interest charge</div>
                        </div>
                      </div>

                      {/* Repayment Milestones List */}
                      <div className="mt-1 flex flex-col gap-2 rounded-2xl bg-slate-50 p-3 border border-slate-200/70">
                        <div className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                          Loan Payoff Milestones
                        </div>

                        <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                          <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-blue-500" /> Year 1 Completed
                          </span>
                          <span className="text-slate-600 font-mono">₹{(calculatedEmi * 12).toLocaleString("en-IN")} paid</span>
                        </div>

                        {loanCalcTenure > 12 && (
                          <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                            <span className="flex items-center gap-1.5">
                              <span className="h-2 w-2 rounded-full bg-indigo-500" /> Year 2 Completed
                            </span>
                            <span className="text-slate-600 font-mono">₹{(calculatedEmi * Math.min(24, loanCalcTenure)).toLocaleString("en-IN")} paid</span>
                          </div>
                        )}

                        <div className="flex items-center justify-between text-xs font-bold text-emerald-700 border-t border-slate-200/80 pt-1.5">
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Month {loanCalcTenure} Maturity
                          </span>
                          <span className="font-extrabold text-emerald-700">100% Debt Free (+25 Score Climb)</span>
                        </div>
                      </div>

                      {/* Prime Guarantees in Emerald */}
                      <div className="flex flex-col gap-1.5 pt-1 text-[11px] text-slate-600 font-medium">
                        <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                          <Check className="h-3.5 w-3.5 text-emerald-600" /> ₹0 Processing Fees for Prime Club Members (Save ₹5,000)
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="h-3.5 w-3.5 text-emerald-600" /> Zero Hard Credit Inquiry on CIBIL or Equifax
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="h-3.5 w-3.5 text-emerald-600" /> Disbursal in 2 minutes via partner institutional banks
                        </div>
                      </div>

                      {/* Primary CTA Button */}
                      <button
                        onClick={() =>
                          showToast(`Checking institutional eligibility for ₹${loanCalcAmount.toLocaleString("en-IN")} @ ₹${calculatedEmi.toLocaleString("en-IN")}/mo`)
                        }
                        className="mt-2.5 w-full rounded-xl bg-[#1882FF] py-3 text-xs font-bold text-white hover:bg-blue-600 active:scale-[0.98] transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Zap className="h-4 w-4 text-white fill-white" />
                        <span>Check Instant Bank Eligibility for ₹{calculatedEmi.toLocaleString("en-IN")}/mo</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>

                  </div>
                );
              })()}
            </motion.div>
          )}

          {/* TAB: PARTH ADVISORY FULL SCREEN CHAT DESK */}
          {activeBottomNav === "parth" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-1 flex-col h-full overflow-hidden bg-[#F8FAFC]">
              
              {/* 1. DEDICATED FULL-SCREEN HEADER WITH COLLAPSIBLE OPPORTUNITIES TOGGLE */}
              <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-4 py-3 border-b border-slate-200/80 shadow-xs">
                {/* Main Header Action Row */}
                <div className="flex items-center justify-between">
                  {/* Left: Parth Identity */}
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1882FF] overflow-hidden shadow-sm">
                      <img src="/parth-logo.png" alt="Parth" className="h-full w-full object-contain p-1.5" />
                    </div>
                    <div>
                      <h2 className="text-base font-black text-slate-900 leading-tight">Parth</h2>
                      <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Online
                      </span>
                    </div>
                  </div>

                  {/* Right: Opportunities Toggle Pill + Settings + PFP */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsOpportunitiesOpen(!isOpportunitiesOpen)}
                      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all cursor-pointer shadow-xs ${
                        isOpportunitiesOpen
                          ? "bg-[#1882FF] text-white"
                          : "bg-blue-50 text-[#1882FF] border border-blue-200/80 hover:bg-blue-100/70"
                      }`}
                      title="Toggle Audit Opportunities"
                    >
                      <Zap className={`h-3.5 w-3.5 ${isOpportunitiesOpen ? "fill-white text-white" : "fill-[#1882FF] text-[#1882FF]"}`} />
                      <span className="font-extrabold text-[11px]">Opportunities</span>
                      <span className={`flex h-4 min-w-4 items-center justify-center rounded px-1 text-[10px] font-black leading-none ${
                        isOpportunitiesOpen ? "bg-white text-[#1882FF]" : "bg-[#1882FF] text-white"
                      }`}>
                        4
                      </span>
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpportunitiesOpen ? "rotate-180" : ""}`} />
                    </button>

                    <button
                      onClick={() => setActiveBottomNav("profile")}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 active:scale-90 transition-all cursor-pointer"
                      title="Open Settings"
                    >
                      <Settings className="h-4.5 w-4.5 pointer-events-none" />
                    </button>
                  </div>
                </div>

                {/* 2. COLLAPSIBLE AUDIT OPPORTUNITIES DECK (SLIDES OPEN/CLOSED DIRECTLY UNDER HEADER) */}
                <AnimatePresence>
                  {isOpportunitiesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pt-3"
                    >
                      <div className="rounded-2xl bg-slate-50 p-3 border border-slate-200/80 shadow-xs">
                        <div className="flex items-center justify-between mb-2 px-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                              Audit Opportunities
                            </span>
                            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[9px] font-black text-[#1882FF]">
                              4 Detected
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setIsResetConfirmOpen(true)}
                              className="flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-slate-800 active:scale-95 transition-all cursor-pointer"
                            >
                              <RefreshCw className="h-3 w-3" />
                              <span>Reset</span>
                            </button>
                            <button
                              onClick={() => setIsOpportunitiesOpen(false)}
                              className="flex items-center gap-0.5 text-[11px] font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
                            >
                              <span>Minimize</span>
                              <ChevronUp className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* 4 Interactive Strategy Cards (Horizontal Scroll) */}
                        <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
                          {/* Card 1: Experian Rectification */}
                          <motion.div
                            whileTap={{ scale: 0.97 }}
                            onClick={() => {
                              askParth("Experian me HDFC card mismatch rectify kijiye");
                              setIsOpportunitiesOpen(false);
                            }}
                            className="flex w-[205px] shrink-0 flex-col justify-between rounded-2xl border border-rose-200/80 bg-gradient-to-b from-rose-50/80 to-white p-3 shadow-xs cursor-pointer hover:border-rose-300 transition-all"
                          >
                            <div>
                              <div className="flex items-center justify-between">
                                <span className="rounded-md bg-rose-100 px-1.5 py-0.5 text-[9px] font-black text-rose-700">
                                  CRITICAL ERROR
                                </span>
                                <span className="text-[11px] font-black text-emerald-600">+35 PTS</span>
                              </div>
                              <h4 className="mt-2 text-xs font-bold text-slate-900 leading-snug">
                                Experian HDFC Mismatch
                              </h4>
                              <p className="mt-0.5 text-[10px] text-slate-500">
                                Card closed in CIBIL, active in Experian
                              </p>
                            </div>
                            <div className="mt-2.5 flex items-center gap-1 text-[10px] font-extrabold text-[#1882FF]">
                              <span>Generate Notice</span>
                              <ChevronRight className="h-3 w-3" />
                            </div>
                          </motion.div>

                          {/* Card 2: Debt Paydown */}
                          <motion.div
                            whileTap={{ scale: 0.97 }}
                            onClick={() => {
                              askParth("Credit utilization kaise reduce kare?");
                              setIsOpportunitiesOpen(false);
                            }}
                            className="flex w-[205px] shrink-0 flex-col justify-between rounded-2xl border border-blue-200/80 bg-gradient-to-b from-blue-50/80 to-white p-3 shadow-xs cursor-pointer hover:border-blue-300 transition-all"
                          >
                            <div>
                              <div className="flex items-center justify-between">
                                <span className="rounded-md bg-blue-100 px-1.5 py-0.5 text-[9px] font-black text-blue-700">
                                  UTILIZATION
                                </span>
                                <span className="text-[11px] font-black text-emerald-600">+18 PTS</span>
                              </div>
                              <h4 className="mt-2 text-xs font-bold text-slate-900 leading-snug">
                                28% Total Utilization
                              </h4>
                              <p className="mt-0.5 text-[10px] text-slate-500">
                                ₹85,000 paydown unlocks 800+ score
                              </p>
                            </div>
                            <div className="mt-2.5 flex items-center gap-1 text-[10px] font-extrabold text-[#1882FF]">
                              <span>View Paydown Plan</span>
                              <ChevronRight className="h-3 w-3" />
                            </div>
                          </motion.div>

                          {/* Card 3: Two Wheeler DPD */}
                          <motion.div
                            whileTap={{ scale: 0.97 }}
                            onClick={() => {
                              askParth("Axis Two-Wheeler false DPD dispute kaise kare?");
                              setIsOpportunitiesOpen(false);
                            }}
                            className="flex w-[205px] shrink-0 flex-col justify-between rounded-2xl border border-amber-200/80 bg-gradient-to-b from-amber-50/80 to-white p-3 shadow-xs cursor-pointer hover:border-amber-300 transition-all"
                          >
                            <div>
                              <div className="flex items-center justify-between">
                                <span className="rounded-md bg-amber-100 px-1.5 py-0.5 text-[9px] font-black text-amber-800">
                                  PAYMENT ERROR
                                </span>
                                <span className="text-[11px] font-black text-emerald-600">+12 PTS</span>
                              </div>
                              <h4 className="mt-2 text-xs font-bold text-slate-900 leading-snug">
                                Axis Loan False DPD
                              </h4>
                              <p className="mt-0.5 text-[10px] text-slate-500">
                                Incorrect 30+ DPD reported in Mar &apos;24
                              </p>
                            </div>
                            <div className="mt-2.5 flex items-center gap-1 text-[10px] font-extrabold text-[#1882FF]">
                              <span>Review Dispute</span>
                              <ChevronRight className="h-3 w-3" />
                            </div>
                          </motion.div>

                          {/* Card 4: Pre-approved Loans */}
                          <motion.div
                            whileTap={{ scale: 0.97 }}
                            onClick={() => {
                              askParth("Mujhe pre-approved personal loan offer milega?");
                              setIsOpportunitiesOpen(false);
                            }}
                            className="flex w-[205px] shrink-0 flex-col justify-between rounded-2xl border border-emerald-200/80 bg-gradient-to-b from-emerald-50/80 to-white p-3 shadow-xs cursor-pointer hover:border-emerald-300 transition-all"
                          >
                            <div>
                              <div className="flex items-center justify-between">
                                <span className="rounded-md bg-emerald-100 px-1.5 py-0.5 text-[9px] font-black text-emerald-800">
                                  PRE-APPROVED
                                </span>
                                <span className="text-[11px] font-black text-emerald-600">10.25% ROI</span>
                              </div>
                              <h4 className="mt-2 text-xs font-bold text-slate-900 leading-snug">
                                ₹15L Personal Loan
                              </h4>
                              <p className="mt-0.5 text-[10px] text-slate-500">
                                Tier-1 prime rate from partner banks
                              </p>
                            </div>
                            <div className="mt-2.5 flex items-center gap-1 text-[10px] font-extrabold text-[#1882FF]">
                              <span>Check Offers</span>
                              <ChevronRight className="h-3 w-3" />
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. FULL-SCREEN MESSAGE STREAM (NO NESTED CARD BOX - PURE IMMERSIVE FLOW) */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 scrollbar-none">
                {parthMessages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[86%] rounded-2xl px-4 py-3 text-xs leading-relaxed shadow-xs ${
                        m.sender === "user"
                          ? "bg-[#1882FF] text-white rounded-tr-xs font-semibold shadow-blue-500/10"
                          : "bg-white text-slate-900 rounded-tl-xs border border-slate-200/80"
                      }`}
                    >
                      <div className="whitespace-pre-line">{m.text}</div>
                      {m.actionText && (
                        <div className="mt-3 border-t border-slate-100 pt-2.5">
                          <button
                            onClick={() => {
                              if (m.actionType === "dispute") openDisputeModal();
                              if (m.actionType === "simulator") setActiveBottomNav("loans");
                            }}
                            className="flex items-center gap-1.5 rounded-xl bg-slate-900 px-3.5 py-1.5 text-[11px] font-bold text-white hover:bg-slate-800 transition-colors shadow-sm cursor-pointer active:scale-95"
                          >
                            <span>{m.actionText}</span>
                            <ChevronRight className="h-3 w-3" />
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
                    className="flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-xs text-slate-500 shadow-xs border border-slate-200/80 w-fit"
                  >
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-[#1882FF] animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-2 w-2 rounded-full bg-[#1882FF] animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="h-2 w-2 rounded-full bg-[#1882FF] animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600">Cross-referencing 4-bureau dossiers...</span>
                  </motion.div>
                )}
                <div ref={messagesEndRef} className="h-1" />
              </div>

              {/* 4. STICKY BOTTOM INPUT CONSOLE (PINNED PERMANENTLY AT THE BOTTOM) */}
              <div className="shrink-0 border-t border-slate-200/80 bg-white/95 px-4 py-2.5 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
                {/* Quick Query Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {[
                    "Mera score 800+ kaise hoga?",
                    "CIBIL me dispute kaise kare?",
                    "Credit utilization reduce kare?",
                    "Pre-approved loan offers?"
                  ].map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => askParth(chip)}
                      className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-700 hover:bg-slate-200 active:scale-95 transition-all cursor-pointer"
                    >
                      {chip}
                    </button>
                  ))}
                </div>

                {/* Input Bar Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    askParth(parthInput);
                  }}
                  className="flex items-center gap-2"
                >
                  <div className="flex flex-1 items-center justify-between rounded-full bg-slate-100 px-4 py-2.5 border border-slate-200/60 focus-within:border-[#1882FF] focus-within:bg-white transition-all shadow-inner">
                    <input
                      type="text"
                      value={parthInput}
                      onChange={(e) => setParthInput(e.target.value)}
                      placeholder="Ask about score, disputes, bureau errors..."
                      className="w-full bg-transparent text-xs font-semibold text-slate-800 placeholder-slate-400 outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => showToast("Bureau Dossier attached")}
                      className="text-slate-400 hover:text-slate-600 pl-2 cursor-pointer"
                      title="Attach Dossier"
                    >
                      <Paperclip className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1882FF] text-white shadow-md active:scale-95 transition-transform cursor-pointer hover:bg-blue-600"
                    title="Send"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {/* TAB 5: PROFILE / SETTINGS (SWIGGY-STYLE FINTECH REDESIGN - PRIMESCORE THEME) */}
          {activeBottomNav === "profile" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-3.5 pb-28">
              
              {/* 1. TOP HEADER CARD (PrimeScore Brand Styling) */}
              <div className="rounded-b-[28px] bg-gradient-to-b from-blue-50/80 via-slate-50/50 to-white p-4 pt-3.5 shadow-sm border-b border-slate-200/80">
                {/* Top Action Controls */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setActiveBottomNav("home")}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-800 shadow-sm border border-slate-200/80 active:scale-90 hover:border-blue-200 hover:text-[#1882FF] transition-all cursor-pointer"
                    title="Back to Home"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => showToast("Opening 24x7 Priority Support")}
                      className="rounded-full border border-blue-200 bg-white px-3.5 py-1 text-xs font-extrabold text-[#1882FF] shadow-sm hover:bg-blue-50 active:scale-95 transition-colors cursor-pointer"
                    >
                      Help
                    </button>
                    <button
                      onClick={() => showToast("Account & KYC Preferences")}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 active:scale-90 transition-colors cursor-pointer"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* User Identity Details */}
                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-black tracking-tight text-slate-900">Sawai Singh</h1>
                    <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[10px] font-black text-[#1882FF] flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#1882FF]" /> Prime Pro
                    </span>
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-500">
                    +91 98••••••42 • PAN: <span className="font-mono text-slate-700 font-bold">KMMPS••••R</span>
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    sawai.singh@primescore.in
                  </div>
                </div>
              </div>

              {/* Padded Content Body */}
              <div className="flex flex-col gap-3.5 px-4">
                
                {/* 2. PRIME CLUB & PRE-APPROVED LOAN MARQUEE CARD */}
                <div className="rounded-[26px] bg-white border border-slate-200/80 p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black tracking-tighter text-slate-900 flex items-center">
                        prime<span className="text-[#1882FF] font-black">club</span>
                      </span>
                      <button
                        onClick={() => showToast("Prime Club Benefits Active")}
                        className="rounded-full bg-[#1882FF] hover:bg-blue-600 px-3 py-0.5 text-[10px] font-black text-white shadow-sm active:scale-95 transition-transform cursor-pointer"
                      >
                        Active Pro
                      </button>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">Renews: Dec 2026</span>
                  </div>

                  <p className="mt-1.5 text-xs font-extrabold text-slate-900">
                    Pre-approved loans, zero-fee disputes &amp; AI score boosters!
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Unlock institutional borrowing rates &amp; automated bureau remedies
                  </p>

                  {/* Looping Marquee Ad of Loans & Cards (PrimeScore Theme) */}
                  <div className="mt-3 relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50/90 via-indigo-50/40 to-blue-50/90 p-2.5 border border-blue-200/60">
                    <div className="flex items-center justify-between text-[10px] font-black text-slate-900 mb-1 px-1">
                      <span className="flex items-center gap-1 text-[#1882FF]">
                        <Zap className="h-3 w-3 text-[#1882FF] fill-[#1882FF]" /> LIVE PRE-APPROVED OFFERS
                      </span>
                      <span className="rounded bg-[#1882FF] px-1.5 py-0.5 text-[8px] font-black text-white">
                        INSTANT DISBURSAL
                      </span>
                    </div>

                    {/* Continuous Looping Marquee */}
                    <div className="relative overflow-hidden py-1">
                      <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 22, repeat: Infinity }}
                        className="flex w-max items-center gap-2.5"
                      >
                        {[
                          { title: "⚡ HDFC Personal Loan: ₹15L @ 10.25% ROI (Instant Disbursal)", tag: "Zero Fee", color: "bg-blue-100 text-blue-800" },
                          { title: "💳 ICICI Sapphiro Card: Lifetime Free + ₹5,000 Vouchers", tag: "Pre-Approved", color: "bg-emerald-100 text-emerald-800" },
                          { title: "🛡️ Free Advocate Legal Notice: Fix Experian & CIBIL Errors", tag: "Ombudsman", color: "bg-indigo-100 text-indigo-800" },
                          { title: "📈 Guaranteed +48 Score Surge within 60 Days", tag: "Prime AI", color: "bg-emerald-100 text-emerald-800" },
                          { title: "⚡ HDFC Personal Loan: ₹15L @ 10.25% ROI (Instant Disbursal)", tag: "Zero Fee", color: "bg-blue-100 text-blue-800" },
                          { title: "💳 ICICI Sapphiro Card: Lifetime Free + ₹5,000 Vouchers", tag: "Pre-Approved", color: "bg-emerald-100 text-emerald-800" },
                          { title: "🛡️ Free Advocate Legal Notice: Fix Experian & CIBIL Errors", tag: "Ombudsman", color: "bg-indigo-100 text-indigo-800" },
                          { title: "📈 Guaranteed +48 Score Surge within 60 Days", tag: "Prime AI", color: "bg-emerald-100 text-emerald-800" }
                        ].map((ad, i) => (
                          <div
                            key={i}
                            onClick={() => showToast(`Claiming offer: ${ad.title}`)}
                            className="flex shrink-0 items-center gap-2 rounded-xl bg-white px-3 py-1.5 shadow-sm border border-blue-200/70 cursor-pointer hover:bg-blue-50/70 transition-colors"
                          >
                            <span className="text-[11px] font-bold text-slate-900">{ad.title}</span>
                            <span className={`rounded px-1.5 py-0.5 text-[9px] font-extrabold ${ad.color}`}>
                              {ad.tag}
                            </span>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  {/* Internal Option Rows */}
                  <div className="mt-3 border-t border-dashed border-slate-200 pt-2.5 flex flex-col gap-1.5">
                    <div
                      onClick={() => showToast("Opening Prime Club Benefits & Perks")}
                      className="flex items-center justify-between py-1.5 cursor-pointer hover:bg-blue-50/50 rounded-xl px-2 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                        <Sparkles className="h-4 w-4 text-[#1882FF]" />
                        <span>Join Prime Club Perks</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </div>

                    <div
                      onClick={() => showToast("Enter Bureau Coupon Code")}
                      className="flex items-center justify-between py-1.5 cursor-pointer hover:bg-blue-50/50 rounded-xl px-2 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                        <Ticket className="h-4 w-4 text-[#1882FF]" />
                        <span>Redeem Membership Coupon</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </div>
                  </div>
                </div>

                {/* 3. 4 SQUIRCLE QUICK ACTION TILES (Matching reference grid) */}
                <div className="grid grid-cols-4 gap-2">
                  <button
                    onClick={() => showToast("Generating automated score analysis video...")}
                    className="flex flex-col items-center justify-center rounded-2xl bg-white p-2.5 shadow-sm border border-slate-200/80 active:scale-95 transition-all text-center cursor-pointer hover:bg-blue-50/40 hover:border-blue-200 min-h-[76px] relative overflow-hidden"
                  >
                    <div className="relative mb-1 flex items-center justify-center">
                      <Video className="h-5 w-5 text-[#1882FF]" />
                      <span className="absolute -top-1 -right-1 flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <span className="text-[10px] font-extrabold text-slate-800 leading-tight">Score Video</span>
                    <span className="text-[8px] font-black text-[#1882FF] uppercase mt-0.5">NEW</span>
                  </button>

                  <button
                    onClick={() => showToast("Viewing Linked Accounts & Autopay")}
                    className="flex flex-col items-center justify-center rounded-2xl bg-white p-2.5 shadow-sm border border-slate-200/80 active:scale-95 transition-all text-center cursor-pointer hover:bg-blue-50/40 hover:border-blue-200 min-h-[76px]"
                  >
                    <CreditCard className="h-5 w-5 text-slate-700 mb-1" />
                    <span className="text-[10px] font-extrabold text-slate-800 leading-tight">Payment Modes</span>
                  </button>

                  <button
                    onClick={() => setActiveBottomNav("disputes")}
                    className="relative flex flex-col items-center justify-center rounded-2xl bg-white p-2.5 shadow-sm border border-slate-200/80 active:scale-95 transition-all text-center cursor-pointer hover:bg-blue-50/40 hover:border-blue-200 min-h-[76px]"
                  >
                    <RotateCcw className="h-5 w-5 text-slate-700 mb-1" />
                    <span className="text-[10px] font-extrabold text-slate-800 leading-tight">My Disputes</span>
                    <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#1882FF] px-1 text-[8px] font-black text-white shadow-sm ring-1 ring-white">
                      4
                    </span>
                  </button>

                  <button
                    onClick={() => showToast("Prime Wallet: ₹2,450 Coins Available")}
                    className="flex flex-col items-center justify-center rounded-2xl bg-white p-2.5 shadow-sm border border-slate-200/80 active:scale-95 transition-all text-center cursor-pointer hover:bg-blue-50/40 hover:border-blue-200 min-h-[76px]"
                  >
                    <Wallet className="h-5 w-5 text-slate-700 mb-1" />
                    <span className="text-[10px] font-extrabold text-slate-800 leading-tight">Prime Wallet</span>
                  </button>
                </div>

                {/* 4. STRUCTURED LIST MENU CARD (Matching reference list group) */}
                <div className="rounded-[26px] bg-white border border-slate-200/80 divide-y divide-slate-100 shadow-sm overflow-hidden mb-6">
                  {[
                    { icon: Video, label: "Automated Score Analysis Video", tag: "Watch 1-Min", onClick: () => showToast("Preparing your personalized 1-minute credit report breakdown video...") },
                    { icon: CreditCard, label: "PrimeScore HDFC Bank Credit Card", tag: "Pre-Approved", onClick: () => showToast("Opening HDFC Credit Card Application") },
                    { icon: Ticket, label: "My Credit Vouchers & Benefits", tag: "₹2,450 Bal", onClick: () => showToast("Viewing Credit Vouchers") },
                    { icon: FileText, label: "Account & 4-Bureau Statement (PDF)", onClick: () => showToast("Downloading 4-Bureau PDF Dossier...") },
                    { icon: Briefcase, label: "Corporate Rewards & Salary Perks", onClick: () => showToast("Viewing Corporate Perks") },
                    { icon: GraduationCap, label: "Credit Score Academy & Guides", onClick: () => showToast("Opening Credit Academy") },
                    { icon: Bookmark, label: "Saved Dispute Filings & Dossiers", onClick: () => setActiveBottomNav("disputes") },
                    { icon: Lock, label: "Security, Biometrics & PIN Lock", onClick: () => showToast("Biometric Lock Active") },
                    { icon: LogOut, label: "Log Out", isDestructive: true, onClick: () => showToast("Logging out...") }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        onClick={item.onClick}
                        className="flex items-center justify-between p-4 hover:bg-slate-50 active:bg-slate-100 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3.5">
                          <Icon className={`h-5 w-5 ${item.isDestructive ? "text-rose-600" : "text-slate-700"}`} strokeWidth={1.8} />
                          <span className={`text-xs font-bold ${item.isDestructive ? "text-rose-600" : "text-slate-800"}`}>
                            {item.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {item.tag && (
                            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-black text-emerald-700 border border-emerald-200">
                              {item.tag}
                            </span>
                          )}
                          <ChevronRight className="h-4 w-4 text-slate-300" />
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </motion.div>
          )}

        </div>
      </div>

      {/* =========================================================
           3. SOLID BOTTOM NAVIGATION (2 Left + Floating Parth + 2 Right)
           ========================================================= */}
      {/* =========================================================
           3. BOTTOM NAVIGATION (FINTECH POLISHED)
           ========================================================= */}
      <div className={`bottom-0 left-0 right-0 z-40 flex h-[72px] items-center justify-around border-t border-slate-200/80 bg-white/95 px-3 pb-2 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.06)] ${
        isStandalone ? "fixed" : "absolute"
      }`}>
        {/* Tab 1: Home */}
        <button
          onClick={() => {
            setIsNotificationOpen(false);
            setActiveBottomNav("home");
          }}
          className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors cursor-pointer ${
            activeBottomNav === "home" ? "text-[#1882FF]" : "text-slate-400 hover:text-slate-600"
          }`}
        >
          <div className={`flex h-6 items-center justify-center ${activeBottomNav === "home" ? "scale-105" : ""}`}>
            <Home className="h-5 w-5" strokeWidth={activeBottomNav === "home" ? 2.3 : 1.8} />
          </div>
          <span className={`text-[10px] ${activeBottomNav === "home" ? "font-extrabold" : "font-semibold"}`}>
            Home
          </span>
        </button>

        {/* Tab 2: Bureaus */}
        <button
          onClick={() => {
            setIsNotificationOpen(false);
            setActiveBottomNav("bureaus");
          }}
          className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors cursor-pointer ${
            activeBottomNav === "bureaus" ? "text-[#1882FF]" : "text-slate-400 hover:text-slate-600"
          }`}
        >
          <div className={`flex h-6 items-center justify-center ${activeBottomNav === "bureaus" ? "scale-105" : ""}`}>
            <Table className="h-5 w-5" strokeWidth={activeBottomNav === "bureaus" ? 2.3 : 1.8} />
          </div>
          <span className={`text-[10px] ${activeBottomNav === "bureaus" ? "font-extrabold" : "font-semibold"}`}>
            Bureaus
          </span>
        </button>

        {/* Tab 3 (CENTER): ELEVATED SLEEK PARTH ADVISORY BUTTON */}
        <div className="flex-1 flex justify-center">
          <button
            onClick={() => {
              setIsNotificationOpen(false);
              setActiveBottomNav("parth");
            }}
            className="relative -top-3 flex flex-col items-center gap-0.5 active:scale-95 transition-transform cursor-pointer group"
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg ring-4 ring-white transition-all overflow-hidden ${
              activeBottomNav === "parth"
                ? "bg-[#1882FF] shadow-blue-500/40 ring-blue-200 scale-105"
                : "bg-[#1882FF] shadow-blue-500/25 hover:bg-blue-600"
            }`}>
              <img src="/parth-logo.png" alt="Parth" className="h-full w-full object-contain p-2" />
            </div>
            <span className={`text-[10px] font-extrabold tracking-tight ${
              activeBottomNav === "parth" ? "text-[#1882FF]" : "text-slate-700"
            }`}>
              Parth
            </span>
          </button>
        </div>

        {/* Tab 4: Cards */}
        <button
          onClick={() => {
            setIsNotificationOpen(false);
            setActiveBottomNav("cards");
          }}
          className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors cursor-pointer ${
            activeBottomNav === "cards" ? "text-[#1882FF]" : "text-slate-400 hover:text-slate-600"
          }`}
        >
          <div className={`flex h-6 items-center justify-center ${activeBottomNav === "cards" ? "scale-105" : ""}`}>
            <CreditCard className="h-5 w-5" strokeWidth={activeBottomNav === "cards" ? 2.3 : 1.8} />
          </div>
          <span className={`text-[10px] ${activeBottomNav === "cards" ? "font-extrabold" : "font-semibold"}`}>
            Cards
          </span>
        </button>

        {/* Tab 5: Loans */}
        <button
          onClick={() => {
            setIsNotificationOpen(false);
            setActiveBottomNav("loans");
          }}
          className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors cursor-pointer ${
            activeBottomNav === "loans" ? "text-[#1882FF]" : "text-slate-400 hover:text-slate-600"
          }`}
        >
          <div className={`flex h-6 items-center justify-center ${activeBottomNav === "loans" ? "scale-105" : ""}`}>
            <Landmark className="h-5 w-5" strokeWidth={activeBottomNav === "loans" ? 2.3 : 1.8} />
          </div>
          <span className={`text-[10px] ${activeBottomNav === "loans" ? "font-extrabold" : "font-semibold"}`}>
            Loans
          </span>
        </button>
      </div>

      {/* =========================================================
           4. DISPUTE BOTTOM SHEET DRAWER
           ========================================================= */}
      <AnimatePresence>
        {isDisputeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`inset-0 z-50 flex items-end bg-slate-900/60 backdrop-blur-sm ${
              isStandalone ? "fixed" : "absolute"
            }`}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full rounded-t-[32px] bg-white p-6 pb-8 shadow-2xl"
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

              {selectedDisputeTitle && (
                <div className="mt-3 rounded-xl bg-amber-50 border border-amber-200 p-2.5 text-xs font-bold text-amber-900">
                  Selected: {selectedDisputeTitle}
                </div>
              )}

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
                  showToast("Dispute #PS-9921 Submitted to Legal Advocates!");
                }}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-amber-600 py-3 text-xs font-bold text-white shadow-lg hover:bg-amber-700"
              >
                Submit Dispute to Prime Advocates →
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
           5. PARTH AI COPILOT INTERACTIVE MODAL / DRAWER
           ========================================================= */}
      <AnimatePresence>
        {isParthOpen && (
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
              className="flex h-[88%] w-full flex-col rounded-t-[32px] bg-slate-50 shadow-2xl"
            >
              {/* Drawer Pull Handle */}
              <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-slate-300" />

              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200/80 bg-white px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1882FF] overflow-hidden shadow-md">
                    <img src="/parth-logo.png" alt="Parth" className="h-full w-full object-contain p-2" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <strong className="text-sm font-extrabold text-slate-900">Parth</strong>
                      <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Online
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      Audited with Sawai&apos;s 4-Bureau Dossier (771)
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

              {/* Messages Body */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                {parthMessages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                        m.sender === "user"
                          ? "bg-[#1882FF] text-white rounded-br-none shadow-sm font-medium"
                          : "bg-white text-slate-800 rounded-bl-none shadow-sm border border-slate-200/70"
                      }`}
                    >
                      <div className="whitespace-pre-line">{m.text}</div>

                      {m.actionText && (
                        <div className="mt-3 border-t border-slate-100 pt-2">
                          <button
                            onClick={() => {
                              setIsParthOpen(false);
                              if (m.actionType === "dispute") openDisputeModal();
                              if (m.actionType === "simulator") setActiveBottomNav("simulator");
                            }}
                            className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-extrabold text-blue-700 hover:bg-blue-100 transition-colors"
                          >
                            <Zap className="h-3 w-3 text-blue-600" />
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
                    <span className="text-[11px] font-medium">Parth is analyzing your bureau metrics...</span>
                  </motion.div>
                )}
                <div ref={modalMessagesEndRef} className="h-1" />
              </div>

              {/* Quick Suggested Chips */}
              <div className="border-t border-slate-200/60 bg-white/70 px-4 py-2">
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
                  <button
                    onClick={() => askParth("HDFC card status mismatch kaise rectify hoga?")}
                    className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold text-slate-700 hover:bg-slate-200"
                  >
                    🔍 Rectify HDFC Mismatch
                  </button>
                  <button
                    onClick={() => askParth("Credit utilization kaise reduce kare?")}
                    className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold text-slate-700 hover:bg-slate-200"
                  >
                    💳 Reduce 28% Utilization
                  </button>
                  <button
                    onClick={() => askParth("Mujhe pre-approved personal loan offer milega?")}
                    className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold text-slate-700 hover:bg-slate-200"
                  >
                    ⚡ Check Pre-approved Loan
                  </button>
                </div>
              </div>

              {/* Chat Input Bar */}
              <div className="border-t border-slate-200 bg-white p-3.5">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    askParth(parthInput);
                  }}
                  className="flex items-center gap-2"
                >
                  <div className="flex flex-1 items-center justify-between rounded-full bg-slate-100 px-4 py-2.5">
                    <input
                      type="text"
                      value={parthInput}
                      onChange={(e) => setParthInput(e.target.value)}
                      placeholder="Ask Parth anything..."
                      className="w-full bg-transparent text-xs font-medium text-slate-800 placeholder-slate-400 outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => showToast("Attaching bureau dossier to Parth conversation")}
                      className="text-slate-400 hover:text-slate-600 pl-2"
                    >
                      <Paperclip className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1882FF] text-white shadow-md active:scale-95 transition-transform"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
           6. PARTH CHAT RESET CONFIRMATION POP-UP MODAL
           ========================================================= */}
      <AnimatePresence>
        {isResetConfirmOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`inset-0 z-[60] flex items-center justify-center bg-slate-950/60 backdrop-blur-sm px-6 ${
              isStandalone ? "fixed" : "absolute"
            }`}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 24, stiffness: 350 }}
              className="w-full max-w-sm rounded-[28px] bg-white p-6 shadow-2xl border border-slate-100 flex flex-col items-center text-center"
            >
              {/* Icon Container */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 mb-3.5 shadow-inner">
                <Trash2 className="h-7 w-7" />
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-extrabold text-slate-900">
                Clear Chat History?
              </h3>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed max-w-[260px]">
                Do you want to clear your current conversation with Parth and start a fresh session?
              </p>

              {/* Action Buttons */}
              <div className="mt-5 grid grid-cols-2 gap-2.5 w-full">
                <button
                  onClick={() => setIsResetConfirmOpen(false)}
                  className="w-full rounded-xl bg-slate-100 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-200 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setParthMessages([
                      {
                        sender: "parth",
                        text: "Hello Sawai! Session refreshed. I have audited your credit reports across TransUnion CIBIL, CRIF, Experian & Equifax (Composite: 771/900). 4 discrepancy opportunities are available to boost your score by +48 points. How can I assist you today?"
                      }
                    ]);
                    setIsResetConfirmOpen(false);
                    showToast("Chat cleared & session reset");
                  }}
                  className="w-full rounded-xl bg-rose-600 py-2.5 text-xs font-bold text-white hover:bg-rose-700 active:scale-[0.98] transition-all shadow-md shadow-rose-600/20 cursor-pointer"
                >
                  Yes, Clear Chat
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
