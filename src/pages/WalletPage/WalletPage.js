import React, { useEffect, useState } from "react";
import WalletData from "./WalletData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "../LandingPage/Header/Header";
import Footer from "../LandingPage/Footer/Footer";
import LeftSidebar from "../LandingPage/LeftSidebar/LeftSidebar";
import SidebarMobile from "../LandingPage/Main/SidebarMobile/SidebarMobile";

const WalletPage = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchInterval: 180000,
      },
    },
  });

  const [active, setActive] = useState(false);

  // Used to fix animation fox glitch
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="sidebar-mobile fixed left-1 z-20 mt-4">
        <SidebarMobile active={active} />
      </div>
      <div className="App m-0 bg-[#31353f] p-0 dark:bg-[#f0f0f0]">
        <Header />
        <div className="flex w-full">
          <div className="leftSidebar w-2/12">
            <LeftSidebar />
          </div>
          <div className="flex h-screen w-full justify-center">
            <WalletData />
          </div>
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default WalletPage;
