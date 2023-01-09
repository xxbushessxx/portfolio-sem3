import { Nunito_Sans, Space_Mono } from '@next/font/google';
import '../styles/globals.scss';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-nunito',
});

const space = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-space',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${nunito.variable} ${space.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
