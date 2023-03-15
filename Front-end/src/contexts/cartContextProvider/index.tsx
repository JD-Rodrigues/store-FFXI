import { createContext, useState } from "react"
import { ICartContextProps, TCartContextValue } from "src/types"

export const CartContext = createContext<TCartContextValue>({})

export const CartContextProvider = ({children}:ICartContextProps) => {
  const [selectedProduct, setSelectedProduct] = useState()
  const [cart, setCart] = useState({
    orderId: '',
    date: '',
    opened: false,
    items: []
  })

  return(
    <CartContext.Provider value={{selectedProduct, setSelectedProduct, cart, setCart}}>
      {children}
    </CartContext.Provider>
  )
}