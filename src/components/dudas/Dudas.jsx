import React from 'react'
import './dudas.css'
export default function Dudas() {
  return (
    <div className='dudas' id='SectionDudas'>
        <div className='leftDudas'>
            <div className='headerDudas'>
                <h1 className='mainHeaderDudas'>¿Dudas?</h1>
                <h2 className='secondHeaderDudas'>Aquí te ayudamos a resolverlas</h2>
            </div>
            <input type='checkbox' id='btnView' className='btnMostrar'/>
            <ul className='mainListDudas'> 
                <ul className='firstListDudas'>       
                    <input type='hidden' id='btn'></input>
                    <li className='firstListitem1'>
                        <div className='headDudas'>
                            <a>¿Puedo inscribir cualquier tipo de establecimiento?</a>
                            <div>
                                <img className="imgSignalDudas" src={process.env.PUBLIC_URL + 'SignalDudas.png'} alt="SignalDudas.png"/>
                            </div>
                        </div>
                        <ul className='subListFirstItem1'>
                            <li>Sí. Puedes registrar tu empresa o la empresa donde trabajas si la factura de servicios públicos es de al menos $1'500,000 mensual.</li>
                        </ul>
                    </li>
                    
                    <li className='firstListitem3'>
                        <div className='headDudas'>
                            <a className='SecondDudasItem'>¿Cuánto vale el servicio de <span className='dudasSagyTitle'>Sagy</span>?</a>
                            <div>
                                <img className="imgSignalDudas" src={process.env.PUBLIC_URL + 'SignalDudas.png'} alt="SignalDudas.png"/>
                            </div>
                        </div>
                        <ul className='subListFirstItem3'>
                            <li>Trabajamos por resultados. Nuestra remuneración corresponde a un porcentaje del ahorro que te generemos. Si no ahorras, no pagas.</li>
                        </ul>
                    </li>
                    
                    <li className='firstListitem5'>
                        <div className='headDudas'>
                            <a>¿Cuántas facturas puedo inscribir?</a>
                            <div>
                                <img className="imgSignalDudas" src={process.env.PUBLIC_URL + 'SignalDudas.png'} alt="SignalDudas.png"/>
                            </div>
                        </div>
                        <ul className='subListFirsttem5'>
                            <li>Puedes inscribir tantas facturas como desees.</li>
                        </ul>
                    </li>

                    <li className='secondListitem7'>
                        <div className='headDudas'>
                            <a>¿Cuándo debo pagar a <span className='dudasSagyTitle'>Sagy</span> por su servicio?</a>
                            <div>
                                <img className="imgSignalDudas" src={process.env.PUBLIC_URL + 'SignalDudas.png'} alt="SignalDudas.png"/>
                            </div>
                        </div>
                        <ul className='subListFirstItem7'>
                            <li>Cuando veas reflejado el ahorro directamente en tu factura de servicios públicos. Te mostraremos todas las evidencias de que tu ahorro se debe a nuestra labor.</li>
                        </ul>
                    </li>
                    
                </ul>
                <label for="btnView" id="labelView">Cargar Más</label>
                <ul className='secondListDudas' id='secondListDuda'>
                    <li className='secondListitem1'>
                        <div className='headDudas'>
                            <a>¿Cómo puedo hacer la inscripción de mi factura?</a>
                            <div>
                                <img className="imgSignalDudas" src={process.env.PUBLIC_URL + 'SignalDudas.png'} alt="SignalDudas.png"/>
                            </div>
                        </div>
                        <ul className='subListSecondItem1'>
                            <li>Diligencia el siguiente formulario y uno de nuestros asesores se pondrá en contacto contigo. <a href='https://forms.office.com/r/77WZvtLqsy' target='_blank_'>Clic aquí</a></li>
                        </ul>
                    </li>
                    <li className='secondListitem2'>
                        <div className='headDudas'>
                            <a>¿Tengo que inscribir mi factura cada mes?</a>
                            <div>
                                <img className="imgSignalDudas" src={process.env.PUBLIC_URL + 'SignalDudas.png'} alt="SignalDudas.png"/>
                            </div>
                        </div>
                        <ul className='subListSecondItem2'>
                            <li>No. La inscripción se hace una única vez.</li>
                        </ul>
                    </li>
                    <li className='secondListitem3'>
                        <div className='headDudas'>
                            <a>¿Tengo que pagar para inscribir mi factura?</a>
                            <div>
                                <img className="imgSignalDudas" src={process.env.PUBLIC_URL + 'SignalDudas.png'} alt="SignalDudas.png"/>
                            </div>
                        </div>
                        <ul className='subListSecondItem3'>
                            <li>No. El proceso de inscripción es totalmente gratuito.</li>
                        </ul>
                    </li>
                </ul>
            </ul>
            
        </div>
        <div className='rigthDudas'>
            <img className="imgSagyDudas" src={process.env.PUBLIC_URL + 'SagyDudas.png'} alt="SagyDudas.png"/>
        </div>
    </div>
  )
}
