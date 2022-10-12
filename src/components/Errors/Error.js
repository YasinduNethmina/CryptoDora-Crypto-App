import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Error() {
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
      setRedirect(<Navigate to="/" />);
    }
  }, [redirect]);

  return (
    <>
      {redirect}
      <div className="flex w-full h-screen flex-col justify-center items-center bg-[#31353f]">
        <h1 className="text-9xl font-extrabold text-red-700 tracking-widest">
          404
        </h1>
        <div className="bg-red-400 px-2 text-sm rounded rotate-12 relative bottom-20">
          Page Not Found
        </div>
        <h1 className="text-[#9e9e9e]">
          Redirecting to Home page in {countdown}...
        </h1>
        <button className="mt-5">
          <span className="relative block px-8 py-3 bg-[#31353f] border border-current">
            <Link to="/">
              <h1 className="text-white">Homepage</h1>
            </Link>
          </span>
        </button>
        <br />
        <h1 className="text-[#9e9e9e] flex justify-center">
          cryptodora All rights reserved®
        </h1>
      </div>
    </>
  );
}

export default Error;
