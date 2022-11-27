import React, { useEffect, useState } from "react";
import Header from "../LandingPage/Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../LandingPage/Footer/Footer";
import PortfolioTab from "./PortfolioTab/PortfolioTab";
import LeftSidebar from "../LandingPage/LeftSidebar/LeftSidebar";
import "./PortfolioPage.scss";
import SidebarMobile from "../LandingPage/Main/SidebarMobile/SidebarMobile";
import MenuIcon from "@mui/icons-material/Menu";

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

  // Mobile menu
  const [active, setActive] = useState(false);
  const handleMenu = () => {
    setActive(!active);
  };

  return (
    <>
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
        <div className="App m-0 bg-[#31353f] p-0 dark:bg-[#F0F0F0]">
          <Header />
          <div className="flex w-full">
            <div className="main w-2/12">
              <LeftSidebar />
            </div>
            <div className="portfolio-tab main mt-20 mr-5 w-10/12">
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
