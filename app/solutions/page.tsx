"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import {
  Package,
  Truck,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Leaf,
  Boxes,
  RotateCcw,
  Zap,
  BarChart3,
  Award,
  Download,
  Activity,
  Cpu,
  ChevronRight,
  Search,
  Phone,
  Flame,
  Recycle,
} from "lucide-react";

export default function SolutionsPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Standard Wooden Pallets");

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#002b49] selection:bg-blue-100 selection:text-[#003366]">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("General Pallet & Crating Solutions");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* =========================================================================
            SOLUTIONS HERO
            ========================================================================= */}
        <section className="relative bg-[#00223a] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
              alt="AWMPACK Industrial Wooden Pallets & Crates Facility"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <span className="inline-block bg-[#0099e5]/20 border border-[#0099e5]/40 text-[#0099e5] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                AWMPACK Product Portfolio • State of Qatar 🇶🇦
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Industrial Pallets, Custom Crates &amp; Wood Recycling Solutions
              </h1>
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl">
                Al Waad Manufacturing Packaging Company (AWMPC) supplies Qatar&apos;s leading oil &amp; gas, infrastructure, and manufacturing enterprises with certified ISPM 15 heat-treated pallets, heavy crates, and eco-friendly compressed wood blocks.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setContactTopic("Custom Pallet Engineering Consultation");
                    setContactOpen(true);
                  }}
                  className="px-8 py-3.5 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-sm rounded-full shadow-lg transition-all"
                >
                  Request Technical Quotation
                </button>
                <Link
                  href="/engineering#ispm15"
                  className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm rounded-full backdrop-blur-sm transition-all"
                >
                  ISPM 15 Heat Treatment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Nav Anchor Bar */}
        <div className="sticky top-[73px] z-30 bg-[#edf2f7] border-b border-gray-200 py-3 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto text-xs font-bold whitespace-nowrap gap-4">
            <span className="text-gray-400 uppercase tracking-wider hidden sm:inline">Jump to:</span>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <a href="#pallets" className="text-[#002b49] hover:text-[#0099e5] px-2.5 py-1 rounded-md hover:bg-white/80">Pallets</a>
              <a href="#crates" className="text-[#002b49] hover:text-[#0099e5] px-2.5 py-1 rounded-md hover:bg-white/80">Boxes &amp; Crates</a>
              <a href="#materials" className="text-[#002b49] hover:text-[#0099e5] px-2.5 py-1 rounded-md hover:bg-white/80">Sawdust Blocks &amp; Materials</a>
              <a href="#treatments" className="text-[#002b49] hover:text-[#0099e5] px-2.5 py-1 rounded-md hover:bg-white/80">ISPM 15 &amp; Services</a>
            </div>
            <button
              onClick={() => {
                setContactTopic("Custom Pallets Quote");
                setContactOpen(true);
              }}
              className="text-[#0099e5] hover:underline font-bold"
            >
              Get Factory Quote →
            </button>
          </div>
        </div>

        {/* =========================================================================
            SECTION 1: PALLET MANUFACTURING
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="pallets">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Core Production
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight mt-1">
                Industrial Pallet Manufacturing
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Manufactured in our Birkat Al-Awamer automated production plant adhering to strict international load-bearing standards and dimensions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 1. Standard Wooden Pallets */}
              <div id="wooden-pallets" className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#003366] flex items-center justify-center font-bold">
                    <Package className="w-6 h-6 text-[#0099e5]" />
                  </div>
                  <h3 className="text-xl font-black text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                    Standard Wooden Pallets
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Heavy-duty 4-way and 2-way entry pallets built to standard Euro (1200x800mm) and GMA industrial specifications (1200x1000mm).
                  </p>
                  <ul className="text-xs text-gray-700 space-y-2 pt-2 border-t border-gray-200">
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Static load rating up to 4,000 kg</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Precision automated nailing</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Certified ISPM 15 heat-treated</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setContactTopic("Standard Wooden Pallets Quote");
                      setContactOpen(true);
                    }}
                    className="w-full text-center py-2 px-4 rounded-full bg-white border border-gray-300 text-xs font-bold text-[#002b49] hover:bg-[#003366] hover:text-white hover:border-[#003366] transition-all"
                  >
                    Inquire About Standard Pallets
                  </button>
                </div>
              </div>

              {/* 2. Custom Engineered Pallets */}
              <div id="custom-pallets" className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#003366] flex items-center justify-center font-bold">
                    <Layers className="w-6 h-6 text-[#0099e5]" />
                  </div>
                  <h3 className="text-xl font-black text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                    Custom / Special Pallets
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Bespoke pallets engineered to exact client payload geometry for chemical drums, heavy machinery, piping spools, and oversized cargo.
                  </p>
                  <ul className="text-xs text-gray-700 space-y-2 pt-2 border-t border-gray-200">
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Custom dimensions &amp; notch positions</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Reinforced bottom chamfered deckboards</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Engineered for Ras Laffan / Mesaieed</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setContactTopic("Custom Pallet Engineering");
                      setContactOpen(true);
                    }}
                    className="w-full text-center py-2 px-4 rounded-full bg-white border border-gray-300 text-xs font-bold text-[#002b49] hover:bg-[#003366] hover:text-white hover:border-[#003366] transition-all"
                  >
                    Inquire Custom Engineering
                  </button>
                </div>
              </div>

              {/* 3. Heavy Metal Pallets */}
              <div id="metal-pallets" className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#003366] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-6 h-6 text-[#0099e5]" />
                  </div>
                  <h3 className="text-xl font-black text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                    Heavy Metal Pallets
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Galvanized and painted steel pallets engineered for extreme load conditions, chemical resistance, fire prevention, and outdoor yard storage.
                  </p>
                  <ul className="text-xs text-gray-700 space-y-2 pt-2 border-t border-gray-200">
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Extreme dynamic capacity (5,000+ kg)</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Corrosion-resistant galvanized steel</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Flame-proof &amp; hygienic wash-down</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setContactTopic("Metal Pallets Inquiry");
                      setContactOpen(true);
                    }}
                    className="w-full text-center py-2 px-4 rounded-full bg-white border border-gray-300 text-xs font-bold text-[#002b49] hover:bg-[#003366] hover:text-white hover:border-[#003366] transition-all"
                  >
                    Inquire Metal Pallets
                  </button>
                </div>
              </div>

              {/* 4. One-Way & Half Pallets */}
              <div id="one-way-pallets" className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#003366] flex items-center justify-center font-bold">
                    <Boxes className="w-6 h-6 text-[#0099e5]" />
                  </div>
                  <h3 className="text-xl font-black text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                    One-Way &amp; Half Pallets
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Lightweight cost-optimized export pallets and 600x800mm display half-pallets designed for retail distribution and non-returnable air/sea shipments.
                  </p>
                  <ul className="text-xs text-gray-700 space-y-2 pt-2 border-t border-gray-200">
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Cost-effective export solution</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>ISPM 15 treated with export stamp</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Low tare weight reduces freight fees</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setContactTopic("One-Way Export Pallets");
                      setContactOpen(true);
                    }}
                    className="w-full text-center py-2 px-4 rounded-full bg-white border border-gray-300 text-xs font-bold text-[#002b49] hover:bg-[#003366] hover:text-white hover:border-[#003366] transition-all"
                  >
                    Inquire One-Way Pallets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: BOXES, CRATES & COLLARS
            ========================================================================= */}
        <section className="py-20 bg-[#edf2f7] border-b border-gray-200" id="crates">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Protective Packaging
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight mt-1">
                Wooden Boxes, Export Crates &amp; Pallet Collars
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Heavy timber and plywood enclosures designed for sensitive machinery, offshore equipment, and trans-continental marine shipping.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Heavy Wooden Boxes */}
              <div id="wooden-boxes" className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-[#003366]">
                  Heavy Machinery
                </span>
                <h3 className="text-lg font-black text-[#002b49] mt-3">
                  Heavy Wooden Boxes
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mt-2">
                  Constructed from high-grade solid timber with reinforced internal blocking and bracing to prevent shifting during rough sea and road handling.
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-[#0099e5]">Full ISPM 15 Compliance</span>
                </div>
              </div>

              {/* Custom Export Crates */}
              <div id="custom-crates" className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Seaworthy Export
                </span>
                <h3 className="text-lg font-black text-[#002b49] mt-3">
                  Custom Export Crates
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mt-2">
                  Open-slat or fully sheathed plywood crates equipped with corrosion-inhibiting VCI barrier foil and active desiccants for maritime transit via Hamad Port.
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-[#0099e5]">Lifting Lug &amp; Skid Ready</span>
                </div>
              </div>

              {/* Pallet Collars */}
              <div id="pallet-collars" className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                  Modular Bulk Storage
                </span>
                <h3 className="text-lg font-black text-[#002b49] mt-3">
                  Hinged Pallet Collars
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mt-2">
                  Foldable wooden collar frames with galvanized steel corner hinges. Stackable up to 5 tiers to instantly convert any standard pallet into a rigid bulk bin.
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-[#0099e5]">Folds Flat When Empty</span>
                </div>
              </div>

              {/* Metal Cages & Stillages */}
              <div id="metal-cages" className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-800">
                  High Security Transit
                </span>
                <h3 className="text-lg font-black text-[#002b49] mt-3">
                  Metal Cages &amp; Stillages
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mt-2">
                  Welded wire mesh and structural steel storage stillages with half-drop gates for rapid access on busy warehouse and factory floors.
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-[#0099e5]">Stackable 4-High</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: COMPRESSED SAWDUST BLOCKS & RECYCLING
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="materials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Waste to Usable Product
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                  Compressed Sawdust Wood Blocks
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  AWMPACK operates Qatar&apos;s pioneering wood recycling technology. By collecting clean industrial wood scrap, sawdust, and shavings, we compress them into dense, water-resistant pallet corner blocks under extreme heat and pressure.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-gray-200">
                    <h4 className="text-sm font-bold text-[#002b49]">Uniform Dimensional Stability</h4>
                    <p className="text-xs text-gray-600 mt-1">Zero knots, cracks, or warping. Consistent density provides superior nail retention and load support.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-gray-200">
                    <h4 className="text-sm font-bold text-[#002b49]">Naturally Pest &amp; Fungi Free</h4>
                    <p className="text-xs text-gray-600 mt-1">High-temperature extrusion processes naturally sterilize the material, exempting it from insect quarantine.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/sustainability#waste-to-product"
                    className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md transition-all"
                  >
                    Explore our Circular Recycling Program
                  </Link>
                </div>
              </div>

              {/* Right Side: Compressed Blocks Showcase */}
              <div className="lg:col-span-5 bg-[#00223a] text-white p-8 rounded-3xl space-y-4">
                <Recycle className="w-10 h-10 text-emerald-400" />
                <h3 className="text-2xl font-black text-white">Sustainable Qatari Innovation</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Instead of burning wood scraps or filling municipal landfills, AWMPACK recycles thousands of tons of wood each year, converting waste into structural components for the national economy.
                </p>
                <div className="pt-4 border-t border-blue-900/60 text-xs space-y-2 text-blue-200">
                  <p>✔ 100% Recycled Timber Biomass</p>
                  <p>✔ Water-Resistant Resins</p>
                  <p>✔ Supporting Qatar National Vision 2030</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: ISPM 15 HEAT TREATMENT & PALLET REPAIR
            ========================================================================= */}
        <section className="py-20 bg-[#edf2f7]" id="treatments">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Certified Treatments &amp; Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight mt-1">
                ISPM 15 Thermal Treatment, Pallet Repair &amp; Pooling
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Everything required to keep your transport packaging compliant with international trade laws and operating at peak cost efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* ISPM 15 Heat Treatment */}
              <div id="ispm-card" className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
                <div className="p-3 bg-blue-50 text-[#0099e5] rounded-xl w-fit">
                  <Flame className="w-6 h-6 text-[#0099e5]" />
                </div>
                <h3 className="text-xl font-black text-[#002b49]">
                  ISPM 15 Heat Treatment
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Thermal chambers heat core wood to 56°C for a minimum of 30 continuous minutes. Stamped with Qatar IPPC mark for seamless international port clearance.
                </p>
                <Link
                  href="/engineering#ispm15"
                  className="inline-flex items-center text-xs font-bold text-[#0099e5] hover:text-[#0077b6] pt-2"
                >
                  <span>Learn about HT standards</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>

              {/* Pallet Repair & Sorting */}
              <div id="pallet-repair" className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
                <div className="p-3 bg-blue-50 text-[#0099e5] rounded-xl w-fit">
                  <RotateCcw className="w-6 h-6 text-[#0099e5]" />
                </div>
                <h3 className="text-xl font-black text-[#002b49]">
                  Pallet Repair &amp; Sorting
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We inspect your damaged pallet inventory, replace broken deckboards or stringers, and test structural integrity, saving up to 50% vs buying brand new.
                </p>
                <button
                  onClick={() => {
                    setContactTopic("Pallet Repair & Sorting Service");
                    setContactOpen(true);
                  }}
                  className="inline-flex items-center text-xs font-bold text-[#0099e5] hover:text-[#0077b6] pt-2 text-left"
                >
                  <span>Book pallet sorting audit</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>

              {/* Closed-Loop Pallet Pooling */}
              <div id="pallet-pooling" className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
                <div className="p-3 bg-blue-50 text-[#0099e5] rounded-xl w-fit">
                  <Truck className="w-6 h-6 text-[#0099e5]" />
                </div>
                <h3 className="text-xl font-black text-[#002b49]">
                  Closed-Loop Pallet Pooling
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  End-to-end asset management across Qatari warehouses. We deliver conditioned pallets just-in-time, collect used pallets, and maintain your logistics flow.
                </p>
                <button
                  onClick={() => {
                    setContactTopic("Pallet Pooling Setup");
                    setContactOpen(true);
                  }}
                  className="inline-flex items-center text-xs font-bold text-[#0099e5] hover:text-[#0077b6] pt-2 text-left"
                >
                  <span>Setup pooling contract</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
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
        defaultTopic={contactTopic}
      />
    </div>
  );
}