import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>ShopZone</h2>
          <p>
            Your one-stop destination for quality products at affordable prices.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </div>

        <div className="footer-section">
          <h3>Support</h3>

          <p>Help Center</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Returns</p>

        </div>

        <div className="footer-section">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaGithub />

          </div>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 ShopZone. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;