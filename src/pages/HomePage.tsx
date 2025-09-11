import React from 'react';
import { Play, ArrowRight, Mic, Users, Target, Zap, Brain, Radio, ChevronRight, Activity, Clock, Calendar, MoreHorizontal, X, Lightbulb, ExternalLink } from 'lucide-react';
import { Database, FileText, Shield } from 'lucide-react';
import SpotifyEpisodeDisplay from '../components/SpotifyEpisodeDisplay';

interface HomePageProps {
  onNavigate: (page: 'episodes' | 'hosts' | 'mission' | 'ai-education' | 'resources', scrollToId?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [expandedEpisode, setExpandedEpisode] = React.useState<string | null>(null);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center relative">
            {/* Holographic display frame */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-[800px] h-[600px] border-2 border-[#f6c453] rounded-3xl cyber-frame"></div>
            </div>
            
            <div className="relative z-10 max-w-5xl mx-auto">
              {/* Status indicator */}
              <div className="flex items-center justify-center space-x-3 mb-8">
                <div className="w-2 h-2 bg-[#f6c453] rounded-full animate-pulse"></div>
                <span className="text-[#f6c453] text-sm font-mono uppercase tracking-widest">SYSTEM ONLINE</span>
                <div className="w-2 h-2 bg-[#f6c453] rounded-full animate-pulse delay-500"></div>
              </div>
              
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold text-[#fefbe9] mb-8 leading-tight">
                <span className="block">BRAINWAVES:</span>
                <span className="block text-[#f6c453] cyber-glow text-6xl md:text-7xl xl:text-8xl">DECODED</span>
              </h1>
              
              <div className="max-w-3xl mx-auto mb-12 px-4 sm:px-0">
                <p className="text-xl md:text-2xl text-[#e1eedd] leading-relaxed font-light px-2 sm:px-0">
                  Where artificial intelligence meets human understanding.
                </p>
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#f6c453] to-transparent mx-auto mt-6"></div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <button 
                  onClick={() => onNavigate('episodes', 'featured-episode')}
                  className="group relative bg-gradient-to-r from-[#f6c453] to-[#f0a04b] text-[#0b4d59] px-6 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#f6c453]/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative flex items-center space-x-3">
                    <Play className="w-6 h-6" />
                    <span>INITIALIZE PLAYBACK</span>
                  </div>
                </button>
                
                <button 
                  onClick={() => onNavigate('mission')}
                  className="group relative text-[#f6c453] px-6 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg border-2 border-[#f6c453]/50 hover:border-[#f6c453] hover:bg-[#f6c453]/10 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#f6c453]/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative flex items-center space-x-3">
                    <span>DECODE MISSION</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>

              {/* AI Topics Ticker */}
              <div className="hidden sm:block relative bg-[#183a1d]/50 backdrop-blur-sm border border-[#f6c453]/30 rounded-2xl p-4 md:p-6 max-w-4xl mx-4 md:mx-auto">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f6c453] to-transparent"></div>
                <div className="flex items-center justify-center space-x-4 md:space-x-8 text-xs md:text-sm text-[#e1eedd] font-mono flex-wrap md:flex-nowrap gap-y-2">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-[#f6c453]" />
                    <span>NEURAL.NETWORKS</span>
                  </div>
                  <div className="hidden md:block w-px h-4 bg-[#f6c453]/50"></div>
                  <span>MACHINE.LEARNING</span>
                  <div className="hidden md:block w-px h-4 bg-[#f6c453]/50"></div>
                  <span>AI.ETHICS</span>
                  <div className="hidden md:block w-px h-4 bg-[#f6c453]/50"></div>
                  <span>FUTURE.TECH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episode Terminal */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-teal-900/80 backdrop-blur-sm border border-[#f6c453]/30 rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-[#f6c453]/10 border-b border-[#f6c453]/30 px-6 py-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-[#f6c453] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#f0a04b] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#e1eedd] rounded-full"></div>
                  </div>
                  <span className="text-[#f6c453] font-mono text-sm">LATEST_EPISODE.exe</span>
                </div>
                <div className="hidden sm:block text-[#e1eedd] font-mono text-xs sm:text-right">STATUS: READY</div>
              </div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-8 md:p-12">
              <div className="space-y-8">
                {/* Episode Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-2 h-2 bg-[#f6c453] rounded-full animate-pulse"></div>
                    <span className="text-[#f6c453] font-mono text-sm uppercase tracking-wider">EPISODE.002</span>
                  </div>
                  
                  {/* Episode Display - Mobile/Tablet */}
                  <div className="md:hidden mx-auto">
                    <SpotifyEpisodeDisplay 
                      episodeUrl="https://open.spotify.com/episode/6avJ9KVTcTknesf1FWc5Ok?si=8a140799fcb8470a"
                      className="w-48 h-48"
                    />
                  </div>
                </div>
                
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-3 lg:col-span-2 space-y-6">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#fefbe9] leading-tight">
                      How We Got AI in Education All Wrong (And How to Do Better)
                    </h3>
                    
                    <p className="text-[#e1eedd] leading-relaxed">
                      <span className="sm:hidden line-clamp-2">
                        In this episode, we break down the problem of using AI detection software in colleges and suggest a new approach toward AI that would truly revolutionize education.
                      </span>
                      <span className="hidden sm:block">
                        In this episode, we break down the problem of using AI detection software in colleges and suggest a new approach toward AI that would truly revolutionize education. Assisting us in this important discussion are Kylie and David, two brilliant biology students from Evan's class in which he teaches students to ethically use AI for scientific writing.
                      </span>
                    </p>
                    
                    {/* READ_MORE button for small phone screens only */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setExpandedEpisode('featured');
                      }}
                      className="sm:hidden group/expand flex items-center space-x-2 text-[#f6c453] hover:text-[#f0a04b] transition-colors text-xs font-mono mt-2"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                      <span>READ_MORE</span>
                    </button>
                    
                    {/* Episode Meta and Action - Medium screens and up */}
                    <div className="hidden sm:flex flex-col gap-6 pt-4">
                      <div className="flex items-center space-x-8 text-[#e1eedd]/70 font-mono text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-[#f6c453]" />
                          <span>60:00</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-[#f0a04b]" />
                          <span>2025.09.04</span>
                        </div>
                      </div>
                
                      <a
                        href="https://open.spotify.com/episode/6avJ9KVTcTknesf1FWc5Ok?si=CO92fMC-Q_yuATeexR4pGQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-gradient-to-r from-[#f6c453] to-[#f0a04b] text-teal-900 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 overflow-hidden inline-flex items-center space-x-3"
                      >
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <div className="relative flex items-center space-x-3">
                          <Play className="w-5 h-5" />
                          <span>EXECUTE PLAYBACK</span>
                        </div>
                      </a>
                    </div>
                    
                    {/* Episode Meta and Action - Mobile only */}
                    <div className="sm:hidden flex flex-col gap-4 pt-4">
                      <div className="flex items-center justify-center space-x-6 text-[#e1eedd]/70 font-mono text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-[#f6c453]" />
                          <span>60:00</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-[#f0a04b]" />
                          <span>2025.09.04</span>
                        </div>
                      </div>
                
                      <div className="flex justify-center">
                        <a
                          href="https://open.spotify.com/episode/6avJ9KVTcTknesf1FWc5Ok?si=CO92fMC-Q_yuATeexR4pGQ"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative bg-gradient-to-r from-[#f6c453] to-[#f0a04b] text-teal-900 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 overflow-hidden inline-flex items-center space-x-2"
                        >
                          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                          <div className="relative flex items-center space-x-2">
                            <Play className="w-4 h-4" />
                            <span>EXECUTE PLAYBACK</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Episode Display - Medium screens sidebar and large screens */}
                  <div className="hidden md:flex md:col-span-1 lg:col-span-1 md:items-start lg:items-center md:justify-start lg:justify-center">
                    <SpotifyEpisodeDisplay 
                      episodeUrl="https://open.spotify.com/episode/6avJ9KVTcTknesf1FWc5Ok?si=8a140799fcb8470a"
                      className="w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Modules */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: 'EPISODES',
                subtitle: 'Archive Access',
                description: 'Dive into our comprehensive library of AI discussions, insights, and stories.',
                action: () => onNavigate('episodes'),
                accent: '#f6c453',
                stats: '2 ENTRIES'
              },
              {
                icon: Users,
                title: 'HOSTS',
                subtitle: 'System Operators',
                description: 'Meet Elvis and Evan, your guides through the complex landscape of artificial intelligence.',
                action: () => onNavigate('hosts'),
                accent: '#f0a04b',
                stats: '2 OPERATORS'
              },
              {
                icon: Target,
                title: 'MISSION',
                subtitle: 'Core Directive',
                description: 'Discover our purpose: making AI accessible, understandable, and inspiring for all.',
                action: () => onNavigate('mission'),
                accent: '#fefbe9',
                stats: 'PRIME OBJECTIVE'
              }
            ].map((module, index) => (
              <div
                key={index}
                onClick={module.action}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-white/20 overflow-hidden shadow-xl"
              >
                {/* Scanning line effect */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f6c453] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-xl border-2 flex items-center justify-center" 
                         style={{ borderColor: module.accent, backgroundColor: `${module.accent}20` }}>
                      <module.icon className="w-8 h-8" style={{ color: module.accent }} />
                    </div>
                    <div className="text-xs font-mono px-3 py-1 rounded-full border" 
                         style={{ borderColor: `${module.accent}50`, color: module.accent, backgroundColor: `${module.accent}10` }}>
                      {module.stats}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h3 className="text-2xl font-bold text-[#fefbe9] group-hover:text-[#f6c453] transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-sm font-mono uppercase tracking-widest" style={{ color: module.accent }}>
                      {module.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-[#e1eedd] leading-relaxed mb-8">
                    {module.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm font-mono" style={{ color: module.accent }}>
                      <span>ACCESS</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#f6c453] group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topic Request Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#f6c453] to-[#f0a04b] backdrop-blur-xl rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl animate-heartbeat border border-white/20 hover:border-white/30 transition-all duration-500">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-[#0b4d59]/30 rounded-full animate-spin-slow"></div>
              <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-[#0b4d59]/30 rounded-full animate-spin-slow-reverse"></div>
            </div>
            
            <div className="relative z-10 text-center space-y-8">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-2 h-2 bg-[#0b4d59] rounded-full animate-pulse"></div>
                <span className="text-[#0b4d59] font-mono text-sm uppercase tracking-wider font-bold">TOPIC_REQUEST_PROTOCOL</span>
                <div className="w-2 h-2 bg-[#0b4d59] rounded-full animate-pulse delay-500"></div>
              </div>
              
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#0b4d59]/20 border border-[#0b4d59]/50 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Lightbulb className="w-8 h-8 text-[#0b4d59]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#0b4d59]">
                  SHAPE THE <span className="text-[#0b4d59] font-black">FUTURE</span>
                </h3>
              </div>
              
              <p className="text-[#0b4d59]/80 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
                Have an AI topic you're curious about? Want us to decode a specific technology or explore 
                an emerging trend? Submit your ideas and help shape our upcoming episodes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScqdIm3Md6HbugDeZM0a7oC2vy-5JZ7TsbKwdwR-V2jGIA65Q/viewform?usp=sharing&ouid=100335399487771550336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-[#0b4d59] text-[#f6c453] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-[#0b4d59]/90 overflow-hidden inline-flex items-center space-x-3 border-2 border-[#0b4d59]/20 hover:border-[#0b4d59] shadow-lg"
                >
                  <div className="absolute inset-0 bg-[#f6c453]/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative flex items-center space-x-3">
                    <Lightbulb className="w-5 h-5" />
                    <span>SUBMIT TOPIC REQUEST</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
                
                <div className="flex items-center space-x-4 text-[#0b4d59]/70 font-mono text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0b4d59] rounded-full animate-pulse"></div>
                    <span>ANONYMOUS</span>
                  </div>
                  <div className="w-px h-4 bg-[#0b4d59]/50"></div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0b4d59] rounded-full animate-pulse delay-300"></div>
                    <span>QUICK FORM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Topics Matrix */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#fefbe9] mb-4">
              DECODING <span className="text-[#f6c453] cyber-glow">MATRIX</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#f6c453] to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'AI.IN.EDUCATION', code: 'AE01', clickable: true, action: () => onNavigate('ai-education') },
              { name: 'UNLOCKS.SOON', code: 'US02', clickable: false },
              { name: 'UNLOCKS.SOON', code: 'US03', clickable: false },
              { name: 'UNLOCKS.SOON', code: 'US04', clickable: false },
              { name: 'UNLOCKS.SOON', code: 'US05', clickable: false },
              { name: 'UNLOCKS.SOON', code: 'US06', clickable: false }
            ].map((topic, index) => (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center transition-all duration-300 overflow-hidden shadow-lg ${
                  topic.clickable 
                    ? 'hover:border-[#f6c453] hover:bg-white/10 cursor-pointer hover:scale-105' 
                    : 'opacity-60 cursor-not-allowed'
                }`}
                onClick={topic.clickable ? topic.action : undefined}
              >
                {topic.clickable && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f6c453] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                )}
                
                <div className="relative z-10">
                  <div className={`text-xs font-mono text-[#f6c453] mb-2 transition-opacity ${
                    topic.clickable ? 'opacity-60 group-hover:opacity-100' : 'opacity-40'
                  }`}>
                    {topic.code}
                  </div>
                  <div className={`text-xs font-bold transition-colors ${
                    topic.clickable 
                      ? 'text-[#fefbe9] group-hover:text-[#f6c453]' 
                      : 'text-[#fefbe9]/60'
                  }`}>
                    {topic.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Vault Access Terminal */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div 
            onClick={() => onNavigate('resources')}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-white/20 overflow-hidden shadow-xl"
          >
            {/* Scanning line effect */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f6c453] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="relative z-10 text-center space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-2 h-2 bg-[#f6c453] rounded-full animate-pulse"></div>
                <span className="text-[#f6c453] font-mono text-sm uppercase tracking-wider">KNOWLEDGE_VAULT</span>
                <div className="w-2 h-2 bg-[#f6c453] rounded-full animate-pulse delay-500"></div>
              </div>
              
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#f6c453]/20 to-[#f0a04b]/20 border border-[#f6c453]/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-[#f6c453]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#fefbe9] group-hover:text-[#f6c453] transition-colors">
                  <span className="text-3xl md:text-4xl">EDUCATIONAL RESOURCES & BROCHURES</span>
                </h3>
              </div>
              
              <p className="text-[#e1eedd] max-w-2xl mx-auto leading-relaxed">
                Download curated brochures and educational materials exploring 
                AI implementation in academic environments & more.
              </p>
              
              <div className="flex items-center justify-center space-x-4 xs:space-x-6 sm:space-x-8 text-[#e1eedd]/70 font-mono text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-[#f6c453]" />
                  <span className="text-xs sm:text-sm">3 RESOURCES</span>
                </div>
                <div className="w-px h-4 bg-[#f6c453]/50"></div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-[#f0a04b]" />
                  <span className="text-xs sm:text-sm">FREE ACCESS</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-2 text-sm font-mono text-[#f6c453] group-hover:text-[#f0a04b] transition-colors">
                  <span>INITIALIZE ACCESS</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center">
              <div className="flex flex-col justify-between h-28 md:h-24 flex-1">
                <div className="text-2xl font-bold text-[#f6c453] font-mono">KTSW</div>
                <div className="text-xs font-mono text-[#e1eedd] uppercase tracking-wider leading-tight flex-1 flex items-center justify-center mb-3 md:mb-0">Official Podcast of Texas State University Radio Station</div>
                <div className="w-full h-1 bg-[#f6c453]/20 rounded-full mt-2 md:mt-0">
                  <div className="w-full h-full bg-[#f6c453] rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="flex flex-col justify-between h-28 md:h-24 flex-1">
                <div className="text-3xl font-bold text-[#f0a04b] font-mono">2</div>
                <div className="text-xs font-mono text-[#e1eedd] uppercase tracking-wider flex-1 flex items-center justify-center mb-3 md:mb-0">AI-Enhanced Classes Taught</div>
                <div className="w-full h-1 bg-[#f0a04b]/20 rounded-full mt-2 md:mt-0">
                  <div className="w-4/5 h-full bg-[#f0a04b] rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
              
              <div className="flex flex-col justify-between h-28 md:h-24 flex-1">
                <div className="text-2xl font-bold text-[#fefbe9] font-mono">PENDING</div>
                <div className="text-xs font-mono text-[#e1eedd] uppercase tracking-wider flex-1 flex items-center justify-center mb-3 md:mb-0">Community Feedback & Rating System</div>
                <div className="flex justify-center space-x-1 mt-2 md:mt-0">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-[#fefbe9]/30 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Modal */}
      {expandedEpisode && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0b4d59]/95 backdrop-blur-sm border border-[#f6c453]/30 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-[#f6c453]/10 border-b border-[#f6c453]/30 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-[#f6c453] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#f0a04b] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#e1eedd] rounded-full"></div>
                  </div>
                  <span className="text-[#f6c453] font-mono text-sm">EPISODE_DESCRIPTION.txt</span>
                </div>
                <button
                  onClick={() => setExpandedEpisode(null)}
                  className="text-[#e1eedd] hover:text-[#f6c453] transition-colors p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
              <div className="space-y-6">
                <p className="text-[#e1eedd] leading-relaxed text-sm">
                  In this episode, we break down the problem of using AI detection software in colleges and suggest a new approach toward AI that would truly revolutionize education. Assisting us in this important discussion are Kylie and David, two brilliant biology student from Evan's class in which he teaches students to ethically use AI for scientific writing.
                </p>
                
                <div className="flex justify-center pt-2">
                  <a
                    href="https://open.spotify.com/episode/6avJ9KVTcTknesf1FWc5Ok?si=CO92fMC-Q_yuATeexR4pGQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-r from-[#f6c453] to-[#f0a04b] text-[#0b4d59] px-8 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 overflow-hidden inline-flex items-center space-x-2"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <div className="relative flex items-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>PLAY</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}