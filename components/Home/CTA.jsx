'use client'; // If you're using App Router (Next.js 13+)

import { useState } from 'react';

export default function GetQuoteForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can integrate form submission logic here (e.g., API call)
  };

  return (
    <section className="bg-[#ff4e42] text-white py-20 text-center px-4">
      <h3 className="uppercase text-sm tracking-wide text-white/70">Get a Quote</h3>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">Need quality IT services?</h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#3a1f1f] text-white placeholder-white/70 rounded-md focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#3a1f1f] text-white placeholder-white/70 rounded-md focus:outline-none"
          />
        </div>
        <textarea
          name="message"
          rows="4"
          placeholder="Message *"
          required
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#3a1f1f] text-white placeholder-white/70 rounded-md focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-[#1e1e1e] hover:bg-black text-white font-semibold py-3 px-6 rounded-md flex items-center justify-center gap-2 mx-auto"
        >
          <span>➕</span> Submit
        </button>
      </form>
    </section>
  );
}
