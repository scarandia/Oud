import React, { useState } from "react";
import ProductPage from "./ProductPage";
import ProductToolbar from "../components/ProductToolbar";
import { PRODUCTS } from "../data/PERFUMES";
import type { Product } from "../types/Product";
import { WhatsAppButton } from "../components/WhatsAppButton";
import LuxuryHero from "../components/LuxuryHero";
import Intro from "../components/Intro";
import ProductGrid from "../components/ProductGrid";

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
      <LuxuryHero />

      {/* INTRO */}
      <Intro />

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
      <ProductGrid
        products={filteredProducts}
        onSelectProduct={setSelectedProduct}
      />

      {/* MODAL */}
      {selectedProduct && (
        <ProductPage
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      <WhatsAppButton />
    </div>
  );
};

export default Home;
