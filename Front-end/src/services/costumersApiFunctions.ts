import { IcreateUserParam } from "src/types"


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

