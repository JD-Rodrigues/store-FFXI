import Head from "next/head"
import MainContent from "src/layout/main"
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { createUser } from "src/services/costumersApiFunctions";
import { TCredential } from "src/types";




const Login = () => {

  const credentialResponseHandler = async (response:CredentialResponse) => {
    const credential: "" | TCredential | undefined = response.credential &&  jwt_decode(response.credential)
    
    
    await createUser(
      {
        name: credential && credential.name,
        email: credential && credential.email,
        gid: credential && credential.sub,
        pic: credential && credential.picture,
        cart: {}
      }
      
    )
    console.log(credential)
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