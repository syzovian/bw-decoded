import { useState, useEffect } from 'react';
import { SpotifyService, SpotifyEpisode, SpotifyShow } from '../services/spotify';

// You'll need to set these environment variables
const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID || '';
const SPOTIFY_CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET || '';

const spotifyService = new SpotifyService(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET);

export function useSpotifyEpisode(episodeUrl: string) {
  const [episode, setEpisode] = useState<SpotifyEpisode | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEpisode() {
      try {
        setLoading(true);
        setError(null);
        
        const episodeId = SpotifyService.extractIdFromUrl(episodeUrl);
        const episodeData = await spotifyService.getEpisode(episodeId);
        
        setEpisode(episodeData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch episode');
        console.error('Spotify API Error:', err);
      } finally {
        setLoading(false);
      }
    }

    if (episodeUrl && SPOTIFY_CLIENT_ID && SPOTIFY_CLIENT_SECRET) {
      fetchEpisode();
    } else {
      setLoading(false);
      if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
        setError('Spotify API credentials not configured');
      }
    }
  }, [episodeUrl]);

  return { episode, loading, error };
}

export function useSpotifyShow(showUrl: string) {
  const [show, setShow] = useState<SpotifyShow | null>(null);
  const [episodes, setEpisodes] = useState<SpotifyEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchShow() {
      try {
        setLoading(true);
        setError(null);
        
        const showId = SpotifyService.extractShowIdFromUrl(showUrl);
        const [showData, episodesData] = await Promise.all([
          spotifyService.getShow(showId),
          spotifyService.getShowEpisodes(showId, 20)
        ]);
        
        setShow(showData);
        setEpisodes(episodesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch show');
        console.error('Spotify API Error:', err);
      } finally {
        setLoading(false);
      }
    }

    if (showUrl && SPOTIFY_CLIENT_ID && SPOTIFY_CLIENT_SECRET) {
      fetchShow();
    } else {
      setLoading(false);
      if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
        setError('Spotify API credentials not configured');
      }
    }
  }, [showUrl]);

  return { show, episodes, loading, error };
}