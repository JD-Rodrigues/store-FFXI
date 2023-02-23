export const login = (setLogged:React.Dispatch<React.SetStateAction<boolean>>) => {

  setLogged(true)
}

export const logout = (setLogged:React.Dispatch<React.SetStateAction<boolean>>)=> {
  
  setLogged(false) 
}