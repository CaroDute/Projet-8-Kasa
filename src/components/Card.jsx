import { useNavigate } from "react-router-dom";
import logements from "/public/logements.json";

// eslint-disable-next-line react/prop-types
function Card() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    const idLogement = logements.some((logement) => logement.id === id);
    if (!idLogement) {
      navigate("/error");
    } else {
      navigate(`/Logement/${id}`);
    }
  };

  const cards = logements.map((logement, index) => (
    <div
      key={index}
      className="cards__single"
      onClick={() => handleClick(logement.id)}
    >
      <div className="cards__single-content">
        <img
          className="cards__single-img"
          src={logement.cover}
          alt={logement.description}
        />
        <p className="cards__single-text">{logement.title}</p>
      </div>
    </div>
  ));

  return <div className="cards">{cards}</div>;
}

export default Card;
