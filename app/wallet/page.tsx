"use client";
import { useState } from "react";

export default function WalletPage() {
  const [summary] = useState({
    available: 250,
    pending: 80,
    withdrawn: 500,
    totalEarned: 830,
  });

  const [transactions] = useState([
    { date: "30 Oct 2025", desc: "Referral Reward", type: "Credit", amount: 50 },
    { date: "28 Oct 2025", desc: "Withdrawal to UPI", type: "Debit", amount: 100 },
    { date: "25 Oct 2025", desc: "Signup Bonus", type: "Credit", amount: 300 },
  ]);

  return (
    <main className="max-w-5xl mx-auto py-10 px-4 space-y-8">
      <h1 className="text-3xl font-bold text-yellow-600">My Wallet</h1>
      <p className="text-gray-600">Track your DealHunt cashback & referral rewards.</p>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Available", value: summary.available, color: "text-green-600" },
          { label: "Pending", value: summary.pending, color: "text-yellow-600" },
          { label: "Withdrawn", value: summary.withdrawn, color: "text-blue-600" },
          { label: "Total Earned", value: summary.totalEarned, color: "text-purple-600" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className={`text-2xl font-bold ${item.color}`}>₹{item.value}</p>
          </div>
        ))}
      </div>

      {/* Withdraw Button */}
      <div className="text-center">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg mt-4"
          onClick={() => alert("Withdraw feature coming soon!")}
        >
          Withdraw Funds
        </button>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Transaction History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border p-2">Date</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Type</th>
                <th className="border p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, i) => (
                <tr key={i} className="text-center">
                  <td className="border p-2">{t.date}</td>
                  <td className="border p-2">{t.desc}</td>
                  <td
                    className={`border p-2 font-semibold ${
                      t.type === "Credit" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {t.type}
                  </td>
                  <td className="border p-2">₹{t.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center">
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
