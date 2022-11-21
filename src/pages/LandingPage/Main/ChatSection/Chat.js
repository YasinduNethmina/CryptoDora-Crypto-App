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
    await addDoc(collection(db, "messages"), {
      text: input,
      createdAt: serverTimestamp(),
      name: user.displayName,
      photo: user.photoURL,
    });
  };

  return (
    <div className="absolute top-20 z-40 bg-red-500">
      {messages.map((msg) => {
        return (
          <div>
            <div className="flex">
              {msg.photo ? (
                <img
                  src={msg.photo}
                  className="h-10 w-10 rounded-lg"
                  alt="user-pic"
                />
              ) : (
                <PersonOutlineOutlinedIcon
                  className="rounded-lg bg-[#9E9E9E] text-[#1b2028] hover:bg-[#1b2028] hover:text-[#9E9E9E]"
                  style={{
                    width: "2.7rem",
                    height: "2.7rem",
                    padding: ".5rem",
                  }}
                />
              )}

              <h1>{msg.name}</h1>
              <h4>{msg.text}</h4>
              <h6>{msg.createdAt}</h6>
            </div>
          </div>
        );
      })}
      <form action="" type="submit">
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={sendMessage}>Send Message</button>
      </form>
    </div>
  );
}
export default Chat;
