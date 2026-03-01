import React from "react";
import type { ProductCardProps } from "../types/ProductCardProps";

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(product);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer bg-white"
      role="button"
      tabIndex={0}
      onKeyDown={(e: React.KeyboardEvent) => {
        if ((e.key === "Enter" || e.key === " ") && onClick) {
          onClick(product);
        }
      }}
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-neutral-100 rounded-xl shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      <div className="p-6">
        <p className="text-sm text-neutral-500 tracking-widest uppercase mb-2">
          {product.brand}
        </p>

        <h3 className="text-2xl font-serif text-neutral-900 mb-3 group-hover:text-neutral-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-xl text-neutral-900 font-light">
          Bs. {product.sizes[0].prices[0]}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;