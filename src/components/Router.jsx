import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "../../pages/About";
import Accueil from "../../pages/Accueil";
import Erreur from "../../pages/Erreur";
import Logement from "../../pages/Logement";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="About" element={<About />} />
        <Route path="/error" element={<Erreur />} />
        <Route path="Logement/:id" element={<Logement />} />
        <Route path="/*" element={<Navigate to ="/error" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
