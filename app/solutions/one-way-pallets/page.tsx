"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SearchModal from "../../../components/SearchModal";
import ContactModal from "../../../components/ContactModal";
import {
  Boxes,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Flame,
  Layers,
  Send,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Sparkles,
  Plane,
  Truck,
  Ship,
  TrendingDown,
  Clock,
  DollarSign,
  AlertCircle,
} from "lucide-react";

export default function OneWayPalletsPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("One-Way Pallets (OWP) Inquiry");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "500",
    dimensions: "1200 x 800 mm (Export Euro)",
    freightMode: "Ocean Container Shipping",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const keyCharacteristics = [
    {
      num: "01",
      title: "Simple & Fast Construction",
      description:
        "Simplified timber configuration enables rapid production cycles, automated nailing lines, and significantly shorter delivery lead times for emergency export batches.",
      icon: Clock,
    },
    {
      num: "02",
      title: "Optimized Single-Trip Travel",
      description:
        "Engineered specifically for one-way journeys, eliminating reverse logistics management, return freight fees, and pallet tracking overheads.",
      icon: Ship,
    },
    {
      num: "03",
      title: "Bespoke Client Dimensions",
      description:
        "Customized exact deckboard spacing and thickness to match your cargo weight without paying for excess tare timber.",
      icon: Layers,
    },
    {
      num: "04",
      title: "Certified ISPM-15 Compliance",
      description:
        "Every one-way export pallet undergoes thermal chamber kiln treatment and carries the official IPPC 'HT' mark for border customs clearance.",
      icon: Flame,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#002b49] selection:bg-blue-100 selection:text-[#003366]">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      <main className="flex-1">
        {/* =========================================================================
            HERO & BREADCRUMB
            ========================================================================= */}
        <section className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=90&w=2400&auto=format&fit=crop"
            alt="One-Way Wooden Export Pallets in Qatar"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-105 contrast-105"
          />
          {/* High-clarity directional gradient: dark under text, crystal clear transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001424]/90 via-[#001c33]/60 via-50% to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#001424]/40 via-transparent to-black/20"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="max-w-3xl space-y-3.5">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-xs font-semibold text-blue-200">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  <Link href="/solutions" className="hover:text-white transition-colors">Products &amp; Services</Link>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-[#0099e5] font-bold">One-Way Pallets</span>
                </div>

                <div className="inline-flex items-center space-x-2 bg-[#0099e5]/25 border border-[#0099e5]/40 text-blue-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                  <Plane className="w-3.5 h-3.5 text-[#0099e5]" />
                  <span>Cost-Effective Export Logistics &bull; State of Qatar 🇶🇦</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    One-Way Pallets
                  </h1>
                  <p className="text-blue-300 text-sm sm:text-base font-bold tracking-wide uppercase">
                    One-Way Pallets (OWP) from AWMPC &bull; Tailored Single-Trip Economy
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                  Streamlined, lightweight wooden pallets designed specifically for one-way export shipments. Lowest freight tare weight with full IPPC ISPM-15 heat-treatment compliance.
                </p>

                <div className="pt-1.5 flex flex-wrap gap-3">
                  <button
                    onClick={() => setContactOpen(true)}
                    className="px-6 py-2.5 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Request One-Way Pallets Quote
                  </button>
                  <a
                    href="#specifications"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    View Specifications
                  </a>
                  <a
                    href="#quote"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    Get Volume Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 1: OVERVIEW & EXACT SCRAPED COPY FROM AWMPACK.COM
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="overview">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Image with Lightbox Preview */}
              <div className="lg:col-span-6">
                <div
                  className="relative w-full h-[340px] sm:h-[440px] bg-[#f8fafc] border border-gray-200 rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => setSelectedImage("/one-way-pallets-export.png")}
                >
                  <Image
                    src="/one-way-pallets-export.png"
                    alt="AWMPC Lightweight One-Way Export Pallets in Qatar"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-[#002b49]/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm flex items-center space-x-1.5">
                    <Plane className="w-3.5 h-3.5 text-[#0099e5]" />
                    <span>Single-Trip Export Solution</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-200 shadow-md">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-[#002b49] block">IPPC ISPM-15 Heat Treated</span>
                        <span className="text-gray-500 text-[11px]">Rapid Delivery Lead-Times &bull; Birkat Al-Awamer Plant</span>
                      </div>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                        Lowest Tare Weight
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 text-center mt-2">
                  Click image to enlarge lightweight one-way pallet construction.
                </p>
              </div>

              {/* Right Column: Exact Scraped Text */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5] block mb-1">
                    Export Logistics &bull; Fast Lead-Times
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                    One-Way Pallets (OWP) from AWMPC
                  </h2>
                </div>

                <div className="prose text-sm text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    <strong>One-way Pallets (OWP) from AWMPC are known in the industry for the following key characteristics:</strong>
                  </p>
                  <ul className="space-y-2 pl-2 text-xs text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Simple construction:</strong> which often means less complex production setup and shorter lead-time.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Meant to travel only one way:</strong> dimensions usually reflect this purpose with optimized tare weight.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Produced to client specifications:</strong> tailored deckboard thickness and load distribution.</span>
                    </li>
                  </ul>
                  <p>
                    An effective OWP production setup allows for increased speed of delivery at competitive prices &ndash; regardless of country. Despite these characteristics, AWMPC focuses more and more on producing quality One-way Pallets. The pallets can be produced to the unique specifications of a client, including but not limited to the choice of specific soft woods.
                  </p>
                  <p>
                    <strong>As all our wood packaging and handling products, heat-treated OWP from AWMPC are also treated in accordance with the ISPM-15 standard.</strong>
                  </p>
                </div>

                <div className="pt-2 flex items-center space-x-4">
                  <button
                    onClick={() => {
                      setContactTopic("One-Way Pallets (OWP) Quotation");
                      setContactOpen(true);
                    }}
                    className="px-6 py-3 bg-[#002b49] hover:bg-[#0099e5] text-white text-xs font-bold rounded-full transition-all shadow-md flex items-center space-x-2"
                  >
                    <span>Request One-Way Pallets Pricing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="tel:+97451191223"
                    className="text-xs font-bold text-[#0099e5] hover:underline flex items-center space-x-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+974 5119 1223 (Eng. Maher)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: 4 KEY CHARACTERISTICS
            ========================================================================= */}
        <section className="py-20 bg-[#edf2f7] border-b border-gray-200" id="characteristics">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Production &amp; Cost Advantages
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                Key Industry Characteristics of AWMPC One-Way Pallets
              </h2>
              <p className="text-sm text-gray-600">
                Engineered for maximum shipping economy without risking cargo damage during sea container or air transport.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyCharacteristics.map((char) => {
                const IconComponent = char.icon;
                return (
                  <div
                    key={char.num}
                    className="bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-xl hover:border-[#0099e5]/60 transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#003366] border border-blue-200 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                          <IconComponent className="w-6 h-6 text-[#0099e5]" />
                        </div>
                        <span className="text-xs font-black text-gray-300 group-hover:text-[#0099e5] transition-colors">
                          {char.num}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                        {char.title}
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        {char.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center text-[11px] font-bold text-[#0099e5]">
                      <span>Export Ready Certified</span>
                      <CheckCircle2 className="w-3.5 h-3.5 ml-1.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: SPECIFICATIONS TABLE (Exact awmpack.com Content)
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="specifications">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Specifications &amp; Customization
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight mt-1">
                One-Way Pallets Specifications
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Certified dimensions, materials, and customization parameters from Al Waad Manufacturing Packaging Company.
              </p>
            </div>

            <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Dimensions
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700 font-bold text-[#0099e5]">
                    To client specifications (1200 &times; 800 mm, 1200 &times; 1000 mm, 1140 &times; 1140 mm container sizes &amp; bespoke dimensions)
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Standards
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700 font-semibold">
                    To client specifications (IPPC ISPM-15 thermal heat treated, Kiln Dried)
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Material
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700">
                    Soft and hard woods (e.g., pine, spruce, poplar, alder, beech etc.)
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Additional Info
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700 leading-relaxed">
                    One-way pallets are made in close collaboration with our clients to make sure we match the quality and cost expectations of our clients.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: GET A QUOTE FORM (Exact awmpack.com Request Component)
            ========================================================================= */}
        <section className="py-20 bg-white" id="quote">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Quotation Form */}
              <div className="lg:col-span-7 bg-[#f8fafc] border border-gray-200 p-8 sm:p-10 rounded-3xl shadow-sm">
                <div className="space-y-2 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                    Fast Factory Quotation
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#002b49]">
                    Get A Quote for One-Way Pallets
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Looking for customized packaging solutions? Get in touch with us today for a personalized quote. Our team is ready to provide competitive pricing and expert guidance tailored to your project needs.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-black">One-Way Pallet Request Received!</h4>
                    <p className="text-xs text-emerald-700">
                      Our commercial sales desk in Birkat Al-Awamer will calculate your volume pricing and respond within 2 business hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2 bg-emerald-600 text-white rounded-full text-xs font-bold hover:bg-emerald-700 transition-all"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company Name"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@company.qa"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+974 XXXX XXXX"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          One-Way Pallet Footprint *
                        </label>
                        <select
                          value={formData.dimensions}
                          onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        >
                          <option value="1200 x 800 mm (Export Euro)">1200 &times; 800 mm (Lightweight Euro Format)</option>
                          <option value="1200 x 1000 mm (Export Industrial)">1200 &times; 1000 mm (Export Industrial)</option>
                          <option value="1140 x 1140 mm (Ocean Container Square)">1140 &times; 1140 mm (Shipping Container Fit)</option>
                          <option value="Custom Size to Specifications">Custom Dimensions to Specs</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Estimated Quantity Required
                        </label>
                        <select
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        >
                          <option value="100-250">100 &ndash; 250 Units</option>
                          <option value="500">500 Units (Standard Production Batch)</option>
                          <option value="1000">1,000 Units (Volume Discount)</option>
                          <option value="2500+">2,500+ Units (Recurring Export Schedule)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Cargo Payload Weight (kg) &amp; Export Destination
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="State your payload per pallet, whether 2-way or 4-way entry is needed, and destination port/country."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#002b49] hover:bg-[#0099e5] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit One-Way Pallet RFQ</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Factory Contact Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#00223a] text-white p-8 rounded-3xl space-y-5 border border-blue-900/60 shadow-xl">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0099e5] block mb-1">
                      Direct Manufacturing Plant
                    </span>
                    <h4 className="text-xl font-black text-white">Al Waad Manufacturing Packaging Company</h4>
                    <p className="text-xs text-blue-200 mt-1">Birkat Al-Awamer, Al Wukair &bull; State of Qatar</p>
                  </div>

                  {/* Direct WhatsApp Callout */}
                  <a
                    href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20would%20like%20to%20inquire%20about%20One-Way%20Pallets"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs shadow-md transition-all"
                  >
                    <span>Instant WhatsApp Chat (+974 5119 1223)</span>
                  </a>

                  <div className="space-y-3 text-xs pt-1">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Mobile (Eng. Maher Marjy):</span>
                        <a href="tel:+97451191223" className="font-bold text-white hover:text-[#0099e5]">+974 5119 1223</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Office Telephone:</span>
                        <a href="tel:+97440394581" className="font-bold text-white hover:text-[#0099e5]">+974 4039 4581</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Sales Hotline:</span>
                        <a href="tel:+97466864923" className="font-bold text-white hover:text-[#0099e5]">+974 6686 4923</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Official Emails:</span>
                        <div className="flex flex-col space-y-0.5">
                          <a href="mailto:info@awmpack.com" className="font-bold text-white hover:text-[#0099e5]">info@awmpack.com</a>
                          <a href="mailto:maher@awmpack.com" className="text-blue-300 hover:text-white">maher@awmpack.com</a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 pt-2 border-t border-blue-800">
                      <MapPin className="w-4 h-4 text-[#0099e5] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Factory Address:</span>
                        <p className="text-gray-200 leading-relaxed">
                          Building No. 89, Street No. 3012, Zone No. 91,<br />
                          Birkat Al-Awamer, Al Wukair,<br />
                          State of Qatar (P.O. Box 12451)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-[#edf2f7] border border-gray-200 space-y-2 text-xs">
                  <h4 className="font-bold text-[#002b49]">No Pallet Return Obligation</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Once delivered to your overseas client, One-Way Pallets require zero return tracking or exchange accounting. Fully recyclable at destination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox Modal Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-[80vh]">
            <Image
              src={selectedImage}
              alt="One-Way Pallet Preview"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full text-xs font-bold transition-all"
            >
              &times; Close Preview
            </button>
          </div>
        </div>
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultTopic={contactTopic}
      />
    </div>
  );
}
