// components/ContactForm.js
export default function ContactForm() {
  return (
    <section className="py-16 px-4 md:px-20 text-center">
      <h2 className="text-2xl text-blue-700 font-semibold mb-4">Need a Similar Project?</h2>
      <p className="mb-6">Get in Touch with Us</p>
      <form className="max-w-xl mx-auto space-y-4 text-left">
        <input type="text" placeholder="Name" className="w-full border border-gray-300 px-4 py-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border border-gray-300 px-4 py-2 rounded" />
        <textarea placeholder="Message" className="w-full border border-gray-300 px-4 py-2 rounded h-32" />
        <label className="block text-sm text-gray-500">
          <input type="checkbox" className="mr-2" />
          I agree to the Privacy Policy and Terms of Service
        </label>
        <button className="bg-blue-600 text-white px-6 py-2 rounded">Get a Quote</button>
      </form>
    </section>
  );
}
