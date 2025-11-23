"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function update(key: string, value: string) {
    setForm({ ...form, [key]: value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    await axios.post("/api/signup", form);
    router.push("/signin");
  }

  return (
    <div className="w-full flex justify-center py-20">
      <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
          value={form.password}
          onChange={(e) => update("password", e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded"
        >
          Create Account
        </button>
      </form>
    </div>
  );
        }
