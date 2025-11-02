import React from "react";
import Link from "next/link";
import { CheckCircle2, X, Zap, Rocket, Crown, ArrowRight, Shield, Clock, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans — Managed IT Services & Cloud Solutions | 143IT",
  description: "Choose the perfect plan for your business. Flexible pricing for Managed IT, Cloud Modernization, Automation, and AI Integration services.",
};

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$2,500",
      period: "per month",
      description: "Perfect for small businesses getting started with managed IT",
      popular: false,
      features: [
        "24/7 infrastructure monitoring",
        "Monthly patch management",
        "Basic cloud backup (100GB)",
        "Email support (business hours)",
        "Monthly reporting",
        "Up to 25 users",
        "1 SLA response time",
        "Basic security monitoring",
      ],
      limitations: [
        "No dedicated account manager",
        "No automation workflows",
        "No AI integrations",
      ],
      cta: "Get Started",
      href: "/contact?plan=starter",
      color: "accent-1",
    },
    {
      name: "Professional",
      icon: Rocket,
      price: "$7,500",
      period: "per month",
      description: "Comprehensive IT management for growing businesses",
      popular: true,
      features: [
        "Everything in Starter",
        "24/7 proactive monitoring & alerting",
        "Automated patch management",
        "Cloud backup (500GB) + disaster recovery",
        "Priority support (4-hour SLA)",
        "Dedicated account manager",
        "Infrastructure as Code (IaC)",
        "CI/CD pipeline setup",
        "Up to 100 users",
        "Advanced security monitoring",
        "Quarterly infrastructure reviews",
        "Automation workflow development",
      ],
      limitations: [
        "Limited AI integrations",
      ],
      cta: "Most Popular",
      href: "/contact?plan=professional",
      color: "accent-2",
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "quote-based",
      description: "Full-scale IT transformation with AI and custom solutions",
      popular: false,
      features: [
        "Everything in Professional",
        "Unlimited users & devices",
        "Dedicated support team",
        "1-hour SLA response time",
        "Custom automation workflows",
        "AI-powered integrations (n8n, ChatGPT, Copilot)",
        "Multi-cloud management",
        "Advanced security operations (SOC)",
        "Compliance management & reporting",
        "Monthly strategy sessions",
        "Custom AI model training",
        "White-glove onboarding",
        "Unlimited cloud storage",
        "Custom integrations & APIs",
      ],
      limitations: [],
      cta: "Contact Sales",
      href: "/contact?plan=enterprise",
      color: "accent-1",
    },
  ];

  const comparisonFeatures = [
    {
      category: "Monitoring & Support",
      items: [
        { feature: "24/7 Infrastructure Monitoring", starter: true, professional: true, enterprise: true },
        { feature: "Proactive Alerting", starter: false, professional: true, enterprise: true },
        { feature: "Email Support", starter: true, professional: true, enterprise: true },
        { feature: "Priority Support (SLA)", starter: false, professional: "4-hour", enterprise: "1-hour" },
        { feature: "Dedicated Account Manager", starter: false, professional: true, enterprise: true },
        { feature: "Dedicated Support Team", starter: false, professional: false, enterprise: true },
      ],
    },
    {
      category: "Automation & Infrastructure",
      items: [
        { feature: "Monthly Patch Management", starter: true, professional: true, enterprise: true },
        { feature: "Automated Patching", starter: false, professional: true, enterprise: true },
        { feature: "Infrastructure as Code (IaC)", starter: false, professional: true, enterprise: true },
        { feature: "CI/CD Pipelines", starter: false, professional: true, enterprise: true },
        { feature: "Custom Automation Workflows", starter: false, professional: false, enterprise: true },
      ],
    },
    {
      category: "Security & Compliance",
      items: [
        { feature: "Basic Security Monitoring", starter: true, professional: true, enterprise: true },
        { feature: "Advanced Security Monitoring", starter: false, professional: true, enterprise: true },
        { feature: "Security Operations Center (SOC)", starter: false, professional: false, enterprise: true },
        { feature: "Compliance Management", starter: false, professional: false, enterprise: true },
      ],
    },
    {
      category: "AI & Integration",
      items: [
        { feature: "AI Workflow Integration", starter: false, professional: false, enterprise: true },
        { feature: "ChatGPT Integration", starter: false, professional: false, enterprise: true },
        { feature: "Microsoft Copilot Integration", starter: false, professional: false, enterprise: true },
        { feature: "Custom AI Model Training", starter: false, professional: false, enterprise: true },
      ],
    },
    {
      category: "Storage & Recovery",
      items: [
        { feature: "Cloud Backup (100GB)", starter: true, professional: false, enterprise: false },
        { feature: "Cloud Backup (500GB)", starter: false, professional: true, enterprise: false },
        { feature: "Unlimited Cloud Storage", starter: false, professional: false, enterprise: true },
        { feature: "Disaster Recovery", starter: false, professional: true, enterprise: true },
      ],
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Choose Your <span className="gradient-text">Plan</span>
          </h1>
          <p className="text-xl text-text/80 mb-4">
            Flexible pricing designed to scale with your business needs
          </p>
          <p className="text-lg text-text/60">
            All plans include 99.9% uptime SLA • 30-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-background/50 backdrop-blur-sm border-2 rounded-xl p-8 transition-all duration-300 ${
                    plan.popular
                      ? "border-accent-2 scale-105 md:scale-110 shadow-2xl shadow-accent-2/20"
                      : "border-accent-1/20 hover:border-accent-1/50"
                  } card-glow`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-accent-2 text-background px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      plan.color === "accent-1" ? "bg-accent-1/10" : "bg-accent-2/10"
                    }`}>
                      <IconComponent className={`h-6 w-6 ${
                        plan.color === "accent-1" ? "text-accent-1" : "text-accent-2"
                      }`} />
                    </div>
                    <h2 className="text-2xl font-heading font-bold">{plan.name}</h2>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-heading font-bold gradient-text">
                        {plan.price}
                      </span>
                      {plan.period !== "quote-based" && (
                        <span className="text-text/60 text-lg">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-text/70 mt-2 text-sm">{plan.description}</p>
                  </div>

                  <Link
                    href={plan.href}
                    className={`block w-full text-center mb-8 ${
                      plan.popular
                        ? "btn-primary bg-accent-2 hover:bg-ctaHover"
                        : "btn-secondary"
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  <div className="space-y-4 mb-6">
                    <div className="text-sm font-semibold text-text/90 mb-3">What's Included:</div>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-accent-1 flex-shrink-0 mt-0.5" />
                        <span className="text-text/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="pt-6 border-t border-accent-1/20 space-y-3">
                      <div className="text-sm font-semibold text-text/60 mb-3">Not Included:</div>
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start space-x-3">
                          <X className="h-4 w-4 text-text/40 flex-shrink-0 mt-1" />
                          <span className="text-text/50 text-sm">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-accent-1/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Detailed <span className="gradient-text">Feature Comparison</span>
            </h2>
            <p className="text-lg text-text/80">
              Compare all features across our three plans
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="bg-background/30 backdrop-blur-sm border border-accent-1/20 rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-accent-1/20">
                    <th className="text-left p-4 font-heading font-bold text-text">Feature</th>
                    <th className="text-center p-4 font-heading font-bold text-text">Starter</th>
                    <th className="text-center p-4 font-heading font-bold text-accent-2">Professional</th>
                    <th className="text-center p-4 font-heading font-bold text-text">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, categoryIndex) => (
                    <React.Fragment key={categoryIndex}>
                      <tr className="bg-accent-1/5">
                        <td colSpan={4} className="p-3 font-semibold text-accent-1">
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((item, itemIndex) => (
                        <tr
                          key={itemIndex}
                          className="border-b border-accent-1/10 hover:bg-accent-1/5 transition-colors"
                        >
                          <td className="p-4 text-text/80">{item.feature}</td>
                          <td className="p-4 text-center">
                            {item.starter === true ? (
                              <CheckCircle2 className="h-5 w-5 text-accent-1 mx-auto" />
                            ) : item.starter === false ? (
                              <X className="h-5 w-5 text-text/30 mx-auto" />
                            ) : (
                              <span className="text-accent-1 font-medium">{item.starter}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {item.professional === true ? (
                              <CheckCircle2 className="h-5 w-5 text-accent-2 mx-auto" />
                            ) : item.professional === false ? (
                              <X className="h-5 w-5 text-text/30 mx-auto" />
                            ) : (
                              <span className="text-accent-2 font-medium">{item.professional}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {item.enterprise === true ? (
                              <CheckCircle2 className="h-5 w-5 text-accent-1 mx-auto" />
                            ) : item.enterprise === false ? (
                              <X className="h-5 w-5 text-text/30 mx-auto" />
                            ) : (
                              <span className="text-accent-1 font-medium">{item.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-accent-1/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent-1" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">99.9% Uptime SLA</h3>
              <p className="text-text/70 text-sm">
                Guaranteed infrastructure availability with financial credits if SLA is not met
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent-1/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent-1" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">30-Day Money-Back</h3>
              <p className="text-text/70 text-sm">
                Try any plan risk-free. Full refund if not satisfied within the first month
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent-1/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-1" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Flexible Scaling</h3>
              <p className="text-text/70 text-sm">
                Upgrade or downgrade your plan at any time. No long-term contracts required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-accent-1/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Need a <span className="gradient-text">Custom Plan?</span>
          </h2>
          <p className="text-xl text-text/80 mb-8">
            We offer tailored solutions for businesses with unique requirements. Let's discuss your specific needs.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Contact Sales</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
