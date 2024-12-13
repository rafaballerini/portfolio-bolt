#!/bin/bash

# Update package list
apt-get update

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# Install nginx
apt-get install -y nginx

# Install certbot for SSL
apt-get install -y certbot python3-certbot-nginx

# Create application directory
mkdir -p /var/www/rafaballerini
cd /var/www/rafaballerini

# Clone your repository (you'll need to replace with your actual repo URL)
# git clone https://github.com/yourusername/yourrepo.git .

# Install dependencies and build
npm install
npm run build

# Create nginx configuration
cat > /etc/nginx/sites-available/rafaballerini << 'EOL'
server {
    listen 80;
    listen [::]:80;
    server_name yourdomain.com www.yourdomain.com;
    
    root /var/www/rafaballerini/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 10240;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml;
    gzip_disable "MSIE [1-6]\.";

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 7d;
        add_header Cache-Control "public, no-transform";
    }

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
EOL

# Enable the site
ln -s /etc/nginx/sites-available/rafaballerini /etc/nginx/sites-enabled/

# Remove default nginx site
rm /etc/nginx/sites-enabled/default

# Test nginx configuration
nginx -t

# Restart nginx
systemctl restart nginx

# Setup SSL certificate
certbot --nginx -d yourdomain.com -d www.yourdomain.com