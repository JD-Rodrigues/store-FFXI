import Head from "next/head";
import ItemCart from "src/components/itemCart";
import { OrderButton } from "src/components/orderButton";
import MainContent from "src/layout/main";


export default function Cart() {
  return (
    <>
      <Head>
        <title>Página do itmem | Kampler Store</title>
        <meta name="description" content="Item description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="cart__wrapper">
        <header>
          <h1 className="cart__title">
            CHECKOUT
          </h1>
        </header>
        <section className="cart">          
          <section className="cart__summary">
            <h2 
              className="cart__summary__title"
            >
              CART SUMMARY
            </h2>
            <div className="cart__summary__items">
              <ItemCart />
              <ItemCart />
              <ItemCart />
            </div>

          </section>
          <section className="cart__checkout">
            <div className="cart__subtotal__wrapper">
              <p className="cart__subtotal__title">
                SUBTOTAL
              </p>
              <p className="cart__subtotal__value"
              >
                $1,814.96
              </p>
            </div>
            <OrderButton text="LOGIN / CREATE AN ACCOUNT" />
          </section>
        </section>
      </article>
    </>
  )
}