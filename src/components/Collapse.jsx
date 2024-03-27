import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Collapse({ title, text }) {
  const [isCollapse, setIsCollapse] = useState(true);

  const toggleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div className="collapse">
      {isCollapse ? (
        <div className="collapse__title">
          <h3>{title}</h3>
          <img
            src="/arrow-down.png"
            alt="Flèche fermée collapse"
            onClick={toggleCollapse}
          />
        </div>
      ) : (
        <div className="collapse__title">
          <h3>{title}</h3>
          <img
            src="/arrow-up.png"
            alt="Flèche ouverte collapse"
            onClick={toggleCollapse}
          />
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
