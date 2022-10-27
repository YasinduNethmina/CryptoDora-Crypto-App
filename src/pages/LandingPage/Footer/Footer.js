import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className="bg-[#1B2028] text-sm text-[#9E9E9a]">
      <div className="mt-20 flex justify-around py-10">
        <div className="w-1/5">
          {/* Products */}
          <h4 className="mb-4 cursor-pointer text-lg text-sky-200 hover:text-sky-400">
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
          <h4 className="mb-4 cursor-pointer text-lg text-sky-200 hover:text-sky-400">
            Explore
          </h4>
          <h6>Rescources</h6>
          <h6>Blog</h6>
          <h6>Documents</h6>
        </div>

        <div className="w-1/5">
          {/* Company */}
          <h4 className="mb-4 cursor-pointer text-lg text-sky-200 hover:text-sky-400">
            Company
          </h4>
          <h6>About Us</h6>
          <h6>Partners</h6>
          <h6>Customers</h6>
          <h6>Contact Us</h6>
        </div>

        <div className="w-1/5 ">
          {/* Form */}
          <h4 className="mb-4 cursor-pointer text-lg text-sky-200 hover:text-sky-400">
            Subscribe
          </h4>

          <form action="" className="flex">
            <input
              className="h-10 rounded-lg bg-[#31353f] pl-4 outline-none"
              type="email"
              placeholder="enter your email..."
            />
            <button type="submit">
              <ArrowForwardIcon
                style={{ fontSize: 38 }}
                className="ml-2 rounded-lg bg-[#188CFF] text-xl text-[#31353f] hover:bg-gray-600 hover:text-black"
              />
            </button>
          </form>
          <p className="mt-4">
            Subscribe to our newsletter & get all the latest updates!
          </p>
        </div>
      </div>

      <hr className="mb-4" />

      <div className="flex items-center justify-around py-2">
        <div>
          <img
            className="w-8 rotate-12"
            src={require("../../../assets/images/dogecoin-logo.png")}
            alt=""
          />
        </div>
        <div className="flex text-gray-300">
          <h4 className="cursor-pointer hover:text-[#9e9e9e]">Terms</h4>
          <h4 className="mx-8 cursor-pointer hover:text-[#9e9e9e]">Privacy</h4>
          <h4 className="cursor-pointer hover:text-[#9e9e9e]">Cookies</h4>
        </div>
        <div className="flex">
          <a
            href="https://github.com/YasinduNethmina"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon className="hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/yasinduneth/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon className="mx-4 hover:text-white" />
          </a>
          <a
            href="https://twitter.com/yasinduneth"
            rel="noreferrer"
            target="_blank"
          >
            <TwitterIcon className="hover:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
