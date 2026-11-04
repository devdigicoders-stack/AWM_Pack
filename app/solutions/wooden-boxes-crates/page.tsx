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
  Ship,
  Anchor,
  Lock,
  Package,
  Wrench,
  Scale,
} from "lucide-react";

export default function WoodenBoxesCratesPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Wooden Boxes & Crates Inquiry");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "25",
    boxType: "Seaworthy Export Boxes (Barrier Foil & Desiccants)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const productCategories = [
    {
      num: "01",
      title: "WOODEN CRATES",
      description:
        "Engineered open-slatted timber framing designed for heavy equipment, valves, and components requiring ventilation, forklift lifting points, and maximum cost economy.",
      icon: Boxes,
      badge: "Open-Slat Framing",
    },
    {
      num: "02",
      title: "WOODEN BOXES",
      description:
        "Fully enclosed solid pine or industrial plywood boxes providing 360-degree protection against dust, moisture, impact shock, and theft during multi-modal transport.",
      icon: Package,
      badge: "Fully Enclosed Protection",
    },
    {
      num: "03",
      title: "SPECIAL PACKAGES",
      description:
        "Engineered internal cradles, CNC-cut foam padding, anti-vibration shock mounts, and custom saddles for sensitive instrumentation, aerospace, and energy assemblies.",
      icon: Sparkles,
      badge: "Custom Internal Engineered",
    },
    {
      num: "04",
      title: "SEAWORTHY BOXES",
      description:
        "Vacuum-sealed VCI barrier foil, heavy desiccant bags, and heavy-duty steel corner brackets engineered to withstand high humidity and rough ocean freight crossings.",
      icon: Ship,
      badge: "Ocean Cargo Certified",
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
            alt="Heavy-Duty Wooden Boxes and Export Crates in Qatar"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-105 contrast-105"
          />
          {/* High-clarity directional gradient: dark under text, crystal clear transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001424]/90 via-[#001c33]/60 via-50% to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#001424]/40 via-transparent to-black/20"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl space-y-3.5">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-xs font-semibold text-blue-200">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  <Link href="/solutions" className="hover:text-white transition-colors">Products &amp; Services</Link>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-[#0099e5] font-bold">Wooden Boxes &amp; Crates</span>
                </div>

                <div className="inline-flex items-center space-x-2 bg-[#0099e5]/25 border border-[#0099e5]/40 text-blue-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                  <Boxes className="w-3.5 h-3.5 text-[#0099e5]" />
                  <span>Industrial Heavy Packaging &bull; State of Qatar 🇶🇦</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    Wooden Boxes &amp; Crates
                  </h1>
                  <p className="text-blue-300 text-sm sm:text-base font-bold tracking-wide uppercase">
                    WOODEN BOXES AND CRATES &bull; Al Waad Manufacturing Packaging Company (AWMPC)
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                  Heavy-duty open crates, fully enclosed plywood boxes, special cushioning packaging, and certified seaworthy export enclosures built in Birkat Al-Awamer, Qatar.
                </p>

                <div className="pt-1.5 flex flex-wrap gap-3">
                  <button
                    onClick={() => setContactOpen(true)}
                    className="px-6 py-2.5 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Request Custom Crate Quote
                  </button>
                  <a
                    href="#categories"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    Explore 4 Product Types
                  </a>
                  <a
                    href="#quote"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    Submit Crate Dimensions
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Image with Lightbox Preview */}
              <div className="lg:col-span-6">
                <div
                  className="relative w-full h-[340px] sm:h-[440px] bg-[#f8fafc] border border-gray-200 rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => setSelectedImage("/wooden-boxes-crates-heavy.png")}
                >
                  <Image
                    src="/wooden-boxes-crates-heavy.png"
                    alt="AWMPC Industrial Wooden Boxes and Export Crates in Qatar"
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
                    <span>Heavy-Duty Seaworthy Export</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-200 shadow-md">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-[#002b49] block">Engineered Heavy Machinery Skids</span>
                        <span className="text-gray-500 text-[11px]">ISPM-15 Certified &bull; Birkat Al-Awamer Plant</span>
                      </div>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                        Up to 25+ Tons
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 text-center mt-2">
                  Click image to enlarge heavy industrial export crate construction.
                </p>
              </div>

              {/* Right Column: Exact Scraped Text */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5] block mb-1">
                    Heavy-Duty Export Containment
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                    WOODEN BOXES AND CRATES
                  </h2>
                </div>

                <div className="prose text-sm text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    <strong>Al Waad Manufacturing Packaging Company (AWMPC)</strong> manufactures and delivers a wide selection of standard and customized wooden pallet and packaging products for different applications, AWMPC provide excellent quality pallets to cater to the growing demands of leading manufacturing industries in Qatar to help them bring their products and showcase them to the global market.
                  </p>
                  <p>
                    Whether your shipment consists of massive oilfield drilling valves headed to Ras Laffan, precision electrical switchgears for Hamad International Airport expansion, or delicate museum artifacts, AWMPC designs and fabricates rigid wooden packaging matching exact weight, center-of-gravity, and transport dynamics.
                  </p>
                </div>

                <div className="pt-2 flex items-center space-x-4">
                  <button
                    onClick={() => {
                      setContactTopic("Wooden Boxes & Crates Quotation");
                      setContactOpen(true);
                    }}
                    className="px-6 py-3 bg-[#002b49] hover:bg-[#0099e5] text-white text-xs font-bold rounded-full transition-all shadow-md flex items-center space-x-2"
                  >
                    <span>Request Crate Pricing &amp; CAD Design</span>
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
            SECTION 2: PRODUCTS DESCRIPTION AND SPECIFICATIONS (Exact 4 Items)
            ========================================================================= */}
        <section className="py-20 bg-[#edf2f7] border-b border-gray-200" id="categories">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Products Description and Specifications
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                Our 4 Primary Wooden Enclosure Categories
              </h2>
              <p className="text-sm text-gray-600">
                Custom manufactured from structural timber, high-grade plywood, and galvanized corner steel according to international packaging standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productCategories.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <div
                    key={cat.num}
                    className="bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-xl hover:border-[#0099e5]/60 transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#003366] border border-blue-200 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                          <IconComponent className="w-6 h-6 text-[#0099e5]" />
                        </div>
                        <span className="text-xs font-black text-gray-300 group-hover:text-[#0099e5] transition-colors">
                          {cat.num}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0099e5] block mb-1">
                          {cat.badge}
                        </span>
                        <h3 className="text-lg font-black text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                          {cat.title}
                        </h3>
                      </div>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center text-[11px] font-bold text-[#0099e5]">
                      <span>ISPM-15 Certified</span>
                      <CheckCircle2 className="w-3.5 h-3.5 ml-1.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: TECHNICAL CAPABILITIES MATRIX
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="specifications">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Engineering Specifications
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight mt-1">
                Boxes &amp; Crates Engineering Specifications
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Certified dimensions, moisture barrier protection, and heavy structural timbers.
              </p>
            </div>

            <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Dimensions
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700 font-bold text-[#0099e5]">
                    Custom fabricated to exact payload dimensions (Lengths up to 12+ meters, heights up to 4+ meters)
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Standards
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700 font-semibold">
                    IPPC ISPM-15 heat treated, ASTM D6039 / ASTM D6251, DIN EN standards for export packaging
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Materials
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700">
                    Solid pine timber, birch/pine waterproof plywood (9 mm – 25 mm), heavy steel corner angles, bolted lifting lugs
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Seaworthy Packaging
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700 leading-relaxed">
                    Aluminum barrier foil with nitrogen flushing or desiccant bags, VCI corrosion-inhibiting liners, bitumen paper roof underlay, and exterior weather-resistant paint.
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Quotation Form */}
              <div className="lg:col-span-7 bg-[#f8fafc] border border-gray-200 p-8 sm:p-10 rounded-3xl shadow-sm">
                <div className="space-y-2 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                    Fast Factory Quotation
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#002b49]">
                    Get A Quote for Wooden Boxes &amp; Crates
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Looking for customized packaging solutions? Get in touch with us today for a personalized quote. Our team is ready to provide competitive pricing and expert guidance tailored to your project needs.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-black">Crate Request Received!</h4>
                    <p className="text-xs text-emerald-700">
                      Our factory engineering department in Birkat Al-Awamer will examine your equipment dimensions and return a formal CAD drawing and commercial quotation within 2 business hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2 bg-emerald-600 text-white rounded-full text-xs font-bold hover:bg-emerald-700 transition-all"
                    >
                      Submit Another Specification
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
                          Select Packaging Type *
                        </label>
                        <select
                          value={formData.boxType}
                          onChange={(e) => setFormData({ ...formData, boxType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        >
                          <option value="WOODEN CRATES (Open Slat)">WOODEN CRATES (Open-Slat Machinery Framing)</option>
                          <option value="WOODEN BOXES (Fully Enclosed)">WOODEN BOXES (Fully Enclosed Solid/Plywood)</option>
                          <option value="WOODEN BOXES SPECIAL PACKAGES">WOODEN BOXES SPECIAL PACKAGES (Shock Dampened)</option>
                          <option value="SEAWORTHY BOXES (VCI / Foil)">SEAWORTHY BOXES (Vacuum Barrier Foil &amp; Desiccant)</option>
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
                          <option value="1-5">1 &ndash; 5 Units (Custom Project Batch)</option>
                          <option value="10-25">10 &ndash; 25 Units</option>
                          <option value="50-100">50 &ndash; 100 Units</option>
                          <option value="100+">100+ Units (Enterprise Supply Schedule)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Dimensions (L &times; W &times; H) &amp; Total Payload Weight (kg)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please specify internal payload dimensions, equipment weight, fragile points, and delivery site in Qatar."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#002b49] hover:bg-[#0099e5] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Crate Request</span>
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
                    href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20would%20like%20to%20inquire%20about%20Wooden%20Boxes%20and%20Crates"
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
                  <h4 className="font-bold text-[#002b49]">On-Site Crating Services in Qatar</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Our mobile packaging technicians can travel directly to your facility in Ras Laffan, Mesaieed, or Doha Industrial Area to measure, brace, and crate heavy machinery on-site.
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
              alt="Wooden Box Preview"
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
