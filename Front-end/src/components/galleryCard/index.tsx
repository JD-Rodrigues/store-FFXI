import Image from "next/image"
import Link from "next/link"
import { TGalleryCard } from "src/types"
import { OrderButton } from "../orderButton"


const GalleryCard = ({id, title, pic, price, path}:TGalleryCard) => {
  return (
    <div className='product__card'>
      <div className='product__card__info' >
        <Link 
        href={`/item_description/${path}`}
        className="product__card__pic__wrapper">
          <img
            className='product__card__pic'
            src={pic} 
            alt={title}
          />
        </Link>
        <div className="product__card__title-price__wrapper">
          <Link 
            href={`/item_description/${path}`}
            className='product__card__title'
          >
            <p>{title}</p>
          </Link>
          
          <p 
            className='product__card__price'>{`$${price}`}
          </p>
        </div>       
      </div>
      <OrderButton 
      text="ADD TO CART"
      productId={id}
      />
    </div>
  )
}

export default GalleryCard