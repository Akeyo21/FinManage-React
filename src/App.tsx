import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import "./App.css";
// import Link from "@mui/material/Link";
import ListItemButton from "@mui/material/ListItemButton";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import * as React from "react";
import { Outlet } from "react-router-dom";

function App() {
  const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
    function Link(itemProps, ref) {
      return <RouterLink ref={ref} {...itemProps} role={undefined} />;
    }
  );

  return (
    <>
      <Drawer variant="permanent">
        <List>
          {/* <ListItem components={{Link}} to='/'> */}
          <ListItemButton component={Link} to={"/"}>
            <ListItemText primary="Home" />
          </ListItemButton>
          {/* </ListItem> */}

          {/* <ListItem > */}
          <ListItemButton component={Link} to={"/past-bills"}>
            <ListItemText primary="Home 2" />
          </ListItemButton>
          {/* </ListItem> */}
        </List>
      </Drawer>

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
