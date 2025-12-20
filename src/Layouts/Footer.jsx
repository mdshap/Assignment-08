import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="HERO.IO Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="text-xl font-bold">HERO.IO</div>
                <div className="text-sm text-gray-400">
                  Build amazing mobile experiences
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              We craft user-centered mobile and web applications that people
              love to use.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link to="/" className="hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  className="hover:text-purple-400 transition-colors"
                >
                  All Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/installation"
                  className="hover:text-purple-400 transition-colors"
                >
                  Installation
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <div>
                Phone:{" "}
                <a href="tel:+1234567890" className="hover:text-purple-400">
                  +880 (123) 4567-890
                </a>
              </div>
              <div className="mt-2">Address: Rajshahi, Bangladesh</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <div className="flex items-center space-x-3 mb-4">
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 bg-gray-800 rounded hover:bg-purple-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 5.92c-.63.28-1.3.47-2 .56.72-.43 1.28-1.1 1.54-1.9-.68.4-1.44.7-2.24.86A3.5 3.5 0 0015.5 4c-1.93 0-3.5 1.6-3.5 3.6 0 .28.03.55.09.82C8.1 8.2 5.1 6.5 3 4.1c-.31.53-.48 1.15-.48 1.8 0 1.24.62 2.34 1.56 2.98-.57-.02-1.1-.18-1.56-.44v.04c0 1.72 1.18 3.15 2.74 3.48-.29.08-.6.11-.91.11-.22 0-.44-.03-.65-.06.44 1.43 1.72 2.47 3.23 2.5A7.03 7.03 0 012 19.54a9.86 9.86 0 005.34 1.57c6.42 0 9.94-5.35 9.94-9.99v-.45c.68-.5 1.28-1.12 1.75-1.82-.62.28-1.28.46-1.96.55z" />
                </svg>
              </Link>
              <Link
                to="https://www.linkedin.com/in/md-shaptarshi-8375501a2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 bg-gray-800 rounded hover:bg-purple-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.88 1.5 3 1.5s1.98.9 1.98 2zM.5 8.98h4.98V24H.5zM7.98 8.98h4.78v2.07h.07c.67-1.27 2.3-2.61 4.74-2.61 5.07 0 6 3.34 6 7.68V24h-4.98v-7.38c0-1.76-.03-4.03-2.46-4.03-2.46 0-2.84 1.92-2.84 3.9V24H7.98z" />
                </svg>
              </Link>
              <a
                href="https://facebook.com/ShapXD2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 bg-gray-800 rounded hover:bg-purple-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.1V12h2.1V9.4c0-2.06 1.22-3.2 3.08-3.2.9 0 1.84.16 1.84.16v2.02h-1.04c-1.02 0-1.34.64-1.34 1.3V12h2.28l-.36 2.9h-1.92v7A10 10 0 0022 12z" />
                </svg>
              </a>
            </div>

            <div className="text-sm text-gray-400">
              <div>
                Support:{" "}
                <a
                  href="mailto:support@hero.io"
                  className="hover:text-purple-400"
                >
                  support@hero.io
                </a>
              </div>
              <div className="mt-2">
                Business:{" "}
                <a href="mailto:biz@hero.io" className="hover:text-purple-400">
                  biz@hero.io
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          Copyright © {year} Md Shaptarshi — All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
