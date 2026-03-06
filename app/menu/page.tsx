import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

// Menu data
const menuItems = {
  appetizers: [
    { name: "Samaki Fingers", description: "Crispy Nile perch strips with chili lime dip", price: "950", image: "/images/menu/samaki-fingers.jpg" },
    { name: "Mbuzi Choma", description: "Grilled goat meat with kachumbari", price: "1,250", image: "/images/menu/mbuzi.jpg" },
    { name: "Viazi Karai", description: "Spiced potato bites with tamarind sauce", price: "750", image: "/images/menu/viazi.jpg" },
  ],
  mains: [
    { name: "Mama Samaki", description: "Grilled Nile perch, tamarind-chili glaze, mchicha greens, cassava purée", price: "2,850", image: "/images/menu/samaki.jpg" },
    { name: "Kuku Pesa", description: "Free-range chicken, coconut-lemongrass broth, pilipili, lime & bhajia crisps", price: "2,450", image: "/images/menu/kuku.jpg" },
    { name: "Nyama Choma Platter", description: "Mixed grilled meats with ugali, sukuma wiki, and three sauces", price: "3,950", image: "/images/menu/nyama.jpg" },
  ],
  vegetarian: [
    { name: "Mahindi choma", description: "Roasted maize & cashew cream, kachumbari, ngumu (crispy sorghum)", price: "1,850", image: "/images/menu/mahindi.jpg" },
    { name: "Mchicha Royale", description: "Creamed spinach with coconut, served with plantain fritters", price: "1,650", image: "/images/menu/mchicha.jpg" },
    { name: "Kunde Curry", description: "Cowpeas in spiced coconut curry, served with rice", price: "1,750", image: "/images/menu/kunde.jpg" },
  ],
  desserts: [
    { name: "Maandazi Trio", description: "Three Swahili doughnuts with chocolate, cardamom, and coconut", price: "950", image: "/images/menu/maandazi.jpg" },
    { name: "Baking Chocolate Mousse", description: "With passion fruit and shortbread", price: "1,150", image: "/images/menu/mousse.jpg" },
  ],
};

export default function Menu() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/menu-hero.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
          <div>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-4">Our Menu</h1>
            <p className="text-xl text-cream max-w-2xl">
              Seasonal tasting menu · à la carte favourites
            </p>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="container mx-auto px-6 py-16">
        
        {/* Appetizers */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-2">Starters</h2>
          <div className="w-24 h-1 bg-gold mb-8"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.appetizers.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-sand group">
                <div className="h-48 bg-charcoal/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <div className="w-full h-full bg-[url('/images/placeholder.jpg')] bg-cover bg-center group-hover:scale-105 transition duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">{item.name}</h3>
                  <p className="text-taupe mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-clay">{item.price} <span className="text-sm font-normal text-taupe">KES</span></p>
                    <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-clay transition">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mains */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-2">Main Courses</h2>
          <div className="w-24 h-1 bg-gold mb-8"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.mains.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-sand group">
                <div className="h-48 bg-charcoal/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <div className="w-full h-full bg-[url('/images/placeholder.jpg')] bg-cover bg-center group-hover:scale-105 transition duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">{item.name}</h3>
                  <p className="text-taupe mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-clay">{item.price} <span className="text-sm font-normal text-taupe">KES</span></p>
                    <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-clay transition">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vegetarian */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-2">From the Shamba</h2>
          <div className="w-24 h-1 bg-gold mb-8"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.vegetarian.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-sand group">
                <div className="h-48 bg-charcoal/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <div className="w-full h-full bg-[url('/images/placeholder.jpg')] bg-cover bg-center group-hover:scale-105 transition duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">{item.name}</h3>
                  <p className="text-taupe mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-clay">{item.price} <span className="text-sm font-normal text-taupe">KES</span></p>
                    <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-clay transition">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Desserts */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-2">Sweet Endings</h2>
          <div className="w-24 h-1 bg-gold mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {menuItems.desserts.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-sand group">
                <div className="h-40 bg-charcoal/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <div className="w-full h-full bg-[url('/images/placeholder.jpg')] bg-cover bg-center group-hover:scale-105 transition duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">{item.name}</h3>
                  <p className="text-taupe mb-4 text-sm">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-clay">{item.price} <span className="text-sm font-normal text-taupe">KES</span></p>
                    <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-clay transition">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note */}
        <div className="text-center mt-16 p-8 bg-cream rounded-3xl">
          <p className="text-charcoal italic">
            * 16% service charge applies. Prices include VAT.
          </p>
          <p className="text-clay font-semibold mt-2">
            For dietary restrictions, please ask your server.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
