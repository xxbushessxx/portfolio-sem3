import Head from 'next/head';
import TheHeader from '../components/TheHeader';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import TheFooter from '../components/TheFooter';

export default function Home() {
  return (
    <>
      <Head>
        <title>Erik Nikolov</title>
        <meta name="description" content="Erik Nikolov's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TheHeader />
        <About />
        <Contact />
        <Experience />
        <Hero />
        <TheFooter />
      </main>
    </>
  );
}
