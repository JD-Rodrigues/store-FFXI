import { Trash } from "@styled-icons/boxicons-regular"
import { useContext } from "react"
import { AuthContext } from "src/contexts/authContextProvider"
import { CartContext } from "src/contexts/cartContextProvider"
import { changeQuantity, getCart, removeItemFromCart, setCartHandler, updateCart } from "src/services/cartApiFunctions"
import { getProductByID } from "src/services/prismicFunctions"
import { TCartCard } from "src/types"


const ItemCart = ({productId, img, title, description, price, quantity}:TCartCard) => {
  const cartContext = useContext(CartContext)
  const userContext = useContext(AuthContext)

  if(!('cart' in cartContext)) {
    throw new Error('O estado "cart" está nulo ou undefined')
  }  


  const removeItemHandler = async () => {
    const updatedCart = removeItemFromCart(productId, cartContext.cart)

    if(userContext.user) {
      cartContext.setLoading(true)
      await updateCart(userContext.user.gid, updatedCart)
      await setCartHandler(userContext.user.gid, getCart, cartContext.setCart)
      cartContext.setLoading(false)
    }      
  } 

  const changeQuantityHandler = async (quant:string) => { 
    cartContext.setLoading(true)
    console.log(userContext.user )
    console.log(cartContext.selectedProduct)
    const product = await getProductByID(productId)

    userContext.user 
    && await changeQuantity(userContext.user.gid, cartContext.cart, product, updateCart, cartContext.setCart, setCartHandler, Number(quant))

    cartContext.setLoading(false)
  }

  return (
    <article className="item__cart">
      <img 
        src={img}
        className="item__cart__pic"
      />
      <section className="item__cart__details">
        <div className="item__cart__description">
          <h3 className="item__cart__description__title">
            {title}
          </h3>
          <section className="item__cart__description__text">
          {`${description.substring(0,60)}...`}
          </section>
        </div>
        <select 
          className="item__cart__quantity"
          onChange={(e)=>changeQuantityHandler(e.target.value)}
        >
            <option selected={quantity === 1}>1</option>
            <option selected={quantity === 2}>2</option>
            <option selected={quantity === 3}>3</option>
            <option selected={quantity === 4}>4</option>
            <option selected={quantity === 5}>5</option>
        </select>
        <div className="item__cart__price-delete">
          <p className="item__cart__price">{`$${price}`}</p>
          <Trash 
            className="item__cart__delete"
            onClick={removeItemHandler}
            />
        </div>
      </section>
      
    </article>
  )
}

export default ItemCart