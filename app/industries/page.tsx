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
      id: "energy",
      name: "Energy (Power Generation, Transmission & Distribution)",
      icon: Zap,
      tag: "Heavy Project Cargo",
      image: "/industry/energy.png",
      summary: "Heavy-duty engineered timber skids, custom crating, and ISPM 15 certified platforms engineered for power stations, turbines, transformers, and renewable energy assets.",
      challenges: [
        "Heavy concentrated loads (turbines, generators, transformers up to 50+ tons)",
        "Long-distance sea freight and harsh desert/marine climate exposure",
        "Zero-deflection requirements to protect precision calibrated electrical windings",
      ],
      solutions: [
        "Reinforced structural timber skids with steel undercarriages",
        "Vapor barrier vacuum foil packaging with high-capacity desiccants",
        "Shock & tilt monitoring telemetry for end-to-end transport validation",
      ],
      standards: ["ISPM 15 Certified", "Heavy Load Rated (50+ Tons)", "VCI Corrosion Protected"],
    },
    {
      id: "lib-emobility",
      name: "LiB & E-Mobility (Lithium-Ion Batteries & EV Components)",
      icon: BatteryCharging,
      tag: "Dangerous Goods UN Certified",
      image: "/industry/lib.png",
      summary: "UN-certified hazardous material packaging, thermal barrier containers, and closed-loop reusable logistics systems engineered for EV battery cells, modules, and packs.",
      challenges: [
        "Strict UN Class 9 Dangerous Goods compliance regulations (UN 3480 / 3481)",
        "Thermal runaway containment and fire-resistant cushioning requirements",
        "High reverse logistics costs for heavy returnable container loops",
      ],
      solutions: [
        "UN-certified steel and thermoformed returnable packaging loops",
        "Non-combustible insulation liners and specialized pressure-release valves",
        "Modular collapsible returnable containers reducing return freight space by 70%",
      ],
      standards: ["UN 3480 / 3481", "Class 9 Certified", "Fire Retardant"],
    },
    {
      id: "datacom-cloud",
      name: "Datacom & Cloud (Servers, Racks & Data Center Hardware)",
      icon: Server,
      tag: "Hyper-Scale Infrastructure",
      image: "/industry/datacome.png",
      summary: "Custom engineered shock-isolated packaging, recyclable paper cushioning, and integrated server rack deployment systems for mission-critical cloud and AI infrastructure.",
      challenges: [
        "Extreme sensitivity to mechanical shock, vibration, and drop impacts",
        "Urgent deployment deadlines to avoid costly data center commissioning delays",
        "Corporate ESG commitments requiring elimination of non-recyclable plastic foams",
      ],
      solutions: [
        "High-density sustainable fiber cushioning replacing EPS/EPE foam",
        "Ramp-equipped server rack transit containers for dock-to-suite rollout",
        "Drop & vibration lab-validated dampening according to ISTA 3E protocols",
      ],
      standards: ["ISTA 3E Tested", "ESD Anti-Static Safe", "100% Recyclable Fiber"],
    },
    {
      id: "defense",
      name: "Defense & Aerospace (Mission-Critical & Mil-Spec Packaging)",
      icon: Plane,
      tag: "Mil-Spec Compliant",
      image: "/industry/defence.png",
      summary: "Rugged, defense-standard compliant plywood boxes, custom foam saddle inserts, and tactical transport crates engineered for sensitive aerospace systems, avionics, and defense assets.",
      challenges: [
        "Stringent military procurement specs and defense standards (MIL-STD, DEF-STAN)",
        "Extreme field conditions (sandstorms, humidity, rapid temperature swings)",
        "Confidential high-value avionics and optical guidance equipment protection",
      ],
      solutions: [
        "ExPak collapsible interlocking tongue-and-groove plywood container systems",
        "CNC-milled closed-cell PE foam custom contoured to payload geometries",
        "Hermetically sealed moisture barrier bags with integrated humidity indicators",
      ],
      standards: ["MIL-STD Compliant", "ISPM 15 Export Certified", "Hermetically Sealed"],
    },
    {
      id: "mining-construction",
      name: "Mining & Construction (Heavy Machinery & Infrastructure)",
      icon: Pickaxe,
      tag: "Extreme Duty",
      image: "/industry/mining.png",
      summary: "Heavy-duty structural timber bases, crane-slung transport cradles, and reinforced export crating designed to withstand brutal construction sites and heavy open-pit quarry logistics.",
      challenges: [
        "Extreme abrasiveness, rough dirt handling, and concentrated point loads",
        "Large-diameter pipes, valves, precast components, and hydraulic assemblies",
        "Fast-turnaround jobsite demands across ongoing regional infrastructure projects",
      ],
      solutions: [
        "Heavy hardwood and structural timber skids notched for 4-way slings and forklifts",
        "Custom bolted industrial crates with reinforced corner steel brackets",
        "Pallet collars and modular timber bins for high-density hardware storage",
      ],
      standards: ["Crane Sling Certified", "High-Tonnage Load Rated", "Treated Hardwood"],
    },
    {
      id: "medtech",
      name: "MedTech & Healthcare (Sensitive Medical Devices & Diagnostics)",
      icon: Stethoscope,
      tag: "Cleanroom Precision",
      image: "/industry/medtech.png",
      summary: "Ultra-clean packaging solutions, particle-free cushioning, and shock-attenuating transport systems for MRI equipment, surgical robotics, and fragile laboratory analyzers.",
      challenges: [
        "Zero-tolerance contamination thresholds in hospital and cleanroom environments",
        "Delicate optical sensors, lasers, and precision electronic components",
        "Stringent international regulatory quality audits (ISO 13485)",
      ],
      solutions: [
        "Particle-free thermoformed polymer trays and cleanroom-assembled inserts",
        "Multi-axis elastomer shock damping systems preventing G-force spikes",
        "Calibrated drop and impact indicators for chain-of-custody verification",
      ],
      standards: ["ISO 13485 Compliant", "Particle-Free", "Calibrated Impact Telemetry"],
    },
    {
      id: "telecom",
      name: "Telecom & 5G (Antennas, Fiber Optics & Infrastructure)",
      icon: Radio,
      tag: "Global 5G Rollout",
      image: "/industry/telecom.png",
      summary: "Lightweight weather-resistant crating, fast-assembly kits, and regional distribution packaging for 5G radio base stations, antennas, and microwave dish networks.",
      challenges: [
        "Aggressive installation schedules across remote rooftop and desert tower sites",
        "Multi-part hardware kits requiring rapid, tool-free field unboxing",
        "Extreme atmospheric salinity, solar radiation, and fine sand infiltration",
      ],
      solutions: [
        "Foldable lightweight plywood boxes allowing single-operator site unpacking",
        "VCI anti-corrosion poly bags safeguarding antenna electronics from oxidation",
        "Kitted inner dividers organizing bolts, jumpers, and transceivers in step order",
      ],
      standards: ["IP54 Weather Protection", "Tool-Free Unpacking", "VCI Protected"],
    },
    {
      id: "semiconductors",
      name: "Semiconductors (Cleanroom, Silicon Wafers & Microchips)",
      icon: Cpu,
      tag: "Nanometer Precision Protection",
      image: "/industry/semiconductor.png",
      summary: "Electrostatic discharge (ESD) safe packaging, conductive polymers, and zero-vibration containers designed to safeguard silicon wafers and photolithography modules.",
      challenges: [
        "Static discharge capable of destroying microscopic semiconductor circuits",
        "Sub-micron airborne dust particles causing wafer yield degradation",
        "Extreme financial value per cubic meter demanding absolute transit safety",
      ],
      solutions: [
        "Certified static-dissipative (ESD) cushioning and conductive corrugated sleeves",
        "Hermetic nitrogen-purged shipping cases for cleanroom transfer",
        "Pneumatic vibration-damping skids isolating high-frequency transport resonance",
      ],
      standards: ["ANSI/ESD S20.20", "Cleanroom Class 7/8", "Zero-Resonance Isolation"],
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
        <section className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=90&w=2400&auto=format&fit=crop"
            alt="Qatar Industrial Operations & Logistics Hub"
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
                  <span>Specialized Sector Engineering • Qatar 🇶🇦</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                    Packaging Solutions Engineered for Qatar&apos;s Core Industries
                  </h1>
                  <p className="text-blue-300 text-xs sm:text-sm font-bold tracking-wide uppercase">
                    Petrochemicals • Infrastructure • Manufacturing • Logistics
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                  From Ras Laffan petrochemical plants and Hamad Port shipping lines to Qatar National Vision 2030 mega-infrastructure projects, AWMPACK delivers certified, heavy-duty packaging solutions.
                </p>

                <div className="pt-1.5 flex flex-wrap gap-3">
                  <a
                    href="#all-industries"
                    className="px-6 py-2.5 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Explore Sectors
                  </a>
                  <button
                    onClick={() => {
                      setContactTopic("Sector Packaging Audit");
                      setContactOpen(true);
                    }}
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    Request Industry Audit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Grid */}
        <section className="py-20 bg-white" id="all-industries">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16">
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