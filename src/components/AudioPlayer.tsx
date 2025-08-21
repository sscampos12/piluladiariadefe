'use client';
import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl: string;
  onClose: () => void;
}

export function AudioPlayer({ audioUrl, onClose }: AudioPlayerProps) {
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const youtubeId = getYouTubeId(audioUrl);

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
        {youtubeId ? (
          <div className="space-y-3">
            <iframe
              width="320"
              height="200"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&controls=1&rel=0&modestbranding=1`}
              title="Louvor do Dia"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg w-full"
            />
            <div className="flex justify-center">
              <a
                href={audioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-purple-600 hover:text-purple-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Abrir no YouTube</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center p-4">
            <p className="text-gray-600 mb-3">Link de áudio inválido.</p>
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
