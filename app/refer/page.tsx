"use client";
import { useEffect, useState } from "react";
import {
  FaCopy,
  FaWhatsapp,
  FaTelegram,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";

export default function ReferPage() {
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReferral = async () => {
      try {
        const res = await fetch("/api/refer");
        if (!res.ok) throw new Error("Failed to fetch referral data");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
        alert("Error loading referral info!");
      } finally {
        setLoading(false);
      }
    };
    fetchReferral();
  }, []);

  const copyToClipboard = async () => {
    if (!data) return;
    await navigator.clipboard.writeText(data.link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (loading)
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        Loading referral info...
      </div>
    );

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-yellow-600">Refer & Earn</h1>
      <p className="mt-4 text-gray-600">
        Invite friends to DealHunt and earn rewards when they shop using your link!
      </p>

      <div className="mt-8 bg-white p-6 rounded-lg shadow text-center">
        <p className="text-lg text-gray-700">Your Referral Link:</p>
        <div className="flex items-center justify-center gap-2 mt-3">
          <input
            type="text"
            readOnly
            value={data.link}
            className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-96 text-gray-600"
          />
          <button
            onClick={copyToClipboard}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-md"
          >
            <FaCopy />
          </button>
        </div>
        {copied && <p className="text-green-500 mt-2">Copied!</p>}

        <div className="mt-4 text-sm text-gray-500">
          <p>Total Referrals: {data.stats.totalRefs}</p>
          <p>Successful: {data.stats.successful}</p>
          <p>Total Rewards: ₹{data.stats.totalRewards}</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Share via</h2>
        <div className="flex justify-center gap-4 text-2xl">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              `Check this out: ${data.link}`
            )}`}
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full"
          >
            <FaWhatsapp />
          </a>
          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(
              data.link
            )}&text=Join DealHunt and earn rewards!`}
            target="_blank"
            className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full"
          >
            <FaTelegram />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              data.link
            )}&text=Join DealHunt and earn rewards!`}
            target="_blank"
            className="bg-black hover:bg-gray-800 text-white p-3 rounded-full"
          >
            <FaXTwitter />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              data.link
            )}`}
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="/"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-md"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
