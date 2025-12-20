import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { saveInstalledApp, isAppInstalled } from "../utils/localStorage";
import Loader from "./Loader";
import iconDownloads from "../assets/icon-downloads.png";
import starIcon from "../assets/icon-ratings.png";
import iconReviews from "../assets/icon-review.png";
import toast from "react-hot-toast";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundApp = data.find((a) => String(a.id) === String(id));
        setApp(foundApp);
        if (foundApp) {
          setInstalled(isAppInstalled(foundApp.id));
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to load app data.", {
          autoClose: 1000,
          theme: "colored",
        });
      });
  }, [id]);

  const handleInstall = () => {
    if (app && !installed) {
      saveInstalledApp(app.id);
      setInstalled(true);
      toast.success("App installed successfully!", {
        autoClose: 1000,
        theme: "colored",
      });
    }
  };

  const formatDownloads = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(0)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num;
  };

  if (loading) return <Loader />;

  if (!app) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="text-center px-4">
          <div className="text-8xl mb-6">😿</div>
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg mb-4 inline-block">
            <div className="text-2xl font-bold">NOT FOUND</div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            OPPS!! APP NOT FOUND
          </h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <button
            onClick={() => navigate("/apps")}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Go Back!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 bg-transparent lg:px-8">
        <div className="bg-transparent rounded-lg  p-4 md:p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex justify-center">
              <div className="bg-transparent rounded-lg w-full max-w-xs h-64 flex items-center justify-center overflow-hidden">
                <img
                  src={
                    app?.image
                  }
                  alt={app?.title || "No title"}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x300?text=No+Image";
                  }}
                />
              </div>
            </div>

            <div className="md:col-span-2 min-w-82.5 mx-auto text-center  md:text-left sm:mx-0">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {app.title}
              </h1>
              <p className="text-gray-500 mb-6">
                Developed by <span className="text-purple-600">{app.companyName}</span>
              </p>
              <hr className="text-gray-300" />

              <div className="grid grid-cols-3 justify-between mt-4 max-w-100 mx-auto md:mx-0 mb-6">
                <div className="text-center">
                  <div className="text-green-600 text-xl mb-1"><img src={iconDownloads} alt="" className="mx-auto w-8" /></div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Downloads
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">
                    {formatDownloads(app.downloads)}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-orange-500 text-2xl mb-1"><img src={starIcon} className="w-8 mx-auto" alt="" /></div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Average Ratings
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">
                    {app.ratingAvg}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-purple-600 text-2xl mb-1"><img src={iconReviews} alt="" className="mx-auto w-8" /></div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Total Reviews
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">
                    {formatDownloads(app.reviews)}
                  </div>
                </div>
              </div>

              <button
                onClick={handleInstall}
                disabled={installed}
                className={`w-full py-3 rounded-sm text-white md:max-w-60 font-semibold transition-colors ${
                  installed
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#00D390] hover:bg-green-600"
                }`}
              >
                {installed ? "Installed" : `Install Now (${app.size} MB)`}
              </button>
            </div>
          </div>
        </div>
<hr className="text-gray-300" />
        <div className="bg-transparent rounded-lg  p-4 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ratings</h2>

          <ResponsiveContainer width="100%" height={300}>
  <BarChart data={[...app.ratings].sort((a, b) => b.name.localeCompare(a.name))}layout="vertical">
    <XAxis type="number" axisLine={false} />
    <YAxis type="category" axisLine={false} dataKey="name" />
    <Tooltip />
    <Bar dataKey="count" fill="#f97316" />
  </BarChart>
</ResponsiveContainer>
        </div>

        <div className="bg-transparent rounded-lg  p-4 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {app.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
