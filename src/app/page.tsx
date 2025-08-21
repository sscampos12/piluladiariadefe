
'use client';

import React, { useState } from 'react';
import { Calendar, BookOpen, Heart } from 'lucide-react';
import { devocionais } from '@/data/devocionais';
import { AudioPlayer } from '@/components/AudioPlayer';
import { CalendarioView } from '@/components/CalendarioView';
import { DevocionalView } from '@/components/DevocionalView';

export default function App() {
  const [viewMode, setViewMode] = useState<'home' | 'calendario' | 'devocional'>('home');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [currentAudio, setCurrentAudio] = useState<string>('');

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setViewMode('devocional');
  };

  const handlePlayAudio = (audioUrl: string) => {
    setCurrentAudio(audioUrl);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Heart className="w-8 h-8 text-pink-200" />
              <div>
                <h1 className="text-3xl font-bold">Pílula Diária de Fé</h1>
                <p className="text-indigo-100">Fortalecendo sua caminhada cristã</p>
              </div>
            </div>
            
            <nav className="flex space-x-4">
              <button
                onClick={() => setViewMode('home')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  viewMode === 'home' ? 'bg-white text-indigo-600' : 'hover:bg-white/20'
                }`}
              >
                Início
              </button>
              <button
                onClick={() => setViewMode('calendario')}
                className={`px-4 py-2 rounded-lg transition-all flex items-center space-x-2 ${
                  viewMode === 'calendario' ? 'bg-white text-indigo-600' : 'hover:bg-white/20'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Calendário</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {viewMode === 'home' && (
          <div className="max-w-4xl mx-auto">
            {/* Welcome Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="text-center">
                <BookOpen className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Bem-vindo à sua Pílula Diária de Fé
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  "Lâmpada para os meus pés é tua palavra, e luz para o meu caminho." 
                  <span className="block text-indigo-600 font-semibold mt-2">Salmo 119:105</span>
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-indigo-800 mb-3">
                      Devocional Diário
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Reflexões profundas baseadas na Palavra de Deus para fortalecer sua fé e orientar seus passos diários.
                    </p>
                    <button
                      onClick={() => setViewMode('calendario')}
                      className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Começar Agora
                    </button>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-purple-800 mb-3">
                      Louvores Inspiradores
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Cada dia acompanha um louvor cuidadosamente selecionado para elevar seu espírito em adoração.
                    </p>
                    <div className="flex items-center text-purple-600">
                      <Heart className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Player Integrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <Calendar className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Calendário Interativo</h3>
                <p className="text-gray-600">Navegue facilmente pelos meses e dias do ano.</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <BookOpen className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Reflexões Profundas</h3>
                <p className="text-gray-600">Meditações baseadas em 40 anos de ministério pastoral.</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <Heart className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Aplicação Prática</h3>
                <p className="text-gray-600">Perguntas e desafios para viver a fé no cotidiano.</p>
              </div>
            </div>
          </div>
        )}

        {viewMode === 'calendario' && (
          <CalendarioView onDateSelect={handleDateSelect} />
        )}

        {viewMode === 'devocional' && selectedDate && (
          <DevocionalView 
            date={selectedDate} 
            devocional={devocionais[selectedDate]}
            onBack={() => setViewMode('calendario')}
            onPlayAudio={handlePlayAudio}
          />
        )}
      </main>

      {/* Audio Player */}
      {currentAudio && (
        <AudioPlayer 
          audioUrl={currentAudio} 
          onClose={() => setCurrentAudio('')}
        />
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus"
          </p>
          <p className="text-sm text-gray-500 mt-2">Romanos 8:28</p>
        </div>
      </footer>
    </div>
  );
}
