import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import App from "./App";
import Error from "./pages/ErrorPage/Error";
import "./common/media/mediaQueries.scss";
import CryptoPage from "./pages/CryptoPage/CryptoPage";
import CoinStats from "./pages/CryptoPage/CryptoTab/Coin/CoinStats/CoinStats";
import CryptoBubblePage from "./pages/CryptoBubblePage/CryptoBubblePage";
import HeatMapPage from "./pages/HeatMapPage/HeatMapPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NewsDescription from "./pages/LandingPage/Main/News/NewsDescription/NewsDescription";
import BlockchainExplorerPage from "./pages/BlockchainExplorerPage/BlockchainExplorerPage";
import ExplorerDetailsPage from "./pages/BlockchainExplorerPage/ExplorerTab/Explorer/ExplorerDetailsPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import WalletPage from "./pages/WalletPage/WalletPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/crypto-tab" element={<CryptoPage />}></Route>
        <Route path="crypto-tab/:coinId" element={<CoinStats />}></Route>
        <Route path="/bubbles-tab" element={<CryptoBubblePage />}></Route>
        <Route path="/heatmap-tab" element={<HeatMapPage />}></Route>
        <Route path="/news-tab" element={<NewsPage />}></Route>
        <Route path="news-description" element={<NewsDescription />}></Route>
        <Route
          path="blockchain-explorer"
          element={<BlockchainExplorerPage />}
        ></Route>
        <Route
          path="blockchain-explorer/:address"
          element={<ExplorerDetailsPage />}
        ></Route>
        <Route path="/portfolio-tab" element={<PortfolioPage />}></Route>
        <Route path="/login-page" element={<LoginPage />}></Route>
        <Route path="/signup-page" element={<SignupPage />}></Route>
        <Route path="/wallet-tab" element={<WalletPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
