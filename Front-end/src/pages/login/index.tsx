import Head from "next/head"
import MainContent from "src/layout/main"
import { CredentialResponse, GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { checkUserInDatabase, createUser } from "src/services/costumersApiFunctions";
import { TCredential } from "src/types";
import { useContext, useEffect } from "react";
import { AuthContext } from "src/contexts/authContextProvider";
import { login } from "src/services/authFunctions";
import { useRouter } from "next/router";
import {v4 as uuid} from 'uuid'
import { getCart, setCartHandler } from "src/services/cartApiFunctions";
import { CartContext } from "src/contexts/cartContextProvider";




const Login = () => {
  const context = useContext(AuthContext)
  const cartContext = useContext(CartContext)
  const router = useRouter()

  if(!('setCart' in cartContext)) {
    throw new Error()
  }

  const loginLogoutHandler = async (
    googleId: string | (() => string), 
    credential: "" | TCredential | undefined
    ) => {
    const userFound =  await checkUserInDatabase(googleId)
    
    if(await userFound.length > 0) {
      context.setUser!(userFound[0])
      login(context.setLogged!)      
      await setCartHandler(userFound[0].gid, getCart, cartContext.setCart)  
      router.push('/') 
          
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
        context.setUser!(registredUser[0])
        login(context.setLogged!)
        
        await setCartHandler(registredUser[0].gid, getCart, cartContext.setCart)
        router.push('/') 
      }
      
      
      
    }
  }

  useEffect(()=> {
    context.logged === true && router.push('/profile')
  },[context.logged])

  const credentialResponseHandler = async (response:CredentialResponse) => {

    const credential: "" | TCredential | undefined = response.credential &&  jwt_decode(response.credential)

    const googleId = credential!.sub
    
    await loginLogoutHandler(googleId, credential)
    
  }

 
  return (
    <>    
      <Head>
          <title>Login | Kampler Store</title>
          <meta name="description" content="Login page" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent>
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
      </MainContent>
    </>
  )
}

export default Login 