import React, { useState, useEffect } from 'react';
import { FacebookIcon, InstagramIcon, LinkedInIcon, YoutubeIcon } from '../Icons';

const slides = [
  {
    title: ['Launchpad for', 'Hyper-Growth'],
    img: 'https://picsum.photos/seed/slide1/1200/800',
    subtitle: 'Digital-First Agency'
  },
  {
    title: ['Unlock', 'Data-Driven Decisions'],
    img: 'https://picsum.photos/seed/slide2/1200/800',
    subtitle: 'Data Science & AI Solutions'
  },
  {
    title: ['Engineering', 'Future-Ready Tech'],
    img: 'https://picsum.photos/seed/slide3/1200/800',
    subtitle: 'Innovative Development'
  },
];

const services = [
  { name: 'Websites & Apps', img: 'https://picsum.photos/seed/websites/500/500' },
  { name: 'Creative & Digital', img: 'https://picsum.photos/seed/creative/500/500' },
  { name: 'Data Science & AI', img: 'https://picsum.photos/seed/datascience/500/500' },
  { name: 'High Impact Campaigns', img: 'https://picsum.photos/seed/campaigns/500/500' },
  { name: 'App Development', img: 'https://picsum.photos/seed/films/500/500' },
  { name: 'Performance Marketing', img: 'https://picsum.photos/seed/performance/500/500' },
  { name: 'Advanced Analytics', img: 'https://picsum.photos/seed/analytics/500/500' },
  { name: 'Innovations', img: 'https://picsum.photos/seed/innovations/500/500' },
];

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="bg-aeonsbyte-dark text-white">
      {/* Hero Slider Section */}
      <section className="min-h-[70vh] md:min-h-screen relative flex items-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.img} alt={slide.title.join(' ')} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-aeonsbyte-purple/50"></div>
          </div>
        ))}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-lg font-semibold uppercase tracking-wider text-white/80 mb-2">{slides[currentSlide].subtitle}</p>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight">
              {slides[currentSlide].title[0]} <br/>{slides[currentSlide].title[1]}
            </h1>
            <div className="mt-8 flex items-center space-x-6">
              <a href="https://www.facebook.com/aeonsbyte" className="hover:opacity-80 transition-opacity" aria-label="Facebook"><FacebookIcon className="h-6 w-6" /></a>
              <a href="https://www.instagram.com/aeonsbyte_official" className="hover:opacity-80 transition-opacity" aria-label="Instagram"><InstagramIcon className="h-6 w-6" /></a>
              <a href="https://www.linkedin.com/company/aeonsbyte" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn"><LinkedInIcon className="h-6 w-6" /></a>
              <a href="https://www.youtube.com/channel/aeonsbyte" className="hover:opacity-80 transition-opacity" aria-label="YouTube"><YoutubeIcon className="h-6 w-6" /></a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-sm font-bold uppercase tracking-widest text-aeonsbyte-purple">Full-Spectrum Digital & Data Agency</h2>
          <p className="mt-4 text-3xl md:text-4xl font-bold">
            Powered by Innovation & Creativity, Driven by Technology & Data
          </p>
          <p className="mt-6 text-aeonsbyte-gray">
            At Aeonsbyte, we unite strategists, creatives, data scientists, and technologists to craft limitless solutions. We blend creative digital marketing with deep data analysis to drive real-world results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {services.map(service => (
            <div key={service.name} className="relative aspect-square group overflow-hidden rounded-lg">
              <img src={service.img} alt={`Aeonsbyte ${service.name} service`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <h3 className="text-xl font-bold">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;