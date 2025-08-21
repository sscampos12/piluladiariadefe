'use client';
import React from 'react';
import { ChevronLeft, BookOpen, Play, ExternalLink } from 'lucide-react';
import type { Devocional } from '../data/devocionais';

interface DevocionalViewProps {
  date: string;
  devocional: Devocional;
  onBack: () => void;
  onPlayAudio: (audioUrl: string) => void;
}

export function DevocionalView({ date, devocional, onBack, onPlayAudio }: DevocionalViewProps) {
  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    const meses = [
      '', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return `${parseInt(day)} de ${meses[parseInt(month)]}`;
  };

  if (!devocional) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-600 mb-4">
            Devocional em Preparação
          </h2>
          <p className="text-gray-500 mb-6">
            Este devocional ainda está sendo preparado com muito cuidado e oração.
          </p>
          <button
            onClick={onBack}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Voltar ao Calendário
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Voltar ao Calendário</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">{formatDate(date)}</h1>
            <h2 className="text-2xl font-semibold text-indigo-100">{devocional.tema}</h2>
            <p className="text-indigo-200 mt-2">#{devocional.palavraChave}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Versículo */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-500">
            <p className="text-lg text-gray-800 italic leading-relaxed mb-3">
              "{devocional.versiculo.texto}"
            </p>
            <p className="text-indigo-600 font-semibold text-right">
              {devocional.versiculo.referencia}
            </p>
          </div>

          {/* Reflexão */}
          <div className="prose prose-lg max-w-none">
            <div className="devocional-text space-y-4">
              {devocional.reflexao.split('\n\n').map((paragrafo, index) => (
                <p key={index} className="text-justify leading-relaxed">{paragrafo.trim()}</p>
              ))}
            </div>
          </div>

          {/* Leitura Bíblica */}
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h3 className="text-xl font-bold text-amber-800 mb-2 flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Leitura Bíblica do Dia
            </h3>
            <p className="text-amber-700 font-semibold">{devocional.leituraBiblica}</p>
          </div>

          {/* Perguntas */}
          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4">
              Perguntas para o Dia a Dia
            </h3>
            <div className="space-y-3">
              {devocional.perguntas.map((pergunta, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-green-700">{pergunta}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Louvor */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
            <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Louvor do Dia
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-700 font-semibold text-lg">{devocional.louvor.nome}</p>
                <p className="text-purple-600">{devocional.louvor.artista}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => onPlayAudio(devocional.louvor.url)}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Tocar</span>
                </button>
                <a
                  href={devocional.louvor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Abrir</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
