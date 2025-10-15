import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-2 text-sm">
        <div className="text-center md:text-left">
          <strong className="block text-accent">ONATIT RESOURCES</strong>
          <p className="text-gray-400 mt-1">
            © 2025 ONATIT RESOURCES — Demo replica
          </p>
        </div>
        <div className="text-gray-400 text-center md:text-right">
          Powered by <span className="text-accent font-medium">SternHost</span> (demo)
        </div>
      </div>
    </footer>
  );
}
