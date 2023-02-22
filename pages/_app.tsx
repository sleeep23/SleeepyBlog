import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global';
import 'react-notion-x/src/styles.css';
import '../styles/one-dark-theme.css';

import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Analytics } from '@vercel/analytics/react';
import ThemeProvider from '../lib/Provider/ThemeProvider';
import { useEffect } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.dataset.theme = 'default';
  }, []);
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
        <Analytics />
        {/*<ReactQueryDevtools initialIsOpen={false} />*/}
      </QueryClientProvider>
    </>
  );
}
