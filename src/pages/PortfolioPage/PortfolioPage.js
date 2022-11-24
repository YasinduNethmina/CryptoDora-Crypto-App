import React, { useEffect } from "react";
import Header from "../LandingPage/Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../LandingPage/Footer/Footer";
import PortfolioTab from "./PortfolioTab/PortfolioTab";
import LeftSidebar from "../LandingPage/LeftSidebar/LeftSidebar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: 180000,
    },
  },
});

function PortfolioPage() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollUp();
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App m-0 bg-[#31353f] p-0 dark:bg-[#F0F0F0]">
          <Header />
          <div className="flex w-full">
            <div className="main w-2/12">
              <LeftSidebar />
            </div>
            <div className="main mt-20 mr-5 w-10/12">
              <PortfolioTab />
            </div>
          </div>
          <Footer />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default PortfolioPage;
