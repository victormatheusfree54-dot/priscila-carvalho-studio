import type { Metadata } from 'next';
import { Noto_Serif, Manrope } from 'next/font/google';
import './globals.css';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Priscila Carvalho Studio | Cílios e Sobrancelhas',
  description: 'Especialista em extensões de cílios e design de sobrancelhas em Paciência, RJ. Resultado incomparável e atendimento detalhista.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${notoSerif.variable} ${manrope.variable} scroll-smooth`}>
      <body className="font-sans bg-[#0A0A0A] text-[#F5F5F5] antialiased selection:bg-[#D4AF37] selection:text-black">
        {children}
      </body>
    </html>
  );
}
