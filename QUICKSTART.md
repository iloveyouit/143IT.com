# Quick Start Guide

**Tagline:** "Automate & Dominate with AI"
**Version:** 1.2.0 (AI Chatbot Integrated)

## Development Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- OpenAI API key (for chatbot functionality)

### Environment Configuration

**IMPORTANT:** Before running the application, set up your environment variables:

```bash
# 1. Copy the example environment file
cp .env.example .env.local

# 2. Edit .env.local and add your OpenAI API key
# Get your API key from: https://platform.openai.com/api-keys
OPENAI_API_KEY=your_actual_api_key_here
```

### Local Development

```bash
# 1. Install dependencies (REQUIRED - run this first!)
npm install

# 2. Set up environment variables (see above)
# Make sure .env.local exists with your OPENAI_API_KEY

# 3. Run development server
npm run dev
```

Visit **http://localhost:3000** to see the site.

**Development Features:**
- Hot reload enabled
- Fast refresh for React components
- Detailed error messages
- Source maps for debugging

### Production Build (Local Testing)

**Note:** This project uses `output: 'standalone'` configuration optimized for Docker deployment. For local production testing, you have two options:

**Option 1: Use development mode (Recommended for local testing)**
```bash
npm run dev
```

**Option 2: Production build with standalone server**
```bash
# 1. Build the application
npm run build

# 2. Run using standalone server (NOT npm start)
node .next/standalone/server.js
```

**Why not `npm start`?**
The `npm start` command doesn't work properly with the standalone output configuration. You'll see this warning:
```
⚠ "next start" does not work with "output: standalone" configuration.
```

For actual production deployment, use Docker (see below).

## Docker Deployment

### Quick Test (Automated)

```bash
# Run automated deployment test
./docker-test.sh
```

This script will:
- ✅ Verify Docker is installed
- ✅ Check port 3000 availability
- ✅ Build optimized Docker image
- ✅ Start container
- ✅ Verify website is accessible

### Manual Docker Deployment

```bash
# Using Docker Compose (recommended)
docker-compose up -d

# Or use npm scripts
npm run docker:compose:up

# View logs
npm run docker:compose:logs

# Stop
npm run docker:compose:down
```

### Docker Build Details

- **Build time:** ~14 seconds (cached builds faster)
- **Image size:** ~150MB (optimized)
- **Platform:** Alpine Linux
- **Security:** Non-root user
- **Output:** Standalone Next.js build

## Project Overview

### Current Pages

**Main Pages:**
- **/** - Animated hero with typing effect, stats counters, pillars, services
- **/services** - MSP services overview with process diagram
- **/blog** - Blog listing with featured post and filters
- **/about** - Company story, mission, values
- **/contact** - Contact form (n8n integration ready)

**Service Detail Pages:**
- **/services/managed-it** - 24/7 infrastructure management
- **/services/cloud-modernization** - Azure/AWS migration
- **/services/automation-devops** - IaC, CI/CD, GitOps
- **/services/ai-integration** - ChatGPT, n8n automation
- **/services/security-compliance** - SOC, IAM, compliance

**Blog Articles (MDX):**
- **/blog/infrastructure-as-code-guide-2024** - Complete IaC guide with code examples
- **/blog/self-healing-infrastructure** - PowerShell automation patterns

### Key Features Implemented
- ✅ Animated homepage (typing effect, fade-ins, counters)
- ✅ 5 detailed service pages
- ✅ MDX blog with syntax highlighting
- ✅ Table of contents for blog posts
- ✅ Author info and related posts
- ✅ Mobile-responsive design
- ✅ Dark theme with neon blue accents (#00E0FF)
- ✅ SEO meta tags on all pages
- ✅ Fast page loads (static pre-rendered)
- ✅ Framer Motion animations
- ✅ Accessible navigation

### Next Steps

**For Production Deployment:**
1. **Choose Platform**:
   - Docker on VPS (DigitalOcean, Linode) - Full control
   - Vercel - Quick serverless deployment
   - AWS/Azure - Enterprise scale

2. **Configure SSL/TLS**:
   - Docker: Use nginx + Let's Encrypt or Caddy
   - Vercel/Netlify: Automatic HTTPS

3. **Set Environment Variables**:
   - n8n webhook URLs
   - Analytics tracking IDs
   - Custom domain configuration

4. **Content Updates**:
   - Replace placeholder text with real copy
   - Add real author avatars
   - Update social media links
   - Add client logos/testimonials

5. **Integrations**:
   - Contact form → n8n webhook (`app/contact/page.tsx:31`)
   - Newsletter → n8n webhook (`components/Newsletter.tsx:15`)
   - Analytics → Fathom/Plausible

6. **Additional Content**:
   - Create 5-10 more blog posts
   - Add case study detail pages
   - Build pricing page

### Deployment Options

**Docker (VPS):**
```bash
# SSH to VPS
ssh user@your-server.com

# Clone repo
git clone https://github.com/yourusername/143IT.com.git
cd 143IT.com

# Deploy
docker-compose up -d
```

**Vercel:**
```bash
# Push to GitHub
git push origin main

# Or use CLI
npm i -g vercel
vercel --prod
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment guides.

## File Structure Quick Reference

```
app/
├── about/page.tsx                              # About page
├── blog/
│   ├── page.tsx                               # Blog listing
│   ├── infrastructure-as-code-guide-2024/
│   │   └── page.mdx                           # MDX blog article
│   └── self-healing-infrastructure/
│       └── page.mdx                           # MDX blog article
├── contact/page.tsx                            # Contact form
├── services/
│   ├── page.tsx                               # Services overview
│   ├── managed-it/page.tsx                    # Service detail
│   ├── cloud-modernization/page.tsx           # Service detail
│   ├── automation-devops/page.tsx             # Service detail
│   ├── ai-integration/page.tsx                # Service detail
│   └── security-compliance/page.tsx           # Service detail
├── layout.tsx                                  # Root layout
├── page.tsx                                    # Home page
└── globals.css                                 # Global styles + syntax highlighting

components/
├── Header.tsx                                  # Site header
├── Footer.tsx                                  # Site footer
├── Hero.tsx                                    # Animated hero
├── Pillars.tsx                                 # Three pillars
├── AnimatedCounter.tsx                         # Stats counter animation
├── FadeInSection.tsx                           # Scroll animations
├── TypingEffect.tsx                            # Typewriter effect
├── BlogArticleLayout.tsx                       # MDX blog wrapper
├── AuthorInfo.tsx                              # Author bio
├── RelatedPosts.tsx                            # Related articles
└── TableOfContents.tsx                         # Auto-generated TOC

mdx-components.tsx                              # Custom MDX styling
next.config.js                                  # Next.js + MDX config
```

## Writing New Blog Posts

Create a new folder in `app/blog/[slug]/` with a `page.mdx` file:

```mdx
import BlogArticleLayout from "@/components/BlogArticleLayout";

<BlogArticleLayout
  title="Your Article Title"
  date="2024-03-20"
  readTime="10 min read"
  author={{ name: "Your Name", bio: "Your bio" }}
  tags={["Tag1", "Tag2"]}
  category="Category Name"
  relatedPosts={[...]}
>

Your content here with **markdown** and `code` support!

```javascript
const example = "Syntax highlighting works!";
```

</BlogArticleLayout>
```

## Customization

### Colors
Edit `tailwind.config.ts`:
- `background`: #0B0F1A
- `accent-1`: #00E0FF (Neon Blue)
- `accent-2`: #1E90FF (Dodger Blue)

### Fonts
Edit `app/layout.tsx`:
- Heading: Orbitron
- Body: Inter

### Animations
Edit animation speeds in components:
- `AnimatedCounter`: duration prop
- `FadeInSection`: delay prop
- `TypingEffect`: speed prop

## Testing Animations

1. Refresh homepage to see typing effect
2. Scroll to see fade-in animations
3. Watch stats count up from 0
4. Hover over pillar cards for scale effect

## Need Help?

See the full **README.md** for detailed documentation.
