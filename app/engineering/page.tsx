"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import TotalCostApproach from "../../components/TotalCostApproach";
import {
  FlaskConical,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  TrendingDown,
  Layers,
  Cpu,
  Boxes,
  Zap,
  DraftingCompass,
  Gauge,
  Microscope,
  RotateCcw,
  Scale,
  Sparkles,
} from "lucide-react";

export default function EngineeringPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Engineering & Testing");

  const labCapabilities = [
    {
      title: "Rotational & Free-Fall Drop Testing",
      desc: "Simulating accidental dock drops, conveyor falls, and rough handling up to 2.5 meters using high-speed optical trigger accelerometers.",
      standard: "ISTA 1A, 2A, 3A & ASTM D5276",
    },
    {
      title: "Random & Sine Vibration Tables",
      desc: "Multi-ton hydraulic and electrodynamic shakers replicating highway pothole vibrations, freight train harmonics, and air-freight turbulence.",
      standard: "ISTA 3E, 3B & ASTM D4728",
    },
    {
      title: "Climatic & Thermal Conditioning Chambers",
      desc: "Temperature profiling from -40°C to +85°C with 10% to 98% relative humidity, testing glue bonds, desiccants, and moisture vapor barriers.",
      standard: "ASTM D4332 & ISO 2233",
    },
    {
      title: "Dynamic & Static Top-Load Compression",
      desc: "Hydraulic platen crush testing up to 100 kN, validating stacked pallet stability inside ocean shipping containers and high-bay warehouses.",
      standard: "ASTM D642 & ISO 12048",
    },
    {
      title: "Incline & Horizontal Shock Impact",
      desc: "Simulating railcar shunting, hard rail hump coupling impacts, and sudden container carrier emergency braking events.",
      standard: "ASTM D880 & ISO 2244",
    },
    {
      title: "ESD Electrostatic Surface Resistivity",
      desc: "Verifying static dissipative surface resistance (< 10⁹ Ω) for semiconductor and lithium-ion battery transit carriers.",
      standard: "ANSI/ESD S20.20 & IEC 61340",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0c2340] selection:bg-orange-100 selection:text-[#eb6608]">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("Engineering Inquiries");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* =========================================================================
            ENGINEERING HERO
            ========================================================================= */}
        <section className="relative bg-[#0c2340] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000&auto=format&fit=crop"
              alt="Packaging laboratory engineers testing prototypes"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <span className="inline-block bg-[#13294b] border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Over 200 Global Packaging Engineers
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Engineered Solutions Tailored to Your Supply Chain
              </h1>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
                We combine computer-aided CAD design, 3D drop simulations, and accredited ISTA test laboratories worldwide to engineer packaging that minimizes total logistics cost and eliminates transit damage.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setContactTopic("Laboratory Testing Request");
                    setContactOpen(true);
                  }}
                  className="px-8 py-3.5 bg-[#eb6608] hover:bg-[#d45600] text-white font-bold text-sm rounded-full shadow-lg transition-all"
                >
                  Book a Test in Our ISTA Labs
                </button>
                <a
                  href="#approach"
                  className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm rounded-full backdrop-blur-sm transition-all"
                >
                  Explore Our 4 Engineering Pillars
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars from Mega Menu (Screenshot 4) */}
        <section className="py-20 bg-[#edf2f7] border-b border-gray-200" id="approach">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#eb6608]">
                Technical Competence
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
                Our 4 Pillars of Engineering
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                As showcased in our global engineering centers across Sweden, North America, and China.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 1. OUR APPROACH */}
              <div id="our-approach" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#eb6608] flex items-center justify-center font-bold">
                  <Scale className="w-6 h-6 text-[#eb6608]" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-1">
                    OUR APPROACH
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    Total Cost of Packaging & Logistics
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Packaging material represents only 5-10% of total supply chain cost. We optimize the entire 90%: warehouse handling time, container space utilization, and damage claims.
                </p>
                <div className="pt-2">
                  <a href="#total-cost" className="text-xs font-bold text-[#0066cc]">View Total Cost Methodology →</a>
                </div>
              </div>

              {/* 2. MULTI MATERIAL */}
              <div id="multi-material" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0066cc] flex items-center justify-center font-bold">
                  <Layers className="w-6 h-6 text-[#0066cc]" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-1">
                    MULTI MATERIAL
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    Save Resources with the Optimal Material
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We are not tied to wood, plastic, or paper. We engineer hybrid composite designs—combining corrugated honeycomb, plywood frames, and thermoformed inserts to achieve peak strength at minimal tare weight.
                </p>
                <div className="pt-2">
                  <Link href="/solutions#by-material" className="text-xs font-bold text-[#0066cc]">Explore All Materials →</Link>
                </div>
              </div>

              {/* 3. PACKAGING DESIGN */}
              <div id="design" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  <DraftingCompass className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-1">
                    PACKAGING DESIGN
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    Designing Optimized Packaging
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Utilizing SolidWorks 3D CAD, parametric tooling, and FEA finite element analysis. We build digital twins of fragile components to simulate stress distribution before physical production.
                </p>
                <div className="pt-2">
                  <a href="#labs" className="text-xs font-bold text-[#0066cc]">See Prototyping Pipeline →</a>
                </div>
              </div>

              {/* 4. PACKAGING TESTING */}
              <div id="testing" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <FlaskConical className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-1">
                    PACKAGING TESTING
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    Safeguard Your Product through Testing
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our network of accredited test centers holds ISTA and ISO certifications. We subject loaded containers to extreme mechanical and environmental transit hazards.
                </p>
                <div className="pt-2">
                  <a href="#labs" className="text-xs font-bold text-[#0066cc]">Explore Lab Standards →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Total Cost Component */}
        <section id="total-cost" className="py-8 bg-white">
          <TotalCostApproach
            onOpenContact={() => {
              setContactTopic("Total Cost Engineering Consultation");
              setContactOpen(true);
            }}
          />
        </section>

        {/* ISTA Labs Showcase */}
        <section className="py-20 bg-[#f8fafc] border-t border-gray-200" id="labs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#eb6608]">
                ISTA & ISO Accredited Labs
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
                Global Testing Capabilities & Equipment
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Certified testing facilities in Sweden, France, the USA, and China validate every new packaging solution against real-world transit hazards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {labCapabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-[#0066cc] border border-blue-100">
                      {cap.standard}
                    </span>
                    <h3 className="text-base font-black text-[#0c2340]">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-[11px] font-bold text-emerald-700 flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      Third-Party Audited Protocol
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-[#0c2340] text-white p-8 sm:p-10 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">
                  Need a formal ISTA or UN Dangerous Goods Test Certificate?
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 max-w-2xl">
                  Our accredited labs provide certified test certificates recognized by air, ocean, and rail freight authorities worldwide.
                </p>
              </div>
              <button
                onClick={() => {
                  setContactTopic("Book Laboratory Testing");
                  setContactOpen(true);
                }}
                className="px-8 py-3.5 bg-[#eb6608] hover:bg-[#d45600] text-white font-bold text-sm rounded-full shadow-lg whitespace-nowrap transition-all"
              >
                Inquire With Lab Director
              </button>
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