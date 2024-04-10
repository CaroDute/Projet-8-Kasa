import Banner from "../src/components/Banner";
import Card from "../src/components/Card";
import Layout from "../src/components/Layout";
import { useNavigate } from "react-router-dom";
import logements from "/public/logements.json";

function Accueil() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    const idLogement = logements.some((logement) => logement.id === id);
    if (!idLogement) {
      navigate("/error");
    } else {
      navigate(`/Logement/${id}`);
    }
  };

  const cards = logements.map((logement) => (
    <Card
      key={logement.id}
      image={logement.cover}
      title={logement.title}
      onClick={handleClick}
      id={logement.id}
    />
  ));

  return (
    <Layout>
      <div className="banner__accueil">
        <Banner imageUrl="/Banner1.png" text="Chez vous, partout et ailleurs" />
      </div>
      <div className="cards">{cards}</div>
    </Layout>
  );
}

export default Accueil;
