import React from 'react'
import '../Footer/Footer.css'
import vk from '../Footer/FooterImg/Vector1.svg'
import instagram from '../Footer/FooterImg/Vector2.svg'
import twitter from '../Footer/FooterImg/twitter.svg'
import gitHub from '../Footer/FooterImg/gitHub.svg'
export default function Footer() {
  return (
    <div>
        <footer>
            <div className='footer_flex'>
                <div className='footer_flex_icons'>
                    <img src={vk} alt='vk'/>
                    <img src={instagram} alt='vk'/>
                    <img src={gitHub} alt='vk'/>
                    <img src={twitter} alt='vk'/>
                </div>
                <div className='footer_flex_text'>
                    <p>© 2023 frontend-dev.com</p>
                </div>
            </div>
        </footer>
    </div>
  )
}
