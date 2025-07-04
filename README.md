# ToolMate Teja - AI Tools Board & Telegram Bot

🤖 **Created by DARIPINENI TEJA**

A comprehensive platform for discovering AI tools, available both as a web application and Telegram bot.

## 🌟 Features

### Web Application
- 🎨 Beautiful, responsive design with dark/light mode
- 📱 Mobile-friendly interface
- 🔍 Search functionality across tools and categories
- 📂 Organized categories with tool counts
- 🎯 Direct links to all AI tools
- 💫 Smooth animations and hover effects

### Telegram Bot
- 🤖 Interactive bot interface
- 📂 Browse tools by category
- 🔍 Search tools by name or category
- 🎲 Random tool discovery
- 📊 Statistics and tool counts
- 💬 Easy-to-use inline keyboards
- 🌐 Direct links to tools

## 🚀 Local Setup & Deployment

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### 1. Clone and Setup
```bash
# Clone the repository (if from Git)
git clone <your-repo-url>
cd toolmate-teja-bot

# Install dependencies
npm install
```

### 2. Environment Configuration
```bash
# Copy environment template
cp .env.example .env

# Edit .env file and add your bot token
# TELEGRAM_BOT_TOKEN=your_bot_token_here
```

### 3. Development

#### Web Application
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

#### Telegram Bot
```bash
# Run bot in development (with auto-restart)
npm run bot:dev

# Run bot in production
npm run bot
```

### 4. Production Deployment

#### Option 1: Netlify (Web App)
```bash
# Build the project
npm run build

# Deploy to Netlify
# 1. Install Netlify CLI: npm install -g netlify-cli
# 2. Login: netlify login
# 3. Deploy: netlify deploy --prod --dir=dist
```

#### Option 2: Vercel (Web App)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Option 3: Traditional Hosting
```bash
# Build the project
npm run build

# Upload the 'dist' folder to your hosting provider
# Point your domain to the dist/index.html file
```

### 5. Bot Deployment

#### Option 1: VPS/Cloud Server
```bash
# On your server
git clone <your-repo-url>
cd toolmate-teja-bot
npm install
npm run bot

# Use PM2 for process management
npm install -g pm2
pm2 start bot/index.js --name "toolmate-bot"
pm2 save
pm2 startup
```

#### Option 2: Heroku
```bash
# Install Heroku CLI
# Create Procfile in root directory:
echo "worker: node bot/index.js" > Procfile

# Deploy
heroku create your-app-name
heroku config:set TELEGRAM_BOT_TOKEN=your_token_here
git push heroku main
```

#### Option 3: Railway
```bash
# Create railway.json in root:
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "node bot/index.js"
  }
}

# Deploy via Railway dashboard or CLI
```

## 🤖 Telegram Bot Setup

### 1. Create Bot
1. Message [@BotFather](https://t.me/BotFather) on Telegram
2. Send `/newbot` command
3. Follow instructions to create your bot
4. Copy the bot token

### 2. Configure Environment
```bash
# Add to .env file
TELEGRAM_BOT_TOKEN=your_bot_token_here
```

### 3. Bot Commands
- `/start` - Welcome message and main menu
- `/help` - Help and usage instructions
- `/categories` - Browse all tool categories
- `/search <query>` - Search for specific tools
- `/random` - Get a random tool suggestion
- `/stats` - View platform statistics

## 📁 Project Structure

```
toolmate-teja-bot/
├── bot/                    # Telegram bot files
│   ├── data/
│   │   └── aiTools.js     # AI tools database
│   ├── utils/
│   │   ├── keyboards.js   # Bot keyboard layouts
│   │   └── messages.js    # Bot message templates
│   └── index.js           # Main bot file
├── src/                   # Web app source
│   ├── components/        # React components
│   ├── data/             # Shared data
│   └── App.tsx           # Main app component
├── dist/                 # Built web app
├── .env                  # Environment variables
└── package.json          # Dependencies and scripts
```

## 🛠️ Technology Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Bot**: Node.js + node-telegram-bot-api
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📊 Data

The platform includes **150+ AI tools** across **30+ categories**:
- 💼 Business & Productivity
- 🎨 Design & Content Creation
- 🧠 Data Analysis & Research
- 🧑‍💻 Marketing & Copywriting
- 🎮 Gaming & Game Development
- 👩‍⚕️ Healthcare & Wellness
- 🧑‍🏫 Education & Learning
- And many more...

## 🔧 Troubleshooting

### Common Issues

1. **Bot not responding**
   - Check if TELEGRAM_BOT_TOKEN is correctly set
   - Ensure bot is running: `npm run bot`
   - Check console for error messages

2. **Web app not loading**
   - Run `npm run build` to create production build
   - Check if all dependencies are installed: `npm install`

3. **Deployment issues**
   - Ensure all environment variables are set
   - Check build logs for errors
   - Verify Node.js version compatibility

### Environment Variables
```bash
# Required for bot
TELEGRAM_BOT_TOKEN=your_bot_token_here

# Optional for web app
VITE_APP_TITLE=ToolMate Teja
VITE_APP_DESCRIPTION=AI Tools Discovery Platform
```

## 🌟 Creator

**DARIPINENI TEJA**
- 📱 Instagram: [@aiwithteja](https://www.instagram.com/aiwithteja?igsh=MWE2dW93dWVseDBrdg==)
- 🎥 YouTube: [TechWith Teja](https://youtube.com/@techwith_teja?si=QSRQw2-r9en8hd9j)

## 📝 License

This project is created by DARIPINENI TEJA. Feel free to explore and learn from the code!

## 🤝 Contributing

This is a personal project by DARIPINENI TEJA. For suggestions or feedback, reach out through social media channels.

---

**Happy exploring with AI tools! 🚀**