// import * as prismic from "@prismicio/client";
const prismic = require('@prismicio/client')

const repoName = "prismic-next-tutorial-2"; // Fill in with your repository name.
const endpoint = prismic.getEndpoint(repoName); // Takes your repository name and converts it to an API endpoint.
const client = prismic.createClient(endpoint); // Creates an API client object.

const getProductsByTag = async (tag) => {
  const products = await client.getAllByTag(tag)

  return await products
}

// getProductsByTag('weapons').then(console.log)

const checkUserInDatabase = async (gid) => {
  const res = await fetch(`http://localhost:3002/costumers/${gid}`)
  return res.json()
}
const createUser = async (userObject) => {
  
  await fetch(`http://localhost:3002/costumers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: userObject
    })
  })
}

const updateCart = async (gid, newValues) => {
  await fetch(`http://localhost:3002/cart/${gid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      cart: newValues
    })
  })  
}

updateCart('108224890119545921791', {orderId: 'meteoloco', date: '26-02-1989', opened: true, items:[{title: 'Bigorna ardente', description:'Uma bigorna incandescente', pic: 'http://image.png', price: 5.00, quant:2}]}).then(console.log)

// getProductsByTag('weapons').then(console.log)