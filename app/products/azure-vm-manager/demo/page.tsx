import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Film, PlayCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Azure VM Manager Demo | 143IT",
  description:
    "Preview the planned Azure VM Manager video demo and review what the product walkthrough will cover.",
  alternates: {
    canonical: "/products/azure-vm-manager/demo",
  },
  openGraph: {
    title: "Azure VM Manager Demo | 143IT",
    description:
      "Preview the planned Azure VM Manager video demo and review the controlled Azure VM operations workflow.",
    type: "website",
    url: "https://143it.com/products/azure-vm-manager/demo",
    siteName: "143IT",
    images: [
      {
        url: "https://143it.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Azure VM Manager demo preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azure VM Manager Demo | 143IT",
    description:
      "Preview the planned Azure VM Manager video demo and controlled Azure VM operations workflow.",
    images: ["https://143it.com/og-image.svg"],
  },
};

const demoSections = [
  "Why fragmented Azure VM operations create risk",
  "How Azure VM Manager guides target selection",
  "How a request is reviewed before execution",
  "How status and audit history support accountability",
  "What is available for assisted launch and what still requires approval",
];

export default function AzureVmManagerDemoPage() {
  return (
    <div className="pt-24">
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-1/10 via-accent-cyan/5 to-transparent" />
        <div className="absolute inset-0 grid-background opacity-40" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-sm text-accent-1">
              <Film className="h-4 w-4" />
              Product video demo
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-7">
              Azure VM Manager demo{" "}
              <span className="gradient-text">coming soon</span>
            </h1>
            <p className="text-xl md:text-2xl text-text/70 max-w-3xl leading-relaxed mb-10">
              We are preparing a short product walkthrough that shows the controlled
              request, status, and audit workflow using synthetic demo data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products/azure-vm-manager#workflow" className="btn-primary inline-flex items-center justify-center gap-2">
                <PlayCircle className="h-5 w-5" />
                Explore Guided Preview
              </Link>
              <Link href="/products/azure-vm-manager#request-demo" className="btn-secondary inline-flex items-center justify-center gap-2">
                Request a Live Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-card p-8 md:p-10">
            <ShieldCheck className="h-9 w-9 text-accent-1 mb-5" />
            <h2 className="text-4xl font-heading font-bold mb-5">
              What the video will cover
            </h2>
            <div className="grid gap-4">
              {demoSections.map((item) => (
                <div key={item} className="flex items-start gap-3 text-text/80">
                  <CheckCircle2 className="h-5 w-5 text-accent-1 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-text/50 mt-8 leading-relaxed">
              The video will avoid customer identifiers, tenant IDs, subscription
              IDs, VM names from real environments, IP addresses, secrets, and live
              production data.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
