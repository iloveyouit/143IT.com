# 143IT Website

Modern, responsive website for **143IT** — a Managed Service Provider specializing in automation, cloud modernization, and AI-powered infrastructure solutions.

**Tagline:** "Automate. Evolve. Dominate."
**Slogan:** "Next-Gen IT Management with Cloud, Automation, and AI at the Core."

## Features

- **Modern Tech Stack**: Next.js 14, TypeScript, TailwindCSS, Framer Motion
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **SEO Optimized**: Meta tags, semantic HTML, fast loading times
- **Dark Theme**: High-tech aesthetic with neon blue accents (#00E0FF)
- **Animations**: Typing effects, scroll animations, animated counters, fade-in sections
- **MDX Blog**: Full-featured blog with syntax highlighting and rich content
- **Performance**: Optimized images, lazy loading, minimal JavaScript
- **Accessibility**: WCAG 2.1 compliant

## Pages

### Main Pages
- **Home** (`/`) - Hero with typing effect, animated stats, three pillars, featured services, case studies, blog highlights
- **Services** (`/services`) - Comprehensive service offerings with process overview
- **Blog** (`/blog`) - Dynamic blog feed with search and category filters
- **About** (`/about`) - Company story, mission, values, and capabilities
- **Contact** (`/contact`) - Contact form with n8n integration ready

### Service Detail Pages
- **Managed IT** (`/services/managed-it`) - 24/7 monitoring, infrastructure management
- **Cloud Modernization** (`/services/cloud-modernization`) - Azure/AWS migration, cost optimization
- **Automation & DevOps** (`/services/automation-devops`) - IaC, CI/CD, GitOps workflows
- **AI Integration** (`/services/ai-integration`) - ChatGPT, n8n, custom ML models
- **Security & Compliance** (`/services/security-compliance`) - SOC, IAM, compliance frameworks

### Blog Articles (MDX)
- **Infrastructure as Code Guide** (`/blog/infrastructure-as-code-guide-2024`)
- **Self-Healing Infrastructure** (`/blog/self-healing-infrastructure`)

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Content**: [MDX](https://mdxjs.com/) with rehype plugins
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter, Orbitron (Google Fonts)
- **Syntax Highlighting**: Highlight.js (Atom One Dark theme)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose (optional, for containerized deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/143IT.com.git
cd 143IT.com
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Quick Start

For production deployment with Docker:

```bash
# Using Docker Compose (recommended)
docker-compose up -d

# Or build and run manually
npm run docker:build
npm run docker:run

# View logs
npm run docker:logs

# Stop container
npm run docker:stop
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment documentation.

## Development

### Project Structure

```
143IT.com/
├── app/                           # Next.js App Router pages
│   ├── about/                    # About page
│   ├── blog/                     # Blog pages
│   │   ├── page.tsx             # Blog listing
│   │   ├── infrastructure-as-code-guide-2024/
│   │   │   └── page.mdx         # MDX blog article
│   │   └── self-healing-infrastructure/
│   │       └── page.mdx         # MDX blog article
│   ├── contact/                  # Contact page
│   ├── services/                 # Services pages
│   │   ├── page.tsx             # Services overview
│   │   ├── managed-it/          # Managed IT detail
│   │   ├── cloud-modernization/ # Cloud detail
│   │   ├── automation-devops/   # Automation detail
│   │   ├── ai-integration/      # AI detail
│   │   └── security-compliance/ # Security detail
│   ├── layout.tsx                # Root layout with Header/Footer
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles + syntax highlighting
├── components/                   # React components
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Site footer
│   ├── Hero.tsx                 # Animated hero with typing effect
│   ├── Pillars.tsx              # Three pillars with animations
│   ├── FeaturedServices.tsx     # Service cards
│   ├── CaseStudyHighlights.tsx  # Case study previews
│   ├── LatestInsights.tsx       # Blog post previews
│   ├── Newsletter.tsx           # Newsletter signup
│   ├── AnimatedCounter.tsx      # Counting animation component
│   ├── FadeInSection.tsx        # Scroll-triggered fade-in
│   ├── TypingEffect.tsx         # Typewriter effect
│   ├── BlogArticleLayout.tsx    # MDX blog wrapper
│   ├── AuthorInfo.tsx           # Author bio component
│   ├── RelatedPosts.tsx         # Related articles
│   └── TableOfContents.tsx      # Auto-generated TOC
├── mdx-components.tsx            # Custom MDX component styles
├── public/                       # Static assets
├── tailwind.config.ts            # TailwindCSS configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js + MDX configuration
└── package.json                  # Dependencies
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Design System

### Colors

- **Background**: `#0B0F1A`
- **Primary Accent**: `#00E0FF` (Neon Blue)
- **Secondary Accent**: `#1E90FF` (Dodger Blue)
- **Text**: `#E0E0E0`
- **CTA Hover**: `#00A8E8`

### Typography

- **Headings**: Orbitron Bold
- **Body**: Inter Regular

### Components

#### Tailwind Utility Classes
- `.btn-primary` - Primary CTA button with hover effects
- `.btn-secondary` - Secondary outlined button
- `.gradient-text` - Gradient text effect (accent-1 to accent-2)
- `.glow-effect` - Text glow effect for headings
- `.card-glow` - Card shadow glow
- `.prose-blog` - MDX article styling wrapper

#### React Components
- **AnimatedCounter** - Spring-animated number counter
- **FadeInSection** - Scroll-triggered fade-in with direction options
- **TypingEffect** - Typewriter animation for text
- **BlogArticleLayout** - Full-featured blog post layout
- **TableOfContents** - Auto-generated with scroll spy

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- **Netlify**: Works out of the box
- **Azure Static Web Apps**: Follow [Azure docs](https://azure.microsoft.com/en-us/services/app-service/static/)
- **AWS Amplify**: Compatible with Next.js

## Integrations

### n8n Contact Form

The contact form is ready for n8n webhook integration:

1. Create an n8n workflow with a webhook trigger
2. Update the form submission handler in `app/contact/page.tsx`
3. Replace the TODO comment with your webhook URL

Example workflow:
```
Webhook → Data Validation → CRM (Create Contact) → Email → Slack Notification
```

### Newsletter Automation

Newsletter form in `components/Newsletter.tsx` is ready for integration:

1. Set up double opt-in workflow in n8n
2. Connect to your email marketing platform
3. Add subscriber tags and segments

## SEO

Each page includes:
- Unique meta titles and descriptions
- Open Graph tags
- Structured data ready
- Semantic HTML
- Fast Core Web Vitals

## Performance

Target metrics:
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s
- Cumulative Layout Shift: < 0.1

## Completed Features

- [x] Service detail pages (5 pages)
- [x] Blog article pages with MDX support
- [x] Animated homepage with typing effects
- [x] Scroll-triggered animations
- [x] Animated stat counters
- [x] Syntax highlighting for code blocks
- [x] Table of contents for blog posts
- [x] Author info and related posts

## Future Enhancements

- [ ] Pricing page
- [ ] AI chatbot widget
- [ ] Case study detail pages (full articles)
- [ ] Client testimonials section with carousel
- [ ] Pricing calculator
- [ ] Dark/light mode toggle
- [ ] Analytics integration (Fathom/Plausible)
- [ ] Newsletter integration with email service
- [ ] Search functionality for blog
- [ ] Blog categories and tag pages

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

© 2024 143IT. All rights reserved.

## Support

For questions or support, contact: hello@143it.com

---

**Built with ❤️ by 143IT**
