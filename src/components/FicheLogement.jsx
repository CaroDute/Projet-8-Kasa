import { useParams } from "react-router-dom";
import logements from "/public/logements.json";

function FicheLogement() {
  const { id } = useParams();

  const logement = logements.find((logement) => logement.id === id);

  return (
    <div>
      <div className="gallery">
        <img src={logement.cover} alt={logement.description} />
      </div>
      <h2>{logement.title}</h2>
      <p>{logement.location}</p>
      <ul>
        {logement.tags.map((tag, id) => (
          <li key={id}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default FicheLogement;
