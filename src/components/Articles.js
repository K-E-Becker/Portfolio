import React from "react";
import "./Articles.css";
import { Typography, Button } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function Articles() {
  return (
    <div className="articles-container">
      <div className="card-row" style={{ marginTop: "20px" }}>
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
              This article takes a quick look into the non-gaming applications
              of WebGL such as how it was implemented into Google Maps, its use
              in various entertainment outlets, and how educational sources
              utilized WebGL.
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
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/postboot.png"
            alt="post bootcamp"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Life After Bootcamp: Where do we go from here?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              In this article, I detail my emotional phases through bootcamp and
              how I feel a few weeks post graudation. It is a self reflection of
              my anxieties and what has happened after I graduated from
              bootcamp.
            </Typography>
          </CardContent>
          <CardActions>
            <a
              href="https://medium.com/@krstn.becker/life-after-bootcamp-where-do-we-go-from-here-b27f36c65026"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="small">Learn More</Button>
            </a>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Articles;
