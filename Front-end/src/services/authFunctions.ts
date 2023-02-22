export const login = (gid:string | (() => string), setLogged:React.Dispatch<React.SetStateAction<boolean>>) => {
  sessionStorage.setItem(`gid`, JSON.stringify(gid))  
  setLogged(true)
}

export const logout = (setLogged:React.Dispatch<React.SetStateAction<boolean>>)=> {
  sessionStorage.removeItem(`gid`) 
  setLogged(false) 
}