# 143IT Website - Deployment Guide

Complete guide for deploying the 143IT website using Docker or traditional hosting platforms.

**Tagline:** "Automate. Evolve. Dominate."

## Table of Contents

- [Docker Deployment (Recommended)](#docker-deployment-recommended)
- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [VPS Deployment](#vps-deployment)
- [AWS Deployment](#aws-deployment)
- [Azure Deployment](#azure-deployment)
- [Environment Variables](#environment-variables)
- [SSL/TLS Configuration](#ssltls-configuration)
- [Troubleshooting](#troubleshooting)

---

## Docker Deployment (Recommended)

The 143IT website includes a complete Docker setup for containerized deployment. This is the recommended approach for VPS, cloud, or local production testing.

### Prerequisites

- Docker 20.10+ installed
- Docker Compose 2.0+ installed
- 2GB+ RAM available
- 10GB+ disk space

### Quick Start

1. **Build and run with Docker Compose:**

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f web

# Stop the container
docker-compose down
```

The site will be available at `http://localhost:3000`

2. **Build Docker image manually:**

```bash
# Build the image
docker build -t 143it-website:latest .

# Run the container
docker run -d \
  --name 143it-web \
  -p 3000:3000 \
  -e NODE_ENV=production \
  143it-website:latest

# View logs
docker logs -f 143it-web

# Stop container
docker stop 143it-web
docker rm 143it-web
```

### Docker Image Details

- **Multi-stage build** - Optimized for minimal image size (~150MB)
- **Non-root user** - Runs as `nextjs` user for security
- **Standalone output** - Includes only production dependencies
- **Alpine Linux** - Lightweight base image

### Production Deployment with Docker

#### Option 1: VPS with Docker

Deploy to any VPS (DigitalOcean, Linode, Vultr, etc.):

```bash
# 1. SSH into your VPS
ssh user@your-server.com

# 2. Install Docker and Docker Compose
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
sudo usermod -aG docker $USER

# 3. Clone repository
git clone https://github.com/yourusername/143IT.com.git
cd 143IT.com

# 4. Set environment variables (if needed)
nano .env.production

# 5. Build and run
docker-compose up -d

# 6. Set up reverse proxy (nginx or Caddy)
# See SSL/TLS section below
```

#### Option 2: AWS ECS (Elastic Container Service)

```bash
# 1. Build and tag image
docker build -t 143it-website:latest .

# 2. Tag for ECR
docker tag 143it-website:latest \
  your-account-id.dkr.ecr.us-east-1.amazonaws.com/143it-website:latest

# 3. Push to ECR
aws ecr get-login-password --region us-east-1 | \
  docker login --username AWS --password-stdin \
  your-account-id.dkr.ecr.us-east-1.amazonaws.com
docker push your-account-id.dkr.ecr.us-east-1.amazonaws.com/143it-website:latest

# 4. Create ECS service (use AWS Console or CLI)
```

#### Option 3: Azure Container Instances

```bash
# 1. Login to Azure
az login

# 2. Create resource group
az group create --name 143it-rg --location eastus

# 3. Create container registry
az acr create --resource-group 143it-rg \
  --name 143itregistry --sku Basic

# 4. Build and push
az acr build --registry 143itregistry \
  --image 143it-website:latest .

# 5. Deploy container
az container create \
  --resource-group 143it-rg \
  --name 143it-web \
  --image 143itregistry.azurecr.io/143it-website:latest \
  --dns-name-label 143it \
  --ports 3000
```

#### Option 4: Kubernetes

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: 143it-website
spec:
  replicas: 2
  selector:
    matchLabels:
      app: 143it-web
  template:
    metadata:
      labels:
        app: 143it-web
    spec:
      containers:
      - name: web
        image: 143it-website:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
---
apiVersion: v1
kind: Service
metadata:
  name: 143it-service
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 3000
  selector:
    app: 143it-web
```

Deploy:
```bash
kubectl apply -f deployment.yaml
```

---

## Vercel Deployment

Vercel is the recommended platform for serverless Next.js deployment (free tier available).

### Steps

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel:**
- Visit [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your GitHub repository
- Click "Deploy"

3. **Configure domain:**
- Add custom domain in Vercel dashboard
- Update DNS records to point to Vercel

### Vercel CLI Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## Netlify Deployment

Alternative to Vercel with similar features.

### Steps

1. **Create `netlify.toml`:**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

2. **Deploy:**
- Visit [netlify.com](https://netlify.com)
- Connect GitHub repository
- Click "Deploy"

### Netlify CLI

```bash
# Install CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

## VPS Deployment (Non-Docker)

Deploy directly to a VPS using PM2.

### Prerequisites

- Node.js 18+ installed
- nginx installed
- PM2 installed globally

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Build for production
npm run build

# 3. Install PM2
npm install -g pm2

# 4. Start with PM2
pm2 start npm --name "143it-website" -- start

# 5. Save PM2 configuration
pm2 save
pm2 startup

# 6. Configure nginx (see SSL/TLS section)
```

---

## AWS Deployment

### Option 1: AWS Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

### Option 2: AWS EC2 + Docker

Follow VPS Docker deployment steps on an EC2 instance.

### Option 3: AWS Elastic Beanstalk

```bash
# Install EB CLI
pip install awsebcli

# Initialize
eb init

# Create environment
eb create 143it-production

# Deploy
eb deploy
```

---

## Azure Deployment

### Option 1: Azure Static Web Apps

```bash
# Install Azure CLI
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

# Login
az login

# Create static web app
az staticwebapp create \
  --name 143it-website \
  --resource-group 143it-rg \
  --location eastus2
```

### Option 2: Azure App Service

```bash
# Create App Service plan
az appservice plan create \
  --name 143it-plan \
  --resource-group 143it-rg \
  --sku B1 \
  --is-linux

# Create web app
az webapp create \
  --resource-group 143it-rg \
  --plan 143it-plan \
  --name 143it-website \
  --runtime "NODE|18-lts"

# Deploy
az webapp deployment source config-local-git \
  --name 143it-website \
  --resource-group 143it-rg
```

---

## Environment Variables

Create `.env.production` file for production environment variables:

```bash
# Required for production
NODE_ENV=production

# Optional: n8n webhook URLs (when ready)
NEXT_PUBLIC_CONTACT_WEBHOOK_URL=https://your-n8n.com/webhook/contact
NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL=https://your-n8n.com/webhook/newsletter

# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# Optional: Custom domain
NEXT_PUBLIC_SITE_URL=https://143it.com
```

### Setting Environment Variables

**Docker:**
```bash
# In docker-compose.yml
environment:
  - NODE_ENV=production
  - NEXT_PUBLIC_SITE_URL=https://143it.com
```

**Vercel:**
- Dashboard → Settings → Environment Variables

**Netlify:**
- Dashboard → Site settings → Environment variables

---

## SSL/TLS Configuration

### Option 1: Nginx Reverse Proxy with Let's Encrypt

```bash
# 1. Install nginx and certbot
sudo apt update
sudo apt install nginx certbot python3-certbot-nginx

# 2. Create nginx config
sudo nano /etc/nginx/sites-available/143it.com
```

Nginx configuration:
```nginx
server {
    listen 80;
    server_name 143it.com www.143it.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# 3. Enable site
sudo ln -s /etc/nginx/sites-available/143it.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 4. Get SSL certificate
sudo certbot --nginx -d 143it.com -d www.143it.com

# 5. Auto-renewal (runs automatically)
sudo certbot renew --dry-run
```

### Option 2: Caddy (Automatic HTTPS)

```bash
# 1. Install Caddy
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy

# 2. Create Caddyfile
sudo nano /etc/caddy/Caddyfile
```

Caddyfile:
```
143it.com, www.143it.com {
    reverse_proxy localhost:3000
}
```

```bash
# 3. Reload Caddy
sudo systemctl reload caddy
```

Caddy automatically handles SSL certificates via Let's Encrypt.

---

## Troubleshooting

### Docker Build Fails

**Issue:** Build fails at npm ci step
**Solution:**
```bash
# Clear Docker cache
docker builder prune -a

# Rebuild
docker-compose build --no-cache
```

### Container Won't Start

**Issue:** Container exits immediately
**Solution:**
```bash
# Check logs
docker logs 143it-web

# Check if port 3000 is already in use
sudo lsof -i :3000
kill -9 <PID>
```

### Site Not Accessible

**Issue:** Can't access site at localhost:3000
**Solution:**
```bash
# Check if container is running
docker ps

# Check firewall
sudo ufw allow 3000/tcp

# Check nginx/caddy logs
sudo tail -f /var/log/nginx/error.log
```

### Build Time Too Long

**Issue:** Docker build takes 10+ minutes
**Solution:**
- Use `.dockerignore` to exclude unnecessary files
- Enable BuildKit: `export DOCKER_BUILDKIT=1`
- Use multi-stage build (already implemented)

### Memory Issues

**Issue:** Container crashes with OOM
**Solution:**
```bash
# Increase Docker memory limit
docker run -d \
  --name 143it-web \
  -p 3000:3000 \
  --memory="1g" \
  --memory-swap="1g" \
  143it-website:latest
```

---

## Performance Optimization

### Enable Gzip Compression (nginx)

```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;
```

### Enable HTTP/2 (nginx)

```nginx
listen 443 ssl http2;
```

### CDN Integration

For static assets, consider using:
- Cloudflare (free tier available)
- AWS CloudFront
- Azure CDN

---

## Monitoring

### Health Check Endpoint

Add health check to `app/api/health/route.ts`:
```typescript
export async function GET() {
  return Response.json({ status: 'ok', timestamp: new Date().toISOString() });
}
```

### Docker Health Check

Add to `Dockerfile`:
```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"
```

### Logging

**Docker logs:**
```bash
docker logs -f 143it-web --tail 100
```

**PM2 logs:**
```bash
pm2 logs 143it-website
```

---

## Backup and Updates

### Backup Strategy

```bash
# 1. Backup Docker volumes
docker run --rm \
  --volumes-from 143it-web \
  -v $(pwd):/backup \
  alpine tar cvf /backup/backup.tar /app

# 2. Backup database (if using one)
# Not needed for static site
```

### Update Deployment

```bash
# 1. Pull latest code
git pull origin main

# 2. Rebuild and restart
docker-compose down
docker-compose build --no-cache
docker-compose up -d

# 3. Verify
curl http://localhost:3000
```

---

## Production Checklist

Before going live:

- [ ] Domain configured with DNS records
- [ ] SSL certificate active (HTTPS working)
- [ ] Environment variables set
- [ ] Analytics configured (Fathom/Plausible)
- [ ] n8n webhooks connected (contact form + newsletter)
- [ ] Email addresses updated (footer, contact page)
- [ ] Social media links added
- [ ] Backup strategy implemented
- [ ] Monitoring/logging configured
- [ ] Firewall rules configured
- [ ] Site tested on mobile devices
- [ ] Load testing completed
- [ ] SEO meta tags verified
- [ ] Sitemap generated
- [ ] robots.txt configured

---

## Support

For deployment assistance:
- Email: hello@143it.com
- Documentation: This file
- GitHub Issues: [Repository issues](https://github.com/yourusername/143IT.com/issues)

---

**Built with ❤️ by 143IT** | Automate. Evolve. Dominate.
