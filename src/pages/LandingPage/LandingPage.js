import React, { useEffect } from "react";
import Header from "./Header/Header";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import Main from "./Main/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./Footer/Footer";
import NewsTabLeft from "../NewsPage/NewsTabLeft/NewsTabLeft";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: 180000,
    },
  },
});

function LandingPage() {
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
        <div className="App m-0 bg-[#31353f] p-0 dark:bg-[#F0F0F0] dark:text-black">
          <Header />
          <div className="flex w-full">
            <div className="leftSidebar w-2/12">
              <LeftSidebar />
              <NewsTabLeft />
            </div>
            <div className="main w-7/12">
              <Main />
            </div>
            {/* Remaigning space used to position news and other Advertisements freely */}
          </div>
          <Footer />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default LandingPage;
