"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import GreenCalcCalculator from "../../components/GreenCalcCalculator";
import {
  Leaf,
  Recycle,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingDown,
  Award,
  FileText,
  BarChart2,
  TreePine,
  Sun,
  Flame,
  Users,
  Building2,
  Scale,
  Sparkles,
  Layers,
} from "lucide-react";

export default function SustainabilityPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Wood Waste Recycling Program");

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#002b49] selection:bg-blue-100 selection:text-[#003366]">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("Sustainability Consultation");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* =========================================================================
            SUSTAINABILITY HERO
            ========================================================================= */}
        <section className="relative w-full h-[360px] sm:h-[400px] lg:h-[440px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop"
            alt="Sustainable forestry and wood recycling"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001829]/95 via-[#00223a]/75 to-emerald-950/35"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl space-y-3.5">
                <div className="inline-flex items-center space-x-2 bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 text-[11px] sm:text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                  <span>Waste to Usable Product • Circular Economy</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                    Pioneering Sustainable Pallet Manufacturing &amp; Wood Recycling in Qatar
                  </h1>
                  <p className="text-emerald-300 text-xs sm:text-sm font-bold tracking-wide uppercase">
                    Al Waad Manufacturing Packaging Company (AWMPC)
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                  Al Waad Manufacturing Packaging Company (AWMPC) is dedicated to reducing industrial wood waste and lowering carbon footprints across Qatari supply chains by converting sawdust into compressed pallet blocks.
                </p>

                <div className="pt-1.5 flex flex-wrap gap-3">
                  <a
                    href="#waste-to-product"
                    className="px-6 py-2.5 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Explore Recycling Technology
                  </a>
                  <a
                    href="#greencalc"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    Model CO₂ Savings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Core Pillars */}
        <section className="py-20 bg-[#edf2f7] border-b border-gray-200" id="framework">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Sustainable Commitments
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight mt-1">
                Our 6 Pillars of Sustainable Impact
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Turning waste into high-value industrial products while supporting Qatar National Vision 2030.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. WASTE TO USABLE PRODUCT */}
              <div id="waste-to-product" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Recycle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#002b49] mb-1">
                    CIRCULAR RECYCLING
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    Waste to Usable Product
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Industrial wood scrap, timber shavings, and sawdust are diverted from landfills, processed, and extruded into durable, high-density pallet blocks.
                </p>
              </div>

              {/* 2. COMPRESSED SAWDUST BLOCKS */}
              <div id="compressed-blocks" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#003366] flex items-center justify-center font-bold">
                  <Layers className="w-6 h-6 text-[#0099e5]" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#002b49] mb-1">
                    ECO-BLOCKS
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    Compressed Sawdust Wood Blocks
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Uniform density, water-resistant corner blocks replacing solid timber. Eliminates the need to cut fresh trees for pallet corner posts.
                </p>
              </div>

              {/* 3. PALLET POOLING */}
              <div id="pallet-pooling" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                  <TrendingDown className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#002b49] mb-1">
                    LIFECYCLE EXTENSION
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    Closed-Loop Pallet Pooling
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Collecting damaged pallets from factories across Doha, Birkat Al-Awamer, and Industrial Area, sorting, repairing, and reintroducing them to service.
                </p>
              </div>

              {/* 4. FSC TIMBER */}
              <div id="fsc-timber" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <TreePine className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#002b49] mb-1">
                    SUSTAINABLE TIMBER
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    FSC® Certified Sourcing
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Every board of imported raw lumber comes with complete traceability documentation conforming to sustainable forestry standards.
                </p>
              </div>

              {/* 5. ICV CERTIFIED */}
              <div id="icv" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#002b49] mb-1">
                    NATIONAL VALUE
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    In-Country Value (ICV Certified)
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Strengthening Qatar&apos;s domestic manufacturing base, hiring locally, and generating long-term in-country economic value.
                </p>
              </div>

              {/* 6. ISO 14001 */}
              <div id="iso14001" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#003366] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6 text-[#0099e5]" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#002b49] mb-1">
                    ENVIRONMENTAL GOVERNANCE
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    ISO 14001:2015 Management
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Audited environmental management systems ensuring dust extraction, efficient kiln heating, and zero hazardous discharge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            GREENCALC LCA CALCULATOR
            ========================================================================= */}
        <section id="greencalc" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GreenCalcCalculator
              onOpenContactWithTopic={(topic) => {
                setContactTopic(topic);
                setContactOpen(true);
              }}
            />
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