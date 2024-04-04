import { useNavigate, useParams } from "react-router-dom";
import logements from "/public/logements.json";
import Carrousel from "./Carrousel";
import Collapse from "./Collapse";
import Rating from "./Rating";
import { useEffect } from "react";

function FicheLogement() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const idLogement = logements.find((logement) => logement.id === id);

    if (!idLogement) {
      navigate("/error");
    }
  }, [id, navigate]);

  const logement = logements.find((logement) => logement.id === id);

  // Si le logement n'est pas défini, il n'essaye pas d'accéder à ses propriétés
  if (!logement) {
    return null;
  }

  return (
    <div>
      <div className="carrousel">
        <Carrousel />
      </div>
      <div className="logement">
        <div className="logement__content">
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
            <p>
              {logement.host.name.split(" ")[0]}
              <br />
              {logement.host.name.split(" ")[1]}
            </p>
            <img src={logement.host.picture} alt="Photo du propriétaire" />
          </div>
          <div>
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
