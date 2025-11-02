"use client";
import { useState } from "react";

export default function WalletPage() {
  const [balance] = useState(250);
  const [transactions] = useState([
    { date: "30 Oct 2025", desc: "Referral Reward", type: "Credit", amount: 50 },
    { date: "28 Oct 2025", desc: "Withdrawal to UPI", type: "Debit", amount: 100 },
    { date: "25 Oct 2025", desc: "Signup Bonus", type: "Credit", amount: 300 },
  ]);

  return (
    <main className="max-w-4xl mx-auto py-10 px-4 space-y-8">
      <h1 className="text-3xl font-bold text-yellow-600">Wallet</h1>
      <p className="text-gray-600">Track your DealHunt earnings & withdrawals here.</p>

      {/* Wallet Summary */}
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Available Balance</h2>
        <p className="text-4xl font-bold text-green-600 mt-2">₹{balance}</p>
        <button
          className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg"
          onClick={() => alert("Withdrawals feature coming soon!")}
        >
          Request Withdrawal
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
