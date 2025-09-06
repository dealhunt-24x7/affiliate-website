"use client";

import React, { useState } from "react";
import { HiMenu } from "react-icons/hi"; // Menu icon

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav>
      <div className="flex justify-between items-center">
        <div className="brand">Dealhunt</div>
        <div className="tagline">Find Best Deals Every Day</div>
        <div className="hidden lg:flex space-x-5">
          {/* Add Nav Links */}
        </div>
        <HiMenu onClick={toggleMenu} className="text-white text-3xl cursor-pointer lg:hidden" />
      </div>

      {/* Hamburger Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute left-0 top-0 z-10 bg-white w-full h-full">
          <div className="p-5">
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">Menu</div>
              <button onClick={toggleMenu} className="text-3xl">×</button>
            </div>
            <ul className="space-y-4 mt-5">
              {/* Menu Links */}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
