
const ProductTransactionHistory = ({expandItem}:any) => {

  return (
    <section className={`${expandItem ? "item__history__content" : "reduce__history__item"}`}>
        <img 
          className="item__history__pic"
          src="/gallery__images/item__desc.jpg"
        >
        </img>
        <section className="item__history__details">
          <h3 
            className="item__history__title"
          >
            FINAL FANTASY VII REMAKE™ STATIC ARTS TIFA LOCKHART EXOTIC DRESS VER.
          </h3>
          <p
            className="item__history__quantity"
          >
            Quantity: 1
          </p>
          <p
            className="item__history__price"
          >
            Price: $299.99
          </p>
          <button className="item__history__rebuy__wrapper">
            BUY AGAIN
          </button>
          
        </section>
      </section>
  )
}

export default ProductTransactionHistory