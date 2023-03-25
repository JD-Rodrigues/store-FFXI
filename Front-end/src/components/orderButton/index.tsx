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
  
  
  if(!('setSelectedProduct' in cartContext)) {
    throw new Error('Erro!')
  }  

  useEffect(()=> {
    const modalElement = document.getElementById(`${productId}`) as HTMLDialogElement

    modal ? modalElement.showModal() : modalElement.close()

  },[modal])

  const addProductHandler = async () => {
    const productItem = await getProductByID(productId)
    cartContext.setSelectedProduct(productItem)
    setModal(true)
    userContext.user 
    && productItem 
    && await addOrChangeItem(
        userContext.user.gid, 
        cartContext.cart, 
        cartContext.setCart, 
        productItem, 
        updateCart, 
        getCart,
        setCartHandler
      ) 

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
          className="modal__order"
          id={productId}
          onClick={()=>setModal(false)}
        >          
        <h3>{cartContext.selectedProduct?.data.title}</h3>
      </dialog>
    </>
  )
}

export {OrderButton}