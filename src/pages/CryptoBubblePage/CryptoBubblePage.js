import React, { useState } from "react";
import Header from "../LandingPage/Header/Header";
import Footer from "../LandingPage/Footer/Footer";
import LeftSidebar from "../LandingPage/LeftSidebar/LeftSidebar";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import BubbleTab from "./BubbleTab/BubbleTab";
import "./CryptoBubblePage.scss";
import SidebarMobile from "../LandingPage/Main/SidebarMobile/SidebarMobile";
import MenuIcon from "@mui/icons-material/Menu";

function CryptoBubblePage() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchInterval: 180000,
      },
    },
  });

  // Mobile Menu
  const [active, setActive] = useState(false);
  const handleMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* Mobile responsive Menu */}
        <MenuIcon
          style={{ fontSize: "28px" }}
          className="menu-icon fixed left-4 z-40 cursor-pointer rounded bg-[#1B2028] text-white transition-all duration-300 hover:scale-110"
          onClick={handleMenu}
        />
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
              <BubbleTab />
            </div>
          </div>
          <Footer />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default CryptoBubblePage;
