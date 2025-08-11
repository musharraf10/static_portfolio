import React from 'react';
import { Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, changeTheme } = useTheme();

  const themes = [
    { name: 'light', icon: Sun, color: 'text-yellow-500' },
    { name: 'dark', icon: Moon, color: 'text-blue-400' },
    { name: 'teal', icon: Palette, color: 'text-teal-500' }
  ];

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
      {themes.map(({ name, icon: Icon, color }) => (
        <button
          key={name}
          onClick={() => changeTheme(name)}
          className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
            theme === name 
              ? 'bg-white/20 shadow-lg' 
              : 'hover:bg-white/10'
          }`}
        >
          <Icon className={`w-5 h-5 ${color}`} />
        </button>
      ))}
    </div>
  );
}

export default ThemeToggle;