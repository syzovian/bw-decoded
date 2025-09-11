import React from 'react';
import { Play, Clock, Calendar, Zap, Activity, ChevronRight, ExternalLink, MoreHorizontal, X } from 'lucide-react';

export default function EpisodesPage() {
  const [expandedEpisode, setExpandedEpisode] = React.useState<number | null>(null);

  const featuredEpisode = {
    id: 2,
    title: "How We Got AI in Education All Wrong (And How to Do Better)",
    description: "In this episode, we break down the problem of using AI detection software in colleges and suggest a new approach toward AI that would truly revolutionize education. Assisting us in this important discussion are Kylie and David, two brilliant biology students from Evan's class.",
    duration: "60:00",
    date: "Sep 4, 2025",
    status: "ACTIVE",
    link: "https://open.spotify.com/episode/6avJ9KVTcTknesf1FWc5Ok?si=CO92fMC-Q_yuATeexR4pGQ"
  };

  const episode = {
    id: 1,
    title: "AI in Education | Professor Ortiz",
    description: "Have you ever taken a class where using AI models is officially allowed? What about one where it is actively encouraged? Professor Evan Ortiz has organized exactly that at Texas State University! In this episode, he shares his experience teaching students to use AI ethically and effectively for scientific writing and elaborates on his vision for the future of AI in education and beyond. As he puts it, this is one of the most productive conversations in the field!",
    duration: "30 min",
    date: "Mar 5, 2025",
    status: "ARCHIVED",
    link: "https://open.spotify.com/episode/57gSexp1QP0yt4zpi0CYAH?si=iIBEFrhOTDO49b95L3pMXg"
  };

  return (
    <>
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
                <span className="text-[#f6c453] font-mono text-sm">EPISODE_ARCHIVE.db</span>
              </div>
              <div className="hidden sm:block text-[#e1eedd] font-mono text-xs sm:text-right">STATUS: ONLINE</div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-[#fefbe9] mb-4">
              EPISODE <span className="text-[#f6c453] cyber-glow">CATALOG</span>
            </h1>
            <p className="text-xl text-[#e1eedd] max-w-3xl">
              Access our complete catalog of AI explorations and breakthrough discussions.
            </p>
          </div>

          {/* Featured Episode Terminal */}
          <div id="featured-episode" className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Activity className="w-5 h-5 text-[#f6c453]" />
              <span className="text-[#f6c453] font-mono text-sm uppercase tracking-wider">FEATURED_EPISODE</span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#f6c453] to-transparent"></div>
            </div>
            
            {/* Featured Episode Block */}
            <div className="relative bg-[#0b4d59]/80 backdrop-blur-sm border border-[#f6c453]/30 rounded-3xl overflow-hidden group">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f6c453]/20 via-transparent to-[#f0a04b]/20"></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-[#f6c453]/30 rounded-full animate-spin-slow"></div>
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-[#f0a04b]/30 rounded-full animate-spin-slow-reverse"></div>
              </div>
              
              {/* Mobile Layout (xs to md) */}
              <div className="block lg:hidden p-6 md:p-8 space-y-6 bg-gradient-to-br from-[#f6c453] to-[#f0a04b] animate-heartbeat">
                {/* Episode Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#f6c453] rounded-full animate-pulse"></div>
                    <span className="text-[#0b4d59] font-mono text-sm font-bold">EP.002</span>
                  </div>
                  <div className="px-3 py-1 bg-[#0b4d59]/20 border border-[#0b4d59]/50 rounded-full">
                    <span className="text-[#0b4d59] font-mono text-xs font-bold">{featuredEpisode.status}</span>
                  </div>
                </div>
                
                {/* Episode Artwork - Centered */}
                <div className="flex justify-center">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-br from-[#f6c453]/20 to-[#f0a04b]/20 rounded-2xl border border-[#f6c453]/30 flex items-center justify-center relative overflow-hidden">
                    <div className="relative z-10 w-full h-full overflow-hidden rounded-xl shadow-2xl border-2 border-[#f6c453]/50 bg-white">
                      <img
                        src="/Untitled (11) (1).png"
                        alt="How We Got AI in Education All Wrong (And How to Do Better)"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Decorative elements overlay */}
                      <div className="absolute top-2 left-2 md:top-3 md:left-3 w-3 h-3 md:w-4 md:h-4 bg-[#1DB954] rounded-full z-30 pointer-events-none"></div>
                      <div className="absolute top-2 right-2 md:top-4 md:right-4 w-2 h-2 md:w-3 md:h-3 bg-[#f6c453] rounded-full animate-pulse z-20 pointer-events-none"></div>
                      <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#f0a04b] rounded-full animate-pulse delay-300 pointer-events-none"></div>
                      <div className="absolute top-1/2 left-2 md:left-4 w-1 h-1 bg-[#fefbe9] rounded-full animate-pulse delay-700 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
                
                {/* Episode Content */}
                <div className="space-y-4 text-center">
                  {/* Title - Always full, never truncated */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b4d59] leading-tight">
                    {featuredEpisode.title}
                  </h3>
                  
                  {/* Description - Truncated on small screens only */}
                  <div className="text-[#0b4d59]/80 leading-relaxed text-sm sm:text-base">
                    {/* Small screens: truncated with READ_MORE */}
                    <div className="block sm:hidden">
                      <p className="line-clamp-2">
                        {featuredEpisode.description}
                      </p>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setExpandedEpisode(featuredEpisode.id);
                        }}
                        className="group/expand flex items-center justify-center space-x-2 text-[#0b4d59] hover:text-[#0b4d59]/70 transition-colors text-xs font-mono mt-2 mx-auto cursor-pointer z-10 relative"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                        <span>READ_MORE</span>
                      </button>
                    </div>
                    
                    {/* Medium screens and up: full description */}
                    <div className="hidden sm:block">
                      <p>{featuredEpisode.description}</p>
                    </div>
                  </div>
                  
                  {/* Meta Info */}
                  <div className="flex justify-center space-x-6 text-[#0b4d59]/70 font-mono text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-[#0b4d59]" />
                      <span>{featuredEpisode.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-[#0b4d59]" />
                      <span>{featuredEpisode.date}</span>
                    </div>
                  </div>
                  
                  {/* Play Button */}
                  <a
                    href={featuredEpisode.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative bg-[#0b4d59] text-[#f6c453] px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:bg-[#0b4d59]/90 overflow-hidden inline-flex items-center space-x-2 sm:space-x-3 border-2 border-[#0b4d59]/20 hover:border-[#0b4d59]"
                  >
                    <div className="absolute inset-0 bg-[#f6c453]/10 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    <div className="relative flex items-center space-x-2 sm:space-x-3">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>EXECUTE PLAYBACK</span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Desktop Layout (lg and up) */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-12 gap-0 min-h-[500px] relative overflow-hidden bg-gradient-to-br from-[#f6c453] to-[#f0a04b] rounded-3xl animate-heartbeat">
                  {/* Left Side - Episode Artwork */}
                  <div className="col-span-6 p-8 flex flex-col justify-center items-center space-y-6 bg-gradient-to-r from-[#f0a04b]/60 via-[#f0a04b]/40 to-[#f6c453]/30 relative">
                    {/* Decorative circles to the sides of artwork */}
                    <div className="absolute top-1/2 left-8 w-16 h-16 bg-[#0b4d59] rounded-full -translate-y-1/2 flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#f6c453] rounded-full"></div>
                    </div>
                    <div className="absolute top-1/2 right-8 w-12 h-12 bg-[#0b4d59]/70 rounded-full -translate-y-1/2"></div>
                    
                    <div className="flex justify-center relative z-10">
                      <div className="w-80 h-80 xl:w-96 xl:h-96 bg-gradient-to-br from-[#f6c453]/20 to-[#f0a04b]/20 rounded-2xl border border-[#f6c453]/30 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 cyber-scan"></div>
                        <div className="relative z-10 w-full h-full overflow-hidden rounded-xl shadow-2xl border-2 border-[#f6c453]/50 bg-white">
                          <img
                            src="/Untitled (11) (1).png"
                            alt="How We Got AI in Education All Wrong (And How to Do Better)"
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Decorative elements overlay */}
                          <div className="absolute top-2 left-2 md:top-3 md:left-3 w-3 h-3 md:w-4 md:h-4 bg-[#1DB954] rounded-full z-30 pointer-events-none"></div>
                          <div className="absolute top-2 right-2 md:top-4 md:right-4 w-2 h-2 md:w-3 md:h-3 bg-[#f6c453] rounded-full animate-pulse z-20 pointer-events-none"></div>
                          <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#f0a04b] rounded-full animate-pulse delay-300 pointer-events-none"></div>
                          <div className="absolute top-1/2 left-2 md:left-4 w-1 h-1 bg-[#fefbe9] rounded-full animate-pulse delay-700 pointer-events-none"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side - Episode Content */}
                  <div className="col-span-6 p-8 flex flex-col justify-center space-y-6">
                    {/* Episode Header - EP.002 and ACTIVE at top */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-[#0b4d59] rounded-full"></div>
                        <span className="text-[#0b4d59] font-mono text-lg font-bold">EP.002</span>
                      </div>
                      <div className="px-4 py-2 bg-[#0b4d59]/20 border border-[#0b4d59]/50 rounded-full">
                        <span className="text-[#0b4d59] font-mono text-sm font-bold">{featuredEpisode.status}</span>
                      </div>
                    </div>
                    
                    {/* Title - Always full */}
                    <h3 className="text-2xl xl:text-3xl font-bold text-[#0b4d59] leading-tight">
                      {featuredEpisode.title}
                    </h3>
                    
                    {/* Description - Always full on desktop */}
                    <p className="text-[#0b4d59]/80 leading-relaxed text-base">
                      {featuredEpisode.description}
                    </p>
                    
                    {/* Episode Meta and Action */}
                    <div className="flex flex-col gap-6 pt-4">
                      <div className="flex items-center justify-between text-[#0b4d59]/70 font-mono">
                        <div className="flex items-center space-x-8">
                          <div className="flex items-center space-x-3">
                            <Clock className="w-5 h-5 text-[#0b4d59]" />
                            <span className="text-base">{featuredEpisode.duration}</span>
                          </div>
                          <div className="flex items-center space-x-3 whitespace-nowrap">
                            <Calendar className="w-5 h-5 text-[#0b4d59]" />
                            <span className="text-base">{featuredEpisode.date}</span>
                          </div>
                        </div>
                        
                        <a
                          href={featuredEpisode.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative bg-[#0b4d59] text-[#f6c453] px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 hover:bg-[#0b4d59]/90 overflow-hidden inline-flex items-center space-x-2 border-2 border-[#0b4d59]/20 hover:border-[#0b4d59]"
                        >
                          <div className="absolute inset-0 bg-[#f6c453]/10 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                          <div className="relative flex items-center space-x-2">
                            <Play className="w-4 h-4" />
                            <span>EXECUTE PLAYBACK</span>
                            <ExternalLink className="w-3 h-3" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Archive Episodes */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Zap className="w-5 h-5 text-[#f0a04b]" />
              <span className="text-[#f0a04b] font-mono text-sm uppercase tracking-wider">EPISODE_ARCHIVE</span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#f0a04b] to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <a
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
                  <img
                    src="/Untitled (11) (1).png"
                    alt="AI in Education | Professor Ortiz"
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                  
                  {/* Decorative elements overlay */}
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 w-3 h-3 md:w-4 md:h-4 bg-[#1DB954] rounded-full z-30 pointer-events-none"></div>
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 w-2 h-2 md:w-3 md:h-3 bg-[#f6c453] rounded-full animate-pulse z-20 pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#f0a04b] rounded-full animate-pulse delay-300 pointer-events-none"></div>
                  <div className="absolute top-1/2 left-2 md:left-4 w-1 h-1 bg-[#fefbe9] rounded-full animate-pulse delay-700 pointer-events-none"></div>
                  
                  {/* Status indicator */}
                  <div className="absolute top-4 right-4 px-2 py-1 bg-[#0b4d59]/80 border border-[#f6c453]/50 rounded text-xs font-mono text-[#f6c453] z-20">
                    EP.001
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
                      setExpandedEpisode(1);
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
            </div>
          </div>
        </div>
      </div>
      
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
                const episodeData = expandedEpisode === featuredEpisode.id ? featuredEpisode : 
                  (expandedEpisode === 1 ? {
                    id: 1,
                    title: "AI in Education | Professor Ortiz",
                    description: "Have you ever taken a class where using AI models is officially allowed? What about one where it is actively encouraged? Professor Evan Ortiz has organized exactly that at Texas State University! In this episode, he shares his experience teaching students to use AI ethically and effectively for scientific writing and elaborates on his vision for the future of AI in education and beyond. As he puts it, this is one of the most productive conversations in the field!",
                    duration: "30 min",
                    date: "Mar 5, 2025",
                    status: "ARCHIVED",
                    link: "https://open.spotify.com/episode/57gSexp1QP0yt4zpi0CYAH?si=iIBEFrhOTDO49b95L3pMXg"
                  } : null);
                
                if (!episodeData) return null;
                
                return (
                  <div className="space-y-6">
                    <p className="text-[#e1eedd] leading-relaxed text-sm">
                      {episodeData.description}
                    </p>
                    
                    <div className="flex justify-start pt-2">
                      <a
                        href={episodeData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-gradient-to-r from-[#f6c453] to-[#f0a04b] text-[#0b4d59] px-8 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 overflow-hidden inline-flex items-center space-x-2"
                      >
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
    </>
  );
}
