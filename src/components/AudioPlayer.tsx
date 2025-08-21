'use client';
import React from 'react';
import { X } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl: string;
  onClose: () => void;
}

export function AudioPlayer({ audioUrl, onClose }: AudioPlayerProps) {
  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-w-sm w-full">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h4 className="font-semibold text-gray-800">Ouvindo a Reflexão</h4>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4">
        <audio controls autoPlay className="w-full">
          <source src={audioUrl} type="audio/wav" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
      </div>
    </div>
  );
}
