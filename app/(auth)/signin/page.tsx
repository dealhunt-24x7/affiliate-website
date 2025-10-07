"use client";

import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignInPage() {
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Sign in to DealHunt
        </h1>

        {!providers ? (
          <p>Loading providers...</p>
        ) : (
          <div className="flex flex-col gap-4">
            {Object.values(providers).map((provider: any) => (
              <button
                key={provider.name}
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="w-full py-2 px-4 border rounded-lg shadow hover:bg-gray-100 transition"
              >
                Sign in with {provider.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
