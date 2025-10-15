"use client";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import ScienceIcon from "@mui/icons-material/Science";
import NavItems from "./NavItems";
import CollapsedNavMenu from "./CollapsedNavMenu";
function MainNavigation() {
  return (
    <Container>
      <AppBar position="fixed">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <ScienceIcon />
            <Typography color="green">Rick and Morty Stuff</Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <NavItems />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <CollapsedNavMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default MainNavigation;
