import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div>
          <strong>Interfem Reconstruction</strong>
          <div className="text-gray-400 text-sm mt-2">
            © 2025 Interfemreconstruction.com — Demo replica
          </div>
        </div>
        <div className="text-gray-400">Powered by SternHost (demo)</div>
      </div>
    </footer>
  );
}
