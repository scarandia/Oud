import type { HomeTextileProduct } from "../types/CannonProduct";

interface CannonProductCardProps {
  product: HomeTextileProduct;
  onClick: (product: HomeTextileProduct) => void;
}

const CannonProductCard: React.FC<CannonProductCardProps> = ({
  product,
  onClick,
}) => {
  return (
    <div id="cannonProducts"
      onClick={() => onClick(product)}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
      role="button"
      tabIndex={0}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick(product);
        }
      }}
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
        <img
          src={product.image}
          alt={product.model}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-95"
        />

        {/* Soft gradient for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent opacity-60" />

        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs px-3 py-1 rounded-full tracking-wide uppercase font-medium">
          {product.category}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <p className="text-xs text-neutral-400 tracking-widest uppercase mb-1">
          {product.collection}
        </p>

        <h3 className="text-xl font-serif text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors duration-300">
          {product.model}
        </h3>

        <p className="text-sm text-neutral-600 mb-3">
          {product.specs.threadCount
            ? `${product.specs.threadCount} hilos`
            : product.specs.composition}
        </p>

        <div className="flex flex-wrap gap-2">
          {product.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-neutral-100 px-2 py-1 rounded-md text-neutral-600"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CannonProductCard;