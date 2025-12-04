import React from 'react';

const serviceCards = [
  {
    title: 'Web & App Development',
    description: 'We build fast, responsive, and scalable web and mobile applications tailored to your business needs. From concept to deployment, our team delivers high-quality code and user-centric design.',
    img: 'https://picsum.photos/seed/webapp/600/400'
  },
  {
    title: 'Digital Marketing',
    description: 'Our data-driven marketing strategies are designed to increase your reach, engagement, and conversions. We specialize in SEO, SEM, content marketing, and social media campaigns that deliver measurable results.',
    img: 'https://picsum.photos/seed/marketing/600/400'
  },
  {
    title: 'UI/UX Design',
    description: 'We create intuitive and engaging user experiences. Our design process focuses on user research, wireframing, and prototyping to deliver products that are both beautiful and easy to use.',
    img: 'https://picsum.photos/seed/uiux/600/400'
  },
  {
    title: 'Data Science & AI',
    description: 'Leverage the power of artificial intelligence and machine learning to solve complex business problems. We build custom models for predictive analytics, natural language processing, and more.',
    img: 'https://picsum.photos/seed/datascience-service/600/400'
  },
  {
    title: 'GenAI Solution Integration',
    description: 'Integrate cutting-edge Generative AI models into your workflow to automate tasks, generate content, and drive innovation across your business.',
    img: 'https://picsum.photos/seed/genai-integration/600/400'
  },
  {
    title: 'AI Chatbot Integration',
    description: 'Enhance customer engagement with intelligent, 24/7 AI-powered chatbots. We develop and integrate custom chatbot solutions for support, sales, and marketing.',
    img: 'https://picsum.photos/seed/chatbot/600/400'
  },
  {
    title: 'Advanced Analytics',
    description: 'Transform raw data into actionable insights. Our analytics services help you understand customer behavior, optimize operations, and make informed decisions with confidence.',
    img: 'https://picsum.photos/seed/analytics-service/600/400'
  },
   {
    title: 'Cloud & DevOps',
    description: 'Streamline your development and operations with our cloud and DevOps expertise. We help you build and maintain scalable, secure, and efficient infrastructure.',
    img: 'https://picsum.photos/seed/cloud-service/600/400'
  },
  {
    title: 'AR/VR Applications',
    description: 'Create immersive and interactive experiences with our AR/VR development services. We build custom applications for training, product visualization, marketing, and entertainment.',
    img: 'https://picsum.photos/seed/arvr/600/400'
  }
];

interface ServiceCardProps {
    title: string;
    description: string;
    img: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, img }) => (
    <div className="bg-aeonsbyte-light-dark rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <img src={img} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="mt-2 text-aeonsbyte-gray">{description}</p>
        </div>
    </div>
);


const ExpertisePage: React.FC = () => {
  return (
    <div className="bg-aeonsbyte-dark py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Our Expertise</h1>
          <p className="mt-4 text-lg text-aeonsbyte-gray">
            Partner with aeonsbyte to streamline operations, fuel innovation, and achieve sustainable growth in an evolving marketplace.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map(card => <ServiceCard key={card.title} {...card} />)}
        </div>
      </div>
    </div>
  );
};

export default ExpertisePage;