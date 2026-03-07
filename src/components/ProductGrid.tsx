import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <section id="catalogo" className="max-w-6xl mx-auto px-6 md:px-8 py-16">
      {" "}
      {products.length === 0 ? (
        <div className="py-24 text-center">
          <p className="text-neutral-400 tracking-wide">
            No se encontraron fragancias
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-12">
          {" "}
          {products.map((product) => (
            <div
              key={product.id}
              className="group transition-all duration-500 hover:-translate-y-2"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
