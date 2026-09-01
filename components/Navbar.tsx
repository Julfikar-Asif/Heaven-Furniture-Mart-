"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-charcoal/95 backdrop-blur-sm border-b border-ivory/10 text-ivory">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-wide text-gold">
          HFM.
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <Link href="#collections" className="hover:text-gold transition-colors">Collections</Link>
          <Link href="#about" className="hover:text-gold transition-colors">About</Link>
          <Link href="#contact" className="hover:text-gold transition-colors">Contact</Link>
        </nav>

        {/* Desktop Direct Call Button */}
        <a 
          href="https://wa.me/8801960481983"
          target="_blank"
          rel="noopener noreferrer" 
          className="hidden md:flex items-center gap-2 border border-gold/40 text-gold hover:bg-gold hover:text-charcoal px-4 py-2 text-xs uppercase tracking-widest transition-all rounded-sm font-semibold"
        >
          <Phone size={14} /> Contact
        </a>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-ivory hover:text-gold transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-charcoal border-b border-ivory/10 px-6 py-6 flex flex-col gap-5 text-sm uppercase tracking-widest">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors">Home</Link>
          <Link href="#collections" onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors">Collections</Link>
          <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors">About</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors">Contact</Link>
          <a 
            href="https://wa.me/8801960481983" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gold text-charcoal text-center py-3 font-semibold text-xs tracking-widest mt-2 rounded-sm"
          >
            Request Quote via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}