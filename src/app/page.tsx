
'use client';

import { useEffect, useState } from 'react';
import { suggestAction } from '@/ai/flows/suggest-action';
import DailyMessageCard from '@/components/DailyMessageCard';
import type { SuggestActionOutput } from '@/ai/flows/suggest-action';


type Message = {
  message: string;
};

// This function calculates the day of the year (1-366)
function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

export default function Home() {
  const [messageData, setMessageData] = useState<Message | null>(null);
  const [dateString, setDateString] = useState<string | null>(null);
  const [aiSuggestion, setAiSuggestion] = useState<SuggestActionOutput>({ actionSuggested: false, action: '' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        
        const dayOfYear = getDayOfYear();
        // In a real client-side scenario, you would fetch this from an API endpoint.
        const response = await fetch('/messages.json');
        if (!response.ok) {
          throw new Error('Falha ao buscar mensagens');
        }
        const messages: Message[] = await response.json();

        if (!messages || messages.length === 0) {
            throw new Error("Nenhuma mensagem disponível. Por favor, verifique a configuração.");
        }

        const currentMessage = messages[(dayOfYear - 1) % messages.length];
        setMessageData(currentMessage);
        
        const today = new Date();
        const currentDateString = today.toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        setDateString(currentDateString);

        try {
          const suggestion = await suggestAction({
            message: currentMessage.message,
            date: currentDateString,
          });
          setAiSuggestion(suggestion);
        } catch (aiError) {
          console.error("Falha na sugestão da IA:", aiError);
          // Gracefully continue without an AI suggestion
          setAiSuggestion({ actionSuggested: false, action: '' });
        }
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
       <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
        <p>Carregando...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
        <p className="text-destructive-foreground bg-destructive p-4 rounded-md">{error}</p>
      </main>
    );
  }

  if (!messageData) {
     return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
        <p className="text-destructive-foreground bg-destructive p-4 rounded-md">Nenhuma mensagem disponível. Por favor, verifique a configuração.</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
      <DailyMessageCard
        message={messageData.message}
        date={dateString!}
        actionSuggestion={aiSuggestion.action}
        actionSuggested={aiSuggestion.actionSuggested}
      />
    </main>
  );
}
