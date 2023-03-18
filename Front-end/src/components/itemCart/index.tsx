import { Trash } from "@styled-icons/boxicons-regular"
import { TCartCard } from "src/types"


const ItemCart = ({img, title, description, price}:TCartCard) => {
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
        <select className="item__cart__quantity">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <div className="item__cart__price-delete">
          <p className="item__cart__price">{`$${price}`}</p>
          <Trash className="item__cart__delete" />
        </div>
      </section>
      
    </article>
  )
}

export default ItemCart 