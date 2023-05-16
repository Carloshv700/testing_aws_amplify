import React from 'react'
import './apoyan.css'

export default function Apoyan() {
  return (
    <div className='containerAyudan'>
        <div className='leftAyudan'>
            <h1 className='headerAyudan'>Nos apoyan</h1>
        </div>
        <div className='rightAyudan'>
            <img className="imgSENA" src={process.env.PUBLIC_URL + 'SENAFondoEmprender.png'} alt="LogoSENA"/>
            <img className="imgPresidencia" src={process.env.PUBLIC_URL + 'LogoPresidencia.png'} alt="LogoPresidencia"/>
            <img className="imgAlcaldia" src={process.env.PUBLIC_URL + 'LogoAlcaldiaMedellin.png'} alt="LogoAlcaldiaMedellin"/>
        </div>
        
    </div>
  )
}
