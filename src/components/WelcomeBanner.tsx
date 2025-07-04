import React from 'react';
import { Instagram, Youtube } from 'lucide-react';
import { getTotalStats } from '../data/aiTools';

interface WelcomeBannerProps {
  isDarkMode: boolean;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ isDarkMode }) => {
  const { totalTools, totalCategories } = getTotalStats();

  return (
    <div className={`relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            🤖 Welcome to the AI Tools Board!
          </h1>
          
          {/* Creator Name Section */}
          <div className="mb-8">
            <p className={`text-lg mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Created by
            </p>
            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 tracking-wide">
              DARIPINENI TEJA
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <div className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              📊 <span className="font-semibold text-blue-600">{totalTools}</span> AI tools across <span className="font-semibold text-purple-600">{totalCategories}</span> categories
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <div className={`text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              🌟 Follow Teja on Social Media:
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/aiwithteja?igsh=MWE2dW93dWVseDBrdg=="
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all hover:scale-110 transform shadow-lg hover:shadow-xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-500 hover:to-purple-500' 
                    : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-400 hover:to-purple-400'
                }`}
              >
                <Instagram className="h-6 w-6" />
                <span className="font-semibold">@aiwithteja</span>
              </a>
              <a
                href="https://youtube.com/@techwith_teja?si=QSRQw2-r9en8hd9j"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all hover:scale-110 transform shadow-lg hover:shadow-xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-500 hover:to-orange-500' 
                    : 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-400 hover:to-orange-400'
                }`}
              >
                <Youtube className="h-6 w-6" />
                <span className="font-semibold">TechWith Teja</span>
              </a>
            </div>
          </div>
          
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} animate-pulse`}>
            🎯 Choose a category to explore tools!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;