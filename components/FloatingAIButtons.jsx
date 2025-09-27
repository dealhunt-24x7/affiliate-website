"use client";

import { useState } from "react";
import { FiMic, FiCamera } from "react-icons/fi";

export default function FloatingAIButtons() {
  const [listening, setListening] = useState(false);

  const handleVoice = () => {
    setListening(!listening);
    const speech = new SpeechSynthesisUtterance(
      "This is a demo voice assistant speaking about the product."
    );
    window.speechSynthesis.speak(speech);
  };

  const handleCamera = () => {
    alert("Open camera or upload image to detect product (demo).");
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      <button
        onClick={handleVoice}
        className="bg-yellow-500 hover:bg-yellow-600 p-4 rounded-full shadow-lg text-white text-2xl"
      >
        <FiMic />
      </button>
      <button
        onClick={handleCamera}
        className="bg-orange-500 hover:bg-orange-600 p-4 rounded-full shadow-lg text-white text-2xl"
      >
        <FiCamera />
      </button>
    </div>
  );
}
