"use client";
import { useState } from "react";

export default function WalletPage() {
  const [balance, setBalance] = useState(1200);
  const [pending, setPending] = useState(300);

  const handleWithdraw = () => {
    alert("Withdrawal request submitted successfully!");
  };

  return (
    <main className="max-w-3xl mx-auto py-10 px-4 space-y-8">
      <h1 className="text-3xl font-bold text-yellow-600">My Wallet</h1>
      <p className="text-gray-600">
        Track your rewards, referral earnings and cashback balance here.
      </p>

      {/* Balance Cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-2xl font-bold text-green-600">₹{balance}</h3>
          <p className="text-gray-600 text-sm">Available Balance</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-2xl font-bold text-orange-500">₹{pending}</h3>
          <p className="text-gray-600 text-sm">Pending Rewards</p>
        </div>
      </div>

      {/* Withdraw Button */}
      <div className="text-center">
        <button
          onClick={handleWithdraw}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Withdraw Now
        </button>
      </div>

      <a
        href="/"
        className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
      >
        Back to Home
      </a>
    </main>
  );
        }
