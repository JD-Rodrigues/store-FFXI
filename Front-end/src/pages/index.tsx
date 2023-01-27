import Head from 'next/head'
import { Inter } from '@next/font/google'
import MainContent from 'src/layout/main'
import GalleryCard from 'src/components/galleryCard'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Kampler Store</title>
        <meta name="description" content="Buy services and items to Final Fantasy XI Online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent>
        <h1  
          className='category__name'>
            FEATURED ITEMS
        </h1>
        <section className='gallery'>
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
        </section>
      </MainContent>
    </>
  )
}
