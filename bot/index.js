import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import { 
  aiTools, 
  getCategories, 
  getTotalStats, 
  searchTools, 
  getToolsByCategory, 
  getRandomTool 
} from './data/aiTools.js';
import {
  createCategoriesKeyboard,
  createToolsKeyboard,
  createMainMenuKeyboard,
  createToolDetailKeyboard
} from './utils/keyboards.js';
import {
  getWelcomeMessage,
  getHelpMessage,
  getStatsMessage,
  getCategoryMessage,
  getToolDetailMessage,
  getRandomToolMessage,
  getSearchResultsMessage
} from './utils/messages.js';

// Load environment variables
dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  console.error('❌ TELEGRAM_BOT_TOKEN is not set in environment variables');
  console.log('📝 Please create a .env file and add your bot token:');
  console.log('   TELEGRAM_BOT_TOKEN=your_bot_token_here');
  console.log('\n🤖 To get a bot token:');
  console.log('   1. Message @BotFather on Telegram');
  console.log('   2. Send /newbot command');
  console.log('   3. Follow the instructions');
  console.log('   4. Copy the token to your .env file');
  process.exit(1);
}

// Create bot instance
const bot = new TelegramBot(token, { polling: true });

// Store categories for quick access
const categories = getCategories();
const { totalTools, totalCategories } = getTotalStats();

console.log('🤖 ToolMate Teja Bot is starting...');
console.log(`📊 Loaded ${totalTools} tools across ${totalCategories} categories`);

// Handle /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const welcomeMessage = getWelcomeMessage();
  
  bot.sendMessage(chatId, welcomeMessage, {
    parse_mode: 'Markdown',
    reply_markup: createMainMenuKeyboard()
  });
});

// Handle /help command
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  const helpMessage = getHelpMessage();
  
  bot.sendMessage(chatId, helpMessage, {
    parse_mode: 'Markdown',
    reply_markup: createMainMenuKeyboard()
  });
});

// Handle /stats command
bot.onText(/\/stats/, (msg) => {
  const chatId = msg.chat.id;
  const statsMessage = getStatsMessage(totalTools, totalCategories);
  
  bot.sendMessage(chatId, statsMessage, {
    parse_mode: 'Markdown',
    reply_markup: createMainMenuKeyboard()
  });
});

// Handle /categories command
bot.onText(/\/categories/, (msg) => {
  const chatId = msg.chat.id;
  
  bot.sendMessage(chatId, '📂 *Choose a category to explore:*', {
    parse_mode: 'Markdown',
    reply_markup: createCategoriesKeyboard(categories)
  });
});

// Handle /random command
bot.onText(/\/random/, (msg) => {
  const chatId = msg.chat.id;
  const randomTool = getRandomTool();
  const message = getRandomToolMessage(randomTool);
  
  bot.sendMessage(chatId, message, {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [{ text: '🌐 Try This Tool', url: randomTool.link }],
        [
          { text: '🎲 Another Random Tool', callback_data: 'random' },
          { text: '🏠 Main Menu', callback_data: 'main_menu' }
        ]
      ]
    }
  });
});

// Handle /search command
bot.onText(/\/search (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const query = match[1];
  const results = searchTools(query);
  const message = getSearchResultsMessage(query, results);
  
  bot.sendMessage(chatId, message, {
    parse_mode: 'Markdown',
    reply_markup: createMainMenuKeyboard()
  });
});

// Handle callback queries (button presses)
bot.on('callback_query', (callbackQuery) => {
  const message = callbackQuery.message;
  const data = callbackQuery.data;
  const chatId = message.chat.id;
  const messageId = message.message_id;

  // Answer callback query to remove loading state
  bot.answerCallbackQuery(callbackQuery.id);

  if (data === 'main_menu') {
    const welcomeMessage = getWelcomeMessage();
    bot.editMessageText(welcomeMessage, {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: 'Markdown',
      reply_markup: createMainMenuKeyboard()
    });
  }
  
  else if (data === 'categories') {
    bot.editMessageText('📂 *Choose a category to explore:*', {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: 'Markdown',
      reply_markup: createCategoriesKeyboard(categories)
    });
  }
  
  else if (data === 'random') {
    const randomTool = getRandomTool();
    const message = getRandomToolMessage(randomTool);
    
    bot.editMessageText(message, {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [{ text: '🌐 Try This Tool', url: randomTool.link }],
          [
            { text: '🎲 Another Random Tool', callback_data: 'random' },
            { text: '🏠 Main Menu', callback_data: 'main_menu' }
          ]
        ]
      }
    });
  }
  
  else if (data === 'stats') {
    const statsMessage = getStatsMessage(totalTools, totalCategories);
    bot.editMessageText(statsMessage, {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: 'Markdown',
      reply_markup: createMainMenuKeyboard()
    });
  }
  
  else if (data === 'help') {
    const helpMessage = getHelpMessage();
    bot.editMessageText(helpMessage, {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: 'Markdown',
      reply_markup: createMainMenuKeyboard()
    });
  }
  
  else if (data.startsWith('category_')) {
    const categoryIndex = parseInt(data.split('_')[1]);
    const category = categories[categoryIndex];
    const tools = getToolsByCategory(category.name);
    const message = getCategoryMessage(category, tools);
    
    bot.editMessageText(message, {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: 'Markdown',
      reply_markup: createToolsKeyboard(tools, categoryIndex)
    });
  }
  
  else if (data.startsWith('tool_')) {
    const parts = data.split('_');
    const categoryIndex = parseInt(parts[1]);
    const toolIndex = parseInt(parts[2]);
    const category = categories[categoryIndex];
    const tools = getToolsByCategory(category.name);
    const tool = tools[toolIndex];
    const message = getToolDetailMessage(tool);
    
    bot.editMessageText(message, {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: 'Markdown',
      reply_markup: createToolDetailKeyboard(tool, categoryIndex, toolIndex)
    });
  }
});

// Handle text messages (for search without command)
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  
  // Skip if it's a command
  if (text && text.startsWith('/')) {
    return;
  }
  
  // If it's regular text, treat as search
  if (text && text.length > 2) {
    const results = searchTools(text);
    const message = getSearchResultsMessage(text, results);
    
    bot.sendMessage(chatId, message, {
      parse_mode: 'Markdown',
      reply_markup: createMainMenuKeyboard()
    });
  }
});

// Error handling
bot.on('error', (error) => {
  console.error('❌ Bot error:', error);
});

bot.on('polling_error', (error) => {
  console.error('❌ Polling error:', error);
});

console.log('✅ ToolMate Teja Bot is running!');
console.log('🔍 Try these commands:');
console.log('   /start - Start the bot');
console.log('   /help - Get help');
console.log('   /categories - Browse categories');
console.log('   /search <query> - Search tools');
console.log('   /random - Get random tool');
console.log('   /stats - View statistics');