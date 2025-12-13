"use client";

import { Server, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

export default function Pillars() {
  const pillars = [
    {
      icon: Server,
      title: "Manage",
      description: "Proactive IT operations that keep your infrastructure running smoothly 24/7.",
      features: [
        "24/7 monitoring & support",
        "Patch management",
        "Infrastructure optimization",
      ],
      gradient: "from-accent-1 to-amber-600",
      iconBg: "bg-accent-1/20",
    },
    {
      icon: Zap,
      title: "Automate",
      description: "Reduce toil and human error with intelligent automation workflows.",
      features: [
        "CI/CD pipelines",
        "Infrastructure as Code",
        "Automated remediation",
      ],
      gradient: "from-accent-cyan to-blue-500",
      iconBg: "bg-accent-cyan/20",
    },
    {
      icon: TrendingUp,
      title: "Evolve",
      description: "Integrate AI intelligently to drive innovation and competitive advantage.",
      features: [
        "AI-powered insights",
        "Predictive analytics",
        "Smart workflow integration",
      ],
      gradient: "from-accent-purple to-pink-500",
      iconBg: "bg-accent-purple/20",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-1/5 to-transparent pointer-events-none" />

      <div className="container mx-auto relative">
        <FadeInSection>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Our <span className="gradient-text">Three Pillars</span>
            </h2>
            <p className="text-xl text-text/70 max-w-2xl mx-auto">
              A proven approach to modernizing IT infrastructure
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <FadeInSection key={index} delay={index * 0.2}>
              <motion.div
                className="glass-card p-8 h-full group cursor-pointer"
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: -5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] bg-gradient-to-br from-accent-1/50 via-accent-cyan/50 to-accent-purple/50 -z-10" />

                {/* Icon */}
                <motion.div
                  className={`${pillar.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <pillar.icon className={`h-8 w-8 bg-gradient-to-r ${pillar.gradient} bg-clip-text`} style={{ color: 'currentColor' }} />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.div>

                <h3 className={`text-2xl font-heading font-bold mb-4 bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}>
                  {pillar.title}
                </h3>

                <p className="text-text/70 mb-6 leading-relaxed">{pillar.description}</p>

                <ul className="space-y-3">
                  {pillar.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center space-x-3 text-text/60 group-hover:text-text/80 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${pillar.gradient}`} />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

