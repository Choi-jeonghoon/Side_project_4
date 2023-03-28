import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const navItems = [
  "Home",
  "Series",
  "Movie",
  "NEW!!요즘 대세 콘텐츠",
  "Wish List",
];

const CommonHeader = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ background: "black" }}>
        <Toolbar>
          <Box>
            <img
              src="/logo.png"
              alt="logo"
              style={{
                width: "120px",
              }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" }, pl: "4%" }}>
            <Box sx={{ display: "flex" }}>
              {navItems.map(item => (
                <Box
                  key={item}
                  sx={{
                    color: "#fff",
                    alignItems: "center",
                    justifyContent: "center",
                    px: "10px",
                    typography: "body1",
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default CommonHeader;
