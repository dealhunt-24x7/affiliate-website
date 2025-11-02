"use client";
import { useState } from "react";
import { FaCopy, FaWhatsapp, FaTelegram, FaXTwitter } from "react-icons/fa6";

export default function ReferPage() {
  const [copied, setCopied] = useState(false);
  const referralCode = "DH12345";
  const referralLink = `https://dealhunt.in/ref?id=${referralCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <main className="max-w-3xl mx-auto py-10 px-4 space-y-8">
      <h1 className="text-3xl font-bold text-yellow-600">Refer & Earn</h1>
      <p className="text-gray-600">
        Invite your friends to DealHunt and earn rewards when they shop with your link!
      </p>

      {/* Referral Card */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-4 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Your Referral Link</h2>
        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
          <span className="text-sm text-gray-700 truncate">{referralLink}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded-md text-sm"
          >
            <FaCopy /> {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="flex gap-3 pt-2">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(referralLink)}`}
            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
          >
            <FaWhatsapp />
          </a>
          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(referralLink)}`}
            className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-full"
          >
            <FaTelegram />
          </a>
          <a
            href={`https://x.com/intent/tweet?text=${encodeURIComponent(referralLink)}`}
            className="bg-gray-800 hover:bg-black text-white p-2 rounded-full"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>

      {/* Earning Summary */}
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { label: "Total Referrals", value: "12" },
          { label: "Successful Referrals", value: "7" },
          { label: "Total Earnings", value: "₹350" },
          { label: "Pending Earnings", value: "₹150" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-yellow-600">{item.value}</h3>
            <p className="text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>

      <a
        href="/"
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
      >
        Back to Home
      </a>
    </main>
  );
}
