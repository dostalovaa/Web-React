import "./Navbar.css";
import { FaShoppingBasket } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [nav, setNav] = useState(false);

  const handleNavClick = (menuName) => {
    setMenu(menuName);
    setNav(false);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => handleNavClick("home")}
          className="navbar-link"
        >
          Home <hr />
        </Link>
        <Link
          to="/our-stays"
          onClick={() => handleNavClick("our-stays")}
          className="navbar-link"
        >
          Our stays <hr />
        </Link>
        <Link
          to="/about-us"
          onClick={() => handleNavClick("about-us")}
          className="navbar-link"
        >
          About us <hr />
        </Link>
        <Link
          to="/contact-us"
          onClick={() => handleNavClick("contact-us")}
          className="navbar-link"
        >
          Contact us <hr />
        </Link>
      </ul>

      <div className="navbar-right">
        <TiThMenu
          className="icon-menu"
          size={25}
          onClick={() => setNav(true)}
        />

        {nav && (
          <div className="small-navbar">
            <IoClose
              size={27}
              className="icon-cross"
              onClick={() => setNav(false)}
              color="#fff"
            />
            <ul className="small-navbar-menu">
              <Link
                to="/"
                onClick={() => handleNavClick("home")}
                className="small-navbar-menu-links"
              >
                Home <hr />
              </Link>
              <Link
                to="/our-stays"
                onClick={() => handleNavClick("our-stays")}
                className="small-navbar-menu-links"
              >
                Our stays <hr />
              </Link>
              <Link
                to="/about-us"
                onClick={() => handleNavClick("about-us")}
                className="small-navbar-menu-links"
              >
                About us <hr />
              </Link>
              <Link
                to="/contact-us"
                onClick={() => handleNavClick("contact-us")}
                className="small-navbar-menu-links"
              >
                Contact us <hr />
              </Link>
            </ul>
          </div>
        )}

        <Link to="/cart" className="icon-cart">
          <FaShoppingBasket size={25} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
