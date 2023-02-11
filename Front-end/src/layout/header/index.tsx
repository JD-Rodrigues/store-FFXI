import { Cart, User } from "@styled-icons/boxicons-regular"
import Image from "next/image"
import Link from "next/link"
import logo from 'public/logo.png'
import { useEffect, useState } from "react"



const Header = () => {
  const [screenWidth, setScreenWidth] = useState(Number)
  const [showMenu, setShowMenu] = useState(false)

  const setWindowWidth = () => {
    setScreenWidth(window.innerWidth)
  }

  const changeShowMenu = () => {
    setShowMenu(prevState => !prevState)
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
    console.log(showMenu)
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
            href="/category/weapons" 
            className="header__menu__item link"
          >
            Weapons
          </Link>
          <Link
            href="/category/missions" 
            className="header__menu__item link"
          >
            Missions
          </Link>
          <Link
            href="/category/levelling" 
            className="header__menu__item link"
          >
            Power leveling
          </Link>
          <Link 
            href="/category/accounts" 
            className="header__menu__item link"
          >
            Accounts
          </Link>
          <Link
            href="/profile" 
            className="header__menu__item link menu__login__link"
          >
            Log in/Create account
          </Link>
        </ul>
      </nav>
      <div className="user__panel">
      {
        screenWidth >= 768 && 
          <Link 
            href="/profile"
            className="user__icon"
          >
            <User />
          </Link> 
      }       
          <Link 
            href="/cart"
            className="cart__icon" 
          >
            <Cart/>
          </Link> 

      </div>
    </div>
  )
}

export default Header