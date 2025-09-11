import React from 'react';
import { Play, Clock, Calendar, ChevronRight, ExternalLink, Brain, GraduationCap, MoreHorizontal, X } from 'lucide-react';
import SpotifyEpisodeDisplay from '../components/SpotifyEpisodeDisplay';

export default function AIEducationPage() {
  const [expandedEpisode, setExpandedEpisode] = React.useState<number | null>(null);

  const episodes = [
    {
      id: 2,
      title: "How We Got AI in Education All Wrong (And How to Do Better)",
      description: "In this episode, we break down the problem of using AI detection software in colleges and suggest a new approach toward AI that would truly revolutionize education. Assisting us in this important discussion are Kylie and David, two brilliant biology student from Evan's class in which he teaches students to ethically use AI for scientific writing.",
      duration: "60:00",
      date: "Sep 4, 2025",
      status: "ACTIVE",
      link: "https://open.spotify.com/episode/6avJ9KVTcTknesf1FWc5Ok?si=CO92fMC-Q_yuATeexR4pGQ",
      featured: false
    },
    {
      id: 1,
      title: "AI in Education | Professor Ortiz",
      description: "Have you ever taken a class where using AI models is officially allowed? What about one where it is actively encouraged? Professor Evan Ortiz has organized exactly that at Texas State University! In this episode, he shares his experience teaching students to use AI ethically and effectively for scientific writing and elaborates on his vision for the future of AI in education and beyond. As he puts it, this is one of the most productive conversations in the field!",
      duration: "30:55",
      date: "Mar 5, 2025",
      status: "ARCHIVED",
      link: "https://open.spotify.com/episode/57gSexp1QP0yt4zpi0CYAH?si=iIBEFrhOTDO49b95L3pMXg",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal Header */}
        <div className="bg-[#0b4d59]/80 backdrop-blur-sm border border-[#f6c453]/30 rounded-2xl p-8 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-[#f6c453] rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-[#f0a04b] rounded-full animate-pulse delay-300"></div>
                <div className="w-3 h-3 bg-[#e1eedd] rounded-full animate-pulse delay-600"></div>
              </div>
              <span className="text-[#f6c453] font-mono text-sm">AI_EDUCATION_TOPIC.db</span>
            </div>
            <div className="hidden sm:block text-[#e1eedd] font-mono text-xs sm:text-right">STATUS: ONLINE</div>
          </div>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#f6c453]/20 to-[#f0a04b]/20 border border-[#f6c453]/50 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-[#f6c453]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#fefbe9] mb-2">
                AI IN <span className="text-[#f6c453] cyber-glow">EDUCATION</span>
              </h1>
              <div className="flex items-center space-x-2">
              </div>
            </div>
          </div>
          
          <p className="text-xl text-[#e1eedd] max-w-4xl">
            Exploring the intersection of artificial intelligence and education - from ethical implementation 
            to revolutionary teaching methods that prepare students for an AI-driven future.
          </p>
        </div>

        {/* All Episodes */}
        {episodes.length > 0 && (
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Brain className="w-5 h-5 text-[#f0a04b]" />
              <span className="text-[#f0a04b] font-mono text-sm uppercase tracking-wider">TOPIC_EPISODES</span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#f0a04b] to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {episodes.map((episode) => (
                <a
                  key={episode.id}
                  href={episode.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-[#0b4d59]/60 backdrop-blur-sm border border-[#f6c453]/20 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:border-[#f6c453] cursor-pointer block flex flex-col"
                >
                  {/* Scanning effect */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f6c453] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Episode Display */}
                  <div className="aspect-video bg-gradient-to-br from-[#f6c453]/10 to-[#f0a04b]/10 relative overflow-hidden rounded-t-2xl rounded-b-none">
                    <div className="absolute inset-0 cyber-scan opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <div className="absolute inset-0 w-full h-full">
                      <SpotifyEpisodeDisplay 
                        episodeUrl={episode.id === 2 ? "https://open.spotify.com/episode/6avJ9KVTcTknesf1FWc5Ok?si=8a140799fcb8470a" : "https://open.spotify.com/episode/57gSexp1QP0yt4zpi0CYAH?si=iIBEFrhOTDO49b95L3pMXg"}
                        className="w-full h-full"
                        rounded={false}
                        showBorder={false}
                      />
                    </div>
                    
                    {/* Status indicator */}
                    <div className="absolute top-4 right-4 px-2 py-1 bg-[#0b4d59]/80 border border-[#f6c453]/50 rounded text-xs font-mono text-[#f6c453] z-20">
                      EP.{episode.id.toString().padStart(3, '0')}
                    </div>
                  </div>
                  
                  {/* Episode Info */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#f0a04b] rounded-full animate-pulse"></div>
                        <span className="text-[#f0a04b] font-mono text-xs">{episode.status}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-[#f6c453] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        <ExternalLink className="w-4 h-4 text-[#f6c453] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-[#fefbe9] group-hover:text-[#f6c453] transition-colors leading-tight min-h-[3.5rem] flex items-start">
                      {episode.title}
                    </h3>
                    
                    <p className="text-[#e1eedd] text-sm leading-relaxed line-clamp-3 flex-1">
                      {episode.description}
                    </p>
                    
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setExpandedEpisode(episode.id);
                      }}
                      className="group/expand flex items-center space-x-2 text-[#f6c453] hover:text-[#f0a04b] transition-colors text-xs font-mono mt-2"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                      <span>READ_MORE</span>
                    </button>
                    
                    <div className="grid grid-cols-2 gap-4 text-[#e1eedd]/60 text-xs font-mono mt-auto">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{episode.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1 justify-end">
                        <Calendar className="w-3 h-3" />
                        <span>{episode.date}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

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
                {(() => {
                  const episode = episodes.find(ep => ep.id === expandedEpisode);
                  if (!episode) return null;
                  
                  return (
                    <div className="space-y-6">
                      <p className="text-[#e1eedd] leading-relaxed text-sm">
                        {episode.description}
                      </p>
                      
                      <div className="flex justify-start pt-2">
                        <a
                          href={episode.link}
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
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Topic Stats */}
        <div className="mt-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-2 h-2 bg-[#f6c453] rounded-full animate-pulse"></div>
              <span className="text-[#f6c453] font-mono text-sm uppercase tracking-wider">TOPIC_ANALYTICS</span>
              <div className="w-2 h-2 bg-[#f6c453] rounded-full animate-pulse delay-500"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#f6c453] font-mono">{episodes.length}</div>
                <div className="text-sm text-[#e1eedd] font-mono uppercase tracking-wider">Total Episodes</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#f0a04b] font-mono">90:55</div>
                <div className="text-sm text-[#e1eedd] font-mono uppercase tracking-wider">Total Time</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#fefbe9] font-mono">∞</div>
                <div className="text-sm text-[#e1eedd] font-mono uppercase tracking-wider">Learning Potential</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}