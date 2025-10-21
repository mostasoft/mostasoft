import React from 'react';

// Arrow icon for the Call to Action link
const ArrowRight = (props) => (
  <svg
    {...props}
    className={`ml-2 w-5 h-5 text-gray-800 ${props.className || ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);

const ReliableSoftwareSection = () => {
    // URL for the illustration, to match the image
    const illustrationUrl = "https://framerusercontent.com/images/kF36w9749uHqg8c8kE6L5v8lY.png"; // More suitable placeholder

    return (
        // Outer container for the whole section, setting max-width and padding
        <div className="bg-white flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Grid for the two main columns: text content and image/logo */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* === Left Column: Text Content === */}
                    <div className="flex flex-col space-y-7"> {/* Adjusted spacing */}

                        {/* Main Title */}
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                            Switch To The Reliable Software Development Company Today!
                        </h1>

                        {/* Paragraph 1 */}
                        <p className="text-lg text-gray-800 leading-relaxed"> {/* Darker text as in image */}
                            Imagine that <strong className="font-bold text-gray-900">new software releases are delivered on time</strong> by your outsourcing development and testing teams. <strong className="font-bold text-gray-900">Updates only improve your system</strong> and never break existing functionality. <strong className="font-bold text-gray-900">Your clients are happy and successful</strong> with your product.
                        </p>

                        {/* Paragraph 2 - Emphasized section, adjusted styling */}
                        <p className="text-lg text-gray-800 leading-relaxed"> {/* Darker text as in image */}
                            However, your current offshore development vendor is performing very poorly in terms of speed and quality of work. Their team passively follows your instructions and never actively suggests improvements. That’s why you can’t reach your goals. <strong className="font-bold text-gray-900">You need true partners with senior experts</strong>, not just experienced by years, but by their <strong className="font-bold text-gray-900">ability to solve complex and large-scale challenges</strong>.
                        </p>

                        {/* Paragraph 3 */}
                        <p className="text-lg text-gray-800 leading-relaxed"> {/* Darker text as in image */}
                            We help <strong className="font-bold text-gray-900">reputable enterprise clients with a history in the market augment or change their teams</strong> in India or any other locations. This allows them to speed up and improve the quality of modernizing their current legacy software. They get <strong className="font-bold text-gray-900">senior staff at affordable prices</strong> who can work overlapping hours, <strong className="font-bold text-gray-900">allowing communication until 4 p.m., U.S. Time Zones</strong>. We provide skilled staff who know how to add new features to monolithic systems without breaking everything and with your growth in mind (2-3 years of experience are not enough for such tasks).
                        </p>
                    </div>

                    {/* --------------------------------- */}

                    {/* === Right Column: Branding and Image === */}
                    <div className="flex flex-col space-y-8">

                        {/* Branding/Featured Logos Section - adjusted layout and font sizes */}
                        <div className="flex flex-wrap items-center justify-start lg:justify-end gap-x-5 gap-y-4"> {/* Adjusted gap-x */}
                            {/* BELITSOFT Logo/Text */}
                            <div className="text-right flex flex-col items-end"> {/* Align right for text */}
                                <span className="text-xl font-bold text-gray-800">BELITSOFT</span> {/* Smaller font */}
                                <p className="text-xs text-gray-600 leading-none">20+ Years in Business</p>
                            </div>
                            
                            {/* Technology Council Text */}
                            <div className="flex flex-col items-start">
                                <span className="text-sm text-gray-500 font-semibold leading-none">Technology Council</span>
                                <span className="text-xs text-gray-500 leading-none">featured by</span> {/* Adjusted as per image */}
                            </div>
                            

                            {/* Forbes Logo Placeholder */}
                            <div className="text-2xl font-serif italic font-extrabold text-gray-900"> {/* Smaller font */}
                                Forbes
                            </div>

                            {/* Gartner Peer Insights (5-star rating) Placeholder - adjusted styling */}
                            <div className="flex flex-col items-start p-1 bg-white border border-gray-200 shadow-sm rounded-md"> {/* Reduced padding and border */}
                                <div className="text-xs font-bold text-yellow-500 leading-none">★★★★★</div> {/* 5-star rating, smaller font */}
                                <span className="text-xs text-gray-700 font-semibold leading-none">Gartner</span>
                                <span className="text-[10px] text-gray-500 leading-none">peer insights.</span> {/* Even smaller font */}
                            </div>
                        </div>

                        {/* Main Illustration/Image Placeholder */}
                        <div className="relative rounded-lg overflow-hidden shadow-2xl"> {/* Adjusted border-radius */}
                            <div 
                                className="w-full h-[400px] bg-cover bg-center" 
                                style={{ backgroundImage: `url('${illustrationUrl}')` }}
                            >
                                {/* Overlay content: "Warranty period" and "20+ years in business" bubble. */}
                                
                                {/* Warranty Bubble */}
                                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-1 text-sm rounded-full shadow-lg font-semibold border-b-2 border-indigo-500/50"> {/* Adjusted padding and border */}
                                    Warranty period
                                </div>
                                
                                {/* Years in Business Bubble */}
                                <div className="absolute bottom-8 right-8 bg-white text-green-700 px-4 py-2 text-base rounded-full shadow-lg font-bold border-2 border-green-600/50 text-center leading-tight"> {/* Adjusted font and padding */}
                                    20+ <br /> years
                                </div>

                                {/* Code Snippet Simulation - Adjusted positioning, colors and content */}
                                <div className="absolute top-1/4 right-5 text-[10px] text-white p-2 rounded bg-gray-900 bg-opacity-70 max-w-[150px] space-y-1 shadow-lg leading-tight"> {/* Adjusted font size and background opacity */}
                                    <p className="font-semibold text-gray-200">import pandas as pd</p>
                                    <p className="text-yellow-300">df.query('status == "new"')</p>
                                    <p className="text-blue-300">print(clientFunc())</p>
                                    <p className="text-gray-400">// This is a comment</p>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action Box below the image - background color adjusted */}
                        <div className="mt-4 p-6 bg-gray-50 rounded-lg border border-gray-200"> {/* Adjusted border-radius */}
                            <p className="text-base text-gray-800 leading-relaxed mb-4">
                                Profile Belitsoft among reliable companies to stakeholders of your organization. Send us your request, and we'll provide a price range. The exact requirements, after signing an NDA, will allow us to prepare a detailed cost breakdown of each service.
                            </p>
                            
                            {/* Contact Our Team Button/Link - adjusted styling */}
                            <a 
                                href="#" 
                                className="inline-flex items-center text-base font-semibold text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out pb-0.5" // Adjusted font and removed bottom border
                            >
                                CONTACT OUR TEAM
                                <ArrowRight className="text-gray-800" /> {/* Ensure arrow color matches text */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 export default ReliableSoftwareSection