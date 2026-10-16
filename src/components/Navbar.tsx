"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 md:h-36">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="GEMI - Inicio">
            <Image
              src="/logo-gemi.png"
              alt="GEMI Gestión de Movilidad Inteligente"
              width={540}
              height={168}
              className="h-24 md:h-32 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-8" role="navigation" aria-label="Menú principal">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-body font-semibold text-sm text-navy tracking-wide relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-navy hover:bg-surface transition-colors"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="py-3 border-t border-gray-100 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 font-body font-semibold text-sm text-navy rounded-lg hover:bg-surface hover:text-accent-dark transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
