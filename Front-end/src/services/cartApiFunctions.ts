import { PrismicDocument } from "@prismicio/types"
import { IProduct, TCart, TCartContextValue, TUserObject } from "src/types"
import { getProductByID } from "./prismicFunctions"


//Recebe um GoogleID como argumento e retorna o objeto contendo o carrinho do usuário a quem pertence o Google ID.
export const getCart = async (gid:string) => {
  const cart = await fetch(`https://kampler-store-api-costumers.onrender.com/cart/${gid}`)
  return cart.json()
}

// No primeiro parâmetro, recebe um GoogleID. No segundo, um objeto contendo as propriedades do carrinho atualizado.
export const updateCart = async (gid:string, newValues:TCart) => {
  try {
    await fetch(`https://kampler-store-api-costumers.onrender.com/cart/${gid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cart: newValues
      })
    })
    console.log('O cart foi atualizado!')
  } catch (error) {
      console.log(error)
  }
  
}

export const changeQuantity = async (user:TUserObject, cart:TCart, selectedProduct:PrismicDocument, setCart:React.Dispatch<React.SetStateAction<TCart>>, value = 0) => {
  const updatedCart = cart

  if(updatedCart.items.length > 0) {
    updatedCart.items.forEach(item =>{
      if(item.id === selectedProduct.id) {
        value === 0 ? item.quant ++ : item.quant = value
      }
    })

    await updateCart(user.gid, updatedCart)
    await setCartHandler(user.gid, getCart, setCart)
  }

  
}

export const setCartHandler = async (googleID:string, getCartFunction: (gid:string)=> Promise<TCart>, setCartFunction:React.Dispatch<React.SetStateAction<TCart>> ) => {
  const cart = await getCartFunction(googleID)
  setCartFunction(cart)
}

export const selectedProductHandler = async (productID:string, selectProduct:React.Dispatch<React.SetStateAction<PrismicDocument>> ) => {
    
  const choosedItem = await getProductByID(productID)    
  selectProduct(choosedItem)

} 