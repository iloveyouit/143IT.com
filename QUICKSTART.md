# Quick Start Guide

**Tagline:** "Automate. Evolve. Dominate."

## Install & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit **http://localhost:3000** to see the site.

## Build for Production

```bash
# Create production build
npm run build

# Run production server
npm start
```

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
1. **Pricing Page**: Create tiered pricing options
2. **Content**: Replace placeholder content with real copy
3. **n8n Webhooks**:
   - Contact form → Update `app/contact/page.tsx` line 31
   - Newsletter → Update `components/Newsletter.tsx` line 15
4. **Analytics**: Add Fathom or Plausible tracking
5. **More Blog Posts**: Create additional MDX articles
6. **Case Study Detail Pages**: Full articles with metrics

### Deployment
- Push to GitHub
- Connect to Vercel/Netlify
- Deploy!

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
