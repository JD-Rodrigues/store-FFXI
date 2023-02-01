import { Trash } from "@styled-icons/boxicons-regular"


const ItemCart = () => {
  return (
    <article className="item__cart">
      <img 
        src="/gallery__images/item__desc.jpg" 
        className="item__cart__pic"
      />
      <section className="item__cart__details">
        <div className="item__cart__description">
          <h3 className="item__cart__description__title">
            FINAL FANTASY VII REMAKE™ STATIC ARTS TIFA LOCKHART EXOTIC DRESS VER.
          </h3>
          <section className="item__cart__description__text">
            <p>Platform: Merchandise</p>
            <p>Edition: TIFA LOCKHART EXOTIC DRESS Ver.</p>
            <p>Delivery: Shipping</p>
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
          <p className="item__cart__price">$199.99</p>
          <Trash className="item__cart__delete" />
        </div>
      </section>
      
    </article>
  )
}

export default ItemCart 