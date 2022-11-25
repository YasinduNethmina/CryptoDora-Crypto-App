import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  const [subscribe, setSubscribe] = useState(
    "Subscribe to our newsletter & get all the latest updates!"
  );

  const handleButton = (e) => {
    e.preventDefault();
    setSubscribe("Thanks for subscribing, We'll give you all latest updates!");
  };

  return (
    <div className="footer-section bg-[#1B2028] text-sm text-[#9E9E9a] dark:bg-white dark:font-semibold dark:text-black dark:shadow-lg">
      <div className="mt-20 flex justify-around py-10">
        <div className="footer-products w-1/5">
          {/* Products */}
          <h4 className="mb-4 cursor-pointer text-lg text-sky-200 hover:text-sky-400 dark:font-semibold dark:text-[#00cccb]">
            Products
          </h4>
          <h6>Crypto Anlysis</h6>
          <h6>Blockchain Governance</h6>
          <h6>Defi Markets</h6>
          <h6>Non-Fungible Tokens</h6>
          <h6>Coin Predictions</h6>
        </div>

        <div className="w-1/5">
          {/* Explore */}
          <h4 className="mb-4 cursor-pointer text-lg text-sky-200 hover:text-sky-400 dark:font-semibold dark:text-[#00cccb]">
            Explore
          </h4>
          <h6>Rescources</h6>
          <h6>Blog</h6>
          <h6>Documents</h6>
        </div>

        <div className="w-1/5">
          {/* Company */}
          <h4 className="mb-4 cursor-pointer text-lg text-sky-200 hover:text-sky-400 dark:font-semibold dark:text-[#00cccb]">
            Company
          </h4>
          <h6>About Us</h6>
          <h6>Partners</h6>
          <h6>Customers</h6>
          <h6>Contact Us</h6>
        </div>

        <div className="w-1/5">
          {/* Form */}
          <h4 className="footer-subscribe mb-4 cursor-pointer text-lg text-sky-200 hover:text-sky-400 dark:font-semibold dark:text-[#00cccb]">
            Subscribe
          </h4>

          <form action="submit" className="flex">
            <input
              pattern=".+@globex\.com"
              className="footer-input h-10 rounded-lg bg-[#31353f] pl-4 outline-none dark:bg-[#fff] dark:font-semibold dark:text-black dark:shadow-lg"
              type="email"
              placeholder="enter your email..."
              required
            />
            <button type="submit" onClick={handleButton}>
              <ArrowForwardIcon
                style={{ fontSize: 38 }}
                className="footer-btn ml-2 rounded-lg bg-[#188CFF] text-xl text-white hover:bg-gray-600 hover:text-black dark:bg-[#00cccb] dark:text-white dark:shadow-lg dark:hover:scale-105"
              />
            </button>
          </form>
          <p className="footer-subscribe-bottom mt-4">{subscribe}</p>
        </div>
      </div>

      <hr className="mb-4" />

      <div className="flex items-center justify-around py-2">
        <div>
          <Link to="/">
            <img
              className="w-8 rotate-12"
              src={require("../../../assets/images/dogecoin-logo.png")}
              alt=""
            />
          </Link>
        </div>
        <div className="flex text-gray-300">
          <h4 className="cursor-pointer hover:text-[#9e9e9e] dark:text-[#7e818c]">
            Terms
          </h4>
          <h4 className="mx-8 cursor-pointer hover:text-[#9e9e9e] dark:text-[#7e818c]">
            Privacy
          </h4>
          <h4 className="cursor-pointer hover:text-[#9e9e9e] dark:text-[#7e818c]">
            Cookies
          </h4>
        </div>
        <div className="flex">
          <a
            href="https://github.com/YasinduNethmina"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon className="hover:text-white dark:text-black dark:hover:text-slate-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/yasinduneth/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon className="mx-4 hover:text-white dark:text-black dark:hover:text-blue-600" />
          </a>
          <a
            href="https://twitter.com/yasinduneth"
            rel="noreferrer"
            target="_blank"
          >
            <TwitterIcon className="hover:text-white dark:text-black dark:hover:text-sky-500" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
