import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global';
import 'react-notion-x/src/styles.css';
import '../styles/one-dark-theme.css';

import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        {/*<ReactQueryDevtools initialIsOpen={false} />*/}
      </QueryClientProvider>
    </>
  );
}
