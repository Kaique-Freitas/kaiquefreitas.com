import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9533575391457729'
        crossOrigin='anonymous'
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
