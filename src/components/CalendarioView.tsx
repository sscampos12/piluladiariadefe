'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface CalendarioViewProps {
  onDateSelect: (date: string) => void;
}

export function CalendarioView({ onDateSelect }: CalendarioViewProps) {
  const [currentYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [currentDate] = useState(new Date());

  const meses = [
    { nome: 'Janeiro', numero: 1, dias: 31 },
    { nome: 'Fevereiro', numero: 2, dias: 29 }, // 2024 é bissexto
    { nome: 'Março', numero: 3, dias: 31 },
    { nome: 'Abril', numero: 4, dias: 30 },
    { nome: 'Maio', numero: 5, dias: 31 },
    { nome: 'Junho', numero: 6, dias: 30 },
    { nome: 'Julho', numero: 7, dias: 31 },
    { nome: 'Agosto', numero: 8, dias: 31 },
    { nome: 'Setembro', numero: 9, dias: 30 },
    { nome: 'Outubro', numero: 10, dias: 31 },
    { nome: 'Novembro', numero: 11, dias: 30 },
    { nome: 'Dezembro', numero: 12, dias: 31 }
  ];

  const formatDate = (day: number, month: number) => {
    return `${currentYear}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  };

  const isToday = (day: number, month: number) => {
    return currentDate.getDate() === day && 
           currentDate.getMonth() + 1 === month && 
           currentDate.getFullYear() === currentYear;
  };

  const isPastDate = (day: number, month: number) => {
    const dateToCheck = new Date(currentYear, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dateToCheck < today;
  };

  const getFirstDayOfWeek = (month: number, year: number) => {
    return new Date(year, month - 1, 1).getDay();
  };

  if (selectedMonth) {
    const mes = meses.find(m => m.numero === selectedMonth);
    if (!mes) return null;

    const firstDay = getFirstDayOfWeek(selectedMonth, currentYear);
    const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setSelectedMonth(null)}
              className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Voltar aos Meses</span>
            </button>
            
            <h2 className="text-3xl font-bold text-gray-800">
              {mes.nome} {currentYear}
            </h2>
            
            <div></div>
          </div>

          <div className="grid grid-cols-7 gap-4">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(dia => (
              <div key={dia} className="text-center font-bold text-gray-700 py-3 text-sm">
                {dia}
              </div>
            ))}
            
            {/* Dias vazios no início do mês */}
            {emptyDays.map(day => (
              <div key={`empty-${day}`} className="p-4"></div>
            ))}
            
            {/* Dias do mês */}
            {Array.from({ length: mes.dias }, (_, i) => i + 1).map(dia => (
              <button
                key={dia}
                onClick={() => onDateSelect(formatDate(dia, selectedMonth))}
                className={`
                  calendar-day
                  ${isToday(dia, selectedMonth) 
                    ? 'calendar-day-today' 
                    : isPastDate(dia, selectedMonth)
                    ? 'calendar-day-past'
                    : 'calendar-day-future'
                  }
                `}
              >
                <div className={`text-lg font-bold ${isToday(dia, selectedMonth) ? 'text-white' : 'text-gray-800'}`}>
                  {dia}
                </div>
                <div className={`text-xs mt-1 ${
                  isToday(dia, selectedMonth) 
                    ? 'text-indigo-100' 
                    : isPastDate(dia, selectedMonth)
                    ? 'text-gray-500'
                    : 'text-gray-600'
                }`}>
                  {isToday(dia, selectedMonth) ? 'Hoje' : 'Devocional'}
                </div>
                {isToday(dia, selectedMonth) && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <Calendar className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Selecione o Mês
          </h2>
          <p className="text-gray-600">Escolha o mês para acessar os devocionais diários</p>
        </div>

        <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4">
          {meses.map((mes) => (
            <button
              key={mes.numero}
              onClick={() => setSelectedMonth(mes.numero)}
              className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 
                        hover:from-indigo-100 hover:via-purple-100 hover:to-pink-100
                        border-2 border-transparent hover:border-indigo-300 
                        rounded-xl p-4 transition-all transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-1">{mes.nome}</h3>
              <p className="text-sm text-gray-600">{mes.dias} dias</p>
              <div className="mt-2 text-xs text-indigo-600 font-semibold">
                {mes.dias} devocionais
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
