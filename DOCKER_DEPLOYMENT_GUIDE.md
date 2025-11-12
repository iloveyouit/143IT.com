# Docker Deployment Guide for VPS

## Quick Fix Applied ✅

**Issue Fixed:** OpenAI API key error during Docker build
**Solution:** Made API routes dynamic to prevent build-time evaluation

---

## Deployment Steps

### 1. **Upload Files to VPS**

```bash
# On your local machine
scp -r /path/to/143IT.com user@your-vps-ip:~/docker/
```

Or use git:
```bash
# On VPS
cd ~/docker
git clone https://github.com/yourusername/143IT.com.git
cd 143IT.com
```

---

### 2. **Set Environment Variables**

Create a `.env.local` file in the project root:

```bash
# On VPS
cd ~/docker/143IT.com
nano .env.local
```

Add the following content:

```bash
# OpenAI API Key (Required for chatbot)
OPENAI_API_KEY=sk-your-actual-openai-key-here

# n8n Webhooks (Optional - for forms)
N8N_CONTACT_WEBHOOK_URL=https://your-n8n.com/webhook/contact
N8N_NEWSLETTER_WEBHOOK_URL=https://your-n8n.com/webhook/newsletter

# Site Config
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NODE_ENV=production
```

**Important:** Replace `sk-your-actual-openai-key-here` with your real OpenAI API key!

---

### 3. **Update docker-compose.yml**

Make sure docker-compose.yml includes environment file:

```yaml
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    env_file:
      - .env.local  # Add this line if not present
    restart: unless-stopped
    environment:
      - NODE_ENV=production
```

---

### 4. **Build and Run**

```bash
# Clean any previous builds
sudo docker-compose down
sudo docker system prune -f

# Build with the updated code
sudo docker-compose build --no-cache

# Start the container
sudo docker-compose up -d

# Check logs
sudo docker-compose logs -f web
```

---

### 5. **Verify Deployment**

```bash
# Check if container is running
sudo docker ps

# Test the endpoint
curl http://localhost:3000

# Check for errors
sudo docker-compose logs web
```

---

## Troubleshooting

### Issue: "Missing credentials" error during build

**Solution:** ✅ Already fixed! The API routes now use lazy initialization.

### Issue: Container crashes immediately

**Check logs:**
```bash
sudo docker-compose logs web
```

**Common causes:**
1. Missing `.env.local` file
2. Invalid OpenAI API key
3. Port 3000 already in use

### Issue: Cannot connect to website

**Check if port is open:**
```bash
sudo netstat -tulpn | grep 3000
```

**Check firewall:**
```bash
sudo ufw allow 3000
```

---

## Environment Variables Explained

| Variable | Required | Purpose |
|----------|----------|---------|
| `OPENAI_API_KEY` | Yes (for chatbot) | Powers the AI chatbot |
| `N8N_CONTACT_WEBHOOK_URL` | No | Contact form webhook |
| `N8N_NEWSLETTER_WEBHOOK_URL` | No | Newsletter webhook |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Site URL for SEO |
| `NODE_ENV` | Yes | Set to `production` |

---

## Production Checklist

- [ ] `.env.local` file created with valid API keys
- [ ] OPENAI_API_KEY set (get from https://platform.openai.com)
- [ ] n8n webhooks configured (if using forms)
- [ ] Firewall configured (port 3000 or your chosen port)
- [ ] Reverse proxy configured (Nginx/Caddy - optional)
- [ ] SSL certificate set up (Let's Encrypt - optional)
- [ ] Domain DNS pointed to VPS IP

---

## Reverse Proxy Setup (Optional but Recommended)

### Using Nginx

```nginx
server {
    listen 80;
    server_name your-domain.com;

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

### Using Caddy (Easier - Auto SSL)

```
your-domain.com {
    reverse_proxy localhost:3000
}
```

---

## SSL Setup with Let's Encrypt

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal is set up automatically
```

---

## Useful Commands

```bash
# Restart container
sudo docker-compose restart

# View logs in real-time
sudo docker-compose logs -f web

# Stop and remove
sudo docker-compose down

# Rebuild after code changes
sudo docker-compose up -d --build

# Check container status
sudo docker ps -a

# Execute commands in container
sudo docker-compose exec web sh

# Remove all Docker data (careful!)
sudo docker system prune -a
```

---

## Performance Tips

1. **Use a reverse proxy** (Nginx/Caddy) for better performance
2. **Enable gzip compression** in your reverse proxy
3. **Set up CDN** (Cloudflare) for static assets
4. **Monitor logs** regularly for errors
5. **Set up automated backups** of your environment files

---

## Security Best Practices

1. ✅ Security headers already configured (middleware.ts)
2. ✅ Rate limiting on contact form (5/15min)
3. ✅ Non-root user in Docker container
4. ⚠️ Keep OpenAI API key secret
5. ⚠️ Never commit `.env.local` to git
6. ⚠️ Use strong passwords for server access
7. ⚠️ Keep Docker and system updated

---

## Monitoring

### Check CPU/Memory Usage
```bash
sudo docker stats
```

### Check Disk Space
```bash
df -h
```

### Monitor Logs
```bash
# Follow logs
sudo docker-compose logs -f web

# Last 100 lines
sudo docker-compose logs --tail=100 web
```

---

## Getting Your OpenAI API Key

1. Go to https://platform.openai.com
2. Sign up or log in
3. Click on "API Keys" in the left sidebar
4. Click "Create new secret key"
5. Copy the key (starts with `sk-`)
6. Add to your `.env.local` file

**Note:** Without the API key, the chatbot won't work, but the rest of the site will function normally.

---

## Need Help?

- Check logs: `sudo docker-compose logs web`
- Check container status: `sudo docker ps -a`
- Email: support@143it.com
- Phone: +1 (720) 292-6098

---

**Last Updated:** January 2025  
**Status:** Ready for deployment ✅

