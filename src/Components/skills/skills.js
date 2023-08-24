import "./skills.scss";

const Skill = () => {
  return (
    <div className="skill-container">
      <div className="skill">
        <h1 className="sk-head">Technologies I work with</h1>
        <div className="sk-content">
          <div className="sk-line"></div>
          <h1 className="tool">ReactJs, NextJs</h1>
          <div className="sk-line"></div>

          <h1 className="tool">Javascript </h1>
          <div className="sk-line"></div>

          <h1 className="tool">Tailwind, SCSS, CSS</h1>
          <div className="sk-line"></div>

          <h1 className="tool">AdobeXD, Figma</h1>
          <div className="sk-line"></div>
        </div>
      </div>

      <button className="contact-btn">
        <a className="chat" href="mailto:yabdullahi2016@gmail.com">
          <h1 className="chat">Contact me </h1>
        </a>
      </button>
    </div>
  );
};

export default Skill;
