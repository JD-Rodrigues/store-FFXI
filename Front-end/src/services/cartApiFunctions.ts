import { PrismicDocument } from "@prismicio/types"
import { IProduct, TCart, TCartContextValue, TUserObject } from "src/types"
import { getProductByID } from "./prismicFunctions"
import {v4 as uuid} from 'uuid'


//Recebe um GoogleID como argumento e retorna o objeto contendo o carrinho do usuário a quem pertence o Google ID.
export const getCart = async (gid:string) => {
  const cart = await fetch(`https://kampler-store-api-costumers.onrender.com/cart/${gid}`)
  return cart.json()
}

//Chamada quando o usuário adiciona um item ao carrinho. Se o item não existir, adiciona-o. Se já existir, aumenta sua quantidade em 1.

const addItemToCart = ( cart:TCart, setCart: React.Dispatch<React.SetStateAction<TCart>>, product:PrismicDocument ) => {
  const updatedCart = cart
  
  if(updatedCart.items.length > 0) {

    updatedCart.items.push({
      id: product.id,
      title: product.data.title,
      desc: product.data.description[0],
      pic: product.data.gallery_image.url,
      price: product.data.price,
      quant: 1
    })

    return updatedCart

  }else {
    updatedCart.orderId = uuid()
    updatedCart.date = Date()
    updatedCart.opened = true
    updatedCart.items.push({
      id: product.id,
      title: product.data.title,
      desc: product.data.description[0],
      pic: product.data.gallery_image.url,
      price: product.data.price,
      quant: 1
    })
    return updatedCart
  }
}

// Se o produto selecionado já existe no cart, chama  função changeQuantity(). Se ainda não existe, chama a função addItemToCart().
const addOrChangeItem = async (user: TUserObject, cart:TCart, setCart: React.Dispatch<React.SetStateAction<TCart>>, product:PrismicDocument ) => {

  const itemAlreadyInCart = cart.items.find(item => item.id === product.id)

  if(itemAlreadyInCart === undefined) {
    const updatedCart = addItemToCart(cart, setCart, product)
    await updateCart(user.gid, updatedCart)
    await setCartHandler(user.gid, getCart, setCart)


  } else {
    await changeQuantity(user, cart, product, setCart)
  }

  
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

// Chamada apenas quando o item já existe no carrinho. Tem por finalidade alterar a quantidade do item.

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

// Pega o carrinho atualizado do usuário logado  e seta-o como valor do state "cart".

export const setCartHandler = async (googleID:string, getCartFunction: (gid:string)=> Promise<TCart>, setCartFunction:React.Dispatch<React.SetStateAction<TCart>> ) => {
  const cart = await getCartFunction(googleID)
  setCartFunction(cart)
}

// Busca todas as informações do produto selecionado e seta-o como valor do state "selectedProduct".

export const selectedProductHandler = async (productID:string, selectProduct:React.Dispatch<React.SetStateAction<PrismicDocument>> ) => {
    
  const choosedItem = await getProductByID(productID)    
  selectProduct(choosedItem)

} 