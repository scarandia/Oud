import React, { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import ProductPage from "./ProductPage";
import { PRODUCTS } from "../data/PERFUMES";
import type { Product } from "../types/Product";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesBrand = !selectedBrand || product.brand === selectedBrand;
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;

    return matchesSearch && matchesBrand && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      {/* HERO */}
      <HeroSlider />

      {/* INTRO */}
      <section className="py-28 px-6 text-center">
        <p className="uppercase tracking-luxury text-xs text-neutral-500 mb-6">
          Oud
        </p>

        <h2 className="font-serif text-5xl md:text-6xl font-light leading-tight mb-10">
          El arte de la alta perfumería
        </h2>

        <div className="w-16 h-[1px] bg-gold mx-auto"></div>
      </section>

      {/* FILTERS */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </section>

      {/* PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-8 pb-36">
        {filteredProducts.length === 0 ? (
          <div className="py-32 text-center">
            <p className="text-neutral-400 text-lg tracking-wide">
              No se encontraron fragancias
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-28">
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
    </div>
  );
};

export default Home;
