// eslint-disable-next-line react/prop-types
function Card({ image, title, onClick, id }) {
  return (
    <div className="cards__single" onClick={() => onClick(id)}>
      <div className="cards__single-content">
        <img src={image} alt={title} className="cards__single-img" />
        <p className="cards__single-text">{title}</p>
      </div>
    </div>
  );
}

export default Card;