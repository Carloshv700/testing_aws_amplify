import React from 'react'
import './menures.css'
import { Link } from "react-router-dom"

export default function Menures() {
  return (
    <div className='MenuRes'>
        <div className='topResponsive'>
            <label for="checkR" className="checkbtn2" id='IdCheck2'>
                <img className="imgExitR" src={process.env.PUBLIC_URL + 'logox.png'} alt="exit.png"/>
            </label>
            
        </div>
        <div className='midleResponsive'>
            <ul className='listRes'>
                <li className='itemRespoM'><label for="checkR" className="checkbtn2" id='IdCheck3'><a className="itemRespoM" href="https://sagy.com.co/#SectionSoySagy">Soy Sagy</a></label></li>
                <li className='itemRespo'><label for="checkR" className="checkbtn2" id='IdCheck4'><a className="itemRespo" href="https://sagy.com.co/#SectionComoTeAyudo">¿Cómo te ayudamos?</a></label></li>
                <li className='itemRespo'><label for="checkR" className="checkbtn2" id='IdCheck5'><a className="itemRespo" href="https://sagy.com.co/#SectionPorqueElegirme">¿Por qué elegirnos?</a></label></li>
                <li className='itemRespo'><label for="checkR" className="checkbtn2" id='IdCheck6'><a className="itemRespo" href="https://sagy.com.co/#SectionOpiniones">Opiniones</a></label></li>
                <li className='itemRespo'><label for="checkR" className="checkbtn2" id='IdCheck7'><a className="itemRespo" href="https://sagy.com.co/#SectionDudas">¿Dudas?</a></label></li>
                <li className='itemRespo'><label for="checkR" className="checkbtn2" id='IdCheck8'><a className="itemRespo" href="https://sagy.com.co/#SectionHablemos">Hablemos</a></label></li>
            </ul>
        </div>
        <div className='bottomResponsive'>
            <a href="https://www.instagram.com/sagy.co/?igshid=YmMyMTA2M2Y%3D" target="_blank"><img className="imgInstagramR" src={process.env.PUBLIC_URL + 'IgIcon.png'} alt="IgLogo.png"/></a>
            <a href="https://wa.me/573243205821" target="_blank"><img className="imgWppR" src={process.env.PUBLIC_URL + 'WsIcon.png'} alt="WppLogo.png"/></a>
        </div>
    </div>
  )
}
