import { TOrderButtonProps } from "src/types"

const OrderButton = ({text}:TOrderButtonProps) => {
  return(
    <button className="order__button">
          {text}
    </button>  
  )
}

export {OrderButton}