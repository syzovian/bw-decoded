import React from 'react';
import { Brain, Users, Lightbulb, Target, ArrowRight, Zap, Activity, Shield } from 'lucide-react';

export default function MissionPage() {
  const values = [
    {
      icon: Brain,
      title: "CLARITY_PROTOCOL",
      code: "CP01",
      description: "Transform intricate AI concepts into clear, digestible insights that anyone can understand and apply."
    },
    {
      icon: Users,
      title: "INCLUSIVE_ACCESS",
      code: "IA02", 
      description: "AI knowledge shouldn't be locked away in academic towers. We make it accessible to curious minds everywhere."
    },
    {
      icon: Lightbulb,
      title: "PRACTICAL_WISDOM",
      code: "PW03",
      description: "Beyond theory, we focus on how AI impacts real lives and practical applications in everyday scenarios."
    },
    {
      icon: Shield,
      title: "FUTURE_READINESS",
      code: "FR04",
      description: "We prepare our audience for an AI-driven future by building understanding and reducing fear through education."
    }
  ];

  return (
    <div className="min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Terminal */}
        <div className="bg-[#0b4d59]/80 backdrop-blur-sm border border-[#f6c453]/30 rounded-2xl p-12 mb-16 relative overflow-hidden">
          {/* Holographic grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#f6c453] rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-[#f0a04b] rounded-full animate-spin-slow-reverse"></div>
          </div>
          
          <div className="relative z-10 text-center space-y-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-2 h-2 bg-[#f6c453] rounded-full animate-pulse"></div>
              <span className="text-[#f6c453] font-mono text-sm uppercase tracking-wider">CORE_DIRECTIVE</span>
              <div className="w-2 h-2 bg-[#f6c453] rounded-full animate-pulse delay-500"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-[#fefbe9] leading-tight">
              MISSION <span className="text-[#f6c453] cyber-glow">PROTOCOL</span>
            </h1>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#f6c453]/5 border border-[#f6c453]/30 rounded-xl p-8">
                <blockquote className="text-2xl md:text-3xl text-[#fefbe9] font-light leading-relaxed italic">
                  "To decode the mysteries of artificial intelligence and make them 
                  accessible, understandable, and inspiring for everyone."
                </blockquote>
              </div>
            </div>
            
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#f6c453] to-transparent mx-auto"></div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#fefbe9] flex items-center">
                <Target className="w-8 h-8 text-[#f6c453] mr-3" />
                PRIMARY OBJECTIVE
              </h2>
              <div className="w-24 h-px bg-[#f6c453]"></div>
            </div>
            
            <div className="space-y-6 text-[#e1eedd] leading-relaxed">
              <p>
                Artificial intelligence is reshaping our world at an unprecedented pace. Yet for many, 
                AI remains shrouded in technical jargon, fear, and misunderstanding.
              </p>
              <p>
                We believe that everyone deserves to understand the technology that's transforming our lives. 
                Through thoughtful conversations, expert insights, and clear explanations, we decode 
                the complex world of AI.
              </p>
            </div>
          </div>
          
          {/* Mission Visualization */}
          <div className="relative">
            <div className="bg-[#285A5A]/40 border border-[#f6c453]/30 rounded-2xl p-8 h-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 cyber-scan"></div>
              
              <div className="relative z-10 text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-to-br from-[#f6c453] to-[#f0a04b] rounded-full flex items-center justify-center mx-auto shadow-2xl">
                  <Brain className="w-16 h-16 text-[#285A5A]" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-[#f6c453] font-mono text-sm">DECODING_PROGRESS</div>
                  <div className="w-full h-2 bg-[#f6c453]/20 rounded-full">
                    <div className="w-full h-full bg-gradient-to-r from-[#f6c453] to-[#f0a04b] rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-[#e1eedd] font-mono text-xs">100% OPERATIONAL</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Matrix */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#fefbe9] mb-4 flex items-center justify-center">
              <Activity className="w-8 h-8 text-[#f6c453] mr-3" />
              CORE <span className="text-[#f6c453] ml-2">VALUES</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#f6c453] to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-[#0b4d59]/60 backdrop-blur-sm border border-[#f6c453]/20 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:border-[#f6c453] overflow-hidden"
              >
                {/* Scanning line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f6c453] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#f6c453]/20 to-[#f0a04b]/20 border border-[#f6c453]/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="w-8 h-8 text-[#f6c453]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#fefbe9] group-hover:text-[#f6c453] transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-[#f6c453] font-mono text-xs">{value.code}</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[#e1eedd] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activation Terminal */}
        <div className="bg-[#0b4d59]/80 backdrop-blur-sm border border-[#f6c453]/30 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 cyber-scan opacity-50"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-2 h-2 bg-[#f6c453] rounded-full animate-pulse"></div>
              <span className="text-[#f6c453] font-mono text-sm uppercase tracking-wider">ACTIVATION_SEQUENCE</span>
              <div className="w-2 h-2 bg-[#f6c453] rounded-full animate-pulse delay-500"></div>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-[#fefbe9] mb-6">
              JOIN THE <span className="text-[#f6c453] cyber-glow">NETWORK</span>
            </h3>
            
            <p className="text-[#e1eedd] text-lg max-w-3xl mx-auto leading-relaxed">
              Be part of a community that's actively working to demystify AI and build a more 
              informed, empowered future. Together, we decode tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://open.spotify.com/show/1LtTqIMDNamYiBpYEO1pbE"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-[#f6c453] to-[#f0a04b] text-[#0b4d59] px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 overflow-hidden inline-flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="relative flex items-center space-x-3">
                  <span>SUBSCRIBE TO FEED</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
              
              <button className="group relative border-2 border-[#f6c453]/50 text-[#f6c453] hover:border-[#f6c453] hover:bg-[#f6c453]/10 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-[#f6c453]/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="relative">JOIN NEURAL NETWORK</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}