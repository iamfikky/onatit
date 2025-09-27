import React from "react";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="contact-page p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">
        Contact Us
      </h1>
      <p className="mb-8 text-gray-600 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
        We’d love to hear from you! Please fill out the form below and we’ll get
        back to you as soon as possible.
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Form */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
          <ContactForm />
        </div>

        {/* Google Map Embed */}
        <div className="flex-1 rounded-2xl overflow-hidden shadow-lg min-h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.482530798998!2d4.5525!3d7.7825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10378fc8f5c77d87%3A0x2a6c9f7efeb5b5af!2sOsogbo%20Local%20Government%2C%20Osun%20State!5e0!3m2!1sen!2sng!4v1695139088225"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
