import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Collapse({ title, text }) {
  const [isCollapse, setIsCollapse] = useState(true);

  const toggleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div className={`collapse ${isCollapse ? "" : "open"}`}>
      <div className="collapse__content-title">
        <h3>{title}</h3>
        <img
          src="/arrow-up.png"
          alt="Fleche collapse"
          onClick={toggleCollapse}
        />
      </div>
      <div className="collapse__content-text">
        {typeof text === "string" ? <p>{text}</p> : text}
      </div>
    </div>
  );
}

export default Collapse;
