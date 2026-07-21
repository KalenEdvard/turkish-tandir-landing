import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Турецкий Тандыр — кебаб, донер, шашлык в Ноокате',
  description: 'Турецкий Тандыр в Ноокате — турецкая кухня: кебаб из тандыра, донер, шашлык, пицца, роллы. Заказ через WhatsApp. Доставка и самовывоз по Ноокату.',
  keywords: [
    'Турецкий Тандыр Ноокат',
    'ресторан Ноокат',
    'кафе Ноокат',
    'еда Ноокат',
    'доставка еды Ноокат',
    'заказать еду Ноокат',
    'тандыр кебаб Ноокат',
    'донер Ноокат',
    'шашлык Ноокат',
    'турецкая кухня Ноокат',
    'пицца Ноокат',
    'роллы Ноокат',
  ],
  openGraph: {
    title: 'Турецкий Тандыр — кебаб, донер, шашлык в Ноокате',
    description: 'Турецкая кухня в Ноокате: кебаб из тандыра, донер, шашлык, пицца, роллы. Заказ через WhatsApp.',
    locale: 'ru_KG',
    type: 'website',
  },
  other: {
    'geo.placename': 'Ноокат',
    'geo.region': 'KG',
  },
};

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Турецкий Тандыр',
  servesCuisine: 'Turkish',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ноокат',
    addressCountry: 'KG',
  },
  telephone: '+996505100812',
  priceRange: '$$',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className={`${oswald.variable} font-oswald bg-[#0a0a0a] text-white`}>{children}</body>
    </html>
  );
}
