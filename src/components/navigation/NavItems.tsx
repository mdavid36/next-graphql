"use client";

/**
 * Client component.
 * Dynamically builds navigation menu items or buttons based on screen size.
 * @returns navigation menu item or button components based on screen size.
 */

import React from "react";
import mainNavList from "./mainNavList";
import { Button, MenuItem } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIsSmallScreen } from "@/styles/mediaBreakpoints";

function NavItems() {
  const pathname = usePathname();
  const isSmall = useIsSmallScreen();
  return (
    <>
      {mainNavList.map((page) => {
        const pathRegex = new RegExp(`^${page.path}(/.*)?$`);
        const isActive = pathRegex.test(pathname || "/");
        const props = {
          "aria-label": `navigation button ${page.title}`,
          href: page.path,
          sx: {
            my: 2,
            color: isActive ? "purple" : "white",
            display: "block",
          },
          ...(isSmall ? { component: Link } : { LinkComponent: Link }),
        };
        return isSmall ? (
          <MenuItem key={page.path} {...props}>
            {page.title}
          </MenuItem>
        ) : (
          <Button key={page.path} {...props}>
            {page.title}
          </Button>
        );
      })}
    </>
  );
}

export default NavItems;
