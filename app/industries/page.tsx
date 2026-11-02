"use client";

import React, { useState } from "react";
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
      id: "telecom",
      name: "Telecom & 5G Networks",
      icon: Radio,
      tag: "Rapid Field Deployment",
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
      id: "battery",
      name: "LiB & E-Mobility (Batteries)",
      icon: BatteryCharging,
      tag: "UN Dangerous Goods",
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
      id: "medtech",
      name: "Healthcare & MedTech",
      icon: Stethoscope,
      tag: "Cleanroom Precision",
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
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("Industries Consultation");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* Hero */}
        <div className="bg-gradient-to-b from-[#090d16] via-[#0f172a] to-[#0b1120] text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/40 rounded-full px-4 py-1 text-xs text-emerald-300">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold uppercase tracking-wider">
                  Engineered Industry Solutions
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                Sector-Specific Supply Chain Protection
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Every sector faces distinct shipping hazards, cleanroom standards, and international regulations. Nefab engineers tailored packaging that meets your industry&apos;s most demanding criteria.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setContactTopic("Sector Packaging Audit");
                    setContactOpen(true);
                  }}
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg transition-all"
                >
                  Schedule Sector Packaging Audit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Cards Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.id}
                  id={ind.id}
                  className="bg-gray-50 border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                            {ind.tag}
                          </span>
                          <h2 className="text-2xl font-extrabold text-gray-950">
                            {ind.name}
                          </h2>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {ind.summary}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="p-4 bg-white rounded-xl border border-gray-200">
                          <h3 className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">
                            Key Sector Challenges
                          </h3>
                          <ul className="text-xs text-gray-600 space-y-1.5">
                            {ind.challenges.map((ch, i) => (
                              <li key={i} className="flex items-start space-x-1.5">
                                <span className="text-red-500 font-bold">•</span>
                                <span>{ch}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 bg-white rounded-xl border border-gray-200">
                          <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                            Nefab Solution Architecture
                          </h3>
                          <ul className="text-xs text-gray-600 space-y-1.5">
                            {ind.solutions.map((sol, i) => (
                              <li key={i} className="flex items-start space-x-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span>{sol}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => {
                            setContactTopic(`${ind.name} Consultation`);
                            setContactOpen(true);
                          }}
                          className="inline-flex items-center space-x-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
                        >
                          <span>Request {ind.name} technical specification</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-4 bg-gray-900 text-white rounded-2xl p-6 space-y-4">
                      <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Certified Testing & Compliance</span>
                      </div>
                      <div className="space-y-2">
                        {ind.standards.map((st) => (
                          <div
                            key={st}
                            className="p-2.5 rounded-lg bg-gray-800 border border-gray-700 text-xs font-semibold text-gray-200 flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                            <span>{st}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-[11px] text-gray-400 pt-1">
                        Validated across our global network of certified ISTA testing facilities.
                      </p>
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

