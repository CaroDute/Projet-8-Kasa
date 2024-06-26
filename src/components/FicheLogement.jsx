import { useNavigate, useParams } from "react-router-dom";
import logements from "/public/logements.json";
import Carrousel from "./Carrousel";
import Collapse from "./Collapse";
import Rating from "./Rating";
import { useEffect, useState } from "react";
import Tags from "./Tags";

function FicheLogement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState();

  useEffect(() => {
    const idLogement = logements.find((logement) => logement.id === id);

    if (!idLogement) {
      return navigate("/error");
    }
    setLogement(idLogement);
  }, [id, navigate]);

  // Si le logement n'est pas défini, il n'essaye pas d'accéder à ses propriétés
  if (!logement) {
    return null;
  }

  return (
    <div>
      <div className="carrousel">
        <Carrousel image={logement.pictures} id={logement} />
      </div>
      <div className="logement">
        <div className="logement__content">
          <h2 className="logement__title">{logement.title}</h2>
          <p className="logement__location">{logement.location}</p>
          <ul className="logement__tags">
            {logement.tags.map((tag, index) => (
              <Tags text={tag} key={index} />
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
        <div className="logement__collapse-size">
          <Collapse title="Description" text={logement.description} />
        </div>
        <div className="logement__collapse-size">
          <Collapse
            title="Equipement"
            text={
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default FicheLogement;
