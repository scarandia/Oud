import { useParams } from "react-router-dom";
import { useState } from "react";
import { CANNON_PRODUCTS } from "../data/CANNON_PRODUCTS";
import CannonProductCard from "../components/CannonProductCard";

const CannonProductPage = () => {
  const { id } = useParams();
  const product = CANNON_PRODUCTS.find((p) => p.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || ""
  );

  if (!product) return <div className="p-20">Producto no encontrado</div>;

  const relatedProducts = CANNON_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="bg-[#faf8f5] min-h-screen text-neutral-900">

      {/* PRODUCT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE GALLERY */}
        <div>

          {/* Main image */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-4">
            <img
              src={selectedImage}
              alt={product.model}
              className="w-full h-[55vh] object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 flex-wrap">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className="w-20 h-20 rounded-lg overflow-hidden border hover:border-neutral-900 transition"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* INFO */}
        <div className="max-w-md">

          <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-3">
            {product.collection}
          </p>

          <h1 className="font-serif text-4xl mb-6">
            {product.model}
          </h1>

          <div className="space-y-4 text-neutral-700 leading-relaxed">

            <p>
              <strong>Composición:</strong>{" "}
              {product.specs.composition}
            </p>

            {product.specs.threadCount && (
              <p>
                <strong>Hilos:</strong>{" "}
                {product.specs.threadCount}
              </p>
            )}

          </div>

          {/* FEATURES */}
          <div className="mt-8 flex flex-wrap gap-2">
            {product.features.map((feature, i) => (
              <span
                key={i}
                className="text-sm bg-white px-3 py-1 rounded-full border"
              >
                {feature}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="font-serif text-2xl mb-10">
          Más de esta colección
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {relatedProducts.map((p) => (
            <CannonProductCard
              key={p.id}
              product={p}
              onClick={() =>
                (window.location.href = `/cannon/${p.id}`)
              }
            />
          ))}
        </div>

      </section>
    </div>
  );
};

export default CannonProductPage;