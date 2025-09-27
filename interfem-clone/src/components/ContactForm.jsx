import React from "react";

export default function ContactForm() {
  return (
    <section id="contact" className="mb-20 grid md:grid-cols-2 gap-6">
      <form
        className="bg-white p-6 rounded-lg shadow"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Demo: form submitted");
        }}
      >
        <label className="block text-sm font-medium">Name</label>
        <input required className="mt-2 mb-3 w-full rounded border px-3 py-2" />

        <label className="block text-sm font-medium">Email</label>
        <input type="email" required className="mt-2 mb-3 w-full rounded border px-3 py-2" />

        <label className="block text-sm font-medium">Message</label>
        <textarea rows={5} className="mt-2 mb-3 w-full rounded border px-3 py-2"></textarea>

        <button className="bg-emerald-700 text-white px-4 py-2 rounded font-semibold">
          Send Message
        </button>
      </form>

      <aside className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold">Office</h3>
        <p className="text-gray-500 mt-2">
          No 9, Tunis Street Zone 6 Abuja
          <br />
          Interfem Reconstruction Coy Building No 1, Oroki Housing Estate, Osogbo, Osun State
        </p>
        <p className="mt-4">
          <strong>Phone:</strong> +234 906 927 6146
          <br />
          <strong>Email:</strong> info@interfemreconstruction.com
        </p>
      </aside>
    </section>
  );
}
