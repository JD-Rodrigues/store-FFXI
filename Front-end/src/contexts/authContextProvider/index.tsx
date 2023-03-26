import { createContext, useState } from "react"
import { IAuthContextProps, TAuthContextValue, TUserObject } from "src/types"

export const AuthContext = createContext<TAuthContextValue>({})

export const AuthContextProvider = ({children}:IAuthContextProps) => {
  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState<TUserObject | undefined>()
  const [selectedProduct, setSelectedProduct] = useState()

  return(
    <AuthContext.Provider value={{logged, setLogged, user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}