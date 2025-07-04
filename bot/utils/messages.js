export const getWelcomeMessage = () => {
  return `🤖 *Welcome to ToolMate Teja Bot!*

🌟 *Created by DARIPINENI TEJA*

Your ultimate AI tools companion! I can help you discover and explore amazing AI tools across various categories.

🎯 *What I can do:*
• Browse AI tools by category
• Search for specific tools
• Get random tool suggestions
• Show detailed tool information
• Provide usage statistics

Choose an option below to get started! 👇`;
};

export const getHelpMessage = () => {
  return `❓ *Help & Commands*

🔍 *Search Tools:*
Type: \`/search <tool name>\`
Example: \`/search notion\`

🎲 *Random Tool:*
Use: \`/random\` or click the Random Tool button

📂 *Browse Categories:*
Click "Browse Categories" or use \`/categories\`

📊 *Statistics:*
Use: \`/stats\` to see total tools and categories

🆘 *Need Help:*
Use: \`/help\` anytime

💡 *Tips:*
• Use the inline keyboard buttons for easy navigation
• Search is case-insensitive
• Each tool includes a direct link to try it

🌟 *Follow DARIPINENI TEJA:*
📱 Instagram: @aiwithteja
🎥 YouTube: TechWith Teja

Happy exploring! 🚀`;
};

export const getStatsMessage = (totalTools, totalCategories) => {
  return `📊 *ToolMate Teja Statistics*

🤖 *Total AI Tools:* ${totalTools}
📂 *Categories Available:* ${totalCategories}

🌟 *Created by DARIPINENI TEJA*

This bot helps you discover the best AI tools across various industries and use cases. From productivity to creativity, we've got you covered!

🔍 Use /search to find specific tools
🎲 Use /random for tool discovery
📂 Browse categories to explore by type

Keep exploring and stay ahead with AI! 🚀`;
};

export const getCategoryMessage = (category, tools) => {
  const categoryName = category.name.replace(category.emoji, '').trim();
  
  return `${category.emoji} *${categoryName}*

📊 *${tools.length} tools available*

Choose a tool below to learn more and get the direct link:`;
};

export const getToolDetailMessage = (tool) => {
  const categoryName = tool.purpose.replace(tool.purpose.split(' ')[0], '').trim();
  
  return `🔧 *${tool.name}*

📂 *Category:* ${categoryName}
${tool.purpose.split(' ')[0]}

🌐 *Ready to try this tool?*
Click "Visit Tool" below to access it directly!

💡 *Tip:* Bookmark useful tools for quick access later.`;
};

export const getRandomToolMessage = (tool) => {
  const categoryName = tool.purpose.replace(tool.purpose.split(' ')[0], '').trim();
  
  return `🎲 *Random Tool Discovery!*

🔧 *${tool.name}*
📂 *Category:* ${categoryName}

🌟 *Why not give this tool a try?*
Click the link below to explore what it can do for you!

🎯 Want another random tool? Use /random again!`;
};

export const getSearchResultsMessage = (query, results) => {
  if (results.length === 0) {
    return `🔍 *Search Results for "${query}"*

❌ No tools found matching your search.

💡 *Try:*
• Different keywords
• Broader search terms
• Browse categories instead

Use /categories to explore all available tools!`;
  }

  let message = `🔍 *Search Results for "${query}"*\n\n`;
  message += `Found ${results.length} tool(s):\n\n`;
  
  results.slice(0, 10).forEach((tool, index) => {
    const categoryName = tool.purpose.replace(tool.purpose.split(' ')[0], '').trim();
    message += `${index + 1}. *${tool.name}*\n`;
    message += `   📂 ${categoryName}\n`;
    message += `   🔗 ${tool.link}\n\n`;
  });
  
  if (results.length > 10) {
    message += `... and ${results.length - 10} more tools.\n\n`;
    message += `💡 *Tip:* Use more specific search terms to narrow results.`;
  }
  
  return message;
};