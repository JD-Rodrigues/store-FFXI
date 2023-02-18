import Head from 'next/head'
import MainContent from 'src/layout/main'
import GalleryCard from 'src/components/galleryCard'
import { getAllProducts } from 'src/services'
import { IHomeProps } from 'src/types'
import { PrismicDocument } from '@prismicio/types'


export const getStaticProps = async () => {
  const products = await getAllProducts()

  return {
    props: {
      products
    }
  }
}

export default function Home({products}:IHomeProps) {
  
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
        <ul className='gallery'>
          {
            products.map((product:PrismicDocument)=>
              <li 
              key={product.id}
              >
                <GalleryCard 
                  title={product.data.title}
                  pic={product.data.gallery_image.url}
                  price={product.data.price}
                  path={product.uid}
                />
              </li>)}
          
        </ul>
      </MainContent>
    </>
  )
}
