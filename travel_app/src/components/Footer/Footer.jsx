import "./Footer.css";
import { assets } from "../../assets/assets";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <img src={assets.logo} alt="" />
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-content-left">
            <h2>TRAVEL.</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              ab nulla, dolore eligendi nobis possimus. Labore vero odio rem
              asperiores exercitationem culpa.
            </p>
            <div className="footer-socials-icons">
              <FaFacebook size={25} />
              <FaInstagram size={25} />
              <FaXTwitter size={25} />
              <FaLinkedinIn size={25} />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Our Stays</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>Contact us</h2>
            <ul>
              <li>Tel.: 275 854 684</li>
              <li>contact@travel.email.com</li>
            </ul>
          </div>
        </div>

        <hr />
        <p>Copyright 2024 TRAVEL. - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
