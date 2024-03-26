import logements from "/public/logements.json";

function Card() {

  const cards = logements.map((logement, index) => (
    <div key={index} className="cards__single">
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
