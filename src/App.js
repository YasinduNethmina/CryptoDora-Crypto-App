import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App bg-[#31353f] p-0 m-0">
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
  );
}

export default App;
