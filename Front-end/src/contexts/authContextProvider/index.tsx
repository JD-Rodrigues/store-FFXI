import { createContext, useState } from "react"
import { IAuthContextProps, TAuthContextValue } from "src/types"

export const AuthContext = createContext<TAuthContextValue>({})

export const AuthContextProvider = ({children}:IAuthContextProps) => {
  const [logged, setLogged] = useState(false)

  return(
    <AuthContext.Provider value={{logged, setLogged}}>
      {children}
    </AuthContext.Provider>
  )
}