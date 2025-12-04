import React, { useState } from 'react';

const benefits = [
  'Inclusive Work Environment', 'Competitive Salaries & Defined Profit-Sharing Plan',
  'Commitment to Pay Transparency', 'Skills Matrix & Career Development Plans',
  'Hybrid Work Environment', 'Pet Friendly Office',
  'Ergonomic Standing Desks', 'Wellbeing Support',
  'Team Building Activities', 'Fertility Benefits'
];

const testimonials = [
  {
    name: 'Narjes Naseri',
    title: 'Lead Data Scientist',
    quote: '"At aeonsbyte, diversity is not just a value—it is embedded in our daily operations, hiring practices, and team culture. The company actively promotes an inclusive environment where employees from different backgrounds, experiences, and perspectives are welcomed, valued, and given equal opportunities to succeed. Leadership regularly reinforces this commitment through open discussions and continuous learning initiatives."',
    img: 'https://picsum.photos/seed/narjes/200/200'
  },
  {
    name: 'Andrew MacKenzie',
    title: 'Junior Data Scientist',
    quote: '"At aeonsbyte, we provide new grads with hands-on experience, mentorship, and the opportunity to work on real-world AI challenges. We believe in empowering the next generation of data scientists to grow, innovate, and make an impact from day one."',
    img: 'https://picsum.photos/seed/andrew/200/200'
  },
  {
    name: 'Shubh Fageria',
    title: 'Data Engineer',
    quote: '"At aeonsbyte, continuous learning isn\'t just encouraged—it\'s embedded in everything we do. We invest in growth, curiosity, and innovation, ensuring our team stays ahead in the rapidly evolving world of AI, data science and data engineering."',
    img: 'https://picsum.photos/seed/shubh/200/200'
  }
];

const interviewProcess = [
    'Meet the HR Team',
    'Complete Online Challenge (for Data Science roles only)',
    'Technical Interview',
    'Team Interview'
];

const ApplicationForm: React.FC = () => {
    const [resumeName, setResumeName] = useState('');
    const [coverLetterName, setCoverLetterName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your application! If your qualifications match our needs, we will contact you shortly.');
        // In a real application, you would handle form submission to a backend here.
    };

    return (
        <div className="bg-aeonsbyte-light-dark p-8 rounded-lg shadow-lg mt-8">
            <h3 className="text-2xl font-bold text-white mb-6">Apply to Join Our Team</h3>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 bg-aeonsbyte-dark border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-aeonsbyte-purple text-white" />
                    <input type="email" placeholder="Your Email" required className="w-full px-4 py-3 bg-aeonsbyte-dark border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-aeonsbyte-purple text-white" />
                </div>
                <div className="mb-4">
                    <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 bg-aeonsbyte-dark border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-aeonsbyte-purple text-white" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <label className="w-full px-4 py-3 bg-aeonsbyte-dark border border-gray-600 rounded-md text-aeonsbyte-gray cursor-pointer hover:border-aeonsbyte-purple">
                        {resumeName || 'Upload Resume*'}
                        <input type="file" required className="hidden" onChange={(e) => setResumeName(e.target.files?.[0]?.name || '')} />
                    </label>
                    <label className="w-full px-4 py-3 bg-aeonsbyte-dark border border-gray-600 rounded-md text-aeonsbyte-gray cursor-pointer hover:border-aeonsbyte-purple">
                        {coverLetterName || 'Upload Cover Letter'}
                        <input type="file" className="hidden" onChange={(e) => setCoverLetterName(e.target.files?.[0]?.name || '')} />
                    </label>
                </div>
                <div>
                    <button type="submit" className="w-full bg-aeonsbyte-purple text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition duration-300">
                      Submit Application
                    </button>
                </div>
            </form>
        </div>
    );
};


const CareersPage: React.FC = () => {
  return (
    <div className="bg-aeonsbyte-dark text-aeonsbyte-light-gray">
      {/* Shape the Future Section */}
      <section className="py-16 md:py-24 bg-aeonsbyte-light-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-white">Shape the Future</h2>
            <p className="mt-4 text-lg">
              aeonsbyte is committed to building a leading digital and data science agency, driving innovation and excellence. As our team grows, we embrace rapid advancements to shape the future of data-driven solutions.
            </p>
            <p className="mt-4 text-lg">We are actively growing our team.</p>
             <ApplicationForm />
          </div>
          <div>
            <img src="https://picsum.photos/seed/team/600/800" alt="aeonsbyte Team" className="rounded-lg shadow-xl object-cover h-full w-full" />
          </div>
        </div>
      </section>

      {/* Life at aeonsbyte Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white">Life at aeonsbyte</h2>
            <p className="mt-4">
              We are committed to Diversity, Accountability, Transparency, and Accuracy (DATA), empowering clients to transform data into a strategic advantage.
            </p>
            <p className="mt-4">
              aeonsbyte is dedicated to cultivating an environment that is inclusive and accessible, ensuring that every employee and customer is esteemed, honoured, and upheld.
            </p>
          </div>
          <div className="space-y-3">
            <ul className="list-disc list-inside grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {benefits.map(benefit => <li key={benefit}>{benefit}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-aeonsbyte-light-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
              <img src={testimonial.img} alt={testimonial.name} className="w-40 h-40 rounded-full object-cover shadow-lg flex-shrink-0" />
              <div className="text-center md:text-left">
                <blockquote className="text-lg italic relative">
                    <span className="text-6xl text-aeonsbyte-purple/30 absolute -top-4 -left-6">“</span>
                    {testimonial.quote}
                </blockquote>
                <p className="mt-4 font-bold text-white">{testimonial.name}</p>
                <p className="text-aeonsbyte-purple">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
       {/* Interview Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white">Interview Process, What to expect</h2>
            <ul className="mt-6 text-left inline-block list-disc list-inside space-y-2 text-lg">
                {interviewProcess.map(step => <li key={step}>{step}</li>)}
            </ul>
        </div>
      </section>

    </div>
  );
};

export default CareersPage;