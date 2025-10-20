import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "143IT — MSP, Automation & AI-Powered Infrastructure",
  description: "Managed IT services and AI automation that drive uptime. We love IT, and we make IT love you back.",
  keywords: ["MSP", "Managed Services", "IT Automation", "Cloud Migration", "DevOps", "AI Integration", "Azure", "M365"],
  authors: [{ name: "143IT" }],
  openGraph: {
    title: "143IT — We Love IT. And We Make IT Love You Back.",
    description: "Managed Services, Cloud Automation, and AI-Powered Infrastructure Solutions.",
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
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
