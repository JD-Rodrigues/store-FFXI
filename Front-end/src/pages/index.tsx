import Head from 'next/head'
import MainContent from 'src/layout/main'
import GalleryCard from 'src/components/galleryCard'
import { getAllProducts } from 'src/services'
import { IHomeProps } from 'src/types'
import { PrismicDocument } from '@prismicio/types'
import { useContext, useEffect } from 'react'
import { AuthContext } from 'src/contexts/authContextProvider'
import { CartContext } from 'src/contexts/cartContextProvider'


export const getStaticProps = async () => {
  const products = await getAllProducts()

  return {
    props: {
      products
    }
  }
}

export default function Home({products}:IHomeProps) {
  const {logged, setLogged} = useContext(AuthContext)
  const context = useContext(CartContext)

  useEffect(()=> {
    console.log(context.selectedProduct)
  },[context.selectedProduct])
  
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
                  id={product.id}
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
