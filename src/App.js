import TopBar from "./components/topbar/TopBar.jsx";
import Home from "./pages/Home";
import TyC from "./pages/TyC.jsx";
import Menures from "./components/menures/Menures.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    /*<Menures/>*/
    <Router>
      <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/politica-de-privacidad" element={<TyC/>}></Route>
      </Routes>
    </Router> 
  );
}

export default App;
