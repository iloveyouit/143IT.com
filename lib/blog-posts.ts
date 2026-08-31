export type BlogPostStatus = "current" | "archive";

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  lastReviewed: string;
  readTime: string;
  href: string;
  category: string;
  tags: string[];
  status: BlogPostStatus;
  featured?: boolean;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    category: "AI + IT Series",
    title: "Meet the Two-Agent Infrastructure Team",
    excerpt:
      "How a two-agent infrastructure team combines execution with independent reliability and security review for safer cloud and on-premises operations.",
    date: "2026-08-31",
    lastReviewed: "2026-08-31",
    readTime: "5 min read",
    href: "/blog/meet-the-two-agent-infrastructure-team",
    image: "🤖",
    tags: ["AI Agents", "Infrastructure", "Reliability", "Security", "Automation"],
    status: "current",
    featured: true,
  },
  {
    category: "Automation Chronicles",
    title: "The Complete Guide to Infrastructure as Code in 2024",
    excerpt:
      "Discover how Infrastructure as Code is revolutionizing IT operations, from Terraform basics to advanced GitOps workflows.",
    date: "2024-03-18",
    lastReviewed: "2026-08-31",
    readTime: "15 min read",
    href: "/blog/infrastructure-as-code-guide-2024",
    image: "🚀",
    tags: ["Infrastructure as Code", "Terraform", "DevOps", "Automation"],
    status: "archive",
  },
  {
    category: "Automation Chronicles",
    title: "Building Self-Healing Infrastructure with PowerShell",
    excerpt:
      "Learn how to implement automated remediation workflows that fix common issues before they impact users.",
    date: "2024-03-15",
    lastReviewed: "2026-08-31",
    readTime: "8 min read",
    href: "/blog/self-healing-infrastructure",
    tags: ["PowerShell", "Automation", "Self-Healing", "DevOps"],
    status: "archive",
  },
  {
    category: "DevOps Deep Dive",
    title: "Infrastructure as Code: Terraform vs Ansible",
    excerpt:
      "A practical comparison of two popular IaC tools and when to use each one in your DevOps pipeline.",
    date: "2024-03-10",
    lastReviewed: "2026-08-31",
    readTime: "12 min read",
    href: "/blog/terraform-vs-ansible",
    tags: ["Terraform", "Ansible", "DevOps", "Infrastructure as Code"],
    status: "archive",
  },
  {
    category: "AI + IT Series",
    title: "Integrating ChatGPT with n8n for IT Workflows",
    excerpt:
      "How to leverage AI to automate ticket classification, documentation, and first-line support.",
    date: "2024-03-05",
    lastReviewed: "2026-08-31",
    readTime: "10 min read",
    href: "/blog/chatgpt-n8n-workflows",
    tags: ["n8n", "ChatGPT", "AI", "Automation", "Workflows"],
    status: "archive",
  },
  {
    category: "Learning Moments",
    title: "5 Azure Misconfigurations That Cost Companies Thousands",
    excerpt:
      "Common cloud configuration mistakes and how to prevent them with automated policy enforcement.",
    date: "2024-03-01",
    lastReviewed: "2026-08-31",
    readTime: "7 min read",
    href: "/blog/azure-misconfigurations",
    tags: ["Azure", "Cloud Security", "FinOps", "Cost Optimization", "Governance"],
    status: "archive",
  },
  {
    category: "DevOps Deep Dive",
    title: "CI/CD Pipeline Security: Best Practices for 2024",
    excerpt:
      "Secure your deployment pipelines with these essential security practices and tools.",
    date: "2024-02-25",
    lastReviewed: "2026-08-31",
    readTime: "11 min read",
    href: "/blog/cicd-security-best-practices",
    tags: ["DevSecOps", "CI/CD", "Security", "GitHub Actions", "Azure DevOps"],
    status: "archive",
  },
  {
    category: "Automation Chronicles",
    title: "Automating M365 Administration with Microsoft Graph API",
    excerpt:
      "Practical examples of using Graph API and PowerShell to automate common M365 tasks.",
    date: "2024-02-20",
    lastReviewed: "2026-08-31",
    readTime: "9 min read",
    href: "/blog/m365-automation-graph-api",
    tags: ["Microsoft 365", "Graph API", "PowerShell", "Automation", "Azure AD"],
    status: "archive",
  },
];

export const blogCategories = [
  "All Posts",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];

export const featuredBlogPost =
  blogPosts.find((post) => post.featured) ?? blogPosts[0];

export const latestBlogPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
