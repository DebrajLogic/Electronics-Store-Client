/* eslint-disable no-unused-vars */
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import PaymentImage from "../../assets/payments.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Discover our story, passion, and commitment. We strive to bring you
            exceptional products and a memorable experience.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              1234 Harmony Street, Cityville, Countryland
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +1 (555) 123-4567</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">debraj@estore.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            ECOMMERCE 2024 CREATED BY DEBRAJ DEY. PREMIUM ECOMMERCE SOLUTIONS.
          </div>
          <img src={PaymentImage} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
