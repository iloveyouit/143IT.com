# Quick Start Guide

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
- **/** - Home page with hero, pillars, services, case studies
- **/services** - All MSP services with detailed features
- **/blog** - Blog listing with featured post
- **/about** - Company story, mission, values
- **/contact** - Contact form (n8n integration ready)

### Key Features Implemented
- ✅ Mobile-responsive design
- ✅ Dark theme with neon blue accents
- ✅ SEO meta tags on all pages
- ✅ Fast page loads (all static pre-rendered)
- ✅ Accessible navigation
- ✅ Newsletter signup component

### Next Steps
1. **Content**: Replace placeholder content with real copy
2. **Blog Integration**: Connect to CMS (Notion API/Ghost/WordPress)
3. **n8n Webhooks**:
   - Contact form → Update `app/contact/page.tsx`
   - Newsletter → Update `components/Newsletter.tsx`
4. **Analytics**: Add Fathom or Plausible
5. **Service Pages**: Create individual service detail pages
6. **Case Studies**: Add case study detail pages

### Deployment
- Push to GitHub
- Connect to Vercel/Netlify
- Deploy!

## File Structure Quick Reference

```
app/
├── about/page.tsx          # About page
├── blog/page.tsx           # Blog listing
├── contact/page.tsx        # Contact form
├── services/page.tsx       # Services overview
├── layout.tsx              # Root layout (Header/Footer)
├── page.tsx                # Home page
└── globals.css             # Global styles

components/
├── Header.tsx              # Site header
├── Footer.tsx              # Site footer
├── Hero.tsx                # Home hero section
├── Pillars.tsx             # Three pillars
├── FeaturedServices.tsx    # Service cards
├── CaseStudyHighlights.tsx # Case studies
├── LatestInsights.tsx      # Blog preview
└── Newsletter.tsx          # Newsletter form
```

## Customization

### Colors
Edit `tailwind.config.ts` to change:
- Background color
- Accent colors
- Text colors

### Fonts
Edit `app/layout.tsx` to change:
- Heading font (currently Orbitron)
- Body font (currently Inter)

### Content
All content is in the page/component files - simply edit the text!

## Need Help?

See the full README.md for detailed documentation.
