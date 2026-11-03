"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import {
  Server,
  Radio,
  Zap,
  BatteryCharging,
  Stethoscope,
  Pickaxe,
  Cpu,
  Plane,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  ChevronRight,
  Flame,
  Truck,
  Droplet,
} from "lucide-react";

export default function IndustriesPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Industry Solutions");

  const industries = [
    {
      id: "oil-gas",
      name: "Oil, Gas & Petrochemicals",
      icon: Flame,
      tag: "QatarEnergy Approved",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
      summary: "Mission-critical heavy timber skids, chemical drum pallets, and offshore transport crates engineered for Ras Laffan, Mesaieed, and offshore platforms.",
      challenges: [
        "Heavy concentrated loads (chemical drums, drill bits, valves)",
        "Extreme marine salt fog and harsh desert heat exposure",
        "Strict safety standards and chemical resistance requirements",
      ],
      solutions: [
        "Reinforced 4-way perimeter base pallets with ISPM 15 heat treatment",
        "Seaworthy heavy timber crates with internal blocking and vapor foil",
        "Galvanized steel pallets for high-temperature and flammability zones",
      ],
      standards: ["ISPM 15 Certified", "Heavy Load Rated (4,000+ kg)", "ISO 9001 Audited"],
    },
    {
      id: "construction",
      name: "Construction & Infrastructure",
      icon: Building2,
      tag: "Qatar Vision 2030",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?q=80&w=800&auto=format&fit=crop",
      summary: "Rugged wooden pallets and metal cradles supporting building materials, precast concrete accessories, MEP piping, and infrastructure mega-projects.",
      challenges: [
        "Rough handling on dusty unpaved construction job sites",
        "Abrasive stone, ceramic, and cement bag puncture risks",
        "High turnover requiring durable, reconditionable pallet loops",
      ],
      solutions: [
        "Close-boarded wooden pallets preventing product bag sagging",
        "Heavy-duty timber skids custom-notched for crane slings and forklifts",
        "Pallet collars enabling modular bulk storage of small fittings and fasteners",
      ],
      standards: ["Made in Qatar", "ICV Certified", "Crane Sling Rated"],
    },
    {
      id: "manufacturing",
      name: "Manufacturing & Heavy Metals",
      icon: Pickaxe,
      tag: "Industrial Fabrication",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
      summary: "Custom timber crating, heavy steel pallets, and storage stillages for aluminum extrusions, copper cables, transformers, and industrial pumps.",
      challenges: [
        "Long, irregular geometries (pipes, extrusions, steel beams)",
        "Surface scratching on finished architectural aluminum and steel",
        "Multi-tier warehouse stacking under extreme deadweight",
      ],
      solutions: [
        "Custom-length pallets up to 6 meters with reinforced stringers",
        "Timber crates with non-scratch carpet or rubber cushioned saddles",
        "Stackable steel mesh stillages with half-drop front access doors",
      ],
      standards: ["Stackable 4-High", "Custom CAD Dimensioned", "Heavy Steel Fabricated"],
    },
    {
      id: "logistics",
      name: "Logistics, Ports & Air Freight",
      icon: Truck,
      tag: "Hamad Port & HIA",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      summary: "Export-compliant pallets and rapid replenishment services for 3PL logistics hubs, Hamad Port maritime freight, and Hamad International Airport air cargo.",
      challenges: [
        "Strict international customs quarantine checks (zero pest tolerance)",
        "Air freight volume/weight dimensional surcharges",
        "Demanding 24/7 delivery schedules to meet vessel cut-off deadlines",
      ],
      solutions: [
        "100% ISPM 15 heat-treated pallets bearing official Qatar IPPC stamps",
        "Lightweight export pallets optimizing air freight payloads",
        "Closed-loop pallet pooling and emergency same-day dispatch from Birkat Al-Awamer",
      ],
      standards: ["IPPC / ISPM 15", "Hamad Port Clear", "Air Cargo Optimized"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#002b49] selection:bg-blue-100 selection:text-[#003366]">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("Industries Consultation");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* =========================================================================
            INDUSTRIES HERO
            ========================================================================= */}
        <section className="relative bg-[#00223a] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop"
              alt="Qatar Industrial Operations"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <span className="inline-block bg-[#0099e5]/20 border border-[#0099e5]/40 text-[#0099e5] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Specialized Sector Engineering • Qatar 🇶🇦
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Packaging Solutions Engineered for Qatar&apos;s Core Industries
              </h1>
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl">
                From Ras Laffan petrochemical plants and Hamad Port shipping lines to Qatar National Vision 2030 mega-infrastructure projects, AWMPACK delivers certified, heavy-duty packaging solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Industry Grid */}
        <section className="py-20 bg-white" id="all-industries">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={ind.id}
                  id={ind.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-10 rounded-3xl bg-[#f8fafc] border border-gray-200 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative w-full h-72 sm:h-84 rounded-2xl overflow-hidden shadow-md">
                      <Image
                        src={ind.image}
                        alt={ind.name}
                        fill
                        className="object-cover object-center hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-[#002b49]/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
                        {ind.tag}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-blue-100 text-[#0099e5]">
                        <Icon className="w-6 h-6 text-[#0099e5]" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-[#002b49]">
                        {ind.name}
                      </h2>
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      {ind.summary}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 bg-white rounded-xl border border-gray-200 space-y-1.5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700">
                          Specific Industry Challenges
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {ind.challenges.map((c, i) => (
                            <li key={i} className="flex items-start space-x-1.5">
                              <span className="text-rose-500 font-bold">•</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 bg-white rounded-xl border border-gray-200 space-y-1.5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                          AWMPACK Engineered Solution
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {ind.solutions.map((s, i) => (
                            <li key={i} className="flex items-start space-x-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {ind.standards.map((std, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#003366] border border-blue-100"
                          >
                            {std}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => {
                          setContactTopic(`Inquiry for ${ind.name}`);
                          setContactOpen(true);
                        }}
                        className="px-6 py-2.5 rounded-full bg-[#0099e5] hover:bg-[#0077b6] text-white text-xs font-bold transition-all shadow-xs"
                      >
                        Inquire for {ind.name.split(" ")[0]} →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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