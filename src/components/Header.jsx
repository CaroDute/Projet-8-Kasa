import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
  <div className="header">
    <Logo />
    <ul className="header__nav">
      <NavLink to="/" className={(nav) => (nav.isActive ? "header__nav-active" : "")}>
        <li>Accueil</li>
      </NavLink>
      <NavLink to="/About" className={(nav) => (nav.isActive ? "header__nav-active" : "")}>
        <li>À propos</li>
      </NavLink>
    </ul>
  </div>
  )
};

export default Header;
