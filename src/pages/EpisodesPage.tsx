import React from 'react';
import { Play, Clock, Calendar, Zap, Activity, ChevronRight, ExternalLink } from 'lucide-react';

export default function EpisodesPage() {
  const featuredEpisode = {
    id: 2,
    title: "How we Got AI in Education All Wrong (And How to Do Better)",
    description: "In this episode, we break down the problem of using AI detection software in colleges and suggest a new approach toward AI that would truly revolutionize education. Assisting us in this important discussion are Kylie and David, two brilliant biology student from Evan's class.",
    duration: "60 min",
    date: "Sep 4, 2025",
    status: "ACTIVE",
    link: "https://open.spotify.com/episode/6avJ9KVTcTknesf1FWc5Ok?si=CO92fMC-Q_yuATeexR4pGQ"
  };

  const episode = {
    id: 1,
    title: "AI in Education: Professor Ortiz",
    description: "Have you ever taken a class where using AI models is officially allowed? What about one where it is actively encouraged? Professor Evan Ortiz has organized exactly that at Texas State University! In this episode, he shares his experience teaching students to use AI ethically and effectively for scientific writing and elaborates on his vision for the future of AI in education and beyond. As he puts it, this is one of the most productive conversations in the field!",
    duration: "30 min",
    date: "Mar 5, 2025",
    status: "ARCHIVED",
    link: "https://open.spotify.com/episode/57gSexp1QP0yt4zpi0CYAH?si=iIBEFrhOTDO49b95L3pMXg"
  };

  return (
    <div className="min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal Header */}
        <div className="bg-[#0b4d59]/80 backdrop-blur-sm border border-[#f6c453]/30 rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-[#f6c453] rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-[#f0a04b] rounded-full animate-pulse delay-300"></div>
                <div className="w-3 h-3 bg-[#e1eedd] rounded-full animate-pulse delay-600"></div>
              </div>
              <span className="text-[#f6c453] font-mono text-sm">EPISODE_ARCHIVE.db</span>
            </div>
            <div className="text-[#e1eedd] font-mono text-xs">STATUS: ONLINE</div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#fefbe9] mb-4">
            EPISODE <span className="text-[#f6c453] cyber-glow">CATALOG</span>
          </h1>
          <p className="text-xl text-[#e1eedd] max-w-3xl">
            Access our complete catalog of AI explorations and breakthrough discussions.
          </p>
        </div>

        {/* Featured Episode Terminal */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Activity className="w-5 h-5 text-[#f6c453]" />
            <span className="text-[#f6c453] font-mono text-sm uppercase tracking-wider">FEATURED_EPISODE</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#f6c453] to-transparent"></div>
          </div>
          
          <div className="bg-[#0b4d59]/80 backdrop-blur-sm border border-[#f6c453]/30 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Episode Display */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#f6c453]/20 to-[#f0a04b]/20 p-12 flex items-center justify-center relative">
                <div className="absolute inset-0 cyber-scan"></div>
                <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-[#f6c453] to-[#f0a04b] rounded-2xl flex items-center justify-center shadow-2xl">
                  <Play className="w-16 h-16 text-[#0b4d59]" />
                </div>
                
                {/* Data points */}
                <div className="absolute top-8 right-8 w-4 h-4 border-2 border-[#f6c453] rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-[#f0a04b] rounded-full animate-pulse delay-500"></div>
              </div>
              
              {/* Episode Info */}
              <div className="lg:col-span-3 p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#f6c453] rounded-full animate-pulse"></div>
                    <span className="text-[#f6c453] font-mono text-sm">EP.002</span>
                  </div>
                  <div className="px-3 py-1 bg-[#f6c453]/20 border border-[#f6c453]/50 rounded-full">
                    <span className="text-[#f6c453] font-mono text-xs">{featuredEpisode.status}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-[#fefbe9]">
                  {featuredEpisode.title}
                </h3>
                
                <p className="text-[#e1eedd] leading-relaxed">
                  {featuredEpisode.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-[#e1eedd]/70 font-mono text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-[#f6c453]" />
                    <span>DURATION: {featuredEpisode.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-[#f0a04b]" />
                    <span>DATE: {featuredEpisode.date}</span>
                  </div>
                </div>
                
                <a
                  href={featuredEpisode.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-[#f6c453] to-[#f0a04b] text-[#0b4d59] px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 overflow-hidden inline-flex items-center space-x-3"
                >
                  <div className="relative flex items-center space-x-3">
                    <Play className="w-5 h-5" />
                    <span>EXECUTE PLAYBACK</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Single Episode */}
        <div className="max-w-md mx-auto">
          <a
            href={episode.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#0b4d59]/60 backdrop-blur-sm border border-[#f6c453]/20 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:border-[#f6c453] cursor-pointer block"
          >
            {/* Scanning effect */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f6c453] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Episode Display */}
            <div className="aspect-video bg-gradient-to-br from-[#f6c453]/10 to-[#f0a04b]/10 flex items-center justify-center relative">
              <div className="absolute inset-0 cyber-scan opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Play className="w-12 h-12 text-[#f6c453] group-hover:scale-110 transition-transform duration-300 relative z-10" />
              
              {/* Status indicator */}
              <div className="absolute top-4 right-4 px-2 py-1 bg-[#0b4d59]/80 border border-[#f6c453]/50 rounded text-xs font-mono text-[#f6c453]">
                EP.001
              </div>
            </div>
            
            {/* Episode Info */}
            <div className="p-6 space-y-4">
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
              
              <h3 className="text-lg font-bold text-[#fefbe9] group-hover:text-[#f6c453] transition-colors leading-tight">
                {episode.title}
              </h3>
              
              <p className="text-[#e1eedd] text-sm leading-relaxed line-clamp-3">
                {episode.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-[#e1eedd]/60 text-xs font-mono">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{episode.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{episode.date}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}