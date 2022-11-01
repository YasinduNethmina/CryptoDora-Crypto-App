import React from "react";
import Header from "../LandingPage/Header/Header";
import Footer from "../LandingPage/Footer/Footer";
import LeftSidebar from "../LandingPage/LeftSidebar/LeftSidebar";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import HeatMapTab from "./HeatMapTab/HeatMapTab";

function HeatMapPage() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchInterval: 180000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App m-0 bg-[#31353f] p-0">
        <Header />
        <div className="flex w-full">
          <div className="leftSidebar w-2/12">
            <LeftSidebar />
          </div>
          <div className="main mb-20 mr-6 w-10/12">
            <HeatMapTab />
          </div>
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default HeatMapPage;
