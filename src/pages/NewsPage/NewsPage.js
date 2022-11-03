import React, { useEffect, useState } from "react";
import Header from "../LandingPage/Header/Header";
import LeftSidebar from "../LandingPage/LeftSidebar/LeftSidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../LandingPage/Footer/Footer";
import NewsTab from "./NewsTab/NewsTab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: 180000,
    },
  },
});

function NewsPage() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 10) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

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
        <div className="App m-0 bg-[#31353f] p-0">
          <Header />
          <div className="flex w-full">
            <div className="leftSidebar w-2/12">
              <LeftSidebar />
            </div>
            <div className="main w-7/12">
              <NewsTab />
            </div>
            {/* Remaigning space used to position news and other Advertisements freely */}
          </div>
          <Footer />
          {setBackToTopButton && (
            <button
              className="rounded-lg border-2 border-sky-500"
              onClick={scrollUp}
              style={{
                position: "fixed",
                bottom: "2rem",
                right: "2.5rem",
              }}
            >
              <KeyboardArrowUpIcon
                sx={{ fontSize: "2rem" }}
                className="rounded bg-[#1B2028] text-white"
              />
            </button>
          )}
        </div>
      </QueryClientProvider>
    </>
  );
}

export default NewsPage;
