import React from 'react';

const articles = [
  {
    title: 'Empowering Banks, NBFCs, and Fintechs with Digital Excellence',
    description: 'How Aeonsbyte is Driving Innovation with High-Security Compliance.',
    img: 'https://picsum.photos/seed/banks/600/400'
  },
  {
    title: 'Empowering the Real Estate Industry Across the Globe',
    description: 'How Aeonsbyte drives Digital Transformation in real estate.',
    img: 'https://picsum.photos/seed/realestate/600/400'
  },
  {
    title: 'Top Website Trends in 2025: Insights from a Tech-First Agency',
    description: 'A look into the future of web design and development.',
    img: 'https://picsum.photos/seed/trends/600/400'
  },
  {
    title: 'The Rise of Generative AI in Business',
    description: 'Exploring how generative AI is reshaping industries and creating new opportunities.',
    img: 'https://picsum.photos/seed/gen-ai/600/400'
  }
];

interface ArticleCardProps {
  title: string;
  description: string;
  img: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, img }) => (
  <div className="bg-aeonsbyte-light-dark rounded-lg shadow-lg overflow-hidden">
    <img src={img} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-aeonsbyte-gray text-sm">{description}</p>
      <a href="#" className="mt-4 inline-block text-aeonsbyte-purple font-semibold hover:underline">Read more</a>
    </div>
  </div>
);

const KnowledgeHubPage: React.FC = () => {
  return (
    <div className="bg-aeonsbyte-dark py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Knowledge Hub</h1>
          <p className="mt-4 text-lg text-aeonsbyte-gray">
            Stay ahead of the curve with our latest insights, articles, and whitepapers on digital innovation and technology.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => <ArticleCard key={article.title} {...article} />)}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHubPage;