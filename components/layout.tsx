import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Heaven Furniture Mart | Bespoke Luxury",
  description: "Chattogram's leading luxury studio crafting bespoke interior pieces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-charcoal text-ivory">
        {children}
      </body>
    </html>
  );
}