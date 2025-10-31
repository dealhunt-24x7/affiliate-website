"use client";
import { useState, useRef } from "react";
import { BsRobot } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";

export default function FloatingAIButtons() {
  const [speaking, setSpeaking] = useState(false);
  const fileInputRef = useRef(null);

  const handleVoice = () => {
    setSpeaking(true);
    const speech = new SpeechSynthesisUtterance("Hello! I am your AI shopping assistant.");
    speech.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(speech);
  };

  const handleCamera = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    console.log("Selected file:", file);
    alert(`Selected file: ${file.name}`);
    e.target.value = ""; // reset input
  };

  return (
    <>
      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
        <button
          onClick={handleVoice}
          className="bg-yellow-500 hover:bg-yellow-600 p-4 rounded-full shadow-lg text-white text-2xl"
        >
          <BsRobot />
        </button>
        <button
          onClick={handleCamera}
          className="bg-orange-500 hover:bg-orange-600 p-4 rounded-full shadow-lg text-white text-2xl"
        >
          <FiCamera />
        </button>
      </div>
    </>
  );
      }
