"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";
import AnimatedCounter from "./AnimatedCounter";
import FadeInSection from "./FadeInSection";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-1/5 to-transparent pointer-events-none" />
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-accent-1/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-2/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <FadeInSection delay={0.1}>
            <div className="inline-flex items-center space-x-2 bg-accent-1/10 border border-accent-1/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="h-4 w-4 text-accent-1" />
              <span className="text-sm text-accent-1 font-medium">
                Automation-First MSP Services
              </span>
            </div>
          </FadeInSection>

          {/* Main Headline */}
          <FadeInSection delay={0.3}>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              <span className="gradient-text glow-effect">
                <TypingEffect text="Automate. Evolve. Dominate." speed={80} />
              </span>
            </h1>
          </FadeInSection>

          {/* Subheadline */}
          <FadeInSection delay={0.5}>
            <p className="text-xl md:text-2xl text-text/80 mb-10 max-w-3xl mx-auto">
              Next-Gen IT Management with Cloud, Automation, and AI at the Core.
            </p>
          </FadeInSection>

          {/* CTAs */}
          <FadeInSection delay={0.7}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/services" className="btn-primary inline-flex items-center space-x-2">
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/blog" className="btn-secondary inline-flex items-center space-x-2">
                <span>Read the Blog</span>
              </Link>
            </div>
          </FadeInSection>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <FadeInSection delay={0.9}>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold gradient-text mb-2">
                  <AnimatedCounter value={99.9} decimals={1} suffix="%" />
                </div>
                <div className="text-text/60">Uptime Guarantee</div>
              </div>
            </FadeInSection>
            <FadeInSection delay={1.0}>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold gradient-text mb-2">
                  <AnimatedCounter value={10} suffix="k+" />
                </div>
                <div className="text-text/60">Automation Hours Saved</div>
              </div>
            </FadeInSection>
            <FadeInSection delay={1.1}>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold gradient-text mb-2">
                  <AnimatedCounter value={500} suffix="+" />
                </div>
                <div className="text-text/60">Systems Managed</div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}
