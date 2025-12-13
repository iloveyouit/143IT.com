"use client";

import Link from "next/link";
import { Heart, Target, Zap, Users, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and methodologies to deliver forward-thinking solutions.",
      gradient: "from-accent-1 to-amber-500",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Automation-first approach that eliminates toil and maximizes productivity.",
      gradient: "from-accent-cyan to-blue-500",
    },
    {
      icon: Target,
      title: "Trust",
      description: "Building lasting relationships through transparency, reliability, and consistent results.",
      gradient: "from-accent-purple to-pink-500",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Your success is our success. We work alongside you as an extension of your team.",
      gradient: "from-accent-emerald to-teal-500",
    },
  ];

  const capabilities = [
    "Enterprise Infrastructure Management",
    "Cloud Architecture & Migration",
    "DevOps & CI/CD Pipeline Development",
    "Infrastructure as Code (Terraform, Ansible)",
    "Security & Compliance Management",
    "AI & Automation Integration",
    "24/7 Monitoring & Support",
    "Disaster Recovery Planning",
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent-1/5 via-accent-purple/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 grid-background opacity-40" />

        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-accent-1/20 to-accent-cyan/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto max-w-5xl text-center relative">
          <FadeInSection>
            <motion.div
              className="inline-flex items-center space-x-2 glass-card px-5 py-2.5 mb-10"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-4 w-4 text-accent-1" />
              <span className="text-sm text-accent-1 font-medium">Our Story</span>
            </motion.div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8">
              <span className="gradient-text glow-effect">Automate & Dominate</span>
              <br />
              <span className="text-text/90">with AI</span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-xl md:text-2xl text-text/70 max-w-3xl mx-auto">
              Next-Gen IT Management Built for the Future.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <FadeInSection>
            <motion.div
              className="glass-card p-10 md:p-14"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 gradient-text">
                Our Story
              </h2>

              <div className="space-y-6 text-text/70 text-lg leading-relaxed">
                <p>
                  <strong className="text-text">143IT</strong> (I Love You IT) was founded on a simple belief:
                  technology should empower businesses, not complicate them.
                </p>

                <p>
                  Too many organizations struggle with IT systems that are complex, fragile, and expensive
                  to maintain. We saw an opportunity to bridge the gap between human needs and technical
                  solutions — combining deep technical expertise with genuine care for our clients' success.
                </p>

                <p>
                  Our name, <strong className="text-accent-1">143</strong>, represents "I Love You" in pager code
                  (1 letter, 4 letters, 3 letters). It's a reminder that behind every server, pipeline, and
                  automation workflow are people trying to do their best work.
                </p>

                <p>
                  We're not just another MSP. We're automation-obsessed engineers who believe that reliable,
                  intelligent infrastructure is the foundation of every successful business.
                </p>
              </div>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-1/5 to-transparent pointer-events-none" />

        <div className="container mx-auto max-w-4xl text-center relative">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-text/70 leading-relaxed">
              To build <span className="text-accent-cyan font-semibold">smarter</span>,
              more <span className="text-accent-1 font-semibold">efficient</span>,
              and <span className="text-accent-purple font-semibold">future-ready</span> IT systems
              that drive business success through automation, cloud modernization, and AI integration.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <FadeInSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-text/70">
                The principles that guide everything we do
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <motion.div
                  className="glass-card p-8 text-center h-full group"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${value.gradient}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <value.icon className="h-8 w-8 text-background" />
                  </motion.div>

                  <h3 className={`text-xl font-heading font-bold mb-4 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                    {value.title}
                  </h3>

                  <p className="text-text/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-1/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="gradient-text">Capabilities</span>
              </h2>
              <p className="text-xl text-text/70">
                What we bring to the table
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((capability, index) => (
              <FadeInSection key={index} delay={index * 0.05}>
                <motion.div
                  className="flex items-center space-x-4 glass-card p-5 group"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-1 to-accent-cyan flex-shrink-0" />
                  <span className="text-text/70 group-hover:text-text transition-colors">{capability}</span>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeInSection>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-text/70 mb-10">
              Let's build something great.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center space-x-3 text-lg px-8 py-4">
              <span>Book a Call</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}

