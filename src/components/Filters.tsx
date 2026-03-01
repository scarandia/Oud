import React from 'react';
import { Search, X } from 'lucide-react';
import { PRODUCTS } from '../data/PERFUMES';
import type { FilterProps } from '../types/FiltersProps';

const Filters: React.FC<FilterProps> = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedBrand, 
  setSelectedBrand, 
  selectedCategory, 
  setSelectedCategory 
}) => {
  const brands: string[] = [...new Set(PRODUCTS.map(p => p.brand))].sort((a, b) => a.localeCompare(b));

  const categories: string[] = [...new Set(PRODUCTS.map(p => p.category))].sort((a, b) => a.localeCompare(b));

  return (
    <div className="sticky top-0 z-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-4xl font-serif text-neutral-900 mb-8">Nuestro Catálogo</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
            <input
              type="text"
              placeholder="Buscar perfume..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-10 py-3 border border-neutral-300 rounded-none focus:outline-none focus:border-neutral-900 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-900"
                aria-label="Clear search"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Brand Filter */}
          <select
            value={selectedBrand}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedBrand(e.target.value)}
            className="px-4 py-3 border border-neutral-300 rounded-none focus:outline-none focus:border-neutral-900 transition-colors bg-white"
          >
            <option value="">Todas las marcas</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value)}
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

export default Filters;
