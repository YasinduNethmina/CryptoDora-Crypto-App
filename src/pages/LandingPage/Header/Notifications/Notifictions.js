import React from "react";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CampaignIcon from "@mui/icons-material/Campaign";
import "./Notifications.scss";

function Notifictions() {
  return (
    <div className="notificationsTab w-60 rounded-xl border-2 border-solid border-sky-500 bg-[#1B2028] text-white shadow-xl dark:bg-white">
      <div className="flex justify-between">
        <h1 className="ml-3 mt-2 text-[#9e9e9e] hover:text-gray-500 dark:font-semibold dark:text-black">
          Notifications
        </h1>
      </div>

      <div className="mx-4 mt-5 cursor-pointer">
        <h1 className="rounded-xl shadow-md transition-all hover:translate-y-1 hover:shadow-2xl dark:text-black">
          <NewReleasesIcon style={{ color: "red" }} /> Bitcoin went up 1% up in
          last 24 hours!
        </h1>
      </div>

      <div className="mx-4 mt-4 cursor-pointer">
        <h1 className="rounded-xl shadow-md transition-all hover:translate-y-1 hover:shadow-2xl dark:text-black">
          <PriorityHighIcon style={{ color: "yellow" }} /> Fed Meeting has just
          started.
        </h1>
      </div>

      <div className="mx-4 mt-4 cursor-pointer">
        <h1 className="rounded-xl shadow-md transition-all hover:translate-y-1 hover:shadow-2xl dark:text-black">
          <CampaignIcon style={{ color: "#16a34a" }} /> Solana chart seems
          passing a bull trap.
        </h1>
      </div>

      <div className="mx-4 mt-4 cursor-pointer">
        <h1 className="rounded-xl shadow-md transition-all hover:translate-y-1 hover:shadow-2xl dark:text-black">
          <CampaignIcon style={{ color: "#16a34a" }} /> Meta accepts NFTs for
          the first time -Mark Zuckerburg!
        </h1>
      </div>
      <h1 className="mb-2 mt-2 cursor-pointer text-center text-sky-500 hover:text-blue-500">
        Show More
      </h1>
    </div>
  );
}

export default Notifictions;
