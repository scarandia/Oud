import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";

interface Props {
  type: "designer" | "arabic" | "nicho";
  title: string;
  subtitle: string;
  products: Product[];
  onSelect: (product: Product) => void;
}

const CategorySection: React.FC<Props> = ({
  type,
  title,
  subtitle,
  products,
  onSelect,
}) => {
  if (products.length === 0) return null;

  // 🎨 ESTILOS SEGÚN TIPO
  const styles = {
    designer: {
      wrapper: "bg-white text-neutral-900 border-y border-neutral-200",
      line: "bg-neutral-300",
    },
    arabic: {
      wrapper: "bg-[#f5efe6] text-neutral-900 border-y border-[#e8dfd3]",
      line: "bg-[#c6a96b]",
    },
    nicho: {
      wrapper: "bg-neutral-950 text-white border-y border-neutral-800",
      line: "bg-white",
    },
  };

  const current = styles[type];

  return (
    <section className="w-full mb-36">
      {/* HEADER FULL WIDTH */}
      <div className={`w-full py-28 md:py-16 text-center ${current.wrapper}`}>
        <p className="uppercase tracking-[0.5em] text-xs opacity-70 mb-6">
          Colección
        </p>

        <h2 className="font-serif text-4xl md:text-6xl font-light mb-8">
          {title}
        </h2>

        <div className={`w-20 h-[1px] mx-auto mb-8 ${current.line}`} />

        <p className="max-w-xl mx-auto text-sm md:text-base leading-relaxed opacity-80">
          {subtitle}
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-24">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-16 gap-y-20 md:gap-y-28">
          {products.map((product) => (
            <div
              key={product.id}
              className="group transition-all duration-500 hover:-translate-y-2"
            >
              <ProductCard product={product} onClick={onSelect} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
