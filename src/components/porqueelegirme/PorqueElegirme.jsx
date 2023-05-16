import React from 'react'
import './porqueelegirme.css'

export default function PorqueElegirme() {
  return (
    <div className='porqueElegirme' id="SectionPorqueElegirme">
        <div className='containerHeaderPE'>
          <h1 className='headerPE'>¿Por qué elegirnos?</h1>
        </div>
        <div className='containerUl'>
            <ul className='contenedor-item'>
                <li>
                    <img className="imgBeneficio1" src={process.env.PUBLIC_URL + 'Beneficio1.png'} alt="Beneficio1"/>
                    <img className="imgBeneficio1Hover" src={process.env.PUBLIC_URL + 'Beneficio1Hover.png'} alt="Beneficio1Hover"/>
                </li>
                <li>
                    <img className="imgBeneficio1" src={process.env.PUBLIC_URL + 'Beneficio2.png'} alt="Beneficio2"/>
                    <img className="imgBeneficio1Hover" src={process.env.PUBLIC_URL + 'Beneficio2Hover.png'} alt="Beneficio2Hover"/>
                </li>
                <li>
                    <img className="imgBeneficio1" src={process.env.PUBLIC_URL + 'Beneficio3.png'} alt="Beneficio3"/>
                    <img className="imgBeneficio1Hover" src={process.env.PUBLIC_URL + 'Beneficio3Hover.png'} alt="Beneficio3Hover"/>
                </li>
            </ul>
        </div>
        
    </div>
  )
}
