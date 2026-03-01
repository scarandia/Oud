import { useState, useEffect } from "react";
import { CANNON_PRODUCTS } from "../data/CANNON_PRODUCTS";
import type { HomeTextileProduct } from "../types/CannonProduct";
import { X } from "lucide-react";
import CannonProductCard from "../components/CannonProductCard";
import CannonHero from "../components/CannonHero";

const CannonPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] =
    useState<HomeTextileProduct | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Lock scroll when modal open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProduct]);

  const filteredProducts = CANNON_PRODUCTS.filter((product) =>
    selectedCategory ? product.category === selectedCategory : true,
  );

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <CannonHero />

      {/* CATEGORY FILTER */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-wrap justify-center gap-4">
        {[
          { label: "Todos", value: "" },
          { label: "Sábanas", value: "sabanas" },
          { label: "Plumones", value: "plumones" },
        ].map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-6 py-2 rounded-full text-sm tracking-wide border transition-all duration-300 ${
              selectedCategory === cat.value
                ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                : "border-neutral-300 hover:border-neutral-900"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product) => (
            <CannonProductCard
              key={product.id}
              product={product}
              onClick={setSelectedProduct}
            />
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 transition-opacity duration-300">
          <div className="bg-white max-w-xl w-full rounded-2xl p-10 relative animate-fadeIn">
            {/* Close */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition"
            >
              <X size={16} />
            </button>

            <p className="uppercase tracking-[0.3em] text-xs text-neutral-400 mb-3">
              {selectedProduct.collection}
            </p>

            <h2 className="font-serif text-3xl mb-6">
              {selectedProduct.model}
            </h2>

            <div className="space-y-3 text-neutral-700 text-sm leading-relaxed">
              <p>
                <strong>Composición:</strong>{" "}
                {selectedProduct.specs.composition}
              </p>

              {selectedProduct.specs.threadCount && (
                <p>
                  <strong>Hilos:</strong> {selectedProduct.specs.threadCount}
                </p>
              )}
            </div>

            <button
              onClick={() => setSelectedProduct(null)}
              className="mt-10 w-full bg-neutral-900 text-white py-3 rounded-full tracking-[0.25em] text-sm uppercase hover:bg-neutral-800 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CannonPage;
