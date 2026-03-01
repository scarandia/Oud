import React, { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import ProductPage from "./ProductPage";
import ProductToolbar from "../components/ProductToolbar";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/PERFUMES";
import type { Product } from "../types/Product";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Contact } from "lucide-react";
import ContactSection from "../components/ContactSection";

const Home: React.FC = () => {
  const [activeType, setActiveType] = useState<
    "all" | "designer" | "arabic" | "nicho"
  >("all");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const clearFilters = () => {
    setActiveType("all");
    setSearchTerm("");
    setSelectedBrands("");
    setSelectedCategories([]);
  };

  // 🔎 FILTRADO GLOBAL
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesType = activeType === "all" || product.type === activeType;

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesBrand =
      selectedBrands === "" || product.brand === selectedBrands;

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    return matchesType && matchesSearch && matchesBrand && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      {/* HERO */}
      <HeroSlider />

      {/* INTRO */}
      <section className="py-24 px-6 text-center">
        <p className="uppercase tracking-[0.4em] text-xs text-neutral-500 mb-6">
          Colección Privada
        </p>

        <h1 className="font-serif text-4xl md:text-6xl font-light mb-8 leading-tight">
          Fragancias que Definen tu Escencia{" "}
        </h1>

        <div className="w-16 h-[1px] bg-gold mx-auto mb-10"></div>

        <p className="text-neutral-600 max-w-2xl mx-auto text-sm md:text-base">
          Explora nuestra selección curada de fragancias.
        </p>
      </section>

      {/* TOOLBAR MULTI FILTRO */}
      <ProductToolbar
        activeType={activeType}
        setActiveType={setActiveType}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedBrand={selectedBrands}
        setSelectedBrand={setSelectedBrands}
        clearFilters={clearFilters}
      />

      {/* GRID */}
      <section id="catalogo" className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-neutral-400 tracking-wide">
              No se encontraron fragancias
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-16 gap-y-16 md:gap-y-28">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group transition-all duration-500 hover:-translate-y-2"
              >
                <ProductCard product={product} onClick={setSelectedProduct} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* MODAL */}
      {selectedProduct && (
        <ProductPage
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      <WhatsAppButton />
      <ContactSection />
    </div>
  );
};

export default Home;
