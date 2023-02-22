import { IcreateUserParam } from "src/types"


export const checkUserInDatabase = async (gid:string | (() => string)) => {
  const res = await fetch(`http://localhost:3002/costumers/${gid}`)
  return res.json()
}

export const createUser = async (userObject:IcreateUserParam) => {
  
  const res = await fetch(`http://localhost:3002/costumers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: userObject
    })
  })
  
  return await res.json()
}

