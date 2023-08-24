import "./about.scss";
import abd from "../../img/Abd.jpg";
import ade from "../../img/Ade.jpg";
const About = () => {
  return (
    <div className="about-container">
      <div className="img-container"><img src={ade} alt="profilepicture" /></div>
      <div className="about-text">
        <h3>
          Dedicated and enthusiastic Frontend Engineer with a strong foundation
          in web development technologies and a passion for creating visually
          appealing and user friendly experiences. Detail oriented, committed to
          writing efficient code, enhancing website functionality, and making
          sure that it is compatible with all major web browsers. Effective
          communicator and team player, ready to pick up new skills and add to
          the dynamic development team
        </h3>
      </div>
    </div>
  );
};

export default About;
