import Header from "./pages/LandingPage/Header/Header";
import LeftSidebar from "./pages/LandingPage/LeftSidebar/LeftSidebar";
import Main from "./pages/LandingPage/Main/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./pages/LandingPage/Footer/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: 180000,
    },
  },
});

function App() {
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

export default App;
