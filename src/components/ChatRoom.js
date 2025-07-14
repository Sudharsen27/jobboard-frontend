

import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

const ChatRoom = ({ jobId, currentUserId, targetUserId }) => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const roomId = [jobId, currentUserId, targetUserId].sort().join("-");

  useEffect(() => {
    socket.emit("joinRoom", { roomId });

    // ✅ Fetch messages using jobId only
    axios.get(`http://localhost:5000/api/messages/job/${jobId}`)
      .then(res => setMessages(res.data))
      .catch(err => console.error("Failed to fetch messages", err));

    socket.on("receiveMessage", (msg) => {
      setMessages(prev => [...prev, msg]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [roomId, jobId]);

  const sendMessage = () => {
    if (!messageInput) return;

    const msgData = {
      roomId,
      senderId: currentUserId,
      receiverId: targetUserId,
      jobId,
      message: messageInput,
    };

    socket.emit("sendMessage", msgData);
    setMessageInput("");
  };

  return (
    <div className="p-4 border rounded max-w-lg mx-auto">
      <h2 className="text-lg font-bold mb-2">Chat</h2>
      <div className="h-64 overflow-y-auto border p-2 mb-4 bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded ${
              msg.senderId === currentUserId ? "bg-green-200 text-right" : "bg-blue-100 text-left"
            }`}
          >
            {msg.message}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border px-3 py-2 rounded"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
