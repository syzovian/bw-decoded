interface SpotifyEpisode {
  id: string;
  name: string;
  description: string;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  duration_ms: number;
  release_date: string;
  external_urls: {
    spotify: string;
  };
}

interface SpotifyShow {
  id: string;
  name: string;
  description: string;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  episodes: {
    items: SpotifyEpisode[];
  };
}

class SpotifyService {
  private clientId: string;
  private clientSecret: string;
  private accessToken: string | null = null;
  private tokenExpiry: number = 0;

  constructor(clientId: string, clientSecret: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  private async getAccessToken(): Promise<string> {
    // Check if we have a valid token
    if (this.accessToken && Date.now() < this.tokenExpiry) {
      return this.accessToken;
    }

    // Get new token using Client Credentials flow
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${this.clientId}:${this.clientSecret}`)}`
      },
      body: 'grant_type=client_credentials'
    });

    if (!response.ok) {
      throw new Error('Failed to get Spotify access token');
    }

    const data = await response.json();
    this.accessToken = data.access_token;
    this.tokenExpiry = Date.now() + (data.expires_in * 1000) - 60000; // Subtract 1 minute for safety

    return this.accessToken;
  }

  private async makeSpotifyRequest(url: string) {
    const token = await this.getAccessToken();
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`Spotify API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  async getEpisode(episodeId: string): Promise<SpotifyEpisode> {
    return this.makeSpotifyRequest(`https://api.spotify.com/v1/episodes/${episodeId}`);
  }

  async getShow(showId: string): Promise<SpotifyShow> {
    return this.makeSpotifyRequest(`https://api.spotify.com/v1/shows/${showId}`);
  }

  async getShowEpisodes(showId: string, limit: number = 10): Promise<SpotifyEpisode[]> {
    const data = await this.makeSpotifyRequest(
      `https://api.spotify.com/v1/shows/${showId}/episodes?limit=${limit}`
    );
    return data.items;
  }

  // Helper method to extract ID from Spotify URL
  static extractIdFromUrl(url: string): string {
    const match = url.match(/\/episode\/([a-zA-Z0-9]+)/);
    if (!match) {
      throw new Error('Invalid Spotify episode URL');
    }
    return match[1];
  }

  static extractShowIdFromUrl(url: string): string {
    const match = url.match(/\/show\/([a-zA-Z0-9]+)/);
    if (!match) {
      throw new Error('Invalid Spotify show URL');
    }
    return match[1];
  }

  // Format duration from milliseconds to readable format
  static formatDuration(durationMs: number): string {
    const minutes = Math.floor(durationMs / 60000);
    const seconds = Math.floor((durationMs % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  // Format date to readable format
  static formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}

export { SpotifyService, type SpotifyEpisode, type SpotifyShow };