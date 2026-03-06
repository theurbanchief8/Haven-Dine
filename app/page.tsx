import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { FaLeaf, FaUtensils, FaMapMarkerAlt, FaClock, FaPhone, FaArrowRight, FaStar } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar />

      {/* Hero Section - Fixed readability */}
      <section className="relative bg-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_#f59e0b_0%,_transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_#f59e0b_0%,_transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-4xl">
            {/* Animated Badge */}
            <div className="inline-block bg-amber-400/10 border border-amber-400/30 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              <HiOutlineSparkles className="inline mr-2" />
              🇰🇪 Authentic Kenyan Cuisine
            </div>
            
            {/* Main Heading - BIGGER and BOLDER */}
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Dine in the heart<br />of 
              <span className="text-amber-400 ml-3">Nairobi</span>
            </h1>
            
            {/* Location - CLEARLY VISIBLE */}
            <div className="flex items-center gap-2 text-amber-400 text-xl mb-4">
              <FaMapMarkerAlt className="text-amber-400" />
              <span className="text-white font-medium">HavenDine Restaurant, Murang'a Rd, Nairobi</span>
            </div>
            
            {/* Description - EASY TO READ */}
            <div className="border-l-4 border-amber-400 pl-6 my-8">
              <p className="text-xl text-gray-200">
                <FaLeaf className="inline mr-3 text-amber-400" />
                Authentic Kenyan dishes made with love — just food, fresh juices & drinks
              </p>
            </div>
            
            <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Wood-fired nyama choma, traditional stews, and fresh harvest from local farms. 
              No spirits or wine — just pure, honest Kenyan flavors in a warm, welcoming space.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/reserve" 
                className="group bg-amber-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-amber-500 hover:text-white hover:scale-105 transition-all duration-300 flex items-center gap-2 text-lg shadow-lg hover:shadow-xl"
              >
                <FaUtensils className="group-hover:rotate-12 transition" />
                Reserve a table
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </Link>
              <Link 
                href="/menu" 
                className="border-2 border-amber-400/50 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-400 hover:text-black hover:scale-105 transition-all duration-300 text-lg"
              >
                Explore menu
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              <div className="animate-fadeInUp" style={{animationDelay: "0.1s"}}>
                <p className="text-3xl font-bold text-amber-400">2019</p>
                <p className="text-gray-400 text-sm">Established</p>
              </div>
              <div className="animate-fadeInUp" style={{animationDelay: "0.2s"}}>
                <p className="text-3xl font-bold text-amber-400">50+</p>
                <p className="text-gray-400 text-sm">Local Farms</p>
              </div>
              <div className="animate-fadeInUp" style={{animationDelay: "0.3s"}}>
                <p className="text-3xl font-bold text-amber-400">100%</p>
                <p className="text-gray-400 text-sm">Kenyan Owned</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">
              Karibu — Welcome
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Nestled along Murang'a Road, HavenDine is your home for authentic Kenyan cuisine. 
              No frills, no spirits — just delicious food made with love, fresh juices, and the 
              warmest hospitality in Nairobi.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-100">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUtensils className="text-3xl text-amber-600" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">Nyama Choma</h3>
                <p className="text-gray-600 text-sm">Wood-fired grilled meats, the Kenyan way</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-100">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLeaf className="text-3xl text-amber-600" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">Fresh Harvest</h3>
                <p className="text-gray-600 text-sm">Seasonal vegetables from local farms</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-100">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaClock className="text-3xl text-amber-600" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">Daily Fresh</h3>
                <p className="text-gray-600 text-sm">No freezers, just fresh daily preparation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section - NEW with correct address */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
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
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Find Us
              </h3>
              <div className="w-24 h-1 bg-amber-400 mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover:bg-white p-4 rounded-xl transition-all duration-300">
                  <FaMapMarkerAlt className="text-amber-500 text-xl mt-1 group-hover:scale-110 transition" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">HavenDine Restaurant<br />Murang'a Rd, Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:bg-white p-4 rounded-xl transition-all duration-300">
                  <FaClock className="text-amber-500 text-xl mt-1 group-hover:scale-110 transition" />
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">
                      Tuesday - Sunday: 11:00am - 10:00pm<br />
                      Monday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:bg-white p-4 rounded-xl transition-all duration-300">
                  <FaPhone className="text-amber-500 text-xl mt-1 group-hover:scale-110 transition" />
                  <div>
                    <p className="font-semibold text-gray-900">Contact</p>
                    <p className="text-gray-600">+254 712 345 678<br />hello@havendine.ke</p>
                  </div>
                </div>

                <Link 
                  href="https://maps.google.com/?q=HavenDine+Restaurant+Muranga+Rd+Nairobi" 
                  target="_blank"
                  className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-400 hover:text-black transition-all duration-300 mt-4 group"
                >
                  Get Directions 
                  <FaArrowRight className="inline ml-2 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Guest Reviews
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "James K.", review: "Best nyama choma in Nairobi! The atmosphere is warm and welcoming.", rating: 5 },
              { name: "Wanjiku M.", review: "Authentic Kenyan food just like mama used to make. The fresh juices are amazing!", rating: 5 },
              { name: "Peter O.", review: "Simple, honest, delicious. No pretentious stuff, just great food.", rating: 5 },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-100 animate-fadeIn" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex gap-1 text-amber-400 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="animate-pulse" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                <p className="font-semibold text-amber-600">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4 animate-pulse">
            Ready for Real Kenyan Food?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            No spirits, no wine — just delicious food, fresh juices, and warm hospitality.
          </p>
          <Link 
            href="/reserve" 
            className="inline-block bg-amber-400 text-black px-10 py-5 rounded-full font-semibold hover:bg-amber-500 hover:text-white hover:scale-105 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl"
          >
            Reserve Your Table
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
