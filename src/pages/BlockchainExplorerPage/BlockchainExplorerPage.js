import React from "react";
import Header from "../LandingPage/Header/Header";
import Footer from "../LandingPage/Footer/Footer";
import LeftSidebar from "../LandingPage/LeftSidebar/LeftSidebar";
import BlockchainExplorerTab from "./ExplorerTab/BlockchainExplorerTab";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function BlockchainExplorerPage() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        refetchInterval: 180000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App m-0 bg-[#31353f] p-0 dark:bg-[#f0f0f0]">
        <Header />
        <div className="flex w-full">
          <div className="leftSidebar w-2/12">
            <LeftSidebar />
          </div>
          <div className="main mb-20 mr-6 w-10/12">
            <BlockchainExplorerTab />
          </div>
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default BlockchainExplorerPage;
