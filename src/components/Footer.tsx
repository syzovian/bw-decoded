import React from 'react';
import { Youtube, Mail, Radio, Zap, Brain } from 'lucide-react';

// X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// Discord icon component
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
  </svg>
);
interface FooterProps {
  onNavigate?: (page: 'episodes' | 'hosts' | 'mission', scrollToId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    { icon: Youtube, href: 'https://www.youtube.com/@Brainwaves.Decoded', label: 'YouTube' },
    { icon: Mail, href: 'mailto:elvis@brainwaves-decoded.com', label: 'Email' },
    { icon: DiscordIcon, href: 'https://discord.gg/3SuuXk4uxa', label: 'Discord' },
    { icon: XIcon, href: '#', label: 'X (Twitter)', disabled: true },
  ];

  const navigationLinks = [
    { label: 'Latest Episodes', action: () => onNavigate?.('episodes') },
    { label: 'Meet the Hosts', action: () => onNavigate?.('hosts') },
    { label: 'Our Mission', action: () => onNavigate?.('mission') },
    { label: 'Subscribe', href: 'https://open.spotify.com/show/1LtTqIMDNamYiBpYEO1pbE' },
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
                <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/Gemini_Generated_Image_xino18xino18xino (1).png" 
                    alt="Brainwaves Decoded Logo" 
                    className="w-full h-full object-cover"
                  />
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
              {navigationLinks.map((link, index) => (
                <li key={index} className="group">
                  {link.href ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e1eedd] hover:text-[#f6c453] transition-colors text-sm flex items-center group cursor-pointer"
                    >
                      <div className="w-2 h-2 bg-[#f6c453]/50 rounded-full mr-3 group-hover:bg-[#f6c453] transition-colors"></div>
                      {link.label}
                    </a>
                  ) : (
                    <button 
                      onClick={link.action}
                      className="text-[#e1eedd] hover:text-[#f6c453] transition-colors text-sm flex items-center group cursor-pointer"
                    >
                      <div className="w-2 h-2 bg-[#f6c453]/50 rounded-full mr-3 group-hover:bg-[#f6c453] transition-colors"></div>
                      {link.label}
                    </button>
                  )}
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
                  className={`group p-3 border rounded-lg flex items-center justify-center transition-all duration-300 ${
                    social.disabled 
                      ? 'bg-[#f6c453]/5 border-[#f6c453]/10 text-[#e1eedd]/40 cursor-default' 
                      : 'bg-[#f6c453]/10 border-[#f6c453]/30 text-[#e1eedd] hover:text-[#f6c453] hover:bg-[#f6c453]/20 hover:scale-105'
                  }`}
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
