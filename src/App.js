import "./App.css";

import Main from "./components/Main/main"
import Aboutmain from "./components/About/Aboutmain"
import Experiencemain from "./components/Experience/Experiencemain";
import Skillsmain from "./components/Skills/Skillsmain";
import Projectsmain from "./components/Projects/Projectsmain"
import Contactmain from "./components/ReachMe/Contactmain";



import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Main />} />
          <Route  path="/about" element={<Aboutmain />} />
          <Route  path="/Skills" element={<Skillsmain />} />
          <Route  path="/Experience" element={<Experiencemain />} />
          <Route  path="/Projects" element={<Projectsmain />} />
          <Route  path="/ReachMe" element={<Contactmain />} />
          
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
