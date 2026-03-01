import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/images_logo/logo1.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const isCannonPage = location.pathname === "/cannon";
  const cannonLinkPath = isCannonPage ? "/" : "/cannon";
  const cannonLinkLabel = isCannonPage ? "PERFUMES" : "CANNON";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md border-b ${
        isScrolled
          ? "bg-white/85 border-neutral-200"
          : "bg-white/20 border-white/20"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "h-16" : "h-20 md:h-24"
        }`}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Maison Oud"
            className={`w-auto object-contain transition-all duration-500 ease-out hover:opacity-80 ${
              isScrolled ? "h-10 opacity-90" : "h-14 md:h-16 scale-105"
            }`}
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center space-x-10 text-sm tracking-[0.2em]">
          <Link to="/" className="hover:text-neutral-500 transition-colors">
            INICIO
          </Link>

          <Link
            to="/coleccion"
            className="hover:text-neutral-500 transition-colors"
          >
            COLECCIÓN
          </Link>

          <Link
            to={cannonLinkPath}
            className="transition-colors hover:text-neutral-500"
          >
            {cannonLinkLabel}
          </Link>

          <Link
            to="/marcas"
            className="hover:text-neutral-500 transition-colors"
          >
            MARCAS
          </Link>

          <Link
            to="/contacto"
            className="hover:text-neutral-500 transition-colors"
          >
            CONTACTO
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1"
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
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-8 pt-4 flex flex-col space-y-6 text-sm tracking-[0.2em] bg-white border-t border-neutral-200">
          <Link to="/" onClick={() => setIsOpen(false)}>
            INICIO
          </Link>

          <Link to="/coleccion" onClick={() => setIsOpen(false)}>
            COLECCIÓN
          </Link>

          <Link to={cannonLinkPath} onClick={() => setIsOpen(false)}>
            {cannonLinkLabel}
          </Link>

          <Link to="/marcas" onClick={() => setIsOpen(false)}>
            MARCAS
          </Link>

          <Link to="/contacto" onClick={() => setIsOpen(false)}>
            CONTACTO
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
