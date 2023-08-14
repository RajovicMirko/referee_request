import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";

const MUIProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MUIProvider;
