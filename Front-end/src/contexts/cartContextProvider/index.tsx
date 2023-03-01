import { createContext, useState } from "react"
import { ICartContextProps, TCartContextValue } from "src/types"

export const CartContext = createContext<TCartContextValue>({})

export const CartContextProvider = ({children}:ICartContextProps) => {
  const [selectedProduct, setSelectedProduct] = useState()

  return(
    <CartContext.Provider value={{selectedProduct, setSelectedProduct}}>
      {children}
    </CartContext.Provider>
  )
}