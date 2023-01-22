import '../styles/index.css'
import type { AppProps } from 'next/app'
import Header from 'src/layout/header'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
