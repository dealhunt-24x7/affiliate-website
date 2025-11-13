"use client";
import { useEffect, useState } from "react";

export default function WalletPage() {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState({
    available: 0,
    pending: 0,
    withdrawn: 0,
    totalEarned: 0,
  });
  const [transactions, setTransactions] = useState<any[]>([]);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawing, setWithdrawing] = useState(false);

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const res = await fetch("/api/wallet");
        if (!res.ok) throw new Error("Failed to fetch wallet");
        const data = await res.json();
        setSummary(data.summary);
        setTransactions(data.transactions);
      } catch (err) {
        console.error(err);
        alert("Error loading wallet data!");
      } finally {
        setLoading(false);
      }
    };
    fetchWallet();
  }, []);

  const handleWithdraw = async () => {
    if (!withdrawAmount || Number(withdrawAmount) <= 0) {
      alert("Enter valid amount");
      return;
    }
    setWithdrawing(true);
    try {
      const res = await fetch("/api/wallet/withdraw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: withdrawAmount }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Withdrawal successful!");
        setSummary((prev) => ({
          ...prev,
          available: data.wallet.available,
          withdrawn: data.wallet.withdrawn,
        }));
        setWithdrawAmount("");
      } else alert(data.error || "Withdrawal failed!");
    } catch {
      alert("Something went wrong!");
    } finally {
      setWithdrawing(false);
    }
  };

  if (loading)
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        Loading wallet data...
      </div>
    );

  return (
    <main className="max-w-5xl mx-auto py-10 px-4 space-y-8">
      <h1 className="text-3xl font-bold text-yellow-600">My Wallet</h1>
      <p className="text-gray-600">Track your DealHunt cashback & referral rewards.</p>

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

      <div className="text-center space-y-3">
        <input
          type="number"
          placeholder="Enter amount"
          className="border px-4 py-2 rounded-md text-gray-700 w-48 text-center"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
        <br />
        <button
          disabled={withdrawing}
          onClick={handleWithdraw}
          className={`${
            withdrawing ? "bg-gray-400" : "bg-yellow-500 hover:bg-yellow-600"
          } text-white px-6 py-2 rounded-lg`}
        >
          {withdrawing ? "Processing..." : "Withdraw Funds"}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Transaction History
        </h2>
        {transactions.length === 0 ? (
          <p className="text-gray-500 text-center">No transactions yet.</p>
        ) : (
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
                    <td className="border p-2">
                      {new Date(t.date).toLocaleDateString()}
                    </td>
                    <td className="border p-2">{t.description}</td>
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
        )}
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
