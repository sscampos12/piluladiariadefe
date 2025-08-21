'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share2, Sun, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DailyMessageCardProps {
  message: string;
  date: string;
  actionSuggestion: string;
  actionSuggested: boolean;
}

export default function DailyMessageCard({ message, date, actionSuggestion, actionSuggested }: DailyMessageCardProps) {
  const { toast } = useToast();

  const handleShare = async () => {
    const shareText = `"${message}"\n\n${actionSuggested ? `Ação sugerida para hoje: ${actionSuggestion}` : ''}`;
    const shareData = {
      title: 'Pílula Diária de Fé',
      text: shareText,
      url: typeof window !== 'undefined' ? window.location.href : '',
    };
    
    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share(shareData);
        toast({ title: 'Compartilhado com sucesso!' });
      } else {
        throw new Error('Web Share API não suportada.');
      }
    } catch (error: unknown) {
      if (error instanceof Error && error.name === 'AbortError') {
        return;
      }
      // Fallback to clipboard if sharing fails or is not supported
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(`${shareData.title}\n\n${shareText}\n\nLeia mais em: ${shareData.url}`);
          toast({ title: 'Copiado para a área de transferência!' });
        } catch (copyError) {
          console.error('Falha ao copiar para a área de transferência:', copyError);
          toast({ title: 'Ops!', description: 'Não foi possível compartilhar ou copiar a mensagem.', variant: 'destructive' });
        }
      } else if (error instanceof Error && error.name !== 'AbortError') {
        console.error('Falha ao compartilhar:', error);
        toast({ title: 'Compartilhamento não suportado', description: 'Seu navegador não suporta compartilhamento ou cópia para a área de transferência.', variant: 'destructive' });
      }
    }
  };

  return (
    <div className="w-full max-w-2xl animate-in fade-in-0 slide-in-from-bottom-5 duration-500 ease-out">
      <Card className="w-full shadow-xl rounded-2xl overflow-hidden border-2 border-primary/20 bg-card">
        <CardHeader className="text-center p-6 md:p-8 bg-card">
          <div className="mx-auto bg-primary/10 rounded-full p-3 inline-block mb-4">
            <Sun className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-headline text-3xl md:text-4xl text-foreground">Pílula Diária de Fé</h1>
          <CardDescription className="font-body text-base mt-1">{date}</CardDescription>
        </CardHeader>
        <CardContent className="px-6 md:px-10 py-8 bg-card">
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl font-body text-foreground/80 leading-relaxed italic">
              &ldquo;{message}&rdquo;
            </p>
          </blockquote>
        </CardContent>
        {actionSuggested && (
          <CardContent className="px-6 md:px-10 py-8 border-t border-border bg-secondary/50">
            <div className="flex items-start gap-4 text-left">
              <div className="bg-accent/10 rounded-full p-2 shrink-0">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h2 className="font-headline text-lg text-accent font-semibold">Um Passo Prático</h2>
                <p className="font-body text-foreground/80 mt-1">{actionSuggestion}</p>
              </div>
            </div>
          </CardContent>
        )}
        <CardFooter className="justify-center p-6 bg-card">
          <Button onClick={handleShare} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 shadow-md transition-transform hover:scale-105">
            <Share2 className="mr-2 h-5 w-5" />
            Compartilhe sua Fé
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
