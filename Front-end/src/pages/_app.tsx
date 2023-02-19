import '../styles/index.css'
import type { AppProps } from 'next/app'
import Header from 'src/layout/header'
import Footer from 'src/layout/footer'
import { GoogleOAuthProvider } from '@react-oauth/google'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Header />
      <GoogleOAuthProvider 
        clientId="241788816470-j1336ms85rkvq56srvgk499iodsfjtr8.apps.googleusercontent.com"
      >
          <Component {...pageProps} />
      </GoogleOAuthProvider>
      <Footer />
    </>
  )
}
