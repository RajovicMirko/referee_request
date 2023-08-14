import { createTheme } from "@mui/material";
import components from "./bones/components";
import light from "./bones/palette/light";

const theme = createTheme({
  palette: light,
  components,
});

export default theme;
