import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // success | error | loading

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://your-api-endpoint.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-2xl font-bold mb-6 text-accent">Contact Us</h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 max-w-lg bg-white p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:ring-2 focus:ring-accent outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:ring-2 focus:ring-accent outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:ring-2 focus:ring-accent outline-none"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-accent hover:bg-teal-900 text-white py-3 rounded-lg font-semibold transition"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 mt-2">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>

      <aside className="bg-white rounded-lg p-5 shadow-md mt-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Office</h3>
        <p className="text-gray-500">
          No 9,<br />Osogbo, Osun State
        </p>
        <div className="mt-4 space-y-1 text-gray-700">
          <p>
            <strong>Phone:</strong> +234
          </p>
          <p>
            <strong>Email:</strong> example@example.com
          </p>
        </div>
      </aside>
    </section>
  );
}
