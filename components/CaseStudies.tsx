"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingDown,
  Building,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Leaf,
  Layers,
  Award,
  DollarSign,
} from "lucide-react";

interface CaseStudiesProps {
  onOpenContact?: () => void;
}

export default function CaseStudies({ onOpenContact }: CaseStudiesProps) {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      client: "Global Cloud Hyper-scaler",
      sector: "Datacom & Cloud",
      title: "Eliminating 450 tons of plastic foam from server rack deployments",
      summary: "A world-leading cloud infrastructure provider required a 100% recyclable, foam-free packaging system capable of protecting delicate $250k server racks from drop and vibration shock during global distribution.",
      solution: "Nefab engineered a custom spring-isolated wooden transport base with high-density FiberFlute™ paper cushioning, replacing all polyurethane and expanded polystyrene (EPS) foam.",
      results: [
        { label: "Transit Damage Rate", value: "0.00%" },
        { label: "CO₂eq Carbon Reduction", value: "-34%" },
        { label: "Annual Freight Savings", value: "$3.8M" },
      ],
      quote: "Nefab proved that we didn't have to compromise on mechanical protection to meet our aggressive Net-Zero sustainability goals.",
      author: "VP of Global Supply Chain Operations",
    },
    {
      client: "Major European Automotive Group",
      sector: "LiB & E-Mobility",
      title: "Closed-loop returnable pooling for EV lithium-ion battery modules",
      summary: "Shipping dangerous goods lithium-ion battery packs across multiple manufacturing facilities required UN-certified thermal containment boxes with zero single-use waste.",
      solution: "Nefab deployed an end-to-end returnable pooling loop: UN-certified thermoformed foldable crates fitted with IoT shock and temperature sensors, managed across 8 regional service centers.",
      results: [
        { label: "Container Reuses", value: "60+ Trips" },
        { label: "Packaging Waste Diverted", value: "620 Tons" },
        { label: "Total Cost Savings", value: "42%" },
      ],
      quote: "The closed-loop visibility and IoT tracking gave us complete compliance and reduced our logistics expenditures dramatically.",
      author: "Director of Battery Logistics",
    },
    {
      client: "Global Telecom Equipment Manufacturer",
      sector: "Telecom Infrastructure",
      title: "ExPak lightweighting saves 28% in air-freight chargeable weight",
      summary: "Rapid rollout of 5G radio base stations across 18 countries resulted in skyrocketing air-freight costs due to heavy traditional wooden crates.",
      solution: "Transitioned to Nefab ExPak lightweight foldable plywood crates with custom internal dividers, reducing tare weight by 35% and arriving flat-packed to save warehouse space.",
      results: [
        { label: "Air-Freight Weight Saved", value: "-28%" },
        { label: "Assembly Time Reduced", value: "50%" },
        { label: "Storage Space Reclaimed", value: "75%" },
      ],
      quote: "ExPak transformed our field deployment speed while cutting hundreds of tons of air-freight carbon.",
      author: "Head of Global Hardware Packaging",
    },
  ];

  const current = cases[activeCase];

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-200" id="cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-emerald-700 text-xs font-bold tracking-wider uppercase bg-emerald-100 px-3 py-1 rounded-full">
            <Award className="w-3.5 h-3.5" />
            <span>Proven In The Field</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            Customer Success Stories
          </h2>
          <p className="text-base text-gray-600">
            Discover how leading global enterprises save millions of dollars and thousands of tons of carbon with Nefab engineered solutions.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
            {cases.map((cs, idx) => (
              <button
                key={cs.client}
                onClick={() => setActiveCase(idx)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  activeCase === idx
                    ? "bg-white border-emerald-500 shadow-lg ring-2 ring-emerald-500/20 translate-y-[-2px]"
                    : "bg-white/70 border-gray-200 hover:bg-white text-gray-600"
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  {cs.sector}
                </span>
                <h4 className="text-sm font-bold text-gray-950 mt-1 line-clamp-1">
                  {cs.client}
                </h4>
                <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                  {cs.title}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Active Case Detail Showcase */}
        <div className="mt-10 bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Case Study: {current.client}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mt-3">
                  {current.title}
                </h3>
              </div>

              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <div>
                  <strong className="text-gray-900 block text-xs uppercase tracking-wider mb-1">
                    The Challenge:
                  </strong>
                  <p>{current.summary}</p>
                </div>

                <div>
                  <strong className="text-gray-900 block text-xs uppercase tracking-wider mb-1">
                    The Nefab Solution:
                  </strong>
                  <p>{current.solution}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="border-l-4 border-emerald-500 pl-4 py-1 italic text-sm text-gray-700 bg-emerald-50/40 rounded-r-xl">
                &ldquo;{current.quote}&rdquo;
                <div className="text-xs font-semibold text-gray-950 mt-1 not-italic">
                  — {current.author}
                </div>
              </div>

              <div className="pt-2 flex items-center space-x-4">
                <Link
                  href="/insights#cases"
                  className="inline-flex items-center space-x-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
                >
                  <span>Read all case studies</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-gray-300">|</span>
                <button
                  onClick={onOpenContact}
                  className="text-sm font-semibold text-gray-700 hover:text-gray-900"
                >
                  Request Similar Solution Audit
                </button>
              </div>
            </div>

            {/* Right KPI Metrics */}
            <div className="lg:col-span-5 bg-gray-950 text-white rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <TrendingDown className="w-4 h-4" />
                <span>Validated Customer Results</span>
              </div>

              <div className="space-y-3">
                {current.results.map((res) => (
                  <div
                    key={res.label}
                    className="p-4 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-between"
                  >
                    <span className="text-xs text-gray-400 font-medium">{res.label}</span>
                    <span className="text-xl font-black text-emerald-400">{res.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-gray-800/80 text-center">
                <p className="text-xs text-gray-400 mb-3">
                  Documented through GreenCalc™ third-party verified Life Cycle Analysis methodology.
                </p>
                <button
                  onClick={onOpenContact}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-md transition-colors"
                >
                  Download Complete Case Study PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
