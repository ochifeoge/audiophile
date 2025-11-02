import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import route from "./routes";
import AppProvider from "./AppProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConvexProvider, ConvexReactClient } from "convex/react";
function App() {
  const router = createBrowserRouter(route);
  const queryClient = new QueryClient();
  const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);
  return (
    <ConvexProvider client={convex}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <RouterProvider router={router} />
        </AppProvider>
      </QueryClientProvider>
    </ConvexProvider>
  );
}

export default App;
