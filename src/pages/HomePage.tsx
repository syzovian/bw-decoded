import React from 'react';
import { Play, ArrowRight, Mic, Users, Target, Zap, Brain, Radio, ChevronRight, Activity } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: 'episodes' | 'hosts' | 'mission') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
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
                <span className="block text-[#f6c453] cyber-glow">DECODEDE</span>
              </h1>
              
              <div className="max-w-3xl mx-auto mb-12">
                <p className="text-xl md:text-2xl text-[#e1eedd] leading-relaxed font-light">
                  Where artificial intelligence meets human understanding.
                </p>
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#f6c453] to-transparent mx-auto mt-6"></div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <button 
                  onClick={() => onNavigate('episodes')}
                  className="group relative bg-gradient-to-r from-[#f6c453] to-[#f0a04b] text-[#0b4d59] px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#f6c453]/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative flex items-center space-x-3">
                    <Play className="w-6 h-6" />
                    <span>INITIALIZE PLAYBACK</span>
                  </div>
                </button>
                
                <button 
                  onClick={() => onNavigate('mission')}
                  className="group relative text-[#f6c453] px-10 py-5 rounded-xl font-bold text-lg border-2 border-[#f6c453]/50 hover:border-[#f6c453] hover:bg-[#f6c453]/10 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#f6c453]/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative flex items-center space-x-3">
                    <span>DECODE MISSION</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>

              {/* AI Topics Ticker */}
              <div className="relative bg-[#183a1d]/50 backdrop-blur-sm border border-[#f6c453]/30 rounded-2xl p-6 max-w-4xl mx-auto">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f6c453] to-transparent"></div>
                <div className="flex items-center justify-center space-x-8 text-sm text-[#e1eedd] font-mono">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-[#f6c453]" />
                    <span>NEURAL.NETWORKS</span>
                  </div>
                  <div className="w-px h-4 bg-[#f6c453]/50"></div>
                  <span>MACHINE.LEARNING</span>
                  <div className="w-px h-4 bg-[#f6c453]/50"></div>
                  <span>AI.ETHICS</span>
                  <div className="w-px h-4 bg-[#f6c453]/50"></div>
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
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-[#f6c453] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#f0a04b] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#e1eedd] rounded-full"></div>
                  </div>
                  <span className="text-[#f6c453] font-mono text-sm">LATEST_EPISODE.exe</span>
                </div>
                <div className="text-[#e1eedd] font-mono text-xs">STATUS: READY</div>
              </div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-2 h-2 bg-[#f6c453] rounded-full animate-pulse"></div>
                    <span className="text-[#f6c453] font-mono text-sm uppercase tracking-wider">EPISODE.002</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-[#fefbe9] leading-tight">
                    How we Got AI in Education All Wrong (And How to Do Better)
                  </h3>
                  
                  <p className="text-[#e1eedd] text-lg leading-relaxed">
                    In this episode, we break down the problem of using AI detection software in colleges and suggest a new approach toward AI that would truly revolutionize education. Assisting us in this important discussion are Kylie and David, two brilliant biology student from Evan's class.
                  </p>
                  
                  <div className="flex items-center space-x-8 text-[#e1eedd]/70 font-mono text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-[#f6c453] rounded-full"></div>
                      <span>DURATION: 60:00</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-[#f6c453] rounded-full"></div>
                      <span>DATE: 2025.09.04</span>
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
                
                {/* Holographic Display */}
                <div className="relative lg:block">
                  <div className="w-48 h-48 md:w-64 md:h-64 lg:w-full lg:aspect-square bg-gradient-to-br from-[#f6c453]/20 to-[#f0a04b]/20 rounded-2xl border border-[#f6c453]/30 flex items-center justify-center relative overflow-hidden mx-auto">
                    <div className="absolute inset-0 cyber-scan"></div>
                    <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#f6c453] to-[#f0a04b] rounded-xl flex items-center justify-center shadow-2xl">
                      <Brain className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#0b4d59]" />
                    </div>
                    
                    {/* Floating data points */}
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 w-2 h-2 md:w-3 md:h-3 bg-[#f6c453] rounded-full animate-pulse"></div>
                    <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#f0a04b] rounded-full animate-pulse delay-300"></div>
                    <div className="absolute top-1/2 left-2 md:left-4 w-1 h-1 bg-[#fefbe9] rounded-full animate-pulse delay-700"></div>
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
                description: 'Dive into our comprehensive library of AI discussions, insights, and breakthrough moments.',
                action: () => onNavigate('episodes'),
                accent: '#f6c453',
                stats: '50+ ENTRIES'
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
                className="group relative bg-[#0b4d59]/60 backdrop-blur-sm border border-[#f6c453]/30 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-[#0b4d59]/80 overflow-hidden"
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
              { name: 'AI.IN.EDUCATION', code: 'AE01' },
              { name: 'UNLOCKS.SOON', code: 'US02' },
              { name: 'UNLOCKS.SOON', code: 'US03' },
              { name: 'UNLOCKS.SOON', code: 'US04' },
              { name: 'UNLOCKS.SOON', code: 'US05' },
              { name: 'UNLOCKS.SOON', code: 'US06' }
            ].map((topic, index) => (
              <div
                key={index}
                className="group relative bg-[#183a1d]/60 backdrop-blur-sm border border-[#f6c453]/20 rounded-xl p-4 text-center hover:border-[#f6c453] hover:bg-[#183a1d]/80 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f6c453] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="text-xs font-mono text-[#f6c453] mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    {topic.code}
                  </div>
                  <div className="text-xs font-bold text-[#fefbe9] group-hover:text-[#f6c453] transition-colors">
                    {topic.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#183a1d]/60 backdrop-blur-sm border border-[#f6c453]/30 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center">
              <div className="flex flex-col justify-between h-24 flex-1">
                <div className="text-2xl font-bold text-[#f6c453] font-mono">KTSW</div>
                <div className="text-xs font-mono text-[#e1eedd] uppercase tracking-wider leading-tight flex-1 flex items-center justify-center">Official Podcast of Texas State University Radio Station</div>
                <div className="w-full h-1 bg-[#f6c453]/20 rounded-full">
                  <div className="w-full h-full bg-[#f6c453] rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="flex flex-col justify-between h-24 flex-1">
                <div className="text-3xl font-bold text-[#f0a04b] font-mono">2</div>
                <div className="text-xs font-mono text-[#e1eedd] uppercase tracking-wider flex-1 flex items-center justify-center">AI-Enhanced Classes Taught</div>
                <div className="w-full h-1 bg-[#f0a04b]/20 rounded-full">
                  <div className="w-4/5 h-full bg-[#f0a04b] rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
              
              <div className="flex flex-col justify-between h-24 flex-1">
                <div className="text-2xl font-bold text-[#fefbe9] font-mono">PENDING</div>
                <div className="text-xs font-mono text-[#e1eedd] uppercase tracking-wider flex-1 flex items-center justify-center">Community Feedback & Rating System</div>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-[#fefbe9]/30 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
