import Navbar from "./components/Navbar";
import { Parallax } from "react-parallax";
import { Element } from "react-scroll";
import "./App.css";
import Lottie from "lottie-react";
import animationData from "./scroll.json";

function App() {
  return (
    <div>
      <Navbar />
      <div className="logoContainer">
        <img
          src="./nameLogo.png"
          width="300"
          height="300"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="secondContainer">
        <p className="typewriter">
          <h1>Scroll Down to Learn More</h1>
        </p>
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: 150, height: 150 }}
          className="lottie"
        />
      </div>
      <hr></hr>
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
          <div style={{ height: "200px" }}>
            Tech stack
            <div className="techRowContainer">
              <div className="techContainer">
                <img src="html.png" height="100" width="100" alt="html" />
                <img src="css.png" height="100" width="100" alt="css" />
                <img src="js.png" height="100" width="100" alt="javascript" />
                <img src="react.png" height="100" width="100" alt="react" />
                <img src="redux.png" height="100" width="100" alt="redux" />
                <img src="node.png" height="100" width="100" alt="node" />
                <img src="pg.png" height="100" width="100" alt="pg" />
                <img src="sql.png" height="100" width="100" alt="sql" />
                <img src="mui.png" height="100" width="100" alt="mui" />
                <img
                  src="bootstrap.png"
                  height="100"
                  width="100"
                  alt="bootstrap"
                />
                <img
                  src="firebase.png"
                  height="100"
                  width="100"
                  alt="firebase"
                />
              </div>
              <div className="techContainer">
                <img src="html.png" height="100" width="100" alt="html" />
                <img src="css.png" height="100" width="100" alt="css" />
                <img src="js.png" height="100" width="100" alt="javascript" />
                <img src="react.png" height="100" width="100" alt="react" />
                <img src="redux.png" height="100" width="100" alt="redux" />
                <img src="node.png" height="100" width="100" alt="node" />
                <img src="pg.png" height="100" width="100" alt="pg" />
                <img src="sql.png" height="100" width="100" alt="sql" />
                <img src="mui.png" height="100" width="100" alt="mui" />
                <img
                  src="bootstrap.png"
                  height="100"
                  width="100"
                  alt="bootstrap"
                />
                <img
                  src="firebase.png"
                  height="100"
                  width="100"
                  alt="firebase"
                />
              </div>
            </div>
          </div>
        </Parallax>
      </Element>
      <hr></hr>
      <Element name="contact">
        <Parallax bgImage="" strength={500}>
          <div style={{ height: "500px" }}>
            This is going to be my contact info
          </div>
        </Parallax>
      </Element>
    </div>
  );
}

export default App;
