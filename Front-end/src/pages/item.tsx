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
              <Link href="#">
                <p className="item__abstract__details">See full product details</p>
              </Link>
            </div>
            <div className="item__abstract__price-order">
              <p className="item__abstract__price">
                R$199.00
              </p>
              <OrderButton />
            </div>
          </section>
          <section className="item__description">
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
        </article>
      </main>
    </>
  )
}