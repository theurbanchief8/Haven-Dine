import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { FaCoffee, FaEgg, FaFish, FaDrumstickBite, FaLeaf, FaCocktail, FaMugHot, FaBreadSlice, FaWineGlassAlt, FaGlassCheers } from "react-icons/fa";

export default function Menu() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-cream mb-4">
            Our Menu
          </h1>
          <div className="w-24 h-1 bg-clay-light mb-6"></div>
          <p className="text-xl text-cream/80 max-w-2xl">
            Authentic Kenyan dishes made with love — from breakfast to dinner
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          
          {/* BREAKFAST */}
          <div className="mb-16">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-2 flex items-center gap-3">
              <FaEgg className="text-clay" /> Breakfast
            </h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Eggs Section */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand">
                <h3 className="font-playfair text-2xl font-bold text-clay mb-4">Eggs</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Primo Eggs</span>
                    <span className="font-bold text-clay">100</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Japanese Omelette</span>
                    <span className="font-bold text-clay">150</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Boiled Eggs</span>
                    <span className="font-bold text-clay">80</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Plain Omelette</span>
                    <span className="font-bold text-clay">100</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Scrambled Eggs</span>
                    <span className="font-bold text-clay">120</span>
                  </div>
                </div>
              </div>

              {/* Pancakes & Toast */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand">
                <h3 className="font-playfair text-2xl font-bold text-clay mb-4">Pancakes & Toast</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Pancake Plantation</span>
                    <span className="font-bold text-clay">250</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Fancakes</span>
                    <span className="font-bold text-clay">160</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Toast Haven</span>
                    <span className="font-bold text-clay">300</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">English French Toast</span>
                    <span className="font-bold text-clay">150</span>
                  </div>
                </div>
              </div>

              {/* Breads & Chapatti */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand">
                <h3 className="font-playfair text-2xl font-bold text-clay mb-4">Breads & Chapatti</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Andazi</span>
                    <span className="font-bold text-clay">50</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Primo Rolls</span>
                    <span className="font-bold text-clay">150</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Brown Chapatti</span>
                    <span className="font-bold text-clay">70</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">White Chapatti</span>
                    <span className="font-bold text-clay">60</span>
                  </div>
                </div>
              </div>

              {/* Sides & Potatoes */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand">
                <h3 className="font-playfair text-2xl font-bold text-clay mb-4">Sides</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Arrow Roots</span>
                    <span className="font-bold text-clay">60</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Sweet Potatoes</span>
                    <span className="font-bold text-clay">120</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Roast Potatoes</span>
                    <span className="font-bold text-clay">200</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Hollo Maize</span>
                    <span className="font-bold text-clay">100</span>
                  </div>
                </div>
              </div>

              {/* Porridge & Tea */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand">
                <h3 className="font-playfair text-2xl font-bold text-clay mb-4">Porridge & Tea</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Porridge</span>
                    <span className="font-bold text-clay">100</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">African Tea (Uji)</span>
                    <span className="font-bold text-clay">100</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Black Tea</span>
                    <span className="font-bold text-clay">100</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Masala Tea</span>
                    <span className="font-bold text-clay">160</span>
                  </div>
                </div>
              </div>

              {/* Breakfast Specials */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand">
                <h3 className="font-playfair text-2xl font-bold text-clay mb-4">Specials</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Butter Tart</span>
                    <span className="font-bold text-clay">60</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Chocolate (White/Blaze)</span>
                    <span className="font-bold text-clay">100</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Smoke Chocoa Sausage</span>
                    <span className="font-bold text-clay">200</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Bille</span>
                    <span className="font-bold text-clay">120</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Special Rantakes</span>
                    <span className="font-bold text-clay">100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN DISHES */}
          <div className="mb-16">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-2 flex items-center gap-3">
              <FaDrumstickBite className="text-clay" /> Main Dishes
            </h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Ugali & Stews */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand">
                <h3 className="font-playfair text-2xl font-bold text-clay mb-4">Ugali & Stews</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Beef Ugali</span>
                    <span className="font-bold text-clay">400</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Ugali Matumbo</span>
                    <span className="font-bold text-clay">400</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Beef Rice</span>
                    <span className="font-bold text-clay">400</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Rice Matumbo</span>
                    <span className="font-bold text-clay">400</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Rice Plain</span>
                    <span className="font-bold text-clay">250</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Ugali Plain</span>
                    <span className="font-bold text-clay">200</span>
                  </div>
                </div>
              </div>

              {/* Stews & Beans */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand">
                <h3 className="font-playfair text-2xl font-bold text-clay mb-4">Stews & Beans</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Matumbo Plain</span>
                    <span className="font-bold text-clay">350</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Githeri (Yellow Bean)</span>
                    <span className="font-bold text-clay">300</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Njahi Stew</span>
                    <span className="font-bold text-clay">300</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Peas Stew</span>
                    <span className="font-bold text-clay">300</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Beans Stew</span>
                    <span className="font-bold text-clay">300</span>
                  </div>
                </div>
              </div>

              {/* Specials */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand">
                <h3 className="font-playfair text-2xl font-bold text-clay mb-4">Specials</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Murmo</span>
                    <span className="font-bold text-clay">350</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Greens (Sukuma Wiki)</span>
                    <span className="font-bold text-clay">150</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Cabbage</span>
                    <span className="font-bold text-clay">150</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Chicken Rahati</span>
                    <span className="font-bold text-clay">450</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Beef Matoge</span>
                    <span className="font-bold text-clay">400</span>
                  </div>
                </div>
              </div>

              {/* Fish & Chicken */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand">
                <h3 className="font-playfair text-2xl font-bold text-clay mb-4">Fish & Chicken</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Fish Fossets</span>
                    <span className="font-bold text-clay">350</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Fish Fillets</span>
                    <span className="font-bold text-clay">350</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Fish Sweetpie</span>
                    <span className="font-bold text-clay">350</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Kuku Kenyazi (Live)</span>
                    <span className="font-bold text-clay">600</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Kuku Boiler</span>
                    <span className="font-bold text-clay">500</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Kuku Broiler (Full)</span>
                    <span className="font-bold text-clay">800</span>
                  </div>
                </div>
              </div>

              {/* Rice & Pasta */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand">
                <h3 className="font-playfair text-2xl font-bold text-clay mb-4">Rice & Pasta</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Stir-fried Spaghetti</span>
                    <span className="font-bold text-clay">350</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Vegetable Rice</span>
                    <span className="font-bold text-clay">300</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Chips Masala</span>
                    <span className="font-bold text-clay">300</span>
                  </div>
                </div>
              </div>

              {/* Special Plates */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand">
                <h3 className="font-playfair text-2xl font-bold text-clay mb-4">Special Plates</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Sitter Special (Mini)</span>
                    <span className="font-bold text-clay">450</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Laverubaki</span>
                    <span className="font-bold text-clay">350</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Mashed Statio</span>
                    <span className="font-bold text-clay">250</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Mathol Plain</span>
                    <span className="font-bold text-clay">250</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COFFEE */}
          <div className="mb-16">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-2 flex items-center gap-3">
              <FaCoffee className="text-clay" /> Coffee
            </h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Coffee Latte</span>
                    <span className="font-bold text-clay">250</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Espresso (Short)</span>
                    <span className="font-bold text-clay">200</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Espresso (Double)</span>
                    <span className="font-bold text-clay">300</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Cappuccino</span>
                    <span className="font-bold text-clay">300</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Black Mocha</span>
                    <span className="font-bold text-clay">200</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Macchia</span>
                    <span className="font-bold text-clay">200</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Arabica</span>
                    <span className="font-bold text-clay">200</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Mocha</span>
                    <span className="font-bold text-clay">150</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Dawn</span>
                    <span className="font-bold text-clay">200</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Hot Water with Lemon</span>
                    <span className="font-bold text-clay">50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SNACKS */}
          <div className="mb-16">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-2 flex items-center gap-3">
              <FaBreadSlice className="text-clay" /> Snacks
            </h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Chips</span>
                    <span className="font-bold text-clay">150</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Fruit Salad</span>
                    <span className="font-bold text-clay">100</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Chips Sausage</span>
                    <span className="font-bold text-clay">100</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Chicken Wings</span>
                    <span className="font-bold text-clay">400</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Pishkara</span>
                    <span className="font-bold text-clay">100</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Chops</span>
                    <span className="font-bold text-clay">150</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MILKSHAKES */}
          <div className="mb-16">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-2 flex items-center gap-3">
              <FaCocktail className="text-clay" /> Milkshakes
            </h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Vanilla</span>
                    <span className="font-bold text-clay">300</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Strawberry</span>
                    <span className="font-bold text-clay">300</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Chocolate</span>
                    <span className="font-bold text-clay">100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SMOOTHIES */}
          <div className="mb-16">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-2 flex items-center gap-3">
              <FaGlassCheers className="text-clay" /> Smoothies
            </h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Mango + Banana</span>
                    <span className="font-bold text-clay">350</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Mango + Banana + Avocado</span>
                    <span className="font-bold text-clay">350</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* JUICES */}
          <div className="mb-16">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-2 flex items-center gap-3">
              <FaWineGlassAlt className="text-clay" /> Juices
            </h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Passion</span>
                    <span className="font-bold text-clay">160</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Mango</span>
                    <span className="font-bold text-clay">160</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Cocktail</span>
                    <span className="font-bold text-clay">150</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Avocado</span>
                    <span className="font-bold text-clay">100</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Minute Maid</span>
                    <span className="font-bold text-clay">100</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Delicious</span>
                    <span className="font-bold text-clay">300</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">Water (Sodium)</span>
                    <span className="font-bold text-clay">50</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sand/50 pb-2">
                    <span className="text-charcoal">1 Liter Water</span>
                    <span className="font-bold text-clay">200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-cream rounded-3xl">
            <p className="text-charcoal text-lg">
              All prices are in Kenyan Shillings (KES)
            </p>
            <p className="text-clay font-semibold mt-2">
              For dietary restrictions or special requests, please ask your server.
            </p>
            <Link 
              href="/reserve" 
              className="inline-block mt-6 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-clay hover:text-white transition-all duration-300"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
