import Head from "next/head"
import GalleryCard from "src/components/galleryCard"
import MainContent from "src/layout/main"
import { getProductsByTag } from "src/services/prismicFunctions"
import { IGetStaticCategoryProps, IHomeProps } from "src/types"
import { PrismicDocument } from '@prismicio/types'



export const getStaticPaths = async () => {
  const categories = ['weapons', 'missions', 'levelling', 'accounts']
  const paths = categories.map((category:String)=> {
      return {
        params:{
          category: category
        }
      }
  }
    
  )

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params}:IGetStaticCategoryProps) => {
  const products = await getProductsByTag(params.category)

  return {
    props: {
      products
    }
  }
}

export default function Home({products}:IHomeProps) {

  const category = products[0].tags[0]

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
            {category}
        </h1>
        <ul className='gallery'>
          {
            products.map((product:PrismicDocument)=>
              <li 
              key={product.id}
              >
                <GalleryCard 
                  id = {product.id}
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


