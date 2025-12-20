import React from "react";
import { useNavigate } from "react-router";
import errorLogo from "../assets/error-404.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="text-center px-4">
        <img
          src={errorLogo}
          alt="appERROR"
          className="w-70 sm:w-100  object-contain  mb-4 mx-auto"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Oops, page not found!
        </h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for is not available.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default NotFound;
