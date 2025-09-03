"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, User, Search } from "lucide-react";
import Sidebar from "@/components/Sidebar";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-3 py-2 md:px-6">
          <div className="grid grid-cols-12 items-center gap-3">
            <div className="col-span-5 md:col-span-3 flex items-center gap-3">
              <button
                aria-label="Menu"
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-md border md:hidden"
              >
                <Menu size={20} />
              </button>
              <Link href="/" className="block">
                <div className="leading-tight">
                  <div className="text-xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                      Dealhunt
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-500 -mt-0.5">
                    Best deals. Smart savings.
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-span-12 md:col-span-6 order-last md:order-none">
              <form
                action="/products"
                className="relative flex items-center"
              >
                <input
                  name="q"
                  placeholder="Search for products, brands and more"
                  className="w-full rounded-full border px-4 py-2 pl-10 outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <span className="pointer-events-none absolute left-3">
                  <Search size={18} />
                </span>
              </form>
            </div>

            <div className="col-span-7 md:col-span-3 flex items-center justify-end gap-2">
              <div className="relative">
                <button
                  onClick={() => setProfileOpen((p) => !p)}
                  className="flex items-center gap-2 rounded-full border px-3 py-1.5"
                >
                  <User size={18} />
                  <span className="hidden md:inline text-sm">Account</span>
                </button>
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-lg border bg-white p-2 shadow-md">
                    <Link
                      href="#"
                      className="block rounded-md px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      Login / Signup
                    </Link>
                    <Link
                      href="#"
                      className="block rounded-md px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      Profile Settings
                    </Link>
                  </div>
                )}
              </div>

              <button
                aria-label="Menu"
                onClick={() => setSidebarOpen(true)}
                className="hidden md:inline-flex p-2 rounded-md border"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
