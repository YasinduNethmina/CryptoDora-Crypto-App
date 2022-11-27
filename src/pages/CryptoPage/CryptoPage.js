import React, { useState, useEffect } from "react";
import Header from "../LandingPage/Header/Header";
import Footer from "../LandingPage/Footer/Footer";
import LeftSidebar from "../LandingPage/LeftSidebar/LeftSidebar";
import "./CryptoTab.scss";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import CryptoTab from "./CryptoTab/CryptoTab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SidebarMobile from "../LandingPage/Main/SidebarMobile/SidebarMobile";
import MenuIcon from "@mui/icons-material/Menu";

function CryptoPage() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchInterval: 180000,
      },
    },
  });

  const [backToTopButton, setBackToTopButton] = useState(false);

  // Mobile Menu
  const [active, setActive] = useState(false);
  const handleMenu = () => {
    setActive(!active);
  };

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
    <QueryClientProvider client={queryClient}>
      {/* Mobile responsive Menu */}
      <div className="menu-icon-div hidden">
        <MenuIcon
          style={{ fontSize: "28px" }}
          className="menu-icon fixed left-4 z-40 cursor-pointer rounded bg-[#1B2028] text-white transition-all duration-300 hover:scale-110"
          onClick={handleMenu}
        />
      </div>

      <div className="sidebar-mobile fixed left-1 z-20 mt-4">
        <SidebarMobile active={active} />
      </div>
      <div className="App m-0 bg-[#31353f] p-0 dark:bg-[#f0f0f0]">
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
            className="back-to-top-btn rounded-lg border-2 border-sky-500 dark:rounded dark:border-black"
            onClick={scrollUp}
            style={{
              position: "fixed",
              bottom: "2rem",
              right: "2.5rem",
            }}
          >
            <KeyboardArrowUpIcon
              sx={{ fontSize: "2rem" }}
              className="rounded bg-[#1B2028] text-white dark:bg-white dark:text-black dark:shadow-lg"
            />
          </button>
        )}
      </div>
    </QueryClientProvider>
  );
}

export default CryptoPage;
