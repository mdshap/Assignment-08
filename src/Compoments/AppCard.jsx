import React from "react";
import iconRatings from "../assets/icon-ratings.png";
import iconDownloads from "../assets/icon-downloads.png";
const AppCard = ({ app, onClick }) => {
  const formatDownloads = (num) => {
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(0)}B`;
    if (num >= 1000000) return `${(num / 1000000).toFixed(0)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num;
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 cursor-pointer overflow-hidden border border-gray-100"
      style={{ height: 404 }}
    >
      <div className="p-4 bg-white">
        <div
          className="w-full bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center"
          style={{ height: 285 }}
        >
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="px-4 pb-4">
        <h3 className="font-semibold text-slate-800 text-lg mb-3 leading-tight truncate">
          {app.title}
        </h3>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2 text-green-600 rounded-md bg-[rgba(0,211,144,0.08)] px-2 py-1 shadow-inner">
            <img src={iconDownloads} alt="downloads" className="w-4 h-4" />
            <span className="text-sm font-medium text-green-600">
              {formatDownloads(app.downloads)}
            </span>
          </div>

          <div className="flex items-center space-x-2 text-orange-500 rounded-md bg-[rgba(255,240,225,1)] px-2 py-1">
            <img src={iconRatings} alt="ratings" className="w-4 h-4" />
            <span className="text-sm font-medium text-orange-500">
              {app.ratingAvg}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
