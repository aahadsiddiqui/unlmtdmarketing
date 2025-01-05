import Navbar from '../src/components/Navbar';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Unlmtd Marketing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-black">
        <Navbar />
        <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
          {children}
        </main>
      </div>
    </>
  );
} 