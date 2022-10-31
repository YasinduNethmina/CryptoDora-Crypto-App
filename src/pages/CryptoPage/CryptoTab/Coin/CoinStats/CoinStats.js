import React from "react";
import Header from "../../../../LandingPage/Header/Header";
import Footer from "../../../../LandingPage/Footer/Footer";
import LeftSidebar from "../../../../LandingPage/LeftSidebar/LeftSidebar";
import CoinStat from "./CoinStat/CoinStat";
import { useLocation } from "react-router-dom";
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

  const location = useLocation();
  let coin = location.state.data;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App m-0 bg-[#31353f] p-0">
        <Header />
        <div className="flex w-full">
          <div className="leftSidebar w-2/12">
            <LeftSidebar />
          </div>
          <div className="main mb-20 mr-6 w-10/12">
            <CoinStat coin={coin} />
          </div>
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default CryptoPage;
