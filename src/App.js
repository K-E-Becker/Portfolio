import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Articles from "./components/Articles";
import About from "./components/About";
import { Parallax } from "react-parallax";
import { Element } from "react-scroll";
import "./App.css";
import Lottie from "lottie-react";
import animationData from "./scroll.json";
import { Fab } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

function App() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
          <div style={{ height: "600px" }}>
            <About />
          </div>
        </Parallax>
      </Element>
      <hr></hr>
      <Element name="projects">
        <Parallax bgImage="" strength={500}>
          <div style={{ height: "1200px", overflowY: "scroll" }}>
            <Projects />
          </div>
        </Parallax>
      </Element>
      <hr></hr>

      <Element name="blog">
        <Parallax bgImage="" strength={500}>
          <div style={{ height: "400px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Articles />
            </div>
          </div>
        </Parallax>
      </Element>
      <hr></hr>

      <Element name="tech">
        <Parallax bgImage="" strength={500}>
          <div style={{ height: "200px" }}>
            Tech stack
            <Tech />
          </div>
        </Parallax>
      </Element>
      <hr></hr>

      <Element name="contact">
        <Parallax bgImage="" strength={500}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              height: "500px",
            }}
          >
            <Contact />
          </div>
        </Parallax>
      </Element>
      <div className="scroll-to-top-button">
        <Fab
          color="primary"
          aria-label="scroll-to-top"
          onClick={handleScrollToTop}
        >
          <KeyboardArrowUp />
        </Fab>
      </div>
    </div>
  );
}

export default App;
