import Head from "next/head"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import ItemHistory from "src/components/item_history"
import { AuthContext } from "src/contexts/authContextProvider"
import { CartContext } from "src/contexts/cartContextProvider"
import { logout } from "src/services/authFunctions"



const Profile = () => {
  const context = useContext(AuthContext)

  const router = useRouter()

  

  useEffect(()=> {
    context.logged === false && router.push('/login')
  },[context.logged])


  return(
    <>
      <Head>
          <title>Profile | Kampler Store</title>
          <meta name="description" content="User page" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="profile__header">
        <section  className="profile__header__cover">
          <section className="profile__header__details">
            <p className="profile__header__name">{ context.user ? context.user!.name : "" }</p>
            <p className="profile__header__email">{ context.user ? context.user!.email : "" }</p>
          </section>
          <div className="profile__header__pic__wrapper">
            <img 
              src={ context.user ? context.user!.pic : "" } 
              className="profile__header__pic"
            />
          </div>
        </section>
        <section className="profile__welcome-tab">
          <p>WELCOME</p>
          <p 
            className="logout__button"
            onClick={()=> {
              logout(context.setLogged!)
              console.log(context.logged)
            }}
          > 
            LOGOUT
          </p>
        </section>
      </header>
      <main className="profile__main">
        <article className="profile__main__history">
          <h1 className="profile__main__title">
            PURCHASE HISTORY
          </h1>
          <ItemHistory />
          <ItemHistory />
          <ItemHistory />
        </article>
      </main>
    </>
  )
}

export default Profile