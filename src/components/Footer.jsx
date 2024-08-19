import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Button from "./base-components/Button";


export default function Footer() {
  return (
    <div className="footer-containner" id="footerId">
      <div className="text-box">
        <h1 className="color-white">Glint</h1>
        <p className="width color">
        GlintTEch: Elevating your digital presence with
expert Web and Mobile Development, Data Analysis,
Graphics Design, UI/UX Design, and Video Animation.
        </p>
        <p className="color-white">
          <b>LEARN MORE ABOUT Glint</b>
        </p>
      </div>
      <div className="links-box">
        <div className="headings">
          <h2 className="color-white">Useful</h2>
          <h2 className="color-white">Links</h2>
        </div>
        <div className="links color">
        <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/choose">Why Choose Us</NavLink>
          <NavLink to="/vacancy">Hiring Vacancy</NavLink>
        </div>
      </div>
      <div className="contactus-box">
        <div>
          <h2 className="color-white">Contact with us</h2>
        </div>
        <div>
          <div>
            <FontAwesomeIcon className="color-white hover-color" icon={faPhone} />
            <span className="color number"> 64748746384883</span>
            <br />
          </div>
          <br />
          <div>
            <FontAwesomeIcon className="color-white hover-color" icon={faEnvelope} />
            <span className="color email"> softtechcompany@gmail.com</span>
          </div>
        </div>
        <br />
        <Button title="SEND A  MESSAGE" style="ftr-btn" />
        <br />
        <div className="follow-box">
          <span className="color follow">
            Follows Us
          </span>
          <FontAwesomeIcon className="color-white hover-color" icon={faFacebook} />
          <FontAwesomeIcon className="color-white hover-color" icon={faTwitter} />
          <FontAwesomeIcon className="color-white hover-color" icon={faGoogle} />
        </div>
      </div>
    </div>
  );
}
