"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing React Icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white fixed inset-x-0 z-10 shadow-md px-4 md:px-10">
      <div className="container ml-0  py-2 flex items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/tavisa.png"
            alt="Logo"
            width={250}
            height={80}
            className="h-16 w-auto" // Ensure height is set properly
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex-grow flex items-center justify-between md:ml-6 mr-0">
          <div className="hidden md:flex flex-1 items-center justify-between px-0">
            {" "}
            {/* Reduced space between links */}
            <Link
              href="/"
              className={`text-center text-sm px-2 py-2 ${
                // Reduced padding
                pathname === "/" ? "text-yellow-500" : "text-gray-800"
              }`}
            >
              Home
            </Link>
            <Link
              href="/who-are-we"
              className={`text-center px-2 py-2 text-sm ${
                // Reduced padding
                pathname === "/who-are-we" ? "text-yellow-500" : "text-gray-800"
              }`}
            >
              Who are we
            </Link>
            <Link
              href="/symptoms"
              className={`text-center px-2 py-2 text-sm ${
                // Reduced padding
                pathname === "/symptoms" ? "text-yellow-500" : "text-gray-800"
              }`}
            >
              Symptoms
            </Link>
            <Link
              href="/how-we-treat"
              className={`text-center px-2 py-2 text-sm ${
                // Reduced padding
                pathname === "/how-we-treat"
                  ? "text-yellow-500"
                  : "text-gray-800"
              }`}
            >
              How we treat
            </Link>
            <Link
              href="/learn"
              className={`text-center px-2 py-2 text-sm ${
                // Reduced padding
                pathname === "/learn" ? "text-yellow-500" : "text-gray-800"
              }`}
            >
              Learn
            </Link>
            {/* <Link
              href="/phone-number"
              className={`text-center px-2 py-2 text-sm ${
                // Reduced padding
                pathname === "/phone-number"
                  ? "text-yellow-500"
                  : "text-gray-800"
              }`}
            >
              PhoneNumber
            </Link> */}
            <Link
              href="/contact"
              className={`text-center px-2 py-2 text-sm ${
                // Reduced padding
                pathname === "/contact" ? "text-yellow-500" : "text-gray-800"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/what-next"
              className="bg-pink-500 text-white px-2 py-2 rounded-full text-sm hover:bg-blue-600" // Adjusted padding
            >
              What Next?
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 ml-auto"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
            {/* <Link
              href="/phone-number"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 ${
                pathname === "/phone-number"
                  ? "text-yellow-500"
                  : "text-gray-800"
              }`}
            >
              PhoneNumber
            </Link> */}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 ${
                pathname === "/contact" ? "text-yellow-500" : "text-gray-800"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/what-next"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-blue-600"
            >
              What Next?
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
