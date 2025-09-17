import Image from 'next/image';

export default function PortfolioSection() {
  return (
    <section className="bg-blue-600 py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
      {/* Left Content */}
      <div className="max-w-xl">
        <p className="mb-4 text-sm">
          <a href="/" className="underline hover:text-gray-300">Home</a> / Portfolio
        </p>
        <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
        <p className="mb-6 leading-relaxed">
          SCAND provides a full range of{' '}
          <a href="#" className="underline hover:text-gray-300">
            custom software development services
          </a>
          . Our engineers can help you create best-in-class business software solutions that perfectly fit your business needs. The best results are reflected in our projects and lie within the following spheres and technologies.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>

      {/* Right Illustration */}
      <div className="max-w-md w-full">
        <Image
          src="/Hero.png"
          width={500}
          height={500}
          alt="Portfolio Illustration"
          layout="responsive"
          priority
        />
      </div>
    </section>
  );
}
