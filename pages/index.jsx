import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import Menu from '@/components/Menu';
import Navbar from '@/components/Nav';
import Head from 'next/head';

export default function Home() {

  return (
    <>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type='png' href="/img/icon.png" />
      </Head>
      <main className="bg-red-500">
      <Navbar/>
      <Main/>
      <About/>
      <Menu/>
      <Contact/>
      <Footer/>
      </main>
    </>
  );
};


