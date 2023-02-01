import Image from "next/image"
import { DiscordAlt, FacebookSquare, InstagramAlt, Paypal, WhatsappSquare} from "@styled-icons/boxicons-logos"
import LogoLight from 'public/logo-light-transparent.png'
import { Mail } from "@styled-icons/fluentui-system-filled"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__social__payment">
          <address className="footer__social__area">
            <p>CONTACT US</p>
            <div          className="footer__social__logos"
            >
              <WhatsappSquare className="footer__social__logo" />
              <DiscordAlt
                className="footer__social__logo" 
              />
              <InstagramAlt
              className="footer__social__logo"/>
              <FacebookSquare
              className="footer__social__logo"/>
              <Mail className="footer__social__logo"/>
            </div>
          </address>
          <div className="footer__payment__options">
            <p>SAFE AND SECURE PAYMENT</p>
            <div className="footer__payment__logos">
              <Paypal className="footer__paypal__logo" 
              />
            </div>
          </div>
        </div>
        <div className="footer__brand__copy">
          <div className="footer__brand__container">
            <Image src={LogoLight} alt="" className="footer__brand__pic"/>
          </div>
          <p className="footer__copy__text">© 2023 KAMPLER STORE LTD. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer