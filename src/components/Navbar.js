import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

function Navbar() {
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
        <Typography
          variant="h6"
          // component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            cursor: "pointer",
            textDecoration: "none",
            color: "common.white",
          }}
        >
          <img src="./nameLogo.png" width="200" height="200" />
          Home About Skills Projects Articles Interests Contact
        </Typography>
        <div>
          {/* <Link
            to="/about"
            sx={{
              color: "common.white",
              marginLeft: 3,
              textDecoration: "none",
              "&:hover": { color: "yellow", borderBottom: "1px solid white" },
            }}
          >
            About
          </Link>
          <Link
            to="/contact"
            sx={{
              color: "common.white",
              marginLeft: 3,
              textDecoration: "none",
              "&:hover": { color: "yellow", borderBottom: "1px solid white" },
            }}
          >
            Contact
          </Link> */}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
