import { useContext, useEffect } from "react"
import { AuthContext } from "src/contexts/authContextProvider"
import { CartContext } from "src/contexts/cartContextProvider"
import { addItemToCart, addOrChangeItem, getCart, selectedProductHandler, setCartHandler, updateCart } from "src/services/cartApiFunctions"
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
   const productItem = await selectedProductHandler(productId, cartContext.setSelectedProduct)
    console.log('esse cara retorna o produto', productItem)

    // const productExistToCart = cartContext.cart.item.filter((item: any) => {item.id === productItem.id})
    console.log('cart antes de chamar addOrChangeItem',cartContext.cart)
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
    <button onClick={ addProductHandler }  className="order__button">
          {text}
    </button>  
  )
}

export {OrderButton}