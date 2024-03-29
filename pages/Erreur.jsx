import Layout from "../src/components/Layout";

function Erreur() {
  return (
    <Layout>
      <div>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n&apos;existe pas.</p>
        <p>Retourner sur la page d&apos;accueil</p>
      </div>
    </Layout>
  );
}

export default Erreur;
