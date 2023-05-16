import React from 'react'
import './comoteayudo.css'
import { Link } from "react-router-dom"

export default function ComoTeAyudo() {
  return (
    <div className='ComoAyudo' id="SectionComoTeAyudo">
      <div className='containerHeader'>
          <div className='questionComoAyudo'>¿Cómo lo hacemos?</div>
          <h1 className='headerCA'>Así te ayudamos</h1>
          <p className='descriptionHeader'>Soy un asistente virtual que a través de inteligencia artificial y un equipo especialistas en servicios públicos, nos encargamos de: </p>
      </div>
      <div className='containerComoAyudo'>
        <div className='sectionLeft'>
          <img className="imgComoAyudo" src={process.env.PUBLIC_URL + 'ComoLoHago.png'} alt="imgComoayudo"/>
          <p className='descriptionHeaderR'>Soy un asistente virtual que a través de inteligencia artificial y un equipo especialistas en servicios públicos, nos encargamos de: </p>
        </div>
        <div className='sectionRigth'>
          <div className='itemsR'>
              <img className="imgIconsComoAyudo" src={process.env.PUBLIC_URL + 'Icon1CH.png'} alt="icon1"/>
              <p>Descargar automáticamente tu factura de servicios públicos</p>
          </div>
          <div className='itemsR'>
              <img className="imgIconsComoAyudo" src={process.env.PUBLIC_URL + 'Icon2CH.png'} alt="icon2"/>
              <p>Analizar y buscar en tus facturas oportunidades de ahorro</p>
          </div>
          <div className='itemsR'>
              <img className="imgIconsComoAyudo" src={process.env.PUBLIC_URL + 'Icon3CH.png'} alt="icon3"/>
              <p>Entregarte tips y estrategias de ahorro</p>
          </div>
          <div className='itemsR'>
              <img className="imgIconsComoAyudo" src={process.env.PUBLIC_URL + 'Icon4CH.png'} alt="icon4"/>
              <p>Generar reportes mensuales de tus facturas para que valides lo qué estás pagando</p>
          </div>
          <div className='itemsR'>
              <img className="imgIconsComoAyudo" src={process.env.PUBLIC_URL + 'Icon5CH.png'} alt="icon5"/>
              <p>Gestionar reclamos y trámites para que pagues lo justo.</p>
          </div>
        </div>
      </div>
      <div className='containerFinal'>
          <h1 className='headerFinal'>¿Quieres que gestionemos</h1>
          <p className='headerSecond'>tus servicios públicos? <br></br></p>
          <button className="buttonClickAquiCH"><a className="link"  href="https://wa.me/573243205821" target="_blank">Haz clic aquí</a></button>
      </div>
      
    </div>
  )
}
