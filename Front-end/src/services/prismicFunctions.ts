import { client } from "./prismicConnection";

export const getAllProducts = async () => {
  const products = await client.getAllByType('item', {
      orderings: {
        field: 'document.first_publication_date',
        direction: 'desc',
      }
  })

  console.log(products)
  return products
}