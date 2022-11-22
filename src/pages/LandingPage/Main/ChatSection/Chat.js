import React, { useState, useEffect } from "react";
import { db, auth } from "../../../../firebase-config";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";

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
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];

      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessags(messages);
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (input?.length >= 10) {
      await addDoc(collection(db, "messages"), {
        text: input,
        createdAt: serverTimestamp(),
        name: user.displayName,
        photo: user.photoURL,
      });
    } else {
      document.querySelector(".addMoreText").classList.remove("hidden");
    }
  };

  if (messages?.length >= 1) {
    console.log(messages);
    //31353F
    return (
      <div className="absolute top-20 z-40 rounded-xl bg-green-500 p-3">
        {messages.map((msg, index) => {
          return (
            <div className="my-4">
              <div className="mb-4 flex items-center">
                <PersonOutlineOutlinedIcon
                  className="rounded-lg bg-[#9E9E9E] text-[#1b2028] hover:bg-[#1b2028] hover:text-[#9E9E9E]"
                  style={{
                    width: "2.7rem",
                    height: "2.7rem",
                    padding: ".5rem",
                  }}
                />
                <div className="flex items-center">
                  <div className="ml-3">
                    <div className="flex">
                      <h1 className="font-bold text-white">
                        {msg.name} <VerifiedIcon className=" text-blue-600" />
                      </h1>
                      <h4 className="ml-2 text-gray-300">•</h4>
                    </div>
                    <h4 className="text-sm text-[#9E9E9E]">@{user.uid}</h4>
                  </div>
                </div>
              </div>

              <h4 className="duration-800 rounded-lg bg-[#1b2028] p-2 text-gray-300 transition-transform ease-in-out hover:scale-105 hover:border-2 hover:border-gray-300 hover:bg-[#1200] hover:font-semibold">
                {msg.text}
              </h4>
            </div>
          );
        })}
        <form action="" type="submit">
          <div>
            <input
              className="h-12 w-full rounded-xl border-2 border-gray-500 bg-gray-400 text-gray-500 outline-none"
              type="text"
              placeholder="Type a message"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button
            type="button"
            class="my-2 mr-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Send Message
          </button>
        </form>
        <h1 className="addMoreText hidden text-red-500">
          Please add at least 10 characters...
        </h1>
      </div>
    );
  }
}
export default Chat;
