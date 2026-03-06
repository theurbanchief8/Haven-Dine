"use client";

import Link from "next/link";
import { FaUtensils } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <FaUtensils className="text-amber-400 text-2xl group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-playfair text-2xl font-bold text-white">
              Haven<span className="text-amber-400">Dine</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-amber-400 transition duration-300 font-medium">
              Home
            </Link>
            <Link href="/menu" className="text-white hover:text-amber-400 transition duration-300 font-medium">
              Menu
            </Link>
            <Link href="/reserve" className="text-white hover:text-amber-400 transition duration-300 font-medium">
              Reserve
            </Link>
            <Link href="/about" className="text-white hover:text-amber-400 transition duration-300 font-medium">
              Our Story
            </Link>
          </div>

          {/* Reserve Button */}
          <Link 
            href="/reserve" 
            className="hidden md:block bg-amber-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-amber-500 hover:text-white hover:scale-105 transition-all duration-300 shadow-md"
          >
            Book a Table
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-2xl hover:text-amber-400 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-white hover:text-amber-400 transition py-2" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/menu" className="text-white hover:text-amber-400 transition py-2" onClick={() => setIsOpen(false)}>
                Menu
              </Link>
              <Link href="/reserve" className="text-white hover:text-amber-400 transition py-2" onClick={() => setIsOpen(false)}>
                Reserve
              </Link>
              <Link href="/about" className="text-white hover:text-amber-400 transition py-2" onClick={() => setIsOpen(false)}>
                Our Story
              </Link>
              <Link 
                href="/reserve" 
                className="bg-amber-400 text-black px-4 py-2 rounded-full font-semibold text-center hover:bg-amber-500 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Book a Table
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
