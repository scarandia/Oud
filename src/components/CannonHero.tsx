const CannonHero: React.FC = () => {
  return (
    <section id="cannonHero" className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=2000&q=80"
        alt="Cannon Collection"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-subtleZoom"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* Soft Light Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-white">
        <p className="uppercase tracking-[0.5em] text-xs mb-6 opacity-80">
          Cannon Collection
        </p>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
          Textiles que transforman
          <br />
          el descanso
        </h1>

        <p className="text-sm md:text-base opacity-80 max-w-xl mx-auto leading-relaxed">
          Sábanas y plumones diseñados para elevar cada espacio con confort,
          elegancia y calidad atemporal.
        </p>
      </div>
    </section>
  );
};

export default CannonHero;