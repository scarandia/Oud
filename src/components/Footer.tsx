import { Instagram, Facebook, Music2 } from "lucide-react";

const Footer: React.FC = () => {
  const phoneNumber = "59160346213";

  return (
    <footer>
      {/* DIVIDER */}
      <div className="w-full h-[1px] bg-neutral-200 mb-8"></div>
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* BRAND */}
          <div>
            <h2 className="font-serif text-2xl mb-6">Oud</h2>
            <p className="text-neutral-600 leading-relaxed text-sm">
              Alta perfumería contemporánea inspirada en notas profundas,
              maderas orientales y elegancia atemporal.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase mb-6 text-neutral-500">
              Navegación
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-neutral-500 transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-500 transition">
                  Colección
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-500 transition">
                  Marcas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-500 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase mb-6 text-neutral-500">
              Información
            </h3>
            <ul className="space-y-4 text-sm text-neutral-600 mb-6">
              <li>Cochabamba, Bolivia</li>
              <li>info@oud.com</li>
              <li>{phoneNumber}</li>
            </ul>

            {/* SOCIAL MEDIA */}
            <h3 className="text-xs tracking-[0.3em] uppercase mb-4 text-neutral-500">
              Redes Sociales
            </h3>

            <div className="flex items-center gap-6 text-neutral-600">
              <a
                href="https://www.instagram.com/oud.bol/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61587070367393"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
                aria-label="Facebook"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>

              <a
                href="https://www.tiktok.com/@oud.bol"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
                aria-label="TikTok"
              >
                <Music2 size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
