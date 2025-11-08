import Link from "next/link";
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  Building2, 
  Shield, 
  Cloud, 
  Bot,
  Zap,
  CheckCircle2
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Real Results from 143IT Clients | 143IT",
  description: "Discover how we've helped businesses transform their IT infrastructure with automation, cloud migration, and AI integration. Real results from real clients.",
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "healthcare-automation",
      title: "Healthcare Provider Automates Infrastructure",
      industry: "Healthcare",
      client: "Regional Medical Center",
      clientSize: "500+ employees",
      duration: "6 months",
      challenge: "A regional healthcare provider struggled with manual IT operations, slow deployments, and frequent downtime affecting patient care systems.",
      solution: "We implemented Infrastructure as Code (Terraform), automated CI/CD pipelines, and proactive monitoring with 24/7 support.",
      results: [
        { icon: TrendingUp, metric: "40%", label: "faster deployments" },
        { icon: Clock, metric: "200", label: "hours saved/month" },
        { icon: DollarSign, metric: "$50k", label: "annual savings" },
        { icon: Shield, metric: "99.95%", label: "uptime achieved" },
      ],
      services: ["Managed IT", "Automation & DevOps", "Cloud Migration"],
      technologies: ["Azure", "Terraform", "GitHub Actions", "PowerShell"],
      testimonial: {
        quote: "143IT transformed our IT operations. Our team can now focus on patient care instead of fighting fires.",
        author: "Sarah Johnson",
        role: "CIO, Regional Medical Center"
      },
      href: "/case-studies/healthcare-automation",
    },
    {
      id: "fintech-cloud-migration",
      title: "FinTech Startup Scales with Azure",
      industry: "Financial Services",
      client: "NextGen Payments",
      clientSize: "150 employees",
      duration: "4 months",
      challenge: "A fast-growing FinTech startup needed to scale their infrastructure quickly while maintaining security and compliance standards.",
      solution: "Complete Azure migration with auto-scaling, security hardening, SOC 2 compliance preparation, and disaster recovery implementation.",
      results: [
        { icon: TrendingUp, metric: "99.99%", label: "uptime achieved" },
        { icon: Clock, metric: "3x", label: "faster scaling" },
        { icon: DollarSign, metric: "30%", label: "cost reduction" },
        { icon: Cloud, metric: "50ms", label: "average latency" },
      ],
      services: ["Cloud Modernization", "Security & Compliance", "Managed IT"],
      technologies: ["Azure", "Azure Kubernetes Service", "Azure Security Center", "PowerShell"],
      testimonial: {
        quote: "We scaled from 10k to 1M transactions per day without any infrastructure concerns. 143IT made it seamless.",
        author: "Michael Chen",
        role: "CTO, NextGen Payments"
      },
      href: "/case-studies/fintech-cloud-migration",
    },
    {
      id: "manufacturing-ai-integration",
      title: "Manufacturing Company Embraces AI Automation",
      industry: "Manufacturing",
      client: "Precision Manufacturing Corp",
      clientSize: "800+ employees",
      duration: "8 months",
      challenge: "A manufacturing company needed to automate repetitive IT tasks and integrate AI for predictive maintenance and inventory management.",
      solution: "Implemented n8n workflows, ChatGPT integration for documentation, custom AI models for predictive analytics, and IoT integration.",
      results: [
        { icon: Bot, metric: "85%", label: "tasks automated" },
        { icon: Clock, metric: "500", label: "hours saved/month" },
        { icon: DollarSign, metric: "$120k", label: "annual savings" },
        { icon: TrendingUp, metric: "25%", label: "efficiency gain" },
      ],
      services: ["AI Integration", "Automation & DevOps", "Managed IT"],
      technologies: ["n8n", "ChatGPT API", "Azure AI", "PowerShell", "Terraform"],
      testimonial: {
        quote: "The AI integrations have revolutionized our operations. Predictive maintenance alone has prevented thousands in downtime costs.",
        author: "Robert Martinez",
        role: "Operations Director, Precision Manufacturing"
      },
      href: "/case-studies/manufacturing-ai-integration",
    },
    {
      id: "retail-multi-cloud",
      title: "Retail Chain Optimizes Multi-Cloud Infrastructure",
      industry: "Retail",
      client: "National Retail Group",
      clientSize: "2,000+ employees",
      duration: "12 months",
      challenge: "A national retail chain with 200+ locations needed to modernize their hybrid cloud infrastructure and reduce operational costs.",
      solution: "Multi-cloud optimization across Azure and AWS, infrastructure automation, cost optimization strategies, and centralized management platform.",
      results: [
        { icon: DollarSign, metric: "40%", label: "cost reduction" },
        { icon: Cloud, metric: "60%", label: "cloud optimization" },
        { icon: Clock, metric: "70%", label: "faster deployments" },
        { icon: Shield, metric: "100%", label: "compliance rate" },
      ],
      services: ["Cloud Modernization", "Automation & DevOps", "Managed IT", "Security & Compliance"],
      technologies: ["Azure", "AWS", "Terraform", "Ansible", "GitHub Actions"],
      testimonial: {
        quote: "143IT helped us consolidate and optimize our cloud spending while improving performance across all locations.",
        author: "Jennifer Adams",
        role: "VP of IT, National Retail Group"
      },
      href: "/case-studies/retail-multi-cloud",
    },
    {
      id: "legal-security-compliance",
      title: "Law Firm Achieves SOC 2 & HIPAA Compliance",
      industry: "Legal Services",
      client: "Elite Law Partners",
      clientSize: "300 employees",
      duration: "6 months",
      challenge: "A mid-size law firm needed to achieve SOC 2 Type II and HIPAA compliance while maintaining seamless operations.",
      solution: "Comprehensive security audit, identity & access management overhaul, automated compliance monitoring, and staff training programs.",
      results: [
        { icon: Shield, metric: "SOC 2", label: "Type II certified" },
        { icon: Shield, metric: "HIPAA", label: "compliant" },
        { icon: Clock, metric: "50%", label: "faster audits" },
        { icon: DollarSign, metric: "$80k", label: "audit cost savings" },
      ],
      services: ["Security & Compliance", "Managed IT", "Automation & DevOps"],
      technologies: ["Azure AD", "Azure Security Center", "Microsoft Sentinel", "PowerShell"],
      testimonial: {
        quote: "143IT not only got us compliant but built systems that maintain compliance automatically. Game-changer for our practice.",
        author: "David Thompson",
        role: "Managing Partner, Elite Law Partners"
      },
      href: "/case-studies/legal-security-compliance",
    },
    {
      id: "education-devops-transformation",
      title: "University Modernizes with DevOps Practices",
      industry: "Education",
      client: "State University System",
      clientSize: "15,000+ students",
      duration: "10 months",
      challenge: "A large university system needed to modernize their legacy infrastructure and implement DevOps practices for faster application deployments.",
      solution: "Legacy system migration to Azure, CI/CD pipeline implementation, infrastructure automation, and developer training programs.",
      results: [
        { icon: Zap, metric: "5x", label: "faster deployments" },
        { icon: Clock, metric: "400", label: "hours saved/month" },
        { icon: TrendingUp, metric: "90%", label: "automation rate" },
        { icon: DollarSign, metric: "$200k", label: "annual savings" },
      ],
      services: ["Automation & DevOps", "Cloud Modernization", "Managed IT"],
      technologies: ["Azure", "GitHub Actions", "Terraform", "Docker", "Kubernetes"],
      testimonial: {
        quote: "The DevOps transformation has enabled our development teams to innovate faster while reducing operational overhead.",
        author: "Dr. Lisa Park",
        role: "CIO, State University System"
      },
      href: "/case-studies/education-devops-transformation",
    },
  ];

  const industries = Array.from(new Set(caseStudies.map(study => study.industry)));

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">Case Studies</span>
          </h1>
          <p className="text-xl text-text/80 mb-4">
            Real results from businesses we've transformed
          </p>
          <p className="text-lg text-text/60">
            Discover how automation, cloud migration, and AI integration drive measurable outcomes
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-8 hover:border-accent-1/50 transition-all duration-300 card-glow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent-1 text-sm font-semibold bg-accent-1/10 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                  <span className="text-text/60 text-xs">{study.duration}</span>
                </div>

                <h2 className="text-2xl font-heading font-bold mb-3">
                  {study.title}
                </h2>

                <div className="mb-4 text-sm text-text/60">
                  <span className="font-medium">{study.client}</span> • {study.clientSize}
                </div>

                <p className="text-text/80 mb-6 line-clamp-2">
                  <span className="font-semibold text-text/90">Challenge:</span> {study.challenge}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.results.slice(0, 4).map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center space-x-2">
                      <result.icon className="h-4 w-4 text-accent-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-accent-1">{result.metric}</div>
                        <div className="text-xs text-text/60">{result.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.services.slice(0, 3).map((service, serviceIndex) => (
                    <span
                      key={serviceIndex}
                      className="text-xs bg-accent-2/10 text-accent-2 px-2 py-1 rounded"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <Link
                  href={study.href}
                  className="inline-flex items-center space-x-2 text-accent-1 hover:text-ctaHover transition-colors font-semibold"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-accent-1/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Impact <span className="gradient-text">Across Industries</span>
            </h2>
            <p className="text-lg text-text/80">
              Combined results from our case studies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-background/30 backdrop-blur-sm border border-accent-1/20 rounded-xl p-6">
              <div className="text-4xl font-heading font-bold gradient-text mb-2">$550k+</div>
              <div className="text-text/70 text-sm">Total Annual Savings</div>
            </div>
            <div className="text-center bg-background/30 backdrop-blur-sm border border-accent-1/20 rounded-xl p-6">
              <div className="text-4xl font-heading font-bold gradient-text mb-2">2,500+</div>
              <div className="text-text/70 text-sm">Hours Saved Monthly</div>
            </div>
            <div className="text-center bg-background/30 backdrop-blur-sm border border-accent-1/20 rounded-xl p-6">
              <div className="text-4xl font-heading font-bold gradient-text mb-2">99.97%</div>
              <div className="text-text/70 text-sm">Average Uptime</div>
            </div>
            <div className="text-center bg-background/30 backdrop-blur-sm border border-accent-1/20 rounded-xl p-6">
              <div className="text-4xl font-heading font-bold gradient-text mb-2">6</div>
              <div className="text-text/70 text-sm">Industries Served</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-6 text-center"
              >
                <Building2 className="h-8 w-8 text-accent-1 mx-auto mb-3" />
                <h3 className="font-heading font-bold mb-2">{industry}</h3>
                <p className="text-text/70 text-sm">
                  {caseStudies.filter(s => s.industry === industry).length} case study
                  {caseStudies.filter(s => s.industry === industry).length !== 1 ? "ies" : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Write Your <span className="gradient-text">Success Story?</span>
          </h2>
          <p className="text-xl text-text/80 mb-8">
            Let's discuss how we can transform your IT infrastructure and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/services" className="btn-secondary inline-flex items-center space-x-2">
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
