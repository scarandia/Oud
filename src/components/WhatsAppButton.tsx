import React from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const message = `Hola, estoy interesado en sus perfumes y me gustaría recibir asesoría. ¿Podrían ayudarme?`;
    const phoneNumber = "59160346213";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="hidden md:block fixed right-8 bottom-8 z-50">
      <button
        onClick={handleClick}
        className="
          group flex items-center justify-center
          w-12 h-12 rounded-full
          bg-white/70 backdrop-blur-md
          border border-neutral-300
          text-neutral-600
          hover:text-black hover:border-black
          transition-all duration-300
          shadow-sm hover:shadow-md
        "
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={50} strokeWidth={1.5} />
      </button>
    </div>
  );
};