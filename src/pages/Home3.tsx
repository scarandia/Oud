// pages/Home.tsx
import React, { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import Filters from "../components/Filters";
import TypeTabs from "../components/TypeTabs";
import ProductCard from "../components/ProductCard";
import ProductPage from "./ProductPage";
import { PRODUCTS } from "../data/PERFUMES";
import type { Product } from "../types/Product";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeType, setActiveType] =
    useState<"designer" | "arabic" | "nicho">("designer");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(
    null
  );

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesBrand = !selectedBrand || product.brand === selectedBrand;
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;

    return matchesSearch && matchesBrand && matchesCategory;
  });

  // Productos visibles según tab activo
  const visibleProducts = filteredProducts.filter(
    (p) => p.type === activeType
  );

  return (
    <div className="min-h-screen bg-white text-neutral-900">

      {/* HERO (más compacto) */}
      <section className="relative h-[85vh] md:h-[75vh] overflow-hidden">
        <HeroSlider />
      </section>

      {/* INTRO (más corto) */}
      <section className="text-center py-14 px-6 md:py-20 md:px-8">
        <p className="uppercase tracking-[0.4em] text-xs text-neutral-500 mb-4">
          Maison Oud
        </p>

        <h1 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-4">
          Alta Perfumería Contemporánea
        </h1>

        <p className="text-neutral-600 max-w-2xl mx-auto text-sm md:text-base">
          Explora nuestra colección de perfumes seleccionados con precisión
          según tus preferencias.
        </p>
      </section>

      {/* FILTERS (stickied) */}
      <div className="mb-12">
        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {/* TYPE TABS */}
      <TypeTabs active={activeType} setActive={setActiveType} />

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-28">
        {visibleProducts.length === 0 ? (
          <div className="py-28 text-center">
            <p className="text-neutral-400 text-lg tracking-wide">
              No se encontraron fragancias
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-14 md:gap-y-24">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="group transition-all duration-500 hover:-translate-y-2"
              >
                <ProductCard
                  product={product}
                  onClick={setSelectedProduct}
                />
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
    </div>
  );
};

export default Home;