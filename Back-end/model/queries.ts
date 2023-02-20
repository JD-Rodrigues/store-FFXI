const {client} = require('./connection.settings')

//No primeiro parâmetro, recebe o nome da collection onde buscará os dados.
// Se receber um objeto, com um par de chave e valor, no segundo parâmetro, retorna um documento filtrado pelo parâmetro recebido.
// Se não receber nenhum argumento no segundo parâmetro, retorna todos os documentos da collection.
export const read = async (coll, filter = {}) => {
  
  try {    
    const db = client.db('store')
    const collection = db.collection(coll)
    const data = collection.find(filter)
    const docs = []
    await data.forEach(doc => docs.push(doc))
    return docs
  } catch (err) {
    console.log(err);
  }
  client.close()
}

export const create = async (coll, query) => {
  try {
    const collection = client.db('store').collection(coll)
    await collection.insertOne(query)
  }catch(err) {
    console.log(err)
  } 

  client.close()
}

export const update = async (coll, filter, query) => {
  try {
    const collection = client.db('store').collection(coll)
    await collection.updateOne(filter, query)
  }catch(err) {
    console.log(err)
  } 

  client.close()
}

read('costumers').then(console.log)
// create('costumers', {name: 'Olívia Palito'})
// update('costumers', {name: 'Amélia Rodrigues'}, {$set: {cart:{ cartId: 'new ObjectId()'}}}) 