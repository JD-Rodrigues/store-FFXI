import Head from "next/head";
import Link from "next/link";
import { OrderButton } from "src/components/orderButton";
import MainContent from "src/layout/main";


export default function ItemDescription() {
  return (
    <>
      <Head>
        <title>Kampler Store</title>
        <meta name="description" content="Buy services and items to Final Fantasy XI Online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <article className="item">
          <section  className="item__abstract">
            <div className="item__abstract__pic-info__wrapper">
              <img 
              src="/gallery__images/item__desc.jpg"
            className="item__abstract__pic" />
            <div className="item__abstract__info">
              <h1 className="item__abstract__title">
                FINAL FANTASY VII REMAKE™ STATIC ARTS TIFA LOCKHART EXOTIC DRESS VER.
              </h1>
              <p className="item__abstract__text">
                Tifa, from FINAL FANTASY VII REMAKE, returns to the STATIC ARTS statuette line, this time in a dress a little more exotic than she is used to!
              </p>
              <Link href="#item__description" className="item__abstract__details">
                <p>See full product details</p>
              </Link>
            </div>
            </div>
            
            <div className="item__abstract__price-order">
              <p className="item__abstract__price">
                R$199.00
              </p>
              <OrderButton text="ADD TO CART" />
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
            <p>
              Tifa, from FINAL FANTASY VII REMAKE, returns to the STATIC ARTS statuette line, this time in a dress a little more exotic than she is used to!
            </p><br/>
            <p>
              The owner of the Seventh Heaven bar goes through a total image makeover that includes a flower ornament in her hair and a luxurious obi wrapped around her. Tifa sits on a stool with her hands placed on her lap, awaiting her mission at Corneos mansion.
              The meticulous details, from the flowing texture of the dress sleeves to Tifas dignified expression and silhouette, make this STATIC ARTS figure truly a sight to behold.
            </p><br/>
            <p>
              Chair & Base Included
            </p>
          </section>            
          </section>
        </article>
      </main>
    </>
  )
}