import { Cart, User } from "@styled-icons/boxicons-regular"
import Image from "next/image"
import logo from 'public/logo.png'
import { useEffect, useState } from "react"



const Header = () => {
  const [screenWidth, setScreenWidth] = useState(Number)

  const setWindowWidth = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize', setWindowWidth)
  },[])
 
  return (
    <div className='header container'>
      <Image 
        className="logo"
        src={logo}
        alt='Logotipo Kampler Store'
      />
      <nav>
        <ul className='header__menu__list' >
          <li>Accounts</li>
          <li>Missions</li>
          <li>Power leveling</li>
          <li>Weapons</li>
        </ul>
      </nav>
      <div className="user__panel">
      {screenWidth >= 768 && <User className="user__icon" />}
      <Cart className="cart__icon" />
      </div>
    </div>
  )
}

export default Header