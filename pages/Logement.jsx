import { useParams } from "react-router-dom";
import Layout from "../src/components/Layout";
import logements from "/public/logements.json";

function Logement() {
  const { id } = useParams();

  const logement = logements.find((logement) => logement.id === id);

  return (
    <Layout>
      <div className="gallery">
        <img src={logement.cover} alt={logement.description} />
      </div>
    </Layout>
  );
}

export default Logement;
