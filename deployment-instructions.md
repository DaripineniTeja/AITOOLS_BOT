# 🚀 Telegram Bot Deployment Guide

## Quick Deployment Options

### Option 1: Railway (Recommended - Free & Easy)

1. **Go to [Railway.app](https://railway.app)**
2. **Sign up/Login** with GitHub
3. **Click "New Project"**
4. **Select "Deploy from GitHub repo"**
5. **Connect your repository**
6. **Add Environment Variable**:
   - Key: `TELEGRAM_BOT_TOKEN`
   - Value: `7080911524:AAG_fJiu4n_o99xyD4bi6SIbpXKQtDfGoPw`
7. **Deploy automatically!**

### Option 2: Render (Free Tier Available)

1. **Go to [Render.com](https://render.com)**
2. **Sign up/Login**
3. **Click "New +" → "Web Service"**
4. **Connect GitHub repository**
5. **Settings**:
   - Build Command: `npm install`
   - Start Command: `node bot/index.js`
6. **Add Environment Variable**:
   - `TELEGRAM_BOT_TOKEN=7080911524:AAG_fJiu4n_o99xyD4bi6SIbpXKQtDfGoPw`
7. **Deploy**

### Option 3: Heroku

```bash
# Install Heroku CLI first
heroku login
heroku create toolmate-teja-bot

# Set environment variable
heroku config:set TELEGRAM_BOT_TOKEN=7080911524:AAG_fJiu4n_o99xyD4bi6SIbpXKQtDfGoPw

# Deploy
git add .
git commit -m "Deploy bot"
git push heroku main
```

### Option 4: DigitalOcean/VPS

```bash
# On your server
git clone <your-repo-url>
cd toolmate-teja-bot
npm install

# Set environment variable
export TELEGRAM_BOT_TOKEN="7080911524:AAG_fJiu4n_o99xyD4bi6SIbpXKQtDfGoPw"

# Install PM2 for process management
npm install -g pm2

# Start bot with PM2
pm2 start bot/index.js --name "toolmate-bot"
pm2 save
pm2 startup
```

### Option 5: Docker Deployment

```bash
# Build Docker image
docker build -t toolmate-teja-bot .

# Run container
docker run -d \
  --name toolmate-bot \
  --restart unless-stopped \
  -e TELEGRAM_BOT_TOKEN=7080911524:AAG_fJiu4n_o99xyD4bi6SIbpXKQtDfGoPw \
  toolmate-teja-bot
```

## 🔧 Environment Variables Required

For all deployment platforms, you need:

```
TELEGRAM_BOT_TOKEN=7080911524:AAG_fJiu4n_o99xyD4bi6SIbpXKQtDfGoPw
NODE_ENV=production
```

## ✅ Deployment Checklist

- [ ] Choose deployment platform
- [ ] Set environment variables
- [ ] Deploy the application
- [ ] Test bot on Telegram
- [ ] Monitor logs for errors
- [ ] Set up monitoring/alerts (optional)

## 🎯 Recommended: Railway Deployment

**Railway is the easiest option:**

1. **Zero configuration needed**
2. **Automatic deployments from GitHub**
3. **Free tier available**
4. **Built-in monitoring**
5. **Easy environment variable management**

## 📱 Testing Your Deployed Bot

Once deployed:

1. **Find your bot on Telegram**
2. **Send `/start` command**
3. **Test all features**:
   - Browse categories
   - Search tools
   - Random tool discovery
   - Social media links

## 🔍 Monitoring & Logs

Most platforms provide:
- **Real-time logs**
- **Error monitoring**
- **Uptime tracking**
- **Resource usage stats**

## 🆘 Troubleshooting

**Bot not responding?**
- Check environment variables are set correctly
- Verify bot token is valid
- Check deployment logs for errors
- Ensure the service is running

**Common Issues:**
- Wrong bot token format
- Missing environment variables
- Port configuration (not needed for bots)
- Memory/resource limits

---

**Your bot will be live 24/7 once deployed! 🚀**