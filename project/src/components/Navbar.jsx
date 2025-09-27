import { Link } from "react-router-dom";
import logo from "../assets/onatit.png";

export default function Navbar() {
  return (
      <div className="navbar">
        <img src={logo} alt="Interfem Logo" className="navbar-logo"/>
      <h1>ONATIT RESOURCES VENTURES LTD</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
