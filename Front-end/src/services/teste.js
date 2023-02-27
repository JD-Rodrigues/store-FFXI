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

const teste = async () => {
  await checkUserInDatabase("108224890119545921791").then(console.log)
  await createUser({
  name: 'Murici Ramalho',
  email: 'contato@ramalho.com',
  gid: '108224890119545921791',
  pic: 'https://minhaimagem.jpg',
  cart: {}
}      )
 await checkUserInDatabase("108224890119545921791").then(console.log)
}

teste()
