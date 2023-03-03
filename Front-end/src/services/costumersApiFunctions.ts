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


  


