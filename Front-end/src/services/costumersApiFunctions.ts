

export const checkUserInDatabase = async (gid:string) => {
  const res = await fetch(`http://localhost:3001/costumers/${gid}`)
  console.log(res)
}

