import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="ft-container">
      <h1 className="ft-name">Yusufolio</h1>
      <div className="links">
        <a
          href="https://github.com/abdullahidemola"
          target="_blank"
          rel="noreferrer noopener"
        >
          Github <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/yusufabdullahiademola/"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://twitter.com/icithys"
          target="_blank"
          rel="noreferrer noopener"
        >
          Twitter <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div>
        <h1 className="year">2023©</h1>
      </div>
    </footer>
  );
};

export default Footer;
