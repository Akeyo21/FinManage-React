import React from "react";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import AppLink from "./App.link.tsx";
const AppRouter = () => {

  const appRoutes = [
    {
      pageName: "Bills",
      route: "/",
    },
    {
      pageName: "Past Bills",
      route: "/past-bills",
    },
    {
      pageName: "Due Bills",
      route: "/due-bills",
    },
  ];

  return (
    <Drawer variant="permanent">
      <List>
        {appRoutes.map(({ pageName, route }) => (
          <ListItemButton component={AppLink} to={route}>
            <ListItemText primary={pageName} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default AppRouter;
