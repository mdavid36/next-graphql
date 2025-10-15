import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu } from "@mui/material";

import NavItems from "./NavItems";
function CollapsedNavMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton size="large" onClick={handleClick} color="inherit">
        <MenuIcon />
      </IconButton>
      <Menu
        id="sm-nav-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <NavItems />
      </Menu>
    </>
  );
}

export default CollapsedNavMenu;
