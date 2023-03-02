import { IcreateUserParam, TCart } from "src/types"

// Recebe um Google ID como argumento e retorna um array, contendo o objeto do usuário buscado.
export const checkUserInDatabase = async (gid:string | (() => string)) => {
  const res = await fetch(`https://kampler-store-api-costumers.onrender.com/costumers/${gid}`)
  return res.json()
}

export const createUser = async (userObject:IcreateUserParam) => {
  
  await fetch(`https://kampler-store-api-costumers.onrender.com/costumers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: userObject
    })
  })  
  
}

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
  


