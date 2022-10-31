import React, { useState, useEffect } from "react";
import Header from "../LandingPage/Header/Header";
import Footer from "../LandingPage/Footer/Footer";
import LeftSidebar from "../LandingPage/LeftSidebar/LeftSidebar";
import CryptoTab from "./CryptoTab/CryptoTab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function CryptoPage() {
  const [moveToTopButton, setBackToTopButton] = useState(false);

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
            <CryptoTab />
          </div>
        </div>
        <Footer />
        {setBackToTopButton && (
          <button
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
  );
}

export default CryptoPage;
