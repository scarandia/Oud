import React, { useState, useEffect } from "react";
import logo from "/images_logo/logo1.png";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md border-b ${
        isScrolled
          ? "bg-white/85 border-neutral-200"
          : "bg-white/20 border-white/20"
      }`}
    >
      <div
        className={`relative w-full px-6 md:px-12 flex items-center ${
          isScrolled ? "h-16" : "h-20 md:h-24"
        }`}
      >
        {/* LOGO */}
        <button
          onClick={() => scrollToSection("top")}
          className="absolute left-6 md:left-12"
        >
          <img
            src={logo}
            alt="Maison Oud"
            className={`transition-all duration-500 ${
              isScrolled ? "h-10" : "h-14 md:h-16"
            }`}
          />
        </button>

        {/* MENÚ CENTRADO */}
        <nav className="hidden md:flex mx-auto items-center space-x-12 text-sm tracking-[0.2em]">
          <button
            onClick={() => scrollToSection("top")}
            className="hover:text-neutral-500 transition"
          >
            INICIO
          </button>

          <button
            onClick={() => scrollToSection("catalogo")}
            className="hover:text-neutral-500 transition"
          >
            CATÁLOGO
          </button>

          <button
            onClick={() => scrollToSection("contacto")}
            className="hover:text-neutral-500 transition"
          >
            CONTACTO
          </button>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden absolute right-6 flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-[1px] bg-black"></span>
          <span className="w-6 h-[1px] bg-black"></span>
          <span className="w-6 h-[1px] bg-black"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-8 pt-4 flex flex-col space-y-6 text-sm tracking-[0.2em] bg-white border-t border-neutral-200">
          <button onClick={() => scrollToSection("top")}>
            INICIO
          </button>

          <button onClick={() => scrollToSection("catalogo")}>
            CATÁLOGO
          </button>

          <button onClick={() => scrollToSection("contacto")}>
            CONTACTO
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;