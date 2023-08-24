import React from "react";

import "./projects.scss";

const Project = () => {
  return (
    <div className="project-container">
      <h1 className="project">Projects</h1>

      <div className="contents">
        <div className="line"></div>
        <div className="link ecommerce">
          <a
            href="https://abdullahidemola.github.io/ecommerce"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h1 className="web-name">ecommerce </h1>
            <div className="testts">
              <span className="details">
                An automobile ecommerce website, developed using ReactJs, HTML,
                SCSS and GSAP animation library.
              </span>
              <button className="visit-btn">vist</button>
            </div>
          </a>
        </div>

        <div className="line"></div>
        <div className="link tea-website">
          <a
            href="https://ademideteastation.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h1 className="web-name">tea station website </h1>
            <div className="testts">
              <span className="details">
                A responsive tea station webpage, it was developed using
                Javascript, HTML and CSS
              </span>
              <button className="visit-btn">vist</button>
            </div>
          </a>
        </div>

        <div className="line"></div>
        <div className="link tic-tac-toe">
          <a
            href="https://ademolatictactoe.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h1 className="web-name">tic-tac-toe game </h1>
            <div className="testts">
              <span className="details">
                Web-based tic-tac-toe game develped using Javascript, HTML and
                CSS
              </span>
              <button className="visit-btn">vist</button>
            </div>
          </a>
        </div>

        <div className="line"></div>
        <div className="link sticky-note">
          <a
            href="https://ademidenote.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h1 className="web-name">sticky note </h1>
            <div className="testts">
              <span className="details">
                A multi-color sticky-note that built using reactJs, HTML and CSS
              </span>
              <button className="visit-btn">vist</button>
            </div>
          </a>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Project;
