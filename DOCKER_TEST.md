# Docker Test Environment - 143IT Website

**Version:** 1.1.0
**Last Updated:** October 2025

Quick guide to test the Docker deployment locally before deploying to production.

## Prerequisites

Before running the test, ensure you have:

1. **Docker Desktop installed** - Download from [docker.com](https://www.docker.com/products/docker-desktop)
2. **Docker Desktop running** - Make sure the Docker daemon is active
3. **At least 2GB free disk space** - For the Docker image and build cache
4. **Port 3000 available** - Stop any services running on port 3000

## Quick Test

Run the automated test script:

```bash
./docker-test.sh
```

This script will:
- ✅ Verify Docker is installed and running
- ✅ Check if port 3000 is available
- ✅ Validate all required files exist
- ✅ Build the Docker image (~3-5 minutes first time)
- ✅ Start the container with Docker Compose
- ✅ Verify the website is accessible
- ✅ Display useful commands and logs

## Manual Testing

If you prefer to run commands manually:

### Step 1: Stop Existing Services

If you have the dev server running:

```bash
# Find processes on port 3000
lsof -i :3000

# Stop them
kill -9 <PID>
```

Or stop the npm dev server if it's running in the background.

### Step 2: Build the Docker Image

```bash
# Using npm script
npm run docker:build

# Or directly with docker
docker build -t 143it-website:latest .
```

Build time: ~3-5 minutes on first run (cached builds are much faster)

### Step 3: Run with Docker Compose

```bash
# Start container
npm run docker:compose:up

# Or use docker-compose directly
docker-compose up -d
```

### Step 4: Verify It's Running

```bash
# Check container status
docker ps | grep 143it-web

# View logs
npm run docker:compose:logs

# Test the website
curl http://localhost:3000
```

### Step 5: Open in Browser

Visit: **http://localhost:3000**

You should see the 143IT website running in a containerized environment!

## What Gets Built

The Docker build process:

1. **Stage 1: Dependencies** (~5-6 sec)
   - Installs npm packages in Alpine Linux container
   - Creates optimized node_modules
   - Uses package-lock.json for reproducible builds

2. **Stage 2: Build** (~14 sec)
   - Compiles Next.js application with ESM config (next.config.mjs)
   - Generates all 15 static pages
   - Creates standalone output
   - Optimizes bundles for production
   - **Build output:** Home page 42.9 kB, shared JS 87.2 kB

3. **Stage 3: Runtime** (~1 sec)
   - Copies only production files
   - Sets up non-root user (nextjs:nodejs)
   - Creates minimal ~150MB final image
   - Alpine Linux base for security and size

**Total build time:** ~14 seconds (first build), ~5 seconds (cached)

## Viewing Logs

Real-time logs:

```bash
# Using npm script
npm run docker:compose:logs

# Or docker-compose directly
docker-compose logs -f web

# Or docker directly
docker logs -f 143it-web
```

Press `Ctrl+C` to exit logs (container keeps running).

## Stopping the Container

```bash
# Using npm script
npm run docker:compose:down

# Or docker-compose directly
docker-compose down

# Or docker directly (if not using compose)
docker stop 143it-web
docker rm 143it-web
```

## Rebuilding After Changes

If you make changes to the code:

```bash
# Rebuild and restart
docker-compose down
docker-compose up -d --build

# Or force clean build
docker-compose build --no-cache
docker-compose up -d
```

## Troubleshooting

### Port 3000 Already in Use

```bash
# Find what's using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or stop npm dev server
# Find npm processes
ps aux | grep "npm run dev"
kill -9 <PID>
```

### Docker Daemon Not Running

Error: `Cannot connect to the Docker daemon`

**Solution:**
- Open Docker Desktop application
- Wait for it to fully start (icon in menu bar should be stable)
- Try again

### Build Fails with "No Space Left on Device"

```bash
# Clean up Docker
docker system prune -a

# This removes:
# - Unused containers
# - Unused networks
# - Dangling images
# - Build cache
```

### Container Starts But Site Won't Load

```bash
# Check container logs for errors
docker logs 143it-web

# Verify container is running
docker ps

# Check if Next.js built correctly
docker exec -it 143it-web ls -la .next

# Restart container
docker-compose restart
```

### Build Takes Too Long

First build: 3-5 minutes (normal)
Subsequent builds: 30-60 seconds (uses cache)

To speed up:
- Ensure `.dockerignore` is in place (prevents copying unnecessary files)
- Use `--build` only when you change dependencies
- Regular code changes don't require full rebuild

### "Module Not Found" Errors

```bash
# Rebuild from scratch
docker-compose down
docker system prune -f
docker-compose build --no-cache
docker-compose up -d
```

## Environment Differences

### Development (npm run dev)
- Hot reload enabled
- Source maps included
- Unoptimized builds
- Development error messages

### Docker (Production)
- No hot reload
- Optimized production build
- Minified assets
- Generic error messages
- Standalone output

## Testing Checklist

Before deploying to production, verify:

- [ ] Container builds successfully
- [ ] Container starts without errors
- [ ] Website loads at http://localhost:3000
- [ ] All pages are accessible
- [ ] Images load correctly
- [ ] Blog posts render with syntax highlighting
- [ ] Animations work properly
- [ ] Mobile responsive (test with browser dev tools)
- [ ] No console errors
- [ ] Container logs show no errors

## Performance Testing

Test the production build performance:

```bash
# 1. Start container
docker-compose up -d

# 2. Open browser dev tools
# Visit: http://localhost:3000

# 3. Check Lighthouse scores
# Should see:
# - Performance: 90+
# - Best Practices: 90+
# - SEO: 90+
# - Accessibility: 90+
```

## Next Steps

After successful local testing:

1. **Review DEPLOYMENT.md** for production deployment options
2. **Choose hosting platform** (VPS, AWS, Azure, Vercel)
3. **Set up environment variables** for production
4. **Configure SSL/TLS** for HTTPS
5. **Connect n8n webhooks** for contact form
6. **Deploy!**

## Comparison: Docker vs Vercel

| Feature | Docker (VPS) | Vercel |
|---------|--------------|--------|
| Cost | $5-20/month | Free tier available |
| Control | Full control | Limited |
| Scaling | Manual | Automatic |
| SSL | Manual setup | Automatic |
| Deploy time | 5-10 min | 2-3 min |
| Best for | Custom infra | Quick deployment |

## Cleanup

To completely remove Docker test environment:

```bash
# Stop and remove containers
docker-compose down

# Remove images
docker rmi 143it-website:latest

# Clean up all Docker resources
docker system prune -a --volumes

# This frees up disk space
```

## Support

If you encounter issues:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review Docker logs: `docker logs 143it-web`
3. See DEPLOYMENT.md for detailed deployment docs
4. Check Docker Desktop is running and up to date

---

**Built with ❤️ by 143IT** | Automate. Evolve. Dominate.
