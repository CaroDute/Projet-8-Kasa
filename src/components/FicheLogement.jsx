import { useParams } from "react-router-dom";
import logements from "/public/logements.json";
import Carrousel from "./Carrousel";
import Collapse from "./Collapse";
import Rating from "./Rating";

function FicheLogement() {
  const { id } = useParams();

  const logement = logements.find((logement) => logement.id === id);

  return (
    <div>
      <div className="carrousel">
        <Carrousel />
      </div>
      <div className="logement">
        <div>
          <h2 className="logement__title">{logement.title}</h2>
          <p className="logement__location">{logement.location}</p>
          <ul className="logement__tags">
            {logement.tags.map((tag, id) => (
              <li key={id}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="logement__host">
          <div className="logement__host-info">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt="Photo du propriétaire" />
          </div>
          <div className="logement__rating">
            <Rating rating={logement.rating} />
          </div>
        </div>
      </div>
      <div className="logement__collapse">
        <div>
          <Collapse title="Description" text={logement.description} />
        </div>
        <div>
          <Collapse title="Equipement" text={logement.equipments.join(", ")} />
        </div>
      </div>
    </div>
  );
}

export default FicheLogement;
