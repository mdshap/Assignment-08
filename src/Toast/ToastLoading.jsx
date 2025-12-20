import React from "react";

const ToastLoading = ({ text = "Loading..." }) => {
  return (
    <div className="toast-loading p-2" style={{ color: "white", width: 260 }}>
      <div className="flex items-center gap-3">
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          style={{ color: "white" }}
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div style={{ fontWeight: 600 }}>{text}</div>
      </div>

      <div
        className="mt-2 relative"
        style={{
          height: 8,
          background: "rgba(255,255,255,0.12)",
          borderRadius: 999,
          overflow: "hidden",
        }}
      >
        <div
          className="slider"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "40%",
            background: "rgba(255,255,255,0.95)",
            borderRadius: 999,
            left: "100%",
            animation: "toast-slide-left 1.2s linear infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes toast-slide-left {
          0% { left: 100%; }
          100% { left: -40%; }
        }
      `}</style>
    </div>
  );
};

export default ToastLoading;
