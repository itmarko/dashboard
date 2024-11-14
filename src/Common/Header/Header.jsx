import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-[#1a1a6e] to-[#2C2B55] text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div className="text-2xl font-bold">Genius</div>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
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
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>

      {/* Desktop Nav Links */}
      <nav className="hidden md:flex space-x-4">
        <Link to={"/About-us"} className="hover:underline">
          Why Us?
        </Link>
        <Link to={"/explore"} className="hover:underline">
          Explore
        </Link>
        <Link to={"/pricing"} className="hover:underline">
          Pricing
        </Link>
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="hover:underline">Sign in</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Sign up
        </button>
      </div>

      {/* Mobile Menu - Visible when `isOpen` is true */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gray-800 text-center md:hidden">
          <Link to={"/About-us"} className="block py-2 hover:underline">
            Why Us?
          </Link>
          <Link to={"/explore"} className="block py-2 hover:underline">
            Explore
          </Link>
          <Link to={"/pricing"} className="block py-2 hover:underline">
            Pricing
          </Link>
          <div className="py-2">
            <button className="hover:underline w-full py-2">Sign in</button>
            <button className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600 mt-2">
              Sign up
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
