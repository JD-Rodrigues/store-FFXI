import { useContext, useEffect } from "react"
import { CartContext } from "src/contexts/cartContextProvider"
import { selectedProductHandler } from "src/services/cartApiFunctions"
import { TCartContextValue, TOrderButtonProps } from "src/types"

const OrderButton = ({text, productId}:TOrderButtonProps) => {
  const context = useContext(CartContext)

  if(!('setSelectedProduct' in context)) {
    throw new Error('Erro!')
  }  
  
  return(
    <button onClick={() => selectedProductHandler(productId,context.setSelectedProduct )}  className="order__button">
          {text}
    </button>  
  )
}

export {OrderButton}