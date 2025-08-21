'use client';
import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl: string;
  onClose: () => void;
}

export function AudioPlayer({ audioUrl, onClose }: AudioPlayerProps) {
  const getSpotifyEmbedUrl = (url: string) => {
    const match = url.match(/spotify\.com\/track\/([a-zA-Z0-9]+)/);
    if (match) {
      const trackId = match[1];
      return `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;
    }
    return null;
  };

  const spotifyEmbedUrl = getSpotifyEmbedUrl(audioUrl);

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-w-sm">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h4 className="font-semibold text-gray-800">Louvor do Dia</h4>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4">
        {spotifyEmbedUrl ? (
          <div className="space-y-3">
            <iframe
              src={spotifyEmbedUrl}
              width="320"
              height="80"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg w-full"
              title="Louvor do Dia - Spotify"
            ></iframe>
            <div className="flex justify-center">
              <a
                href={audioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-green-600 hover:text-green-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Abrir no Spotify</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center p-4">
            <p className="text-gray-600 mb-3">Link de áudio inválido para o Spotify.</p>
            <a
              href={audioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Abrir Link</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
