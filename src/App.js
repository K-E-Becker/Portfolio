import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import { Parallax } from "react-parallax";
import { Element } from "react-scroll";
import "./App.css";
import Lottie from "lottie-react";
import animationData from "./scroll.json";
import { TextField, Typography, Box, Button, Fab } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function App() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const form = useRef();

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_94cqixi",
        "template_p557ddp",
        form.current,
        "C6M4dy_EqdKcAmUtZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          handleReset();
          alert(
            "Thank you for your interest!  I will get back to you as soon as possible!"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
          <div style={{ height: "500px" }}>
            this is going to be an about me section with my image
          </div>
        </Parallax>
      </Element>
      <hr></hr>
      <Element name="projects">
        <Parallax bgImage="" strength={500}>
          <div style={{ height: "500px" }}>
            This is going to be the section about my projects
          </div>
        </Parallax>
      </Element>
      <hr></hr>

      <Element name="blog">
        <Parallax bgImage="" strength={500}>
          <div style={{ height: "500px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="/glsl.png"
                  alt="GLSL"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    From Gaming to Google. What is WebGL?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This article takes a quick look into the non-gaming
                    applications of WebGL such as how it was implemented into
                    Google Maps, its use in various entertainment outlets, and
                    how educational sources utilized WebGL.
                  </Typography>
                </CardContent>
                <CardActions>
                  <a
                    href="https://medium.com/@krstn.becker/from-gaming-to-google-what-is-webgl-787580db09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="small">Learn More</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </div>
        </Parallax>
      </Element>
      <hr></hr>

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
                <img src="git.png" height="100" width="100" alt="git" />
                <img src="express.png" height="100" width="100" alt="express" />
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
                <img src="git.png" height="100" width="100" alt="git" />
                <img src="express.png" height="100" width="100" alt="express" />
              </div>
            </div>
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
            <form ref={form} onSubmit={handleSubmit}>
              <Box
                component="form1"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& .MuiTextField-root": { m: 1, width: "45ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    label="Name"
                    name="from_name"
                    id="outlined-size-small"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    size="small"
                  />
                </div>
                <div>
                  <TextField
                    label="Email"
                    name="user_email"
                    id="outlined-size-small"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    size="small"
                  />
                </div>
              </Box>
              <Box
                component="form2"
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  "& .MuiTextField-root": { m: 1, width: "92ch" },
                  "& .MuiButton-root": { mt: 2, ml: 1, mr: 5 },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="Your Message"
                    label="Your Message"
                    name="message"
                    multiline
                    rows={10}
                    value={Message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div>
                  <Button variant="outlined" onClick={handleSubmit}>
                    Submit
                  </Button>

                  <Button variant="outlined" onClick={handleReset}>
                    Reset
                  </Button>
                </div>
              </Box>
            </form>
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
