import { PrismicRichText } from "@prismicio/react";
import { PrismicDocument } from "@prismicio/types";
import Head from "next/head";
import Link from "next/link";
import { OrderButton } from "src/components/orderButton";
import { getAllProducts } from "src/services";
import { getProductByUid } from "src/services/prismicFunctions";
import { IGetStaticItemProps, IItemProps } from "src/types";

export const getStaticPaths = async () => {
  const products = await getAllProducts()
  const paths = products.map((product:PrismicDocument)=> {
      return {
        params:{
          item: product.uid
        }
      }
  }
    
  )

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params}:IGetStaticItemProps) => {
  const product = await getProductByUid(params.item)

  return {
    props: {
      product
    }
  }
}


export default function ItemDescription({product}:IItemProps) {

  console.log(product)

  const description = product.data.description[0].text
  const id = product.id
  console.log(id)
  return (
    <>
      <Head>
        <title>Item description | Kampler Store</title>
        <meta name="description" content="Item description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <article className="item">
          <section  className="item__abstract">
            <div className="item__abstract__pic-info__wrapper">
              <img 
                src={product.data.internal_image.url}
                className="item__abstract__pic" 
              />
              <div className="item__abstract__info">
                <h1 className="item__abstract__title">
                  {product.data.title}
                </h1>
                <p className="item__abstract__text">
                  {`${description.substring(0,200)}...`}
                </p>
                <Link 
                  href="#item__description" 
                  className="item__abstract__details"
                >
                  <p>See full product details</p>
                </Link>
              </div>
            </div>
            
            <div className="item__abstract__price-order">
              <p className="item__abstract__price">
              {product.data.price}
              </p>
              <OrderButton 
                text="ADD TO CART" 
                productId={id}
              />
            </div>
          </section>
          <section className="item__description" id="item__description">
            <header className="item__description__title"
            >
              <h2>
                Description
              </h2>
            </header>
            
          <section className="item__description__text">
            <PrismicRichText 
              field={product.data.description} 
              // components = {{
              //   strong: ({children}) => <b>{children}</b>
              // }}
            />
          </section>            
          </section>
        </article>
      </main>
    </>
  )
}