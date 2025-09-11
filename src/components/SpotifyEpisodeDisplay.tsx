import React from 'react';
import { Play } from 'lucide-react';
import { useSpotifyEpisode } from '../hooks/useSpotify';
import { SpotifyService } from '../services/spotify';

interface SpotifyEpisodeDisplayProps {
  episodeUrl: string;
  className?: string;
  rounded?: boolean;
  showBorder?: boolean;
}

export default function SpotifyEpisodeDisplay({ episodeUrl, className = '', rounded = true, showBorder = true }: SpotifyEpisodeDisplayProps) {
  const { episode, loading, error } = useSpotifyEpisode(episodeUrl);

  if (loading) {
    return (
      <div className={`bg-gradient-to-br from-[#f6c453]/20 to-[#f0a04b]/20 ${rounded ? 'rounded-2xl' : 'rounded-t-2xl'} border border-[#f6c453]/30 flex items-center justify-center relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 cyber-scan"></div>
        <div className="relative z-10 animate-pulse">
          <div className={`w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-[#f6c453]/30 ${showBorder ? 'rounded-xl' : 'rounded-none'}`}></div>
        </div>
      </div>
    );
  }

  if (error || !episode) {
    // Fallback to static content if API fails
    return (
      <div className={`bg-gradient-to-br from-[#f6c453]/20 to-[#f0a04b]/20 ${rounded ? 'rounded-2xl' : 'rounded-t-2xl'} border border-[#f6c453]/30 flex items-center justify-center relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 cyber-scan"></div>
        <div className={`relative z-10 w-40 h-40 sm:w-44 sm:h-44 md:w-40 md:h-40 lg:w-48 lg:h-48 overflow-hidden ${showBorder ? 'rounded-xl shadow-2xl border-2 border-[#f6c453]/50' : 'rounded-none'}`}>
          <img
            src="/Untitled (11) (1).png"
            alt="Episode 002: How we Got AI in Education All Wrong"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
          </div>
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#1DB954] rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  // Get the best quality image
  const episodeImage = episode.images?.[0]?.url || episode.images?.[1]?.url;

  return (
    <div className={`bg-gradient-to-br from-[#f6c453]/20 to-[#f0a04b]/20 ${rounded ? 'rounded-2xl' : 'rounded-t-2xl'} border border-[#f6c453]/30 flex items-center justify-center relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 cyber-scan"></div>
      
      <div className={`relative z-10 w-full h-full overflow-hidden ${showBorder ? 'rounded-xl shadow-2xl border-2 border-[#f6c453]/50' : 'rounded-none'}`}>
        {/* Green circle indicator - positioned on artwork */}
        <div className="absolute top-2 left-2 md:top-3 md:left-3 w-3 h-3 md:w-4 md:h-4 bg-[#1DB954] rounded-full z-30"></div>
        
        {episodeImage ? (
          <>
            <img
              src={episodeImage}
              alt={episode.name}
              className="w-full h-full object-cover"
            />
            
            {/* Spotify logo indicator */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#1DB954] rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </>
        ) : null}
        
        {/* Decorative elements */}
        <div className="absolute top-2 right-2 md:top-4 md:right-4 w-2 h-2 md:w-3 md:h-3 bg-[#f6c453] rounded-full animate-pulse z-20"></div>
        <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#f0a04b] rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-2 md:left-4 w-1 h-1 bg-[#fefbe9] rounded-full animate-pulse delay-700"></div>
      </div>
    </div>
  );
}
