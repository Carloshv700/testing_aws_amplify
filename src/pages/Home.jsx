import SoySagy from '../components/soysagy/SoySagy'
import ComoTeAyudo from '../components/comoteayudo/ComoTeAyudo'
import PorqueElegirme from '../components/porqueelegirme/PorqueElegirme'
import './home.css'
import Opiniones from '../components/opiniones/Opiniones'
import Dudas from '../components/dudas/Dudas'
import Hablemos from '../components/hablemos/Hablemos'
import Footer from '../components/footer/Footer'
import Apoyan from '../components/apoyan/Apoyan'
import Pertenecen from '../components/pertenecen/Pertenecen.jsx'

export default function Home() {
  return (
    <>
        <div className="home">
            <SoySagy/>
            <ComoTeAyudo/>
            <PorqueElegirme/>
            <Pertenecen/>
            {/*<Opiniones/>*/}
            <Dudas/>
            <Hablemos/>
            <Apoyan/>
            <Footer/>
          </div>
    </>
  )
}
