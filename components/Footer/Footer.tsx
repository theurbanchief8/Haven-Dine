"use client";

import Link from "next/link";
import { FaUtensils, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t-4 border-amber-400">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Restaurant Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 group">
              <FaUtensils className="text-amber-400 text-2xl group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="font-playfair text-2xl font-bold text-white">
                Haven<span className="text-amber-400">Dine</span>
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Authentic Kenyan cuisine on Murang'a Rd. 
              Wood-fired nyama choma, fresh harvest, and warm hospitality.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-black hover:scale-110 transition-all duration-300">
                <span className="text-lg">📱</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-black hover:scale-110 transition-all duration-300">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-black hover:scale-110 transition-all duration-300">
                <span className="text-lg">📷</span>
              </a>
            </div>
          </div>

          {/* Quick Links - WITH BETTER VISIBILITY */}
          <div>
            <h4 className="font-playfair text-xl font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-amber-400 mr-2"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-400 transition flex items-center group">
                  <span className="mr-2 text-amber-400 opacity-0 group-hover:opacity-100 transition">›</span>
                  <span className="group-hover:translate-x-1 transition">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-amber-400 transition flex items-center group">
                  <span className="mr-2 text-amber-400 opacity-0 group-hover:opacity-100 transition">›</span>
                  <span className="group-hover:translate-x-1 transition">Menu</span>
                </Link>
              </li>
              <li>
                <Link href="/reserve" className="text-gray-300 hover:text-amber-400 transition flex items-center group">
                  <span className="mr-2 text-amber-400 opacity-0 group-hover:opacity-100 transition">›</span>
                  <span className="group-hover:translate-x-1 transition">Reservations</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-400 transition flex items-center group">
                  <span className="mr-2 text-amber-400 opacity-0 group-hover:opacity-100 transition">›</span>
                  <span className="group-hover:translate-x-1 transition">Our Story</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition flex items-center group">
                  <span className="mr-2 text-amber-400 opacity-0 group-hover:opacity-100 transition">›</span>
                  <span className="group-hover:translate-x-1 transition">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - FIXED READABILITY */}
          <div>
            <h4 className="font-playfair text-xl font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-amber-400 mr-2"></span>
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group hover:bg-gray-900 p-2 rounded-lg transition">
                <FaMapMarkerAlt className="text-amber-400 mt-1 flex-shrink-0 group-hover:scale-110 transition" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  <span className="font-semibold text-white block">HavenDine Restaurant</span>
                  Murang'a Rd, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3 group hover:bg-gray-900 p-2 rounded-lg transition">
                <FaPhone className="text-amber-400 flex-shrink-0 group-hover:scale-110 transition" />
                <span className="text-gray-300 group-hover:text-white transition">+254 712 345 678</span>
              </li>
              <li className="flex items-center gap-3 group hover:bg-gray-900 p-2 rounded-lg transition">
                <FaEnvelope className="text-amber-400 flex-shrink-0 group-hover:scale-110 transition" />
                <span className="text-gray-300 group-hover:text-white transition">hello@havendine.ke</span>
              </li>
              <li className="flex items-start gap-3 group hover:bg-gray-900 p-2 rounded-lg transition">
                <FaClock className="text-amber-400 mt-1 flex-shrink-0 group-hover:scale-110 transition" />
                <span className="text-gray-300 text-sm">
                  <span className="font-semibold text-white block">Hours</span>
                  Tue-Sun: 11:00am - 10:00pm<br />
                  Monday: Closed
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter - Optional */}
          <div>
            <h4 className="font-playfair text-xl font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-amber-400 mr-2"></span>
              Stay Updated
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Be the first to know about special events and new dishes.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
              />
              <button className="w-full bg-amber-400 text-black px-4 py-3 rounded-xl font-semibold hover:bg-amber-500 hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
                Subscribe
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar - CLEAR AND READABLE */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm hover:text-amber-400 transition">
              © {currentYear} HavenDine Nairobi. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-amber-400 text-sm transition">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-amber-400 text-sm transition">
                Terms
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-amber-400 text-sm transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
