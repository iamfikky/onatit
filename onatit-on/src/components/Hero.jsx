import onatit from "../assets/onatit2.png";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(${onatit})`,
      }}
      className="bg-cover bg-center bg-fixed text-white relative py-28 px-6"
    >
      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Construction Services — Build with Integrity
          </h2>
          <p className="text-gray-200 mb-6">
            Delivering excellence in civil engineering, structural works,
            highways, and water-related structures.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent hover:bg-teal-900 text-white font-semibold px-5 py-3 rounded-lg transition"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
