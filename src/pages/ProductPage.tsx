import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { ProductPageProps } from "../types/ProductPageProps";

const ProductPage: React.FC<ProductPageProps> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [visible, setVisible] = useState(false);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => setVisible(true), 50);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleWhatsAppOrder = (): void => {
    const message = `Hola! Me interesa comprar:\n\n*${product.name}*\nMarca: ${
      product.brand
    }\nTamaño: ${selectedSize.size_ml}ml\nPrecio: Bs. ${
      selectedSize.prices[0]
    }\n\n¿Está disponible?`;

    const phoneNumber = "+591 60346213";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-white transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 overflow-y-auto">
        {/* Close Button (Below Navbar Height) */}
        <button
          onClick={onClose}
          className="fixed top-24 right-6 md:right-12 w-10 h-10 rounded-full backdrop-blur-md bg-white/70 border border-neutral-200 flex items-center justify-center hover:bg-white transition-all duration-300 z-50"
        >
          <X size={18} className="text-neutral-700" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image Section */}
          <div className="relative h-[60vh] md:h-screen max-h-screen overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />

            {/* Soft fade for elegance */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent md:hidden" />
          </div>

          {/* Content Section */}
          <div className="px-6 py-16 md:px-20 md:py-28 flex items-center">
            <div
              className={`max-w-lg w-full transition-all duration-700 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {/* Brand */}
              <p className="text-xs tracking-[0.35em] uppercase text-neutral-400 mb-4">
                {product.brand}
              </p>

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight mb-6">
                {product.name}
              </h1>

              {/* Price */}
              <p className="text-2xl font-light text-neutral-800 mb-8">
                Bs. {selectedSize.prices[0]}
              </p>

              {/* Description */}
              {product.description && (
                <p className="text-neutral-600 leading-relaxed mb-12 text-base">
                  {product.description}
                </p>
              )}

              {/* Size Selection */}
              <div className="mb-12">
                <label className="block text-xs tracking-[0.35em] uppercase text-neutral-400 mb-4">
                  Tamaño
                </label>

                <div className="flex gap-3 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size.size_ml}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-full border text-sm tracking-wide transition-all duration-300 ${
                        selectedSize.size_ml === size.size_ml
                          ? "bg-neutral-900 text-white border-neutral-900 shadow-sm scale-105"
                          : "border-neutral-300 hover:border-neutral-900 hover:scale-105"
                      }`}
                    >
                      {size.size_ml}ml
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="mb-14">
                <h3 className="text-xs tracking-[0.35em] uppercase text-neutral-400 mb-4">
                  Notas Olfativas
                </h3>

                <div className="flex flex-wrap gap-3">
                  {product.notes.map((note) => (
                    <span
                      key={note}
                      className="px-4 py-2 rounded-full border border-neutral-200 text-sm text-neutral-600 transition hover:bg-neutral-50"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-neutral-900 text-white py-4 text-sm tracking-[0.3em] uppercase rounded-full hover:bg-neutral-800 transition-all duration-500 hover:shadow-lg"
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

export default ProductPage;
