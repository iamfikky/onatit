import React, { useState } from "react";
import logo from "../assets/onatit.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Topbar */}
      <div className="topbar" role="contentinfo">
        <div className="wrap">
          <div className="left">
            <span>📞 +234</span>
            <span>✉️ .com</span>
          </div>
          <div className="right muted">Mon - Sat: 9:00AM - 5:00PM</div>
        </div>
      </div>

      {/* Header with nav */}
      <header>
        <div className="navwrap">
          <div className="brand">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "42px", height: "42px", borderRadius: "6px" }}
            />
            <h1>ONATIT RESOURCES</h1>
          </div>

          <nav aria-label="Main navigation">
            <button
              className="menu-toggle"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

            <ul className={menuOpen ? "nav-links open" : "nav-links"}>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}
