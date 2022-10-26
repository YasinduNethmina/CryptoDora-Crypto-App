import Header from "./pages/LandingPage/Header/Header";
import Sidebar from "./pages/LandingPage/Sidebar/Sidebar";
import Main from "./pages/LandingPage/Main/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
            <div className="w-2/12">
              <Sidebar />
            </div>
            <div className="w-7/12">
              <Main />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
