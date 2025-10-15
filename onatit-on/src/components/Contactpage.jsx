import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-accent">
          Contact Us
        </h2>

        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We'd love to hear from you! Reach out via the form below or visit us at our office.
        </p>

        {/* Example contact form */}
        <form className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-accent outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-accent outline-none"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-accent outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-accent text-white py-3 rounded-lg hover:bg-accent-dark transition"
          >
            Send Message
          </button>
        </form>

        {/* 🌍 Embedded Google Map */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d3953.6282725815895!2d4.504111099999999!3d7.7229722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d7.7229722!2d4.504111099999999!5e0!3m2!1sen!2sng!4v1760443101896!5m2!1sen!2sng"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl border-0 shadow-md"
          ></iframe>
        </div>

        {/* 🏠 Back Home Button */}
        <div className="mt-10">
          <Link
            to="/"
            className="inline-block bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-dark transition duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
