import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./body.scss";
import Navbar from "../navbar/Navbar";
const Body = () => {
  return (
    <div className="body-container">
      <Navbar />
      <div className="text">
        <h1 className=" ft-text">FRONTEND</h1>
        <h1 className=" dev-text">DEVELOPER</h1>
      </div>
      <div className="git-box">
        <a
          href="https://github.com/abdullahidemola"
          target="_blank"
          rel="noreferrer noopener"
          className="git"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Body;
