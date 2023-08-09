import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Parallax } from "react-parallax";
import { Element } from "react-scroll";

function App() {
  return (
    <div>
      <Navbar />
      <p>
        <img src="./nameLogo.png" width="300" height="300" alt="Logo" />
      </p>
      <Element name="about">
        <Parallax bgImage="" strength={500}>
          <div style={{ height: "500px" }}>
            this is going to be an about me section with my image
          </div>
        </Parallax>
      </Element>

      <Element name="projects">
        <Parallax bgImage="" strength={500}>
          <div style={{ height: "500px" }}>
            This is going to be the section about my projects
          </div>
        </Parallax>
      </Element>

      <Element name="blog">
        <Parallax bgImage="" strength={500}>
          <div style={{ height: "500px" }}>This is about my blog</div>
        </Parallax>
      </Element>

      <Element name="tech">
        <Parallax bgImage="" strength={500}>
          <div style={{ height: "500px" }}>This is for the tech stack</div>
        </Parallax>
      </Element>
      <Footer />
    </div>
  );
}

export default App;
