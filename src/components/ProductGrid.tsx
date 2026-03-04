import React from "react";
import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onSelectProduct,
}) => {
  return (
    <section
      id="catalogo"
      className="max-w-7xl mx-auto px-6 md:px-8 py-20"
    >
      {products.length === 0 ? (
        <div className="py-24 text-center">
          <p className="text-neutral-400 tracking-wide">
            No se encontraron fragancias
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-16 gap-y-16 md:gap-y-28">
          {products.map((product) => (
            <div
              key={product.id}
              className="group transition-all duration-500 hover:-translate-y-2"
            >
              <ProductCard
                product={product}
                onClick={onSelectProduct}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductGrid;