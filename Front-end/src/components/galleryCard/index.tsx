import Image from "next/image"
import { TGalleryCard } from "src/types"


const GalleryCard = ({title, pic, price}:TGalleryCard) => {
  return (
    <div className='product__card'>
      <div className='product__card__info' >
        <div className="product__card__pic__wrapper">
        <img
          className='product__card__pic'
          src={pic} 
          alt={title}
        />
        </div>
        <div className="product__card__title-price__wrapper">
          <p 
            className='product__card__title'>{title}
          </p>
          <p 
            className='product__card__price'>{`$${price}`}
          </p>
        </div>
        
             
      </div>
      <button className="order__button">
          ADD TO CART
      </button>   
    </div>
  )
}

export default GalleryCard