import { Server, Zap, TrendingUp } from "lucide-react";

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
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-accent-1/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our <span className="gradient-text">Three Pillars</span>
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            A proven approach to modernizing IT infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-8 hover:border-accent-1/50 transition-all duration-300 card-glow"
            >
              <div className="bg-accent-1/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <pillar.icon className="h-8 w-8 text-accent-1" />
              </div>

              <h3 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                {pillar.title}
              </h3>

              <p className="text-text/80 mb-6">{pillar.description}</p>

              <ul className="space-y-2">
                {pillar.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-text/70">
                    <div className="w-1.5 h-1.5 bg-accent-1 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
