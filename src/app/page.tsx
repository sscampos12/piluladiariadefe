import { promises as fs } from 'fs';
import path from 'path';
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

export default async function Home() {
  // Read messages.json
  const filePath = path.join(process.cwd(), 'public', 'messages.json');
  let messages: Message[];
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    messages = JSON.parse(fileContents);
  } catch (error) {
    console.error("Failed to read or parse messages.json", error);
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
        <p className="text-destructive-foreground bg-destructive p-4 rounded-md">Could not load daily message. Please try again later.</p>
      </main>
    );
  }

  if (!messages || messages.length === 0) {
     return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
        <p className="text-destructive-foreground bg-destructive p-4 rounded-md">No messages available. Please check the configuration.</p>
      </main>
    );
  }

  const dayOfYear = getDayOfYear();
  // Use modulo to loop through messages, ensuring we always have a valid index
  const messageData = messages[(dayOfYear - 1) % messages.length];

  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  let aiSuggestion: SuggestActionOutput = { actionSuggested: false, action: '' };

  try {
    aiSuggestion = await suggestAction({
      message: messageData.message,
      date: dateString,
    });
  } catch (error) {
    console.error("AI suggestion failed:", error);
    // Continue without an AI suggestion if the flow fails
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
      <DailyMessageCard
        message={messageData.message}
        date={dateString}
        actionSuggestion={aiSuggestion.action}
        actionSuggested={aiSuggestion.actionSuggested}
      />
    </main>
  );
}
