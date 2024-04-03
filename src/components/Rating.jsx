// eslint-disable-next-line react/prop-types
function Rating({ rating }) {
  const maxRating = 5
  const filledStars = parseInt(rating)
  const emptyStars = maxRating - filledStars

  const filledStarElements = Array.from({ length: filledStars}, (_, index) => (
    <img key={index} src="/public/etoile.png" alt="etoile pleine" />
  ))

  const emptyStarElements = Array.from({ length: emptyStars}, (_, index) => (
    <img key={filledStars + index} src="/public/etoilevide.png" alt="etoile vide" />
  ))

  return (
    <div>
       {filledStarElements}
        {emptyStarElements}
    </div>
  );
}

export default Rating;