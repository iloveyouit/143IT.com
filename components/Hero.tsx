import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-1/5 to-transparent pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-1/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-2/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent-1/10 border border-accent-1/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-accent-1" />
            <span className="text-sm text-accent-1 font-medium">
              Automation-First MSP Services
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            143IT — We Love IT.
            <br />
            <span className="gradient-text glow-effect">
              And We Make IT Love You Back.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-text/80 mb-10 max-w-3xl mx-auto">
            Managed Services, Cloud Automation, and AI-Powered Infrastructure Solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/services" className="btn-primary inline-flex items-center space-x-2">
              <span>Explore Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/blog" className="btn-secondary inline-flex items-center space-x-2">
              <span>Read the Blog</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold gradient-text mb-2">
                99.9%
              </div>
              <div className="text-text/60">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold gradient-text mb-2">
                10k+
              </div>
              <div className="text-text/60">Automation Hours Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold gradient-text mb-2">
                500+
              </div>
              <div className="text-text/60">Systems Managed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
