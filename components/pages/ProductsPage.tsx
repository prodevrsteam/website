import React from 'react';

const caseStudies = [
  { title: '3X growth for Instax in India', category: 'Digital Marketing', img: 'https://picsum.photos/seed/instax/600/800' },
  { title: 'Predictive Analytics for Retail', category: 'Data Science', img: 'https://picsum.photos/seed/predictive-retail/600/800' },
  { title: 'Taking the Times Litfest to Metaverse', category: 'Web Development', img: 'https://picsum.photos/seed/metaverse/600/800' },
  { title: 'E-commerce Platform for a Global Retailer', category: 'App Development', img: 'https://picsum.photos/seed/ecommerce/600/800' },
  { title: 'Social Media Campaign for a Startup', category: 'Digital Marketing', img: 'https://picsum.photos/seed/social/600/800' },
  { title: 'Rebranding a Legacy Tech Company', category: 'Branding', img: 'https://picsum.photos/seed/rebrand/600/800' },
];


const OurWorkPage: React.FC = () => {
  return (
    <div className="bg-aeonsbyte-dark py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Our Work</h1>
          <p className="mt-4 text-lg text-aeonsbyte-gray">
            We deliver real-world impact, not just theory. Explore some of our recent projects that have driven success for our clients.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.title} className="relative aspect-[3/4] group overflow-hidden rounded-lg">
              <img src={study.img} alt={study.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <p className="text-sm font-semibold text-aeonsbyte-purple">{study.category}</p>
                <h3 className="text-2xl font-bold text-white">{study.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorkPage;