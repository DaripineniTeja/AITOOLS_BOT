import React from 'react';
import { getCategories } from '../data/aiTools';

interface CategoryGridProps {
  isDarkMode: boolean;
  searchTerm: string;
  onCategoryClick: (category: string) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ isDarkMode, searchTerm, onCategoryClick }) => {
  const categories = getCategories();
  
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="categories" className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Explore AI Tools by Category
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <div
              key={category.name}
              onClick={() => onCategoryClick(category.name)}
              className={`group cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-500 hover:bg-gray-750' 
                  : 'bg-white border-gray-200 hover:border-blue-500 hover:bg-blue-50'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl transform group-hover:scale-110 transition-transform">
                    {category.emoji}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {category.name.replace(category.emoji, '').trim()}
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {category.count} tools
                    </p>
                  </div>
                </div>
                <div className={`text-2xl opacity-0 group-hover:opacity-100 transition-opacity ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredCategories.length === 0 && (
          <div className={`text-center py-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p className="text-xl">No categories found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryGrid;