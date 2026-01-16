import type { RouteObject } from "react-router-dom";
import Login from "@app/pages/basic/auth/Login";
import Signup from "@app/pages/basic/auth/signup";

export const routes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup/*",
    element: <Signup />,
  },
];
