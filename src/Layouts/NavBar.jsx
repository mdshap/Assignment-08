import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center cursor-pointer z-50"
            onClick={() => navigate("/")}>
            <img
              src={logo}
              alt="HERO.IO Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="ml-2 text-xl font-bold text-[#632EE3]">
              HERO.IO
            </span>
          </div>

          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8 text-gray-700">
            <NavLink to="/" className="">
              Home
            </NavLink>

            <NavLink to="/apps" className="">
              Apps
            </NavLink>

            <NavLink to="/installation" className="">
              Installation
            </NavLink>
          </div>

          <Link
            to="https://github.com/mdshap"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Contribute</span>
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-50">
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}></span>
          </button>
        </div>


        <div
          className={`md:hidden overflow-hidden text-gray-700 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}>
          <div className="py-4 space-y-4">
            <NavLink
              to="/"
              className="block py-2"
              onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>

            <NavLink
              to="/apps"
              className="block py-2 "
              onClick={() => setIsMenuOpen(false)}>
              Apps
            </NavLink>

            <NavLink
              to="/installation"
              className="block py-2 "
              onClick={() => setIsMenuOpen(false)}>
              Installation
            </NavLink>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 w-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>Contribute</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
