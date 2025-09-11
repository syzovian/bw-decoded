import React from 'react';
import { Linkedin, Mail, ExternalLink, Users, Brain, Zap, Activity } from 'lucide-react';

// X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// GitHub icon component
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function HostsPage() {
  const hosts = [
    {
      name: "Elvis Waxwing",
      role: "Host & AI Enthusiast",
      callSign: "OPERATOR_01",
      bio: "I am actively studying AI automation using tools like n8n, make.com, and Relevance AI and aspire to guide high-ticket local businesses in leveraging AI for faster and more effective client acquisition and high-quality lead nurturing. I view the beginning of the AI era as a unique opportunity to create financial freedom that will enable me to pursue my greater vision of faciltating the colonization of the Solar System and making humanity a spacefaring civilization.",
      expertise: ["Machine Learning", "AI Ethics", "AI Automation", "Prompt Engineering"],
      social: {
        x: "https://x.com/osyzov",
        linkedin: "https://www.linkedin.com/in/oleksandr-syzov/",
        email: "elvis@brainwaves-decoded.com"
      },
      image: "src/assets/photo_2025-09-06 22.34.13.jpeg",
      status: "ONLINE"
    },
    {
      name: "Evan Ortiz",
      role: "Co-Host & Bioinformatics Graduate",
      callSign: "OPERATOR_02",
      bio: "As a bioinformatics graduate student at Texas State University, I advance space microbiology through AI-driven research. My NASA collaborations focus on studying bacterial evolution, biofilm formation, and corrosion in space environments, spanning ISS experiments, CubeSat missions, and exoplanetary research.",
      expertise: ["Machine Learning", "Microbiology", "AI Ethics", "Computer Vision"],
      social: {
        linkedin: "https://www.linkedin.com/in/evan-ortiz-982990219/",
        github: "https://github.com/evan-ortiz",
        email: "evanortizlab@gmail.com"
      },
      image: "/src/assets/Tin Type Head Shot.jpg",
      status: "ONLINE"
    }
  ];

  return (
    <div className="min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal Header */}
        <div className="bg-[#0b4d59]/80 backdrop-blur-sm border border-[#f6c453]/30 rounded-2xl p-12 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-[#f6c453] rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-[#f0a04b] rounded-full animate-pulse delay-300"></div>
                <div className="w-3 h-3 bg-[#e1eedd] rounded-full animate-pulse delay-600"></div>
              </div>
              <span className="text-[#f6c453] font-mono text-sm">OPERATOR_PROFILES.sys</span>
            </div>
            <div className="hidden sm:block text-[#e1eedd] font-mono text-xs sm:text-right">STATUS: ACTIVE</div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#fefbe9] mb-4">
            SYSTEM <span className="text-[#f6c453] cyber-glow">OPERATORS</span>
          </h1>
          <p className="text-xl text-[#e1eedd] max-w-3xl">
            Meet the minds behind the neural network - your guides through the AI landscape.
          </p>
        </div>

        {/* Host Profiles */}
        <div className="space-y-16">
          {hosts.map((host, index) => (
            <div
              key={index}
              className="bg-[#0b4d59]/60 backdrop-blur-sm border border-[#f6c453]/20 rounded-2xl overflow-hidden hover:border-[#f6c453] transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-0">
                {/* Profile Display */}
                <div className={`lg:col-span-3 bg-gradient-to-br from-[#f6c453]/10 to-[#f0a04b]/10 p-12 flex items-center justify-center relative ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}>
                  
                  {/* Profile Frame */}
                  <div className="relative">
                    <div className="w-64 h-64 xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] rounded-2xl overflow-hidden border-2 border-[#f6c453]/50 shadow-2xl">
                      <img
                        src={host.image}
                        alt={host.name}
                        className={`w-full h-full object-cover ${index === 0 ? 'object-center scale-150' : 'object-top'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#285A5A]/30 to-transparent"></div>
                    </div>
                    
                    {/* Status indicators */}
                    <div className="absolute -top-2 -right-2 px-3 py-1 bg-[#f6c453] text-[#285A5A] rounded-full text-xs font-mono font-bold">
                      {host.status}
                    </div>
                    <div className="absolute -bottom-2 -left-2 px-3 py-1 bg-[#0b4d59] border border-[#f6c453]/50 text-[#f6c453] rounded-full text-xs font-mono">
                      {host.callSign}
                    </div>
                  </div>
                </div>

                {/* Profile Data */}
                <div className={`lg:col-span-4 p-8 space-y-6 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#fefbe9]">
                      {host.name}
                    </h2>
                    <p className="text-lg text-[#f0a04b] font-mono uppercase tracking-wider">
                      {host.role}
                    </p>
                  </div>

                  <div className="w-full h-px bg-gradient-to-r from-[#f6c453] to-transparent"></div>

                  <p className="text-[#e1eedd] leading-relaxed">
                    {host.bio}
                  </p>

                  {/* Expertise Matrix */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-mono text-[#f6c453] uppercase tracking-widest flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      EXPERTISE_MATRIX
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {host.expertise.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="bg-[#f6c453]/10 border border-[#f6c453]/30 rounded-lg px-4 py-2 text-center"
                        >
                          <span className="text-[#fefbe9] text-sm font-mono">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Communication Channels */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-mono text-[#f6c453] uppercase tracking-widest flex items-center">
                      <Activity className="w-4 h-4 mr-2" />
                      COMM_CHANNELS
                    </h4>
                    <div className="flex space-x-3">
                      {host.social.x && (
                        <a
                          href={host.social.x}
                          className="group p-3 bg-[#f6c453]/10 border border-[#f6c453]/30 text-[#e1eedd] rounded-lg hover:text-[#f6c453] hover:bg-[#f6c453]/20 hover:border-[#f6c453] transition-all duration-300 hover:scale-110"
                          aria-label="X (Twitter)"
                        >
                          <XIcon className="w-5 h-5" />
                        </a>
                      )}
                      {host.social.linkedin && (
                        <a
                          href={host.social.linkedin}
                          className="group p-3 bg-[#f6c453]/10 border border-[#f6c453]/30 text-[#e1eedd] rounded-lg hover:text-[#f6c453] hover:bg-[#f6c453]/20 hover:border-[#f6c453] transition-all duration-300 hover:scale-110"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {host.social.github && (
                        <a
                          href={host.social.github}
                          className="group p-3 bg-[#f6c453]/10 border border-[#f6c453]/30 text-[#e1eedd] rounded-lg hover:text-[#f6c453] hover:bg-[#f6c453]/20 hover:border-[#f6c453] transition-all duration-300 hover:scale-110"
                          aria-label="GitHub"
                        >
                          <GitHubIcon className="w-5 h-5" />
                        </a>
                      )}
                      {host.social.email && (
                        <a
                          href={`mailto:${host.social.email}`}
                          className="group p-3 bg-[#f6c453]/10 border border-[#f6c453]/30 text-[#e1eedd] rounded-lg hover:text-[#f6c453] hover:bg-[#f6c453]/20 hover:border-[#f6c453] transition-all duration-300 hover:scale-110"
                          aria-label="Email"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Communication Terminal */}
        <div className="mt-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 shadow-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-2 h-2 bg-[#f6c453] rounded-full animate-pulse"></div>
              <span className="text-[#f6c453] font-mono text-sm uppercase tracking-wider">OPEN_CHANNEL</span>
              <div className="w-2 h-2 bg-[#f6c453] rounded-full animate-pulse delay-500"></div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-[#fefbe9] mb-4">
              ESTABLISH <span className="text-[#f6c453] cyber-glow">CONNECTION</span>
            </h3>
            <p className="text-[#e1eedd] text-lg max-w-2xl mx-auto leading-relaxed">
              Have questions about AI or suggestions for future episodes? Initialize communication protocol.
            </p>
            
            <a
              href="mailto:elvis@brainwaves-decoded.com"
              className="group relative bg-gradient-to-r from-[#f6c453] to-[#f0a04b] text-[#0b4d59] px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 overflow-hidden inline-block"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>INITIATE CONTACT</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}