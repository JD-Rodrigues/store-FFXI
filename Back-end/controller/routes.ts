import { create, read } from "../model/queries"

const express = require('express')

export const router = express.Router()

router.get('/costumers/:id', async (req, res)=> {
  const costumerToCheck = req.params.id
  const costumersInDb = await read('costumers')
  const foundCostumer = costumersInDb.filter(costumer=> costumer.gid === costumerToCheck )
  console.log(foundCostumer) 
  res.json(foundCostumer.length > 0 ? true : false)
  
})

router.post('/costumers', async (req, res)=> {
  console.log("Epaaa") 
  await create('costumers',req.body.user)
  res.json('Cliente cadastrado!')
})

router.get('/cart', (req, res)=> {
  res.send('Obter cart')   
})

router.put('/cart', (req, res)=> {
  res.send('Atualizar cart')    
}) 