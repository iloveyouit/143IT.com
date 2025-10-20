import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";

export default function CaseStudyHighlights() {
  const caseStudies = [
    {
      title: "Healthcare Provider Automates Infrastructure",
      industry: "Healthcare",
      results: [
        { icon: TrendingUp, label: "40% faster deployments" },
        { icon: Clock, label: "200 hours saved/month" },
        { icon: DollarSign, label: "$50k annual savings" },
      ],
      description: "How we transformed a regional healthcare provider's IT operations with automation-first infrastructure.",
      href: "/case-studies/healthcare-automation",
    },
    {
      title: "FinTech Startup Scales with Azure",
      industry: "Financial Services",
      results: [
        { icon: TrendingUp, label: "99.99% uptime achieved" },
        { icon: Clock, label: "3x faster scaling" },
        { icon: DollarSign, label: "30% cost reduction" },
      ],
      description: "Cloud migration and modernization for a fast-growing FinTech company.",
      href: "/case-studies/fintech-cloud-migration",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Real results from real clients
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-8 hover:border-accent-1/50 transition-all duration-300 card-glow"
            >
              <div className="text-accent-1 text-sm font-semibold mb-3">
                {study.industry}
              </div>

              <h3 className="text-2xl font-heading font-bold mb-4">
                {study.title}
              </h3>

              <p className="text-text/80 mb-6">{study.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {study.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="text-center">
                    <result.icon className="h-5 w-5 text-accent-1 mx-auto mb-2" />
                    <div className="text-sm text-text/70">{result.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href={study.href}
                className="inline-flex items-center space-x-2 text-accent-1 hover:text-ctaHover transition-colors font-semibold"
              >
                <span>Read Case Study</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies" className="btn-secondary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
