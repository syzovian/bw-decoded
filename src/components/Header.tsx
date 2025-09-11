import React from 'react';
import { Radio, Menu, X, Zap } from 'lucide-react';

type Page = 'home' | 'episodes' | 'hosts' | 'mission' | 'ai-education' | 'resources';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: 'home' | 'episodes' | 'hosts' | 'mission' | 'ai-education' | 'resources', scrollToId?: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'episodes' as Page, label: 'Episodes' },
    { id: 'hosts' as Page, label: 'Hosts' },
    { id: 'mission' as Page, label: 'Mission' },
    { id: 'resources' as Page, label: 'Resources' },
  ];

  return (
    <header className="relative z-50 bg-[#0b4d59]/90 backdrop-blur-xl border-b border-[#f6c453]/20">
      {/* Holographic accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f6c453] to-transparent opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center space-x-4 cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg group-hover:shadow-[#f6c453]/50 transition-all duration-300">
                <img 
                  src="/src/assets/Gemini_Generated_Image_xino18xino18xino (1).png" 
                  alt="Brainwaves Decoded Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#f6c453] rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#f0a04b] rounded-full opacity-60 animate-pulse delay-500"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#fefbe9] tracking-tight group-hover:text-[#f6c453] transition-colors">
                BRAINWAVES
              </h1>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-[#f6c453] rounded-full animate-pulse"></div>
                <p className="text-xs text-[#e1eedd] font-mono uppercase tracking-widest">DECODED</p>
                <div className="w-1 h-1 bg-[#f0a04b] rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  currentPage === item.id
                    ? 'text-[#0b4d59] bg-[#f6c453] shadow-lg shadow-[#f6c453]/30'
                    : 'text-[#e1eedd] hover:text-[#f6c453] hover:bg-[#f6c453]/10'
                }`}
              >
                {currentPage === item.id && (
                  <div className="absolute inset-0 bg-[#f6c453] rounded-lg opacity-20 animate-pulse"></div>
                )}
                <span className="relative z-10">{item.label}</span>
                {currentPage !== item.id && (
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#f6c453] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-lg text-[#e1eedd] hover:text-[#f6c453] hover:bg-[#f6c453]/10 transition-all duration-300 relative"
          >
            <div className="absolute inset-0 border border-[#f6c453]/30 rounded-lg opacity-0 hover:opacity-100 transition-opacity"></div>
            {isMenuOpen ? <X className="w-6 h-6 relative z-10" /> : <Menu className="w-6 h-6 relative z-10" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-[#f6c453]/20">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full px-4 py-4 rounded-lg text-left font-medium transition-all duration-300 relative group ${
                    currentPage === item.id
                      ? 'text-[#285A5A] bg-[#f6c453] shadow-lg'
                      : 'text-[#e1eedd] hover:text-[#f6c453] hover:bg-[#f6c453]/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <Zap className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}