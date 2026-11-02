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
} from "lucide-react";

export default function IndustriesPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Industry Solutions");

  const industries = [
    {
      id: "datacom",
      name: "Datacom & Cloud Infrastructure",
      icon: Server,
      tag: "Hyper-scale Hardware",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      summary: "Mission-critical protection for server racks, AI accelerator pods, and storage arrays with zero plastic foam and strict anti-vibration damping.",
      challenges: [
        "Server racks weighing up to 2,000 kg with delicate PCIe accelerators",
        "Strict corporate mandates to eliminate single-use EPS/EPE plastics",
        "Air-freight volume charges requiring razor-sharp dimensional precision",
      ],
      solutions: [
        "FiberFlute™ 100% paper-based structural shock cushions",
        "Spring-isolated wooden transport bases mitigating road and air harmonic vibration",
        "Collapsible reusable server transport containers for inter-datacenter moves",
      ],
      standards: ["ISTA 3E Vibration Tested", "100% Foam-Free", "ANSI/ESD S20.20"],
    },
    {
      id: "battery",
      name: "LiB & E-Mobility (Batteries)",
      icon: BatteryCharging,
      tag: "UN Dangerous Goods",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop",
      summary: "Certified containment boxes and closed-loop pooling systems for lithium-ion cells, modules, and full electric vehicle battery packs.",
      challenges: [
        "Class 9 Dangerous Goods regulatory approvals (UN 3480 / UN 3481)",
        "Thermal runaway propagation containment during highway and sea transit",
        "High capital cost requiring closed-loop returnable container pooling",
      ],
      solutions: [
        "UN-certified metal and thermoformed returnable packaging loops",
        "Flame-retardant and thermal barrier composite interior linings",
        "Smart IoT telemetry sensors reporting real-time container temperature and shock",
      ],
      standards: ["UN 3480 / UN 3481 Certified", "ADR / IMDG Compliant", "IoT Monitored"],
    },
    {
      id: "telecom",
      name: "Telecom & 5G Networks",
      icon: Radio,
      tag: "Rapid Field Deployment",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
      summary: "Scalable packaging and supply chain services for radio base stations, massive MIMO antenna arrays, and remote microwave units.",
      challenges: [
        "Massive global rollouts across remote field sites with extreme weather",
        "Complex kitting requirements with dozens of delicate cable assemblies",
        "Long-distance sea and air transit causing moisture corrosion risks",
      ],
      solutions: [
        "ExPak flat-packed plywood crates with integrated VCI anti-corrosion barrier foil",
        "Custom molded pulp and corrugated modular interior kitting trays",
        "Just-In-Time replenishment from our 145 global logistics centers",
      ],
      standards: ["IP54 Weather Sealed", "ISPM 15 Certified", "Zero Damage Target"],
    },
    {
      id: "energy",
      name: "Energy & Power Grid",
      icon: Zap,
      tag: "Heavy Project Cargo",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
      summary: "Heavy-duty engineered timber and steel crating built to transport massive power transformers, wind turbine components, and grid infrastructure.",
      challenges: [
        "Assets weighing 10 to 60+ tons with irregular geometric centers of gravity",
        "Months of exposure to marine salt fog during trans-oceanic shipping",
        "Lifting and crane handling stress on structural anchor points",
      ],
      solutions: [
        "Structural steel-reinforced timber skids engineered using FEA structural simulations",
        "Hermetically sealed vapor barrier foil with active desiccant moisture control",
        "On-site heavy packing crews operating directly in power manufacturing plants",
      ],
      standards: ["Heavy Lift Rated", "VCI Marine Packaging", "ISPM 15 Compliant"],
    },
    {
      id: "medtech",
      name: "Healthcare & MedTech",
      icon: Stethoscope,
      tag: "Cleanroom Precision",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
      summary: "Sterile-grade and cleanroom-assembled protective packaging for surgical robotics, MRI diagnostic systems, and life-critical medical devices.",
      challenges: [
        "Zero particle shedding tolerance inside sterile clinical environments",
        "Calibrated optical and laser sensors with sub-millimeter shock fragility",
        "Strict FDA and international medical device traceability documentation",
      ],
      solutions: [
        "Cleanroom-manufactured thermoformed trays and non-dusting corrugated packaging",
        "Precision multi-density cushioning tuned to specific product resonant frequencies",
        "Calibrated shock-watch and tilt indicators providing permanent chain-of-custody proof",
      ],
      standards: ["ISO 13485 Quality Standard", "Cleanroom Class 7/8", "Zero Particulate"],
    },
    {
      id: "semicon",
      name: "Semiconductors & Electronics",
      icon: Cpu,
      tag: "Sub-Micron Protection",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      summary: "Ultra-clean electrostatic discharge (ESD) shielding and vibration isolation for front-end wafer pods, lithography optics, and chip testers.",
      challenges: [
        "Electrostatic charges that can destroy microscopic microchip transistor gates",
        "Extreme sensitivity to microscopic airborne chemical and dust contamination",
        "Multi-million dollar equipment value with zero tolerance for handling failure",
      ],
      solutions: [
        "Permanently conductive and static dissipative packaging with surface resistance < 10⁹ Ω",
        "Ultra-clean low-outgassing barrier films sealed in inert nitrogen environments",
        "Air-ride pneumatic isolation bases absorbing road micro-vibrations",
      ],
      standards: ["ANSI/ESD S20.20 Certified", "Mil-PRF-81705", "Nitrogen Purge Compatible"],
    },
    {
      id: "aerospace",
      name: "Aerospace & Defense",
      icon: Plane,
      tag: "Extreme Specification",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
      summary: "Engineered transport skids, jet engine cradles, and avionics flight-line containers built to military specifications and aviation safety protocols.",
      challenges: [
        "Stringent Mil-Spec and FAA compliance mandates",
        "Irregular, high-value turbine components requiring custom cradle molds",
        "High G-force impact resistance during rough transport",
      ],
      solutions: [
        "Heavy-duty aluminum-reinforced reusable transit cases",
        "Hydro-pneumatic shock absorption cradles for commercial jet engines",
        "Security-sealed tamper-evident locking systems",
      ],
      standards: ["Mil-Std-2073 Compliant", "FAA Recognized", "ATA 300 Category 1"],
    },
    {
      id: "vehicles",
      name: "Heavy Vehicles & Machinery",
      icon: Pickaxe,
      tag: "High Load Capacity",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
      summary: "Powertrain packaging, transmission racks, and tractor assembly line returnable steel packaging engineered for heavy industrial equipment.",
      challenges: [
        "Dense metal parts causing extreme concentrated abrasive wear",
        "Multi-supplier global inbound supply chains to final assembly lines",
        "Strict ergonomic weight limits for assembly line operators",
      ],
      solutions: [
        "Heavy-duty returnable steel racks with polyurethane dunnage nests",
        "Corrugated sleeve pack bulk containers with drop-doors for easy access",
        "Closed-loop container pooling between foundries and assembly plants",
      ],
      standards: ["Automotive Tier 1 Approved", "Ergonomic Drop-Door", "Stackable 4-High"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0c2340] selection:bg-orange-100 selection:text-[#eb6608]">
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
        <section className="relative bg-[#0c2340] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop"
              alt="Electric vehicles and industrial manufacturing"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <span className="inline-block bg-[#13294b] border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Specialized Sector Engineering
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Sustainable Packaging Solutions for Your Industry
              </h1>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
                Every industry faces unique supply chain pressures—from UN hazardous battery transport and cleanroom medical standards to heavy power equipment crating. Discover how Nefab tailors engineering to your sector.
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
                      <div className="absolute top-4 left-4 bg-[#0c2340]/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
                        {ind.tag}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-orange-100 text-[#eb6608]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-[#0c2340]">
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
                          Nefab Engineered Solution
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
                            className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#0066cc] border border-blue-100"
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
                        className="px-6 py-2.5 rounded-full bg-[#eb6608] hover:bg-[#d45600] text-white text-xs font-bold transition-all shadow-sm"
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