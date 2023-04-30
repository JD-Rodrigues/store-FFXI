import { createContext, useState } from "react"
import { ICartContextProps, TCartContextValue } from "src/types"

export const CartContext = createContext<TCartContextValue>({})

export const CartContextProvider = ({children}:ICartContextProps) => {
  const initialValueCart = {
    orderId: '',
    date: '',
    opened: false,
    items: []
  }
  const [selectedProduct, setSelectedProduct] = useState()
  const [cart, setCart] = useState(initialValueCart)
  const [loading, setLoading] = useState(false)

  return(
    <CartContext.Provider value={{initialValueCart, selectedProduct, setSelectedProduct, cart, setCart, loading, setLoading}}>
      {children}
    </CartContext.Provider>
  )
}