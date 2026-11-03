"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Send,
  Phone,
  Printer,
  Calendar,
} from "lucide-react";

export default function ContactPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    topic: "Standard Wooden Pallets",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#002b49] selection:bg-blue-100 selection:text-[#003366]">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      <main className="flex-1">
        {/* =========================================================================
            CONTACT HERO
            ========================================================================= */}
        <section className="relative bg-[#00223a] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
              alt="AWMPACK Birkat Al-Awamer Factory"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <span className="inline-block bg-[#0099e5]/20 border border-[#0099e5]/40 text-[#0099e5] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Factory &amp; Corporate Office • Doha, Qatar 🇶🇦
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Contact AWMPACK Qatar
              </h1>
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl">
                Connect directly with our production facility in Birkat Al-Awamer, Al Wukair. Our technical team led by Factory Manager Eng. Maher Marjy is ready to assist your packaging and material handling requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Main Info */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Direct Factory Inquiry Form */}
              <div className="lg:col-span-7 bg-[#f8fafc] border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-xs">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                    Request a Quotation
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#002b49] tracking-tight mt-1">
                    Direct Factory Consultation
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Send your pallet dimensions, crating specifications, or ISPM 15 heat treatment volume.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="text-lg font-bold text-emerald-950">
                      Inquiry Received by AWMPACK Factory!
                    </h3>
                    <p className="text-xs text-emerald-800 max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Eng. Maher Marjy and our production team in Birkat Al-Awamer will prepare your quotation and reach out to <strong>{formData.email}</strong> shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-6 py-2 rounded-full bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#002b49] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#002b49] mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.qa"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#002b49] mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+974 5555 1234"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#002b49] mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company W.L.L"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002b49] mb-1">
                        Inquiry Topic / Required Solution *
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none bg-white"
                      >
                        <option>Standard Wooden Pallets (Euro / GMA)</option>
                        <option>Custom Industrial Pallets (Oil & Gas)</option>
                        <option>Heavy Wooden Boxes & Export Crates</option>
                        <option>Hinged Pallet Collars & Metal Stillages</option>
                        <option>Certified ISPM 15 Heat Treatment</option>
                        <option>Compressed Sawdust Wood Blocks</option>
                        <option>Pallet Repair & Pooling Loops</option>
                        <option>Wood Waste Recycling Program</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002b49] mb-1">
                        Cargo Specifications / Quantity / Dimensions *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe pallet dimensions (e.g., 1200x1000mm), payload weight, expected delivery frequency, and destination..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none bg-white"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-full bg-[#003366] hover:bg-[#002244] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                      >
                        <span>Submit to Factory Manager</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Column: Exact Business Card Details */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#00223a] text-white p-8 sm:p-10 rounded-3xl space-y-6 border border-blue-900/60 shadow-xl">
                  <div className="border-b border-blue-800 pb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0099e5] block mb-1">
                      Factory Manager
                    </span>
                    <h3 className="text-2xl font-black text-white">Eng. Maher Marjy</h3>
                    <p className="text-xs text-blue-200 mt-0.5">Al Waad Manufacturing Packaging Company (AWMPC)</p>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-[#0099e5]/20 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-[#0099e5]" />
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px]">Direct Mobile / WhatsApp:</span>
                        <a href="tel:+97451191223" className="font-bold text-white hover:text-[#0099e5] text-sm">+974 5119 1223</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-[#0099e5]/20 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-[#0099e5]" />
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px]">Office Telephone:</span>
                        <a href="tel:+97440394581" className="font-bold text-white hover:text-[#0099e5] text-sm">+974 4039 4581</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-[#0099e5]/20 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-[#0099e5]" />
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px]">Direct Email:</span>
                        <a href="mailto:maher@awmpack.com" className="font-bold text-white hover:text-[#0099e5]">maher@awmpack.com</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-[#0099e5]/20 flex items-center justify-center shrink-0">
                        <Globe2 className="w-4 h-4 text-[#0099e5]" />
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px]">Official Website:</span>
                        <a href="https://www.awmpack.com" target="_blank" rel="noreferrer" className="font-bold text-white hover:text-[#0099e5]">www.awmpack.com</a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 pt-3 border-t border-blue-800">
                      <div className="w-8 h-8 rounded-full bg-[#0099e5]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-[#0099e5]" />
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px]">Factory Address:</span>
                        <p className="text-white font-medium leading-relaxed">
                          Building No. 89, Street No. 3012, Zone No. 91,<br />
                          Birkat Al-Awamer, Al Wukair,<br />
                          State of Qatar (P.O. Box 12451)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-blue-800 flex items-center justify-between text-[11px] text-gray-400">
                    <span>Working Hours: Sun – Thu 7:00 AM – 5:00 PM</span>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-[#edf2f7] border border-gray-200/80 space-y-2 text-xs">
                  <h4 className="text-sm font-bold text-[#002b49]">Factory Location &amp; Dispatch</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Strategically located in Birkat Al-Awamer logistics zone with direct highway connectivity to Hamad Port, Mesaieed, Ras Laffan, and Doha Industrial Area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}