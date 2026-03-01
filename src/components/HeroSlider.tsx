import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PERFUME_VIDEOS } from '../data/PERFUME_VIDEOS';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PERFUME_VIDEOS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % PERFUME_VIDEOS.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + PERFUME_VIDEOS.length) % PERFUME_VIDEOS.length);
  };

  return (
    <div className="relative h-[85vh] overflow-hidden bg-black">
      {PERFUME_VIDEOS.map((video, index) => (
        <div
          key={video.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${video.thumbnail})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div className="max-w-4xl animate-fade-in">
              <h1 className="text-7xl md:text-9xl font-serif text-white mb-6 tracking-tight">
                {video.title}
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-light tracking-widest uppercase">
                {video.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {PERFUME_VIDEOS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all ${
              index === currentSlide ? 'w-12 bg-white' : 'w-8 bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
