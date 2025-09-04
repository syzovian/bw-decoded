import React from 'react';
import { Twitter, Instagram, Youtube, Mail, Radio, Zap, Brain } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Mail, href: 'mailto:hello@brainwavesdecoded.com', label: 'Email' },
  ];

  return (
    <footer className="relative mt-24 bg-[#0b4d59] border-t border-[#f6c453]/20">
      {/* Holographic top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f6c453] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f6c453] to-[#f0a04b] rounded-lg flex items-center justify-center shadow-lg">
                  <Radio className="w-6 h-6 text-[#285A5A]" />
                  <Radio className="w-6 h-6 text-[#0b4d59]" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#f6c453] rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#fefbe9]">
                  BRAINWAVES
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-[#f6c453] rounded-full animate-pulse"></div>
                  <p className="text-sm text-[#f6c453] font-mono uppercase tracking-widest">DECODED</p>
                  <div className="w-1 h-1 bg-[#f0a04b] rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
            
            <p className="text-[#e1eedd] leading-relaxed max-w-md">
              Decoding the future of artificial intelligence, one conversation at a time. 
              Making complex AI concepts accessible and inspiring for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-[#f6c453] uppercase tracking-widest flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {['Latest Episodes', 'Meet the Hosts', 'Our Mission', 'Subscribe'].map((link, index) => (
                <li key={index} className="group">
                  <a href="#" className="text-[#e1eedd] hover:text-[#f6c453] transition-colors text-sm flex items-center group">
                    <div className="w-2 h-2 bg-[#f6c453]/50 rounded-full mr-3 group-hover:bg-[#f6c453] transition-colors"></div>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-[#f6c453] uppercase tracking-widest flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              Connect
            </h4>
            
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group p-3 bg-[#f6c453]/10 border border-[#f6c453]/30 rounded-lg text-[#e1eedd] hover:text-[#f6c453] hover:bg-[#f6c453]/20 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-[#f6c453]/20">
          <div className="text-center">
            <p className="text-[#e1eedd] text-xs font-mono">
              hello@brainwaves.com
            </p>
            <div className="flex items-center space-x-4 text-[#e1eedd]/60 text-xs font-mono">
              <span>POWERED BY AI</span>
              <div className="w-1 h-1 bg-[#f6c453] rounded-full animate-pulse"></div>
              <span>BUILT FOR HUMANS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}