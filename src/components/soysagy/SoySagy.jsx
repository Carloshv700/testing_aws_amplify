import React from 'react'
import { Link } from "react-router-dom"
import './soysagy.css'

export default function SoySagy() {
  return (
    <div className='soySagy' id="SectionSoySagy">
      <div className='container contenedorSoySagy'>
          <div className='questionSoySagy'>
            ¿Revisas tu factura de servicios públicos o simplemente la pagas?
          </div>
          <div className='imagenesHeader'>
            <img className="imgSoySagy" src={process.env.PUBLIC_URL + 'BotSagy.png'} alt="SagyCarac"/>
          </div>
          <div className='chatSoySagy'>
              <img className="imgChathome" src={process.env.PUBLIC_URL + 'Chathome.png'} alt="chatSagy"/>
              <img className="imgChathomeR" src={process.env.PUBLIC_URL + 'ChathomeR.png'} alt="chatSagy"/>
              <p className='headerText'>Hola, Soy Sagy,</p>
              <p className='bodyText'>un robot que, con la ayuda de un equipo de personas administra y optimiza el consumo y costo de tus servicios públicos, para que pagues lo justo mes a mes.</p>
          </div>
          
      </div>
      <button className="buttonSoySagyTeCuento"><a className="link"  href="https://wa.me/573243205821" target="_blank">Te cuento cómo</a></button>
    </div>
  )
}
