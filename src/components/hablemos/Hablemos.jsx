import React from 'react'
import './hablemos.css'
import { Link } from "react-router-dom"

export default function Hablemos() {
  return (
    <div className='containerHablemos' id="SectionHablemos">
        <a></a>
        <div className='leftHablemos'>
            <h1 className='mainHeaderHablemosR'>Hablemos</h1>
            <img className="imgSagyTalk" src={process.env.PUBLIC_URL + 'SagyHablemos.png'} alt="SagyTalk.png"/>
        </div>
        <div className='rigthHablemos'>
            <h1 className='mainHeaderHablemos'>Hablemos</h1>
            <p className='bodyHablemos'>Cada mes que pasas sin revisar tu factura de servicios públicos es una oportunidad de ahorro que se pierde. No lo pienses más y empieza a ahorrar con Sagy.</p>
            <button className="buttonSagyHablemos"><a className="link"  href="https://wa.me/573243205821" target="_blank"><img className="wpp" src={process.env.PUBLIC_URL + 'Wpp.png'}></img></a><a className="linkAx"  href="https://wa.me/573243205821" target="_blank">Haz clic aquí</a></button>
        </div>
    </div>
  )
}
