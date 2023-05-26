import { createTheme } from "@mui/material/styles";
import { mainBackgroundColor } from "./palette";

export const theme = createTheme({
  palette: {
    primary: {
      main: mainBackgroundColor,
    },
  },
});
