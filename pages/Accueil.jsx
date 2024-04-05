import Banner from "../src/components/Banner";
import Card from "../src/components/Card";
import Layout from "../src/components/Layout";

function Accueil() {
  return (
    <Layout>
      <div className="banner__accueil">
      <Banner imageUrl="/Banner1.png" text="Chez vous, partout et ailleurs" />
      </div>
      <Card />
    </Layout>
  );
}

export default Accueil;
