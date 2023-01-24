import { Cart, User } from "@styled-icons/boxicons-regular"
import Image from "next/image"
import Link from "next/link"
import logo from 'public/logo.png'
import { useEffect, useState } from "react"



const Header = () => {
  const [screenWidth, setScreenWidth] = useState(Number)

  const setWindowWidth = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize', setWindowWidth)
    setWindowWidth()
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
        <ul className='header__menu__list' >
          <Link 
            href="" 
            className="header__menu__item link"
          >
            Accounts
          </Link>
          <Link
            href="" 
            className="header__menu__item link"
          >
            Missions
          </Link>
          <Link
            href="" 
            className="header__menu__item link"
          >
            Power leveling
          </Link>
          <Link
            href="" 
            className="header__menu__item link"
          >
            Weapons
          </Link>
        </ul>
      </nav>
      <div className="user__panel">
      {screenWidth >= 768 && 
        <User className="user__icon" />}
        <Cart className="cart__icon" />
      </div>
    </div>
  )
}

export default Header