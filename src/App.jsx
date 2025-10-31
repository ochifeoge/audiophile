import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import route from "./routes";
import AppProvider from "./AppProvider";

function App() {
  const router = createBrowserRouter(route);
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
