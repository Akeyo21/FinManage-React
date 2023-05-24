import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

import AppRouter from "./router/App.router";
import { mainBackgroundColor } from "./utils/palette";

export const drawerWidth = 250;
function App() {
  return (
    <div style={{ overflow: "scroll", backgroundColor:mainBackgroundColor, height: '100vh' }}>
      <AppRouter />
      <Box
        component="main"
        sx={{
          ml: `${drawerWidth}px`,
          width: `calc(100% - ${drawerWidth}px)`,
          overflow: "scroll",
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
}

export default App;
