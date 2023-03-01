import { PrismicDocument } from "@prismicio/types"
import { useContext, useEffect } from "react"
import { CartContext } from "src/contexts/cartContextProvider"
import { getProductByID } from "src/services/prismicFunctions"
import { TOrderButtonProps } from "src/types"

const OrderButton = ({text, productId}:TOrderButtonProps) => {
  const context = useContext(CartContext)
  const selectedProductHandler = async () => {
    
    const choosedItem = await getProductByID(productId)    
    context.setSelectedProduct!(choosedItem)
 
  }
  return(
    <button onClick={selectedProductHandler}  className="order__button">
          {text}
    </button>  
  )
}

export {OrderButton}