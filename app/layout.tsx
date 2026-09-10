import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PrimeScore™ — 4-Bureau Credit Intelligence & Rectification",
  description: "Unified CIBIL, CRIF, Experian & Equifax Credit Intelligence with 1-Click Rectification.",
  icons: {
    icon: "/primescore-logo.png",
    shortcut: "/primescore-logo.png",
    apple: "/primescore-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased min-h-screen bg-[#080D1A] font-sans">
        {children}
      </body>
    </html>
  );
}
