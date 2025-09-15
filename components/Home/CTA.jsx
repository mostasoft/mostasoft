'use client'; // If you're using App Router (Next.js 13+)

import { useState } from 'react';

export default function GetQuoteForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true); // Show success state
        setFormData({ name: '', email: '', message: '' }); // Reset form
        setTimeout(() => setSuccess(false), 3000); // Reset button after 3s
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section className="bg-gray-100 text-white py-20 text-center px-4">
      <h3 className="uppercase text-sm font-bold tracking-wide text-red-500">Get a Quote</h3>
      <h2 className="text-3xl text-black md:text-4xl font-bold mt-2 mb-8">Need quality IT services?</h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-red-500 text-white placeholder-white rounded-md focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-red-500 text-white placeholder-white rounded-md focus:outline-none"
          />
        </div>
        <textarea
          name="message"
          rows="4"
          placeholder="Message *"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-red-500 text-white placeholder-white rounded-md focus:outline-none"
        ></textarea>
        <button
          type="submit"
          disabled={loading || success}
          className={`bg-red-500 hover:bg-black text-white font-semibold py-3 px-6 rounded-md flex items-center justify-center gap-2 mx-auto transition-all ${
            loading ? 'cursor-not-allowed opacity-70' : ''
          } ${success ? 'bg-green-600 hover:bg-green-700' : ''}`}
        >
          <span>{loading ? '⏳' : success ? '✅' : '💌'}</span> 
          {loading ? 'Sending...' : success ? 'Sent!' : 'Submit'}
        </button>
      </form>
    </section>
  );
}
