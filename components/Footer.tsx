import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
          <FaTwitter />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
