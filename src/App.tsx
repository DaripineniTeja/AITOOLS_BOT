import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WelcomeBanner from './components/WelcomeBanner';
import CategoryGrid from './components/CategoryGrid';
import ToolsList from './components/ToolsList';
import HelpModal from './components/HelpModal';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showHelp, setShowHelp] = useState(false);

  // Initialize dark mode from system preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  // Apply dark mode to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSearchTerm(''); // Clear search when switching to category view
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSearchTerm(''); // Clear search when going back
  };

  return (
    <div className={`min-h-screen transition-colors ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        showHelp={showHelp}
        setShowHelp={setShowHelp}
      />
      
      {!selectedCategory && <WelcomeBanner isDarkMode={isDarkMode} />}
      
      {selectedCategory ? (
        <ToolsList
          isDarkMode={isDarkMode}
          category={selectedCategory}
          searchTerm={searchTerm}
          onBack={handleBackToCategories}
        />
      ) : (
        <CategoryGrid
          isDarkMode={isDarkMode}
          searchTerm={searchTerm}
          onCategoryClick={handleCategoryClick}
        />
      )}
      
      <HelpModal
        isDarkMode={isDarkMode}
        isOpen={showHelp}
        onClose={() => setShowHelp(false)}
      />
    </div>
  );
}

export default App;