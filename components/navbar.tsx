"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaUser, FaShoppingCart } from "react-icons/fa";
import Logo from "./logo";

interface NavbarProps {
  headerLogo: string;
}

export default function Navbar({ headerLogo }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white fixed inset-x-0 z-10 shadow-md px-4 md:px-10 w-full">
      <div className="ml-0  py-2 flex items-center lg:gap-4 justify-center w-full">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src={headerLogo}
              alt="Logo"
              width={250}
              height={80}
              className="h-16 w-auto lg:mr-10 md:mr-4"
            />
          </Link>
        </div>

        {/* <div className="hidden md:flex flex-grow flex items-center"> */}
        <div className="hidden md:flex flex-1 items-center px-0 lg:gap-10">
          <Link
            href="/who-are-we"
            className={`text-center px-2 py-2 text-sm ${
              pathname === "/who-are-we" ? "text-yellow-500" : "text-gray-800"
            }`}
          >
            Who are we
          </Link>
          <Link
            href="/symptoms"
            className={`text-center px-2 py-2 text-sm ${
              pathname === "/symptoms" ? "text-yellow-500" : "text-gray-800"
            }`}
          >
            Symptoms
          </Link>
          <Link
            href="/how-we-treat"
            className={`text-center px-2 py-2 text-sm ${
              pathname === "/how-we-treat" ? "text-yellow-500" : "text-gray-800"
            }`}
          >
            How we treat
          </Link>
          <Link
            href="/learn"
            className={`text-center px-2 py-2 text-sm ${
              pathname === "/learn" ? "text-yellow-500" : "text-gray-800"
            }`}
          >
            Learn
          </Link>
        </div>
        <div className=" hidden md:flex flex-row lg:gap-10 justify-between items-center gap-4">
          <Link
            href="/shop"
            className="bg-pink-500 text-white px-2 py-2 rounded-full text-xs hover:bg-blue-600" // Adjusted padding
          >
            Shop
          </Link>
          <Link
            href="/#"
            className="bg-pink-500 text-white px-2 py-2 rounded-full text-sm hover:bg-blue-600" // Adjusted padding
          >
            <FaUser />
          </Link>
          <Link
            href="/#"
            className="bg-pink-500 text-white px-2 py-2 rounded-full text-sm hover:bg-blue-600" // Adjusted padding
          >
            <FaShoppingCart />
          </Link>
        </div>
        {/* </div> */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 ml-auto"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col items-center space-y-2 py-3">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 ${
                pathname === "/" ? "text-yellow-500" : "text-gray-800"
              }`}
            >
              Home
            </Link>
            <Link
              href="/who-are-we"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 ${
                pathname === "/who-are-we" ? "text-yellow-500" : "text-gray-800"
              }`}
            >
              Who are we
            </Link>
            <Link
              href="/symptoms"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 ${
                pathname === "/symptoms" ? "text-yellow-500" : "text-gray-800"
              }`}
            >
              Symptoms
            </Link>
            <Link
              href="/how-we-treat"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 ${
                pathname === "/how-we-treat"
                  ? "text-yellow-500"
                  : "text-gray-800"
              }`}
            >
              How we treat
            </Link>
            <Link
              href="/learn"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 ${
                pathname === "/learn" ? "text-yellow-500" : "text-gray-800"
              }`}
            >
              Learn
            </Link>

            <Link
              href="/shop"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 ${
                pathname === "/contact" ? "text-yellow-500" : "text-gray-800"
              }`}
            >
              Shop
            </Link>
            <Link
              href="/#"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 ${
                pathname === "/contact" ? "text-yellow-500" : "text-gray-800"
              }`}
            >
              User Profile
            </Link>
            <Link
              href="/#"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 ${
                pathname === "/contact" ? "text-yellow-500" : "text-gray-800"
              }`}
            >
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
