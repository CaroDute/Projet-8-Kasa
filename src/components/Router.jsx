import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Accueil from "../../pages/Accueil";
import Erreur from "../../pages/Erreur";
import Logement from "../../pages/Logement";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<Erreur />} />
        <Route path="/Logement/:id" element={<Logement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
