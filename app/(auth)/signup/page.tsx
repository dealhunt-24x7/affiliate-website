"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      alert("Signup successful!");
      router.push("/signin");
    } else {
      const data = await res.json();
      alert(data.error || "Signup failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Create Account</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
        <input
          placeholder="Full Name"
          className="border p-2 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="bg-green-600 text-white p-2 rounded">Signup</button>
      </form>
    </div>
  );
}
