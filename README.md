# 143IT Website

Modern, responsive website for **143IT** — a Managed Service Provider specializing in automation, cloud modernization, and AI-powered infrastructure solutions.

**Tagline:** "Automate & Dominate with AI"
**Slogan:** "Next-Gen IT Management with Cloud, Automation, and AI at the Core."

## Features

- **Modern Tech Stack**: Next.js 14, TypeScript, TailwindCSS, Framer Motion
- **AI Chatbot Widget**: OpenAI-powered assistant for service inquiries and lead qualification
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Advanced SEO**: 
  - Open Graph and Twitter Card metadata
  - Canonical URLs on all pages
  - Structured data (JSON-LD) for Organization, WebSite, BlogPosting, and Service
  - Comprehensive meta tags and semantic HTML
- **Blog Features**:
  - Real-time search functionality
  - Category filtering
  - MDX support with syntax highlighting
  - Rich content with table of contents
- **Dark Theme**: High-tech aesthetic with neon blue accents (#00E0FF)
- **Animations**: Typing effects, scroll animations, animated counters, fade-in sections
- **Performance**: Optimized images, lazy loading, minimal JavaScript
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels

## Pages

### Main Pages
- **Home** (`/`) - Hero with typing effect, animated stats, three pillars, featured services, case studies, blog highlights
- **Services** (`/services`) - Comprehensive service offerings with process overview
- **Blog** (`/blog`) - Dynamic blog feed with real-time search and category filtering
- **About** (`/about`) - Company story, mission, values, and capabilities
- **Contact** (`/contact`) - Contact form with n8n integration ready
- **Case Studies** (`/case-studies`) - Real client success stories and results
- **Resources** (`/resources`) - IT guides, tools, downloads, and learning resources
- **Pricing** (`/pricing`) - Service pricing information
- **Privacy Policy** (`/legal/privacy`) - Privacy policy and data protection
- **Terms of Service** (`/legal/terms`) - Terms and conditions

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

3. Configure environment variables:
```bash
cp .env.example .env.local
```
Edit `.env.local` and add your OpenAI API key:
```
OPENAI_API_KEY=your_actual_api_key_here
```
Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

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
│   │   ├── layout.tsx           # Blog layout with metadata
│   │   ├── page.tsx             # Blog listing with search/filter
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
│   ├── BlogArticleLayout.tsx    # MDX blog wrapper with structured data
│   ├── StructuredData.tsx       # JSON-LD structured data component
│   ├── AuthorInfo.tsx           # Author bio component
│   ├── RelatedPosts.tsx         # Related articles
│   └── TableOfContents.tsx      # Auto-generated TOC
├── lib/                         # Utility functions
│   └── metadata.ts             # SEO metadata generation utilities
├── public/                       # Static assets
├── tailwind.config.ts            # TailwindCSS configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.mjs               # Next.js + MDX configuration (ESM)
├── package.json                  # Dependencies
├── Dockerfile                    # Docker multi-stage build
├── docker-compose.yml            # Docker Compose configuration
├── .dockerignore                 # Docker build exclusions
└── docker-test.sh                # Automated deployment test script
```

### Available Scripts

**Development:**
- `npm run dev` - Start development server (recommended for local development)
- `npm run build` - Build for production
- `npm start` - Start production server ⚠️ **Note:** Not compatible with standalone output config. Use `node .next/standalone/server.js` or Docker instead
- `npm run lint` - Run ESLint

**Docker:**
- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run Docker container
- `npm run docker:stop` - Stop and remove container
- `npm run docker:logs` - View container logs
- `npm run docker:compose:up` - Start with Docker Compose
- `npm run docker:compose:down` - Stop Docker Compose
- `npm run docker:compose:logs` - View Compose logs

**Testing:**
- `./docker-test.sh` - Run automated Docker deployment test

### Important Notes

**Production Testing Locally:**
This project uses `output: 'standalone'` configuration for optimized Docker deployment. This means:
- ✅ **For development**: Use `npm run dev`
- ✅ **For Docker deployment**: Use `docker-compose up` or Docker scripts
- ⚠️ **For local production testing**: Use `node .next/standalone/server.js` (NOT `npm start`)

The `npm start` command will show a warning but still work. For proper production testing, use Docker.

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

The 143IT website supports multiple deployment options. Choose based on your infrastructure needs.

### Docker Deployment (Recommended for Control & Flexibility)

**Quick Start:**
```bash
# Automated test and deployment
./docker-test.sh

# Or manually with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f web
```

**Production Ready Features:**
- ✅ Multi-stage build (~150MB optimized image)
- ✅ Non-root user security
- ✅ Standalone Next.js output
- ✅ Alpine Linux base
- ✅ Health checks included
- ✅ Production-optimized build

**Deploy To:**
- VPS (DigitalOcean, Linode, Vultr) - $5-20/month
- AWS ECS / Azure Container Instances
- Google Cloud Run
- Kubernetes clusters
- Any Docker-compatible platform

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete Docker documentation including SSL setup, monitoring, and production best practices.

---

### Vercel (Recommended for Serverless)

**Best for:** Quick deployment, automatic scaling, zero configuration

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy with one click

**Features:** Automatic HTTPS, global CDN, preview deployments, free tier available

**Vercel CLI:**
```bash
npm i -g vercel
vercel login
vercel --prod
```

---

### Other Platforms

- **Netlify**: Works out of the box with Next.js plugin
- **Azure Static Web Apps**: Follow [Azure docs](https://azure.microsoft.com/en-us/services/app-service/static/)
- **AWS Amplify**: Compatible with Next.js
- **Railway**: Easy Docker deployment with free tier

### Deployment Comparison

| Platform | Cost | Control | Setup Time | SSL | Scaling |
|----------|------|---------|------------|-----|---------|
| Docker (VPS) | $5-20/mo | Full | 30 min | Manual | Manual |
| Vercel | Free-$20/mo | Limited | 5 min | Auto | Auto |
| AWS ECS | Pay-as-go | High | 60 min | Manual | Auto |
| Netlify | Free-$19/mo | Limited | 5 min | Auto | Auto |

## AI Chatbot Widget

The website includes an intelligent AI chatbot powered by OpenAI that appears on every page.

### Features
- **Floating Widget**: Fixed bottom-right chat button with smooth animations
- **Smart Conversations**: AI assistant with full knowledge of 143IT services
- **Multi-Purpose**:
  - Answer questions about services and pricing
  - Provide technical support guidance
  - Qualify leads by understanding business needs
  - Direct urgent issues to human support
- **Modern UI**: Dark theme matching the site aesthetic
- **Responsive**: Works perfectly on mobile and desktop
- **Persistent**: Chat history maintained during session

### Configuration

1. Add your OpenAI API key to `.env.local`:
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

2. (Optional) Customize the model in `app/api/chat/route.ts`:
```typescript
model: 'gpt-4-turbo-preview', // or 'gpt-3.5-turbo' for faster/cheaper responses
```

3. The chatbot automatically loads on all pages via the root layout

### Customization

The chatbot's knowledge and behavior can be customized in `app/api/chat/route.ts` by modifying the `SYSTEM_PROMPT` constant. It currently includes:
- Complete information about 143IT services
- Lead qualification questions
- Technical support guidance
- Contact information

## Integrations

### ⚠️ Known Issues & Pending Features

**Contact Form (Pending Integration)**
- **Status**: Not functional - form submission is currently mocked
- **Location**: `app/contact/page.tsx:21-35`
- **Issue**: TODO comment indicates n8n webhook integration is pending
- **Impact**: Users will see a success message, but form data is not sent anywhere
- **Action Required**: Implement n8n webhook integration before production deployment

**Newsletter Signup (Pending Integration)**
- **Status**: Ready for integration but not connected
- **Location**: `components/Newsletter.tsx`
- **Action Required**: Connect to email marketing platform via n8n

### n8n Contact Form Integration (TODO)

When implementing the contact form:

1. Create an n8n workflow with a webhook trigger
2. Update the form submission handler in `app/contact/page.tsx:21-35`
3. Replace the setTimeout mock with actual webhook POST request
4. Add proper error handling and validation

Example n8n workflow:
```
Webhook → Data Validation → CRM (Create Contact) → Email → Slack Notification
```

### Newsletter Automation (TODO)

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

**Core Functionality:**
- [x] 15 pages (13 static + 2 blog articles)
- [x] Service detail pages (5 pages)
- [x] Blog article pages with MDX support
- [x] Animated homepage with typing effects
- [x] Scroll-triggered animations
- [x] Animated stat counters
- [x] Syntax highlighting for code blocks
- [x] Table of contents for blog posts
- [x] Author info and related posts

**AI Integration:**
- [x] AI chatbot widget with OpenAI integration
- [x] Context-aware responses about 143IT services
- [x] Lead qualification capabilities
- [x] Technical support assistance
- [x] Floating chat interface with animations

**Deployment & DevOps:**
- [x] Docker multi-stage build
- [x] Docker Compose configuration
- [x] Automated deployment testing (docker-test.sh)
- [x] ESM module configuration (next.config.mjs)
- [x] Production-optimized build (~150MB image)
- [x] Comprehensive deployment documentation

## Future Enhancements

- [ ] Pricing page
- [ ] Case study detail pages (full articles)
- [ ] Client testimonials section with carousel
- [ ] Pricing calculator
- [ ] Dark/light mode toggle
- [ ] Analytics integration (Fathom/Plausible)
- [ ] Newsletter integration with email service
- [ ] Search functionality for blog
- [ ] Blog categories and tag pages
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Automated backups

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

© 2024 143IT. All rights reserved.

## Support

For questions or support:
- **Email:** support@143it.com
- **Phone:** +1 (720) 292-6098
- **Location:** Remote-First, Serving USA and CA

**Social Media:**
- **GitHub:** [github.com/iloveyouit](https://github.com/iloveyouit)
- **LinkedIn:** [linkedin.com/in/rob-loftin-143it](https://www.linkedin.com/in/rob-loftin-143it)

---

**Built with ❤️ by 143IT**
