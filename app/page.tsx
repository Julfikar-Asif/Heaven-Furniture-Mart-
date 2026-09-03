"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  MapPin, 
  Clock,
  Phone
} from "lucide-react";
import PageVideo from "@/components/video";

// Inline Brand Icons
const FacebookIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <polygon points="10 15 15 12 10 9 10 15"/>
  </svg>
);

const ScrollReveal = ({ children, direction = "up", delay = 0 }: { children: React.ReactNode, direction?: string, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getDirectionClass = () => {
    if (!isVisible) return "opacity-0"; 
    switch (direction) {
      case "left": return "animate-fade-left";
      case "right": return "animate-fade-right";
      case "down": return "animate-fade-down";
      case "up": default: return "animate-fade-up";
    }
  };

  return (
    <div ref={ref} className={`${getDirectionClass()} opacity-0`} style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}>
      {children}
    </div>
  );
};

const collections = [
  {
    title: "Living Room",
    desc: "Sofas, coffee tables, TV units & bespoke consoles crafted for modern luxury.",
    image: "/images/Living.jpg",
  },
  {
    title: "Bedroom",
    desc: "Beds, wardrobes, dressing tables & bedside units built to your dimensions.",
    image: "/images/bedroom.jpg",
  },
  {
    title: "Dining",
    desc: "Dining tables, handcrafted chairs & statement storage cabinets.",
    image: "/images/dinning.jpg",
  },
  {
    title: "Office & Study",
    desc: "Executive tables, custom bookshelves & ergonomic workstations.",
    image: "/images/office.jpg",
  },
];

const trustPoints = [
  "Free design consultation",
  "Fully bespoke — built to your space, not mass-produced",
  "Premium wood & materials, skilled in-house craftsmanship",
  "Large physical showroom in Chattogram (Agrabad)",
  "Delivery & installation included",
  "Easy payment options",
  "Trusted by hundreds of happy homeowners",
];

const milestones = [
  { year: "2020", detail: "Founded by Abul Kalam Bhuiyan" },
  { year: "2021", detail: "Opened the Agrabad physical showroom" },
  { year: "2024–2025", detail: "Exhibited at International Furniture Fair, Chattogram" },
  { year: "2025", detail: "Inducted as Chamber of Commerce member" },
  { year: "2026", detail: "Received nationwide BFIOA recognition" },
];

export default function Home() {
  return (
    <>
      <main className="bg-charcoal text-ivory min-h-screen">
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/85 to-charcoal z-10" />
          
          {/* Background Video */}
          <div className="absolute inset-0 w-full h-full z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-105"
            >
              <source src="/craftsmanship.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
            <span className="text-gold tracking-[0.3em] text-xs md:text-sm font-semibold uppercase mb-4 border-b border-gold/30 pb-1">
              Bespoke Furniture & Interior Studio
            </span>
            <h1 className="text-4xl md:text-7xl font-serif leading-tight mb-6 text-ivory">
              Furniture, Crafted Around You.
            </h1>
            <p className="text-lg md:text-xl text-ivory/90 font-light max-w-2xl mb-8 leading-relaxed">
              Crafting Bespoke Luxury for <span className="text-gold">Inspired</span> Living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <a 
                href="https://wa.me/8801960481983" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gold text-charcoal px-8 py-4 font-sans font-semibold text-sm uppercase tracking-widest hover:bg-ivory transition-all duration-300 shadow-lg shadow-gold/10 flex items-center justify-center gap-2"
              >
                Request a Free Consultation <ArrowRight size={16} />
              </a>
              <a 
                href="#collections" 
                className="border border-ivory/30 text-ivory px-8 py-4 font-sans font-semibold text-sm uppercase tracking-widest hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center"
              >
                Explore Collections
              </a>
            </div>
          </div>
        </section>

        {/* 1.5 INFINITE MARQUEE */}
        <section className="bg-gold text-charcoal py-3 border-y border-gold/40 overflow-hidden flex whitespace-nowrap">
          <div className="animate-marquee flex gap-8 items-center text-xs uppercase tracking-[0.3em] font-semibold">
            <span>Designed in Chattogram</span>
            <span className="text-charcoal/30">•</span>
            <span>Premium Materials</span>
            <span className="text-charcoal/30">•</span>
            <span>100% Bespoke Craftsmanship</span>
            <span className="text-charcoal/30">•</span>
            <span>Built to Your Space</span>
            <span className="text-charcoal/30">•</span>
            <span>Designed in Chattogram</span>
            <span className="text-charcoal/30">•</span>
            <span>Premium Materials</span>
            <span className="text-charcoal/30">•</span>
            <span>100% Bespoke Craftsmanship</span>
            <span className="text-charcoal/30">•</span>
            <span>Built to Your Space</span>
            <span className="text-charcoal/30">•</span>
            {/* Duplicated for seamless loop */}
            <span>Designed in Chattogram</span>
            <span className="text-charcoal/30">•</span>
            <span>Premium Materials</span>
            <span className="text-charcoal/30">•</span>
            <span>100% Bespoke Craftsmanship</span>
            <span className="text-charcoal/30">•</span>
            <span>Built to Your Space</span>
          </div>
        </section>

        {/* 2. BRAND INTRO */}
        <section className="py-20 px-6 border-b border-ivory/10 bg-charcoal">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">The Studio Standard</h2>
            <p className="text-2xl md:text-4xl font-serif text-ivory leading-relaxed">
              Heaven Furniture Mart is Chattogram’s leading luxury studio crafting bespoke interior pieces built specifically for your lifestyle, dimensions, and vision.
            </p>
            <p className="text-ivory/70 text-base max-w-2xl mx-auto">
              Founded in 2020 by Managing Director Abul Kalam Bhuiyan, we move beyond off-the-shelf mass production to deliver enduring craftsmanship from our Agrabad showroom directly into your home.
            </p>
          </div>
        </section>

      {/* 3. WHY CHOOSE HEAVEN */}
        <section className="py-24 px-6 bg-charcoal/90 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Header Reveal */}
            <ScrollReveal direction="down" delay={0}>
              <div className="text-center mb-16">
                <h2 className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-2">Uncompromising Quality</h2>
                <h3 className="text-3xl md:text-5xl font-serif text-ivory">Why Homeowners Trust Us</h3>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Trust Points Reveal */}
              {trustPoints.map((point, idx) => {
                const directions = ["left", "down", "right", "left", "up", "right", "left"];
                
                return (
                  <ScrollReveal key={idx} direction={directions[idx]} delay={idx * 100}>
                    <div className="group h-full p-8 border border-ivory/10 bg-charcoal/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/5">
                      <CheckCircle2 size={24} className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-lg font-serif text-ivory leading-snug group-hover:text-gold transition-colors duration-300">{point}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
              
              {/* Final CTA Box Reveal */}
              <ScrollReveal direction="up" delay={700}>
                <div className="group h-full p-8 border border-gold/30 bg-gold/5 hover:bg-gold/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-center items-start">
                  <Sparkles size={24} className="text-gold mb-4 group-hover:rotate-12 transition-transform duration-300" />
                  <p className="text-lg font-serif text-ivory mb-2">Ready to Upgrade Your Space?</p>
                  <a href="https://wa.me/8801960481983" className="text-gold uppercase text-xs tracking-widest font-semibold flex items-center gap-2 hover:underline">
                    Talk to Our Designers <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
       {/* 4. COLLECTIONS SNAPSHOT */}
        <section id="collections" className="py-24 px-6 border-t border-ivory/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <h2 className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-2">Curated Categories</h2>
                <h3 className="text-3xl md:text-5xl font-serif text-ivory">Design Collections</h3>
              </div>
              <p className="text-ivory/60 text-sm max-w-sm mt-4 md:mt-0">
                Each piece is customized by size, finish, and upholstery to match your architectural vision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {collections.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden border border-ivory/10 bg-charcoal transition-all duration-500 hover:-translate-y-3 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/10 animate-fade-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* UPDATED IMAGE CONTAINER: Taller height and object-contain */}
                  <div className="h-96 w-full overflow-hidden relative bg-black/20">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                  
                  <div className="p-8 relative z-10 border-t border-ivory/5">
                    <h4 className="text-2xl font-serif text-ivory mb-2 group-hover:text-gold transition-colors">{item.title}</h4>
                    <p className="text-ivory/70 text-sm leading-relaxed mb-6">{item.desc}</p>
                    <a 
                      href="https://wa.me/8801960481983" 
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-semibold hover:text-ivory transition-colors"
                    >
                      Custom Quote for {item.title} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* 5. BESPOKE HIGHLIGHT */}
        <section className="py-24 px-6 border-t border-b border-ivory/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-gold tracking-[0.25em] text-xs font-semibold uppercase">Our Signature Advantage</span>
              <h3 className="text-3xl md:text-5xl font-serif text-ivory leading-tight">
                100% Bespoke. Built Exactly to Your Space.
              </h3>
              <p className="text-ivory/80 text-base leading-relaxed">
                We don’t force your room to fit off-the-shelf furniture. Our master craftsmen build custom sofas, executive workstations, and dining setups around your exact measurements, color scheme, and architectural layout.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 border border-gold/30 text-gold mt-1"><Sparkles size={18} /></div>
                  <div>
                    <h5 className="font-semibold text-ivory">Tailored Dimensions</h5>
                    <p className="text-sm text-ivory/60">Crafted down to the millimeter to maximize your floor layout.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 border border-gold/30 text-gold mt-1"><ShieldCheck size={18} /></div>
                  <div>
                    <h5 className="font-semibold text-ivory">Hand-Selected Timbers</h5>
                    <p className="text-sm text-ivory/60">High-grade solid woods, premium veneers, and stain-resistant luxury fabrics.</p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <a 
                  href="https://wa.me/8801960481983" 
                  className="bg-gold text-charcoal px-8 py-4 font-semibold text-xs uppercase tracking-widest hover:bg-ivory transition-colors inline-block"
                >
                  Schedule Bespoke Consultation
                </a>
              </div>
            </div>
            <div className="relative h-[450px] border border-ivory/10 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" 
                alt="Bespoke Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
          {/* 6. LOCAL CRAFTSMANSHIP VIDEO */}
        <section className="py-24 bg-charcoal border-t border-ivory/10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
              Featured Reel
            </span>
            <h3 className="text-3xl md:text-5xl font-serif text-ivory mb-6">
              Craftsmanship in Motion
            </h3>
            <p className="text-ivory/70 max-w-2xl mx-auto mb-10 text-base leading-relaxed">
              Watch real behind-the-scenes footage from Heaven Furniture Mart showcasing luxury finishes and bespoke customization.
            </p>

            <div className="flex justify-center w-full">
              <PageVideo />
            </div>
          </div>
        </section>

        {/* 7. MILESTONES & RECOGNITION */}
        <section className="py-24 px-6 bg-charcoal">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-2">Proven Track Record</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-ivory">Our Brand Journey</h3>
            </div>
            <div className="relative border-l border-gold/30 ml-4 md:ml-32 space-y-12">
              {milestones.map((m, i) => (
                <div key={i} className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gold border-4 border-charcoal" />
                  <span className="text-gold font-serif text-xl font-bold block mb-1">{m.year}</span>
                  <p className="text-ivory/80 text-base">{m.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* SOCIAL PROOF QUOTE */}
<section className="relative py-32 px-6 bg-charcoal border-t border-ivory/10 overflow-hidden">
  {/* Faint Background Decorative Quote */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[240px] text-ivory/[0.03] font-serif leading-none select-none z-0">
    &quot;
  </div>
  
  <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
    {/* Elegant Gold Opening Quote */}
    <div className="text-gold text-5xl font-serif leading-none mb-4">&quot;</div>
    
    <blockquote className="text-2xl md:text-4xl lg:text-5xl font-serif font-light italic text-ivory leading-relaxed md:leading-[1.5] mb-12">
      At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.
    </blockquote>
    
    <div className="flex flex-col items-center">
      {/* Structural Gold Divider */}
      <div className="w-12 h-[1px] bg-gold/50 mb-6"></div>
      <p className="text-gold uppercase tracking-[0.25em] text-sm font-semibold">— Abul Kalam Bhuiyan</p>
      <p className="text-ivory/50 text-xs tracking-widest uppercase mt-2">Managing Director</p>
    </div>
  </div>
</section>

        {/* 8. FINAL CALL TO ACTION */}
        <section className="py-20 px-6 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal border-t border-ivory/10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-3xl md:text-5xl font-serif text-ivory">Transform Your Living Space Today</h3>
            <p className="text-ivory/70 text-base">
              Visit our Agrabad showroom or speak directly with our head designer on WhatsApp for instant pricing and consultation.
            </p>
            <a 
              href="https://wa.me/8801960481983" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold text-charcoal px-10 py-5 font-semibold uppercase text-xs tracking-widest hover:bg-ivory transition-colors shadow-xl"
            >
              <Phone size={16} /> Request Quote on WhatsApp
            </a>
          </div>
        </section>

        {/* 9. SOCIAL MEDIA & CONNECT STRIP */}
        <section className="py-16 px-6 bg-charcoal border-t border-ivory/10">
          <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-2xl font-serif text-ivory mb-2">Connect with Heaven Furniture Mart</h4>
              <p className="text-ivory/60 text-sm">
                Follow our custom installs, watch video tours, and view live client reveals.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full xl:w-auto">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/HeavenFurnitureMart"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 border border-ivory/20 bg-charcoal/80 hover:border-gold hover:text-gold transition-all rounded-sm text-sm"
              >
                <FacebookIcon size={18} className="shrink-0" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase text-ivory/50">Facebook</span>
                  <span className="font-semibold text-xs text-ivory block truncate">Facebook Page</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/heaven_furniture_ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 border border-ivory/20 bg-charcoal/80 hover:border-gold hover:text-gold transition-all rounded-sm text-sm"
              >
                <InstagramIcon size={18} className="shrink-0" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase text-ivory/50">Instagram</span>
                  <span className="font-semibold text-xs text-ivory block truncate">@heaven_furniture_ltd</span>
                </div>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@HeavenFurnitureMart"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 border border-ivory/20 bg-charcoal/80 hover:border-gold hover:text-gold transition-all rounded-sm text-sm"
              >
                <YoutubeIcon size={18} className="shrink-0" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase text-ivory/50">YouTube</span>
                  <span className="font-semibold text-xs text-ivory block truncate">@HeavenFurnitureMart</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/8801960481983"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 border border-gold/40 bg-gold/10 hover:bg-gold hover:text-charcoal transition-all rounded-sm text-sm group"
              >
                <Phone size={18} className="text-gold group-hover:text-charcoal shrink-0" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase text-ivory/70 group-hover:text-charcoal">WhatsApp</span>
                  <span className="font-semibold text-xs text-ivory group-hover:text-charcoal block truncate">Chat Direct</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 10. SHOWROOM FOOTER */}
      <footer className="bg-charcoal px-6 py-16 border-t border-ivory/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h4 className="text-xl font-serif text-ivory tracking-wide">HEAVEN FURNITURE MART</h4>
            <p className="text-ivory/60 text-sm leading-relaxed max-w-sm">
              Chattogram’s premier destination for bespoke, handcrafted luxury furniture. Built to your exact dimensions, designed for your lifestyle.
            </p>
          </div>

          {/* Visit Us / Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">Visit the Showroom</h4>
            <div className="flex items-start gap-3 text-ivory/80 text-sm">
              <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
              <div>
                <p>Opposite of RAK Ceramics</p>
                <p>Agrabad Access Road</p>
                <p>Chattogram, Bangladesh</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Heaven+Furniture+Mart+Agrabad+Access+Road+Chattogram" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-gold hover:text-ivory transition-colors text-xs uppercase tracking-widest border-b border-gold/30 pb-0.5"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">Hours & Contact</h4>
            <div className="flex items-center gap-3 text-ivory/80 text-sm">
              <Clock size={18} className="text-gold shrink-0" />
              <p>Everyday: 10:00 AM – 9:00 PM</p>
            </div>
            <div className="flex items-center gap-3 text-ivory/80 text-sm pt-2">
              <Phone size={18} className="text-gold shrink-0" />
              <p>+880 1960-481983</p>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-ivory/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ivory/40">
          <p>© {new Date().getFullYear()} Heaven Furniture Mart. All rights reserved.</p>
          <p>Designed for Luxury Living in Chattogram.</p>
        </div>
      </footer>
    </>
  );
}