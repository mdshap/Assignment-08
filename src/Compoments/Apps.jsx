import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import AppCard from "./AppCard";
import appError from "../assets/App-Error.png";
import Loader from "./Loader";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";

const Apps = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to load app data.");
      });
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setSearching(true);
      const timer = setTimeout(() => setSearching(false), 300);
      return () => clearTimeout(timer);
    }
    setSearching(false);
  }, [searchTerm]);

    const sortedApps = [...apps].sort((a, b) => {
    if (sortOrder === "high-low") {
      return b.downloads - a.downloads;
    } else if (sortOrder === "low-high") {
      return a.downloads - b.downloads;
    } else if (sortOrder === "size") {
      return b.size - a.size;
    }
    return 0;
  });

  const filteredApps = sortedApps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );




  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our All Applications
          </h1>
          <p className="text-gray-500 text-sm sm:text-lg">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="text-lg flex gap-4 items-center font-semibold text-gray-700">
            <p>({filteredApps.length}) Apps Found</p>
            <div>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-2 text-center text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm md:text-md">
                <option value="No-Sort">No Sort</option>
              <option value="size">Sort By Size</option>
              <option value="high-low">High-Low Downloads</option>
              <option value="low-high">Low-High Downloads</option>
            </select>
          </div>
          </div>
          
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="search Apps"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-600 w-full md:w-64"
            />

            <span className="absolute left-3 top-3 text-gray-400">
              <FaSearch />
            </span>
          </div>
        </div>

        {searching ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-600"></div>
          </div>
        ) : filteredApps.length === 0 ? (
          <div className="text-center py-20 flex flex-col items-center justify-center">
            <img
              src={appError}
              alt="appERROR"
              className="w-80 h-50 object-contain  mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              OPPS!! APP NOT FOUND
            </h2>
            <p className="text-gray-600">
              The App you are requesting is not found on our system. please try
              another apps
            </p>

            <button
              onClick={() => setSearchTerm("")}
              className="mt-6 px-6 py-2 rounded bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white font-bold text-base shadow-md hover:opacity-90 transition">
              GO Back
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredApps.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                onClick={() => navigate(`/app/${app.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
