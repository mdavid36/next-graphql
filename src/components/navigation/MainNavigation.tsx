"use client";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import ScienceIcon from "@mui/icons-material/Science";
import mainNavList from "./mainNavList";
import Link from "next/link";
import { usePathname } from "next/navigation";
function MainNavigation() {
  const pathname = usePathname();

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ScienceIcon />
          <Typography color="green">Rick and Morty Stuff</Typography>
        </Box>
        <Box sx={{ display: { md: "flex" } }}>
          {mainNavList.map((page) => {
            const pathRegex = new RegExp(`^${page.path}(/.*)?$`);
            const isActive = pathRegex.test(pathname || "/");
            return (
              <Button
                key={page.path}
                aria-label={`navigation button ${page.title}`}
                LinkComponent={Link}
                href={page.path}
                sx={{
                  my: 2,
                  color: isActive ? "purple" : "white",
                  display: "block",
                }}
              >
                {page.title}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MainNavigation;
