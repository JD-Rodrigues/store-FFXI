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
          <GalleryCard 
            title='Account - lvl 99 - All subjobs' 
            pic='/gallery__images/account.jpg'
            price={250.00}
          />
          <GalleryCard 
            title='Epic weapon - Conqueror'
            pic='/gallery__images/conqueror.jpg'
            price={75}
          />
          <GalleryCard 
            title='Leveling - Job 1-50'
            pic='/gallery__images/levelup.jpg'
            price={125}
          />
          <GalleryCard 
            title='Missions - ranks 1-10'
            pic='/gallery__images/missions.webp'
            price={75}
          />
          <GalleryCard 
            title='Epic weapon - Nirvana'
            pic='/gallery__images/nirvana.webp'
            price={75}
          />
        </section>
      </MainContent>
    </>
  )
}
