import React, { useState, useEffect } from "react";
import logo from "/images_logo/logo1.png";
import logo_white from "/images_logo/logo_white.png";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isCannonPage = location.pathname === "/cannon";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false);
  };

  const handleInicio = () => {
    if (isCannonPage) {
      scrollToSection("cannonHero");
    } else {
      scrollToSection("heroPerfumes");
    }
  };

  const handleCatalogo = () => {
    if (isCannonPage) {
      scrollToSection("cannonProducts");
    } else {
      scrollToSection("catalogo");
    }
  };

  const handleContacto = () => {
    scrollToSection("contacto");
  };

  const handleToggleCatalog = () => {
    if (isCannonPage) {
      navigate("/");
    } else {
      navigate("/cannon");
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 backdrop-blur-xl ${
        isScrolled
          ? "bg-white/90 text-black shadow-sm"
          : "bg-transparent text-white"
      }`}
    >
      <div
        className={`relative w-full px-6 md:px-12 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "h-16" : "h-20 md:h-24"
        }`}
      >
        {/* LOGO */}
        <button onClick={handleInicio}>
          <img
            src={isScrolled ? logo : logo_white}
            alt="Oud"
            className={`transition-all duration-500 ${
              isScrolled ? "h-12" : "h-16 md:h-18"
            }`}
          />
        </button>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center space-x-12 text-sm tracking-[0.3em] uppercase">
          <button
            onClick={handleInicio}
            className="hover:opacity-60 transition"
          >
            Inicio
          </button>

          <button
            onClick={handleCatalogo}
            className="hover:opacity-60 transition"
          >
            Catálogo
          </button>

          <button
            onClick={handleContacto}
            className="hover:opacity-60 transition"
          >
            Contacto
          </button>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-6">

          {/* SMART CTA BUTTON */}
          <button
            onClick={handleToggleCatalog}
            className={`hidden md:inline-block px-6 py-2 text-xs tracking-[0.3em] uppercase border transition-all duration-500 hover:scale-105 ${
              isScrolled
                ? "bg-black text-white border-black hover:bg-white hover:text-black"
                : "bg-white/10 text-white border-white/40 hover:bg-white hover:text-black"
            }`}
          >
            {isCannonPage ? "CATÁLOGO PERFUMES" : "PRODUCTOS CANNON"}
          </button>

          {/* MOBILE BURGER */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`w-6 h-[1px] transition-all duration-500 ${
                isScrolled ? "bg-black" : "bg-white"
              }`}
            />
            <span
              className={`w-6 h-[1px] transition-all duration-500 ${
                isScrolled ? "bg-black" : "bg-white"
              }`}
            />
            <span
              className={`w-6 h-[1px] transition-all duration-500 ${
                isScrolled ? "bg-black" : "bg-white"
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`px-6 pb-8 pt-4 flex flex-col space-y-6 text-md tracking-[0.3em] uppercase border-t ${
            isScrolled
              ? "bg-white text-black border-neutral-200"
              : "bg-black text-white border-white/20"
          }`}
        >
          <button onClick={handleInicio}>
            Inicio
          </button>

          <button onClick={handleCatalogo}>
            Catálogo
          </button>

          <button onClick={handleContacto}>
            Contacto
          </button>

          <button
            onClick={handleToggleCatalog}
            className="pt-4 border-t border-neutral-300"
          >
            {isCannonPage ? "CATÁLOGO PERFUMES" : "PRODUCTOS CANNON"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;