"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
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
  Flame,
} from "lucide-react";

export default function EngineeringPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("ISPM 15 Heat Treatment Certification");

  const testingProtocols = [
    {
      title: "ISPM 15 Thermal Heat Treatment Chambers",
      desc: "Industrial computerized kilns heating the core wood to a minimum of 56°C for at least 30 continuous minutes, eliminating all wood-boring insects, larvae, and pests.",
      standard: "IPPC ISPM 15 / Ministry of Municipality Qatar",
    },
    {
      title: "Static Top-Load & Compression Testing",
      desc: "Hydraulic platen press testing verifying deckboard deflection and bottom stringer compression under loads exceeding 4,000 kg.",
      standard: "ISO 8611-1 / ASTM D1185",
    },
    {
      title: "Dynamic Forklift & Handling Impact",
      desc: "Testing 4-way and 2-way entry tine impacts and corner drop resilience, guaranteeing zero structural failure during fast-paced warehouse loading.",
      standard: "ISO 8611-2 Impact Protocols",
    },
    {
      title: "High-Bay Racking Deflection Test",
      desc: "Testing maximum allowable deflection (< 1.9%) while loaded across open beam pallet racks in high-density automated distribution centers.",
      standard: "ISO 8611-3 Warehouse Standards",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#002b49] selection:bg-blue-100 selection:text-[#003366]">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("Engineering & Testing Inquiries");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* =========================================================================
            ENGINEERING HERO
            ========================================================================= */}
        <section className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=90&w=2400&auto=format&fit=crop"
            alt="AWMPACK Engineering and ISPM 15 Testing Facility"
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
                <div className="inline-flex items-center space-x-2 bg-[#0099e5]/25 border border-[#0099e5]/40 text-blue-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                  <span>Certified Quality &amp; Thermal Testing • Qatar</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                    ISPM 15 Heat Treatment &amp; Pallet Engineering
                  </h1>
                  <p className="text-blue-300 text-xs sm:text-sm font-bold tracking-wide uppercase">
                    IPPC Thermal Kilns • CAD Design • Load Testing Labs
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                  Ensuring your high-value cargo travels safely across international borders. AWMPACK operates certified thermal heat-treatment kilns and CAD testing labs in Birkat Al-Awamer, Qatar.
                </p>

                <div className="pt-1.5 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setContactTopic("Book ISPM 15 Heat Treatment Batch");
                      setContactOpen(true);
                    }}
                    className="px-6 py-2.5 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Book ISPM 15 Heat Treatment Batch
                  </button>
                  <a
                    href="#ispm15"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    View ISPM 15 Specifications
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars */}
        <section className="py-20 bg-[#edf2f7] border-b border-gray-200" id="ispm15">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Certified Technical Quality
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight mt-1">
                Engineering &amp; Treatment Capabilities
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Technical Team and our engineering squad oversee rigorous quality control across all automated production lines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 1. ISPM 15 HEAT TREATMENT */}
              <div id="heat-treatment" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#0099e5] flex items-center justify-center font-bold">
                  <Flame className="w-6 h-6 text-[#0099e5]" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#002b49] mb-1">
                    ISPM 15 COMPLIANCE
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    Certified Heat Treatment
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Thermal core heating to 56°C for 30 minutes eliminates live insects. Official IPPC &quot;HT&quot; stamp applied to every pallet for guaranteed border acceptance worldwide.
                </p>
              </div>

              {/* 2. CAD PALLET DESIGN */}
              <div id="cad-design" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#003366] flex items-center justify-center font-bold">
                  <DraftingCompass className="w-6 h-6 text-[#0099e5]" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#002b49] mb-1">
                    PARAMETRIC MODELING
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    Custom Pallet CAD Design
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Tailoring deckboard thickness, stringer notches, and fastening patterns to withstand extreme concentrated weight for Qatari petrochemicals and heavy machinery.
                </p>
              </div>

              {/* 3. LOAD TESTING */}
              <div id="load-testing" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  <Scale className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#002b49] mb-1">
                    WEIGHT VALIDATION
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    Load Capacity Testing
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  ISO 8611 static and dynamic testing verifying safe working loads up to 4,000+ kg, eliminating pallet breakage and warehouse collapse hazards.
                </p>
              </div>

              {/* 4. ISO QUALITY STANDARDS */}
              <div id="iso-standards" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#002b49] mb-1">
                    CERTIFIED INTEGRITY
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    ISO 9001 / 14001 / 45001
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Certified manufacturing management guaranteeing consistent nail-depth, structural squareness, moisture content &lt; 18%, and factory safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Testing Standards Showcase */}
        <section className="py-20 bg-white" id="testing-details">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Quality Assured
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight mt-1">
                Rigorous Testing &amp; Verification Protocols
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                We simulate real-world logistics hazards—forklift drops, heavy container stacking, and marine humidity—before mass assembly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testingProtocols.map((p) => (
                <div
                  key={p.title}
                  className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 text-[#003366]">
                    {p.standard}
                  </span>
                  <h3 className="text-xl font-bold text-[#002b49]">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-[#00223a] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-900/60 shadow-xl">
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white">
                  Need an official ISPM 15 Certificate for your export shipment?
                </h4>
                <p className="text-xs text-blue-200">
                  AWMPACK provides official heat-treatment certificates recognized by customs authorities worldwide.
                </p>
              </div>
              <button
                onClick={() => {
                  setContactTopic("ISPM 15 Export Certificate Request");
                  setContactOpen(true);
                }}
                className="px-8 py-3 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs rounded-full whitespace-nowrap shadow-md transition-colors"
              >
                Inquire With Factory Manager
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