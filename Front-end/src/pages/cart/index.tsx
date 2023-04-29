import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import ItemCart from "src/components/itemCart";
import LoadingScreen from "src/components/loadingScreen";
import { OrderButton } from "src/components/orderButton";
import { CartContext } from "src/contexts/cartContextProvider";
import MainContent from "src/layout/main";
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import { getAllTransactions, getUserTransactions, saveTransactionInDatabase } from "src/services/purchaseHistoryFunctions";
import { AuthContext } from "src/contexts/authContextProvider";


 

export default function Cart() {
  const cartContext = useContext(CartContext)
  const userContext = useContext(AuthContext)
  
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
                  <LoadingScreen />
              }
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
            <PayPalScriptProvider options={{"client-id":process.env.NEXT_PUBLIC_CLIENT_ID!}} >
              <PayPalButtons 
                className="paypal__button"
                style={{
                  layout: "vertical",
                  color: "gold",
                  shape: "rect",
                  label: "checkout",
                }}
                forceReRender={
                  [
                    subtotal.toFixed(2), 
                  ]}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: subtotal.toFixed(2),
                          currency_code: "USD",
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order!.capture().then(async function(details) {
                    userContext
                    && userContext.user
                    && cartContext.cart.items.length > 0 
                    && await saveTransactionInDatabase(
                      {
                        orderNumber: cartContext.cart.orderId,
                        userId: userContext.user.gid,
                        date: cartContext.cart.date,
                        items: cartContext.cart.items
                      }
                    )                   
                  });
                }}
              />
            </PayPalScriptProvider>
          </section>
        </section>
      </article>
    </>
  )
}