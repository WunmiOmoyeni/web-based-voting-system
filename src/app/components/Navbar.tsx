// src/components/Navbar.tsx
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/au-logo.jpg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-white text-xl font-bold cursor-pointer">
                <Image src={logo} alt="logo" width={60}></Image>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div
            className={`lg:flex items-center ${isOpen ? "block" : "hidden"}`}
          >
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <Link
                href="/"
                className="text-white py-2 px-3 hover:bg-blue-700 rounded"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white py-2 px-3 hover:bg-blue-700 rounded"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white py-2 px-3 hover:bg-blue-700 rounded"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
