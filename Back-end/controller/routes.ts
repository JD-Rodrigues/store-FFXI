import { create, read, remove, update } from "../model/queries"

const express = require('express')

export const router = express.Router()

router.get('/costumers/:id', async (req, res)=> {
  const costumerToCheck = req.params.id
  const costumersInDb = await read('costumers')
  const foundCostumer = costumersInDb.length > 0 ? costumersInDb.filter(costumer=> costumer.gid === costumerToCheck ) : []
  // console.log(foundCostumer) 
  res.json(foundCostumer)
  
})

router.post('/costumers', async (req, res)=> {
  console.log("Epaaa") 
  await create('costumers',req.body.user)
  res.json('Cliente cadastrado!')
})

router.get('/cart/:userId', async (req, res)=> {
  const gid = req.params.userId
  const user = await read('costumers', {gid:gid})
  res.json(user[0].cart)   
})

router.put('/cart/:userId', async (req, res)=> {
  const gid = req.params.userId
  await update('costumers', {gid:gid}, {cart:req.body.cart})
  res.send('O cart foi atualizado!')     
}) 

router.delete('/costumers/:userId', async (req, res) => {
  const gid = req.params.userId
  await remove('costumers', {gid:gid})
  res.send('O usuário foi deletado!')
})