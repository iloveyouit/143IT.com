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
  title: "143IT — Automate. Evolve. Dominate.",
  description: "Next-Gen IT Management with Cloud, Automation, and AI at the Core. MSP services that transform your infrastructure.",
  keywords: ["MSP", "Managed Services", "IT Automation", "Cloud Migration", "DevOps", "AI Integration", "Azure", "M365", "Next-Gen IT"],
  authors: [{ name: "143IT" }],
  openGraph: {
    title: "143IT — Automate. Evolve. Dominate.",
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
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
