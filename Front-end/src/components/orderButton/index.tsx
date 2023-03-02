import { useContext, useEffect } from "react"
import { CartContext } from "src/contexts/cartContextProvider"
import { selectedProductHandler } from "src/services/cartApiFunctions"
import { TOrderButtonProps } from "src/types"

const OrderButton = ({text, productId}:TOrderButtonProps) => {
  const context = useContext(CartContext)
  
  useEffect(()=> {
    console.log(context.selectedProduct)
  },[context.selectedProduct])
  return(
    <button onClick={() => selectedProductHandler(productId, context)}  className="order__button">
          {text}
    </button>  
  )
}

export {OrderButton}