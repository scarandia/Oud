import React, { useState } from "react";
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
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <img
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1600&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-3xl">
          <p className="uppercase tracking-[0.4em] text-xs text-neutral-400 mb-6">
            Oud Collection
          </p>
          <h1 className="font-serif text-6xl md:text-7xl font-light mb-8">
            Intensidad. Misterio. Poder.
          </h1>
          <div className="w-16 h-[1px] bg-amber-600 mx-auto mb-10"></div>
          <p className="text-neutral-300">
            Fragancias profundas con maderas orientales y ámbar oscuro.
          </p>
        </div>
      </section>

      {/* INTRO BLOQUE EDITORIAL */}
      <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">
        <img
          src="https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded shadow-2xl"
        />
        <div>
          <h2 className="font-serif text-4xl mb-6 text-amber-600">
            El Arte del Oud
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Notas amaderadas intensas que evocan elegancia y carácter. Diseñadas
            para quienes buscan una presencia inolvidable.
          </p>
        </div>
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
          <div className="py-32 text-center text-neutral-500">
            No se encontraron fragancias
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
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
