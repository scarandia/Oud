import React, { useState } from "react";
import { PRODUCTS } from "../data/PERFUMES";

interface Props {
  activeType: "all" | "designer" | "arabic" | "nicho";
  setActiveType: (type: "all" | "designer" | "arabic" | "nicho") => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  clearFilters: () => void;
}

const ProductToolbar: React.FC<Props> = ({
  activeType,
  setActiveType,
  searchTerm,
  setSearchTerm,
  selectedBrand,
  setSelectedBrand,
  clearFilters,
}) => {
  const brands = [...new Set(PRODUCTS.map((p) => p.brand))].sort();
  const types = ["all", "designer", "arabic", "nicho"];

  const [activeField, setActiveField] = useState<
    "search" | "brand" | null
  >(null);

  // 🔥 Cuando seleccionas tipo → limpia marca y búsqueda
  const handleTypeClick = (
    type: "all" | "designer" | "arabic" | "nicho"
  ) => {
    setActiveType(type);

    if (type !== "all") {
      setSearchTerm("");
      setSelectedBrand("");
    }
  };

  // 🔥 Cuando escribes → deselecciona tipo
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);

    if (value !== "") {
      setActiveType("all");
    }
  };

  // 🔥 Cuando eliges marca → deselecciona tipo
  const handleBrandChange = (value: string) => {
    setSelectedBrand(value);

    if (value !== "") {
      setActiveType("all");
    }
  };

  return (
    <section className="w-full border-y border-neutral-200 bg-white py-8 px-4 md:px-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">

        {/* TYPE SELECTOR */}
        <div className="flex flex-wrap justify-center gap-3">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeClick(type as any)}
              className={`
                px-6 py-2 rounded-full text-sm tracking-wide
                transition-all duration-300
                ${
                  activeType === type
                    ? "bg-black text-white scale-105 shadow-md"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }
              `}
            >
              {type === "all" ? "TODAS" : type.toUpperCase()}
            </button>
          ))}
        </div>

        {/* SEARCH + BRAND */}
        <div className="flex w-full max-w-3xl items-center gap-4 transition-all duration-500">

          {/* SEARCH */}
          <div
            className={`
              relative transition-all duration-500
              ${
                activeField === "search"
                  ? "flex-[2]"
                  : activeField === "brand"
                  ? "flex-[1]"
                  : "flex-1"
              }
            `}
          >
            <input
              type="text"
              placeholder="Buscar fragancia..."
              value={searchTerm}
              onFocus={() => setActiveField("search")}
              onBlur={() => setActiveField(null)}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full px-5 py-3 border border-neutral-300 rounded-full text-sm focus:outline-none focus:border-black transition-all"
            />
          </div>

          {/* BRAND */}
          <div
            className={`
              transition-all duration-500
              ${
                activeField === "brand"
                  ? "flex-[2]"
                  : activeField === "search"
                  ? "flex-[1]"
                  : "flex-1"
              }
            `}
          >
            <select
              value={selectedBrand}
              onFocus={() => setActiveField("brand")}
              onBlur={() => setActiveField(null)}
              onChange={(e) => handleBrandChange(e.target.value)}
              className="w-full px-5 py-3 border border-neutral-300 rounded-full text-sm focus:outline-none focus:border-black transition-all"
            >
              <option value="">Todas las marcas</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* CLEAR */}
          {(searchTerm || selectedBrand || activeType !== "all") && (
            <button
              onClick={clearFilters}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 hover:bg-black hover:text-white transition-all"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductToolbar;