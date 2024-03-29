import Head from "next/head"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import ItemHistory from "src/components/item_history"
import LoginCard from "src/components/loginCard"
import { AuthContext } from "src/contexts/authContextProvider"
import { CartContext } from "src/contexts/cartContextProvider"
import MainContent from "src/layout/main"
import { logout } from "src/services/authFunctions"
import { getUserTransactions } from "src/services/purchaseHistoryFunctions"
import { TPurchaseTransaction } from "src/types"



const Profile = () => {
  const [purchaseHistory, setPurchaseHistory] = useState<TPurchaseTransaction[]>()
  const userContext = useContext(AuthContext)
  const cartContext = useContext(CartContext)
  const router = useRouter()

  const initialValue = {
    _id: '',
    name: '',
    email: '',
    gid: '',
    pic: '',
    cart: {}
  }

  if(!('setUser' in userContext!)){
    throw new Error('Não há produto selecionado!')
  }

  if(!('setCart' in cartContext!)){
    throw new Error('Não há produto selecionado!')
  }

  useEffect(()=> {
    userContext.logged === false && router.push('/login')
  },[userContext.logged])

  useEffect(()=> {
    if(userContext.user?.gid) {
      const transactions = getUserTransactions(userContext.user?.gid).then(data=>setPurchaseHistory(data))
    }
  },[])

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
            <p className="profile__header__name">{ userContext.user ? userContext.user!.name : "" }</p>
            <p className="profile__header__email">{ userContext.user ? userContext.user!.email : "" }</p>
          </section>
          <div className="profile__header__pic__wrapper">
            <img 
              src={ userContext.user ? userContext.user!.pic : "" } 
              className="profile__header__pic"
            />
          </div>
        </section>
        <section className="profile__welcome-tab">
          <p>WELCOME</p>
          <p 
            className="logout__button"
            onClick={()=> {
              logout(userContext.setLogged!, userContext.setUser!, cartContext.setCart)
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
          {
            purchaseHistory && purchaseHistory.map(transaction => <li className="item__history__wrapper" key={transaction.orderNumber}><ItemHistory transaction={transaction}/></li> )
          }    
        </article>
      </main>
    </>     
  )
}

export default Profile