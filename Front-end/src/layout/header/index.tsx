import { Cart, User } from "@styled-icons/boxicons-regular"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import logo from 'public/logo.png'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "src/contexts/authContextProvider"
import { CartContext } from "src/contexts/cartContextProvider"
import { logout } from "src/services/authFunctions"
import { TCartItem } from "src/types"



const Header = () => {
  const [screenWidth, setScreenWidth] = useState(Number)
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()
  const cartContext = useContext(CartContext)
  const userContext = useContext(AuthContext)
  console.log(cartContext)
  const userIconPath = router.route === "/profile" ? "/profile" : "/login"

  const setWindowWidth = () => {
    setScreenWidth(window.innerWidth)
  }

  const changeShowMenu = () => {
    setShowMenu(prevState => !prevState)
  }

  const hideMenuByLinks = () => {
    screenWidth <= 768 && setShowMenu(false)
  }

  if(!('cart' in cartContext)) {
    throw new Error('O cart está nulo!')
  }

  useEffect(()=>{   
    window.addEventListener('resize', ()=> {
      setWindowWidth()
    })
    setWindowWidth()
  },[])

  useEffect(()=> {
    const menuButton = document.querySelector('.mobile__menu__btn')
    menuButton !== null && menuButton.addEventListener('click', changeShowMenu)
  },[])
 
  
  return (
    <div className='header container'>
      <p className="mobile__menu__btn">Menu</p>
      <Link
        href="/"
      >
        <Image 
        className="logo"
        src={logo}
        alt='Logotipo Kampler Store'
      />
      </Link>
      
      <nav className="header__menu">
        <ul className={ showMenu ? 'show__menu' : 'header__menu__list'} >
          <Link
            href="/" 
            className="header__menu__item link"
            onClick={hideMenuByLinks}
          >
            Home
          </Link>
          <Link
            href="/category/weapons" 
            className="header__menu__item link"
            onClick={hideMenuByLinks}
          >
            Weapons
          </Link>
          <Link
            href="/category/missions" 
            className="header__menu__item link"
            onClick={hideMenuByLinks}
          >
            Missions
          </Link>
          <Link
            href="/category/levelling" 
            className="header__menu__item link"
            onClick={hideMenuByLinks}
          >
            Power leveling
          </Link>
          <Link 
            href="/category/accounts" 
            className="header__menu__item link"
            onClick={hideMenuByLinks}
          >
            Accounts
          </Link>
          <Link
            href={userIconPath} 
            className="header__menu__item link menu__login__link"
            onClick={() => {
              hideMenuByLinks()
              logout(userContext!.setLogged!, userContext!.setUser!, cartContext.setCart)
            }}
          >
            {
              userContext?.logged 
                ? "Logout"
                : "Login/Create account" 
            }
          </Link>
        </ul>
      </nav>
      <div className="user__panel">
        <Link 
        href={userIconPath}
        className="user__icon"
        >
          <div className="profile__icon__wrapper">
            {
              <p className={
                userContext?.logged 
                  ? "logged__in__sign"
                  : "logged__out__sign"}>
              </p> 
            }     
            <User />
          </div>
        </Link>             
        <Link 
          href="/cart"
          className="cart__icon" 
        >
          <div className="cart__icon__wrapper">
            {
              userContext?.logged && 'cart' in cartContext
                && <p className="cart__icon__counter">
                    {
                      cartContext.cart.items.reduce((acc:number, item:TCartItem)=> item.quant + acc, 0)
                    }                      
                  </p> 
            }            
            <Cart/>
          </div>  
        </Link> 

      </div>
    </div>
  )
}

export default Header