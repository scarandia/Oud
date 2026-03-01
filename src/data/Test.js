import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react';

// ============================================================================
// DATA
// ============================================================================

const PRODUCTS = [
  {
    id: 1,
    name: "Noir Intense",
    brand: "Maison Luxe",
    category: "Oriental",
    price: 450,
    sizes: ["30ml", "50ml", "100ml"],
    description: "Una fragancia audaz y sensual con notas de ámbar negro, vainilla bourbon y especias orientales. Perfecta para las noches de invierno.",
    notes: {
      top: "Bergamota, Cardamomo",
      heart: "Rosa Turca, Iris",
      base: "Ámbar Negro, Vainilla, Pachulí"
    },
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
  },
  {
    id: 2,
    name: "Aqua Mystique",
    brand: "Oceanique",
    category: "Fresca",
    price: 380,
    sizes: ["50ml", "100ml"],
    description: "Frescura marina con un toque de minerales y algas. Una experiencia olfativa que evoca la brisa del océano.",
    notes: {
      top: "Limón Amalfi, Sal Marina",
      heart: "Lavanda, Algas Marinas",
      base: "Cedro, Musgo de Roble"
    },
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80"
  },
  {
    id: 3,
    name: "Rose Éternelle",
    brand: "Jardin Secret",
    category: "Floral",
    price: 520,
    sizes: ["30ml", "75ml"],
    description: "Un homenaje a la rosa en su forma más pura y elegante. Sofisticación atemporal en cada gota.",
    notes: {
      top: "Litchi, Mandarina",
      heart: "Rosa de Mayo, Peonía",
      base: "Almizcle Blanco, Madera de Cachemira"
    },
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=800&q=80"
  },
  {
    id: 4,
    name: "Oud Royale",
    brand: "Maison Luxe",
    category: "Oriental",
    price: 680,
    sizes: ["50ml", "100ml"],
    description: "El oud más refinado mezclado con rosas de damasco. Lujo en estado puro.",
    notes: {
      top: "Azafrán, Rosa de Damasco",
      heart: "Oud Camboyano, Incienso",
      base: "Ámbar Gris, Sándalo"
    },
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80"
  },
  {
    id: 5,
    name: "Citrus Soleil",
    brand: "Jardin Secret",
    category: "Fresca",
    price: 340,
    sizes: ["50ml", "100ml"],
    description: "Energía cítrica que ilumina tu día. Frescura vibrante y duradera.",
    notes: {
      top: "Pomelo Rosa, Limón Siciliano",
      heart: "Neroli, Té Verde",
      base: "Vetiver, Musgo"
    },
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80"
  },
  {
    id: 6,
    name: "Velvet Dreams",
    brand: "Oceanique",
    category: "Amaderada",
    price: 480,
    sizes: ["30ml", "50ml", "100ml"],
    description: "Suavidad aterciopelada con maderas nobles y vainilla cremosa.",
    notes: {
      top: "Bergamota, Pimienta Rosa",
      heart: "Violeta, Cedro",
      base: "Sándalo, Vainilla, Tonka"
    },
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=800&q=80"
  },
  {
    id: 7,
    name: "Midnight Garden",
    brand: "Maison Luxe",
    category: "Floral",
    price: 550,
    sizes: ["50ml", "100ml"],
    description: "Un jardín nocturno de jazmín y tuberosa. Misterio y elegancia.",
    notes: {
      top: "Bergamota, Pera",
      heart: "Jazmín, Tuberosa",
      base: "Almizcle, Madera"
    },
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80"
  },
  {
    id: 8,
    name: "Amber Sunrise",
    brand: "Oceanique",
    category: "Oriental",
    price: 420,
    sizes: ["30ml", "50ml"],
    description: "Calidez ambarina que abraza como el sol del amanecer.",
    notes: {
      top: "Naranja, Canela",
      heart: "Ámbar, Mirra",
      base: "Vainilla, Benjuí"
    },
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80"
  },
  {
    id: 9,
    name: "Cedar Woods",
    brand: "Jardin Secret",
    category: "Amaderada",
    price: 490,
    sizes: ["50ml", "100ml"],
    description: "Bosque de cedros con toques de especias. Masculino y sofisticado.",
    notes: {
      top: "Pimienta, Jengibre",
      heart: "Cedro, Ciprés",
      base: "Vetiver, Cuero"
    },
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80"
  }
];

const HERO_VIDEOS = [
  {
    id: 1,
    title: "Noir Intense",
    subtitle: "La nueva esencia de la noche",
    thumbnail: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=80"
  },
  {
    id: 2,
    title: "Rose Éternelle",
    subtitle: "Elegancia atemporal",
    thumbnail: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=1200&q=80"
  },
  {
    id: 3,
    title: "Oud Royale",
    subtitle: "Lujo incomparable",
    thumbnail: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1200&q=80"
  }
];

// ============================================================================
// HERO SLIDER COMPONENT
// ============================================================================

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_VIDEOS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_VIDEOS.length) % HERO_VIDEOS.length);

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {HERO_VIDEOS.map((video, index) => (
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

      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {HERO_VIDEOS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all ${
              index === currentSlide ? 'w-12 bg-white' : 'w-8 bg-white/40'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// FILTERS COMPONENT
// ============================================================================

const Filters = ({ searchTerm, setSearchTerm, selectedBrand, setSelectedBrand, selectedCategory, setSelectedCategory }) => {
  const brands = [...new Set(PRODUCTS.map(p => p.brand))];
  const categories = [...new Set(PRODUCTS.map(p => p.category))];

  return (
    <div className="sticky top-0 z-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-4xl font-serif text-neutral-900 mb-8">Nuestro Catálogo</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
            <input
              type="text"
              placeholder="Buscar perfume..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-10 py-3 border border-neutral-300 rounded-none focus:outline-none focus:border-neutral-900 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-900"
              >
                <X size={20} />
              </button>
            )}
          </div>

          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="px-4 py-3 border border-neutral-300 rounded-none focus:outline-none focus:border-neutral-900 transition-colors bg-white"
          >
            <option value="">Todas las marcas</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-neutral-300 rounded-none focus:outline-none focus:border-neutral-900 transition-colors bg-white"
          >
            <option value="">Todas las categorías</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// PRODUCT CARD COMPONENT
// ============================================================================

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      className="group cursor-pointer bg-white"
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-neutral-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>
      
      <div className="p-6">
        <p className="text-sm text-neutral-500 tracking-widest uppercase mb-2">{product.brand}</p>
        <h3 className="text-2xl font-serif text-neutral-900 mb-3 group-hover:text-neutral-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-xl text-neutral-900 font-light">Bs. {product.price}</p>
      </div>
    </div>
  );
};

// ============================================================================
// PRODUCT PAGE COMPONENT
// ============================================================================

const ProductPage = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleWhatsAppOrder = () => {
    const message = `Hola! Me interesa comprar:\n\n*${product.name}*\nMarca: ${product.brand}\nTamaño: ${selectedSize}\nPrecio: Bs. ${product.price}\n\n¿Está disponible?`;
    const phoneNumber = "59171234567";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
      <button
        onClick={onClose}
        className="fixed top-8 right-8 w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-700 transition-colors z-10"
      >
        <X size={24} />
      </button>

      <div className="min-h-screen">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-screen sticky top-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="p-12 lg:p-20">
            <div className="max-w-xl">
              <p className="text-sm tracking-widest uppercase text-neutral-500 mb-4">{product.brand}</p>
              
              <h1 className="text-6xl font-serif text-neutral-900 mb-6 leading-tight">
                {product.name}
              </h1>

              <p className="text-3xl text-neutral-900 mb-8 font-light">Bs. {product.price}</p>

              <p className="text-lg text-neutral-600 leading-relaxed mb-12">
                {product.description}
              </p>

              <div className="mb-12">
                <label className="block text-sm tracking-widest uppercase text-neutral-700 mb-4">
                  Tamaño
                </label>
                <div className="flex gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-8 py-3 border transition-all ${
                        selectedSize === size
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-300 bg-white text-neutral-900 hover:border-neutral-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-12 space-y-6">
                <h3 className="text-sm tracking-widest uppercase text-neutral-700">Notas Olfativas</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-neutral-500 mb-1">Salida</p>
                    <p className="text-neutral-900">{product.notes.top}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-neutral-500 mb-1">Corazón</p>
                    <p className="text-neutral-900">{product.notes.heart}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-neutral-500 mb-1">Fondo</p>
                    <p className="text-neutral-900">{product.notes.base}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-neutral-900 text-white py-5 text-lg tracking-widest uppercase hover:bg-neutral-700 transition-colors"
              >
                Ordenar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = !selectedBrand || product.brand === selectedBrand;
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    
    return matchesSearch && matchesBrand && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@300;400;500&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Montserrat', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        
        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>

      <HeroSlider />

      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-neutral-400 font-light">No se encontraron productos</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={setSelectedProduct}
              />
            ))}
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductPage
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <footer className="border-t border-neutral-200 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-neutral-500 tracking-widest uppercase text-sm">
            © 2026 Perfume Shop • Cochabamba, Bolivia
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;