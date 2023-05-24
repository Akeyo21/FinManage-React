import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import "./App.css";

import AppRouter from "./router/App.router.tsx";

export const drawerWidth = 250;
function App() {

  return (
    <div className="App" >
      <AppRouter/>
      <Box component="main" sx={{ml:`${drawerWidth}px`, width:`calc(100% - ${drawerWidth}px)`  }}>
        <Outlet />
      </Box>
    </div>
  );
}

export default App;
