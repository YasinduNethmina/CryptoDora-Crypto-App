import React, { useState, useEffect } from "react";
import { db, auth } from "../../../../firebase-config";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  limit,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import "./Chat.scss";
import { Link } from "react-router-dom";

function Chat() {
  const [messages, setMessags] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];

      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessags(messages);
    });
    return () => unsubscribe();
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
    if (input?.length >= 10 && input?.length < 40) {
      document.querySelector(".errText").classList.add("hidden");
    } else if (input?.length < 10 || input?.length >= 40) {
      document.querySelector(".errText").classList.remove("hidden");
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (input?.length >= 10 && input?.length <= 40) {
      await addDoc(collection(db, "messages"), {
        text: input,
        createdAt: serverTimestamp(),
        name: user.displayName,
        photo: user.photoURL,
        uid: user.uid,
      });
      setInput("");
      document.querySelector(".errText").classList.add("hidden");
    }
  };

  useEffect(() => {
    if (user) {
      let elem = document.querySelector(".chat");
      elem.scrollTop = elem.scrollHeight;
    }
  }, [messages, input]);

  if (user) {
    return (
      <div className="chat absolute right-2 z-40 rounded-xl bg-[#1b2028] p-3 dark:mt-24 dark:h-3/4 dark:bg-[#fff]">
        <h1 className="text-3xl font-bold text-white dark:text-black">
          Community
        </h1>
        <h4 className="my-2 text-sm text-green-500">
          *Please don't share any of your private keys, passwords, etc!
        </h4>

        {messages.map((msg, index) => {
          return (
            <div className="mt-8 mb-4">
              <div className="mb-4 flex items-center">
                {msg?.photo ? (
                  <img
                    src={msg.photo}
                    alt="user-pic"
                    className="h-10 w-10 rounded-lg"
                  />
                ) : (
                  <PersonOutlineOutlinedIcon
                    className="rounded-lg bg-[#9E9E9E] text-[#1b2028] "
                    style={{
                      width: "2.7rem",
                      height: "2.7rem",
                      padding: ".5rem",
                    }}
                  />
                )}
                <div className="flex items-center">
                  <div className="ml-3">
                    <div className="flex">
                      <h1 className="font-bold text-white dark:text-black">
                        {msg?.name
                          ? msg.name
                          : String(user.email.slice(0, 16)) + "..."}
                        <VerifiedIcon className="ml-2 text-blue-600" />
                      </h1>
                    </div>
                    <h4 className="text-sm text-[#9E9E9E]">
                      @{String(msg.uid).slice(0, 20)}
                    </h4>
                  </div>
                </div>
              </div>

              <h4
                className={
                  msg.uid !== user.uid
                    ? "cursor-default rounded-lg bg-[#31353f] px-2 py-2 text-gray-300 dark:bg-[#f4f5f7] dark:text-lg dark:font-semibold dark:text-black"
                    : "cursor-default rounded-lg bg-slate-600 px-2 py-2 font-semibold text-white dark:bg-[#f4f5f7] dark:text-lg dark:font-semibold dark:text-[#00cccb]"
                }
              >
                {msg.text}
              </h4>
            </div>
          );
        })}
        <form action="" type="submit">
          <div className="mt-10">
            <h1 className="errText z-40 hidden text-xs font-semibold text-red-500">
              Please add at least 10 characters and less than 40 characters...
            </h1>
            <input
              className="mt-2 mb-4 h-10 w-full rounded-xl border-2 border-transparent bg-slate-800 pl-4 text-stone-400 outline-none focus:border-sky-500 dark:bg-[#f4f5f7] dark:text-[#7e818c]"
              type="text"
              placeholder="Type a message"
              onChange={handleInput}
              value={input}
            />
          </div>
          <button
            onClick={sendMessage}
            type="button"
            className="send-message rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-20 text-center font-semibold text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  } else if (user === null) {
    return (
      <div className="chatLogin absolute right-2 z-40 rounded-xl bg-[#1b2028] p-3 dark:mt-24 dark:h-60 dark:bg-[#fff] dark:shadow-lg">
        <div className="flex dark:items-center dark:justify-between">
          <h1 className="text-3xl font-bold text-white dark:text-black">
            Community
          </h1>
          <Link to="/signup-page">
            <button
              type="button"
              className="invisible mr-6 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-1 text-center font-semibold text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:visible dark:mt-0 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800"
            >
              Signup
            </button>
          </Link>
        </div>
        <Link to="/signup-page">
          <button
            type="button"
            className="mr-6 hidden rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-1 text-center font-semibold text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:mt-0 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800"
          >
            Signup
          </button>
        </Link>
        <div className="my-4 flex justify-center dark:my-1">
          <Link to="/signup-page">
            <button
              type="button"
              className="mr-6 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-1 text-center font-semibold text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:mt-0 dark:hidden dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800"
            >
              Signup
            </button>
          </Link>
          <Link to="/login-page">
            <button
              type="button"
              className="ml-6 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-1 text-center font-semibold text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:mb-0 dark:hidden dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </Link>
        </div>

        {messages.map((msg, index) => {
          if (index < 2) {
            return (
              <div className="mb-2 dark:mb-0">
                <div className="mb-2 flex items-center dark:mb-0">
                  {msg?.photo ? (
                    <img
                      src={msg.photo}
                      alt="user-pic"
                      className="h-7 w-7 rounded-lg"
                    />
                  ) : (
                    <PersonOutlineOutlinedIcon
                      className="rounded-lg bg-[#9E9E9E] text-[#1b2028] "
                      style={{
                        width: "2rem",
                        height: "2rem",
                        padding: ".5rem",
                      }}
                    />
                  )}
                  <div className="flex items-center">
                    <div className="ml-3">
                      <div className="flex">
                        <h1 className="text-sm font-bold text-white dark:text-black">
                          {msg.name}{" "}
                          <VerifiedIcon
                            style={{ fontSize: "1.2rem" }}
                            className="text-blue-600"
                          />
                        </h1>
                      </div>
                      <h4 className="text-xs text-[#9E9E9E]">
                        @{String(msg.uid).slice(0, 20)}
                      </h4>
                    </div>
                  </div>
                </div>

                <h4 className="cursor-default rounded-lg bg-[#31353f] py-2 pl-3 text-gray-300 dark:bg-[#fff] dark:font-semibold dark:text-black">
                  {msg.text}
                </h4>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
export default Chat;
