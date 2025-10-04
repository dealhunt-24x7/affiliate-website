"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.ok) router.push("/");
    else alert("Invalid credentials");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
      <div className="flex flex-col gap-2 mt-4">
        <button onClick={() => signIn("google")} className="p-2 bg-red-500 text-white rounded">
          Continue with Google
        </button>
        <button onClick={() => signIn("facebook")} className="p-2 bg-blue-700 text-white rounded">
          Continue with Facebook
        </button>
      </div>
    </div>
  );
}
