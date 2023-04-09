import { TCart } from "src/types"
import { TUserObject } from "src/types"

export const login = (setLogged:React.Dispatch<React.SetStateAction<boolean>>) => {

  setLogged(true)
}

export const logout = (setLogged:React.Dispatch<React.SetStateAction<boolean>>, setUser:React.Dispatch<React.SetStateAction<TUserObject | undefined>>, setCart:React.Dispatch<React.SetStateAction<TCart>> )=> {
  
  setLogged(false) 
  setUser(undefined)
  setCart(
    {
      orderId: '',
      date: '',
      opened: false,
      items: []
    }
  )
}