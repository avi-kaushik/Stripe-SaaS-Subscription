import BasicDetails from "./pages/BasicDetails";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import Checkout from "./pages/Checkout";
import type { RouteObject } from "react-router-dom";

export const signupRoutes: RouteObject[] = [
  { index: true, element: <BasicDetails /> },
  { path: "subscription", element: <SubscriptionPlans /> },
  { path: "checkout", element: <Checkout /> },
];
