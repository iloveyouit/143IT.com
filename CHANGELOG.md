# Changelog

All notable changes to the 143IT website will be documented in this file.

## [1.1.0] - 2025-10-20

### Added
- **Docker Support**: Complete containerization with multi-stage Dockerfile
  - Optimized production build (~150MB Alpine Linux image)
  - Docker Compose configuration for easy deployment
  - Standalone Next.js output for minimal dependencies
  - Non-root user security (nextjs:nodejs)
  - Health check support

- **Deployment Infrastructure**:
  - `Dockerfile` - Multi-stage build (deps, builder, runner)
  - `docker-compose.yml` - Single-command orchestration
  - `.dockerignore` - Optimized build context
  - `docker-test.sh` - Automated deployment testing script
  - `public/` directory with .gitkeep

- **Documentation**:
  - `DEPLOYMENT.md` - Comprehensive deployment guide (400+ lines)
    - Docker deployment (VPS, AWS ECS, Azure, Kubernetes)
    - Vercel/Netlify deployment
    - SSL/TLS configuration (nginx + Let's Encrypt, Caddy)
    - Production monitoring and troubleshooting
  - `DOCKER_TEST.md` - Docker testing guide
  - `CHANGELOG.md` - This file

- **npm Scripts**:
  - `docker:build` - Build Docker image
  - `docker:run` - Run container
  - `docker:stop` - Stop and remove container
  - `docker:logs` - View container logs
  - `docker:compose:up` - Start with Docker Compose
  - `docker:compose:down` - Stop Docker Compose
  - `docker:compose:logs` - View Compose logs

### Changed
- **Configuration**: Migrated from CommonJS to ESM
  - Renamed `next.config.js` → `next.config.mjs`
  - Updated to use ES6 imports for rehype plugins
  - Fixes compatibility with rehype v6+ (pure ESM packages)
  - Added `output: 'standalone'` for Docker optimization

- **Documentation Updates**:
  - `PROJECT_STATUS.md` - Updated to v1.1.0, added Docker section
  - `README.md` - Added Docker deployment section, deployment comparison table
  - `QUICKSTART.md` - Added Docker quick start guide
  - `package.json` - Updated version to 1.1.0, added Docker description

- **Build Performance**:
  - Production build time: ~14 seconds
  - Docker image size: ~150MB (down from potential 1GB+ without optimization)
  - All 15 pages statically pre-rendered
  - Bundle size: 87.2 kB shared JS, 42.9 kB home page

### Fixed
- ESM module compatibility issues with rehype plugins
- Docker build errors related to missing public directory
- Production build configuration for containerized deployment

### Technical Details

**Build Statistics:**
```
Route (app)                                  Size     First Load JS
┌ ○ /                                        42.9 kB         139 kB
├ ○ /_not-found                              873 B          88.1 kB
├ ○ /about                                   192 B          96.1 kB
├ ○ /blog                                    192 B          96.1 kB
├ ○ /blog/infrastructure-as-code-guide-2024  1.27 kB        97.2 kB
├ ○ /blog/self-healing-infrastructure        1.27 kB        97.2 kB
├ ○ /contact                                 2.87 kB        90.1 kB
├ ○ /services                                192 B          96.1 kB
├ ○ /services/ai-integration                 192 B          96.1 kB
├ ○ /services/automation-devops              192 B          96.1 kB
├ ○ /services/cloud-modernization            192 B          96.1 kB
├ ○ /services/managed-it                     192 B          96.1 kB
└ ○ /services/security-compliance            192 B          96.1 kB
+ First Load JS shared by all                87.2 kB
```

**Deployment Tested:**
- ✅ Local Docker Desktop (macOS)
- ✅ Production build successful
- ✅ All 15 pages accessible
- ✅ HTTP endpoint responsive
- ✅ No console errors

## [1.0.0] - 2024-03-15

### Added
- Initial release with 15 complete pages
- Next.js 14 with App Router
- TypeScript for type safety
- TailwindCSS for styling
- Framer Motion animations
- MDX blog system with syntax highlighting
- 5 service detail pages
- 2 sample blog articles
- Responsive mobile-first design
- SEO optimization

### Features
- Animated hero with typing effect
- Scroll-triggered fade-in animations
- Animated stat counters
- Table of contents for blog posts
- Author info and related posts components
- Dark theme with neon blue accents (#00E0FF)

---

**Built with ❤️ by 143IT** | Automate. Evolve. Dominate.
