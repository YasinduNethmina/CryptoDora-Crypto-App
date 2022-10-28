import React from "react";
import Header from "../LandingPage/Header/Header";
import Footer from "../LandingPage/Footer/Footer";
import LeftSidebar from "../LandingPage/LeftSidebar/LeftSidebar";
import CryptoTab from "./CryptoTab/CryptoTab";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function CryptoPage() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchInterval: 180000,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App m-0 bg-[#31353f] p-0">
          <Header />
          <div className="flex w-full">
            <div className="leftSidebar w-2/12">
              <LeftSidebar />
            </div>
            <div className="main w-10/12">
              <CryptoTab />
            </div>
          </div>
          <Footer />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default CryptoPage;
