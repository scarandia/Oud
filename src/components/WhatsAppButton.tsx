import React from "react";
import { PRODUCTS } from "../data/PERFUMES";
export const WhatsAppButton = () => {
    const [selectedSize, setSelectedSize] = React.useState("");

    const handleWhatsAppOrder = () => {
    const message = `Hola! Me interesa comprar:\n\n*${PRODUCTS.name}*\nMarca: ${product.brand}\nTamaño: ${selectedSize}\nPrecio: Bs. ${product.price}\n\n¿Está disponible?`;
    const phoneNumber = "59160346213";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <button
        onClick={handleWhatsAppOrder}
        className="w-full bg-neutral-900 text-white py-5 text-lg tracking-widest uppercase hover:bg-neutral-700 transition-colors"
      >
        Ordenar por WhatsApp
      </button>
    </>
  );
};
