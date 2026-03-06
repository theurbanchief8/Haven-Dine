import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import { FaLeaf, FaHeart, FaUsers, FaQuoteLeft } from "react-icons/fa";

export default function About() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />

      {/* Hero Section - Black & Cream */}
      <section className="relative h-[500px] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6">
              Our Story
            </h1>
            <div className="w-24 h-1 bg-gold mb-6"></div>
            <p className="text-2xl text-cream/90 max-w-2xl">
              A love letter to Kenyan cuisine, written in fire and spice.
            </p>
          </div>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
                From Our Hearts to Your Table
              </h2>
              <div className="w-24 h-1 bg-gold mb-8"></div>
              <p className="text-taupe mb-6 leading-relaxed text-lg">
                Haven Dine was born from a simple dream: to create a space where 
                Nairobi's diverse culinary heritage could shine. Founders Wambui 
                and Sam met while studying hospitality in Mombasa, bonding over 
                their love for Swahili coastal cuisine and the rich agricultural 
                bounty of the Rift Valley.
              </p>
              <p className="text-taupe mb-6 leading-relaxed text-lg">
                In 2019, they opened the doors of Haven Dine in Karen, a quiet 
                suburb known for its leafy streets and artistic community. The 
                restaurant quickly became a gathering place for locals and travelers 
                alike, drawn by the aroma of wood-fired nyama choma and the warmth 
                of authentic Kenyan hospitality.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-16 h-16 rounded-full bg-clay/20 flex items-center justify-center">
                  <FaHeart className="text-3xl text-clay" />
                </div>
                <div>
                  <p className="font-playfair text-xl text-charcoal">"Karibu nyumbani"</p>
                  <p className="text-taupe">— Welcome home</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-charcoal/10 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-[url('/images/founder-1.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="aspect-square bg-charcoal/10 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-[url('/images/founder-2.jpg')] bg-cover bg-center"></div>
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-square bg-charcoal/10 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-[url('/images/founder-3.jpg')] bg-cover bg-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy - Black Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
              Our Philosophy
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-black-light rounded-full flex items-center justify-center mx-auto mb-6">
                <FaLeaf className="text-4xl text-clay-light" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-cream mb-4">Farm to Table</h3>
              <p className="text-cream/70">
                We partner with local farmers in Karen and the Rift Valley to bring you the freshest produce, ethically raised meats, and sustainable seafood.
              </p>
            </div>

            <div className="text-center p-8 border-x border-charcoal">
              <div className="w-20 h-20 bg-black-light rounded-full flex items-center justify-center mx-auto mb-6">
                <FaFire className="text-4xl text-clay-light" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-cream mb-4">Traditional Techniques</h3>
              <p className="text-cream/70">
                Our open-flame jiko kitchen honors traditional Kenyan cooking methods, infusing every dish with the smoky flavors of indigenous hardwoods.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-black-light rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-4xl text-clay-light" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-cream mb-4">Community First</h3>
              <p className="text-cream/70">
                We believe in the power of sharing a meal. Every plate tells a story of community, culture, and the bonds formed around the table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Meet the Team
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-taupe max-w-2xl mx-auto">
              The passionate people behind your dining experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Wambui Kimani", role: "Co-Founder & Head Chef", bio: "Trained in Mombasa and Paris, Wambui brings coastal Swahili flavors to every dish." },
              { name: "Sam Omondi", role: "Co-Founder & Hospitality Director", bio: "With 15 years in luxury hotels, Sam ensures every guest feels like family." },
              { name: "Chef Musa", role: "Jiko Master", bio: "The guardian of the open flame, Musa has been grilling nyama choma for over 20 years." },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-lg border border-sand text-center group hover:shadow-xl transition">
                <div className="w-32 h-32 rounded-full bg-charcoal/10 mx-auto mb-6 overflow-hidden">
                  <div className="w-full h-full bg-[url('/images/team-placeholder.jpg')] bg-cover bg-center group-hover:scale-110 transition"></div>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">{member.name}</h3>
                <p className="text-clay font-semibold mb-3">{member.role}</p>
                <p className="text-taupe text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FaQuoteLeft className="text-6xl text-clay/20 mx-auto mb-6" />
            <p className="font-playfair text-2xl md:text-3xl italic text-charcoal mb-8">
              "Haven Dine isn't just a restaurant—it's a celebration of everything we love about Kenya. 
              The food, the people, the warmth—it's home."
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-clay font-semibold">— Nairobi Eats Magazine</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
