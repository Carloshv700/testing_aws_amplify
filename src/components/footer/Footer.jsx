import React from 'react'
import './footer.css'
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className='containerFooter'>
      <div className='leftFooter'>
        <img className="imgSagyFooter" src={process.env.PUBLIC_URL + 'SagyFooter.png'} alt="SagyLogoWhite.png"/>
      </div>
      <div className='centerFooter'>
          {/**<h3 className='mainTyCFooter'>Terminos y condiciones</h3>**/}
          <Link className="mainTyCFooter" to="/politica-de-privacidad" target="_blank"><h3>Terminos y condiciones</h3></Link>
          <h3 className='secondTyCFooter'>Tratamiento de datos personales</h3>
          <h3 className='lastTyCFooter'>Derechos reservados Futturing 2022</h3>
      </div>
      <div className='rigthFooter'>
          <h2 className='msjFooter'>Sigamos conectados </h2>
          <a className="link"  href="https://instagram.com/sagy.co?igshid=YmMyMTA2M2Y=" target="_blank"><img className="imgFooterInstagram" src={process.env.PUBLIC_URL + 'InsFooter.png'} alt="IgLogoFooter.png"/></a>
          <a className="link"  href="https://wa.me/573243205821" target="_blank"><img className="imgFooterWpp" src={process.env.PUBLIC_URL + 'FooterWpp.png'} alt="WppLogoFooter.png"/></a>
      </div>
    </div>
  )
}
