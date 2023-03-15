import { useContext, useEffect } from "react"
import { AuthContext } from "src/contexts/authContextProvider"
import { CartContext } from "src/contexts/cartContextProvider"
import { addItemToCart, addOrChangeItem, selectedProductHandler, setCartHandler, updateCart } from "src/services/cartApiFunctions"
import { TCartContextValue, TOrderButtonProps } from "src/types"
import {v4 as uuid} from 'uuid'

const OrderButton = ({text, productId}:TOrderButtonProps) => {
  const cartContext = useContext(CartContext)
  const userContext = useContext(AuthContext)
  
  if(!('setSelectedProduct' in cartContext)) {
    throw new Error('Erro!')
  }  

  useEffect(()=> {
    console.log(cartContext.selectedProduct)
  },[cartContext.selectedProduct])

  const addProductHandler = async () => {
    await selectedProductHandler(productId,cartContext.setSelectedProduct)

    const updatedCart = cartContext.selectedProduct && addItemToCart(cartContext.cart, cartContext.selectedProduct,uuid, Date)

    console.log(updatedCart)
    console.log(cartContext.selectedProduct)
    console.log(userContext.user)

    userContext.user 
    && cartContext.selectedProduct
    && updatedCart
    && await addOrChangeItem(
      userContext.user.gid, 
      updatedCart, 
      cartContext.setCart, 
      cartContext.selectedProduct, 
      updateCart, 
      setCartHandler) 

  }
  
  return(
    <button onClick={ addProductHandler }  className="order__button">
          {text}
    </button>  
  )
}

export {OrderButton}