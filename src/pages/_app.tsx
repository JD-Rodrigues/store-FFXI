import '../styles/index.css'
import type { AppProps } from 'next/app'
import Header from 'src/layout/header'
import Footer from 'src/layout/footer'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
