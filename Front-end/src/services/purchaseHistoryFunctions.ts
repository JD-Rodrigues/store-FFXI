import { TPurchaseTransaction } from "src/types"

export const getAllTransactions = async () => {
  const allTransactions = await fetch(`https://kampler-store-api-costumers.onrender.com/transactions`)
  return allTransactions.json()
}

export const getUserTransactions = async (userId:string) => {
  const userTransactions  = await fetch(`https://kampler-store-api-costumers.onrender.com/transactions/${userId}`)
  return userTransactions.json()
}

export const saveTransactionInDatabase = async (transaction:TPurchaseTransaction) => {
  const userTransactions  = await fetch(
    `https://kampler-store-api-costumers.onrender.com/transactions`,
    {
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        transaction: transaction
      })
    }
    )
  return userTransactions.json()
}

