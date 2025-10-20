import Link from "next/link";
import { Cloud, Shield, Bot, Workflow, Database } from "lucide-react";

export default function FeaturedServices() {
  const services = [
    {
      icon: Database,
      title: "Managed Infrastructure",
      description: "Enterprise-grade management of Windows, VMware, Azure, and M365 environments.",
      href: "/services/managed-it",
    },
    {
      icon: Cloud,
      title: "Cloud Modernization",
      description: "Seamless migration and optimization for Azure, AWS, and hybrid cloud platforms.",
      href: "/services/cloud-modernization",
    },
    {
      icon: Workflow,
      title: "Automation & DevOps",
      description: "Turn operations into code with Terraform, Ansible, PowerShell, and CI/CD pipelines.",
      href: "/services/automation-devops",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "SOC operations, identity management, patching, and backup strategies.",
      href: "/services/security-compliance",
    },
    {
      icon: Bot,
      title: "AI Integration",
      description: "Intelligent workflows with n8n, ChatGPT, Copilot, and custom AI solutions.",
      href: "/services/ai-integration",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Featured Services</span>
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-8 hover:border-accent-1/50 hover:bg-accent-1/5 transition-all duration-300"
            >
              <div className="bg-accent-1/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-1/20 transition-colors">
                <service.icon className="h-7 w-7 text-accent-1" />
              </div>

              <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-accent-1 transition-colors">
                {service.title}
              </h3>

              <p className="text-text/70 group-hover:text-text/90 transition-colors">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
