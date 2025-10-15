import { useTheme, useMediaQuery } from "@mui/material";

export function useIsSmallScreen() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  return isSmall;
}
