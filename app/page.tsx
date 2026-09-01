import Image from "next/image";
import Link from "next/link";
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

const collections = [
  {
    title: "Living Room",
    desc: "Sofas, coffee tables, TV units & bespoke consoles crafted for modern luxury.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Bedroom",
    desc: "Beds, wardrobes, dressing tables & bedside units built to your dimensions.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Dining",
    desc: "Dining tables, handcrafted chairs & statement storage cabinets.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1c0945594?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Office & Study",
    desc: "Executive tables, custom bookshelves & ergonomic workstations.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1000&auto=format&fit=crop",
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
    <main className="bg-charcoal text-ivory min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/85 to-charcoal z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')" }} 
        />
        
        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-gold tracking-[0.3em] text-xs md:text-sm font-semibold uppercase mb-4 border-b border-gold/30 pb-1">
            Bespoke Furniture & Interior Studio
          </span>
          <h1 className="text-4xl md:text-7xl font-serif leading-tight mb-6 text-ivory">
            Furniture, Crafted Around You.
          </h1>
          <p className="text-lg md:text-xl text-ivory/80 font-light max-w-2xl mb-8 leading-relaxed">
            Designed. Crafted. Customized. Step into Chattogram’s premier studio experience for high-end residential and executive spaces.
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

      {/* 3. WHY CHOOSE HEAVEN (7 TRUST POINTS) */}
      <section className="py-24 px-6 bg-charcoal/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-2">Uncompromising Quality</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-ivory">Why Homeowners Trust Us</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="p-8 border border-ivory/10 bg-charcoal/50 backdrop-blur-sm hover:border-gold/40 transition-all duration-300">
                <CheckCircle2 size={24} className="text-gold mb-4" />
                <p className="text-lg font-serif text-ivory leading-snug">{point}</p>
              </div>
            ))}
            <div className="p-8 border border-gold/30 bg-gold/10 flex flex-col justify-center items-start">
              <Sparkles size={24} className="text-gold mb-4" />
              <p className="text-lg font-serif text-ivory mb-2">Ready to Upgrade Your Space?</p>
              <a href="https://wa.me/8801960481983" className="text-gold uppercase text-xs tracking-widest font-semibold flex items-center gap-2 hover:underline">
                Talk to Our Designers <ArrowRight size={14} />
              </a>
            </div>
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
              <div key={index} className="group relative overflow-hidden border border-ivory/10 bg-charcoal">
                <div className="h-80 w-full overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                </div>
                <div className="p-8 relative z-10">
                  <h4 className="text-2xl font-serif text-ivory mb-2">{item.title}</h4>
                  <p className="text-ivory/70 text-sm leading-relaxed mb-6">{item.desc}</p>
                  <a 
                    href="https://wa.me/8801960481983" 
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-semibold hover:text-ivory transition-colors"
                  >
                    Custom Quote for {item.title} <ArrowRight size={14} />
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

      {/* 6. MILESTONES & RECOGNITION */}
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

      {/* 7. FINAL CALL TO ACTION */}
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
    </main>
  );
}