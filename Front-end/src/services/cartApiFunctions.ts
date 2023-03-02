import { TCartContextValue } from "src/types"
import { getProductByID } from "./prismicFunctions"

export const selectedProductHandler = async (productID:string, context:TCartContextValue) => {
    
  const choosedItem = await getProductByID(productID)    
  context.setSelectedProduct!(choosedItem)

}