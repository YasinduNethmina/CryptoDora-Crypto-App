import React, { useEffect } from "react";
import Header from "../../../LandingPage/Header/Header";
import LeftSidebar from "../../../LandingPage/LeftSidebar/LeftSidebar";
import Footer from "../../../LandingPage/Footer/Footer";
import ExplorerDetailsTab from "./ExplorerDetailsTab/ExplorerDetailsTab";
import { useLocation } from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function ExplorerDetailsPage() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchInterval: 180000,
      },
    },
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollUp();
  }, []);

  const location = useLocation();
  const text = location.state.data;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App m-0 bg-[#31353f] p-0">
        <Header />
        <div className="flex w-full">
          <div className="leftSidebar w-2/12">
            <LeftSidebar />
          </div>
          <div className="main mb-20 mr-6 w-10/12">
            <ExplorerDetailsTab text={String(text)} />
          </div>
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default ExplorerDetailsPage;
