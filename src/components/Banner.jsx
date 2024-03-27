// eslint-disable-next-line react/prop-types
function Banner({ imageUrl, text }) {
  return (
    <div className="banner">
      <div
        className="banner__img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="banner__content">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Banner;
