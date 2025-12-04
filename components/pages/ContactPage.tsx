import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-aeonsbyte-dark py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Contact Us</h1>
            <p className="mt-4 text-lg text-aeonsbyte-gray">
              We would love to speak with you. Feel free to reach out using the below details.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Get In Touch</h3>
                <p className="text-aeonsbyte-gray">Direct: +91 00000-00000</p>
                <p className="text-aeonsbyte-gray">Email: <a href="mailto:info@aeonsbyte.com" className="text-aeonsbyte-purple hover:underline">info@aeonsbyte.com</a></p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Address</h3>
                <p className="mt-2 text-aeonsbyte-gray">
                  Delhi, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-aeonsbyte-light-dark p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Fill out the form below and we will contact you as soon as possible!</h2>
            <form>
              <div className="mb-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-aeonsbyte-dark border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-aeonsbyte-purple text-white" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-aeonsbyte-dark border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-aeonsbyte-purple text-white" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-aeonsbyte-dark border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-aeonsbyte-purple text-white" />
              </div>
              <div className="mb-4">
                <textarea placeholder="Message" rows={5} className="w-full px-4 py-3 bg-aeonsbyte-dark border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-aeonsbyte-purple text-white"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-aeonsbyte-purple text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition duration-300">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;