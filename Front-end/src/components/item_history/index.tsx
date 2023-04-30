import { useState } from "react"
import { OrderButton } from "../orderButton"
import ProductTransactionHistory from "../productTransactionsHistory"
import { TItemHistoryProps, TPurchaseTransaction } from "src/types"


const ItemHistory = ({transaction}:TItemHistoryProps) => {
  const [expandItem, setExpandItem] = useState(true)

  const expandHideItem = () => {
    setExpandItem(prevState => !prevState)
  }

  return(
    <article className="item__history">
      <header className="item__history__header">
        <div 
          className="item__history__header__cell show-hide" 
          onClick={expandHideItem}         
        >
          <p className="item__history__show-hide-btn">{`${expandItem ? "━" : "✚"}`}</p>
        </div>
        <div className="item__history__header__cell">
          <p className="item__history__header__label">
            Order Number
          </p>
          <p 
            className="item__history__header__info" id="order__number"
          >
            {transaction.orderNumber}
          </p>
        </div>
        <div className="item__history__header__cell">
          <p className="item__history__header__label">
            Date
          </p>
          <p 
            className="item__history__header__info"
            id="date"
          >
            {transaction.date}
          </p>
        </div>
        <div className="item__history__header__cell">
          <p className="item__history__header__label">
            State
          </p>
          <p 
            className="item__history__header__info"
            id="state"
          >
            Validated
          </p>
        </div>
        <div className="item__history__header__cell">
          <p className="item__history__header__label">
            Items
          </p>
          <p 
            className="item__history__header__info"
            id="items"
          >
            {transaction.items.length}
          </p>
        </div>
        <div className="item__history__header__cell">
          <p className="item__history__header__label">
            Price
          </p>
          <p 
            className="item__history__header__info"
            id="items"
          >
            {`$${transaction.items.reduce((acc, currentValue)=> acc + currentValue.price, 0)}`}
          </p>
        </div>
      </header>
      
      <section>
        {
          transaction.items.map(item => 
            <div className="product__history__wrapper" key={item.id}> 
              <ProductTransactionHistory 
                expandItem={expandItem} 
                product={item} 
              /> 
            </div>)
        }
      </section>
    </article>
  )
}

export default ItemHistory