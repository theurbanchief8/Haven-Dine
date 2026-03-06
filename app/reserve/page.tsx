import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { FaCalendar, FaClock, FaUser, FaPhone, FaEnvelope, FaComment } from "react-icons/fa";

export default function Reserve() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />

      <section className="py-16">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-4">
              Reserve Your Table
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-taupe max-w-2xl mx-auto">
              Join us for an unforgettable dining experience. 
              For parties larger than 6, please call us directly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Reservation Form */}
            <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-xl">
              <form className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-charcoal font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-sand rounded-xl focus:outline-none focus:border-clay"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-sand rounded-xl focus:outline-none focus:border-clay"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-charcoal font-medium mb-2">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="+254 712 345 678"
                      className="w-full px-4 py-3 border border-sand rounded-xl focus:outline-none focus:border-clay"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal font-medium mb-2">Number of Guests</label>
                    <select className="w-full px-4 py-3 border border-sand rounded-xl focus:outline-none focus:border-clay">
                      <option>1 guest</option>
                      <option>2 guests</option>
                      <option>3 guests</option>
                      <option>4 guests</option>
                      <option>5 guests</option>
                      <option>6 guests</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-charcoal font-medium mb-2">Date</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 border border-sand rounded-xl focus:outline-none focus:border-clay"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal font-medium mb-2">Time</label>
                    <select className="w-full px-4 py-3 border border-sand rounded-xl focus:outline-none focus:border-clay">
                      <option>12:00 PM</option>
                      <option>1:00 PM</option>
                      <option>2:00 PM</option>
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                      <option>8:00 PM</option>
                      <option>9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-charcoal font-medium mb-2">Special Requests</label>
                  <textarea 
                    rows={4}
                    placeholder="Dietary restrictions, allergies, special occasions..."
                    className="w-full px-4 py-3 border border-sand rounded-xl focus:outline-none focus:border-clay"
                  ></textarea>
                </div>

                <button className="w-full bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-clay transition text-lg">
                  Confirm Reservation
                </button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="bg-black text-white rounded-3xl p-8">
              <h3 className="font-playfair text-2xl font-bold text-cream mb-6">Important Info</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-clay-light mb-2">Hours</p>
                  <p className="text-cream/70 text-sm">
                    Tue - Thu: 12pm - 10:30pm<br />
                    Fri - Sat: 12pm - 11:30pm<br />
                    Sun: 12pm - 9pm<br />
                    Monday: Closed
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-clay-light mb-2">Dress Code</p>
                  <p className="text-cream/70 text-sm">
                    Smart casual. We welcome you as you are.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-clay-light mb-2">Cancellation</p>
                  <p className="text-cream/70 text-sm">
                    Please notify us at least 2 hours in advance for any changes.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-clay-light mb-2">Large Groups</p>
                  <p className="text-cream/70 text-sm">
                    For parties of 7 or more, please call us directly at<br />
                    <span className="text-clay-light">+254 712 345 678</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
