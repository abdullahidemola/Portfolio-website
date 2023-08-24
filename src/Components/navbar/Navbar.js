import Clock from "../../utilities/clock";
import "./navbar.scss";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h2 className="name">Abdullahi Yusuf</h2>
        <div className="clock">
          <Clock />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
