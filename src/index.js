import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import App from "./App";
import Error from "./pages/ErrorPage/Error";
import "./common/media/mediaQueries.scss";
import CryptoPage from "./pages/CryptoPage/CryptoPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="crypto-tab" element={<CryptoPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
