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
    console.log("leu!")
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
    console.log('criou!')
  }catch(err) {
    console.log(err)
  } 
}

export const update = async (coll, filter, query) => {
  try {
    const collection = client.db('store').collection(coll)
    await collection.updateOne(filter, {$set: query})
  }catch(err) {
    console.log(err)
  } 

  // client.close()
} 
 
export const remove = async (coll, filter) => {
  try {
    const collection = client.db('store').collection(coll)
    await collection.deleteOne(filter)
  } catch (err) {
    console.log(err)
  }
  client.close()
}

// remove('costumers', {gid: '110584721519611156608'}).then(console.log('usuário deletado!'))