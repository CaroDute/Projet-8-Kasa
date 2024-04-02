import Layout from "../src/components/Layout";
import { NavLink } from "react-router-dom";

function Erreur() {
  return (
    <Layout>
      <div className="error">
        <h1 className="error__title">404</h1>
        <p className="error__text">Oups! La page que vous demandez n&apos;existe pas.</p>
        <NavLink to="/" className="error__return">Retourner sur la page d&apos;accueil </NavLink>
      </div>
    </Layout>
  );
}

export default Erreur;
