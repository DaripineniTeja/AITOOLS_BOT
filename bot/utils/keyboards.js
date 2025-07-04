export const createCategoriesKeyboard = (categories) => {
  const keyboard = [];
  
  // Create rows of 2 buttons each
  for (let i = 0; i < categories.length; i += 2) {
    const row = [];
    row.push({
      text: categories[i].name,
      callback_data: `category_${i}`
    });
    
    if (i + 1 < categories.length) {
      row.push({
        text: categories[i + 1].name,
        callback_data: `category_${i + 1}`
      });
    }
    
    keyboard.push(row);
  }
  
  // Add back button
  keyboard.push([{
    text: '🏠 Main Menu',
    callback_data: 'main_menu'
  }]);
  
  return {
    inline_keyboard: keyboard
  };
};

export const createToolsKeyboard = (tools, categoryIndex) => {
  const keyboard = [];
  
  // Create rows of 1 button each for tools
  tools.forEach((tool, index) => {
    keyboard.push([{
      text: `🔗 ${tool.name}`,
      callback_data: `tool_${categoryIndex}_${index}`
    }]);
  });
  
  // Add navigation buttons
  keyboard.push([
    {
      text: '⬅️ Back to Categories',
      callback_data: 'categories'
    },
    {
      text: '🏠 Main Menu',
      callback_data: 'main_menu'
    }
  ]);
  
  return {
    inline_keyboard: keyboard
  };
};

export const createMainMenuKeyboard = () => {
  return {
    inline_keyboard: [
      [
        { text: '📂 Browse Categories', callback_data: 'categories' },
        { text: '🎲 Random Tool', callback_data: 'random' }
      ],
      [
        { text: '📊 Statistics', callback_data: 'stats' },
        { text: '❓ Help', callback_data: 'help' }
      ],
      [
        { text: '📱 Follow on Instagram', url: 'https://www.instagram.com/aiwithteja?igsh=MWE2dW93dWVseDBrdg==' },
        { text: '🎥 YouTube Channel', url: 'https://youtube.com/@techwith_teja?si=QSRQw2-r9en8hd9j' }
      ]
    ]
  };
};

export const createToolDetailKeyboard = (tool, categoryIndex, toolIndex) => {
  return {
    inline_keyboard: [
      [
        { text: '🌐 Visit Tool', url: tool.link }
      ],
      [
        { text: '⬅️ Back to Tools', callback_data: `category_${categoryIndex}` },
        { text: '🏠 Main Menu', callback_data: 'main_menu' }
      ]
    ]
  };
};