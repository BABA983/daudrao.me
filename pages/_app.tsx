import Nav from '@/components/Nav';
import { SEO } from '@/components/SEO';
import { TagsProvider } from '@/components/tags/TagsContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <SEO />
      <div className='w-full h-full'>
        <TagsProvider>
          <Nav />
          <main>
            <Component {...pageProps} />
          </main>
        </TagsProvider>
      </div>
    </>
  );
}
