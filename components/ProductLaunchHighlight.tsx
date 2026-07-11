import Link from "next/link";
import { ArrowRight, PlayCircle, ShieldCheck, ServerCog } from "lucide-react";

const launchFacts = [
  "Demo-first onboarding",
  "Business email and active Azure subscription required for assisted trial",
  "Formal product SLA pending approval",
];

export default function ProductLaunchHighlight() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center glass-card p-8 md:p-10">
          <div>
            <div className="inline-flex items-center gap-2 text-sm text-accent-1 font-semibold mb-5">
              <ServerCog className="h-4 w-4" />
              New product launch
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-5">
              Azure VM Manager for controlled VM operations
            </h2>
            <p className="text-text/70 text-lg leading-relaxed mb-7">
              Request, track, and audit recurring Azure virtual machine operations
              through a controlled workflow built from real infrastructure
              operations experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products/azure-vm-manager/demo"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <PlayCircle className="h-5 w-5" />
                Watch Demo Preview
              </Link>
              <Link
                href="/products/azure-vm-manager/security"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <ShieldCheck className="h-5 w-5" />
                Review Security & Trust
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {launchFacts.map((fact) => (
              <div
                key={fact}
                className="bg-background/50 border border-accent-1/20 rounded-xl p-5 flex items-center justify-between gap-4"
              >
                <span className="text-text/80">{fact}</span>
                <ArrowRight className="h-4 w-4 text-accent-1 flex-shrink-0" />
              </div>
            ))}
            <p className="text-sm text-text/50 leading-relaxed">
              Azure VM Manager support commitments are separate from 143IT service
              engagements and are documented on the Product Support page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
