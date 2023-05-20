import React from 'react'
import './pertenecen.css'

export default function Pertenecen() {
  return (
    <div className='containerEmpresas' id='SectionAliados'>
        <div className='headEmpresas'>
            <h1 className='headerEmpresas'>Confían en nosotros</h1>
        </div>
        <div className='carrusel-contenido' id='carrusel-contenido'>
            <ul>
                <li>
                    <img className='imgElement1' src={process.env.PUBLIC_URL + 'LogoSulfoquimica.png'} alt="Sulfoquimica.png"/>
                    <img className='imgElement2' src={process.env.PUBLIC_URL + 'LogoINVESA.png'} alt="Invesa.png"/>
                    <img className='imgElement3' src={process.env.PUBLIC_URL + 'LogoGrupoJaibu.png'} alt="GruoJaibu.png"/>
                    <img className='imgElement4' src={process.env.PUBLIC_URL + 'LogoConpropiedadPH.png'} alt="Conpropiedad.png"/>
                </li>
                {/**<li>
                    <img className="imgElement2" src={process.env.PUBLIC_URL + 'LogoINVESA.png'} alt="Invesa.png"/>
                    <img className="imgElement3" src={process.env.PUBLIC_URL + 'LogoGrupoJaibu.png'} alt="GrupoJaibu.png"/>
                    <img className="imgElement4" src={process.env.PUBLIC_URL + 'LogoConpropiedadPH.png'} alt="Conpropiedad.png"/>
                    <img className="imgElement5" src={process.env.PUBLIC_URL + 'LogoMantia.png'} alt="Mantia.png"/>
                </li>
                <li>
                    <img className="imgElement3" src={process.env.PUBLIC_URL + 'LogoGrupoJaibu.png'} alt="GrupoJaibu.png"/>
                    <img className="imgElement4" src={process.env.PUBLIC_URL + 'LogoConpropiedadPH.png'} alt="Conpropiedad.png"/>
                    <img className="imgElement5" src={process.env.PUBLIC_URL + 'LogoMantia.png'} alt="Mantia.png"/>
                    <img className="imgElement6" src={process.env.PUBLIC_URL + 'LogoCiudadelaPrado.png'} alt="Ciudadela.png"/>
                </li>
                <li>
                    <img className="imgElement4" src={process.env.PUBLIC_URL + 'LogoConpropiedadPH.png'} alt="Conpropiedad.png"/>
                    <img className="imgElement5" src={process.env.PUBLIC_URL + 'LogoMantia.png'} alt="Mantia.png"/>
                    <img className="imgElement6" src={process.env.PUBLIC_URL + 'LogoCiudadelaPrado.png'} alt="CiudadelaPrado.png"/>
                    <img className="imgElement7" src={process.env.PUBLIC_URL + 'LogoAnfer.png'} alt="Anfer.png"/>
  </li>*/}
                <li>
                    <img className="imgElement5" src={process.env.PUBLIC_URL + 'LogoMantia.png'} alt="Mantia.png"/>
                    <img className="imgElement6" src={process.env.PUBLIC_URL + 'LogoCiudadelaPrado.png'} alt="CiudadelaPrado.png"/>
                    <img className="imgElement7" src={process.env.PUBLIC_URL + 'LogoAnfer.png'} alt="Anfer.png"/>
                    <img className="imgElement8" src={process.env.PUBLIC_URL + 'LogoAgroban.png'} alt="Agroban.png"/>
                </li>
            </ul>
            {/** 
            <div className='logosEmpresas' id='carrusel-caja'>
                <div class="carrusel-elemento">
                    <img className="imgElement" src={process.env.PUBLIC_URL + 'LogoSulfoquimica.png'} alt="Sulfoquimica.png"/>
                </div>
                <div class="carrusel-elemento">
                    <img className="imgElement" src={process.env.PUBLIC_URL + 'LogoINVESA.png'} alt="INVESA.png"/>
                </div>
                <div class="carrusel-elemento">
                    <img className="imgElement" src={process.env.PUBLIC_URL + 'LogoGrupoJaibu.png'} alt="GrupoJaibu.png"/>
                </div>
                
                <div class="carrusel-elemento">
                    <img className="imgElement" src={process.env.PUBLIC_URL + 'LogoConpropiedadPH.png'} alt="ConpropiedadPH.png"/>
                </div>
                <div class="carrusel-elemento">
                    <img className="imgElement" src={process.env.PUBLIC_URL + 'LogoMantia.png'} alt="Mantia.png"/>
                </div>
                <div class="carrusel-elemento">
                    <img className="imgElement" src={process.env.PUBLIC_URL + 'LogoCiudadelaPrado.png'} alt="CiudadelaPrado.png"/>
                </div>
                <div class="carrusel-elemento">
                    <img className="imgElement" src={process.env.PUBLIC_URL + 'LogoAnfer.png'} alt="Anfer.png"/>
                </div>
                <div class="carrusel-elemento">
                    <img className="imgElement" src={process.env.PUBLIC_URL + 'LogoAgroban.png'} alt="Agroban.png"/>
                </div> 
            </div>*/}
        </div>
    </div>
  )
}
