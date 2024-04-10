/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function Carrousel({ image, id }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (id) {
      setCurrentIndex(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === image.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carrousel">
      {id && image.length > 1 && (
        <img
          src="/public/arrow-left.png"
          alt="Fleche navigation gauche"
          onClick={goToPrevSlide}
          className="carrousel__arrow carrousel__arrow-left "
        />
      )}
      {id && (
        <img
          src={image[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="carrousel__image"
        />
      )}

      {id && image.length > 1 && (
        <img
          src="/public/arrow-right.png"
          alt="Fleche navigation droite"
          onClick={goToNextSlide}
          className="carrousel__arrow carrousel__arrow-right "
        />
      )}
      {id && image.length > 1 && (
        <div className="carrousel__indicator">
          <p>
            {currentIndex + 1}/{image.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default Carrousel;
