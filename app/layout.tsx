import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";
import ChatBot from "@/components/ChatBot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "143IT — Automate & Dominate with AI",
  description: "Next-Gen IT Management with Cloud, Automation, and AI at the Core. MSP services that transform your infrastructure.",
  keywords: ["MSP", "Managed Services", "IT Automation", "Cloud Migration", "DevOps", "AI Integration", "Azure", "M365", "Next-Gen IT"],
  authors: [{ name: "143IT" }],
  openGraph: {
    title: "143IT — Automate & Dominate with AI",
    description: "Next-Gen IT Management with Cloud, Automation, and AI at the Core.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body>
        <StructuredData type="Organization" />
        <StructuredData type="WebSite" />
        <ErrorBoundary>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-1 focus:text-background focus:rounded-lg focus:font-semibold"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
        <ChatBot />
        <Analytics />
      </body>
    </html>
  );
}
