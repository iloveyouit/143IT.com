# 143IT Website

Modern, responsive website for **143IT** — a Managed Service Provider specializing in automation, cloud modernization, and AI-powered infrastructure solutions.

## Features

- **Modern Tech Stack**: Next.js 14, TypeScript, TailwindCSS
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **SEO Optimized**: Meta tags, semantic HTML, fast loading times
- **Dark Theme**: High-tech aesthetic with neon blue accents
- **Performance**: Optimized images, lazy loading, minimal JavaScript
- **Accessibility**: WCAG 2.1 compliant

## Pages

- **Home** (`/`) - Hero section, key pillars, featured services, case studies, blog highlights
- **Services** (`/services`) - Comprehensive service offerings with detailed descriptions
- **Blog** (`/blog`) - Dynamic blog feed with search and category filters
- **About** (`/about`) - Company story, mission, values, and capabilities
- **Contact** (`/contact`) - Contact form with n8n integration ready

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter, Orbitron (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

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

## Development

### Project Structure

```
143IT.com/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Home hero section
│   ├── Pillars.tsx        # Three pillars section
│   ├── FeaturedServices.tsx
│   ├── CaseStudyHighlights.tsx
│   ├── LatestInsights.tsx
│   └── Newsletter.tsx     # Newsletter signup
├── public/                # Static assets
├── tailwind.config.ts     # TailwindCSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
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

Custom Tailwind components available:
- `.btn-primary` - Primary CTA button
- `.btn-secondary` - Secondary outlined button
- `.gradient-text` - Gradient text effect
- `.glow-effect` - Text glow effect
- `.card-glow` - Card shadow glow

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

## Future Enhancements

- [ ] AI chatbot widget
- [ ] Case study detail pages
- [ ] Blog article pages with MDX support
- [ ] Service detail pages
- [ ] Client testimonials section
- [ ] Pricing calculator
- [ ] Dark/light mode toggle
- [ ] Analytics integration (Fathom/Plausible)

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
