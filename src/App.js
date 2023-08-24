import Body from "./Components/body/body";
import Project from "./Components/projects/project";
import About from "./Components/about/about";
import Skill from "./Components/skills/skills";

import "./App.scss";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <>
      <div className="app-container">
        <Body />
        <Project />
        <About />
        <Skill />
        <Footer />
      </div>
    </>
  );
}

export default App;
