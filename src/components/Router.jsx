import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Accueil from "../../pages/Accueil";
import Erreur from "../../pages/Erreur";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
