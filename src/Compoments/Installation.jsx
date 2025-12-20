import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { getInstalledApps, removeInstalledApp } from "../utils/localStorage";
import Loader from "./Loader";
import iconDownloads from "../assets/icon-downloads.png";
import starIcon from "../assets/icon-ratings.png";

const Installation = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [apps, setApps] = useState([]);
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("size");

  const loadInstalledApps = (allApps) => {
    const ids = getInstalledApps();
    const installed = allApps.filter((app) => ids.includes(String(app.id)));
    setInstalledApps(installed);
  };

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        loadInstalledApps(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to load app data.");
      });
  }, []);

  const handleUninstall = (appId) => {
    removeInstalledApp(appId);
    loadInstalledApps(apps);
    toast.success("App uninstalled successfully!", {
      duration: 3000,
      style: {
        background: "#ef4444",
        color: "#fff",
      },
    });
  };

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "high-low") {
      return b.downloads - a.downloads;
    } else if (sortOrder === "low-high") {
      return a.downloads - b.downloads;
    } else if (sortOrder === "size") {
      return b.size - a.size;
    }
    return 0;
  });

  const formatDownloads = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(0)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num;
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center my-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Your Installed Apps
          </h1>
          <p className="text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="flex flex-row justify-between items-center mb-8 gap-4">
          <div className="text-lg font-semibold text-gray-700">
            {installedApps.length} Apps Found
          </div>
          <div>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-2 text-center text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm md:text-md">
              <option value="size">Sort By Size</option>
              <option value="high-low">High-Low Downloads</option>
              <option value="low-high">Low-High Downloads</option>
            </select>
          </div>
        </div>

        {installedApps.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📦</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              No Installed Apps
            </h2>
            <p className="text-gray-600 mb-6">
              Start installing apps to see them here
            </p>
            <button
              onClick={() => navigate("/apps")}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Browse Apps
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedApps.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4 w-full md:w-auto">
                  <div className="bg-gray-200 w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{app.title}</h3>
                    <div className="flex items-center space-x-4 text-sm mt-1">
                      <div className="flex items-center space-x-1 text-green-600">
                        <span><img src={iconDownloads} className="w-4" alt="" /></span>
                        <span>{formatDownloads(app.downloads)}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-orange-500">
                        <span><img src={starIcon} className="w-4" alt="" /></span>
                        <span>{app.ratingAvg}</span>
                      </div>
                      <span className="text-gray-500">{app.size} MB</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors w-full md:w-auto">
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;
