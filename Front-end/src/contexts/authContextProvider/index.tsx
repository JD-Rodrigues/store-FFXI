import { createContext, useContext, useEffect, useState } from "react"
import LoginCard from "src/components/loginCard"
import { IAuthContextProps, TAuthContextValue, TUserObject } from "src/types"
import { CartContext } from "../cartContextProvider"

export const AuthContext = createContext<TAuthContextValue | undefined>(undefined)

export const AuthContextProvider = ({children}:IAuthContextProps) => {
  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState<TUserObject | undefined>()
  const [modalLogin, setModalLogin] = useState(false)
  const cartContext = useContext(CartContext)

  useEffect(()=> {
    const modalElement = document.querySelector('.login__dialog') as HTMLDialogElement

    if(modalElement.hasAttribute('open')) {
      !modalLogin && modalElement.close()
    }else {
      modalLogin && modalElement.showModal()
    }
    console.log(modalLogin)
    
  },[modalLogin])

  return(
    <AuthContext.Provider value={{logged, setLogged, user, setUser, modalLogin, setModalLogin}}>
      {children}
      <dialog 
        className="login__dialog"
      >
        <LoginCard />
        <p 
          className="login__dialog__back"
          onClick={()=>setModalLogin(false)}
        >← Voltar</p>
      </dialog>
    </AuthContext.Provider>
  )
}