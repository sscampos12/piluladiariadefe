import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Pílula Diária de Fé - Devocional Completo',
  description: 'Fortalecendo sua caminhada cristã com reflexões diárias baseadas na Palavra de Deus',
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#4f46e5" />
      </head>
      <body className={cn('antialiased')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
