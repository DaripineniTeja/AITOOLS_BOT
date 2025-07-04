# 🚀 Local Deployment Guide for ToolMate Teja

## Quick Start Commands

### 1. Setup Project Locally
```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env and add your Telegram bot token
```

### 2. Run Locally

#### Web Application
```bash
# Development mode
npm run dev

# Production build
npm run build
npm run preview
```

#### Telegram Bot
```bash
# Development mode (auto-restart)
npm run bot:dev

# Production mode
npm run bot
```

## 🌐 Web App Deployment Options

### Option 1: Netlify (Recommended)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
npm run deploy:netlify
```

### Option 2: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
npm run deploy:vercel
```

### Option 3: Manual Upload
```bash
# Build the project
npm run build

# Upload the 'dist' folder to any static hosting:
# - GitHub Pages
# - Firebase Hosting
# - AWS S3
# - Any web hosting provider
```

## 🤖 Bot Deployment Options

### Option 1: VPS/Cloud Server (DigitalOcean, AWS, etc.)
```bash
# On your server
git clone <your-repo>
cd toolmate-teja-bot
npm install

# Set environment variable
export TELEGRAM_BOT_TOKEN="your_token_here"

# Run bot
npm run bot

# For production, use PM2
npm install -g pm2
pm2 start bot/index.js --name "toolmate-bot"
pm2 save
pm2 startup
```

### Option 2: Heroku
```bash
# Install Heroku CLI
# Login: heroku login

# Create app
heroku create your-app-name

# Set environment variable
heroku config:set TELEGRAM_BOT_TOKEN=your_token_here

# Deploy
git push heroku main
```

### Option 3: Railway
1. Go to [Railway.app](https://railway.app)
2. Connect your GitHub repository
3. Add environment variable: `TELEGRAM_BOT_TOKEN`
4. Deploy automatically

### Option 4: Render
1. Go to [Render.com](https://render.com)
2. Create new Web Service
3. Connect repository
4. Set build command: `npm install`
5. Set start command: `npm run bot`
6. Add environment variable: `TELEGRAM_BOT_TOKEN`

## 📋 Pre-deployment Checklist

### For Web App:
- [ ] Run `npm run build` successfully
- [ ] Test with `npm run preview`
- [ ] Check all links work
- [ ] Verify responsive design

### For Bot:
- [ ] Bot token is valid
- [ ] Environment variables are set
- [ ] Test bot locally with `npm run bot:dev`
- [ ] All commands work properly

## 🔧 Environment Variables

Create `.env` file with:
```bash
# Required for Telegram Bot
TELEGRAM_BOT_TOKEN=your_bot_token_here

# Optional for Web App
VITE_APP_TITLE=ToolMate Teja
VITE_APP_DESCRIPTION=AI Tools Discovery Platform
```

## 🐛 Troubleshooting

### Common Issues:

1. **"Module not found" errors**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Bot not responding**
   - Check bot token is correct
   - Ensure bot is running
   - Check server logs

3. **Build failures**
   - Check Node.js version (use v16+)
   - Clear cache: `npm run build -- --force`

4. **Deployment issues**
   - Check all files are committed
   - Verify environment variables
   - Check deployment logs

## 📱 Testing Your Deployment

### Web App:
1. Open deployed URL
2. Test search functionality
3. Try category navigation
4. Check mobile responsiveness
5. Test dark/light mode toggle

### Bot:
1. Send `/start` to your bot
2. Test all menu options
3. Try search functionality
4. Test random tool feature
5. Verify all links work

## 🎯 Production Tips

1. **Use HTTPS** for web deployment
2. **Set up monitoring** for bot uptime
3. **Enable error logging** in production
4. **Use CDN** for faster loading
5. **Set up backup** for bot hosting

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section
2. Review deployment logs
3. Test locally first
4. Contact DARIPINENI TEJA via social media

---

**Created by DARIPINENI TEJA** 🌟