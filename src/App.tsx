import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

import AppRouter from "./router/App.router.tsx";
import { mainBackgroundColor } from "./utils/palette.ts";

export const drawerWidth = 250;
function App() {
  return (
    <div style={{ overflow: "hidden", backgroundColor:mainBackgroundColor, height: '100vh' }}>
      <AppRouter />
      <Box
        component="main"
        sx={{
          ml: `${drawerWidth}px`,
          width: `calc(100% - ${drawerWidth}px)`,
          overflow: "hidden",
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
}

export default App;
