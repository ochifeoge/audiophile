import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import route from "./routes";

function App() {
  const router = createBrowserRouter(route);
  return <RouterProvider router={router} />;
}

export default App;
