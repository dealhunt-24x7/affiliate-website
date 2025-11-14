"use client";

import { useState } from "react";

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const submitFeedback = async () => {
    const res = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ name, message }),
    });

    const data = await res.json();
    if (data.success) setSuccess("Feedback submitted successfully!");
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-yellow-500">Share Your Feedback</h1>

      <div className="space-y-4 bg-white p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Your Feedback"
          className="w-full border p-2 rounded h-32"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          onClick={submitFeedback}
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
        >
          Submit
        </button>

        {success && <p className="text-green-600">{success}</p>}
      </div>
    </div>
  );
                                      }
