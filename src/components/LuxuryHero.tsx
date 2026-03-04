import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PERFUME_VIDEOS } from "../data/PERFUME_VIDEOS";

const LuxuryHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PERFUME_VIDEOS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % PERFUME_VIDEOS.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide(
      (prev) => (prev - 1 + PERFUME_VIDEOS.length) % PERFUME_VIDEOS.length,
    );
  };

  return (
    <section
      id="heroPerfumes"
      className="relative h-screen w-full overflow-hidden bg-black text-white"
    >
      <AnimatePresence mode="wait">
        {PERFUME_VIDEOS.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                {/* Background */}
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={slide.videoUrl} type="video/mp4" />
                </video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

                {/* Center Content */}
                <div className="relative h-full flex items-center justify-center">
                  {/* Glow Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 35,
                      ease: "linear",
                    }}
                    className="absolute w-[450px] h-[450px] rounded-full border-[4px] border-yellow-400/60 shadow-[0_0_80px_rgba(255,215,0,0.7)]"
                  />

                  {/* Product Image */}
                  <motion.img
                    src={slide.productImage}
                    alt={slide.title}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: -40, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 w-[360px] md:w-[400px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                  />

                  {/* Right Info */}
                  <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="absolute right-32 max-w-md text-right hidden md:block"
                  >
                    <h2 className="text-sm tracking-widest uppercase text-gray-400">
                      {slide.subtitle}
                    </h2>

                    <h1 className="text-5xl font-semibold mt-3 leading-tight">
                      {slide.title}
                    </h1>

                    <p className="text-3xl font-bold mt-6">Bs. {slide.price}</p>

                    <div className="flex gap-4 justify-end mt-6">
                      <button onClick={() => document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })} className="px-6 py-3 bg-black border border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300">
                        Ver más
                      </button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center hover:bg-white/20 transition-all z-20"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center hover:bg-white/20 transition-all z-20"
      >
        <ChevronRight size={24} />
      </button>
      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {PERFUME_VIDEOS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all ${
              index === currentSlide ? "w-12 bg-white" : "w-8 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default LuxuryHero;
