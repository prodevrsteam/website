import React from 'react';

interface ConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultantModal: React.FC<ConsultantModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! A consultant will reach out to you shortly.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-aeonsbyte-light-dark p-8 rounded-lg shadow-2xl w-full max-w-lg relative animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-aeonsbyte-gray hover:text-white transition-colors text-2xl font-bold">&times;</button>
        <h2 className="text-2xl font-bold text-white mb-4">Speak to a Consultant</h2>
        <p className="text-aeonsbyte-gray mb-6">Fill out the form below and we'll connect you with an expert to discuss your needs.</p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 bg-aeonsbyte-dark border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-aeonsbyte-purple text-white" />
            <input type="email" placeholder="Your Email" required className="w-full px-4 py-3 bg-aeonsbyte-dark border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-aeonsbyte-purple text-white" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 bg-aeonsbyte-dark border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-aeonsbyte-purple text-white" />
            <input type="text" placeholder="Company Name" className="w-full px-4 py-3 bg-aeonsbyte-dark border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-aeonsbyte-purple text-white" />
          </div>
          <div className="mb-4">
            <textarea placeholder="How can we help you?" rows={4} required className="w-full px-4 py-3 bg-aeonsbyte-dark border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-aeonsbyte-purple text-white"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-aeonsbyte-purple text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition duration-300">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultantModal;
