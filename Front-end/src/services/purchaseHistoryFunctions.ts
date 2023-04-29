export const getAllTransactions = async () => {
  const allTransactions = await fetch(`http://localhost:3002/transactions`)
  return allTransactions.json()
}

export const getUserTransactions = async (userId:string) => {
  const userTransactions  = await fetch(`http://localhost:3002/transactions/${userId}`)
  return userTransactions.json()
}