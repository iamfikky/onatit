import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import onatit from "../assets/onatit.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = () => setOpen(false);

  // Scroll smoothly to a section on the home page
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      // Wait a short moment for the page to render, then scroll
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* Topbar */}
      <div className="bg-gray-900 text-gray-100 text-sm py-2 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-4">
            <span>📞 +234 000 000 0000</span>
            <span>✉️ info@example.com</span>
          </div>
          <div className="text-gray-400">
            Mon - Sat: <span className="text-gray-200">9:00AM - 5:00PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={onatit} alt="Logo" className="w-10 h-10 rounded-md" />
            <h1 className="font-bold text-lg text-accent">ONATIT RESOURCES</h1>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              open ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center absolute md:static bg-white md:bg-transparent left-0 top-full w-full md:w-auto p-4 md:p-0 shadow-md md:shadow-none`}
          >
            {/* Home */}
            <Link
              to="/"
              className="font-medium hover:text-accent transition-colors"
              onClick={handleLinkClick}
            >
              Home
            </Link>

            {/* About */}
            <button
              onClick={() => handleScroll("about")}
              className="font-medium hover:text-accent transition-colors"
            >
              About
            </button>

            {/* Services */}
            <button
              onClick={() => handleScroll("services")}
              className="font-medium hover:text-accent transition-colors"
            >
              Services
            </button>

            {/* Projects */}
            <button
              onClick={() => handleScroll("projects")}
              className="font-medium hover:text-accent transition-colors"
            >
              Projects
            </button>

            {/* Contact */}
            <Link
              to="/contact"
              className="font-medium hover:text-accent transition-colors"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
