import Menures from "../menures/Menures"
import "./topbar.css"
{/**import { Link } from "react-router-dom"**/}


export default function TopBar() {
    return (
        <div className="top">
            <input type='checkbox' id='checkR' className='btnRTop'/>
            <div className="auxMenu"><Menures/></div>
            <div className="topLeft">
                <a href="/" target=""><img className="topIconSagy" src={process.env.PUBLIC_URL + 'Sagy Logo.png'} alt="logo"/></a>
            </div>
            <div className="buttonResponsive">
                <button className="topListAhorremosButton"><a className="link"  href="https://wa.me/573243205821" target="_blank">Ahorremos</a></button>
                
                <label for="checkR" className="checkbtn" id='IdCheck'>
                    <img className="imgBar" src={process.env.PUBLIC_URL + 'menubar.png'} alt="BarMenu.png"/>
                </label>
            </div>
            <div className="secondSectionTop">
                <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem">
                            {/**<Link className="linkCenter" to="/SoySagySect">Soy Sagy</Link>**/}
                            <a className="linkCenter" href="/#SectionSoySagy">Soy Sagy</a>
                        </li>
                        <li className="topListItem">
                            {/**<Link className="linkCenter" to="/">¿Cómo te ayudamos?</Link>**/}
                            <a className="linkCenter" href="/#SectionComoTeAyudo">¿Cómo te ayudamos?</a>
                        </li>
                        <li className="topListItem">
                            {/**<Link className="linkCenter" to="/">¿Por qué elegirnos?</Link>**/}
                            <a className="linkCenter" href="/#SectionPorqueElegirme">¿Por qué elegirnos?</a>
                        </li>
                        <li className="topListItem">
                            {/**<Link className="linkCenter" to="/">Opiniones</Link>**/}
                            <a className="linkCenter" href="/#SectionAliados">Aliado</a>
                        </li>
                        <li className="topListItem">
                            {/**<Link className="linkCenter" to="/">¿Dudas?</Link>**/}
                            <a className="linkCenter" href="/#SectionDudas">¿Dudas?</a>
                        </li>
                        <li className="topListItem">
                            {/**<Link className="linkCenter" to="/">Hablemos</Link>**/}
                            <a className="linkCenter" href="/#SectionHablemos">Hablemos</a>
                        </li>
                    </ul>
                </div>
                <div className="topRight">{
                        <ul className="topListR">
                            <li className="topListItemRButton">
                                <button className="topListAhorremosButton"><a className="link"  href="https://wa.me/573243205821" target="_blank">Ahorremos</a></button>
                            </li>
                            <li className="topListItemR">
                                <a href="https://www.instagram.com/sagy.co/?igshid=YmMyMTA2M2Y%3D" target="_blank"><img className="topIcon" src={process.env.PUBLIC_URL + 'InsFooter.png'} alt="IgLogoFooter.png"/></a>
                                <a href="https://wa.me/573243205821" target="_blank"><img className="topIcon" src={process.env.PUBLIC_URL + 'FooterWpp.png'} alt="WppLogo.png"/></a>
                            </li>
                        </ul>
                    }
                </div>
            </div>
            
        </div>
    )
}
