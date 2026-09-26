"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
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
  Share2,
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
  Send,
  Paperclip,
  ChevronRight,
  ChevronDown,
  Download,
  Receipt,
  Wallet,
  Landmark,
  Moon,
  Sun,
  Layers,
  Activity,
  Calculator,
  RotateCcw,
  Lock,
  LogOut,
  ExternalLink,
  Plus,
  Play,
  Video,
  Crown,
  Headphones,
  PhoneCall,
  Mail,
  Smartphone,
  CheckCheck,
  Shield,
  MoreHorizontal,
  Coins
} from "lucide-react";

// ==========================================
// BANK LOGO COMPONENT (Using /public/banks small logo icons svg/)
// ==========================================

export const getBankLogoPath = (lenderName: string): string | null => {
  const l = (lenderName || "").toLowerCase();
  if (l.includes("hdfc")) return "/banks small logo icons svg/Bank Name=HDFC Bank.svg";
  if (l.includes("axis")) return "/banks small logo icons svg/Bank Name=Axis bank.svg";
  if (l.includes("icici")) return "/banks small logo icons svg/Bank Name=ICICI Bank.svg";
  if (l.includes("sbi") || l.includes("state bank")) return "/banks small logo icons svg/Bank Name=State Bank of India.svg";
  if (l.includes("kotak")) return "/banks small logo icons svg/Bank Name=Kotak Mahindra Bank.svg";
  if (l.includes("idfc")) return "/banks small logo icons svg/Bank Name=IDFC Bank.svg";
  if (l.includes("baroda") || l.includes("bob")) return "/banks small logo icons svg/Bank Name=Bank of Baroda.svg";
  if (l.includes("punjab") || l.includes("pnb")) return "/banks small logo icons svg/Bank Name=Punjab National Bank.svg";
  if (l.includes("indus")) return "/banks small logo icons svg/Bank Name=Induslnd Bank.svg";
  if (l.includes("bajaj")) return "/banks small logo icons svg/Bajaj_Finserv_Logo.svg";
  if (l.includes("tata")) return "/banks small logo icons svg/tata-capital-logo-svg_logoshape.com.svg";
  return null;
};

export function BankLogo({ lender, className = "w-9 h-9" }: { lender: string; className?: string }) {
  const logoPath = getBankLogoPath(lender);
  const [hasError, setHasError] = useState(false);

  if (logoPath && !hasError) {
    return (
      <div className={`shrink-0 flex items-center justify-center rounded-xl bg-white border border-[#E4E9F2] p-1.5 shadow-xs overflow-hidden ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoPath}
          alt={lender}
          className="w-full h-full object-contain"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  // Fallback if lender is NBFC / FinTech (e.g. Bajaj Finserv, Tata Capital)
  const initials = (lender || "Bank")
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className={`shrink-0 flex items-center justify-center rounded-xl bg-[#EEF4FF] border border-[#D0E2FF] font-bold text-[#1882FF] text-[12px] shadow-xs ${className}`}>
      {initials || "BK"}
    </div>
  );
}

// ==========================================
// INDIAN ARCHITECTURAL JAALI / ARCH FADE-AWAY TEXTURE (SIDEWAYS DIAGONAL JHAALI)
// ==========================================

export function IndianArchitecturalMotif({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute right-0 top-0 bottom-0 w-[280px] overflow-hidden select-none opacity-40 ${className}`}
      style={{
        maskImage: "linear-gradient(to left, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.15) 75%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.15) 75%, transparent 100%)"
      }}
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Traditional Diagonal Indian Jaali Lattice Pattern */}
          <pattern
            id="sidewaysIndianJaali"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            {/* Primary Diamond Grid Lines */}
            <line x1="0" y1="0" x2="32" y2="0" stroke="#1882FF" strokeWidth="1.2" strokeOpacity="0.45" />
            <line x1="0" y1="0" x2="0" y2="32" stroke="#1882FF" strokeWidth="1.2" strokeOpacity="0.45" />

            {/* Parallel Double-Track Inset for authentic architectural carving */}
            <line x1="0" y1="4" x2="32" y2="4" stroke="#1882FF" strokeWidth="0.6" strokeOpacity="0.25" />
            <line x1="4" y1="0" x2="4" y2="32" stroke="#1882FF" strokeWidth="0.6" strokeOpacity="0.25" />

            {/* Center Rosette / Star Accent in each diamond cell */}
            <circle cx="16" cy="16" r="3.5" fill="none" stroke="#1882FF" strokeWidth="0.8" strokeOpacity="0.35" />
            <circle cx="16" cy="16" r="1.2" fill="#1882FF" fillOpacity="0.3" />

            {/* Corner Intersection Nodes */}
            <circle cx="0" cy="0" r="2.5" fill="#1882FF" fillOpacity="0.25" />
            <circle cx="32" cy="0" r="2.5" fill="#1882FF" fillOpacity="0.25" />
            <circle cx="0" cy="32" r="2.5" fill="#1882FF" fillOpacity="0.25" />
            <circle cx="32" cy="32" r="2.5" fill="#1882FF" fillOpacity="0.25" />
          </pattern>
        </defs>

        {/* Full surface fill with diagonal jhaali */}
        <rect width="100%" height="100%" fill="url(#sidewaysIndianJaali)" />
      </svg>
    </div>
  );
}

// ==========================================
// 1. DATA MODELS & RECONCILED DATA SOURCES
// ==========================================

export interface BureauScore {
  id: "cibil" | "crif" | "experian" | "equifax";
  name: string;
  tag: string;
  score: number;
  delta: string;
  ratingBand: string;
  trend: "up" | "neutral" | "down";
  statusText: string;
  accountsReported: string;
  enquiries: string;
  lastUpdated: string;
  actionText: string;
  hasIssue?: boolean;
  note?: string;
  sparkline: number[];
}

const BUREAU_SCORES: BureauScore[] = [
  {
    id: "cibil",
    name: "TransUnion CIBIL",
    tag: "CIBIL",
    score: 743,
    delta: "▲ +12 this mo",
    ratingBand: "Very good",
    trend: "up",
    statusText: "Matches on 16/16",
    accountsReported: "16 of 16 matched",
    enquiries: "1 active enquiry",
    lastUpdated: "Synced today, 3:48 PM",
    actionText: "All clean ✓",
    sparkline: [720, 725, 728, 730, 732, 735, 738, 740, 740, 742, 741, 743]
  },
  {
    id: "crif",
    name: "CRIF High Mark",
    tag: "CRIF",
    score: 757,
    delta: "▲ +8 this mo",
    ratingBand: "Very good",
    trend: "up",
    statusText: "Matches on 15/16",
    accountsReported: "15 of 16 matched",
    enquiries: "1 active enquiry",
    lastUpdated: "Synced today, 2:15 PM",
    actionText: "View report →",
    sparkline: [735, 738, 740, 742, 745, 748, 750, 752, 754, 755, 756, 757]
  },
  {
    id: "experian",
    name: "Experian",
    tag: "Experian",
    score: 770,
    delta: "● 0 in 90 days",
    ratingBand: "1 discrepancy",
    trend: "neutral",
    statusText: "1 account missing closure",
    accountsReported: "14 of 16 (1 issue)",
    enquiries: "1 active enquiry",
    lastUpdated: "Synced 18 Sep 2026",
    actionText: "Fix discrepancy →",
    hasIssue: true,
    note: "1 account missing closure record",
    sparkline: [765, 765, 768, 768, 770, 770, 770, 770, 770, 770, 770, 770]
  },
  {
    id: "equifax",
    name: "Equifax",
    tag: "Equifax",
    score: 817,
    delta: "▲ +24 this mo",
    ratingBand: "Excellent",
    trend: "up",
    statusText: "Matches on 15/16",
    accountsReported: "15 of 16 matched",
    enquiries: "0 enquiries (90d)",
    lastUpdated: "Synced today, 1:30 PM",
    actionText: "All clean ✓",
    sparkline: [780, 785, 790, 792, 795, 798, 802, 805, 808, 810, 814, 817]
  }
];

export interface CreditAccount {
  id: string;
  lender: string;
  lenderLogoText: string;
  lenderBg: string;
  product: string;
  accountNo: string;
  type: "card" | "home" | "auto" | "personal" | "consumer";
  typeLabel: string;
  openedDate: string;
  sanctionLimit: number;
  sanctionLimitFormatted: string;
  outstandingBalance: number;
  outstandingBalanceFormatted: string;
  emiFormatted?: string;
  cibilStatus: string;
  cibilMismatch: boolean;
  crifStatus: string;
  crifMismatch: boolean;
  experianStatus: string;
  experianMismatch: boolean;
  equifaxStatus: string;
  equifaxMismatch: boolean;
  status: "Matched" | "Mismatch" | "Closed" | "Active";
  discrepancyTitle?: string;
  discrepancyReason?: string;
  estImpact?: string;
  dpdHistory: {
    cibil: string[];
    crif: string[];
    experian: string[];
    equifax: string[];
  };
}

const MONTH_LABELS = [
  "Oct 23", "Nov 23", "Dec 23", "Jan 24", "Feb 24", "Mar 24",
  "Apr 24", "May 24", "Jun 24", "Jul 24", "Aug 24", "Sep 24",
  "Oct 24", "Nov 24", "Dec 24", "Jan 25", "Feb 25", "Mar 25",
  "Apr 25", "May 25", "Jun 25", "Jul 25", "Aug 25", "Sep 25",
  "Oct 25", "Nov 25", "Dec 25", "Jan 26", "Feb 26", "Mar 26",
  "Apr 26", "May 26", "Jun 26", "Jul 26", "Aug 26", "Sep 26"
];

const CLEAN_DPD_36 = Array(36).fill("000");

const ACCOUNTS_DATA: CreditAccount[] = [
  {
    id: "acc-1",
    lender: "HDFC Bank",
    lenderLogoText: "HDFC",
    lenderBg: "bg-blue-900 text-white",
    product: "Millennia Credit Card",
    accountNo: "•••• 4492",
    type: "card",
    typeLabel: "Credit card",
    openedDate: "14 Jul 2021",
    sanctionLimit: 250000,
    sanctionLimitFormatted: "₹2,50,000",
    outstandingBalance: 0,
    outstandingBalanceFormatted: "₹0",
    cibilStatus: "Closed ₹0",
    cibilMismatch: false,
    crifStatus: "Closed ₹0",
    crifMismatch: false,
    experianStatus: "Active ₹42,000",
    experianMismatch: true,
    equifaxStatus: "Closed ₹0",
    equifaxMismatch: false,
    status: "Mismatch",
    discrepancyTitle: "HDFC Bank · Millennia Credit Card",
    discrepancyReason: "Still showing ₹42,000 due at Experian, but closed at CIBIL, CRIF & Equifax",
    estImpact: "+35 pts",
    dpdHistory: {
      cibil: CLEAN_DPD_36,
      crif: CLEAN_DPD_36,
      experian: CLEAN_DPD_36,
      equifax: CLEAN_DPD_36
    }
  },
  {
    id: "acc-2",
    lender: "Axis Bank",
    lenderLogoText: "AXIS",
    lenderBg: "bg-rose-800 text-white",
    product: "Two-Wheeler Loan",
    accountNo: "•••• 9920",
    type: "auto",
    typeLabel: "Auto loan",
    openedDate: "05 Dec 2022",
    sanctionLimit: 85000,
    sanctionLimitFormatted: "₹85,000",
    outstandingBalance: 18400,
    outstandingBalanceFormatted: "₹18,400",
    emiFormatted: "₹3,200 / mo",
    cibilStatus: "000 On time",
    cibilMismatch: false,
    crifStatus: "030 (Mar 24)",
    crifMismatch: true,
    experianStatus: "000 On time",
    experianMismatch: false,
    equifaxStatus: "000 On time",
    equifaxMismatch: false,
    status: "Mismatch",
    discrepancyTitle: "Axis Bank · Two-Wheeler Loan",
    discrepancyReason: "CRIF incorrectly recorded a 30-day delay in March 2024; other 3 reports are clean",
    estImpact: "+18 pts",
    dpdHistory: {
      cibil: CLEAN_DPD_36,
      crif: CLEAN_DPD_36.map((val, idx) => (idx === 5 ? "030" : "000")),
      experian: CLEAN_DPD_36,
      equifax: CLEAN_DPD_36
    }
  },
  {
    id: "acc-3",
    lender: "ICICI Bank",
    lenderLogoText: "ICICI",
    lenderBg: "bg-amber-700 text-white",
    product: "Amazon Pay Credit Card",
    accountNo: "•••• 7811",
    type: "card",
    typeLabel: "Credit card",
    openedDate: "22 Mar 2022",
    sanctionLimit: 500000,
    sanctionLimitFormatted: "₹5,00,000",
    outstandingBalance: 68500,
    outstandingBalanceFormatted: "₹68,500",
    cibilStatus: "Old address",
    cibilMismatch: true,
    crifStatus: "Synced",
    crifMismatch: false,
    experianStatus: "Synced",
    experianMismatch: false,
    equifaxStatus: "Synced",
    equifaxMismatch: false,
    status: "Mismatch",
    discrepancyTitle: "ICICI Bank · Amazon Pay Card",
    discrepancyReason: "CIBIL has an old rental address creating a split credit file",
    estImpact: "+6 pts",
    dpdHistory: {
      cibil: CLEAN_DPD_36,
      crif: CLEAN_DPD_36,
      experian: CLEAN_DPD_36,
      equifax: CLEAN_DPD_36
    }
  },
  {
    id: "acc-4",
    lender: "Bajaj Finserv",
    lenderLogoText: "BAJAJ",
    lenderBg: "bg-blue-600 text-white",
    product: "Consumer Durable Loan",
    accountNo: "•••• 3302",
    type: "consumer",
    typeLabel: "Consumer loan",
    openedDate: "10 Jan 2023",
    sanctionLimit: 45000,
    sanctionLimitFormatted: "₹45,000",
    outstandingBalance: 0,
    outstandingBalanceFormatted: "₹0",
    cibilStatus: "Closed ₹0",
    cibilMismatch: false,
    crifStatus: "Closed ₹0",
    crifMismatch: false,
    experianStatus: "Closed ₹0",
    experianMismatch: false,
    equifaxStatus: "Duplicate",
    equifaxMismatch: true,
    status: "Mismatch",
    discrepancyTitle: "Bajaj Finserv · Consumer Loan",
    discrepancyReason: "Duplicate loan entry appearing twice in Equifax report",
    estImpact: "+12 pts",
    dpdHistory: {
      cibil: CLEAN_DPD_36,
      crif: CLEAN_DPD_36,
      experian: CLEAN_DPD_36,
      equifax: CLEAN_DPD_36
    }
  },
  {
    id: "acc-5",
    lender: "State Bank of India",
    lenderLogoText: "SBI",
    lenderBg: "bg-sky-600 text-white",
    product: "SBI Term Home Loan",
    accountNo: "•••• 6610",
    type: "home",
    typeLabel: "Home loan",
    openedDate: "15 Aug 2020",
    sanctionLimit: 3200000,
    sanctionLimitFormatted: "₹32,00,000",
    outstandingBalance: 2780000,
    outstandingBalanceFormatted: "₹27,80,000",
    emiFormatted: "₹26,800 / mo",
    cibilStatus: "Active · On time",
    cibilMismatch: false,
    crifStatus: "Active · On time",
    crifMismatch: false,
    experianStatus: "Active · On time",
    experianMismatch: false,
    equifaxStatus: "Active · On time",
    equifaxMismatch: false,
    status: "Matched",
    dpdHistory: {
      cibil: CLEAN_DPD_36,
      crif: CLEAN_DPD_36,
      experian: CLEAN_DPD_36,
      equifax: CLEAN_DPD_36
    }
  },
  {
    id: "acc-6",
    lender: "State Bank of India",
    lenderLogoText: "SBI",
    lenderBg: "bg-sky-600 text-white",
    product: "SBI Express Personal Loan",
    accountNo: "•••• 1120",
    type: "personal",
    typeLabel: "Personal loan",
    openedDate: "03 Feb 2023",
    sanctionLimit: 300000,
    sanctionLimitFormatted: "₹3,00,000",
    outstandingBalance: 112000,
    outstandingBalanceFormatted: "₹1,12,000",
    emiFormatted: "₹9,400 / mo",
    cibilStatus: "Active · On time",
    cibilMismatch: false,
    crifStatus: "Active · On time",
    crifMismatch: false,
    experianStatus: "Active · On time",
    experianMismatch: false,
    equifaxStatus: "Active · On time",
    equifaxMismatch: false,
    status: "Matched",
    dpdHistory: {
      cibil: CLEAN_DPD_36,
      crif: CLEAN_DPD_36,
      experian: CLEAN_DPD_36,
      equifax: CLEAN_DPD_36
    }
  },
  {
    id: "acc-7",
    lender: "Axis Bank",
    lenderLogoText: "AXIS",
    lenderBg: "bg-rose-800 text-white",
    product: "Magnus Credit Card",
    accountNo: "•••• 5519",
    type: "card",
    typeLabel: "Credit card",
    openedDate: "19 Oct 2022",
    sanctionLimit: 250000,
    sanctionLimitFormatted: "₹2,50,000",
    outstandingBalance: 51200,
    outstandingBalanceFormatted: "₹51,200",
    cibilStatus: "Active · On time",
    cibilMismatch: false,
    crifStatus: "Active · On time",
    crifMismatch: false,
    experianStatus: "Active · On time",
    experianMismatch: false,
    equifaxStatus: "Active · On time",
    equifaxMismatch: false,
    status: "Matched",
    dpdHistory: {
      cibil: CLEAN_DPD_36,
      crif: CLEAN_DPD_36,
      experian: CLEAN_DPD_36,
      equifax: CLEAN_DPD_36
    }
  },
  {
    id: "acc-8",
    lender: "Kotak Mahindra Bank",
    lenderLogoText: "KOTAK",
    lenderBg: "bg-red-700 text-white",
    product: "League Platinum Card",
    accountNo: "•••• 2209",
    type: "card",
    typeLabel: "Credit card",
    openedDate: "11 Nov 2021",
    sanctionLimit: 400000,
    sanctionLimitFormatted: "₹4,00,000",
    outstandingBalance: 62247,
    outstandingBalanceFormatted: "₹62,247",
    cibilStatus: "Active · On time",
    cibilMismatch: false,
    crifStatus: "Active · On time",
    crifMismatch: false,
    experianStatus: "Active · On time",
    experianMismatch: false,
    equifaxStatus: "Active · On time",
    equifaxMismatch: false,
    status: "Matched",
    dpdHistory: {
      cibil: CLEAN_DPD_36,
      crif: CLEAN_DPD_36,
      experian: CLEAN_DPD_36,
      equifax: CLEAN_DPD_36
    }
  },
  {
    id: "acc-9",
    lender: "Tata Capital",
    lenderLogoText: "TATA",
    lenderBg: "bg-blue-800 text-white",
    product: "Used Car Loan",
    accountNo: "•••• 8821",
    type: "auto",
    typeLabel: "Auto loan",
    openedDate: "28 Jun 2021",
    sanctionLimit: 565000,
    sanctionLimitFormatted: "₹5,65,000",
    outstandingBalance: 240000,
    outstandingBalanceFormatted: "₹2,40,000",
    emiFormatted: "₹14,200 / mo",
    cibilStatus: "Active · On time",
    cibilMismatch: false,
    crifStatus: "Active · On time",
    crifMismatch: false,
    experianStatus: "Active · On time",
    experianMismatch: false,
    equifaxStatus: "Active · On time",
    equifaxMismatch: false,
    status: "Matched",
    dpdHistory: {
      cibil: CLEAN_DPD_36,
      crif: CLEAN_DPD_36,
      experian: CLEAN_DPD_36,
      equifax: CLEAN_DPD_36
    }
  }
];

export interface DisputeItem {
  id: string;
  referenceNo: string;
  bureau: string;
  account: string;
  filedDate: string;
  expectedResolutionDate: string;
  status: "Draft" | "Submitted" | "With bureau" | "Resolved";
  reason: string;
  statutoryDaysRemaining: number;
}

const DISPUTES_DATA: DisputeItem[] = [
  {
    id: "dsp-1",
    referenceNo: "EXP-2026-8849",
    bureau: "Experian",
    account: "HDFC Millennia Credit Card (•••• 4492)",
    filedDate: "18 Sep 2026",
    expectedResolutionDate: "02 Oct 2026",
    status: "With bureau",
    reason: "Closure status mismatch — bank NOC submitted",
    statutoryDaysRemaining: 8
  },
  {
    id: "dsp-2",
    referenceNo: "CRF-2026-1022",
    bureau: "CRIF High Mark",
    account: "Axis Two-Wheeler Loan (•••• 9920)",
    filedDate: "21 Sep 2026",
    expectedResolutionDate: "05 Oct 2026",
    status: "With bureau",
    reason: "False 30-day late mark deletion under Section 21 of CICRA",
    statutoryDaysRemaining: 11
  },
  {
    id: "dsp-3",
    referenceNo: "CIB-2026-7719",
    bureau: "TransUnion CIBIL",
    account: "ICICI Amazon Pay Card (•••• 7811)",
    filedDate: "23 Sep 2026",
    expectedResolutionDate: "07 Oct 2026",
    status: "Submitted",
    reason: "Residence address correction to current KYC",
    statutoryDaysRemaining: 13
  },
  {
    id: "dsp-4",
    referenceNo: "EQX-2026-3301",
    bureau: "Equifax",
    account: "Bajaj Finserv Consumer Loan (•••• 3302)",
    filedDate: "24 Sep 2026",
    expectedResolutionDate: "08 Oct 2026",
    status: "Draft",
    reason: "Duplicate loan record de-duplication",
    statutoryDaysRemaining: 14
  }
];

export default function PrimeScoreDesktopApp({ initialNav = "home" }: { initialNav?: string }) {
  const [activeNav, setActiveNav] = useState<string>(
    initialNav === "overview" || initialNav === "dashboard" ? "home" : initialNav
  );
  const [accountSubNav, setAccountSubNav] = useState<
    | "profile"
    | "membership"
    | "identity"
    | "payments"
    | "notifications"
    | "security"
    | "documents"
    | "priority_help"
    | "help"
  >("profile");

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [lastSyncedText, setLastSyncedText] = useState<string>("Reports updated today, 3:48 PM");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Top bar notifications & user dropdown
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
  const [isCalcPopoverOpen, setIsCalcPopoverOpen] = useState<boolean>(false);

  // Command palette ⌘K
  const [isCommandOpen, setIsCommandOpen] = useState<boolean>(false);
  const [commandQuery, setCommandQuery] = useState<string>("");

  // Drawer for Account Details (Bureaus table click)
  const [selectedDrawerAccount, setSelectedDrawerAccount] = useState<CreditAccount | null>(null);

  // File Dispute Modal
  const [isDisputeModalOpen, setIsDisputeModalOpen] = useState<boolean>(false);
  const [disputeModalAccount, setDisputeModalAccount] = useState<CreditAccount | null>(null);
  const [disputeStep, setDisputeStep] = useState<1 | 2 | 3>(1);
  const [disputeEvidenceName, setDisputeEvidenceName] = useState<string | null>(null);
  const [disputeDraftNotice, setDisputeDraftNotice] = useState<string>("");

  // Bureaus table filters
  const [bureauTab, setBureauTab] = useState<"all" | "cibil" | "crif" | "experian" | "equifax">("all");
  const [bureauSearch, setBureauSearch] = useState<string>("");
  const [bureauFilterMode, setBureauFilterMode] = useState<"all" | "needs_attention" | "all_clear">("all");

  // Overview score history filter
  const [historyRange, setHistoryRange] = useState<"3M" | "6M" | "1Y" | "All">("1Y");
  const [showAllBureauLines, setShowAllBureauLines] = useState<boolean>(false);

  // Cards view toggle
  const [cardsViewMode, setCardsViewMode] = useState<"grid" | "table">("grid");

  // Loans tab
  const [loansTab, setLoansTab] = useState<"active" | "offers" | "calculator">("active");
  const [emiAmount, setEmiAmount] = useState<number>(500000);
  const [emiRate, setEmiRate] = useState<number>(10.5);
  const [emiTenure, setEmiTenure] = useState<number>(36);

  // Disputes view toggle
  const [disputesViewMode, setDisputesViewMode] = useState<"table" | "board">("table");

  // Simulator state
  const [simPaydown, setSimPaydown] = useState<number>(85000);
  const [simFixDisputes, setSimFixDisputes] = useState<boolean>(true);
  const [simCloseLoan, setSimCloseLoan] = useState<boolean>(false);
  const [simNoInquiries, setSimNoInquiries] = useState<boolean>(true);

  // Parth Side Panel (⌘J)
  const [isParthOpen, setIsParthOpen] = useState<boolean>(false);
  const [parthContext, setParthContext] = useState<string | null>(null);
  const [parthInput, setParthInput] = useState<string>("");
  const [isParthLoading, setIsParthLoading] = useState<boolean>(false);
  const [parthMessages, setParthMessages] = useState<
    Array<{ sender: "user" | "parth"; text: string; citation?: string; actionLabel?: string; actionNav?: string }>
  >([]);

  // Account / Profile editable form state
  const [isProfileFormDirty, setIsProfileFormDirty] = useState<boolean>(false);
  const [profileName, setProfileName] = useState<string>("Sawai Singh");
  const [profilePhone, setProfilePhone] = useState<string>("+91 98••••••42");
  const [profileEmail, setProfileEmail] = useState<string>("sawai.singh@gmail.com");
  const [profileDob, setProfileDob] = useState<string>("14 Aug 1994");
  const [profileAddress, setProfileAddress] = useState<string>("Flat 402, Royal Palms, Goregaon East, Mumbai 400063");
  const [showFullPan, setShowFullPan] = useState<boolean>(false);
  const [couponCode, setCouponCode] = useState<string>("");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Keyboard Shortcuts: ⌘K / Ctrl+K (Command palette), ⌘J / Ctrl+J (Parth), Esc (Close drawers/modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "j") {
        e.preventDefault();
        setIsParthOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsCommandOpen(false);
        setSelectedDrawerAccount(null);
        setIsDisputeModalOpen(false);
        setIsNotificationOpen(false);
        setIsCalcPopoverOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    showToast("Refreshing your 4 bureau reports...");
    setTimeout(() => {
      setIsRefreshing(false);
      setLastSyncedText("Reports updated just now");
      showToast("All 4 reports refreshed with latest verified bank records.");
    }, 900);
  };

  const openDisputeModalForAccount = (acc: CreditAccount) => {
    setDisputeModalAccount(acc);
    setDisputeStep(1);
    setDisputeEvidenceName(null);
    setDisputeDraftNotice(
      `To,\nThe Dispute Redressal Cell,\n${
        acc.experianMismatch
          ? "Experian India"
          : acc.crifMismatch
          ? "CRIF High Mark"
          : acc.cibilMismatch
          ? "TransUnion CIBIL"
          : "Equifax India"
      }\n\nSubject: Formal Dispute Request under Section 21 of Credit Information Companies (Regulation) Act, 2005.\n\nAccount: ${
        acc.lender
      } ${acc.product} (A/C: ${acc.accountNo})\n\nReason: ${
        acc.discrepancyReason || "Record mismatch across credit bureaus"
      }.\n\nPlease find attached the bank NOC / statement. Kindly update and rectify within the statutory 30-day resolution window.\n\nSincerely,\nSawai Singh (PAN: KMMPS••••R)`
    );
    setSelectedDrawerAccount(null);
    setIsDisputeModalOpen(true);
  };

  const openParthWithContext = (contextStr: string, initialPrompt?: string) => {
    setParthContext(contextStr);
    setIsParthOpen(true);
    if (initialPrompt) {
      askParth(initialPrompt, contextStr);
    }
  };

  const askParth = (query: string, overrideContext?: string) => {
    if (!query.trim()) return;
    const userText = query.trim();
    setParthInput("");
    setIsParthLoading(true);

    setParthMessages((prev) => [...prev, { sender: "user", text: userText }]);

    setTimeout(() => {
      let reply = "";
      let citation: string | undefined;
      let actionLabel: string | undefined;
      let actionNav: string | undefined;

      const lower = userText.toLowerCase();
      if (lower.includes("800") || lower.includes("reach") || lower.includes("score")) {
        reply =
          "Hi Sawai! Your Primescore is 771. Reaching 800+ is well within reach with these 3 steps:\n\n1. Fix the HDFC card mismatch in Experian (+35 pts)\n2. Bring card usage down to 15% by paying ₹85,000 (+18 pts)\n3. Avoid new hard loan applications for 90 days (+8 pts).\n\nProjected score: 832/900.";
        citation = "Based on your 4 reports, updated 3:48 PM";
        actionLabel = "Open Score planner";
        actionNav = "simulator";
      } else if (lower.includes("hdfc") || lower.includes("experian") || lower.includes("mismatch")) {
        reply =
          "In Experian, your HDFC Millennia Card (•••• 4492) still shows as active with ₹42,000 due. However, in CIBIL, CRIF, and Equifax it is properly verified as Closed (₹0 due). We have a pre-drafted dispute notice ready with your bank NOC attached.";
        citation = "Based on Experian & CIBIL report comparison";
        actionLabel = "Review & raise dispute";
        actionNav = "disputes";
      } else if (lower.includes("dispute") || lower.includes("cibil") || lower.includes("fix")) {
        reply =
          "Raising a dispute with Primescore takes under a minute. We prepare the formal letter under RBI CICRA norms and track the statutory 30-day resolution deadline for you.";
        citation = "Based on RBI CICRA guidelines";
        actionLabel = "View My disputes";
        actionNav = "disputes";
      } else if (lower.includes("loan") || lower.includes("offer") || lower.includes("approval")) {
        reply =
          "Your 100% on-time payment track record puts you in the top tier. Once the Experian mismatch is resolved, you qualify for pre-approved personal loans starting at 10.25% p.a. and home loan balance transfers at 8.35% p.a.";
        citation = "Based on your payment discipline & credit mix";
        actionLabel = "Compare loan offers";
        actionNav = "loans";
      } else {
        reply = `Hi Sawai, I reviewed your complete credit file (Primescore: 771). You have 16 accounts reported across 4 bureaus with 100% on-time payments. Everything regarding "${userText}" has been verified.`;
        citation = "Based on your consolidated reports";
        actionLabel = "View Bureau reports";
        actionNav = "bureaus";
      }

      setParthMessages((prev) => [
        ...prev,
        {
          sender: "parth",
          text: reply,
          citation,
          actionLabel,
          actionNav
        }
      ]);
      setIsParthLoading(false);
    }, 550);
  };

  // Filtered accounts for Bureau reports
  const filteredBureausAccounts = useMemo(() => {
    return ACCOUNTS_DATA.filter((acc) => {
      if (bureauFilterMode === "needs_attention" && acc.status !== "Mismatch") return false;
      if (bureauFilterMode === "all_clear" && acc.status !== "Matched") return false;
      if (bureauSearch.trim()) {
        const q = bureauSearch.toLowerCase();
        const matchesLender = acc.lender.toLowerCase().includes(q);
        const matchesProd = acc.product.toLowerCase().includes(q);
        const matchesNo = acc.accountNo.toLowerCase().includes(q);
        if (!matchesLender && !matchesProd && !matchesNo) return false;
      }
      return true;
    });
  }, [bureauFilterMode, bureauSearch]);

  // EMI Calculator math
  const calculatedEmi = useMemo(() => {
    const p = emiAmount;
    const r = emiRate / 12 / 100;
    const n = emiTenure;
    if (r === 0) return Math.round(p / n);
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  }, [emiAmount, emiRate, emiTenure]);

  const totalInterest = useMemo(() => {
    return Math.round(calculatedEmi * emiTenure - emiAmount);
  }, [calculatedEmi, emiTenure, emiAmount]);

  // Simulator score math
  const simulatedScore = useMemo(() => {
    let base = 771;
    if (simFixDisputes) base += 48;
    base += Math.round((simPaydown / 150000) * 32);
    if (simCloseLoan) base += 14;
    if (simNoInquiries) base += 8;
    return Math.min(base, 900);
  }, [simPaydown, simFixDisputes, simCloseLoan, simNoInquiries]);

  // Command palette results (Accounts, Pages, Ask Parth)
  const commandResults = useMemo(() => {
    if (!commandQuery.trim()) return [];
    const q = commandQuery.toLowerCase();
    const pageActions = [
      { type: "page", label: "Home", nav: "home" },
      { type: "page", label: "Bureau reports", nav: "bureaus" },
      { type: "page", label: "Accounts & Credit mix", nav: "accounts" },
      { type: "page", label: "Cards", nav: "cards" },
      { type: "page", label: "Loans & EMI calculator", nav: "loans" },
      { type: "page", label: "My disputes", nav: "disputes" },
      { type: "page", label: "Score planner", nav: "simulator" },
      { type: "page", label: "Credit enquiries", nav: "enquiries" },
      { type: "page", label: "Account & Settings", nav: "account" },
    ];
    const accountMatches = ACCOUNTS_DATA.filter(
      (a) =>
        a.lender.toLowerCase().includes(q) ||
        a.product.toLowerCase().includes(q) ||
        a.accountNo.toLowerCase().includes(q)
    ).map((a) => ({
      type: "account",
      label: `${a.lender} · ${a.product} (${a.accountNo})`,
      account: a
    }));

    const parthPrompts = [
      { type: "parth", label: `Ask Parth: "${commandQuery}"`, prompt: commandQuery }
    ];

    return [
      ...pageActions.filter((a) => a.label.toLowerCase().includes(q)),
      ...accountMatches,
      ...parthPrompts
    ];
  }, [commandQuery]);

  return (
    <div
      className={`min-h-screen w-full font-sans antialiased text-[#101828] bg-[#F4F7FC] selection:bg-[#1882FF] selection:text-white ${
        theme === "dark" ? "dark bg-[#0B0F17] text-[#F2F4F7]" : ""
      }`}
    >
      {/* Toast Notification (Bottom Left, 4s) */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 rounded-xl bg-[#0B1220] px-4 py-3 text-[14px] font-medium text-white shadow-xl border border-slate-800"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
           A.2 APP SHELL: SIDEBAR (232px, WARM, 15px LABELS, PARTH HIGHLIGHTED)
           ========================================================= */}
      <aside className="fixed bottom-0 left-0 top-0 flex w-[232px] flex-col border-r border-[#E4E9F2] bg-white z-30 select-none">
        {/* Top: Official Primescore Logo */}
        <div
          onClick={() => setActiveNav("home")}
          className="flex h-16 items-center px-5 cursor-pointer border-b border-[#E4E9F2]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Logo who works on white bg.png"
            alt="Primescore"
            className="h-[34px] max-h-[34px] w-auto object-contain"
          />
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
          <nav className="flex flex-col gap-1">
            {[
              { id: "home", label: "Home", icon: Home },
              { id: "bureaus", label: "Bureau reports", icon: Table, count: 4 },
              { id: "accounts", label: "Accounts", icon: Layers },
              { id: "cards", label: "Cards", icon: CreditCard },
              { id: "loans", label: "Loans", icon: Landmark },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveNav(item.id)}
                  className={`group flex h-11 w-full items-center justify-between rounded-xl px-3.5 text-[15px] transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#EEF4FF] text-[#1882FF] font-semibold border-l-3 border-[#1882FF]"
                      : "text-[#475467] hover:bg-[#F4F7FC] hover:text-[#101828] font-medium"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon
                      className={`h-5 w-5 shrink-0 ${
                        isActive ? "text-[#1882FF]" : "text-[#667085] group-hover:text-[#101828]"
                      }`}
                    />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.count !== undefined && (
                    <span className="rounded-full bg-[#F4F7FC] px-2 py-0.5 text-[12px] font-semibold text-[#667085] tabular-nums">
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Parth as a Highlighted First-Class Item */}
            <button
              onClick={() => setIsParthOpen(true)}
              className="mt-1 group flex h-11 w-full items-center justify-between rounded-xl bg-gradient-to-r from-[#EEF4FF] to-[#E4EFFF] px-3.5 text-[15px] font-semibold text-[#1882FF] border border-[#D0E2FF] transition-all hover:shadow-xs cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#1882FF] text-[12px] font-bold text-white">
                  P
                </span>
                <span>Ask Parth</span>
              </div>
              <span className="text-[11px] font-bold text-[#1882FF] bg-white px-2 py-0.5 rounded-full border border-[#D0E2FF]">
                Advisor
              </span>
            </button>
          </nav>

          <div>
            <div className="px-3.5 pb-2 text-[11px] font-bold uppercase tracking-wider text-[#667085]">
              Tools
            </div>
            <nav className="flex flex-col gap-1">
              {[
                { id: "disputes", label: "My disputes", icon: Gavel, count: 4 },
                { id: "simulator", label: "Score planner", icon: Sliders },
                { id: "enquiries", label: "Credit enquiries", icon: Eye },
                { id: "account", label: "Account & settings", icon: Settings },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveNav(item.id)}
                    className={`group flex h-11 w-full items-center justify-between rounded-xl px-3.5 text-[15px] transition-colors cursor-pointer ${
                      isActive
                        ? "bg-[#EEF4FF] text-[#1882FF] font-semibold border-l-3 border-[#1882FF]"
                        : "text-[#475467] hover:bg-[#F4F7FC] hover:text-[#101828] font-medium"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Icon
                        className={`h-5 w-5 shrink-0 ${
                          isActive ? "text-[#1882FF]" : "text-[#667085] group-hover:text-[#101828]"
                        }`}
                      />
                      <span className="truncate">{item.label}</span>
                    </div>
                    {item.count !== undefined && (
                      <span className="rounded-full bg-[#F4F7FC] px-2 py-0.5 text-[12px] font-semibold text-[#667085] tabular-nums">
                        {item.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Sidebar Footer (User row with Prime Care VIP, Points, Help) */}
        <div className="border-t border-[#E4E9F2] p-3 bg-white">
          <button
            onClick={() => {
              setActiveNav("account");
              setAccountSubNav("profile");
            }}
            className="flex w-full items-center gap-3 rounded-xl p-2 hover:bg-[#F4F7FC] transition-colors text-left cursor-pointer"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1882FF] text-[13px] font-bold text-white shadow-xs">
              SS
            </div>
            <div className="flex-1 min-w-0">
              <div className="truncate text-[14px] font-semibold text-[#101828]">Sawai Singh</div>
              <div className="flex items-center gap-1.5 text-[12px] text-[#667085]">
                <span className="text-[#1882FF] font-medium">Prime Care VIP</span>
                <span>·</span>
                <span className="font-semibold text-[#101828]">2,450 pts</span>
              </div>
            </div>
          </button>
        </div>
      </aside>

      {/* =========================================================
           TOP BAR (56px, SURFACE, REFRESH REPORTS, SEARCH)
           ========================================================= */}
      <header className="fixed top-0 left-[232px] right-0 z-20 flex h-16 items-center justify-between border-b border-[#E4E9F2] bg-white px-8">
        {/* Left: Breadcrumbs */}
        <div className="flex items-center gap-2 text-[14px] text-[#667085]">
          <span className="font-medium text-[#101828]">Primescore</span>
          <span>/</span>
          <span className="capitalize font-semibold text-[#101828]">
            {activeNav === "home"
              ? "Home"
              : activeNav === "bureaus"
              ? "Bureau reports"
              : activeNav === "simulator"
              ? "Score planner"
              : activeNav === "disputes"
              ? "My disputes"
              : activeNav === "enquiries"
              ? "Credit enquiries"
              : activeNav === "account"
              ? "Account & settings"
              : activeNav}
          </span>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-[440px] mx-6">
          <button
            onClick={() => setIsCommandOpen(true)}
            className="flex h-10 w-full items-center justify-between rounded-xl border border-[#E4E9F2] bg-[#F4F7FC] px-3.5 text-[14px] text-[#667085] hover:border-[#D0D5DD] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Search className="h-4 w-4 text-[#667085]" />
              <span>Search accounts, lenders, or ask Parth…</span>
            </div>
            <kbd className="hidden sm:inline-block rounded-md border border-[#E4E9F2] bg-white px-2 py-0.5 text-[11px] font-medium text-[#667085]">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right Actions: Sync status, Notifications, Parth, Theme */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-[13px] text-[#667085]">
            <span>{lastSyncedText}</span>
            <button
              onClick={handleRefresh}
              className="flex items-center gap-1.5 rounded-lg border border-[#E4E9F2] bg-white px-2.5 py-1 text-[12px] font-semibold text-[#101828] hover:bg-[#F4F7FC] transition-colors cursor-pointer"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin text-[#1882FF]" : ""}`} />
              <span>Refresh reports</span>
            </button>
          </div>

          <div className="h-4 w-[1px] bg-[#E4E9F2]" />

          {/* Notifications Bell */}
          <div className="relative">
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="relative rounded-xl p-2 text-[#667085] hover:bg-[#F4F7FC] hover:text-[#101828] cursor-pointer"
              title="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#B42318]" />
            </button>

            <AnimatePresence>
              {isNotificationOpen && (
                <>
                  <div onClick={() => setIsNotificationOpen(false)} className="fixed inset-0 z-40" />
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-12 z-50 w-[420px] rounded-2xl bg-white shadow-[0_12px_36px_rgba(16,24,40,0.16)] border border-[#E4E9F2] overflow-hidden flex flex-col"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-[#E4E9F2] px-4 py-3 bg-[#F8FAFC]">
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-bold text-[#101828]">Report Alerts</span>
                        <span className="rounded-full bg-[#FEF3F2] px-2 py-0.5 text-[11px] font-bold text-[#B42318] border border-[#FECDCA]">
                          4 issues
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          showToast("All alerts marked as read");
                          setIsNotificationOpen(false);
                        }}
                        className="text-[12px] font-semibold text-[#1882FF] hover:underline cursor-pointer"
                      >
                        Mark all read
                      </button>
                    </div>

                    {/* Alerts List */}
                    <div className="p-3 space-y-2.5 max-h-[380px] overflow-y-auto bg-white">
                      {ACCOUNTS_DATA.filter((a) => a.status === "Mismatch").map((acc) => (
                        <div
                          key={acc.id}
                          onClick={() => {
                            setIsNotificationOpen(false);
                            openDisputeModalForAccount(acc);
                          }}
                          className="group p-3 rounded-xl bg-white hover:bg-[#F8FAFC] cursor-pointer transition-all border border-[#E4E9F2] hover:border-[#1882FF]/40 hover:shadow-sm flex items-start gap-3"
                        >
                          <BankLogo lender={acc.lender} className="w-9 h-9 rounded-xl shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-1.5 min-w-0">
                                <span className="text-[13px] font-bold text-[#101828] truncate">
                                  {acc.lender}
                                </span>
                                <span className="text-[#CBD5E1]">·</span>
                                <span className="text-[12px] font-medium text-[#475467] truncate">
                                  {acc.product}
                                </span>
                              </div>
                              <span className="shrink-0 inline-flex items-center rounded-full bg-[#ECFDF3] px-2 py-0.5 text-[11px] font-bold text-[#067647] border border-[#ABEFC6]">
                                {acc.estImpact}
                              </span>
                            </div>
                            <p className="text-[12px] text-[#475467] mt-1 leading-relaxed">
                              {acc.discrepancyReason}
                            </p>
                            <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[#F2F4F7] text-[11px]">
                              <span className="text-[#667085] font-mono">
                                {acc.accountNo}
                              </span>
                              <span className="font-semibold text-[#1882FF] group-hover:underline flex items-center gap-0.5">
                                Fix mismatch <ChevronRight className="h-3 w-3" />
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="border-t border-[#E4E9F2] px-4 py-2.5 bg-[#F8FAFC] flex items-center justify-between">
                      <div className="text-[12px] text-[#475467]">
                        Potential gain: <strong className="text-[#067647] font-bold">+48 pts</strong>
                      </div>
                      <button
                        onClick={() => {
                          setIsNotificationOpen(false);
                          setActiveNav("disputes");
                        }}
                        className="flex items-center gap-1 text-[12px] font-bold text-[#1882FF] hover:underline cursor-pointer"
                      >
                        <span>Go to Dispute Hub</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* =========================================================
           MAIN WORKSPACE CONTAINER
           ========================================================= */}
      <main className={`pt-22 pb-16 px-8 transition-all ${isParthOpen ? "mr-[380px]" : ""} ml-[232px]`}>
        <div className="mx-auto max-w-[1280px] flex flex-col gap-6">

          {/* =========================================================
               PAGE 1: HOME (WARM, HUMAN, COMPOSITE METER)
               ========================================================= */}
          {activeNav === "home" && (
            <div className="flex flex-col gap-6">
              {/* Human Opening Sentence Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-[24px] font-bold tracking-tight text-[#101828]">Home</h1>
                  <p className="text-[15px] text-[#475467] mt-1">
                    Good afternoon, Sawai. Your Primescore is <strong className="text-[#101828]">771</strong>. Fixing
                    4 mismatches could add up to <strong className="text-[#067647]">48 points</strong>.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => showToast("Downloading official 4-bureau report PDF...")}
                    className="flex h-10 items-center gap-2 rounded-xl border border-[#E4E9F2] bg-white px-4 text-[14px] font-semibold text-[#101828] hover:bg-[#F4F7FC] transition-colors cursor-pointer shadow-xs"
                  >
                    <Download className="h-4 w-4 text-[#667085]" />
                    <span>Download report</span>
                  </button>
                  <button
                    onClick={() => setActiveNav("disputes")}
                    className="flex h-10 items-center gap-2 rounded-xl bg-[#0B1220] px-4.5 text-[14px] font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Review 4 issues</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Score Summary Panel with Proper Credit Meter */}
              <div className="rounded-2xl border border-[#E4E9F2] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_4px_16px_rgba(16,24,40,0.04)]">
                <div className="grid grid-cols-12 gap-6 items-center">
                  
                  {/* Left 5 Cols: Main Speedometer Credit Meter (Meter on Left, Numbers on Right) */}
                  <div className="col-span-12 lg:col-span-5 pr-0 lg:pr-6 lg:border-r border-[#E4E9F2] flex flex-col justify-between relative overflow-hidden">
                    {/* Subtle Indian Architectural Jharokha / Jaali Fade-away Texture */}
                    <IndianArchitecturalMotif />

                    <div className="w-full mb-1 relative z-10">
                      <span className="text-[13px] font-semibold text-[#344054]">
                        Hey Sawai, here is your Primescore
                      </span>
                    </div>

                    {/* Side-by-Side: Gauge on Left + Score Numbers on Right */}
                    <div className="flex items-end justify-between gap-4 my-auto py-1 relative z-10">
                      {/* Left: Speedometer Arc with Crisp Needle */}
                      <div className="relative shrink-0 w-[170px] h-[108px] flex items-center justify-center">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 175 108">
                          <defs>
                            <linearGradient id="needleSpeedometerGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#EF4444" />
                              <stop offset="25%" stopColor="#F97316" />
                              <stop offset="50%" stopColor="#F59E0B" />
                              <stop offset="75%" stopColor="#10B981" />
                              <stop offset="100%" stopColor="#059669" />
                            </linearGradient>
                            <filter id="needleShadowLeft" x="-20%" y="-20%" width="140%" height="140%">
                              <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.25" />
                            </filter>
                          </defs>

                          {/* Subtle Baseline Reference Shelf */}
                          <line x1="16" y1="90" x2="158" y2="90" stroke="#E4E9F2" strokeWidth="1" strokeDasharray="3 3" />

                          {/* Base Track */}
                          <path
                            d="M 18 90 A 68 68 0 0 1 156 90"
                            fill="none"
                            stroke="#EEF2F6"
                            strokeWidth="11"
                            strokeLinecap="round"
                          />

                          {/* Colored Gradient Track */}
                          <path
                            d="M 18 90 A 68 68 0 0 1 156 90"
                            fill="none"
                            stroke="url(#needleSpeedometerGradLeft)"
                            strokeWidth="11"
                            strokeLinecap="round"
                          />

                          {/* Scale Endpoints */}
                          <text x="18" y="104" textAnchor="middle" className="text-[10px] font-bold fill-[#667085]">300</text>
                          <text x="156" y="104" textAnchor="middle" className="text-[10px] font-bold fill-[#067647]">900</text>

                          {/* Dynamic Needle & Hub */}
                          {(() => {
                            const pct = Math.max(0, Math.min(1, (771 - 300) / 600));
                            const rad = Math.PI * pct;
                            const cx = 87;
                            const cy = 90;
                            const r = 68;
                            const needleLen = 55;

                            const tipX = cx - needleLen * Math.cos(rad);
                            const tipY = cy - needleLen * Math.sin(rad);

                            const perpRad = rad + Math.PI / 2;
                            const w = 3.5;
                            const base1X = cx + w * Math.cos(perpRad);
                            const base1Y = cy + w * Math.sin(perpRad);
                            const base2X = cx - w * Math.cos(perpRad);
                            const base2Y = cy - w * Math.sin(perpRad);

                            const arcDotX = cx - r * Math.cos(rad);
                            const arcDotY = cy - r * Math.sin(rad);

                            return (
                              <g>
                                {/* Needle Polygon */}
                                <polygon
                                  points={`${base1X},${base1Y} ${tipX},${tipY} ${base2X},${base2Y}`}
                                  fill="#0B1220"
                                  filter="url(#needleShadowLeft)"
                                />

                                {/* Target Dot on Track */}
                                <circle
                                  cx={arcDotX}
                                  cy={arcDotY}
                                  r="5.5"
                                  className="fill-white stroke-[#0B1220] stroke-2 shadow-sm"
                                />
                                <circle
                                  cx={arcDotX}
                                  cy={arcDotY}
                                  r="2.5"
                                  className="fill-[#10B981]"
                                />

                                {/* Center Pivot Hub Cap */}
                                <circle
                                  cx={cx}
                                  cy={cy}
                                  r="8.5"
                                  fill="#0B1220"
                                  stroke="#FFFFFF"
                                  strokeWidth="2.5"
                                  filter="url(#needleShadowLeft)"
                                />
                                <circle
                                  cx={cx}
                                  cy={cy}
                                  r="3"
                                  fill="#1882FF"
                                />
                              </g>
                            );
                          })()}
                        </svg>
                      </div>

                      {/* Right: Score Numbers & Information (Aligned lower to match bottom baseline) */}
                      <div className="flex-1 min-w-0 flex flex-col justify-end pb-1">
                        <div className="flex items-baseline gap-1">
                          <span className="text-[36px] font-black tracking-tight text-[#1882FF] tabular-nums leading-none">
                            771
                          </span>
                          <span className="text-[13px] font-bold text-[#667085]">/ 900</span>
                        </div>
                        <div className="mt-1.5">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10.5px] font-semibold bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">
                            Tier 1 · Very good
                          </span>
                        </div>
                        <div className="text-[11px] font-bold text-[#067647] flex items-center gap-1 mt-1.5 flex-wrap">
                          <span>▲ +18 in 90 days</span>
                          <span className="text-[#CBD5E1]">·</span>
                          <span className="text-[#475467] font-normal">Top 12% in India</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer Trigger */}
                    <div className="pt-2.5 border-t border-[#F4F7FC] flex items-center justify-between text-[13px] mt-2 relative z-10">
                      <button
                        onClick={() => setIsCalcPopoverOpen(!isCalcPopoverOpen)}
                        className="text-[#1882FF] hover:underline cursor-pointer font-medium"
                      >
                        How is this calculated?
                      </button>
                    </div>

                    {/* How is this calculated popover */}
                    <AnimatePresence>
                      {isCalcPopoverOpen && (
                        <div className="mt-3 p-3.5 rounded-xl bg-[#F4F7FC] border border-[#E4E9F2] text-[13px] text-[#475467] text-left space-y-1 w-full">
                          <div className="font-semibold text-[#101828]">Unweighted 4-Bureau Average</div>
                          <div>(743 + 757 + 770 + 817) ÷ 4 = 771.75 → <strong>771</strong></div>
                          <p className="text-[12px] text-[#667085] mt-1">
                            Primescore is an aggregate credit index across licensed bureaus and not a single bureau-issued score.
                          </p>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right 7 Cols: 4 Bureau Score Tiles (Clean, Balanced & Compact) */}
                  <div className="col-span-12 lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                    {BUREAU_SCORES.map((b) => {
                      const pct = Math.max(0, Math.min(1, (b.score - 300) / 600));
                      const rad = Math.PI * pct;
                      const dotX = 45 - 34 * Math.cos(rad);
                      const dotY = 46 - 34 * Math.sin(rad);

                      return (
                        <div
                          key={b.id}
                          onClick={() => {
                            setBureauTab(b.id);
                            setActiveNav("bureaus");
                          }}
                          className={`group flex flex-col justify-between p-3.5 rounded-2xl border transition-all cursor-pointer bg-white hover:shadow-xs ${
                            b.id === "experian"
                              ? "border-[#FDA29B] bg-[#FEF3F2]/30"
                              : "border-[#E4E9F2] hover:border-[#B2DDFF]"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="text-[13px] font-bold text-[#101828] truncate">{b.tag}</span>
                              <span className="text-[11px] font-semibold text-[#067647]">{b.delta}</span>
                            </div>

                            {/* Mini Radial Gauge */}
                            <div className="relative mt-2 flex flex-col items-center justify-center">
                              <svg className="w-24 h-14 overflow-visible" viewBox="0 0 90 50">
                                <path
                                  d="M 11 46 A 34 34 0 0 1 79 46"
                                  fill="none"
                                  stroke="#E4E9F2"
                                  strokeWidth="6"
                                  strokeLinecap="round"
                                />
                                <path
                                  d="M 11 46 A 34 34 0 0 1 79 46"
                                  fill="none"
                                  stroke={b.id === "experian" ? "#B42318" : "#1882FF"}
                                  strokeWidth="6"
                                  strokeLinecap="round"
                                  strokeDasharray="106.8"
                                  strokeDashoffset={106.8 * (1 - pct)}
                                />
                                <circle
                                  cx={dotX}
                                  cy={dotY}
                                  r="3.5"
                                  className="fill-white stroke-[#101828] stroke-1.5"
                                />
                              </svg>
                              <div className="text-center -mt-6">
                                <span className="text-[24px] font-bold text-[#101828] tabular-nums leading-none">
                                  {b.score}
                                </span>
                              </div>
                            </div>

                            <div className="text-center text-[12px] mt-2 font-medium">
                              {b.id === "experian" ? (
                                <span className="text-[#B54708]">1 discrepancy</span>
                              ) : (
                                <span className="text-[#067647]">{b.ratingBand}</span>
                              )}
                            </div>
                          </div>

                          {/* Sparkline track */}
                          <div className="mt-3 pt-2 border-t border-[#E4E9F2] flex items-end gap-0.5 h-4">
                            {b.sparkline.map((val, i) => {
                              const min = 700;
                              const max = 830;
                              const heightPct = Math.max(15, Math.min(100, ((val - min) / (max - min)) * 100));
                              return (
                                <div
                                  key={i}
                                  className={`w-full rounded-t-xs transition-colors ${
                                    b.id === "experian" ? "bg-[#FDA29B]" : "bg-[#B2DDFF] group-hover:bg-[#1882FF]"
                                  }`}
                                  style={{ height: `${heightPct}%` }}
                                />
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>

              {/* Feature Banner: 1-Min Video Score Walkthrough */}
              <div className="rounded-2xl border border-[#D0E2FF] bg-gradient-to-r from-[#EEF4FF] via-white to-[#EEF4FF] p-5 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1882FF] text-white shadow-sm">
                    <Play className="h-6 w-6 ml-0.5 fill-white" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#101828]">Your score explained in 1 minute</h3>
                    <p className="text-[13px] text-[#475467] mt-0.5">
                      Watch how your 4 discrepancies affect your score and the exact steps to reach 800+.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActiveNav("account");
                    setAccountSubNav("profile");
                  }}
                  className="rounded-xl bg-[#1882FF] px-4 py-2.5 text-[13px] font-bold text-white hover:bg-[#1474E8] transition-colors cursor-pointer shadow-xs"
                >
                  Watch video →
                </button>
              </div>

              {/* Needs Attention List + Score History */}
              <div className="grid grid-cols-12 gap-6">
                
                {/* Needs Attention (7 Cols) */}
                <div className="col-span-12 lg:col-span-7 rounded-2xl border border-[#E4E9F2] bg-white p-5 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between pb-3.5 border-b border-[#E4E9F2]">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#B54708]" />
                        <h2 className="text-[16px] font-bold text-[#101828]">
                          4 issues · up to +48 pts if resolved
                        </h2>
                      </div>
                      <button
                        onClick={() => setActiveNav("disputes")}
                        className="text-[13px] font-semibold text-[#1882FF] hover:underline"
                      >
                        View all in My disputes →
                      </button>
                    </div>

                    <div className="divide-y divide-[#E4E9F2]">
                      {ACCOUNTS_DATA.filter((a) => a.status === "Mismatch").map((acc) => (
                        <div key={acc.id} className="py-3.5 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3.5 min-w-0">
                            <BankLogo lender={acc.lender} className="w-10 h-10" />
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <strong className="text-[14px] font-bold text-[#101828] truncate">
                                  {acc.discrepancyTitle}
                                </strong>
                                <span className="font-mono text-[12px] text-[#667085]">{acc.accountNo}</span>
                              </div>
                              <p className="text-[13px] text-[#475467] mt-0.5 leading-snug">
                                {acc.discrepancyReason}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            <span className="rounded-full bg-[#ECFDF3] px-2.5 py-1 text-[12px] font-bold text-[#067647]">
                              {acc.estImpact}
                            </span>
                            <button
                              onClick={() => openDisputeModalForAccount(acc)}
                              className="h-8 rounded-xl bg-[#0B1220] px-3.5 text-[13px] font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
                            >
                              Fix this
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-[#E4E9F2] text-[13px] text-[#667085] flex items-center justify-between">
                    <span>Statutory 30-day resolution window under RBI Section 21.</span>
                    <button
                      onClick={() => openParthWithContext("Disputes", "Mera dispute kaise process hoga?")}
                      className="text-[#1882FF] font-semibold hover:underline cursor-pointer"
                    >
                      Ask Parth about disputes
                    </button>
                  </div>
                </div>

                {/* Score History (5 Cols) */}
                <div className="col-span-12 lg:col-span-5 rounded-2xl border border-[#E4E9F2] bg-white p-5 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between pb-3.5 border-b border-[#E4E9F2]">
                      <h2 className="text-[16px] font-bold text-[#101828]">Score history</h2>
                      <div className="flex items-center rounded-xl border border-[#E4E9F2] bg-[#F4F7FC] p-0.5 text-[12px]">
                        {(["3M", "6M", "1Y", "All"] as const).map((r) => (
                          <button
                            key={r}
                            onClick={() => setHistoryRange(r)}
                            className={`px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                              historyRange === r ? "bg-white text-[#101828] shadow-xs" : "text-[#667085] hover:text-[#101828]"
                            }`}
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-[26px] font-extrabold text-[#101828] tabular-nums">771</span>
                          <span className="text-[13px] text-[#067647] font-bold ml-2">▲ +36 pts in 12M</span>
                        </div>
                        <label className="flex items-center gap-1.5 text-[12px] text-[#667085] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={showAllBureauLines}
                            onChange={(e) => setShowAllBureauLines(e.target.checked)}
                            className="rounded accent-[#1882FF]"
                          />
                          <span>Show all bureaus</span>
                        </label>
                      </div>

                      {/* SVG Line Chart with Plain Language Annotations */}
                      <div className="mt-3 h-36 w-full">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 320 120">
                          <line x1="0" y1="20" x2="320" y2="20" stroke="#E4E9F2" strokeDasharray="3 3" />
                          <line x1="0" y1="60" x2="320" y2="60" stroke="#E4E9F2" strokeDasharray="3 3" />
                          <line x1="0" y1="100" x2="320" y2="100" stroke="#E4E9F2" strokeDasharray="3 3" />

                          <polyline
                            fill="none"
                            stroke="#1882FF"
                            strokeWidth="2.5"
                            points="0,95 28,90 56,88 85,82 114,78 142,75 171,68 200,60 228,55 257,48 285,42 320,35"
                          />

                          <circle cx="171" cy="68" r="4" fill="#1882FF" stroke="#FFFFFF" strokeWidth="2" />
                          <circle cx="320" cy="35" r="4.5" fill="#1882FF" stroke="#FFFFFF" strokeWidth="2" />
                        </svg>
                      </div>

                      <div className="flex items-center justify-between text-[12px] text-[#667085] pt-2 border-t border-[#E4E9F2]">
                        <span>Oct 2025</span>
                        <span>Jan 2026</span>
                        <span>Apr 2026</span>
                        <span>Sep 2026</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-[13px] text-[#475467] mt-3 p-2.5 rounded-xl bg-[#F4F7FC]">
                    Takeaway: Kotak dispute resolved in July 2026 added <strong>+22 points</strong>.
                  </div>
                </div>

              </div>

              {/* Exposure & Card Usage */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Credit Exposure Panel */}
                <div className="rounded-2xl border border-[#E4E9F2] bg-white p-5 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between pb-3.5 border-b border-[#E4E9F2]">
                      <h2 className="text-[16px] font-bold text-[#101828]">Credit exposure</h2>
                      <span className="rounded-full bg-[#F4F7FC] px-2.5 py-0.5 text-[12px] font-semibold text-[#667085]">
                        16 accounts
                      </span>
                    </div>

                    <div className="mt-4 flex items-baseline gap-6">
                      <div>
                        <div className="text-[12px] text-[#667085]">Total sanctioned</div>
                        <div className="text-[22px] font-extrabold text-[#101828] tabular-nums">₹47.10 L</div>
                      </div>
                      <div className="h-7 w-[1px] bg-[#E4E9F2]" />
                      <div>
                        <div className="text-[12px] text-[#667085]">Outstanding balance</div>
                        <div className="text-[22px] font-extrabold text-[#475467] tabular-nums">₹39.40 L</div>
                      </div>
                    </div>

                    {/* Single Hue Opacity Bar List */}
                    <div className="mt-5 space-y-3">
                      {[
                        { label: "Home loan", sanctioned: "₹32.00 L", outstanding: "₹27.80 L", pct: 68, opacity: "bg-[#1882FF]" },
                        { label: "Auto loan", sanctioned: "₹6.50 L", outstanding: "₹2.58 L", pct: 14, opacity: "bg-[#1882FF]/75" },
                        { label: "Personal loan", sanctioned: "₹6.80 L", outstanding: "₹1.12 L", pct: 14, opacity: "bg-[#1882FF]/50" },
                        { label: "Credit cards", sanctioned: "₹1.80 L", outstanding: "₹1.82 L", pct: 4, opacity: "bg-[#1882FF]/30" },
                      ].map((item, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex items-center justify-between text-[13px]">
                            <span className="text-[#101828] font-semibold">{item.label}</span>
                            <div className="flex items-center gap-2 font-mono tabular-nums text-[12px]">
                              <span className="text-[#667085]">{item.outstanding} / {item.sanctioned}</span>
                              <span className="font-bold text-[#101828]">({item.pct}%)</span>
                            </div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-[#E4E9F2] overflow-hidden">
                            <div className={`h-full rounded-full ${item.opacity}`} style={{ width: `${item.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-[#E4E9F2] flex items-center justify-between text-[13px]">
                    <span className="text-[#067647] font-semibold">0 late payments across all loans</span>
                    <button onClick={() => setActiveNav("accounts")} className="text-[#1882FF] font-semibold hover:underline">
                      View all accounts →
                    </button>
                  </div>
                </div>

                {/* Card Usage Panel */}
                <div className="rounded-2xl border border-[#E4E9F2] bg-white p-5 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between pb-3.5 border-b border-[#E4E9F2]">
                      <h2 className="text-[16px] font-bold text-[#101828]">Card usage</h2>
                      <span className="rounded-full bg-[#F4F7FC] px-2.5 py-0.5 text-[12px] font-semibold text-[#667085]">
                        3 active cards
                      </span>
                    </div>

                    <div className="mt-4 flex items-baseline justify-between">
                      <div>
                        <span className="text-[32px] font-extrabold text-[#101828] tabular-nums">28%</span>
                        <span className="text-[14px] text-[#667085] ml-2">₹1,82,000 / ₹6,50,000</span>
                      </div>
                      <span className="rounded-full bg-[#ECFDF3] px-3 py-1 text-[12px] font-bold text-[#067647]">
                        ₹4,68,000 available
                      </span>
                    </div>

                    {/* Progress Bar with 10% and 30% Markers */}
                    <div className="relative mt-3.5 h-2.5 w-full rounded-full bg-[#E4E9F2]">
                      <div className="h-full rounded-full bg-[#1882FF]" style={{ width: "28%" }} />
                      <div className="absolute top-0 bottom-0 left-[10%] w-[1.5px] bg-white" />
                      <div className="absolute top-0 bottom-0 left-[30%] w-[1.5px] bg-slate-900" />
                    </div>

                    <div className="mt-1.5 flex items-center justify-between text-[12px] text-[#667085]">
                      <span>0%</span>
                      <span className="text-[#067647] font-semibold">10% optimal</span>
                      <span className="text-[#B54708] font-semibold">30% threshold</span>
                      <span>100%</span>
                    </div>

                    {/* Per-Card Mini List */}
                    <div className="mt-4 space-y-2 text-[13px]">
                      {[
                        { issuer: "ICICI Amazon Pay", limit: "₹5.00 L", used: "₹68,500", pct: 14 },
                        { issuer: "Axis Bank Magnus", limit: "₹2.50 L", used: "₹51,200", pct: 20 },
                        { issuer: "Kotak Platinum", limit: "₹4.00 L", used: "₹62,247", pct: 15 },
                      ].map((c, i) => (
                        <div key={i} className="flex items-center justify-between py-1.5 border-b border-[#F4F7FC]">
                          <span className="font-semibold text-[#101828]">{c.issuer}</span>
                          <span className="font-mono text-[#667085] tabular-nums">{c.used} / {c.limit}</span>
                          <span className="font-bold text-[#101828] tabular-nums">{c.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-[#E4E9F2] text-[13px] text-[#475467]">
                    Paying ₹85,000 down brings overall card usage to 15% (est. +18 pts).
                  </div>
                </div>

              </div>

              {/* Where your reports don't match Table Summary */}
              <div className="rounded-2xl border border-[#E4E9F2] bg-white p-5 shadow-xs">
                <div className="flex items-center justify-between pb-3.5 border-b border-[#E4E9F2]">
                  <h2 className="text-[16px] font-bold text-[#101828]">Where your reports don&apos;t match</h2>
                  <button onClick={() => setActiveNav("bureaus")} className="text-[13px] font-semibold text-[#1882FF] hover:underline">
                    See all 16 accounts in Bureau reports →
                  </button>
                </div>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left text-[14px]">
                    <thead>
                      <tr className="border-b border-[#E4E9F2] text-[12px] font-bold uppercase tracking-wider text-[#667085]">
                        <th className="pb-3 pl-2">Account / lender</th>
                        <th className="pb-3">Type</th>
                        <th className="pb-3">Sanctioned</th>
                        <th className="pb-3">CIBIL</th>
                        <th className="pb-3">CRIF</th>
                        <th className="pb-3">Experian</th>
                        <th className="pb-3">Equifax</th>
                        <th className="pb-3 pr-2 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E4E9F2]">
                      {ACCOUNTS_DATA.slice(0, 5).map((acc) => (
                        <tr
                          key={acc.id}
                          onClick={() => setSelectedDrawerAccount(acc)}
                          className="hover:bg-[#F4F7FC] cursor-pointer transition-colors"
                        >
                          <td className="py-4 pl-2">
                            <div className="flex items-center gap-3">
                              <BankLogo lender={acc.lender} className="w-8 h-8" />
                              <div>
                                <strong className="font-bold text-[#101828] block">{acc.lender}</strong>
                                <span className="text-[12px] text-[#667085]">{acc.product} <span className="font-mono">{acc.accountNo}</span></span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 text-[#475467]">{acc.typeLabel}</td>
                          <td className="py-4 font-mono tabular-nums text-[#101828] font-semibold">{acc.sanctionLimitFormatted}</td>
                          <td className="py-4">
                            <span className={acc.cibilMismatch ? "rounded-full bg-[#FEF3F2] px-2.5 py-1 text-[#B42318] font-semibold text-[12px]" : "text-[#475467]"}>
                              {acc.cibilStatus} {acc.cibilMismatch && "⚠"}
                            </span>
                          </td>
                          <td className="py-4">
                            <span className={acc.crifMismatch ? "rounded-full bg-[#FEF3F2] px-2.5 py-1 text-[#B42318] font-semibold text-[12px]" : "text-[#475467]"}>
                              {acc.crifStatus} {acc.crifMismatch && "⚠"}
                            </span>
                          </td>
                          <td className="py-4">
                            <span className={acc.experianMismatch ? "rounded-full bg-[#FEF3F2] px-2.5 py-1 text-[#B42318] font-semibold text-[12px]" : "text-[#475467]"}>
                              {acc.experianStatus} {acc.experianMismatch && "⚠"}
                            </span>
                          </td>
                          <td className="py-4">
                            <span className={acc.equifaxMismatch ? "rounded-full bg-[#FEF3F2] px-2.5 py-1 text-[#B42318] font-semibold text-[12px]" : "text-[#475467]"}>
                              {acc.equifaxStatus} {acc.equifaxMismatch && "⚠"}
                            </span>
                          </td>
                          <td className="py-4 pr-2 text-right">
                            {acc.status === "Mismatch" ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openDisputeModalForAccount(acc);
                                }}
                                className="h-8 rounded-xl bg-[#0B1220] px-3.5 text-[13px] font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
                              >
                                Fix this
                              </button>
                            ) : (
                              <span className="rounded-full bg-[#ECFDF3] px-2.5 py-1 text-[12px] font-bold text-[#067647]">
                                Matched ✓
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================
               PAGE 2: BUREAU REPORTS (HERO COMPARISON WORKSPACE)
               ========================================================= */}
          {activeNav === "bureaus" && (
            <div className="flex flex-col gap-6">
              {/* Human Opening Sentence Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-[24px] font-bold tracking-tight text-[#101828]">Bureau reports</h1>
                  <p className="text-[15px] text-[#475467] mt-1">
                    Your 4 reports agree on <strong className="text-[#101828]">12 of 16 accounts</strong>.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setBureauFilterMode(bureauFilterMode === "needs_attention" ? "all" : "needs_attention")}
                    className="flex h-10 items-center gap-2 rounded-xl bg-[#0B1220] px-4 text-[14px] font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer shadow-xs"
                  >
                    <span>{bureauFilterMode === "needs_attention" ? "Show all accounts" : "See the 4 that don't match"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Underline Tabs */}
              <div className="flex items-center gap-6 border-b border-[#E4E9F2] text-[14px]">
                {[
                  { id: "all", label: "All 4", score: 771 },
                  { id: "cibil", label: "CIBIL", score: 743 },
                  { id: "crif", label: "CRIF", score: 757 },
                  { id: "experian", label: "Experian", score: 770 },
                  { id: "equifax", label: "Equifax", score: 817 },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setBureauTab(t.id as any)}
                    className={`flex items-center gap-2 pb-3 font-semibold transition-colors cursor-pointer border-b-2 ${
                      bureauTab === t.id
                        ? "border-[#1882FF] text-[#1882FF]"
                        : "border-transparent text-[#667085] hover:text-[#101828]"
                    }`}
                  >
                    <span>{t.label}</span>
                    <span className="font-mono text-[13px] text-[#667085] tabular-nums">({t.score})</span>
                  </button>
                ))}
              </div>

              {/* Simplified Friendly Toolbar (Search + 3 Chips + Menu) */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="relative w-72">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-[#667085]" />
                    <input
                      type="text"
                      placeholder="Search accounts or lenders..."
                      value={bureauSearch}
                      onChange={(e) => setBureauSearch(e.target.value)}
                      className="h-10 w-full rounded-xl border border-[#E4E9F2] bg-white pl-9 pr-3 text-[13px] text-[#101828] outline-none placeholder-[#667085] focus:border-[#1882FF]"
                    />
                  </div>

                  {/* 3 Simple Filter Chips */}
                  <div className="flex items-center rounded-xl border border-[#E4E9F2] bg-white p-1 text-[13px]">
                    <button
                      onClick={() => setBureauFilterMode("all")}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                        bureauFilterMode === "all" ? "bg-[#0B1220] text-white" : "text-[#667085] hover:text-[#101828]"
                      }`}
                    >
                      All (16)
                    </button>
                    <button
                      onClick={() => setBureauFilterMode("needs_attention")}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                        bureauFilterMode === "needs_attention" ? "bg-[#B42318] text-white" : "text-[#B42318] hover:bg-[#FEF3F2]"
                      }`}
                    >
                      Needs attention (4)
                    </button>
                    <button
                      onClick={() => setBureauFilterMode("all_clear")}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                        bureauFilterMode === "all_clear" ? "bg-[#067647] text-white" : "text-[#067647] hover:bg-[#ECFDF3]"
                      }`}
                    >
                      All clear (12)
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => showToast("Exporting bureau report data to CSV...")}
                    className="flex h-10 items-center gap-1.5 rounded-xl border border-[#E4E9F2] bg-white px-3.5 text-[13px] font-semibold text-[#101828] hover:bg-[#F4F7FC] cursor-pointer"
                  >
                    <Download className="h-4 w-4 text-[#667085]" />
                    <span>Export CSV</span>
                  </button>
                </div>
              </div>

              {/* Table (56–64px Rows with Lender Logos) */}
              <div className="rounded-2xl border border-[#E4E9F2] bg-white overflow-hidden shadow-xs">
                <table className="w-full text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-[#E4E9F2] bg-[#F4F7FC] text-[12px] font-bold uppercase tracking-wider text-[#667085]">
                      <th className="py-3.5 px-4">Account / lender</th>
                      <th className="py-3.5 px-3">Type</th>
                      <th className="py-3.5 px-3">Limit / Sanctioned</th>
                      <th className="py-3.5 px-3">CIBIL (743)</th>
                      <th className="py-3.5 px-3">CRIF (757)</th>
                      <th className="py-3.5 px-3">Experian (770)</th>
                      <th className="py-3.5 px-3">Equifax (817)</th>
                      <th className="py-3.5 px-3">Status</th>
                      <th className="py-3.5 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E4E9F2]">
                    {filteredBureausAccounts.map((acc) => (
                      <tr
                        key={acc.id}
                        onClick={() => setSelectedDrawerAccount(acc)}
                        className="hover:bg-[#F4F7FC] cursor-pointer transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <BankLogo lender={acc.lender} className="w-9 h-9" />
                            <div>
                              <strong className="font-bold text-[#101828] block">{acc.lender}</strong>
                              <span className="text-[12px] text-[#667085]">{acc.product} <span className="font-mono">{acc.accountNo}</span></span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-3 text-[#475467]">{acc.typeLabel}</td>
                        <td className="py-4 px-3 font-mono tabular-nums text-[#101828] font-bold">{acc.sanctionLimitFormatted}</td>
                        <td className="py-4 px-3">
                          <span className={acc.cibilMismatch ? "rounded-full bg-[#FEF3F2] px-2.5 py-1 text-[#B42318] font-semibold text-[12px]" : "text-[#475467]"}>
                            {acc.cibilStatus} {acc.cibilMismatch && "⚠"}
                          </span>
                        </td>
                        <td className="py-4 px-3">
                          <span className={acc.crifMismatch ? "rounded-full bg-[#FEF3F2] px-2.5 py-1 text-[#B42318] font-semibold text-[12px]" : "text-[#475467]"}>
                            {acc.crifStatus} {acc.crifMismatch && "⚠"}
                          </span>
                        </td>
                        <td className="py-4 px-3">
                          <span className={acc.experianMismatch ? "rounded-full bg-[#FEF3F2] px-2.5 py-1 text-[#B42318] font-semibold text-[12px]" : "text-[#475467]"}>
                            {acc.experianStatus} {acc.experianMismatch && "⚠"}
                          </span>
                        </td>
                        <td className="py-4 px-3">
                          <span className={acc.equifaxMismatch ? "rounded-full bg-[#FEF3F2] px-2.5 py-1 text-[#B42318] font-semibold text-[12px]" : "text-[#475467]"}>
                            {acc.equifaxStatus} {acc.equifaxMismatch && "⚠"}
                          </span>
                        </td>
                        <td className="py-4 px-3">
                          {acc.status === "Mismatch" ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FEF3F2] px-2.5 py-1 text-[12px] font-bold text-[#B42318]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#B42318]" />
                              Doesn&apos;t match
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF3] px-2.5 py-1 text-[12px] font-bold text-[#067647]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#067647]" />
                              Matched
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-right">
                          {acc.status === "Mismatch" ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                openDisputeModalForAccount(acc);
                              }}
                              className="h-8 rounded-xl bg-[#0B1220] px-3.5 text-[13px] font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
                            >
                              Fix this
                            </button>
                          ) : (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedDrawerAccount(acc);
                              }}
                              className="text-[13px] text-[#667085] hover:text-[#101828] font-semibold"
                            >
                              Details →
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* =========================================================
               PAGE 3: ACCOUNTS & CREDIT MIX
               ========================================================= */}
          {activeNav === "accounts" && (
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-[24px] font-bold tracking-tight text-[#101828]">Accounts & credit mix</h1>
                <p className="text-[15px] text-[#475467] mt-1">
                  You have 16 credit accounts across 5 lenders. 7 are currently active.
                </p>
              </div>

              {/* 4 Stat Blocks in One Panel */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl border border-[#E4E9F2] bg-white p-6 shadow-xs">
                <div>
                  <div className="text-[13px] font-semibold text-[#667085]">Total accounts</div>
                  <div className="text-[28px] font-extrabold text-[#101828] tabular-nums mt-1">16</div>
                  <div className="text-[13px] text-[#475467] mt-0.5">7 active · 9 closed</div>
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#667085]">Secured vs Unsecured</div>
                  <div className="text-[28px] font-extrabold text-[#101828] tabular-nums mt-1">80% / 20%</div>
                  <div className="text-[13px] text-[#067647] font-semibold mt-0.5">Healthy mix</div>
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#667085]">Average credit age</div>
                  <div className="text-[28px] font-extrabold text-[#101828] tabular-nums mt-1">4.8 Yrs</div>
                  <div className="text-[13px] text-[#475467] mt-0.5">Oldest: 7.2 Yrs (HDFC)</div>
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#667085]">On-time payments</div>
                  <div className="text-[28px] font-extrabold text-[#067647] tabular-nums mt-1">100%</div>
                  <div className="text-[13px] text-[#475467] mt-0.5">36/36 cycles clean</div>
                </div>
              </div>

              {/* Accounts Table */}
              <div className="rounded-2xl border border-[#E4E9F2] bg-white overflow-hidden shadow-xs">
                <table className="w-full text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-[#E4E9F2] bg-[#F4F7FC] text-[12px] font-bold uppercase tracking-wider text-[#667085]">
                      <th className="py-3.5 px-4">Lender & Account</th>
                      <th className="py-3.5 px-3">Opened</th>
                      <th className="py-3.5 px-3">Sanctioned</th>
                      <th className="py-3.5 px-3">Outstanding</th>
                      <th className="py-3.5 px-3">EMI / Terms</th>
                      <th className="py-3.5 px-3">Late payments (DPD)</th>
                      <th className="py-3.5 px-4 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E4E9F2]">
                    {ACCOUNTS_DATA.map((acc) => (
                      <tr
                        key={acc.id}
                        onClick={() => setSelectedDrawerAccount(acc)}
                        className="hover:bg-[#F4F7FC] cursor-pointer transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <BankLogo lender={acc.lender} className="w-9 h-9" />
                            <div>
                              <strong className="font-bold text-[#101828] block">{acc.lender}</strong>
                              <span className="text-[12px] text-[#667085]">{acc.product} <span className="font-mono">{acc.accountNo}</span></span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-3 text-[#475467]">{acc.openedDate}</td>
                        <td className="py-4 px-3 font-mono tabular-nums text-[#101828] font-bold">{acc.sanctionLimitFormatted}</td>
                        <td className="py-4 px-3 font-mono tabular-nums text-[#475467]">{acc.outstandingBalanceFormatted}</td>
                        <td className="py-4 px-3 text-[#475467]">{acc.emiFormatted || "Full pay monthly"}</td>
                        <td className="py-4 px-3">
                          <span className={acc.crifMismatch ? "text-[#B54708] font-bold" : "text-[#067647] font-semibold"}>
                            {acc.crifMismatch ? "30 days late (Past)" : "0 on time"}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className={`rounded-full px-2.5 py-1 text-[12px] font-bold ${
                            acc.status === "Mismatch" ? "bg-[#FEF3F2] text-[#B42318]" : "bg-[#ECFDF3] text-[#067647]"
                          }`}>
                            {acc.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* =========================================================
               PAGE 4: CARDS
               ========================================================= */}
          {activeNav === "cards" && (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-[24px] font-bold tracking-tight text-[#101828]">Cards</h1>
                  <p className="text-[15px] text-[#475467] mt-1">
                    You&apos;re using <strong className="text-[#101828]">28%</strong> of your card limit. Under 30% is healthy.
                  </p>
                </div>

                <button
                  onClick={() => setActiveNav("simulator")}
                  className="flex h-10 items-center gap-2 rounded-xl bg-[#0B1220] px-4 text-[14px] font-semibold text-white hover:bg-slate-800 cursor-pointer shadow-xs"
                >
                  <span>See how to lower it</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* 3 Active Card Tiles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  { lender: "ICICI Bank", name: "Amazon Pay Credit Card", number: "•••• 7811", limit: 500000, balance: 68500, due: 68500, minDue: 3425, dueDate: "18 Oct 2026", bg: "bg-amber-700" },
                  { lender: "Axis Bank", name: "Magnus Credit Card", number: "•••• 5519", limit: 250000, balance: 51200, due: 51200, minDue: 2560, dueDate: "22 Oct 2026", bg: "bg-rose-800" },
                  { lender: "Kotak Mahindra", name: "League Platinum Card", number: "•••• 2209", limit: 400000, balance: 62247, due: 62247, minDue: 3110, dueDate: "28 Oct 2026", bg: "bg-red-700" },
                ].map((c, idx) => {
                  const pct = Math.round((c.balance / c.limit) * 100);
                  return (
                    <div key={idx} className="rounded-2xl border border-[#E4E9F2] bg-white p-5 flex flex-col justify-between shadow-xs">
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <BankLogo lender={c.lender} className="w-7 h-7" />
                            <span className="text-[13px] font-bold text-[#101828]">{c.lender}</span>
                          </div>
                          <span className="font-mono text-[12px] text-[#667085]">{c.number}</span>
                        </div>
                        <h3 className="text-[15px] font-bold text-[#101828] mt-2">{c.name}</h3>

                        <div className="mt-4 flex items-baseline justify-between">
                          <div>
                            <div className="text-[12px] text-[#667085]">Current balance</div>
                            <div className="text-[20px] font-bold text-[#101828] tabular-nums font-mono">
                              ₹{c.balance.toLocaleString("en-IN")}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-[12px] text-[#667085]">Limit</div>
                            <div className="text-[14px] font-medium text-[#475467] tabular-nums font-mono">
                              ₹{c.limit.toLocaleString("en-IN")}
                            </div>
                          </div>
                        </div>

                        {/* Progress Bar with 30% Marker */}
                        <div className="relative mt-3.5 h-2 w-full rounded-full bg-[#E4E9F2]">
                          <div className="h-full rounded-full bg-[#1882FF]" style={{ width: `${pct}%` }} />
                          <div className="absolute top-0 bottom-0 left-[30%] w-[1.5px] bg-slate-900" title="30% threshold" />
                        </div>
                        <div className="mt-1.5 flex justify-between text-[12px] text-[#667085]">
                          <span>{pct}% utilised</span>
                          <span>Due {c.dueDate}</span>
                        </div>
                      </div>

                      <div className="mt-5 pt-3.5 border-t border-[#E4E9F2] flex items-center justify-between">
                        <span className="text-[12px] text-[#667085]">Min due: ₹{c.minDue.toLocaleString("en-IN")}</span>
                        <button
                          onClick={() => showToast(`Initiating instant bill payment for ${c.lender}...`)}
                          className="h-9 rounded-xl bg-[#0B1220] px-4 text-[13px] font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
                        >
                          Pay now
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Partner Offer: Axis Bank Card */}
              <div className="rounded-2xl border border-[#E4E9F2] bg-white p-5 flex items-center justify-between shadow-xs">
                <div>
                  <span className="rounded-full bg-[#EEF4FF] px-2.5 py-0.5 text-[11px] font-bold text-[#1882FF]">
                    Partner offer
                  </span>
                  <h3 className="text-[15px] font-bold text-[#101828] mt-1.5">Axis Bank Airtel Credit Card · Pre-Approved</h3>
                  <p className="text-[13px] text-[#475467] mt-0.5">
                    25% cashback on Airtel bills, 10% on Swiggy/Zomato. Zero joining fee for Prime Care VIP members.
                  </p>
                </div>
                <button
                  onClick={() => showToast("Opening partner application link...")}
                  className="rounded-xl border border-[#E4E9F2] bg-white px-4 py-2.5 text-[13px] font-semibold text-[#101828] hover:bg-[#F4F7FC] cursor-pointer"
                >
                  See offer →
                </button>
              </div>
            </div>
          )}

          {/* =========================================================
               PAGE 5: LOANS & EMI CALCULATOR
               ========================================================= */}
          {activeNav === "loans" && (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-[24px] font-bold tracking-tight text-[#101828]">Loans</h1>
                  <p className="text-[15px] text-[#475467] mt-1">
                    You have 2 active loans and 4 pre-approved offers. Checking offers won&apos;t affect your score.
                  </p>
                </div>

                {/* Sub tabs */}
                <div className="flex items-center rounded-xl border border-[#E4E9F2] bg-white p-1 text-[13px]">
                  <button
                    onClick={() => setLoansTab("active")}
                    className={`px-3.5 py-1.5 rounded-lg font-semibold cursor-pointer ${
                      loansTab === "active" ? "bg-[#0B1220] text-white" : "text-[#667085]"
                    }`}
                  >
                    Active loans
                  </button>
                  <button
                    onClick={() => setLoansTab("offers")}
                    className={`px-3.5 py-1.5 rounded-lg font-semibold cursor-pointer ${
                      loansTab === "offers" ? "bg-[#0B1220] text-white" : "text-[#667085]"
                    }`}
                  >
                    Pre-approved offers
                  </button>
                  <button
                    onClick={() => setLoansTab("calculator")}
                    className={`px-3.5 py-1.5 rounded-lg font-semibold cursor-pointer ${
                      loansTab === "calculator" ? "bg-[#0B1220] text-white" : "text-[#667085]"
                    }`}
                  >
                    EMI calculator
                  </button>
                </div>
              </div>

              {/* Active Loans */}
              {loansTab === "active" && (
                <div className="rounded-2xl border border-[#E4E9F2] bg-white overflow-hidden shadow-xs">
                  <table className="w-full text-left text-[14px]">
                    <thead>
                      <tr className="border-b border-[#E4E9F2] bg-[#F4F7FC] text-[12px] font-bold uppercase tracking-wider text-[#667085]">
                        <th className="py-3.5 px-4">Lender & Facility</th>
                        <th className="py-3.5 px-3">Type</th>
                        <th className="py-3.5 px-3">Sanctioned</th>
                        <th className="py-3.5 px-3">Outstanding</th>
                        <th className="py-3.5 px-3">Monthly EMI</th>
                        <th className="py-3.5 px-4 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E4E9F2]">
                      {ACCOUNTS_DATA.filter((a) => a.type !== "card").map((acc) => (
                        <tr key={acc.id} className="hover:bg-[#F4F7FC]">
                          <td className="py-4 px-4 font-bold text-[#101828]">
                            <div className="flex items-center gap-3">
                              <BankLogo lender={acc.lender} className="w-8 h-8" />
                              <div>
                                <div>{acc.lender}</div>
                                <span className="text-[12px] text-[#667085] font-normal">{acc.product} <span className="font-mono">{acc.accountNo}</span></span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-3 text-[#475467]">{acc.typeLabel}</td>
                          <td className="py-4 px-3 font-mono tabular-nums text-[#101828] font-bold">{acc.sanctionLimitFormatted}</td>
                          <td className="py-4 px-3 font-mono tabular-nums text-[#475467]">{acc.outstandingBalanceFormatted}</td>
                          <td className="py-4 px-3 text-[#475467]">{acc.emiFormatted || "Closed"}</td>
                          <td className="py-4 px-4 text-right">
                            <span className="rounded-full bg-[#ECFDF3] px-2.5 py-1 text-[12px] font-bold text-[#067647]">
                              {acc.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Pre-Approved Offers Comparison Table */}
              {loansTab === "offers" && (
                <div className="rounded-2xl border border-[#E4E9F2] bg-white overflow-hidden shadow-xs">
                  <table className="w-full text-left text-[14px]">
                    <thead>
                      <tr className="border-b border-[#E4E9F2] bg-[#F4F7FC] text-[12px] font-bold uppercase tracking-wider text-[#667085]">
                        <th className="py-3.5 px-4">Lender</th>
                        <th className="py-3.5 px-3">Product</th>
                        <th className="py-3.5 px-3">Pre-approved limit</th>
                        <th className="py-3.5 px-3">Interest rate</th>
                        <th className="py-3.5 px-3">Tenure</th>
                        <th className="py-3.5 px-3">Processing fee</th>
                        <th className="py-3.5 px-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E4E9F2]">
                      {[
                        { lender: "HDFC Bank", prod: "Insta Personal Loan", limit: "₹8,50,000", rate: "10.25% p.a.", tenure: "12–60 mos", fee: "Zero", note: "0 hard inquiries to check" },
                        { lender: "ICICI Bank", prod: "Express Credit Line", limit: "₹5,00,000", rate: "10.50% p.a.", tenure: "6–36 mos", fee: "₹999", note: "Instant disbursal" },
                        { lender: "SBI", prod: "Home Loan Balance Transfer", limit: "₹35,00,000", rate: "8.35% p.a.", tenure: "Up to 20 yrs", fee: "0.25%", note: "Save ~₹3,400/mo EMI" },
                      ].map((o, idx) => (
                        <tr key={idx} className="hover:bg-[#F4F7FC]">
                          <td className="py-4 px-4 font-bold text-[#101828]">{o.lender}</td>
                          <td className="py-4 px-3 text-[#475467]">{o.prod}</td>
                          <td className="py-4 px-3 font-mono font-bold text-[#101828]">{o.limit}</td>
                          <td className="py-4 px-3 text-[#067647] font-bold">{o.rate}</td>
                          <td className="py-4 px-3 text-[#475467]">{o.tenure}</td>
                          <td className="py-4 px-3 text-[#475467]">{o.fee}</td>
                          <td className="py-4 px-4 text-right">
                            <button
                              onClick={() => showToast(`Applied for ${o.lender} ${o.prod}. Advocate follow-up initiated.`)}
                              className="h-9 rounded-xl bg-[#0B1220] px-4 text-[13px] font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
                            >
                              Apply
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="p-3.5 border-t border-[#E4E9F2] bg-[#F4F7FC] text-[13px] text-[#667085]">
                    Checking pre-approved loan offers generates 0 hard credit enquiries.
                  </div>
                </div>
              )}

              {/* EMI Calculator */}
              {loansTab === "calculator" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl border border-[#E4E9F2] bg-white p-6 space-y-5 shadow-xs">
                    <h3 className="text-[16px] font-bold text-[#101828]">Loan details</h3>

                    <div>
                      <div className="flex justify-between text-[14px] font-semibold text-[#101828]">
                        <span>Loan amount</span>
                        <span className="font-mono text-[#1882FF]">₹{emiAmount.toLocaleString("en-IN")}</span>
                      </div>
                      <input
                        type="range"
                        min="50000"
                        max="5000000"
                        step="25000"
                        value={emiAmount}
                        onChange={(e) => setEmiAmount(Number(e.target.value))}
                        className="w-full mt-3 accent-[#1882FF] cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-[14px] font-semibold text-[#101828]">
                        <span>Interest rate (% p.a.)</span>
                        <span className="font-mono text-[#1882FF]">{emiRate}%</span>
                      </div>
                      <input
                        type="range"
                        min="7.5"
                        max="24.0"
                        step="0.25"
                        value={emiRate}
                        onChange={(e) => setEmiRate(Number(e.target.value))}
                        className="w-full mt-3 accent-[#1882FF] cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-[14px] font-semibold text-[#101828]">
                        <span>Tenure</span>
                        <span className="font-mono text-[#1882FF]">{emiTenure} months ({Math.round(emiTenure / 12)} yrs)</span>
                      </div>
                      <input
                        type="range"
                        min="6"
                        max="240"
                        step="6"
                        value={emiTenure}
                        onChange={(e) => setEmiTenure(Number(e.target.value))}
                        className="w-full mt-3 accent-[#1882FF] cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#E4E9F2] bg-white p-6 flex flex-col justify-between shadow-xs">
                    <div>
                      <h3 className="text-[16px] font-bold text-[#101828]">Monthly repayment</h3>
                      <div className="mt-4">
                        <div className="text-[12px] text-[#667085]">Calculated EMI</div>
                        <div className="text-[36px] font-extrabold text-[#101828] font-mono tabular-nums">
                          ₹{calculatedEmi.toLocaleString("en-IN")}
                        </div>
                      </div>

                      <div className="mt-5 space-y-2.5 text-[13px]">
                        <div className="flex justify-between border-b border-[#F4F7FC] py-1.5">
                          <span className="text-[#667085]">Principal loan</span>
                          <span className="font-mono font-semibold text-[#101828]">₹{emiAmount.toLocaleString("en-IN")}</span>
                        </div>
                        <div className="flex justify-between border-b border-[#F4F7FC] py-1.5">
                          <span className="text-[#667085]">Total interest payable</span>
                          <span className="font-mono font-semibold text-[#B54708]">₹{totalInterest.toLocaleString("en-IN")}</span>
                        </div>
                        <div className="flex justify-between py-1.5 font-bold">
                          <span className="text-[#101828]">Total amount payable</span>
                          <span className="font-mono text-[#101828]">₹{(emiAmount + totalInterest).toLocaleString("en-IN")}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => showToast("Amortisation schedule exported to CSV.")}
                      className="mt-6 h-10 w-full rounded-xl border border-[#E4E9F2] text-[13px] font-semibold text-[#101828] hover:bg-[#F4F7FC] cursor-pointer"
                    >
                      Download schedule (CSV)
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* =========================================================
               PAGE 6: MY DISPUTES (STATUTORY CICRA DESK)
               ========================================================= */}
          {activeNav === "disputes" && (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-[24px] font-bold tracking-tight text-[#101828]">My disputes</h1>
                  <p className="text-[15px] text-[#475467] mt-1">
                    4 disputes in progress. The next update is expected by <strong className="text-[#101828]">2 Oct</strong>.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center rounded-xl border border-[#E4E9F2] bg-white p-1 text-[13px]">
                    <button
                      onClick={() => setDisputesViewMode("table")}
                      className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer ${
                        disputesViewMode === "table" ? "bg-[#0B1220] text-white" : "text-[#667085]"
                      }`}
                    >
                      List
                    </button>
                    <button
                      onClick={() => setDisputesViewMode("board")}
                      className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer ${
                        disputesViewMode === "board" ? "bg-[#0B1220] text-white" : "text-[#667085]"
                      }`}
                    >
                      Board
                    </button>
                  </div>
                  <button
                    onClick={() => openDisputeModalForAccount(ACCOUNTS_DATA[0])}
                    className="flex h-10 items-center gap-2 rounded-xl bg-[#0B1220] px-4 text-[14px] font-semibold text-white hover:bg-slate-800 cursor-pointer shadow-xs"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Raise a dispute</span>
                  </button>
                </div>
              </div>

              {/* Disputes List with Status Steps */}
              {disputesViewMode === "table" && (
                <div className="rounded-2xl border border-[#E4E9F2] bg-white overflow-hidden shadow-xs">
                  <table className="w-full text-left text-[14px]">
                    <thead>
                      <tr className="border-b border-[#E4E9F2] bg-[#F4F7FC] text-[12px] font-bold uppercase tracking-wider text-[#667085]">
                        <th className="py-3.5 px-4">Reference #</th>
                        <th className="py-3.5 px-3">Bureau</th>
                        <th className="py-3.5 px-3">Account</th>
                        <th className="py-3.5 px-3">Dispute reason</th>
                        <th className="py-3.5 px-3">Filed date</th>
                        <th className="py-3.5 px-3">Expected update</th>
                        <th className="py-3.5 px-4 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E4E9F2]">
                      {DISPUTES_DATA.map((d) => (
                        <tr key={d.id} className="hover:bg-[#F4F7FC]">
                          <td className="py-4 px-4 font-mono font-bold text-[#101828] text-[13px]">{d.referenceNo}</td>
                          <td className="py-4 px-3 font-semibold text-[#101828]">{d.bureau}</td>
                          <td className="py-4 px-3 text-[#475467]">{d.account}</td>
                          <td className="py-4 px-3 text-[#475467]">{d.reason}</td>
                          <td className="py-4 px-3 text-[#667085]">{d.filedDate}</td>
                          <td className="py-4 px-3 font-semibold text-[#067647]">
                            {d.statutoryDaysRemaining} days (Due {d.expectedResolutionDate})
                          </td>
                          <td className="py-4 px-4 text-right">
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-bold ${
                                d.status === "Resolved"
                                  ? "bg-[#ECFDF3] text-[#067647]"
                                  : "bg-[#EEF4FF] text-[#1882FF]"
                              }`}
                            >
                              {d.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="p-3.5 border-t border-[#E4E9F2] bg-[#F4F7FC] text-[13px] text-[#667085]">
                    Under RBI Master Direction, credit bureaus must resolve disputes within 30 calendar days.
                  </div>
                </div>
              )}

              {/* Disputes Board (Kanban) */}
              {disputesViewMode === "board" && (
                <div className="grid grid-cols-4 gap-4">
                  {(["Draft", "Submitted", "With bureau", "Resolved"] as const).map((stage) => {
                    const items = DISPUTES_DATA.filter((d) => d.status === stage);
                    return (
                      <div key={stage} className="rounded-2xl border border-[#E4E9F2] bg-[#F4F7FC] p-3.5 flex flex-col gap-3">
                        <div className="flex items-center justify-between text-[13px] font-bold text-[#101828] px-1">
                          <span>{stage}</span>
                          <span className="font-mono text-[#667085]">{items.length}</span>
                        </div>
                        <div className="space-y-2.5">
                          {items.map((item) => (
                            <div key={item.id} className="rounded-xl border border-[#E4E9F2] bg-white p-3.5 shadow-xs">
                              <div className="flex items-center justify-between text-[12px]">
                                <span className="font-mono font-bold text-[#1882FF]">{item.referenceNo}</span>
                                <span className="text-[#667085]">{item.bureau}</span>
                              </div>
                              <strong className="text-[13px] font-bold text-[#101828] mt-1.5 block">
                                {item.account}
                              </strong>
                              <p className="text-[12px] text-[#667085] mt-1 line-clamp-2">
                                {item.reason}
                              </p>
                              <div className="mt-2.5 pt-2 border-t border-[#F4F7FC] text-[12px] text-[#067647] font-semibold">
                                {item.statutoryDaysRemaining} days remaining
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* =========================================================
               PAGE 7: SCORE PLANNER (SIMULATOR)
               ========================================================= */}
          {activeNav === "simulator" && (
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-[24px] font-bold tracking-tight text-[#101828]">Score planner</h1>
                <p className="text-[15px] text-[#475467] mt-1">
                  Plan your credit actions to reach 800+ tier-1 status.
                </p>
              </div>

              <div className="grid grid-cols-12 gap-6">
                {/* Inputs Left (7 Cols) */}
                <div className="col-span-12 lg:col-span-7 rounded-2xl border border-[#E4E9F2] bg-white p-6 space-y-6 shadow-xs">
                  <div>
                    <div className="flex justify-between text-[14px] font-bold text-[#101828]">
                      <span>1. Pay down credit card balances</span>
                      <span className="font-mono text-[#1882FF]">₹{simPaydown.toLocaleString("en-IN")}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="150000"
                      step="5000"
                      value={simPaydown}
                      onChange={(e) => setSimPaydown(Number(e.target.value))}
                      className="w-full mt-3 accent-[#1882FF] cursor-pointer"
                    />
                    <div className="flex justify-between text-[12px] text-[#667085] mt-1">
                      <span>₹0 (28% usage)</span>
                      <span>₹85k (15% optimal)</span>
                      <span>₹1.5L (0% debt)</span>
                    </div>
                  </div>

                  <div className="border-t border-[#E4E9F2] pt-5 space-y-3">
                    <label className="flex items-center justify-between p-3.5 rounded-xl border border-[#E4E9F2] bg-[#F4F7FC] cursor-pointer">
                      <div>
                        <strong className="text-[14px] font-bold text-[#101828] block">2. Fix all 4 bureau mismatches</strong>
                        <span className="text-[13px] text-[#667085]">Removes false 30-day delays and active liability records (+48 pts)</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={simFixDisputes}
                        onChange={(e) => setSimFixDisputes(e.target.checked)}
                        className="h-5 w-5 rounded accent-[#1882FF] cursor-pointer"
                      />
                    </label>

                    <label className="flex items-center justify-between p-3.5 rounded-xl border border-[#E4E9F2] bg-[#F4F7FC] cursor-pointer">
                      <div>
                        <strong className="text-[14px] font-bold text-[#101828] block">3. Avoid new hard loan applications for 90 days</strong>
                        <span className="text-[13px] text-[#667085]">Prevents inquiry score deduction penalties (+8 pts)</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={simNoInquiries}
                        onChange={(e) => setSimNoInquiries(e.target.checked)}
                        className="h-5 w-5 rounded accent-[#1882FF] cursor-pointer"
                      />
                    </label>
                  </div>
                </div>

                {/* Output Right (5 Cols) */}
                <div className="col-span-12 lg:col-span-5 rounded-2xl border border-[#E4E9F2] bg-white p-6 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="text-[12px] font-bold uppercase tracking-wider text-[#667085]">
                      Projected Outcome
                    </div>

                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-[48px] font-extrabold text-[#1882FF] tabular-nums leading-none">
                        {simulatedScore}
                      </span>
                      <span className="text-[18px] font-semibold text-[#667085]">/ 900</span>
                    </div>

                    <div className="mt-2 text-[14px] font-bold text-[#067647]">
                      ▲ +{simulatedScore - 771} Points Projected Improvement
                    </div>

                    <div className="mt-5 space-y-2 text-[13px] text-[#475467]">
                      <div className="font-bold text-[#101828]">What this unlocks:</div>
                      <div>• Pre-approved super-premium credit cards (Infinia, Emeralde)</div>
                      <div>• Home loan balance transfer rates starting at 8.35% p.a.</div>
                      <div>• Lowest personal loan rate tier (10.25% p.a.)</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E4E9F2]">
                    <button
                      onClick={() => setActiveNav("disputes")}
                      className="w-full h-10 rounded-xl bg-[#0B1220] text-[14px] font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      Execute score plan →
                    </button>
                    <p className="text-[12px] text-[#667085] mt-2 text-center">
                      Estimates only. Actual bureau scoring models are proprietary.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================
               PAGE 8: CREDIT ENQUIRIES
               ========================================================= */}
          {activeNav === "enquiries" && (
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-[24px] font-bold tracking-tight text-[#101828]">Credit enquiries</h1>
                <p className="text-[15px] text-[#475467] mt-1">
                  2 hard credit enquiries in the last 6 months. This has minimal impact on your score.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 rounded-2xl border border-[#E4E9F2] bg-white p-6 shadow-xs">
                <div>
                  <div className="text-[13px] font-semibold text-[#667085]">Last 6 months</div>
                  <div className="text-[28px] font-extrabold text-[#101828] tabular-nums mt-1">2</div>
                  <div className="text-[13px] text-[#067647] font-semibold mt-0.5">Low impact (-4 pts)</div>
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#667085]">Last 12 months</div>
                  <div className="text-[28px] font-extrabold text-[#101828] tabular-nums mt-1">3</div>
                  <div className="text-[13px] text-[#475467] mt-0.5">Normal healthy range</div>
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#667085]">Last 24 months</div>
                  <div className="text-[28px] font-extrabold text-[#101828] tabular-nums mt-1">5</div>
                  <div className="text-[13px] text-[#475467] mt-0.5">Zero rejected applications</div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#E4E9F2] bg-white overflow-hidden shadow-xs">
                <table className="w-full text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-[#E4E9F2] bg-[#F4F7FC] text-[12px] font-bold uppercase tracking-wider text-[#667085]">
                      <th className="py-3.5 px-4">Lender</th>
                      <th className="py-3.5 px-3">Purpose</th>
                      <th className="py-3.5 px-3">Date</th>
                      <th className="py-3.5 px-3">Bureau</th>
                      <th className="py-3.5 px-4 text-right">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E4E9F2]">
                    {[
                      { lender: "HDFC Bank Ltd", purpose: "Credit Card Application", date: "12 May 2024", bureau: "CIBIL", type: "Hard check" },
                      { lender: "State Bank of India", purpose: "Home Loan Review", date: "18 Jan 2024", bureau: "Experian", type: "Hard check" },
                      { lender: "Axis Bank", purpose: "Auto Loan Assessment", date: "05 Dec 2022", bureau: "CRIF", type: "Hard check" },
                    ].map((enq, idx) => (
                      <tr key={idx} className="hover:bg-[#F4F7FC]">
                        <td className="py-4 px-4 font-bold text-[#101828]">
                          <div className="flex items-center gap-2.5">
                            <BankLogo lender={enq.lender} className="w-7 h-7" />
                            <span>{enq.lender}</span>
                          </div>
                        </td>
                        <td className="py-4 px-3 text-[#475467]">{enq.purpose}</td>
                        <td className="py-4 px-3 text-[#667085]">{enq.date}</td>
                        <td className="py-4 px-3 font-semibold text-[#101828]">{enq.bureau}</td>
                        <td className="py-4 px-4 text-right text-[#667085]">{enq.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* =========================================================
               PART B: NEW DESKTOP PAGE: ACCOUNT & SETTINGS
               ========================================================= */}
          {activeNav === "account" && (
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-[24px] font-bold tracking-tight text-[#101828]">Account & Settings</h1>
                <p className="text-[15px] text-[#475467] mt-1">
                  Manage your personal identity, Prime Care VIP membership, notifications, and security.
                </p>
              </div>

              {/* Sub-nav Split Area */}
              <div className="grid grid-cols-12 gap-6 items-start">
                
                {/* Left Sub-nav (3 Cols / 240px) */}
                <div className="col-span-12 lg:col-span-3 rounded-2xl border border-[#E4E9F2] bg-white p-2.5 shadow-xs space-y-1">
                  {[
                    { id: "profile", label: "Profile", icon: User },
                    { id: "membership", label: "Membership & Points", icon: Crown },
                    { id: "identity", label: "Identity & KYC", icon: Shield },
                    { id: "payments", label: "Payments & Autopay", icon: Wallet },
                    { id: "notifications", label: "Notifications", icon: Bell },
                    { id: "security", label: "Security & Privacy", icon: Lock },
                    { id: "documents", label: "Documents & Statements", icon: FileText },
                    { id: "priority_help", label: "Priority help (VIP)", icon: Headphones },
                    { id: "help", label: "Help & Support", icon: HelpCircle },
                  ].map((sub) => {
                    const Icon = sub.icon;
                    const isActive = accountSubNav === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => setAccountSubNav(sub.id as any)}
                        className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-[14px] font-semibold transition-colors cursor-pointer text-left ${
                          isActive
                            ? "bg-[#EEF4FF] text-[#1882FF]"
                            : "text-[#475467] hover:bg-[#F4F7FC] hover:text-[#101828]"
                        }`}
                      >
                        <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-[#1882FF]" : "text-[#667085]"}`} />
                        <span className="truncate">{sub.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Center Content Area (6 Cols / Max 880px) + Right Rail (3 Cols / 320px) */}
                <div className="col-span-12 lg:col-span-9 grid grid-cols-12 gap-6">
                  
                  {/* Center Column (8 of 12) */}
                  <div className="col-span-12 xl:col-span-8 space-y-6">
                    
                    {/* B.4 SECTION: PROFILE */}
                    {accountSubNav === "profile" && (
                      <div className="space-y-6">
                        {/* Identity Card */}
                        <div className="rounded-2xl border border-[#E4E9F2] bg-white p-6 shadow-xs">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1882FF] text-[18px] font-extrabold text-white shadow-xs">
                                SS
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h2 className="text-[20px] font-bold text-[#101828]">{profileName}</h2>
                                  <span className="rounded-full bg-[#ECFDF3] px-2.5 py-0.5 text-[11px] font-bold text-[#067647]">
                                    ✓ PAN verified
                                  </span>
                                </div>
                                <div className="text-[13px] text-[#667085] mt-1">
                                  {profilePhone} · {profileEmail}
                                </div>
                                <div className="font-mono text-[13px] text-[#475467] mt-1">
                                  PAN: {showFullPan ? "KMMPS9142R" : "KMMPS••••R"}{" "}
                                  <button
                                    onClick={() => {
                                      setShowFullPan(!showFullPan);
                                      showToast(showFullPan ? "PAN masked." : "PAN revealed (verified session).");
                                    }}
                                    className="text-[12px] font-sans text-[#1882FF] font-semibold hover:underline ml-1 cursor-pointer"
                                  >
                                    {showFullPan ? "Hide" : "Show"}
                                  </button>
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={() => showToast("Edit details below in Personal details.")}
                              className="rounded-xl border border-[#E4E9F2] bg-white px-3.5 py-2 text-[13px] font-semibold text-[#101828] hover:bg-[#F4F7FC] cursor-pointer"
                            >
                              Edit profile
                            </button>
                          </div>
                        </div>

                        {/* Quick Access Tiles (4 Tiles) */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                          <div
                            onClick={() => setAccountSubNav("membership")}
                            className="p-4 rounded-2xl border border-[#E4E9F2] bg-white hover:bg-[#F4F7FC] transition-colors cursor-pointer shadow-xs"
                          >
                            <Crown className="h-5 w-5 text-[#1882FF]" />
                            <div className="text-[13px] font-bold text-[#101828] mt-2">My plan</div>
                            <div className="text-[12px] text-[#667085] mt-0.5">Prime Care VIP</div>
                          </div>

                          <div
                            onClick={() => setActiveNav("disputes")}
                            className="p-4 rounded-2xl border border-[#E4E9F2] bg-white hover:bg-[#F4F7FC] transition-colors cursor-pointer shadow-xs"
                          >
                            <Gavel className="h-5 w-5 text-[#B54708]" />
                            <div className="text-[13px] font-bold text-[#101828] mt-2">My disputes</div>
                            <div className="text-[12px] text-[#667085] mt-0.5">4 in progress</div>
                          </div>

                          <div
                            onClick={() => showToast("Opening 1-minute video score breakdown...")}
                            className="p-4 rounded-2xl border border-[#E4E9F2] bg-white hover:bg-[#F4F7FC] transition-colors cursor-pointer shadow-xs"
                          >
                            <Play className="h-5 w-5 text-[#1882FF]" />
                            <div className="text-[13px] font-bold text-[#101828] mt-2">Score video</div>
                            <div className="text-[12px] text-[#667085] mt-0.5">Watch 1-min</div>
                          </div>

                          <div
                            onClick={() => setAccountSubNav("membership")}
                            className="p-4 rounded-2xl border border-[#E4E9F2] bg-white hover:bg-[#F4F7FC] transition-colors cursor-pointer shadow-xs"
                          >
                            <Coins className="h-5 w-5 text-[#067647]" />
                            <div className="text-[13px] font-bold text-[#101828] mt-2">Prime Points</div>
                            <div className="text-[12px] text-[#067647] font-bold mt-0.5">2,450 pts</div>
                          </div>
                        </div>

                        {/* Personal Details Form */}
                        <div className="rounded-2xl border border-[#E4E9F2] bg-white p-6 shadow-xs space-y-4">
                          <h3 className="text-[16px] font-bold text-[#101828]">Personal details</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="text-[12px] font-semibold text-[#667085] block">Full name</label>
                              <input
                                type="text"
                                value={profileName}
                                onChange={(e) => {
                                  setProfileName(e.target.value);
                                  setIsProfileFormDirty(true);
                                }}
                                className="mt-1 h-10 w-full rounded-xl border border-[#E4E9F2] px-3 text-[14px] text-[#101828] outline-none focus:border-[#1882FF]"
                              />
                            </div>
                            <div>
                              <label className="text-[12px] font-semibold text-[#667085] block">Phone number</label>
                              <input
                                type="text"
                                value={profilePhone}
                                onChange={(e) => {
                                  setProfilePhone(e.target.value);
                                  setIsProfileFormDirty(true);
                                }}
                                className="mt-1 h-10 w-full rounded-xl border border-[#E4E9F2] px-3 text-[14px] text-[#101828] outline-none focus:border-[#1882FF]"
                              />
                            </div>
                            <div>
                              <label className="text-[12px] font-semibold text-[#667085] block">Email address</label>
                              <input
                                type="email"
                                value={profileEmail}
                                onChange={(e) => {
                                  setProfileEmail(e.target.value);
                                  setIsProfileFormDirty(true);
                                }}
                                className="mt-1 h-10 w-full rounded-xl border border-[#E4E9F2] px-3 text-[14px] text-[#101828] outline-none focus:border-[#1882FF]"
                              />
                            </div>
                            <div>
                              <label className="text-[12px] font-semibold text-[#667085] block">Date of birth</label>
                              <input
                                type="text"
                                value={profileDob}
                                onChange={(e) => {
                                  setProfileDob(e.target.value);
                                  setIsProfileFormDirty(true);
                                }}
                                className="mt-1 h-10 w-full rounded-xl border border-[#E4E9F2] px-3 text-[14px] text-[#101828] outline-none focus:border-[#1882FF]"
                              />
                            </div>
                            <div className="sm:col-span-2">
                              <label className="text-[12px] font-semibold text-[#667085] block">Current residence address</label>
                              <input
                                type="text"
                                value={profileAddress}
                                onChange={(e) => {
                                  setProfileAddress(e.target.value);
                                  setIsProfileFormDirty(true);
                                }}
                                className="mt-1 h-10 w-full rounded-xl border border-[#E4E9F2] px-3 text-[14px] text-[#101828] outline-none focus:border-[#1882FF]"
                              />
                            </div>
                          </div>

                          {isProfileFormDirty && (
                            <div className="pt-4 border-t border-[#E4E9F2] flex justify-end gap-3">
                              <button
                                onClick={() => setIsProfileFormDirty(false)}
                                className="h-10 rounded-xl border border-[#E4E9F2] px-4 text-[13px] font-semibold text-[#667085] hover:bg-[#F4F7FC]"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => {
                                  setIsProfileFormDirty(false);
                                  showToast("Profile details saved successfully.");
                                }}
                                className="h-10 rounded-xl bg-[#0B1220] px-5 text-[13px] font-semibold text-white hover:bg-slate-800"
                              >
                                Save changes
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* B.5 SECTION: MEMBERSHIP & PRIME POINTS */}
                    {accountSubNav === "membership" && (
                      <div className="space-y-6">
                        {/* Current Plan Card */}
                        <div className="rounded-2xl border-2 border-[#1882FF] bg-[#EEF4FF]/50 p-6 shadow-xs">
                          <div className="flex items-start justify-between">
                            <div>
                              <span className="rounded-full bg-[#1882FF] px-2.5 py-0.5 text-[11px] font-bold text-white">
                                ACTIVE MEMBERSHIP
                              </span>
                              <h2 className="text-[20px] font-bold text-[#101828] mt-2">Prime Care VIP (Annual)</h2>
                              <p className="text-[14px] text-[#475467] mt-0.5">
                                Renews 12 Dec 2026 · ₹2,999/year (Autopay ON)
                              </p>
                            </div>
                            <button
                              onClick={() => showToast("Opening plan change options...")}
                              className="rounded-xl border border-[#1882FF] bg-white px-4 py-2 text-[13px] font-semibold text-[#1882FF] hover:bg-[#EEF4FF]"
                            >
                              Manage plan
                            </button>
                          </div>

                          <div className="mt-5 grid grid-cols-2 gap-2 text-[13px] text-[#101828]">
                            <div className="flex items-center gap-2">✓ All 4 credit bureaus updated daily</div>
                            <div className="flex items-center gap-2">✓ Zero-fee unlimited legal disputes</div>
                            <div className="flex items-center gap-2">✓ Dedicated senior credit advocate</div>
                            <div className="flex items-center gap-2">✓ Priority RBI Ombudsman escalation</div>
                          </div>
                        </div>

                        {/* Compare Plans Table */}
                        <div className="rounded-2xl border border-[#E4E9F2] bg-white p-6 shadow-xs">
                          <h3 className="text-[16px] font-bold text-[#101828] mb-4">Membership Tiers</h3>
                          <div className="grid grid-cols-3 gap-4 text-[13px]">
                            <div className="p-4 rounded-xl border border-[#E4E9F2] bg-[#F4F7FC]">
                              <div className="font-bold text-[#667085]">Prime One</div>
                              <div className="text-[18px] font-extrabold text-[#101828] mt-1">₹499/yr</div>
                              <div className="mt-3 text-[#667085] space-y-1.5">
                                <div>• CIBIL monthly score</div>
                                <div>• Basic score simulator</div>
                              </div>
                            </div>

                            <div className="p-4 rounded-xl border border-[#E4E9F2] bg-[#F4F7FC]">
                              <div className="font-bold text-[#1882FF]">Prime 360</div>
                              <div className="text-[18px] font-extrabold text-[#101828] mt-1">₹1,499/yr</div>
                              <div className="mt-3 text-[#667085] space-y-1.5">
                                <div>• All 4 bureau reports</div>
                                <div>• 3 dispute filings/yr</div>
                              </div>
                            </div>

                            <div className="p-4 rounded-xl border-2 border-[#1882FF] bg-[#EEF4FF]/40">
                              <div className="font-bold text-[#067647]">Prime Care VIP</div>
                              <div className="text-[18px] font-extrabold text-[#101828] mt-1">₹2,999/yr</div>
                              <div className="mt-3 text-[#101828] font-medium space-y-1.5">
                                <div>• All 4 bureaus live sync</div>
                                <div>• Unlimited legal disputes</div>
                                <div>• 1-on-1 legal advocate</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Redeem Coupon */}
                        <div className="rounded-2xl border border-[#E4E9F2] bg-white p-6 shadow-xs flex items-center justify-between gap-4">
                          <div>
                            <h3 className="text-[15px] font-bold text-[#101828]">Redeem membership coupon</h3>
                            <p className="text-[13px] text-[#667085] mt-0.5">Enter promotional or partner code to apply benefits.</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              placeholder="Enter coupon code"
                              value={couponCode}
                              onChange={(e) => setCouponCode(e.target.value)}
                              className="h-10 rounded-xl border border-[#E4E9F2] px-3 text-[13px] uppercase outline-none focus:border-[#1882FF]"
                            />
                            <button
                              onClick={() => {
                                if (couponCode.trim()) {
                                  showToast(`Coupon ${couponCode.toUpperCase()} applied successfully!`);
                                  setCouponCode("");
                                }
                              }}
                              className="h-10 rounded-xl bg-[#0B1220] px-4 text-[13px] font-semibold text-white hover:bg-slate-800"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* B.5 SECTION: IDENTITY & KYC */}
                    {accountSubNav === "identity" && (
                      <div className="rounded-2xl border border-[#E4E9F2] bg-white p-6 shadow-xs space-y-5">
                        <h2 className="text-[18px] font-bold text-[#101828]">Identity & KYC Verification</h2>
                        <div className="space-y-3">
                          {[
                            { label: "Permanent Account Number (PAN)", val: "KMMPS••••R", status: "Verified ✓", clean: true },
                            { label: "Aadhaar e-KYC", val: "•••• •••• 9921", status: "Verified ✓", clean: true },
                            { label: "Mobile Number", val: "+91 98••••••42", status: "OTP Verified ✓", clean: true },
                            { label: "Email Address", val: "sawai.singh@gmail.com", status: "Verified ✓", clean: true },
                          ].map((k, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-[#F4F7FC]">
                              <div>
                                <div className="text-[12px] font-semibold text-[#667085]">{k.label}</div>
                                <div className="font-mono text-[14px] font-bold text-[#101828] mt-0.5">{k.val}</div>
                              </div>
                              <span className="rounded-full bg-[#ECFDF3] px-3 py-1 text-[12px] font-bold text-[#067647]">
                                {k.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* B.5 SECTION: PAYMENTS & AUTOPAY */}
                    {accountSubNav === "payments" && (
                      <div className="rounded-2xl border border-[#E4E9F2] bg-white p-6 shadow-xs space-y-5">
                        <h2 className="text-[18px] font-bold text-[#101828]">Payments & Autopay</h2>
                        <div className="p-4 rounded-xl border border-[#E4E9F2] bg-[#F4F7FC] flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-6 w-6 text-[#1882FF]" />
                            <div>
                              <div className="text-[14px] font-bold text-[#101828]">HDFC Bank Debit Card (•••• 4492)</div>
                              <div className="text-[12px] text-[#667085]">Autopay enabled for Prime Care VIP renewal</div>
                            </div>
                          </div>
                          <span className="rounded-full bg-[#ECFDF3] px-3 py-1 text-[12px] font-bold text-[#067647]">
                            Autopay ON
                          </span>
                        </div>
                      </div>
                    )}

                    {/* B.5 SECTION: NOTIFICATIONS */}
                    {accountSubNav === "notifications" && (
                      <div className="rounded-2xl border border-[#E4E9F2] bg-white p-6 shadow-xs space-y-5">
                        <h2 className="text-[18px] font-bold text-[#101828]">Report update alerts & Notifications</h2>
                        <div className="space-y-3">
                          {[
                            { title: "Score changes & monthly refreshes", desc: "WhatsApp & Email alerts whenever score changes" },
                            { title: "New credit enquiry detection", desc: "Instant SMS & App alert when a lender pulls your credit" },
                            { title: "Dispute resolution updates", desc: "Notifications when bureau acts on your statutory notice" },
                          ].map((n, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-[#F4F7FC]">
                              <div>
                                <div className="text-[14px] font-bold text-[#101828]">{n.title}</div>
                                <div className="text-[12px] text-[#667085] mt-0.5">{n.desc}</div>
                              </div>
                              <input type="checkbox" defaultChecked className="h-5 w-5 rounded accent-[#1882FF] cursor-pointer" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* B.5 SECTION: SECURITY */}
                    {accountSubNav === "security" && (
                      <div className="rounded-2xl border border-[#E4E9F2] bg-white p-6 shadow-xs space-y-5">
                        <h2 className="text-[18px] font-bold text-[#101828]">Security & Privacy</h2>
                        <div className="space-y-3 text-[13px]">
                          <div className="p-4 rounded-xl bg-[#F4F7FC] flex items-center justify-between">
                            <div>
                              <div className="font-bold text-[#101828]">2-Step OTP Authentication</div>
                              <div className="text-[#667085]">Requires SMS code on new device logins</div>
                            </div>
                            <span className="rounded-full bg-[#ECFDF3] px-3 py-1 text-[12px] font-bold text-[#067647]">Active ✓</span>
                          </div>
                          <div className="p-4 rounded-xl bg-[#F4F7FC] flex items-center justify-between">
                            <div>
                              <div className="font-bold text-[#101828]">Active session</div>
                              <div className="text-[#667085]">Chrome on Windows 11 · Mumbai, India</div>
                            </div>
                            <button onClick={() => showToast("Signed out of other devices.")} className="text-[#1882FF] font-semibold hover:underline">
                              Sign out others
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* B.5 SECTION: DOCUMENTS & STATEMENTS */}
                    {accountSubNav === "documents" && (
                      <div className="rounded-2xl border border-[#E4E9F2] bg-white p-6 shadow-xs space-y-5">
                        <div className="flex items-center justify-between">
                          <h2 className="text-[18px] font-bold text-[#101828]">Documents & Statements</h2>
                          <button
                            onClick={() => showToast("Generating new 4-bureau official audit statement...")}
                            className="rounded-xl bg-[#0B1220] px-4 py-2 text-[13px] font-semibold text-white hover:bg-slate-800"
                          >
                            Generate new 4-bureau statement
                          </button>
                        </div>
                        <div className="space-y-2.5">
                          {[
                            { name: "Consolidated 4-Bureau Dossier (PDF)", date: "24 Sep 2026", size: "2.4 MB" },
                            { name: "Prime Care VIP GST Tax Invoice #INV-2025-8812", date: "15 Oct 2025", size: "142 KB" },
                            { name: "HDFC Card Bank NOC Letter", date: "12 Dec 2023", size: "680 KB" },
                          ].map((doc, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-[#F4F7FC]">
                              <div className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-[#1882FF]" />
                                <div>
                                  <div className="text-[14px] font-bold text-[#101828]">{doc.name}</div>
                                  <div className="text-[12px] text-[#667085]">{doc.date} · {doc.size}</div>
                                </div>
                              </div>
                              <button onClick={() => showToast(`Downloading ${doc.name}...`)} className="text-[13px] font-semibold text-[#1882FF] hover:underline">
                                Download ↓
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* B.5 SECTION: PRIORITY HELP (VIP) */}
                    {accountSubNav === "priority_help" && (
                      <div className="rounded-2xl border border-[#E4E9F2] bg-white p-6 shadow-xs space-y-5">
                        <div>
                          <div className="flex items-center gap-2">
                            <h2 className="text-[18px] font-bold text-[#101828]">Priority Legal Advocate Desk</h2>
                            <span className="rounded-full bg-[#ECFDF3] px-2.5 py-0.5 text-[11px] font-bold text-[#067647]">
                              Included in Prime Care VIP
                            </span>
                          </div>
                          <p className="text-[13px] text-[#475467] mt-1">
                            Direct 1-on-1 legal consultation with Chief Credit Advocate for complex rectifications & ombudsman filings.
                          </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-[#EEF4FF]/50 border border-[#D0E2FF] flex items-center justify-between">
                          <div>
                            <div className="text-[14px] font-bold text-[#101828]">Senior Advocate Assigned: Adv. Parth Sharma</div>
                            <div className="text-[12px] text-[#667085] mt-0.5">Average response time: &lt; 2 hours on business days</div>
                          </div>
                          <button
                            onClick={() => showToast("Priority consultation booked for tomorrow 11:00 AM.")}
                            className="rounded-xl bg-[#1882FF] px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-[#1474E8]"
                          >
                            Schedule call →
                          </button>
                        </div>
                      </div>
                    )}

                    {/* B.5 SECTION: HELP & SUPPORT */}
                    {accountSubNav === "help" && (
                      <div className="rounded-2xl border border-[#E4E9F2] bg-white p-6 shadow-xs space-y-5">
                        <h2 className="text-[18px] font-bold text-[#101828]">Help & Support</h2>
                        <p className="text-[13px] text-[#475467]">
                          Have questions regarding bureau reports, disputes, or score calculation? We&apos;re here to help.
                        </p>
                        <div className="grid grid-cols-2 gap-3 text-[13px]">
                          <button onClick={() => setIsParthOpen(true)} className="p-4 rounded-xl border border-[#E4E9F2] bg-[#F4F7FC] text-left hover:bg-white cursor-pointer">
                            <div className="font-bold text-[#101828]">Ask Parth Assistant</div>
                            <div className="text-[12px] text-[#667085] mt-0.5">Instant AI report explanation</div>
                          </button>
                          <button onClick={() => showToast("Opening WhatsApp support...")} className="p-4 rounded-xl border border-[#E4E9F2] bg-[#F4F7FC] text-left hover:bg-white cursor-pointer">
                            <div className="font-bold text-[#101828]">WhatsApp Helpdesk</div>
                            <div className="text-[12px] text-[#667085] mt-0.5">Chat with support team</div>
                          </button>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Right Rail (4 of 12 / 320px) */}
                  <div className="col-span-12 xl:col-span-4 space-y-5">
                    
                    {/* Your Plan Card */}
                    <div className="rounded-2xl border border-[#D0E2FF] bg-[#EEF4FF]/50 p-5 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-[#1882FF] uppercase tracking-wider">
                          primeclub
                        </span>
                        <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-bold text-[#067647] border border-[#D0E2FF]">
                          Active
                        </span>
                      </div>
                      <h3 className="text-[16px] font-bold text-[#101828] mt-2">Prime Care VIP</h3>
                      <p className="text-[12px] text-[#667085] mt-0.5">Renews 12 Dec 2026</p>
                      <button
                        onClick={() => setAccountSubNav("membership")}
                        className="mt-4 w-full rounded-xl bg-white border border-[#D0E2FF] py-2 text-[13px] font-semibold text-[#1882FF] hover:bg-white/80 cursor-pointer"
                      >
                        Manage plan
                      </button>
                    </div>

                    {/* Prime Points Card */}
                    <div className="rounded-2xl border border-[#E4E9F2] bg-white p-5 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] font-semibold text-[#667085]">Prime Points</span>
                        <Coins className="h-4 w-4 text-[#067647]" />
                      </div>
                      <div className="text-[26px] font-extrabold text-[#101828] tabular-nums mt-1">2,450 pts</div>
                      <p className="text-[12px] text-[#667085] mt-0.5">Redeem for discounts or gift vouchers</p>
                      <button
                        onClick={() => showToast("Points redemption catalog opening...")}
                        className="mt-4 w-full rounded-xl border border-[#E4E9F2] bg-white py-2 text-[13px] font-semibold text-[#101828] hover:bg-[#F4F7FC] cursor-pointer"
                      >
                        Redeem points
                      </button>
                    </div>

                    {/* Partner Offer Card (Single Static Card) */}
                    <div className="rounded-2xl border border-[#E4E9F2] bg-white p-5 shadow-xs">
                      <span className="rounded-full bg-[#F4F7FC] px-2 py-0.5 text-[10px] font-bold text-[#667085]">
                        Partner offer
                      </span>
                      <h4 className="text-[14px] font-bold text-[#101828] mt-2">Axis Bank Airtel Card</h4>
                      <p className="text-[12px] text-[#475467] mt-0.5">
                        Pre-approved credit card with 25% cashback on mobile bills.
                      </p>
                      <button
                        onClick={() => showToast("Opening partner offer details...")}
                        className="mt-3.5 w-full rounded-xl bg-[#0B1220] py-2 text-[12px] font-semibold text-white hover:bg-slate-800 cursor-pointer"
                      >
                        See offer
                      </button>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          )}

        </div>
      </main>

      {/* =========================================================
           PARTH SIDE PANEL (380PX, TOGGLED WITH ⌘J)
           ========================================================= */}
      <AnimatePresence>
        {isParthOpen && (
          <motion.aside
            initial={{ x: 380, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 380, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed top-0 right-0 bottom-0 w-[380px] bg-white border-l border-[#E4E9F2] z-40 flex flex-col shadow-[0_8px_24px_rgba(16,24,40,0.12)] select-none"
          >
            {/* Header */}
            <div className="flex h-16 items-center justify-between border-b border-[#E4E9F2] px-5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1882FF] text-[13px] font-bold text-white">
                  P
                </div>
                <div>
                  <strong className="text-[15px] font-bold text-[#101828]">Parth</strong>
                  <span className="text-[12px] text-[#667085] ml-1.5">Credit companion</span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setParthMessages([])}
                  title="Clear conversation"
                  className="rounded-lg p-1.5 text-[#667085] hover:bg-[#F4F7FC] hover:text-[#101828] cursor-pointer"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsParthOpen(false)}
                  className="rounded-lg p-1.5 text-[#667085] hover:bg-[#F4F7FC] hover:text-[#101828] cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Conversation Stream */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 text-[14px]">
              {parthMessages.length === 0 ? (
                <div className="py-4 space-y-3.5">
                  <h3 className="text-[16px] font-bold text-[#101828]">Hi Sawai, ask me anything about your credit.</h3>
                  <p className="text-[13px] text-[#667085]">
                    Select a question below or type your query to inspect your 4 reports.
                  </p>

                  <div className="space-y-2 pt-2">
                    {[
                      "Mera credit score 800+ kaise hoga?",
                      "CIBIL me dispute kaise kare?",
                      "Loan approval ke chances kaise badhaye?",
                      "Experian me HDFC card kyu active dikh raha hai?",
                    ].map((prompt, i) => (
                      <button
                        key={i}
                        onClick={() => askParth(prompt)}
                        className="w-full text-left rounded-xl border border-[#E4E9F2] bg-[#F4F7FC] p-3 text-[13px] font-semibold text-[#101828] hover:border-[#1882FF] hover:bg-white transition-colors cursor-pointer shadow-xs"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                parthMessages.map((m, idx) => (
                  <div key={idx} className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}>
                    <div
                      className={`max-w-[88%] rounded-2xl p-3.5 leading-relaxed ${
                        m.sender === "user"
                          ? "bg-[#EEF4FF] text-[#101828] font-medium"
                          : "text-[#101828] pl-0"
                      }`}
                    >
                      <div className="whitespace-pre-line">{m.text}</div>
                      {m.citation && (
                        <div className="mt-2 text-[12px] text-[#667085] font-normal">
                          {m.citation}
                        </div>
                      )}
                      {m.actionLabel && m.actionNav && (
                        <button
                          onClick={() => {
                            setActiveNav(m.actionNav!);
                            setIsParthOpen(false);
                          }}
                          className="mt-3 inline-flex items-center gap-1.5 rounded-xl border border-[#E4E9F2] bg-white px-3 py-1.5 text-[12px] font-bold text-[#1882FF] hover:bg-[#F4F7FC] cursor-pointer shadow-xs"
                        >
                          <span>{m.actionLabel}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}

              {isParthLoading && (
                <div className="text-[13px] text-[#667085] flex items-center gap-2 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#1882FF] animate-bounce" />
                  <span className="h-2 w-2 rounded-full bg-[#1882FF] animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="h-2 w-2 rounded-full bg-[#1882FF] animate-bounce" style={{ animationDelay: "300ms" }} />
                  <span>Checking your verified reports...</span>
                </div>
              )}
            </div>

            {/* Context Chip (if present) */}
            {parthContext && (
              <div className="px-5 py-2 bg-[#F4F7FC] border-t border-[#E4E9F2] flex items-center justify-between text-[12px] text-[#475467]">
                <span>Context: <strong>{parthContext}</strong></span>
                <button onClick={() => setParthContext(null)} className="text-[#667085] hover:text-[#101828]">
                  ✕
                </button>
              </div>
            )}

            {/* Composer */}
            <div className="border-t border-[#E4E9F2] p-4 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  askParth(parthInput);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask Parth anything..."
                  value={parthInput}
                  onChange={(e) => setParthInput(e.target.value)}
                  className="h-10 flex-1 rounded-xl border border-[#E4E9F2] bg-white px-3.5 text-[14px] text-[#101828] outline-none placeholder-[#667085] focus:border-[#1882FF]"
                />
                <button
                  type="submit"
                  disabled={!parthInput.trim()}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1220] text-white disabled:opacity-40 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <div className="mt-2 text-[11px] text-[#667085] text-center">
                Parth can make mistakes. Verify with your bureau reports.
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* =========================================================
           DETAIL DRAWER (520PX SLIDE FROM RIGHT)
           ========================================================= */}
      <AnimatePresence>
        {selectedDrawerAccount && (
          <>
            <div
              onClick={() => setSelectedDrawerAccount(null)}
              className="fixed inset-0 bg-[#0B1220]/20 z-40"
            />
            <motion.div
              initial={{ x: 520 }}
              animate={{ x: 0 }}
              exit={{ x: 520 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-[520px] bg-white z-50 shadow-[0_8px_24px_rgba(16,24,40,0.12)] border-l border-[#E4E9F2] flex flex-col justify-between overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between border-b border-[#E4E9F2] pb-4">
                  <div className="flex items-center gap-3.5">
                    <BankLogo lender={selectedDrawerAccount.lender} className="w-12 h-12" />
                    <div>
                      <div className="text-[12px] font-bold text-[#667085] uppercase tracking-wider">
                        {selectedDrawerAccount.typeLabel}
                      </div>
                      <h2 className="text-[18px] font-bold text-[#101828] mt-0.5">
                        {selectedDrawerAccount.lender} {selectedDrawerAccount.product}
                      </h2>
                      <span className="font-mono text-[13px] text-[#667085]">
                        Account: {selectedDrawerAccount.accountNo}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedDrawerAccount(null)}
                    className="rounded-lg p-1.5 text-[#667085] hover:bg-[#F4F7FC]"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* 1. Side-by-side 4-bureau comparison mini table */}
                <div>
                  <h3 className="text-[14px] font-bold text-[#101828] mb-2.5">Reported across 4 bureaus</h3>
                  <div className="rounded-xl border border-[#E4E9F2] overflow-hidden text-[13px]">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-[#F4F7FC] border-b border-[#E4E9F2] text-[12px] text-[#667085] font-bold">
                          <th className="py-2.5 px-3">Field</th>
                          <th className="py-2.5 px-2">CIBIL</th>
                          <th className="py-2.5 px-2">CRIF</th>
                          <th className="py-2.5 px-2">Experian</th>
                          <th className="py-2.5 px-2">Equifax</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E4E9F2]">
                        <tr>
                          <td className="py-2.5 px-3 text-[#667085] font-semibold">Status</td>
                          <td className="py-2.5 px-2 font-medium">{selectedDrawerAccount.cibilStatus}</td>
                          <td className="py-2.5 px-2 font-medium">{selectedDrawerAccount.crifStatus}</td>
                          <td
                            className={`py-2.5 px-2 font-bold ${
                              selectedDrawerAccount.experianMismatch ? "text-[#B42318] bg-[#FEF3F2]" : ""
                            }`}
                          >
                            {selectedDrawerAccount.experianStatus}
                          </td>
                          <td className="py-2.5 px-2 font-medium">{selectedDrawerAccount.equifaxStatus}</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 text-[#667085] font-semibold">Sanctioned</td>
                          <td className="py-2.5 px-2 font-mono">{selectedDrawerAccount.sanctionLimitFormatted}</td>
                          <td className="py-2.5 px-2 font-mono">{selectedDrawerAccount.sanctionLimitFormatted}</td>
                          <td className="py-2.5 px-2 font-mono">{selectedDrawerAccount.sanctionLimitFormatted}</td>
                          <td className="py-2.5 px-2 font-mono">{selectedDrawerAccount.sanctionLimitFormatted}</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 text-[#667085] font-semibold">Opened Date</td>
                          <td className="py-2.5 px-2">{selectedDrawerAccount.openedDate}</td>
                          <td className="py-2.5 px-2">{selectedDrawerAccount.openedDate}</td>
                          <td className="py-2.5 px-2">{selectedDrawerAccount.openedDate}</td>
                          <td className="py-2.5 px-2">{selectedDrawerAccount.openedDate}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 2. Payment history (last 36 months) DPD grid */}
                <div>
                  <h3 className="text-[14px] font-bold text-[#101828] mb-2.5">Payment history (last 36 months)</h3>
                  <div className="space-y-2 rounded-xl border border-[#E4E9F2] p-3.5 bg-[#F4F7FC]">
                    {(["cibil", "crif", "experian", "equifax"] as const).map((b) => (
                      <div key={b} className="flex items-center gap-2.5">
                        <span className="w-16 text-[11px] font-bold uppercase text-[#667085]">{b}</span>
                        <div className="flex-1 flex gap-0.5 overflow-x-auto">
                          {selectedDrawerAccount.dpdHistory[b].map((dpd, i) => (
                            <div
                              key={i}
                              title={`${MONTH_LABELS[i]}: ${dpd === "000" ? "On time" : "30 days late"}`}
                              className={`h-4 w-2.5 rounded-xs flex items-center justify-center text-[7px] font-bold ${
                                dpd === "000" ? "bg-[#067647] text-white" : "bg-[#B42318] text-white"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#667085] pt-2.5 border-t border-[#E4E9F2]">
                      <span>Oct 2023</span>
                      <span className="font-semibold text-[#101828]">Green = On time · Red = 30 days late</span>
                      <span>Sep 2026</span>
                    </div>
                  </div>
                </div>

                {/* 3. Plain language explanation */}
                {selectedDrawerAccount.status === "Mismatch" && (
                  <div className="rounded-xl border border-[#E4E9F2] bg-[#FEF3F2]/60 p-4 space-y-1.5">
                    <div className="text-[14px] font-bold text-[#B42318]">Mismatch Analysis & Impact</div>
                    <p className="text-[13px] text-[#475467] leading-relaxed">
                      {selectedDrawerAccount.discrepancyReason}
                    </p>
                    <div className="text-[13px] font-bold text-[#067647] mt-1">
                      Estimated score recovery: {selectedDrawerAccount.estImpact}
                    </div>
                  </div>
                )}
              </div>

              {/* Sticky Footer */}
              <div className="p-4 border-t border-[#E4E9F2] bg-[#F4F7FC] flex items-center justify-between gap-3">
                <button
                  onClick={() =>
                    openParthWithContext(
                      `${selectedDrawerAccount.lender} ${selectedDrawerAccount.product}`,
                      `${selectedDrawerAccount.lender} ${selectedDrawerAccount.product} ke bare me batao`
                    )
                  }
                  className="flex-1 h-10 rounded-xl border border-[#E4E9F2] bg-white text-[13px] font-semibold text-[#101828] hover:bg-[#F4F7FC] cursor-pointer"
                >
                  Ask Parth about this
                </button>
                {selectedDrawerAccount.status === "Mismatch" ? (
                  <button
                    onClick={() => openDisputeModalForAccount(selectedDrawerAccount)}
                    className="flex-1 h-10 rounded-xl bg-[#0B1220] text-[13px] font-semibold text-white hover:bg-slate-800 cursor-pointer"
                  >
                    Raise a dispute
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedDrawerAccount(null)}
                    className="flex-1 h-10 rounded-xl bg-[#0B1220] text-[13px] font-semibold text-white hover:bg-slate-800 cursor-pointer"
                  >
                    Close
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* =========================================================
           THREE-STEP DISPUTE FILING MODAL (CICRA COMPLIANCE)
           ========================================================= */}
      <AnimatePresence>
        {isDisputeModalOpen && disputeModalAccount && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1220]/40 p-4">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(16,24,40,0.12)] border border-[#E4E9F2]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-[#E4E9F2] pb-3.5">
                <div>
                  <h3 className="text-[17px] font-bold text-[#101828]">Raise a Credit Bureau Dispute</h3>
                  <div className="text-[13px] text-[#667085] mt-0.5">
                    Step {disputeStep} of 3 · Section 21 CICRA Act, 2005
                  </div>
                </div>
                <button onClick={() => setIsDisputeModalOpen(false)} className="rounded-lg p-1 text-[#667085] hover:bg-[#F4F7FC]">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Step 1: Confirm Discrepancy */}
              {disputeStep === 1 && (
                <div className="py-4 space-y-4">
                  <div className="p-4 rounded-xl border border-[#E4E9F2] bg-[#F4F7FC] flex items-start gap-3.5">
                    <BankLogo lender={disputeModalAccount.lender} className="w-10 h-10 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[14px] font-bold text-[#101828]">
                        {disputeModalAccount.lender} · {disputeModalAccount.product}
                      </div>
                      <div className="font-mono text-[12px] text-[#667085] mt-0.5">
                        Account: {disputeModalAccount.accountNo}
                      </div>
                      <p className="text-[13px] text-[#475467] mt-2 leading-relaxed">
                        {disputeModalAccount.discrepancyReason}
                      </p>
                    </div>
                  </div>

                  <div className="text-[13px] text-[#667085]">
                    Expected point recovery: <strong className="text-[#067647] font-bold">{disputeModalAccount.estImpact}</strong> upon deletion or update.
                  </div>

                  <div className="pt-3.5 border-t border-[#E4E9F2] flex justify-end gap-3">
                    <button
                      onClick={() => setIsDisputeModalOpen(false)}
                      className="h-10 rounded-xl border border-[#E4E9F2] px-4 text-[13px] font-semibold text-[#101828] hover:bg-[#F4F7FC]"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setDisputeStep(2)}
                      className="h-10 rounded-xl bg-[#0B1220] px-5 text-[13px] font-semibold text-white hover:bg-slate-800"
                    >
                      Continue to Evidence →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Attach Evidence */}
              {disputeStep === 2 && (
                <div className="py-4 space-y-4">
                  <div className="text-[13px] text-[#475467]">
                    Attach official bank NOC, closure letter, or account statement for instant verification.
                  </div>

                  <div
                    onClick={() => setDisputeEvidenceName("HDFC_Closure_NOC_Dec2023.pdf")}
                    className="border-2 border-dashed border-[#D0D5DD] hover:border-[#1882FF] rounded-xl p-6 text-center cursor-pointer transition-colors bg-[#F4F7FC]"
                  >
                    <UploadCloud className="h-7 w-7 text-[#667085] mx-auto mb-2" />
                    <div className="text-[14px] font-semibold text-[#101828]">
                      {disputeEvidenceName || "Click to upload NOC / Statement"}
                    </div>
                    <div className="text-[12px] text-[#667085] mt-0.5">PDF, PNG, JPG up to 10MB</div>
                  </div>

                  <div className="pt-3.5 border-t border-[#E4E9F2] flex justify-between">
                    <button
                      onClick={() => setDisputeStep(1)}
                      className="h-10 rounded-xl border border-[#E4E9F2] px-4 text-[13px] font-semibold text-[#101828]"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => setDisputeStep(3)}
                      className="h-10 rounded-xl bg-[#0B1220] px-5 text-[13px] font-semibold text-white hover:bg-slate-800"
                    >
                      Review Legal Notice →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Review & Submit Draft Notice */}
              {disputeStep === 3 && (
                <div className="py-4 space-y-4">
                  <div className="text-[13px] text-[#475467]">
                    Editable draft notice prepared under RBI Credit Information Companies rules.
                  </div>

                  <textarea
                    rows={7}
                    value={disputeDraftNotice}
                    onChange={(e) => setDisputeDraftNotice(e.target.value)}
                    className="w-full rounded-xl border border-[#E4E9F2] p-3 text-[12px] font-mono text-[#101828] bg-[#F4F7FC] outline-none focus:border-[#1882FF]"
                  />

                  <div className="pt-3.5 border-t border-[#E4E9F2] flex items-center justify-between">
                    <button
                      onClick={() => setDisputeStep(2)}
                      className="h-10 rounded-xl border border-[#E4E9F2] px-4 text-[13px] font-semibold text-[#101828]"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => {
                        setIsDisputeModalOpen(false);
                        showToast("Dispute notice served to bureau cell.");
                      }}
                      className="h-10 rounded-xl bg-[#0B1220] px-5 text-[13px] font-semibold text-white hover:bg-slate-800"
                    >
                      Submit dispute notice
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================
           COMMAND PALETTE MODAL (⌘K)
           ========================================================= */}
      <AnimatePresence>
        {isCommandOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-[#0B1220]/40 p-4">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="w-full max-w-xl rounded-2xl bg-white shadow-[0_8px_24px_rgba(16,24,40,0.12)] border border-[#E4E9F2] overflow-hidden"
            >
              <div className="flex items-center gap-3 border-b border-[#E4E9F2] px-4 py-3.5">
                <Search className="h-5 w-5 text-[#667085]" />
                <input
                  type="text"
                  placeholder="Search accounts, pages, or ask Parth…"
                  value={commandQuery}
                  onChange={(e) => setCommandQuery(e.target.value)}
                  autoFocus
                  className="w-full text-[14px] text-[#101828] outline-none bg-transparent placeholder-[#667085]"
                />
                <kbd className="rounded-md border border-[#D0D5DD] bg-[#F4F7FC] px-2 py-0.5 text-[11px] font-semibold text-[#667085]">
                  ESC
                </kbd>
              </div>

              <div className="max-h-80 overflow-y-auto p-2.5 divide-y divide-[#F4F7FC]">
                {commandResults.length === 0 ? (
                  <div className="p-4 text-center text-[13px] text-[#667085]">
                    {commandQuery
                      ? "No matching results found."
                      : "Type to search accounts, navigate pages, or ask Parth."}
                  </div>
                ) : (
                  commandResults.map((res: any, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsCommandOpen(false);
                        if (res.nav) setActiveNav(res.nav);
                        if (res.account) setSelectedDrawerAccount(res.account);
                        if (res.prompt) askParth(res.prompt);
                      }}
                      className="flex w-full items-center justify-between rounded-xl p-2.5 text-left text-[13px] hover:bg-[#F4F7FC] cursor-pointer"
                    >
                      <span className="font-semibold text-[#101828]">{res.label}</span>
                      <span className="text-[12px] text-[#667085] capitalize font-medium">{res.type}</span>
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
