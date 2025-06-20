"use client";

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, 30px); }
        }
        .bg-dot {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
      
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black" />
      
      {/* Animated dot */}
      <div className="bg-dot absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-purple-500/50" />
      <div className="bg-dot absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-indigo-500/50" />
      <div className="bg-dot absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-purple-500/50" />
    </div>
  );
}