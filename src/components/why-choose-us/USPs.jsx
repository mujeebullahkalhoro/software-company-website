import "./USPs.css";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faLifeRing, faExpandArrowsAlt, faShieldAlt, faDollarSign, faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function USPs() {
  const usd =
    "We prioritize the end-user experience in every project, ensuring that the software we develop is not only powerful but also intuitive and easy to use. By focusing on UX, we help our clients deliver products that their customers will love.";
  const rdc =
    "Our agile development process allows us to deliver high-quality software faster, ensuring you get to market quickly.";
  const support =
    " We offer round-the-clock support to ensure that your business operations run smoothly without any interruptions.";
  const scalability =
    " Our solutions are designed to grow with your business, providing flexibility and scalability as your needs evolve.";
  const sf =
    "We prioritize security in every solution we develop, safeguarding your data and ensuring compliance with industry standards.";
  const ces =
    "We deliver high-quality services at competitive prices, offering excellent value for your investment.";

  return (
    <div className="usps">
      <h1>Why Choose Us</h1>
      <div className="usps-box">
        <Container heading="User-Centric Design:" text={usd} icon={<FontAwesomeIcon icon={faUserCircle} />} />
        <Container heading="Rapid Development Cycles" text={rdc} icon={<FontAwesomeIcon icon={faTachometerAlt} />} />
        <Container heading="24/7 Support" text={support} icon={<FontAwesomeIcon icon={faLifeRing} />} />
      </div>

      <div className="usps-box">
        <Container heading="Scalability" text={scalability} icon={<FontAwesomeIcon icon={faExpandArrowsAlt} />} />
        <Container heading="Security Focused" text={sf} icon={<FontAwesomeIcon icon={faShieldAlt} />} />
        <Container heading="Cost-Effective Solutions" text={ces} icon={<FontAwesomeIcon icon={faDollarSign} />} />
      </div>
    </div>
  );
}
