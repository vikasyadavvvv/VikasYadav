"use client";

import { useEffect } from "react";

export default function ThreeBackground() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes float1 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(40px, -20px); }
      }
      @keyframes float2 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(-30px, 25px); }
      }
      @keyframes float3 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(20px, 30px); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black" />

      {/* Floating dots with animation */}
      <div
        className="absolute top-[20%] left-[25%] w-4 h-4 rounded-full bg-purple-400/70 blur-sm"
        style={{ animation: "float1 8s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[35%] right-[20%] w-5 h-5 rounded-full bg-indigo-500/70 blur-sm"
        style={{ animation: "float2 10s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-[25%] left-[50%] w-3 h-3 rounded-full bg-pink-500/70 blur-sm"
        style={{ animation: "float3 9s ease-in-out infinite" }}
      />
    </div>
  );
}
