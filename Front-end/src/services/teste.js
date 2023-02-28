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

getProductsByTag('weapons').then(console.log)