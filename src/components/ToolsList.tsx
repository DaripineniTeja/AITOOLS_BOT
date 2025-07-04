import React from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { aiTools } from '../data/aiTools';

interface ToolsListProps {
  isDarkMode: boolean;
  category: string;
  searchTerm: string;
  onBack: () => void;
}

const ToolsList: React.FC<ToolsListProps> = ({ isDarkMode, category, searchTerm, onBack }) => {
  const categoryTools = aiTools.filter(tool => tool.purpose === category);
  
  const filteredTools = categoryTools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoryEmoji = category.split(' ')[0];
  const categoryName = category.replace(categoryEmoji, '').trim();

  return (
    <div className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              isDarkMode 
                ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Categories</span>
          </button>
        </div>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{categoryEmoji}</div>
          <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {categoryName}
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {filteredTools.length} tools available
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <div
              key={tool.name}
              className={`group p-6 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
                  : 'bg-white border-gray-200 hover:border-blue-500 hover:bg-blue-50'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {tool.name}
                </h3>
                <ExternalLink className={`h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {tool.purpose}
              </p>
              
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isDarkMode 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <span>Try Tool</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        
        {filteredTools.length === 0 && (
          <div className={`text-center py-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p className="text-xl">No tools found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolsList;