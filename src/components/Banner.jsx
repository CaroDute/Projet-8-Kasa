// eslint-disable-next-line react/prop-types
const Banner = ({ imageUrl }) => {
  return (
    <div className="banner">
      <div
        className="banner__img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="banner__content">
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
};

export default Banner;
