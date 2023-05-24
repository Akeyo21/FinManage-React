import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Bills from "../screens/Bills/Bills.tsx";
import DueBills from "../screens/DueBills.tsx";
import PastBills from "../screens/PastBills.tsx"

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
