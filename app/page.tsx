import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { FaLeaf, FaFire, FaUtensils, FaStar, FaArrowRight, FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />

      {/* Hero Section - Black with HIGH VISIBILITY text */}
      <section className="relative h-[90vh] bg-black overflow-hidden">
        {/* Background Pattern with animation */}
        <div className="absolute inset-0 opacity-10 animate-pulse">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_#fbbf24_0%,_transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_#fbbf24_0%,_transparent_50%)]"></div>
        </div>
        
        {/* Content with fade-in animation */}
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center animate-fadeIn">
          <div className="max-w-3xl">
            {/* Badge - with bounce animation */}
            <div className="inline-block bg-amber-500 text-black font-bold px-6 py-3 rounded-full text-sm mb-8 shadow-lg animate-bounce">
              🇰🇪 Nairobi's Finest Kenyan Cuisine
            </div>
            
            {/* Main Heading - with slide-in animation */}
            <h1 className="font-playfair text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg animate-slideIn">
              Dine in the heart<br />of 
              <span className="text-amber-400 ml-3">Nairobi</span>
            </h1>
            
            {/* Location */}
            <p className="text-white text-xl font-medium mb-6 animate-fadeInUp" style={{animationDelay: "0.2s"}}>
              <span className="font-bold">Murang'a Rd</span>, Nairobi
            </p>
            
            {/* Description */}
            <div className="bg-black/40 backdrop-blur-sm border-l-4 border-amber-400 pl-6 py-4 my-8 rounded-r-2xl animate-fadeInUp" style={{animationDelay: "0.3s"}}>
              <p className="text-xl text-white font-medium leading-relaxed">
                <FaLeaf className="inline mr-3 text-amber-400 text-2xl animate-spin-slow" />
                From our humble Ugali to our finest cuisine, Nairobi's culinary experience is as diverse as it is delicious.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10 animate-fadeInUp" style={{animationDelay: "0.4s"}}>
              <Link 
                href="/reserve" 
                className="group bg-amber-400 text-black font-bold px-8 py-4 rounded-full hover:bg-amber-500 hover:scale-105 transition-all duration-300 flex items-center gap-2 text-lg shadow-xl"
              >
                <FaUtensils className="group-hover:rotate-12 transition" />
                Reserve a table
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </Link>
              <Link 
                href="/menu" 
                className="border-2 border-amber-400 text-white font-bold px-8 py-4 rounded-full hover:bg-amber-400 hover:text-black hover:scale-105 transition-all duration-300 text-lg"
              >
                Explore menu
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent"></div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4 animate-fadeIn">
              Karibu — Welcome
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-12 animate-fadeInUp">
              Situated along Murang'a Road, HavenDine is your home for authentic Kenyan cuisine. 
              From hearty breakfasts to satisfying mains, fresh juices to rich coffees, 
              every dish is made with love and the finest local ingredients.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-amber-100 animate-fadeIn" style={{animationDelay: "0.1s"}}>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <FaUtensils className="text-3xl text-amber-600" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">Breakfast All Day</h3>
                <p className="text-gray-600 text-sm">From Primo Eggs to Pancakes</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-amber-100 animate-fadeIn" style={{animationDelay: "0.2s"}}>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <FaFire className="text-3xl text-amber-600" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">Main Dishes</h3>
                <p className="text-gray-600 text-sm">Ugali, Nyama Choma, Matumbo, and more</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-amber-100 animate-fadeIn" style={{animationDelay: "0.3s"}}>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <FaLeaf className="text-3xl text-amber-600" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">Fresh Juices</h3>
                <p className="text-gray-600 text-sm">Passion, Mango, Avocado, and smoothies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-24 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">
              Customer Favorites
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Most loved dishes from our kitchen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Beef Ugali", price: "400", desc: "Ugali with beef stew", icon: "🍖" },
              { name: "Chicken", price: "450", desc: "Tender chicken in rich sauce", icon: "🍗" },
              { name: "Fish Fillet", price: "350", desc: "Fresh fish with chips", icon: "🐟" },
              { name: "Masala Tea", price: "160", desc: "Spiced Kenyan chai", icon: "☕" },
              { name: "Mango Smoothie", price: "350", desc: "Fresh mango & banana", icon: "🥭" },
              { name: "Pancakes", price: "250", desc: "Fluffy pancakes with syrup", icon: "🥞" },
            ].map((dish, i) => (
              <div key={i} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-amber-100 hover:border-amber-400 animate-fadeIn" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{dish.icon}</div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">{dish.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{dish.desc}</p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-amber-600">{dish.price} <span className="text-sm font-normal text-gray-500">KES</span></p>
                  <Link href="/menu" className="text-amber-600 group-hover:translate-x-2 transition-transform">
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/menu" 
              className="inline-flex items-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-amber-500 hover:text-black hover:scale-105 transition-all duration-300"
            >
              View Full Menu
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Find Us
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] animate-fadeIn">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.816246720468!2d36.8213!3d-1.2839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d2b7f1c8b7%3A0x8f8f8f8f8f8f8f8f!2sMurang&#39;a%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                className="w-full h-full hover:scale-105 transition-transform duration-500"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
                Visit Us Today
              </h3>
              <div className="w-24 h-1 bg-amber-500 mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover:bg-amber-50 p-4 rounded-xl transition-all duration-300">
                  <FaMapMarkerAlt className="text-amber-500 text-xl mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">HavenDine Restaurant<br />Murang'a Rd, Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:bg-amber-50 p-4 rounded-xl transition-all duration-300">
                  <FaClock className="text-amber-500 text-xl mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">
                      Tuesday - Sunday: 11:00am - 10:00pm<br />
                      Monday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:bg-amber-50 p-4 rounded-xl transition-all duration-300">
                  <FaPhone className="text-amber-500 text-xl mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-gray-900">Contact</p>
                    <p className="text-gray-600">+254 712 345 678<br />hello@havendine.ke</p>
                  </div>
                </div>

                <Link 
                  href="https://maps.google.com/?q=HavenDine+Restaurant+Muranga+Rd+Nairobi" 
                  target="_blank"
                  className="inline-block bg-amber-400 text-black font-bold px-8 py-4 rounded-full hover:bg-amber-500 hover:scale-105 transition-all duration-300 mt-4 group"
                >
                  Get Directions 
                  <FaArrowRight className="inline ml-2 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4 animate-pulse">
            Ready to Taste Kenya?
          </h2>
          <p className="text-lg text-amber-100 mb-10 max-w-2xl mx-auto">
            Join us for breakfast, lunch, or dinner — authentic Kenyan flavors await.
          </p>
          <Link 
            href="/reserve" 
            className="inline-block bg-amber-400 text-black font-bold px-10 py-5 rounded-full hover:bg-amber-500 hover:scale-105 transition-all duration-300 text-lg shadow-xl animate-bounce"
          >
            Reserve Your Table
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
