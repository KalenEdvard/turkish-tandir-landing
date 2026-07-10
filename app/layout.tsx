import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Турецкий Тандыр — Кебаб, Донер, Лахмаджун',
  description: 'Турецкий Тандыр — турецкая кухня: кебаб из тандыра, донер, лахмаджун, пиде. Заказ через WhatsApp. Доставка и самовывоз.',
  keywords: [
    'Турецкий Тандыр',
    'турецкая кухня',
    'тандыр кебаб',
    'донер',
    'лахмаджун',
    'пиде',
    'шашлык',
    'доставка еды',
    'заказать кебаб',
  ],
  openGraph: {
    title: 'Турецкий Тандыр — Кебаб, Донер, Лахмаджун',
    description: 'Турецкая кухня: кебаб из тандыра, донер, лахмаджун, пиде. Заказ через WhatsApp.',
    locale: 'ru_KG',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${oswald.variable} font-oswald bg-[#0a0a0a] text-white`}>{children}</body>
    </html>
  );
}
