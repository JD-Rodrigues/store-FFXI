import Head from "next/head"
import MainContent from "src/layout/main"


const Login = () => {
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
          <div 
            id="buttonLogin"
            className="login__button"
          >
          </div>
        </article>
      </MainContent>
    </>
  )
}

export default Login 