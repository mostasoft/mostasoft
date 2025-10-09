'use client';

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
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 3000);
      } else {
        alert('Failed to send message. Try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[var(--MostUsed-color)] text-black py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="uppercase text-sm font-bold tracking-wide text-black mb-2">
          Get a Quote
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Need quality IT services?
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white/10 placeholder-black text-white border-b-2 border-white/30 focus:border-white transition-all duration-300 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white/10 placeholder-black text-white border-b-2 border-white/30 focus:border-white transition-all duration-300 focus:outline-none"
            />
          </div>

          <textarea
            name="message"
            rows="4"
            placeholder="Message *"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-white/10 placeholder-black text-white border-b-2 border-white/30 focus:border-white transition-all duration-300 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading || success}
            className={`w-full md:w-auto bg-black hover:bg-white text-green-400 font-semibold py-3 px-6 rounded-md flex items-center justify-center gap-2 mx-auto transition-all duration-300 ${
              loading ? 'cursor-not-allowed opacity-70' : ''
            } ${success ? 'bg-green-600 hover:bg-green-700' : ''}`}
          >
            <span>{loading ? '⏳' : success ? '✅' : '💌'}</span>
            {loading ? 'Sending...' : success ? 'Sent!' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
}
