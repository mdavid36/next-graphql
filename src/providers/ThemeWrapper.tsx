import { theme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

function ThemeWrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeWrapper;
