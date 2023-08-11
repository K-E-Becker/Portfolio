import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { MdOutlineEmail, MdFilePresent } from "react-icons/md";
import "./Navbar.css";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (event) => {
    event.preventDefault();
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 1,
        height: 75,
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon style={{ color: "#794F42", fontSize: "40px" }} />
        </IconButton>
        <Typography
          variant="body1"
          sx={{
            marginLeft: 1,
            color: "#794F42",
            fontSize: "26pt",
            fontFamily: "Courier New, monospace",
          }}
        >
          Kristin Becker
        </Typography>
        <Typography
          sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
        >
          <a
            href="https://github.com/K-E-Becker"
            target="_blank"
            title="Github"
          >
            <FaGithub
              size={45}
              style={{ color: "#794F42", marginLeft: "10px" }}
            />
          </a>
          <a
            href="www.linkedin.com/in/kristin-e-becker"
            target="_blank"
            title="LinkedIn"
          >
            <FaLinkedin
              size={45}
              style={{ color: "#794F42", marginLeft: "10px" }}
            />
          </a>
          <a
            href="https://medium.com/@krstn.becker"
            target="_blank"
            title="Medium"
          >
            <FaMedium
              size={45}
              style={{ color: "#794F42", marginLeft: "10px" }}
            />
          </a>
          <a href="mailto:krstn.becker@gmail.com" target="_blank" title="email">
            <MdOutlineEmail
              size={45}
              style={{ color: "#794F42", marginLeft: "10px" }}
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1_BAYD8-Hx4AdCzQeyXAIkgZ_pzIu3eRR/view?usp=sharing"
            target="_blank"
            title="My Resume"
          >
            <MdFilePresent
              size={45}
              style={{ color: "#794F42", marginLeft: "10px" }}
            />
          </a>
        </Typography>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem
            sx={{
              "& a": {
                textDecoration: "none",
                color: "#794F42",
              },
              "& a:visited": {
                color: "#794F42",
              },
            }}
          >
            <ScrollLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
              onClick={handleMenuClose}
            >
              About
            </ScrollLink>
          </MenuItem>
          <MenuItem
            sx={{
              "& a": {
                textDecoration: "none",
                color: "#794F42",
              },
              "& a:visited": {
                color: "#794F42",
              },
            }}
          >
            <ScrollLink
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
              onClick={handleMenuClose}
            >
              Projects
            </ScrollLink>
          </MenuItem>
          <MenuItem
            sx={{
              "& a": {
                textDecoration: "none",
                color: "#794F42",
              },
              "& a:visited": {
                color: "#794F42",
              },
            }}
          >
            <ScrollLink
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
              onClick={handleMenuClose}
            >
              My Articles
            </ScrollLink>
          </MenuItem>

          <MenuItem
            sx={{
              "& a": {
                textDecoration: "none",
                color: "#794F42",
              },
              "& a:visited": {
                color: "#794F42",
              },
            }}
          >
            <ScrollLink
              activeClass="active"
              to="tech"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              onClick={handleMenuClose}
            >
              Tech Stack
            </ScrollLink>
          </MenuItem>
          <MenuItem
            sx={{
              "& a": {
                textDecoration: "none",
                color: "#794F42",
              },
              "& a:visited": {
                color: "#794F42",
              },
            }}
          >
            <ScrollLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              onClick={handleMenuClose}
            >
              Contact Me
            </ScrollLink>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
