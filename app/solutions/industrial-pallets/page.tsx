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
  Leaf,
  Layers,
  Scale,
  Send,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Sparkles,
  Truck,
  Check,
  Factory,
} from "lucide-react";

export default function IndustrialPalletsPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Industrial Pallets (1200 x 1000)");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "500",
    entryType: "4-Way Entry (Standard)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const keyFeatures = [
    {
      num: "01",
      title: "Enhanced Load Stability",
      description:
        "The 1200 x 1000 mm perimeter base provides wider weight distribution, significantly reducing product damage during automated warehouse handling and road haulage.",
      icon: Scale,
    },
    {
      num: "02",
      title: "Automated Facility Integration",
      description:
        "Engineered with tight dimensional tolerances for smooth flow through high-bay ASRS racking, roller conveyors, and automated stretch wrappers across Qatar.",
      icon: Factory,
    },
    {
      num: "03",
      title: "Versatile 4-Way / 2-Way Entry",
      description:
        "Guarantees seamless compatibility with all standard forklifts, electric reach trucks, and pallet jacks, ensuring safer workplace logistics.",
      icon: Truck,
    },
    {
      num: "04",
      title: "ISPM 15 & Kiln Dried Timber",
      description:
        "Produced with kiln-dried pine and certified hardwoods, heat-treated in our thermal chambers for border export compliance.",
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
            alt="Heavy Duty Industrial Pallets Manufacturing in Qatar"
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
                  <span className="text-[#0099e5] font-bold">Industrial Pallets</span>
                </div>

                <div className="inline-flex items-center space-x-2 bg-[#0099e5]/25 border border-[#0099e5]/40 text-blue-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                  <Boxes className="w-3.5 h-3.5 text-[#0099e5]" />
                  <span>Heavy-Duty Standards &bull; State of Qatar 🇶🇦</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    Industrial Pallets
                  </h1>
                  <p className="text-blue-300 text-sm sm:text-base font-bold tracking-wide uppercase">
                    Robust Solutions for Industrial Needs &bull; 1200 &times; 1000 &times; 145 mm
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                  Engineered to withstand heavy dynamic loads, reduce cargo damage, and integrate smoothly into automated racking and supply chain systems across Qatar.
                </p>

                <div className="pt-1.5 flex flex-wrap gap-3">
                  <button
                    onClick={() => setContactOpen(true)}
                    className="px-6 py-2.5 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Request Industrial Pallet Quote
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
                    Get Factory Pricing
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
              {/* Left Column: Industrial Pallet Image */}
              <div className="lg:col-span-6">
                <div
                  className="relative w-full h-[340px] sm:h-[440px] bg-[#f8fafc] border border-gray-200 rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => setSelectedImage("/industrial-pallets-heavy.png")}
                >
                  <Image
                    src="/industrial-pallets-heavy.png"
                    alt="AWMPC 1200 x 1000 Industrial Pallets in Qatar"
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
                    <Boxes className="w-3.5 h-3.5 text-[#0099e5]" />
                    <span>Heavy-Duty 1200 &times; 1000 mm</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-200 shadow-md">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-[#002b49] block">Dynamic Load: Up to 2,500 kg</span>
                        <span className="text-gray-500 text-[11px]">4-Way &amp; 2-Way Entry &bull; Birkat Al-Awamer Plant</span>
                      </div>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                        ISO &amp; ISPM 15
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 text-center mt-2">
                  Click image to enlarge 1200 &times; 1000 industrial pallet construction.
                </p>
              </div>

              {/* Right Column: Exact Scraped Text */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5] block mb-1">
                    Heavy-Duty Storage &amp; Transport
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                    Robust Solutions for Industrial Needs
                  </h2>
                </div>

                <div className="prose text-sm text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    <strong>Industrial Pallets are essential across many sectors</strong>, playing a crucial role in reducing product damage and enhancing load stability due to their inherently strong construction. These pallets are designed to boost operational productivity, making them ideal for integration into automated production and warehousing facilities.
                  </p>
                  <p>
                    <strong>The standard 1200 x 1000 Industrial Pallet</strong> significantly improves efficiency in both storage and transport. Available in both <strong>4-way and 2-way entry designs</strong>, they guarantee compatibility with all standard handling equipment, ultimately contributing to a safer and more efficient workplace.
                  </p>
                  <p>
                    Whether your operations require heavy block pallets for petrochemical drums in Mesaieed or rugged stringer pallets for construction blocks in Lusail, AWMPC manufactures every unit with precision-cut European timber and certified structural ring nails.
                  </p>
                </div>

                <div className="pt-2 flex items-center space-x-4">
                  <button
                    onClick={() => {
                      setContactTopic("Industrial Pallets (1200 x 1000) Quotation");
                      setContactOpen(true);
                    }}
                    className="px-6 py-3 bg-[#002b49] hover:bg-[#0099e5] text-white text-xs font-bold rounded-full transition-all shadow-md flex items-center space-x-2"
                  >
                    <span>Request Industrial Pallet Pricing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="tel:+97451191223"
                    className="text-xs font-bold text-[#0099e5] hover:underline flex items-center space-x-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+974 5119 1223 (Technical Team)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: 4 KEY INDUSTRIAL PILLARS
            ========================================================================= */}
        <section className="py-20 bg-[#edf2f7] border-b border-gray-200" id="pillars">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Engineered for Heavy Duty
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                Why Qatari Industries Rely on AWMPC Industrial Pallets
              </h2>
              <p className="text-sm text-gray-600">
                Designed to handle the heaviest industrial payloads across oil &amp; gas, infrastructure, and international logistics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((feat) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={feat.num}
                    className="bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-xl hover:border-[#0099e5]/60 transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#003366] border border-blue-200 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                          <IconComponent className="w-6 h-6 text-[#0099e5]" />
                        </div>
                        <span className="text-xs font-black text-gray-300 group-hover:text-[#0099e5] transition-colors">
                          {feat.num}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                        {feat.title}
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center text-[11px] font-bold text-[#0099e5]">
                      <span>Heavy Duty Certified</span>
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
                Standard Technical Matrix
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight mt-1">
                Industrial Pallets Specifications
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Certified dimensions and manufacturing parameters from Al Waad Manufacturing Packaging Company.
              </p>
            </div>

            <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Dimensions
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700 font-bold text-[#0099e5]">
                    1200 &times; 1000 &times; 145 mm (Standard Industrial Footprint)
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Standards
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700">
                    Customizable to your specifications, including IPPC ISPM-15 heat treatment, kiln drying, and certified nails.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Material
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700">
                    Available in various soft and hard woods (e.g., pine, spruce, poplar, alder, beech, etc.)
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Entry Options
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700">
                    Typically 4-way entry (perimeter base block pallet), with 2-way entry available if produced with stringers.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Load Capacities
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700">
                    Dynamic Load: 1,500 – 2,500 kg | Static Load: Up to 6,000 kg | Racking Load: Up to 1,500 kg
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
                    Get A Quote for Industrial Pallets
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Looking for customized packaging solutions? Get in touch with us today for a personalized quote. Our team is ready to provide competitive pricing and expert guidance tailored to your project needs.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-black">Industrial Pallet Request Received!</h4>
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
                          Entry Design Option *
                        </label>
                        <select
                          value={formData.entryType}
                          onChange={(e) => setFormData({ ...formData, entryType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        >
                          <option value="4-Way Entry (Standard)">4-Way Entry (Block Pallet - Standard)</option>
                          <option value="2-Way Entry (Heavy Stringer)">2-Way Entry (Heavy Stringer Pallet)</option>
                          <option value="Full Perimeter Base">Full Perimeter Base (Racking Optimal)</option>
                          <option value="Chemical CP Specification">Chemical Standard CP Footprint</option>
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
                          <option value="500">500 Units (Standard Production Run)</option>
                          <option value="1000">1,000 Units (Volume Discount)</option>
                          <option value="2500+">2,500+ Units (Enterprise Supply Contract)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Specific Load or Heat Treatment Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="State your payload weight per pallet, racking usage, and delivery location in Qatar."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#002b49] hover:bg-[#0099e5] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Industrial Pallet RFQ</span>
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
                    href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20would%20like%20to%20inquire%20about%20Industrial%20Pallets%20(1200x1000)"
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
                        <span className="text-gray-400 block text-[10px]">Mobile (Technical Team):</span>
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
                  <h4 className="font-bold text-[#002b49]">Certified Heat Treatment Included</h4>
                  <p className="text-gray-600 leading-relaxed">
                    All industrial pallets can be delivered with official IPPC ISPM-15 heat treatment stamps and phytosanitary certificates for export through Hamad Port or Qatar air freight terminals.
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
              alt="Industrial Pallet Preview"
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

