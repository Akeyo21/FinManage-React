import "./App.css";
import * as React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import AppRouter from "./Router/App.router.tsx";

function App() {

  return (
    <>
      <AppRouter/>

      <Box ml={10}>
        <Outlet />
      </Box>
    </>
  );
}

export default App;
