"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SearchModal from "../../../components/SearchModal";
import ContactModal from "../../../components/ContactModal";
import {
  Recycle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Leaf,
  Layers,
  Send,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Sparkles,
  TreePine,
  DollarSign,
  Maximize2,
  Award,
  Check,
  Zap,
} from "lucide-react";

export default function CompressedSawdustWoodBlocksPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Compressed Sawdust Wood Blocks Inquiry");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "5000",
    blockSize: "90 x 90 x 90 mm (Standard Euro Core)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrapedBenefits = [
    {
      num: "01",
      title: "Extremely Durable Construction",
      description:
        "Sawdust Blocks / Compressed Wooden Pallet Blocks made in our factory are durable and designed for multi-trip industrial pallet circulation.",
      icon: ShieldCheck,
    },
    {
      num: "02",
      title: "High Density Wood Chips",
      description:
        "They have a very high density of compressed wood chips (>580–620 kg/m³), resisting splitting, crushing, and fork-tine impacts.",
      icon: Layers,
    },
    {
      num: "03",
      title: "Twice the Nail-Gripping Strength",
      description:
        "These pallet blocks provide twice the nail-gripping strength of standard solid wood blocks, preventing deckboard loosening.",
      icon: Zap,
    },
    {
      num: "04",
      title: "Biodegradable & Eco-Friendly",
      description:
        "These compressed wooden blocks are biodegradable and environmentally friendly, turning industrial wood waste into usable circular products.",
      icon: Leaf,
    },
    {
      num: "05",
      title: "No Heat Treatment Needed",
      description:
        "They do not need heat treatment! Formed under extreme thermal compression exceeding 150°C, making them inherently pest-free and ISPM-15 exempt.",
      icon: Award,
    },
    {
      num: "06",
      title: "Improved Dimensional Consistency",
      description:
        "Automated hydraulic extrusion molds guarantee sub-millimeter dimensional precision, essential for robotic pallet assembly lines.",
      icon: Maximize2,
    },
  ];

  const scrapedFeatures = [
    {
      title: "Fine Finished",
      description: "Smooth outer surface with no splintering or rough edges, protecting warehouse staff and packaging film.",
    },
    {
      title: "Compact Size",
      description: "Precision-molded with center core holes (32 mm / 40 mm) for reduced weight and superior nail anchoring.",
    },
    {
      title: "Reasonable Price",
      description: "Significantly more economical than solid timber blocks, lowering overall pallet production costs.",
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
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=90&w=2400&auto=format&fit=crop"
            alt="Compressed Sawdust Wood Blocks Manufacturing in Qatar"
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
                  <span className="text-[#0099e5] font-bold">Compressed Sawdust Wood Blocks</span>
                </div>

                <div className="inline-flex items-center space-x-2 bg-emerald-500/25 border border-emerald-400/40 text-emerald-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                  <Recycle className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Waste to Usable Product &bull; Circular Economy 🇶🇦</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    Compressed Sawdust Wood Blocks
                  </h1>
                  <p className="text-blue-300 text-sm sm:text-base font-bold tracking-wide uppercase">
                    High-Density Eco Pallet Blocks &bull; Twice the Nail-Gripping Strength
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                  Pioneering wood recycling technology in Birkat Al-Awamer, Qatar. Converting clean industrial sawdust into durable, dimensionally consistent, pest-free pallet blocks.
                </p>

                <div className="pt-1.5 flex flex-wrap gap-3">
                  <button
                    onClick={() => setContactOpen(true)}
                    className="px-6 py-2.5 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Request Wood Blocks Quote
                  </button>
                  <a
                    href="#benefits"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    View All 6 Benefits
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
            SECTION 1: OVERVIEW & SCRAPED BENEFITS (From awmpack.com)
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="overview">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Visual with Fallback */}
              <div className="lg:col-span-6">
                <div
                  className="relative w-full h-[340px] sm:h-[440px] bg-[#f8fafc] border border-gray-200 rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => setSelectedImage("https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop")}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"
                    alt="Compressed Sawdust Wood Blocks in Qatar"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-800/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm flex items-center space-x-1.5">
                    <Recycle className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Waste to Usable Product</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-200 shadow-md">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-[#002b49] block">2&times; Nail-Gripping Strength</span>
                        <span className="text-gray-500 text-[11px]">ISPM-15 Exempt &bull; High-Density Recycled Timber</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        100% Eco-Friendly
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 text-center mt-2">
                  Click image to enlarge high-density compressed sawdust block texture.
                </p>
              </div>

              {/* Right Column: Scraped Copy & 3 Core Features */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5] block mb-1">
                    Circular Wood Economy
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                    Compressed Sawdust Wood Blocks
                  </h2>
                </div>

                <div className="prose text-sm text-gray-600 space-y-3 leading-relaxed">
                  <p>
                    <strong>Al Waad Manufacturing Packaging Company (AWMPC)</strong> is proud to operate Qatar&apos;s pioneering industrial wood block extrusion plant in Birkat Al-Awamer. By capturing clean timber off-cuts, shaving residue, and sawdust from local manufacturing, we produce dense, high-performance pallet blocks.
                  </p>
                  <p>
                    Because these blocks are molded under extreme hydraulic pressure and heat exceeding 150&deg;C, they are naturally pest-free, eliminating the need for additional kiln heat-treatment.
                  </p>
                </div>

                {/* Scraped Features Component */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {scrapedFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="p-3.5 rounded-2xl bg-[#edf2f7] border border-gray-200/80 space-y-1">
                      <span className="text-xs font-black text-[#002b49] block">
                        {feat.title}
                      </span>
                      <p className="text-[11px] text-gray-600 leading-tight">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center space-x-4">
                  <button
                    onClick={() => {
                      setContactTopic("Compressed Sawdust Wood Blocks Inquiry");
                      setContactOpen(true);
                    }}
                    className="px-6 py-3 bg-[#002b49] hover:bg-[#0099e5] text-white text-xs font-bold rounded-full transition-all shadow-md flex items-center space-x-2"
                  >
                    <span>Request Pallet Blocks Pricing</span>
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
            SECTION 2: ALL 6 BENEFITS (Exact Items from awmpack.com)
            ========================================================================= */}
        <section className="py-20 bg-[#edf2f7] border-b border-gray-200" id="benefits">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Proven Technical Advantages
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                Benefits of AWMPC Compressed Sawdust Blocks
              </h2>
              <p className="text-sm text-gray-600">
                Engineered to surpass standard solid wood blocks in strength, consistency, and cost-efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scrapedBenefits.map((b) => {
                const IconComponent = b.icon;
                return (
                  <div
                    key={b.num}
                    className="bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-xl hover:border-[#0099e5]/60 transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-black text-gray-300 group-hover:text-[#0099e5] transition-colors">
                          {b.num}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                        {b.title}
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        {b.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center text-[11px] font-bold text-emerald-700">
                      <span>AWMPC Certified Quality</span>
                      <CheckCircle2 className="w-3.5 h-3.5 ml-1.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: SPECIFICATIONS TABLE
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="specifications">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Molding Parameters
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight mt-1">
                Wood Blocks Technical Specifications
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Certified dimensions and extrusion parameters manufactured in Birkat Al-Awamer, Qatar.
              </p>
            </div>

            <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Standard Block Sizes
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700 font-bold text-[#0099e5]">
                    90 &times; 90 &times; 90 mm, 100 &times; 100 &times; 90 mm, 145 &times; 100 &times; 78 mm, 145 &times; 145 &times; 78 mm (Custom lengths available)
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Density &amp; Composition
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700 font-semibold">
                    &gt; 580 &ndash; 620 kg/m&sup3; high-density compressed softwood chips bonded with eco-friendly water-resistant thermosetting resin.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Center Core Hole
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700">
                    Precision molded center core hole (32 mm or 40 mm diameter) to optimize tare weight while providing maximum structural compression integrity.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Phytosanitary &amp; ISPM 15 Status
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700 leading-relaxed">
                    Exempt from separate thermal kiln heat treatment under IPPC ISPM-15 Annex 1, as the manufacturing process utilizes extreme pressure and temperatures exceeding 150&deg;C.
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
                    Get A Quote for Compressed Sawdust Blocks
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Looking for customized packaging solutions? Get in touch with us today for a personalized quote. Our team is ready to provide competitive pricing and expert guidance tailored to your project needs.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-black">Sawdust Block Request Received!</h4>
                    <p className="text-xs text-emerald-700">
                      Our commercial sales desk in Birkat Al-Awamer will calculate your container/truckload pricing and respond within 2 business hours.
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
                          Required Block Size *
                        </label>
                        <select
                          value={formData.blockSize}
                          onChange={(e) => setFormData({ ...formData, blockSize: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        >
                          <option value="90 x 90 x 90 mm (Standard Euro Core)">90 &times; 90 &times; 90 mm (Standard Euro Core)</option>
                          <option value="100 x 100 x 90 mm (Industrial Core)">100 &times; 100 &times; 90 mm (Industrial Block)</option>
                          <option value="145 x 100 x 78 mm (Euro Center Block)">145 &times; 100 &times; 78 mm (Euro Center Block)</option>
                          <option value="145 x 145 x 78 mm (Corner Heavy)">145 &times; 145 &times; 78 mm (Corner Block)</option>
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
                          <option value="1000">1,000 Pieces (Trial Batch)</option>
                          <option value="5000">5,000 Pieces (Standard Pallet Run)</option>
                          <option value="10000">10,000 Pieces (Full Flatbed Truckload)</option>
                          <option value="25000+">25,000+ Pieces (Monthly Industrial Supply)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Specific Delivery Address or Nailing Machine Details
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="State your pallet manufacturer specifications, automated nailing line model, or delivery destination in Qatar."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#002b49] hover:bg-[#0099e5] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Wood Blocks RFQ</span>
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
                    href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20would%20like%20to%20inquire%20about%20Compressed%20Sawdust%20Wood%20Blocks"
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
                  <h4 className="font-bold text-[#002b49]">Bulk Supply to Pallet Manufacturers</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We supply pallet manufacturers, joineries, and logistics hubs across Qatar with strapped pallet loads of compressed blocks ready for immediate automated nailing.
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
              alt="Sawdust Block Preview"
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
