import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { PRODUCTS } from "../data/PERFUMES";
import RelatedProducts from "../components/RelatedProducts";
import { motion } from "framer-motion";

const ProductPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const product = PRODUCTS.find((p) => p.id === Number(id));
  const currentIndex = PRODUCTS.findIndex((p) => p.id === product?.id);

  const previousProduct = currentIndex > 0 ? PRODUCTS[currentIndex - 1] : null;

  const nextProduct =
    currentIndex < PRODUCTS.length - 1 ? PRODUCTS[currentIndex + 1] : null;

  if (!product) {
    return <div className="p-10 text-center">Producto no encontrado</div>;
  }

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleWhatsAppOrder = (): void => {
    const message = `Hola! Me interesa comprar:\n\n*${product.name}*\nMarca: ${
      product.brand
    }\nConcentración: ${product.concentration}\nTamaño: ${
      selectedSize.size_ml
    }ml\nPrecio: Bs. ${selectedSize.prices[0]}\n\n¿Está disponible?`;

    const phoneNumber = "59160346213";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <button
        onClick={() => navigate("/#catalogo")}
        className="fixed top-24 right-6 md:right-12 w-10 h-10 rounded-full backdrop-blur-md bg-white/70 border border-neutral-200 flex items-center justify-center hover:bg-white transition-all duration-300 z-50"
      >
        <X size={18} className="text-neutral-700" />
      </button>

      {/* MAIN PRODUCT */}
      <div className="grid md:grid-cols-2 min-h-[100vh]">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center bg-neutral-50"
        >
          <div className="w-full max-w-lg aspect-[3/4] flex items-center justify-center p-4 md:p-6">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </motion.div>

        {/* CONTENT */}
        <div className="px-6 py-10 md:px-16 md:py-16 flex items-center">
          <div className="max-w-lg w-full">

            {/* Brand */}
            <p className="text-xs tracking-[0.35em] uppercase text-neutral-400 mb-3">
              {product.brand}
            </p>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight mb-4">
              {product.name}
            </h1>

            {/* Concentration */}
            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-6">
              {product.concentration}
            </p>

            {/* Price */}
            <p className="text-2xl font-light text-neutral-800 mb-8">
              Bs. {selectedSize.prices[0]}
            </p>

            {/* Description */}
            {product.description && (
              <p className="text-neutral-600 leading-relaxed mb-10 text-base">
                {product.description}
              </p>
            )}

            {/* SIZE */}
            <div className="mb-10">
              <label className="block text-xs tracking-[0.35em] uppercase text-neutral-400 mb-4">
                Tamaño
              </label>

              <div className="flex gap-3 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size.size_ml}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2.5 rounded-full border text-sm tracking-wide transition-all duration-300 ${
                      selectedSize.size_ml === size.size_ml
                        ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                        : "border-neutral-300 hover:border-neutral-900"
                    }`}
                  >
                    {size.size_ml}ml
                  </button>
                ))}
              </div>
            </div>

            {/* NOTES */}
            <div className="mb-12">
              <h3 className="text-xs tracking-[0.35em] uppercase text-neutral-400 mb-4">
                Notas Olfativas
              </h3>

              <div className="flex flex-wrap gap-3">
                {product.notes.map((note) => (
                  <span
                    key={note}
                    className="px-4 py-2 rounded-full border border-neutral-200 text-sm text-neutral-600"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* WHATSAPP */}
            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-neutral-900 text-white py-4 text-sm tracking-[0.3em] uppercase rounded-full hover:bg-neutral-800 transition-all duration-500 hover:shadow-lg"
            >
              Ordenar por WhatsApp
            </button>

            {/* PREV / NEXT */}
            <div className="flex justify-between items-center mt-8 pt-8 border-t border-neutral-200">
              {previousProduct ? (
                <button
                  onClick={() => navigate(`/product/${previousProduct.id}`)}
                  className="text-sm tracking-widest uppercase text-neutral-500 hover:text-neutral-900 transition"
                >
                  ← {previousProduct.name}
                </button>
              ) : (
                <div />
              )}

              {nextProduct && (
                <button
                  onClick={() => navigate(`/product/${nextProduct.id}`)}
                  className="text-sm tracking-widest uppercase text-neutral-500 hover:text-neutral-900 transition"
                >
                  {nextProduct.name} →
                </button>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* RELATED */}
      <RelatedProducts currentProduct={product} />
    </div>
  );
};

export default ProductPage;