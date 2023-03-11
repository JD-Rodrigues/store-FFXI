import { addItemToCart, changeQuantity, removeItemFromCart } from "./cartApiFunctions";


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
    description: ['Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.']
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
          desc: 'Um pente que auxilia no processo de cacheamento dos cabelos.',
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
          desc: 'Um pente que auxilia no processo de cacheamento dos cabelos.',
          pic: 'http://pentecacheador.jpg',
          price: 8.75,
          quant: 1
        },
        {
          id: '0a55c6eb-269f-42e3-baf4-19ac68e757d5',
          title: 'Prancha de cabelo',
          desc: 'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.',
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
          desc: 'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.',
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
          desc: 'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.',
          pic: 'http://imagemdaprancha.jpg',
          price: 19.90,
          quant: 1
        }
      ]
    }

    const updateCart = jest.fn()
    const setCart = jest.fn()
    const setCartHandler = jest.fn()

    await changeQuantity(userGid, cart, product, 'increment', updateCart, setCart, setCartHandler)

    expect(cart).toEqual({
      orderId: 'ea0380b8-4c2e-4d5c-838b-400685526a6d',
      date: 'Fri Mar 03 2023 00:44:37 GMT-0300 (Horário Padrão de Brasília)',
      opened: true,
      items: [
        {
          id: '0a55c6eb-269f-42e3-baf4-19ac68e757d5',
          title: 'Prancha de cabelo',
          desc: 'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.',
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
          desc: 'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.',
          pic: 'http://imagemdaprancha.jpg',
          price: 19.90,
          quant: 2
        }
      ]
    }

    const updateCart = jest.fn()
    const setCart = jest.fn()
    const setCartHandler = jest.fn()

    await changeQuantity(userGid, cart, product, 'shift', updateCart, setCart, setCartHandler, 5)

    expect(cart).toEqual({
      orderId: 'ea0380b8-4c2e-4d5c-838b-400685526a6d',
      date: 'Fri Mar 03 2023 00:44:37 GMT-0300 (Horário Padrão de Brasília)',
      opened: true,
      items: [
        {
          id: '0a55c6eb-269f-42e3-baf4-19ac68e757d5',
          title: 'Prancha de cabelo',
          desc: 'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.',
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
          desc: 'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.',
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

    await changeQuantity(userGid, cart, product, 'shift', updateCart, setCart, setCartHandler)

    expect(spyConsoleLog).toHaveBeenCalledWith("Você não está passando o argumento para o parâmetro value ou está passando-o com o valor 0.") 
  })
})

describe('Testes da função removeItemFromCart()', ()=> {
  test('', async ()=> {
    const productId = '0a55c6eb-269f-42e3-baf4-19ac68e757d5'
    const userGid = '64016d265a2d6849dee0ab6c'
    const cart = {
      orderId: 'ea0380b8-4c2e-4d5c-838b-400685526a6d',
      date: 'Fri Mar 03 2023 00:44:37 GMT-0300 (Horário Padrão de Brasília)',
      opened: true,
      items: [
        {
          id: '0a55c6eb-269f-42e3-baf4-19ac68e757d5',
          title: 'Prancha de cabelo',
          desc: 'Uma prancha alisadora de cabelos, capaz de atingir altas temperaturas.',
          pic: 'http://imagemdaprancha.jpg',
          price: 19.90,
          quant: 2
        },
        {
          id: 'def3fd61-a04f-431a-970d-19ca55843701',
          title: 'Pente cacheador',
          desc: 'Um pente que auxilia no processo de cacheamento dos cabelos.',
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
          desc: 'Um pente que auxilia no processo de cacheamento dos cabelos.',
          pic: 'http://pentecacheador.jpg',
          price: 8.75,
          quant: 1
        }
      ]
    }
    const updateCart = jest.fn()
    const getCart = jest.fn()
    const setCart = jest.fn()
    const setCartHandler = jest.fn()

    await removeItemFromCart(productId, userGid, cart, updateCart, getCart, setCart, setCartHandler) 

    expect(updateCart).toHaveBeenCalledWith(userGid, updatedCart)
  
    expect(setCartHandler).toHaveBeenCalledWith(userGid, getCart, setCart) 
  })
})