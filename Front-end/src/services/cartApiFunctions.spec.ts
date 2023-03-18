import { addItemToCart, changeQuantity, removeItemFromCart, removeItemHandler } from "./cartApiFunctions";


const product = {
  id: '0a55c6eb-269f-42e3-baf4-19ac68e757d5',
  uid: 'prancha-de-cabelo',
  url: 'http://minhaloja.com/item/prancha-de-cabelo',
  type: 'item',
  href: 'http://minhaloja.com/item/prancha-de-cabelo',
  tags: ['cabelo', 'cuidados pessoais'],
  first_publication_date: '03-08-2023',
  last_publication_date: '03-08-2023',
  slugs: ['prancha-de-cabelo'],
  linked_documents: [''],
  lang: 'pt-BR',
  alternate_languages: [],
  data: {
    title: 'Prancha de cabelo',
    gallery_image:{url:'http://imagemdaprancha.jpg'},
    price: 19.90,
    description: [{text:'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.'}]
  }
}

describe('addItemToCart() tests', ()=> {
  const uuid = jest.fn().mockImplementation(()=> 'ea0380b8-4c2e-4d5c-838b-400685526a6d')

  const Date = jest.fn().mockImplementation(()=> 'Fri Mar 03 2023 00:44:37 GMT-0300 (Horário Padrão de Brasília)')

  test('Retorna o carrinho contendo 2 itens, incluindo o produto "prancha de cabelo".', ()=> {
    const cart = {
      orderId: 'ea0380b8-4c2e-4d5c-838b-400685526a6d',
      date: 'Fri Mar 03 2023 00:44:37 GMT-0300 (Horário Padrão de Brasília)',
      opened: true,
      items: [
        {
          id: 'def3fd61-a04f-431a-970d-19ca55843701',
          title: 'Pente cacheador',
          desc: {text: 'Um pente que auxilia no processo de cacheamento dos cabelos.'},
          pic: 'http://pentecacheador.jpg',
          price: 8.75,
          quant: 1
        }
      ]
    }


    const updatedCart = addItemToCart(cart, product, uuid, Date)

    expect(updatedCart).toEqual({
      orderId: 'ea0380b8-4c2e-4d5c-838b-400685526a6d',
      date: 'Fri Mar 03 2023 00:44:37 GMT-0300 (Horário Padrão de Brasília)',
      opened: true,
      items: [
        {
          id: 'def3fd61-a04f-431a-970d-19ca55843701',
          title: 'Pente cacheador',
          desc: {text: 'Um pente que auxilia no processo de cacheamento dos cabelos.'},
          pic: 'http://pentecacheador.jpg',
          price: 8.75,
          quant: 1
        },
        {
          id: '0a55c6eb-269f-42e3-baf4-19ac68e757d5',
          title: 'Prancha de cabelo',
          desc:{text:  'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.'},
          pic: 'http://imagemdaprancha.jpg',
          price: 19.90,
          quant: 1
        }
      ]
    })
  })

  test('Retorna o cart com "orderId" e "data" preeenchidos, "opened: true" e apenas 1 produto no array "items" (o produto "prancha de cabelo").', () => {
    const cart = {
      orderId: '',
      date: '',
      opened: false,
      items: []
    }

    const updatedCart = addItemToCart(cart, product, uuid, Date)

    expect(updatedCart).toEqual({
      orderId: 'ea0380b8-4c2e-4d5c-838b-400685526a6d',
      date: 'Fri Mar 03 2023 00:44:37 GMT-0300 (Horário Padrão de Brasília)',
      opened: true,
      items: [
        {
          id: '0a55c6eb-269f-42e3-baf4-19ac68e757d5',
          title: 'Prancha de cabelo',
          desc: {text:  'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.'},
          pic: 'http://imagemdaprancha.jpg',
          price: 19.90,
          quant: 1
        }
      ]
    })
  })
})

describe('changeQuantity() tests', ()=>{
  test('Aumenta a quantidade do produto na lista de itens do cart em 1', async ()=>{
    const userGid = '64016d265a2d6849dee0ab6c'

    const cart = {
      orderId: 'ea0380b8-4c2e-4d5c-838b-400685526a6d',
      date: 'Fri Mar 03 2023 00:44:37 GMT-0300 (Horário Padrão de Brasília)',
      opened: true,
      items: [
        {
          id: '0a55c6eb-269f-42e3-baf4-19ac68e757d5',
          title: 'Prancha de cabelo',
          desc: {
            text: 'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.'
          },
          pic: 'http://imagemdaprancha.jpg',
          price: 19.90,
          quant: 1
        }
      ]
    }

    const updateCart = jest.fn()
    const setCart = jest.fn()
    const setCartHandler = jest.fn()

    await changeQuantity(userGid, cart, product, updateCart, setCart, setCartHandler)

    expect(cart).toEqual({
      orderId: 'ea0380b8-4c2e-4d5c-838b-400685526a6d',
      date: 'Fri Mar 03 2023 00:44:37 GMT-0300 (Horário Padrão de Brasília)',
      opened: true,
      items: [
        {
          id: '0a55c6eb-269f-42e3-baf4-19ac68e757d5',
          title: 'Prancha de cabelo',
          desc: {text: 'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.'},
          pic: 'http://imagemdaprancha.jpg',
          price: 19.90,
          quant: 2
        }
      ]
    })


  })

  test('Aplica o valor passado no parâmetro opcional "value" como valor para a quantidade do item no cart.', async ()=>{
    const userGid = '64016d265a2d6849dee0ab6c'

    const cart = {
      orderId: 'ea0380b8-4c2e-4d5c-838b-400685526a6d',
      date: 'Fri Mar 03 2023 00:44:37 GMT-0300 (Horário Padrão de Brasília)',
      opened: true,
      items: [
        {
          id: '0a55c6eb-269f-42e3-baf4-19ac68e757d5',
          title: 'Prancha de cabelo',
          desc:{text: 'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.'},
          pic: 'http://imagemdaprancha.jpg',
          price: 19.90,
          quant: 2
        }
      ]
    }

    const updateCart = jest.fn()
    const setCart = jest.fn()
    const setCartHandler = jest.fn()

    await changeQuantity(userGid, cart, product, updateCart, setCart, setCartHandler, 5)

    expect(cart).toEqual({
      orderId: 'ea0380b8-4c2e-4d5c-838b-400685526a6d',
      date: 'Fri Mar 03 2023 00:44:37 GMT-0300 (Horário Padrão de Brasília)',
      opened: true,
      items: [
        {
          id: '0a55c6eb-269f-42e3-baf4-19ac68e757d5',
          title: 'Prancha de cabelo',
          desc:{text:  'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.'},
          pic: 'http://imagemdaprancha.jpg',
          price: 19.90,
          quant: 5
        }
      ]
    })
  })

  test('Chama o método console.log() com a informação: "Você não está passando o argumento para o parâmetro value ou está passando-o com o valor 0."', async ()=>{
    const userGid = '64016d265a2d6849dee0ab6c'

    const cart = {
      orderId: 'ea0380b8-4c2e-4d5c-838b-400685526a6d',
      date: 'Fri Mar 03 2023 00:44:37 GMT-0300 (Horário Padrão de Brasília)',
      opened: true,
      items: [
        {
          id: '0a55c6eb-269f-42e3-baf4-19ac68e757d5',
          title: 'Prancha de cabelo',
          desc: {text: 'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.'},
          pic: 'http://imagemdaprancha.jpg',
          price: 19.90,
          quant: 2
        }
      ]
    }

    const updateCart = jest.fn()
    const setCart = jest.fn()
    const setCartHandler = jest.fn()
    const spyConsoleLog = jest.spyOn(console, 'error') 

    await changeQuantity(userGid, cart, product, updateCart, setCart, setCartHandler, -2)

    expect(spyConsoleLog).toHaveBeenCalledWith("Você está passando um número negativo como argumento para o parâmetro value. Este parâmetro deve receber um número positivo ou ser deixado em branco.") 
  })
})

describe('Testes da função removeItemFromCart()', ()=> {
  test('Retorna o carrinho atualizado, com apenas 1 item.', async ()=> {

    const productId = '0a55c6eb-269f-42e3-baf4-19ac68e757d5'

    const cart = {
      orderId: 'ea0380b8-4c2e-4d5c-838b-400685526a6d',
      date: 'Fri Mar 03 2023 00:44:37 GMT-0300 (Horário Padrão de Brasília)',
      opened: true,
      items: [
        {
          id: '0a55c6eb-269f-42e3-baf4-19ac68e757d5',
          title: 'Prancha de cabelo',
          desc:{text:  'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.'},
          pic: 'http://imagemdaprancha.jpg', 
          price: 19.90,
          quant: 2
        },
        {
          id: 'def3fd61-a04f-431a-970d-19ca55843701',
          title: 'Pente cacheador',
          desc: {text: 'Um pente que auxilia no processo de cacheamento dos cabelos.'},
          pic: 'http://pentecacheador.jpg',
          price: 8.75,
          quant: 1
        }
      ]
    }
  
    const updatedCart = {
      orderId: 'ea0380b8-4c2e-4d5c-838b-400685526a6d',
      date: 'Fri Mar 03 2023 00:44:37 GMT-0300 (Horário Padrão de Brasília)',
      opened: true,
      items: [
        {
          id: 'def3fd61-a04f-431a-970d-19ca55843701',
          title: 'Pente cacheador',
          desc: {text: 'Um pente que auxilia no processo de cacheamento dos cabelos.'},
          pic: 'http://pentecacheador.jpg',
          price: 8.75,
          quant: 1 
        }
      ]
    }    

    const returnOfFunction = removeItemFromCart(productId, cart) 

    expect(returnOfFunction).toEqual(updatedCart)
    
  })

  test('Retorna o carrinho atualizado, sem nenhum item (array vazio como valor da propriedade "items"), string vazia como valor de orderId e date e false como valor da propriedade opened.', async ()=> {

    const productId = '0a55c6eb-269f-42e3-baf4-19ac68e757d5'
    const cart = {
      orderId: 'ea0380b8-4c2e-4d5c-838b-400685526a6d',
      date: 'Fri Mar 03 2023 00:44:37 GMT-0300 (Horário Padrão de Brasília)',
      opened: true,
      items: [
        {
          id: '0a55c6eb-269f-42e3-baf4-19ac68e757d5',
          title: 'Prancha de cabelo',
          desc: {text: 'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.'},
          pic: 'http://imagemdaprancha.jpg',
          price: 19.90,
          quant: 2
        }
      ]
    }
  
    const updatedCart = {
      orderId: '',
      date: '',
      opened: false,
      items: [ ]
    }    

    const returnOfFunction = removeItemFromCart(productId, cart) 

    expect(returnOfFunction).toEqual(updatedCart)
    
  })
})

describe('Testes da função removeItemHandler()', ()=> {
  test('Chama as funções removeItemFromCart(), updateCart() e setCartHandler()',async ()=> {
    const cart = {
      orderId: '',
      date: '',
      opened: false,
      items: [ ]
    }  
    const productId = '0a55c6eb-269f-42e3-baf4-19ac68e757d5'
    const userGid = '64016d265a2d6849dee0ab6c'
    const removeItemFromCart = jest.fn()
    const updateCart = jest.fn()
    const setCart = jest.fn()
    const setCartHandler = jest.fn()

    await removeItemHandler(productId, cart, userGid, setCart, removeItemFromCart, setCartHandler, updateCart ) 

    // expect(removeItemFromCart).toHaveBeenCalledTimes(1)
    // expect(updateCart).toHaveBeenCalled()
    // expect(setCartHandler).toHaveBeenCalledTimes(1)
  }) 
}) 