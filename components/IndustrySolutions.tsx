"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  Leaf,
  Layers,
} from "lucide-react";

interface IndustrySolutionsProps {
  onOpenContact?: () => void;
}

export default function IndustrySolutions({ onOpenContact }: IndustrySolutionsProps) {
  const [activeIndustry, setActiveIndustry] = useState("datacom");

  const industries = [
    {
      id: "datacom",
      name: "Datacom & Cloud",
      icon: Server,
      tag: "Hyper-scale Infrastructure",
      headline: "Protecting mission-critical servers, AI racks, and cloud hardware",
      challenge: "High product fragility, extreme sensitivity to vibration, high air-freight costs, and strict ESG mandates to eliminate non-recyclable plastic foam.",
      solution: "Engineered shock-absorbing pallet systems, FiberFlute™ recyclable paper cushioning, and collapsible reusable server rack transport containers.",
      results: "0.00% transit damage on thousands of deployed server racks, with 32% volumetric shipping savings.",
      standards: ["ISTA 3E Tested", "Foam-Free Recyclable", "ESD Safe"],
    },
    {
      id: "telecom",
      name: "Telecom & 5G",
      icon: Radio,
      tag: "Global Network Rollout",
      headline: "Packaging solutions for radio base stations, antennas, and network hardware",
      challenge: "Rapid worldwide rollouts, complex multi-component kits, and unpredictable climate exposures from Arctic cold to tropical moisture.",
      solution: "ExPak foldable plywood crates with VCI corrosion inhibitors, custom modular inserts, and regional JIT line delivery across 39 countries.",
      results: "40% reduction in packaging assembly time at installation sites with complete weatherproofing.",
      standards: ["IP54 Weather Protection", "MIL-STD Compliant", "Fast Field Assembly"],
    },
    {
      id: "energy",
      name: "Energy & Grid",
      icon: Zap,
      tag: "Heavy Project Cargo",
      headline: "Extreme heavy-duty crating for turbines, transformers, and renewable energy assets",
      challenge: "Massive weight (up to 50+ tons), irregular dimensions, long-distance ocean transport, and extreme salt spray exposure.",
      solution: "Engineered structural steel-reinforced timber skids, custom internal blocking, heavy-duty barrier foil vacuum packaging with desiccants.",
      results: "Zero corrosion or structural deflection during multi-month trans-oceanic shipping.",
      standards: ["ISPM 15 Heat Treated", "VCI Moisture Barrier", "Heavy Lift Rated"],
    },
    {
      id: "battery",
      name: "LiB & E-Mobility",
      icon: BatteryCharging,
      tag: "Dangerous Goods UN Certified",
      headline: "Certified containment for lithium-ion cells, modules, and full EV battery packs",
      challenge: "Strict UN hazardous materials regulations (Class 9 Dangerous Goods), thermal runaway risks, and high return logistics costs.",
      solution: "UN-certified steel and thermoformed returnable packaging loops with thermal barrier insulation and real-time IoT temperature/shock telemetry.",
      results: "100% regulatory compliance with seamless closed-loop pooling across European and US gigafactories.",
      standards: ["UN 3480 / 3481 Certified", "Thermal Runaway Containment", "IoT Telemetry"],
    },
    {
      id: "medtech",
      name: "Healthcare & MedTech",
      icon: Stethoscope,
      tag: "Cleanroom Precision",
      headline: "High-precision protective packaging for medical equipment and diagnostic systems",
      challenge: "Zero contamination tolerance, delicate optical sensors, and stringent international medical compliance audits.",
      solution: "Cleanroom-assembled packaging, particle-free thermoformed trays, and precision shock-damped crates.",
      results: "Pristine sterile delivery to hospitals and research labs worldwide with calibrated shock-watch indicators.",
      standards: ["ISO 13485 Compliant", "Cleanroom Class 7/8", "Zero Particle Shedding"],
    },
    {
      id: "semicon",
      name: "Semiconductors",
      icon: Cpu,
      tag: "Nanometer Precision Protection",
      headline: "ESD shielding and ultra-clean packaging for wafer pods and lithography tooling",
      challenge: "Sub-micron particles, static discharge that destroys silicon microchips, and high product value.",
      solution: "Static dissipative shielding films, cleanroom conductive polymers, and zero-vibration pneumatic damping crates.",
      results: "Safe global transport for multi-million dollar semiconductor fabrication equipment.",
      standards: ["ANSI/ESD S20.20", "Particle-Free", "Vibration Isolating"],
    },
  ];

  const current = industries.find((i) => i.id === activeIndustry) || industries[0];

  return (
    <section className="py-24 bg-white border-b border-gray-100" id="industries">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-emerald-700 text-xs font-bold tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full">
            <Layers className="w-3.5 h-3.5" />
            <span>Specialized Global Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            Tailored Industry Solutions
          </h2>
          <p className="text-base text-gray-600">
            Every industry has unique supply chain hazards, regulatory constraints, and fragility thresholds. Nefab delivers engineered solutions tailored to your sector.
          </p>
        </div>

        {/* Industry Pill Navigation */}
        <div className="mt-12 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl">
            {industries.map((ind) => {
              const Icon = ind.icon;
              const isActive = activeIndustry === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustry(ind.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30 ring-2 ring-emerald-600/20"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Industry Deep-Dive Card */}
        <div className="mt-10 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
                  <current.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {current.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {current.name}
                  </h3>
                </div>
              </div>

              <h4 className="text-lg font-bold text-gray-200">
                {current.headline}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800 space-y-1.5">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                    The Challenge
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {current.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800 space-y-1.5">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    The Nefab Solution
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {current.solution}
                  </p>
                </div>
              </div>

              {/* Documented Outcome */}
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                    Proven Real-World Impact:
                  </span>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {current.results}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/industries"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
                >
                  Explore All {current.name} Solutions
                </Link>
                <button
                  onClick={onOpenContact}
                  className="text-xs font-semibold text-gray-300 hover:text-white flex items-center"
                >
                  <span>Request Sector Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>

            {/* Right Compliance Box */}
            <div className="lg:col-span-4 bg-gray-900/90 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Sector Standards Met</span>
              </div>

              <div className="space-y-2.5">
                {current.standards.map((std) => (
                  <div
                    key={std}
                    className="p-3 rounded-lg bg-gray-950 border border-gray-800 text-xs font-semibold text-gray-200 flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span>{std}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-800 text-xs text-gray-400">
                <p>
                  Every design is validated in our global ISTA certified laboratories before mass production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

