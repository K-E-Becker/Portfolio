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
      position="static"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 1,
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
          <MenuIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem>
            <ScrollLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleMenuClose}
            >
              About
            </ScrollLink>
          </MenuItem>
          <MenuItem>
            <ScrollLink
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleMenuClose}
            >
              Projects
            </ScrollLink>
          </MenuItem>
          <MenuItem>
            <ScrollLink
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleMenuClose}
            >
              My Blog
            </ScrollLink>
          </MenuItem>
          <MenuItem>
            <ScrollLink
              activeClass="active"
              to="tech"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleMenuClose}
            >
              Tech Stack
            </ScrollLink>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
