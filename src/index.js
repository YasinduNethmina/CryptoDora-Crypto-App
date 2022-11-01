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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
