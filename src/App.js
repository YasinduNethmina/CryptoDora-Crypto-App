import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: 180000,
    },
  },
});

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <LandingPage />
      </QueryClientProvider>
    </div>
  );
}

export default App;
