import { IProductTransactionHistoryProps } from "src/types"

const ProductTransactionHistory = ({expandItem, product}:IProductTransactionHistoryProps) => {

  return (
    <section className={`${expandItem ? "item__history__content" : "reduce__history__item"}`}>
        <img 
          className="item__history__pic"
          src={product.pic} 
        >
        </img>
        <section className="item__history__details">
          <h3 
            className="item__history__title"
          >
            {product.title}
          </h3>
          <p
            className="item__history__quantity"
          >
            {`Quantity: ${product.quant}`}
          </p>
          <p
            className="item__history__price"
          >
            {`Price: $${product.price}`}
          </p>
          <button className="item__history__rebuy__wrapper">
            BUY AGAIN
          </button>
          
        </section>
      </section>
  )
}

export default ProductTransactionHistory