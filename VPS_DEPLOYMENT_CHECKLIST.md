# VPS Docker Deployment Checklist

Quick reference guide for deploying the 143IT website to a VPS using Docker.

## Prerequisites

- [ ] VPS with Ubuntu 20.04+ or similar Linux distribution
- [ ] Root or sudo access to the VPS
- [ ] Domain name pointed to VPS IP address
- [ ] n8n instance running with webhook URLs ready

## Step 1: Initial VPS Setup

```bash
# SSH into your VPS
ssh root@your-vps-ip

# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose -y

# Add your user to docker group (optional, to run docker without sudo)
sudo usermod -aG docker $USER
# Log out and back in for this to take effect
```

## Step 2: Clone Repository

```bash
# Clone the repository
git clone https://github.com/yourusername/143IT.com.git
cd 143IT.com
```

## Step 3: Configure Environment Variables

```bash
# Copy the example file
cp .env.production.example .env.production

# Edit the file with your actual values
nano .env.production
```

**Required values to set:**
- `OPENAI_API_KEY` - Your OpenAI API key from https://platform.openai.com/api-keys
- `N8N_CONTACT_WEBHOOK` - Your n8n contact form webhook URL
- `N8N_NEWSLETTER_WEBHOOK` - Your n8n newsletter webhook URL

**Example `.env.production` file:**
```bash
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
N8N_CONTACT_WEBHOOK=https://n8n.yourdomain.com/webhook/contact
N8N_NEWSLETTER_WEBHOOK=https://n8n.yourdomain.com/webhook/newsletter
```

Save and exit (Ctrl+X, then Y, then Enter).

## Step 4: Build and Run with Docker

```bash
# Build and start the container
docker-compose up -d

# Wait for the build to complete (may take 5-10 minutes on first run)

# Check if container is running
docker ps

# View logs to ensure everything started correctly
docker-compose logs -f web
```

You should see output like:
```
✓ Ready in 8.9s
- Local: http://localhost:3000
```

Press Ctrl+C to exit the logs.

## Step 5: Test the Website

```bash
# Test if the site is accessible
curl http://localhost:3000

# You should see HTML output
```

## Step 6: Set Up Reverse Proxy with SSL

### Option A: Using Nginx with Let's Encrypt

```bash
# Install nginx and certbot
sudo apt install nginx certbot python3-certbot-nginx -y

# Create nginx configuration
sudo nano /etc/nginx/sites-available/143it.com
```

Paste this configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

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
# Enable the site
sudo ln -s /etc/nginx/sites-available/143it.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Follow the prompts, certbot will automatically configure SSL
```

### Option B: Using Caddy (Automatic HTTPS)

```bash
# Install Caddy
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy

# Create Caddyfile
sudo nano /etc/caddy/Caddyfile
```

Paste this configuration:
```
yourdomain.com, www.yourdomain.com {
    reverse_proxy localhost:3000
}
```

```bash
# Reload Caddy
sudo systemctl reload caddy
```

Caddy automatically handles SSL certificates!

## Step 7: Test Contact Form

```bash
# Test the contact form API endpoint
curl -X POST https://yourdomain.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message from VPS deployment"
  }'
```

**Expected response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**If you get an error:**
- Check Docker logs: `docker-compose logs -f web`
- Verify environment variables: `docker exec 143it-web env | grep N8N`
- Check n8n webhook is accessible from VPS

## Step 8: Configure Firewall

```bash
# Allow HTTP and HTTPS traffic
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp  # SSH (if not already allowed)
sudo ufw enable
sudo ufw status
```

## Verification Checklist

- [ ] Website loads at https://yourdomain.com
- [ ] SSL certificate is valid (green padlock in browser)
- [ ] Contact form submission works
- [ ] Newsletter signup works
- [ ] AI chatbot responds (if OpenAI key is configured)
- [ ] All pages load correctly
- [ ] Mobile responsive design works

## Maintenance Commands

```bash
# View logs
docker-compose logs -f web

# Restart container
docker-compose restart

# Stop container
docker-compose down

# Update deployment (after git pull)
git pull origin main
docker-compose down
docker-compose build --no-cache
docker-compose up -d

# Check container status
docker ps

# Check environment variables in container
docker exec 143it-web env | grep -E "N8N|OPENAI"
```

## Troubleshooting

### Contact Form Returns 503 Error

**Cause:** `N8N_CONTACT_WEBHOOK` environment variable not set or not accessible in container.

**Solution:**
```bash
# Check if environment variable is set
docker exec 143it-web env | grep N8N_CONTACT_WEBHOOK

# If empty, verify .env.production file exists and has correct values
cat .env.production

# Rebuild container
docker-compose down
docker-compose up -d
```

### Container Exits Immediately

**Solution:**
```bash
# Check logs for errors
docker-compose logs web

# Common issues:
# - Port 3000 already in use
# - Build failed
# - Missing dependencies
```

### Website Not Accessible from Internet

**Solution:**
```bash
# Check if nginx/caddy is running
sudo systemctl status nginx
# or
sudo systemctl status caddy

# Check firewall
sudo ufw status

# Check DNS records point to VPS IP
dig yourdomain.com
```

## Security Recommendations

- [ ] Keep `.env.production` file secure (never commit to git)
- [ ] Regularly update Docker images: `docker-compose pull && docker-compose up -d`
- [ ] Set up automatic backups
- [ ] Monitor logs for suspicious activity
- [ ] Keep VPS system packages updated: `sudo apt update && sudo apt upgrade`
- [ ] Consider setting up fail2ban for SSH protection

## Support

For issues or questions:
- Review main [DEPLOYMENT.md](file:///Users/me/Documents/GitHub/143IT.com/DEPLOYMENT.md) documentation
- Check Docker logs: `docker-compose logs -f web`
- Review n8n webhook configuration: [n8n_contact_form_webhook_guide.md](file:///Users/me/Documents/GitHub/143IT.com/n8n_contact_form_webhook_guide.md)

---

**Built with ❤️ by 143IT** | Automate & Dominate with AI
