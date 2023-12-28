import React from 'react'
import { FaGithub , FaLinkedin , FaWhatsapp } from "react-icons/fa";

export default function Sidebarfooter() {
  return (
    <div className='image__footer'>
        
        <ul className='footer__list'>
            <li className='list__options'><a href='https://ivanarganda.github.io/ivanarganda/' aria-label='Repository of github where I place projects about development to me'><FaGithub /></a></li>
            <li className='list__options'><a href='https://www.linkedin.com/in/ivan-gonzalez-a41461121/' aria-label='My profile of linkedin'><FaLinkedin /></a></li>
            <li className='list__options'><a href='https://web.whatsapp.com/tel=+34657203570' aria-label='My whatsapp contact where you can chat on me'><FaWhatsapp /></a></li>
        </ul>
        
    </div>
  )
}
