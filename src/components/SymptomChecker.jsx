import React, { useState } from "react";
import { TextField, IconButton, Avatar } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { FaRobot } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";

const SymptomChecker = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! Describe your symptoms.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      const userMessage = { text: input, sender: "user" };
      setMessages([...messages, userMessage]);
      setInput("");

      // Simulate AI response (replace with actual AI API call)
      setTimeout(() => {
        const aiResponse = {
          text: `Based on your symptoms, it could be a common cold. If symptoms persist, consult a doctor.`,
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
      }, 1000); // Simulate processing time
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-bold mb-2 text-blue-700">
        <FaRobot className="inline-block mr-2" />
        AI Symptom Checker
      </h3>
      <div className="h-64 overflow-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            } mb-2`}
          >
            <Avatar
              sx={{ bgcolor: msg.sender === "user" ? "blue" : "gray" }}
            >
              {msg.sender === "user" ? <BsPerson /> : <FaRobot />}
            </Avatar>
            <p
              className={`p-2 rounded my-1 ml-2 ${
                msg.sender === "user" ? "bg-blue-200" : "bg-gray-200"
              }`}
            >
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex mt-2">
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
          placeholder="Describe your symptoms"
          variant="outlined"
        />
        <IconButton onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </div>
      <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Consult a Doctor
      </button>
    </div>
  );
};

export default SymptomChecker;
