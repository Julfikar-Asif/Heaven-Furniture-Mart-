import { Quote, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/70 border-t border-ivory/10">
      {/* Quote Section */}
      <div className="py-16 px-6 border-b border-ivory/10 flex justify-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Quote size={32} className="text-gold/50 mb-6" />
          <p className="text-xl md:text-2xl font-serif leading-snug mb-6 text-ivory">
            "At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients."
          </p>
          <p className="font-sans font-semibold tracking-wide uppercase text-xs">
            — Abul Kalam Bhuiyan, Managing Director
          </p>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-serif text-ivory mb-4">Heaven Furniture Mart</h3>
          <p className="mb-6 text-sm">Designed. Crafted. Customized.</p>
          <div className="flex gap-4">
            <a href="https://facebook.com/HeavenFurnitureMart" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com/heaven_furniture_ltd" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://youtube.com/@HeavenFurnitureMart" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 1.46 5.33 2.78 2.78 0 0 0 1.94 2C6.88 19.54 12 19.54 12 19.54s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 1.46-5.33 29 29 0 0 0-1.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-ivory mb-2 uppercase tracking-wider">Contact Us</h4>
          <a href="tel:+8801960481983" className="flex items-center gap-3 hover:text-gold transition-colors text-sm">
            <Phone size={16} /> +880 1960-481983
          </a>
          <a href="mailto:heavenfurnituremart@gmail.com" className="flex items-center gap-3 hover:text-gold transition-colors text-sm">
            <Mail size={16} /> heavenfurnituremart@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-ivory mb-2 uppercase tracking-wider">Visit Us</h4>
          <p className="text-sm leading-relaxed">
            Agrabad Access Road<br />
            Chattogram, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}