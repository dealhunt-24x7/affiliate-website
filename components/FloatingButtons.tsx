import React from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <>
      <button className="fab">
        <FaHome />
      </button>
      <button className="fab mt-16">
        <FaShoppingCart />
      </button>
    </>
  );
};

export default FloatingButtons;
