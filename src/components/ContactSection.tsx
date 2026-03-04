import React, { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";

const ContactSection: React.FC = () => {
  const phoneNumber = "59160346213";

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = "Consulta desde la web Oud";
    const body = `
Nombre: ${formData.nombre}
Email: ${formData.email}

Mensaje:
${formData.mensaje}
    `;

    window.location.href = `mailto:oudperfumeriabo@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsApp = () => {
    const message =
      "Hola, me gustaría recibir asesoría personalizada sobre perfumes.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contacto"
      className="min-h-screen pt-24 pb-24 px-6 md:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITULO PREMIUM */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-5xl tracking-[0.3em] mb-6">
            HABLEMOS
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Ya sea para asesoría personalizada
            o alianzas comerciales, nuestro equipo responderá con la
            atención que mereces.
          </p>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* WHATSAPP DIRECTO */}
          <div className="bg-black text-white rounded-3xl p-12 flex flex-col justify-between shadow-xl">

            <div>
              <h2 className="text-2xl tracking-[0.2em] mb-6">
                ASESORÍA PERSONAL
              </h2>

              <p className="text-neutral-300 leading-relaxed mb-10">
                Recibe atención inmediata y encuentra la
                fragancia perfecta según tu estilo, ocasión y personalidad.
              </p>
            </div>

            <button
              onClick={handleWhatsApp}
              className="
                inline-flex items-center justify-center gap-3
                px-8 py-4
                bg-white text-black
                rounded-full
                tracking-[0.15em]
                hover:scale-105
                transition-all duration-300
              "
            >
              <MessageCircle size={20} />
              ESCRIBIR AHORA
            </button>
          </div>

          {/* FORMULARIO */}
          <div className="border border-neutral-200 rounded-3xl p-12 shadow-sm">

            <h2 className="text-2xl tracking-[0.2em] mb-8">
              CONTACTO EMPRESARIAL
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  required
                  onChange={handleChange}
                  className="w-full border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  required
                  onChange={handleChange}
                  className="w-full border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition"
                />
              </div>

              <div>
                <textarea
                  name="mensaje"
                  placeholder="Mensaje"
                  rows={4}
                  required
                  onChange={handleChange}
                  className="w-full border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="
                  inline-flex items-center gap-3
                  px-8 py-4
                  border border-black
                  rounded-full
                  bg-black text-white
                  hover:bg-white hover:text-black
                  transition-all duration-300
                "
              >
                <Mail size={20} />
                ENVIAR MENSAJE
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;