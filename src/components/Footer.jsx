import Logo from "./Logo";

function Footer () {
  return (
    <div className="footer">
      <Logo src="/public/Kasa-logo-white.png" alt="Logo Kasa White" />
      <div className="footer__p">
      <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
