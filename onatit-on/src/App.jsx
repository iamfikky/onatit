import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./components/About";
import Create from "./pages/Create";
import ContactPage from "./components/Contactpage";
import onatit from "./assets/onatit2.png"; // Import your background image

export default function App() {
  return (
    <div
      className="text-gray-900 min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(${onatit})`,
      }}
    >
      {/* Header always visible */}
      <Header />

      {/* Main content switches between pages */}
      <main className="flex-grow bg-white/80 backdrop-blur-sm">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}
