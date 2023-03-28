import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { checkUserInDatabase, createUser } from "src/services/costumersApiFunctions";
import { TCredential } from "src/types";
import { useContext, useEffect } from "react";
import { AuthContext } from "src/contexts/authContextProvider";
import { login } from "src/services/authFunctions";
import {v4 as uuid} from 'uuid'
import { getCart, setCartHandler } from "src/services/cartApiFunctions";
import { CartContext } from "src/contexts/cartContextProvider";
import LoadingScreen from '../loadingScreen';


const LoginCard = ()=> {
  const userContext = useContext(AuthContext)
  const cartContext = useContext(CartContext)
  
  if(!('setCart' in cartContext)) {
    throw new Error('O carrinho está nulo!')
  }

  const loginLogoutHandler = async (
    googleId: string | (() => string), 
    credential: "" | TCredential | undefined
    ) => {
    const userFound =  await checkUserInDatabase(googleId)
    
    if(await userFound.length > 0) {
      userContext!.setUser!(userFound[0])
      login(userContext!.setLogged!)      
      await setCartHandler(userFound[0].gid, getCart, cartContext.setCart)  
      userContext!.setModalLogin(false)
          
    } else {
      await createUser(
        {
          name: credential && credential.name,
          email: credential && credential.email,
          gid: credential && credential.sub,
          pic: credential && credential.picture,
          cart: {
            orderId: uuid(),
            date: Date(),
            opened: false,
            items: []
          }
        }        
      )
      
      const registredUser = await checkUserInDatabase(googleId)
      
      if (registredUser.length > 0) {
        userContext!.setUser!(registredUser[0])
        login(userContext!.setLogged!)
        
        await setCartHandler(registredUser[0].gid, getCart, cartContext.setCart)
        userContext!.setModalLogin(false)
      }    
      
    }
  }

  

  const credentialResponseHandler = async (response:CredentialResponse) => {

    const credential: "" | TCredential | undefined = response.credential &&  jwt_decode(response.credential)

    const googleId = credential!.sub
    userContext!.setLoadingLogin(true)
    await loginLogoutHandler(googleId, credential)
    userContext!.setLoadingLogin(false)
  }
  return(
    <>
      <article className="login">
        <img 
          src="/kampler-members.png" 
          className="login__logo" 
        />
        <p className="login__label">
          LOG IN USING YOUR GOOGLE ACCOUNT
        </p>   
        <GoogleLogin
          onSuccess={response => credentialResponseHandler(response)}
          onError={() => {
            console.log('Login Failed');
          }}
        />         
      </article>
      {
        userContext!.loadingLogin &&
        <LoadingScreen />
      }
    </>
  )
}

export default LoginCard