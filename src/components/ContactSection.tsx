import React from "react";
import { Mail, MessageCircle } from "lucide-react";

const ContactSection: React.FC = () => {
  const emailEmpresa = "ventas@maisonoud.com";
  const phoneNumber = "59160346213";

  const handleWhatsApp = () => {
    const message = `Hola, estoy interesado en recibir asesoría personalizada sobre perfumes. ¿Podrían ayudarme?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div id="contacto" className=" min-h-screen pt-16 pb-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <h1 className="text-3xl md:text-4xl tracking-[0.2em] text-center mb-16">
          CONTACTO
        </h1>

        <div className="grid md:grid-cols-2 gap-12">

          {/* SECCIÓN EMPRESAS */}
          <div className="border border-neutral-200 p-10 rounded-2xl hover:shadow-lg transition-all duration-300">
            <h2 className="text-xl tracking-[0.15em] mb-6">
              COMPRA POR MAYOR
            </h2>

            <p className="text-neutral-600 mb-8 leading-relaxed">
              Si eres empresa, tienda o distribuidor y deseas trabajar con
              nosotros, contáctanos para recibir nuestro catálogo mayorista
              y condiciones comerciales.
            </p>

            <a
              href={`mailto:${emailEmpresa}?subject=Solicitud%20de%20información%20mayorista`}
              className="
                inline-flex items-center gap-3
                px-6 py-3
                border border-black
                rounded-full
                bg-black text-white
                hover:bg-white hover:text-black
                transition-all duration-300
              "
            >
              <Mail size={18} />
              Contactar por Email
            </a>

            <p className="text-sm text-neutral-500 mt-4">
              {emailEmpresa}
            </p>
          </div>

          {/* SECCIÓN ASESORÍA PERSONAL */}
          <div className="border border-neutral-200 p-10 rounded-2xl hover:shadow-lg transition-all duration-300">
            <h2 className="text-xl tracking-[0.15em] mb-6">
              ASESORÍA PERSONALIZADA
            </h2>

            <p className="text-neutral-600 mb-8 leading-relaxed">
              ¿No sabes qué perfume elegir? Nuestro equipo te ayudará a
              encontrar la fragancia ideal según tu estilo, ocasión y
              personalidad.
            </p>

            <button
              onClick={handleWhatsApp}
              className="
                inline-flex items-center gap-3
                px-6 py-3
                border border-black
                rounded-full
                bg-black text-white
                hover:bg-white hover:text-black
                transition-all duration-300
              "
            >
              <MessageCircle size={18} />
              Asesoría por WhatsApp
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;