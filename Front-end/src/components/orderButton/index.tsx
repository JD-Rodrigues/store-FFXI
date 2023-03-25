import { AlignStartVerticalDimensions } from "@styled-icons/fluentui-system-filled/AlignStartVertical"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "src/contexts/authContextProvider"
import { CartContext } from "src/contexts/cartContextProvider"
import { addItemToCart, addOrChangeItem, getCart, selectedProductHandler, setCartHandler, updateCart } from "src/services/cartApiFunctions"
import { getProductByID } from "src/services/prismicFunctions"
import { TCartContextValue, TOrderButtonProps } from "src/types"
import {v4 as uuid} from 'uuid'

const OrderButton = ({text, productId}:TOrderButtonProps) => {
  const [modal, setModal] = useState(false)
  const cartContext = useContext(CartContext)
  const userContext = useContext(AuthContext)
  const router = useRouter()
  
  if(!('setSelectedProduct' in cartContext)) {
    throw new Error('Erro!')
  }  

  useEffect(()=> {
    const modalElement = document.getElementById(`${productId}`) as HTMLDialogElement
  
    modal ? modalElement.showModal() : modalElement.close()

  },[modal])

  const addProductHandler = async () => {
    if(userContext.user) {
      const productItem = await getProductByID(productId)
      cartContext.setSelectedProduct(productItem)
        
      productItem 
      && 
        setModal(true)
        await addOrChangeItem(
          userContext.user.gid, 
          cartContext.cart, 
          cartContext.setCart, 
          productItem, 
          updateCart, 
          getCart,
          setCartHandler
        ) 
    } else {
      router.push('/login')
    }

    // const updatedCart = productItem && addItemToCart(cartContext.cart, productItem, uuid, Date)

    // console.log(updatedCart)
    // console.log(cartContext.selectedProduct)
    // console.log(userContext.user)
  }
  
  return(
    <>
      <button onClick={ addProductHandler }  className="order__button">
            {text}
      </button>  
      <dialog           
          id={productId}
        >
          <div className="modal__order">
            <p className="modal__success__msg">Successfully added in your shopping cart!</p>   
            <article className="modal__item">
              <img 
                src={cartContext.selectedProduct?.data.gallery_image.url}
                className="modal__item__pic" 
              />
              <section className="modal__item__details">
                <h3 className="modal__item__title">{cartContext.selectedProduct?.data.title}</h3>
                <p className="modal__item__description">
                  {`${cartContext.selectedProduct?.data.description[0].text.substring(0,60)}...`}
                </p>
                <p className="modal__item__price">${cartContext.selectedProduct?.data.price}</p>
              </section>
            </article> 
            <div className="modal__buttons">
              <button 
                className="modal__buttons__continue__shopping"
                onClick={()=>setModal(false)}
              >
                CONTINUE SHOPPING
              </button>
              <Link href="/cart">
                <button 
                  className="modal__buttons__checkout"
                  onClick={()=>setModal(false)}
                >
                  CHECKOUT NOW
                </button>
              </Link>
              
            </div>
          </div>        
      </dialog>
    </>
  )
}

export {OrderButton}