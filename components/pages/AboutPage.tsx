import React from 'react';
import { LinkedInIcon } from '../Icons';

const teamMembers = [
  { name: 'Shawn Carver', title: 'Chief Executive Officer', img: 'https://picsum.photos/seed/shawn/400/400', linkedin: 'https://www.linkedin.com/in/shawn-carver' },
  { name: 'Matt Shaw', title: 'Chief Operating Officer', img: 'https://picsum.photos/seed/matt/400/400', linkedin: 'https://www.linkedin.com/in/matt-shaw' },
  { name: 'Kelly O\'Brien', title: 'Chief Strategy & Commercial Officer', img: 'https://picsum.photos/seed/kelly/400/400', linkedin: 'https://www.linkedin.com/in/kelly-obrien' },
  { name: 'Amin Jula', title: 'Chief Data Scientist', img: 'https://picsum.photos/seed/amin/400/400', linkedin: 'https://www.linkedin.com/in/amin-jula' },
  { name: 'Chester Federov', title: 'VP Data Solutions', img: 'https://picsum.photos/seed/chester/400/400', linkedin: 'https://www.linkedin.com/in/chester-federov' },
  { name: 'Shantel Bince', title: 'Human Resources Manager', img: 'https://picsum.photos/seed/shantel/400/400', linkedin: 'https://www.linkedin.com/in/shantel-bince' },
];

interface TeamMemberCardProps {
    name: string;
    title: string;
    img: string;
    linkedin: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, title, img, linkedin }) => (
  <div className="text-center p-4 bg-aeonsbyte-light-dark rounded-lg">
    <div className="relative inline-block">
      <img src={img} alt={name} className="rounded-md w-full max-w-xs mx-auto shadow-lg" />
    </div>
    <h3 className="mt-4 text-xl font-bold text-white">{name}</h3>
    <p className="text-aeonsbyte-purple font-medium">{title}</p>
    <a href={linkedin} aria-label={`LinkedIn profile of ${name}`} className="text-aeonsbyte-gray hover:text-white transition-colors mt-2 inline-block">
      <LinkedInIcon className="w-8 h-8"/>
    </a>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="bg-aeonsbyte-dark py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Pioneering Digital and Data Frontiers</h1>
          <p className="mt-4 text-lg text-aeonsbyte-gray">
            aeonsbyte provides innovative solutions across the digital landscape. We merge data science with creative digital strategy, helping businesses uncover blind spots, optimize decision-making, and stay ahead of the competition.
          </p>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-white">aeonsbyte Executive team</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;