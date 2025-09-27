import logo from "../assets/onatit.png";

export default function AboutPage() {
    return (
        <div className="page about">
        <img src={logo} alt="Logo" style={{ width: "200px", borderRadius: "12px" }} />
      <h2>About This Project</h2>
    </div>
  );
}
