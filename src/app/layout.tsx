import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import AuthContext from '@/context/AuthContext';
import SWRConfigContext from '@/context/SWRConfigContext';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Rinstagram',
    template: 'Rinstagram | %s',
  },
  description: 'Rinstagram Photos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={openSans.className}>
      <body className='w-full bg-neutral-50 overflow-auto'>
        <AuthContext>
          <header className='sticky top-0 z-10'>
            <div className='max-w-screen-xl mx-auto'>
              <Navbar />
            </div>
          </header>
          <main className='w-full max-w-screen-xl flex justify-center mx-auto'>
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
        <div id='portal' />
      </body>
    </html>
  );
}
