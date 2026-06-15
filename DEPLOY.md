# Deployment Guide

## Option A — PM2 + Nginx (recommended for VPS)

### 1. On your server, install dependencies
```bash
# Node.js (via nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
nvm install 22 && nvm use 22

# PM2 globally
npm install -g pm2

# Nginx
sudo apt install nginx -y
```

### 2. Copy the project and build
```bash
# Upload the project (from your local machine)
scp -r . user@your-server:/var/www/susil-portfolio

# SSH into the server
ssh user@your-server
cd /var/www/susil-portfolio

# Install deps and build
npm ci
npm run build
```

> **Important:** If the site will be served from the domain root (e.g. `https://susil.iitj.ac.in/`),
> change `base: '/dr-susil-mohanty/'` to `base: '/'` in `vite.config.ts` before building.

### 3. Start with PM2
```bash
npm run pm2:start

# Save so it auto-starts on reboot
pm2 save
pm2 startup   # follow the printed command to enable systemd integration
```

### 4. Configure Nginx
```bash
# Copy the config
sudo cp nginx.conf /etc/nginx/sites-available/susil-portfolio
sudo ln -s /etc/nginx/sites-available/susil-portfolio /etc/nginx/sites-enabled/

# Edit the file: replace 'your-domain.com' and the root path
sudo nano /etc/nginx/sites-available/susil-portfolio

# Test and reload
sudo nginx -t && sudo systemctl reload nginx
```

### 5. SSL with Certbot (free)
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```
Certbot will auto-update the nginx.conf with SSL settings.

---

## Option B — PM2 only (no Nginx, direct port 3000)
```bash
npm ci && npm run build
npm run pm2:start
```
Site runs at `http://your-server-ip:3000`. Open port 3000 in your firewall.

---

## Updating the site
```bash
# Pull latest code, rebuild, restart
git pull
npm run deploy    # builds + restarts PM2 automatically
```

## Useful PM2 commands
```bash
npm run pm2:logs      # live logs
npm run pm2:restart   # restart after changes
npm run pm2:stop      # stop the server
pm2 status            # overall status
```
