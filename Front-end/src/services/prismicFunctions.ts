import { client } from "./prismicConnection";

export const getAllProducts = async () => {
  const products = await client.getAllByType('item', {
      orderings: {
        field: 'document.first_publication_date',
        direction: 'desc',
      }
  })

  // console.log(products)
  return products
}

export const getProductByUid = async (uid:string) => {
  const product = await client.getByUID('item', uid)

  return product
}

