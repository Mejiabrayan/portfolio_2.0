import '../styles/globals.css'

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';

const interVariable = Inter();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider attribute="class">
        <main className={interVariable.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
