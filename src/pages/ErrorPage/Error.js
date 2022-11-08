import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Error({ explorerText }) {
  const [redirect, setRedirect] = useState("");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown >= 1) {
      setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setInterval(() => {
        setRedirect("connecting");
      }, 1000);
    }
  }, [countdown]);

  useEffect(() => {
    if (countdown === 0) {
      setRedirect(
        <Navigate to={explorerText ? "/blockchain-explorer" : "/"} />
      );
    }
  }, [redirect]);

  return (
    <>
      {redirect}
      <div className="flex h-screen w-full flex-col items-center justify-center bg-[#31353f]">
        <h1 className="text-9xl font-extrabold tracking-widest text-red-700">
          404
        </h1>
        <div className="relative bottom-20 rotate-12 rounded bg-red-400 px-2 text-sm">
          {explorerText
            ? `Invalid Ethereum Address, please check again!`
            : `Page Not Found or Server Limit Exceeded!`}
        </div>
        <h1 className="text-[#9e9e9e]">
          Redirecting to {explorerText ? "Explorer Page" : "Home page"} in{" "}
          {countdown}...
        </h1>
        <button className="mt-5">
          <span className="relative block border border-current bg-[#31353f] px-8 py-3">
            <Link to={explorerText ? "blockchain-explorer" : "/"}>
              <h1 className="text-white">
                {explorerText ? "Explorer" : "Homepage"}
              </h1>
            </Link>
          </span>
        </button>
        <br />
        <h1 className="flex justify-center text-[#9e9e9e]">
          cryptodora All rights reserved®
        </h1>
      </div>
    </>
  );
}

export default Error;
