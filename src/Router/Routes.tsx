import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Bills from "../screens/Bills/Bills";
import DueBills from "../screens/DueBills";
import PastBills from "../screens/PastBills"

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Bills />,
      },
      {
        path: "/past-bills",
        element: <PastBills />,
      },
      {
        path: "/due-bills",
        element: <DueBills />,
      },
    ],
  },
]);
