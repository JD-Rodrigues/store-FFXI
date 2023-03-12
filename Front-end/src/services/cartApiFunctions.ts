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

export const addItemToCart = ( cart:TCart, product:PrismicDocument, uuid:()=>string, Date:()=>string ) => {
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

export const removeItemFromCart = async (
  productId:string, 
  gid:string,
  cart:TCart, 
  updateCart: (gid:string, newValues:TCart)=>void,
  getCartFunction: (gid:string)=> Promise<TCart>, 
  setCartFunction:React.Dispatch<React.SetStateAction<TCart>>,
  setCartHandler: (
    googleID:string, 
    getCartFunction: (gid:string)=> Promise<TCart>, 
    setCartFunction:React.Dispatch<React.SetStateAction<TCart>>
    )=>void
  ) => {

  const updatedCart = cart
  const updatedItems = cart.items.filter(item=> item.id !== productId)
  updatedCart.items = updatedItems

  await updateCart(gid, updatedCart)
  await setCartHandler(gid, getCartFunction, setCartFunction)

}

// Se o produto selecionado já existe no cart, chama  função changeQuantity(). Se ainda não existe, chama a função addItemToCart().
export const addOrChangeItem = async (
    userGid:string, 
    cart:TCart, 
    setCart: React.Dispatch<React.SetStateAction<TCart>>, 
    product:PrismicDocument, 
    updateCart: (gid:string, updatedCart:TCart)=> void,
    setCartHandler: (gid:string, getCart:(gid:string)=>Promise<TCart>, setCart: React.Dispatch<React.SetStateAction<TCart>>)=>void, 
  ) => {

  const itemAlreadyInCart = cart.items.find(item => item.id === product.id)

  if(itemAlreadyInCart === undefined) {
    const updatedCart = addItemToCart(cart, product, uuid, Date)
    await updateCart(userGid, updatedCart)
    await setCartHandler(userGid, getCart, setCart)


  } else {
    await changeQuantity(userGid, cart, product, updateCart, setCart, setCartHandler)
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

// export const changeQuantity = async (
//   userGid:string, 
//   cart:TCart, 
//   selectedProduct:PrismicDocument, 
//   typeOfChange:string, 
//   updateCart: (gid:string,updatedCart:TCart)=> void, 
//   setCart:React.Dispatch<React.SetStateAction<TCart>>,
//   setCartHandler: (
//     gid:string, 
//     getCart:(gid:string)=> Promise<TCart>,
//     setCart:React.Dispatch<React.SetStateAction<TCart>>
//     )=> void, value = 0
//   ) => {

//   const updatedCart = cart
  
//   updatedCart.items.forEach(async(item) => {
//     if(item.id === selectedProduct.id) {
//         switch (typeOfChange) {
//         case 'increment':
//           item.quant ++ 
//           break;
//         case 'shift':
//           value > 0 ? item.quant = value : console.error("Você não está passando o argumento para o parâmetro value ou está passando-o com o valor 0.");
//           break          
//         default:
//           break;
//         }
//     }
    
//     await updateCart(userGid, updatedCart)
//     await setCartHandler(userGid, getCart, setCart)
//   })
  
// }

export const changeQuantity = async (
  userGid:string, 
  cart:TCart, 
  selectedProduct:PrismicDocument, 
  updateCart: (gid:string,updatedCart:TCart)=> void, 
  setCart:React.Dispatch<React.SetStateAction<TCart>>,
  setCartHandler: (
    gid:string, 
    getCart:(gid:string)=> Promise<TCart>,
    setCart:React.Dispatch<React.SetStateAction<TCart>>
    )=> void, value = 0
  ) => {

  const updatedCart = cart
  
  updatedCart.items.forEach(async(item) => {
    if(item.id === selectedProduct.id) {
        if (value === 0) {        
          item.quant ++ 
        } else {        
          value > 0 ? item.quant = value : console.error("Você não está passando um número negativo como argumento para o parâmetro value. Este parâmetro deve receber um número positivo ou ser deixado em branco.");                 
        }
    }
    
    await updateCart(userGid, updatedCart)
    await setCartHandler(userGid, getCart, setCart)
  })  
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