import MainContent from "src/layout/main"


const Login = () => {
  return (
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
  )
}

export default Login 