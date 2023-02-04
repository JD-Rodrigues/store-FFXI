import { useState } from "react"
import { OrderButton } from "../orderButton"


const ItemHistory = () => {
  const [expandItem, setExpandItem] = useState(false)

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
            26512803
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
            2020-07-04 07:55:19
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
            1
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
            $0.00
          </p>
        </div>
      </header>
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
      <section>

      </section>
    </article>
  )
}

export default ItemHistory