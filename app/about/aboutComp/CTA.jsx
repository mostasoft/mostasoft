import React from 'react';

// Arrow icon for the Call to Action link (no longer needed, but keeping for completeness)
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

const ContactFormSection = () => {
    // Mimics the green gradient shown in the image for the contact info column
    const gradientStyle = {
        background: 'linear-gradient(to top, #4CAF50 0%, #8BC34A 100%)', // Gradient from image
    };

    const inputClasses = "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150";

    return (
        <div className="bg-gray-50 flex items-center justify-center min-h-screen p-8 sm:p-12">
            <div className="max-w-4xl w-full mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Let's Talk Business
                    </h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Do you have a software development project to implement? We have people to work on it. We will be glad to answer all your questions as well as estimate any project of yours. Use the form below to describe the project and we will get in touch with you within 1 business day.
                    </p>
                </div>

                {/* Main Content: Two Columns (Contact Info and Form) */}
                <div className="flex flex-col lg:flex-row shadow-2xl rounded-xl overflow-hidden bg-white">
                    
                    {/* === Left Column: Contact Information (Green Section) === */}
                    <div className="lg:w-1/3 p-8 sm:p-10 text-white flex flex-col justify-between" style={gradientStyle}>
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold border-b border-white border-opacity-30 pb-2 mb-4">
                                    Call us
                                </h2>
                                <p className="text-xl font-semibold">
                                    USA <span className="block sm:inline-block md:block lg:inline-block ml-2 text-2xl font-normal">+1 (917) 410-57-57</span>
                                </p>
                                <p className="text-xl font-semibold">
                                    UK <span className="block sm:inline-block md:block lg:inline-block ml-2 text-2xl font-normal">+44 (20) 3318-18-53</span>
                                </p>
                                <p className="text-xl font-semibold">
                                    Poland <span className="block sm:inline-block md:block lg:inline-block ml-2 text-2xl font-normal">+48 222 922 436</span>
                                </p>
                            </div>

                            <div className="pt-6 space-y-3">
                                <h2 className="text-3xl font-bold">
                                    Email us
                                </h2>
                                <a href="mailto:info@belitsoft.com" className="flex items-center text-xl hover:underline">
                                    {/* Mail Icon SVG */}
                                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2-3H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2z"></path></svg>
                                    info@belitsoft.com
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* === Right Column: Contact Form === */}
                    <div className="lg:w-2/3 p-8 sm:p-10 bg-white">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                            Contact form
                        </h2>
                        
                        <form className="space-y-6">
                            
                            {/* Full Name and E-mail */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">Full name *</label>
                                    <input type="text" id="full-name" name="full-name" required className={inputClasses} />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                                    <input type="email" id="email" name="email" required className={inputClasses} />
                                </div>
                            </div>

                            {/* Country and Phone Number */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                                    <input type="text" id="country" name="country" required className={inputClasses} />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                                    <input type="tel" id="phone" name="phone" className={inputClasses} />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="5" 
                                    placeholder="I would like to discuss..." 
                                    className={inputClasses}
                                ></textarea>
                            </div>

                            {/* File Upload Placeholder (Dotted border and placeholder text) */}
                            <div className="pt-2 border-t border-dashed border-gray-300">
                                <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-400 rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-150">
                                    <div className="text-center">
                                        <p className="text-sm text-gray-600">Drag and drop file here, or <span className="text-green-600 font-semibold">Choose File</span></p>
                                        <p className="text-xs text-gray-500 mt-1">Maximum file size 5MB</p>
                                    </div>
                                    <input type="file" className="hidden" />
                                </label>
                            </div>

                            {/* Submission Button and Privacy Policy */}
                            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center pt-4 space-y-4 sm:space-y-0">
                                <button type="submit" className="px-8 py-3 text-lg font-bold text-white bg-gray-800 rounded-md shadow-lg hover:bg-gray-900 transition duration-200">
                                    SEND MESSAGE
                                </button>
                                <p className="text-xs text-gray-500 max-w-xs">
                                    By sending your request, you agree to the <a href="#" className="underline text-gray-700 hover:text-green-600">Privacy Policy</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main App component as required for the single-file mandate
export default ContactFormSection;
