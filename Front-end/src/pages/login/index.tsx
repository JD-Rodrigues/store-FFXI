import Head from "next/head"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import LoginCard from "src/components/loginCard/loginCard"
import { AuthContext } from "src/contexts/authContextProvider"
import MainContent from "src/layout/main"

const Login = () => { 
  const userContext = useContext(AuthContext)
  const router = useRouter()

  useEffect(()=> {
    userContext!.logged === true && router.push('/profile')
  },[userContext!.logged])

  return (
    <>    
      <Head>
          <title>Login | Kampler Store</title>
          <meta name="description" content="Login page" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent>
        <LoginCard/>
      </MainContent>
    </>
  )
}

export default Login 