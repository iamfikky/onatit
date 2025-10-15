export default function Clients() {
  const logos = ["src/assets/soil.jpg", "/client2.png", "/client3.png"];

  return (
    <section id="clients" className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-accent mb-8">Our Trusted Clients</h2>
        <div className="flex flex-wrap justify-center gap-10 items-center">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`client-${i}`}
              className="w-28 grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
