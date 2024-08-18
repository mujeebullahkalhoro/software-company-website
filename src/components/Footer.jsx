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
    <div className="footer-containner">
      <div className="text-box">
        <h1 className="color-white">Glint</h1>
        <p className="width color">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          ducimus iure sequi ut cumque? Veritatis debitis, magnam et dolore,
          vitae accusamus deserunt ab eum id beatae praesentium sunt dolores
          totam.
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
            <FontAwesomeIcon className="color-white" icon={faPhone} />
            <span className="color"> 64748746384883</span>
            <br />
          </div>
          <br />
          <div>
            <FontAwesomeIcon className="color-white" icon={faEnvelope} />
            <span className="color"> softtechcompany@gmail.com</span>
          </div>
        </div>
        <br />
        <Button title="SEND A  MESSAGE" style="ftr-btn" />
        <br />
        <div className="follow-box">
          <span className="color">
            <b>Follows Us:</b>
          </span>
          <FontAwesomeIcon className="color-white" icon={faFacebook} />
          <FontAwesomeIcon className="color-white" icon={faTwitter} />
          <FontAwesomeIcon className="color-white" icon={faGoogle} />
        </div>
      </div>
    </div>
  );
}
