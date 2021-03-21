import React, { useRef, useState } from "react";
//import "./Chat.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className="bg-indigo-400 flex flex-col text-white rounded-xl items-center">
          <main className="flex flex-col items-end ">
            {messages &&
              messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

            <span ref={dummy}></span>
          </main>

          <form className="w-3/4 flex py-2" onSubmit={sendMessage}>
            <input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Say hi!"
              className="rounded-l-xl w-3/4 px-5 py-2 text-gray-900"
            />

            <button
              className="rounded-r-xl bg-indigo-500 text-white font-bold px-5 py-2"
              type="submit"
              disabled={!formValue}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass =
    uid === auth.currentUser.uid
      ? "sent bg-yellow-200 text-gray-800 rounded-xl py-2 px-5 m-3"
      : "received bg-gray-200 text-gray-800 rounded-xl py-2 px-5 m-3 self-start";

  return (
    <>
      <div className={`message  flex ${messageClass}`}>
        <p>{text}</p>
      </div>
    </>
  );
}

export default ChatRoom;
