import Footer from "./Footer";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
function Layout ({ children }) {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;