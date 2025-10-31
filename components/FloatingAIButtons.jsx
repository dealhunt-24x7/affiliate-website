"use client";
import { useState } from "react";
import { BsRobot } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";

export default function FloatingAIButtons() {
  const [speaking, setSpeaking] = useState(false);

  const handleVoice = () => {
    setSpeaking(true);
    const speech = new SpeechSynthesisUtterance("Hello! I am your AI shopping assistant.");
    speech.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(speech);
  };

  const handleCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // Camera stream open hua, ab aap modal me ya video element me dikha sakte ho
      const video = document.createElement("video");
      video.srcObject = stream;
      video.autoplay = true;
      video.playsInline = true;
      video.className = "fixed top-1/2 left-1/2 w-80 h-60 -translate-x-1/2 -translate-y-1/2 z-50 border-4 border-white rounded-lg shadow-lg";
      document.body.appendChild(video);

      // Optional: click on video to close camera
      video.onclick = () => {
        stream.getTracks().forEach(track => track.stop());
        video.remove();
      };
    } catch (err) {
      console.error(err);
      alert("Camera access denied or not supported on this device.");
    }
  };

  return (
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
  );
}
