import { useContext, useEffect } from "react"
import { AuthContext } from "src/contexts/authContextProvider"
import { CartContext } from "src/contexts/cartContextProvider"
import { addItemToCart, addOrChangeItem, getCart, selectedProductHandler, setCartHandler, updateCart } from "src/services/cartApiFunctions"
import { TCartContextValue, TCheckoutButtonProps, TOrderButtonProps } from "src/types"
import {v4 as uuid} from 'uuid'

const CheckoutButton = ({text}:TCheckoutButtonProps) => {

  
  return(
    <button className="order__button">
          {text}
    </button>  
  )
}

export {CheckoutButton}