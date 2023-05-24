import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import "./App.css";

import AppRouter from "./router/App.router.tsx";

function App() {

  return (
    <div className="App">
      <AppRouter/>

      <Box ml={10} className="App">
        <Outlet />
      </Box>
    </div>
  );
}

export default App;
