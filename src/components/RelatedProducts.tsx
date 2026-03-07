import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../data/PERFUMES";
import type { Product } from "../types/Product";

interface RelatedProductsProps {
  currentProduct: Product;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  currentProduct,
}) => {
  const navigate = useNavigate();

  const relatedProducts = PRODUCTS.filter(
    (p) => p.type === currentProduct.type && p.id !== currentProduct.id,
  ).slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="bg-neutral-50 py-20 px-6 md:px-20">
      <h2 className="text-2xl font-serif mb-10">Perfumes Relacionados</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {relatedProducts.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/product/${p.id}`)}
            className="cursor-pointer group"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>

            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-3">
              {p.brand}
            </p>

            <h3 className="font-serif text-lg">{p.name}</h3>

            <p className="text-sm text-neutral-700">
              Bs. {p.sizes[0].prices[0]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
