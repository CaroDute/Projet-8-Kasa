import logements from "/public/logements.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Carrousel() {
  const { id } = useParams();

  const [currentIndex, setCurrentIndex] = useState(0);

  const logement = logements.find((logement) => logement.id === id);

  useEffect(() => {
    if (logement) {
      setCurrentIndex(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carrousel">
      {logement && logement.pictures.length > 1 && (
        <img
          src="/public/arrow-left.png"
          alt="Fleche navigation gauche"
          onClick={goToPrevSlide}
          className="carrousel__arrow carrousel__arrow-left "
        />
      )}
      {logement && (
        <img
          src={logement.pictures[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="carrousel__image"
        />
      )}

      {logement && logement.pictures.length > 1 && (
        <img
          src="/public/arrow-right.png"
          alt="Fleche navigation droite"
          onClick={goToNextSlide}
          className="carrousel__arrow carrousel__arrow-right "
        />
      )}
      {logement && logement.pictures.length > 1 && (
        <div className="carrousel__indicator">
          <p>
            {currentIndex + 1}/{logement.pictures.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default Carrousel;
