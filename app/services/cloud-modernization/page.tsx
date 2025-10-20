import Link from "next/link";
import { Cloud, CheckCircle2, Gauge, DollarSign, Lock, ArrowRight, Layers } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Migration & Modernization Services | 143IT",
  description: "Seamless migration and optimization for Azure, AWS, and hybrid cloud platforms with zero-downtime strategies.",
};

export default function CloudModernizationPage() {
  const features = [
    {
      icon: Gauge,
      title: "Zero-Downtime Migration",
      description: "Carefully planned migrations that keep your business running throughout the transition.",
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Right-size resources, eliminate waste, and leverage reserved instances for maximum savings.",
    },
    {
      icon: Lock,
      title: "Cloud-Native Architecture",
      description: "Build scalable, resilient applications using modern cloud-native patterns and services.",
    },
    {
      icon: Layers,
      title: "Multi-Cloud Strategy",
      description: "Leverage the best of Azure, AWS, and GCP with unified management and governance.",
    },
  ];

  const services = [
    "Cloud Readiness Assessment",
    "Migration Strategy & Planning",
    "Azure & AWS Migration",
    "Hybrid Cloud Architecture",
    "Containerization (Docker, Kubernetes)",
    "Serverless & Microservices",
    "Cloud Cost Management",
    "Performance Optimization",
    "Disaster Recovery Planning",
    "Cloud Governance & Security",
  ];

  const benefits = [
    { metric: "60%", label: "Faster Deployment" },
    { metric: "30%", label: "Cost Reduction" },
    { metric: "99.99%", label: "Uptime SLA" },
    { metric: "3x", label: "Scalability Increase" },
  ];

  const migrationProcess = [
    {
      step: "01",
      title: "Assess",
      description: "Evaluate current infrastructure, dependencies, and migration readiness.",
    },
    {
      step: "02",
      title: "Plan",
      description: "Design target architecture, migration strategy, and detailed timeline.",
    },
    {
      step: "03",
      title: "Migrate",
      description: "Execute phased migration with continuous testing and validation.",
    },
    {
      step: "04",
      title: "Optimize",
      description: "Fine-tune performance, costs, and security in the cloud environment.",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center space-x-3 mb-6">
            <Cloud className="h-12 w-12 text-accent-1" />
            <h1 className="text-5xl md:text-6xl font-heading font-bold">
              <span className="gradient-text">Cloud Modernization</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-text/80 mb-8 max-w-3xl">
            Seamless migration and optimization for Azure, AWS, and hybrid cloud platforms with zero-downtime strategies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Start Your Cloud Journey</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                  {benefit.metric}
                </div>
                <div className="text-text/60 text-sm">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Cloud Transformation <span className="gradient-text">Done Right</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-8 hover:border-accent-1/50 transition-all duration-300"
              >
                <div className="bg-accent-1/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-accent-1" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{feature.title}</h3>
                <p className="text-text/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Our <span className="gradient-text">Migration Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {migrationProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent-1/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-accent-1/30">
                  <span className="text-2xl font-heading font-bold text-accent-1">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-text/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            What's <span className="gradient-text">Included</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-background/30 border border-accent-1/20 rounded-lg p-4 hover:border-accent-1/40 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-accent-1 flex-shrink-0" />
                <span className="text-text/80">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-accent-1/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Modernize Your Infrastructure?
          </h2>
          <p className="text-xl text-text/80 mb-8">
            Let's build your cloud migration roadmap together.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Get a Free Assessment</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
