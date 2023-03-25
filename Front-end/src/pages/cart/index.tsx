import Head from "next/head";
import { useContext, useState } from "react";
import { CheckoutButton } from "src/components/checkoutButton";
import ItemCart from "src/components/itemCart";
import { OrderButton } from "src/components/orderButton";
import { CartContext } from "src/contexts/cartContextProvider";
import MainContent from "src/layout/main";

 

export default function Cart() {
  const cartContext = useContext(CartContext)

  if(!('cart' in cartContext)) {
    throw new Error('O cart etá nulo!')
  }

  const subtotal = cartContext.cart.items.reduce((sum, item)=> item.price * item.quant + sum, 0)

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
            <ul className="cart__summary__items">
              {
                cartContext.cart.items.map(item=> 
                  <li className="cart__item__wrapper" key={item.id}>
                    <ItemCart productId={item.id} img={item.pic} title={item.title} description={item.desc.text} price={item.price} quantity={item.quant}/>
                  </li>
                )
              }
              {
                cartContext.loading && 
                  <div className="cart__loading__screen">
                    <img 
                      src='/crystal-loading.png'
                      className="cart__loading__screen__spinner" 
                      alt='' 
                    /> 
                  </div>}
            </ul>

          </section>
          <section className="cart__checkout">
            <div className="cart__subtotal__wrapper">
              <p className="cart__subtotal__title">
                SUBTOTAL
              </p>
              <p className="cart__subtotal__value"
              >
                ${subtotal.toFixed(2)}
              </p>
            </div>
            <CheckoutButton text="LOGIN / CREATE AN ACCOUNT" />
          </section>
        </section>
      </article>
    </>
  )
}