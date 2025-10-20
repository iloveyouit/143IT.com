import Link from "next/link";
import { Heart, Target, Zap, Users, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About 143IT — We Love IT | MSP & Automation Experts",
  description: "Learn about 143IT's mission to build smarter, more efficient, and future-ready IT systems through automation, cloud, and AI.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and methodologies to deliver forward-thinking solutions.",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Automation-first approach that eliminates toil and maximizes productivity.",
    },
    {
      icon: Target,
      title: "Trust",
      description: "Building lasting relationships through transparency, reliability, and consistent results.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Your success is our success. We work alongside you as an extension of your team.",
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
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            We <span className="gradient-text glow-effect">Love</span> IT
          </h1>
          <p className="text-xl text-text/80">
            And we're here to make IT love you back.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-8 md:p-12 card-glow">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 gradient-text">
              Our Story
            </h2>

            <div className="space-y-6 text-text/80 text-lg">
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
                Our name, <strong className="text-text">143</strong>, represents "I Love You" in pager code
                (1 letter, 4 letters, 3 letters). It's a reminder that behind every server, pipeline, and
                automation workflow are people trying to do their best work.
              </p>

              <p>
                We're not just another MSP. We're automation-obsessed engineers who believe that reliable,
                intelligent infrastructure is the foundation of every successful business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-accent-1/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-text/80 leading-relaxed">
            To build <span className="text-accent-1 font-semibold">smarter</span>,
            more <span className="text-accent-1 font-semibold">efficient</span>,
            and <span className="text-accent-1 font-semibold">future-ready</span> IT systems
            that drive business success through automation, cloud modernization, and AI integration.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-text/80">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-8 hover:border-accent-1/50 transition-all duration-300"
              >
                <div className="bg-accent-1/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-accent-1" />
                </div>

                <h3 className="text-xl font-heading font-bold mb-3 text-accent-1">
                  {value.title}
                </h3>

                <p className="text-text/70 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-lg text-text/80">
              What we bring to the table
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-background/30 border border-accent-1/20 rounded-lg p-4"
              >
                <div className="w-2 h-2 bg-accent-1 rounded-full flex-shrink-0" />
                <span className="text-text/80">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-text/80 mb-8">
            Let's build something great.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Book a Call</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
