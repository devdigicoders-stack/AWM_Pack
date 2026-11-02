"use client";

import React, { useState } from "react";
import {
  TrendingDown,
  ShieldCheck,
  Clock,
  Leaf,
  Layers,
  ArrowRight,
  CheckCircle2,
  Box,
  Truck,
  RotateCw,
} from "lucide-react";

interface TotalCostApproachProps {
  onOpenContact?: () => void;
}

export default function TotalCostApproach({ onOpenContact }: TotalCostApproachProps) {
  const [selectedQuadrant, setSelectedQuadrant] = useState<number>(0);

  const quadrants = [
    {
      id: 0,
      title: "Transport & Freight Costs",
      tag: "Volume & Weight Optimization",
      icon: Truck,
      color: "emerald",
      headline: "Minimizing weight and cubic volume to lower freight bills",
      points: [
        "Lightweighting materials (up to 30% lighter than standard wood boxes)",
        "Maximizing truck and ocean container load density with custom dimensioning",
        "Flat-pack collapsible returnable packaging that reduces return freight volume by up to 80%",
        "Direct reduction in air-freight volumetric chargeable weights",
      ],
      kpi: "20-35% Freight Reduction",
    },
    {
      id: 1,
      title: "Product Protection",
      tag: "Zero-Damage Engineering",
      icon: ShieldCheck,
      color: "teal",
      headline: "Eliminating the catastrophic costs of damaged goods in transit",
      points: [
        "Precision multi-material cushioning engineered to your exact product fragility (G-force)",
        "Advanced shock and vibration mitigation tested in certified ISTA & ASTM laboratories",
        "VCI anti-corrosion and ESD protection shielding against humidity and static charges",
        "Zero-defect packaging ensuring products arrive ready for immediate operation",
      ],
      kpi: "< 0.01% Damage Rate",
    },
    {
      id: 2,
      title: "Handling & Warehousing",
      tag: "Operational Speed & Ergonomics",
      icon: Clock,
      color: "cyan",
      headline: "Accelerating packaging speed and reclaiming warehouse floor space",
      points: [
        "Tool-free, nail-free assembly saving up to 50% packing labor time",
        "Compact flat-packed storage freeing up valuable warehouse square footage",
        "On-site contract packing personnel managing line integration seamlessly",
        "Ergonomically designed components improving safety for assembly operators",
      ],
      kpi: "50% Faster Packing",
    },
    {
      id: 3,
      title: "Environmental Impact",
      tag: "Circular Economy & PPWR",
      icon: Leaf,
      color: "emerald",
      headline: "Cutting carbon footprints and future-proofing compliance",
      points: [
        "Replacing non-recyclable plastic foams with 100% paper-based FiberFlute™",
        "Closed-loop returnable pooling systems delivering 50+ reuses per container",
        "Full alignment with European Union PPWR (Packaging and Packaging Waste Regulation)",
        "Quantified Scope 3 carbon savings certified via our proprietary GreenCalc™ LCA tool",
      ],
      kpi: "Up to 60% CO₂eq Saved",
    },
  ];

  const active = quadrants[selectedQuadrant];

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-200" id="total-cost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-emerald-700 text-xs font-bold tracking-wider uppercase bg-emerald-100/80 px-3 py-1 rounded-full">
            <Layers className="w-3.5 h-3.5" />
            <span>Nefab&apos;s Proven Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            The Total Cost Approach
          </h2>
          <p className="text-base text-gray-600">
            True savings come from looking at the entire supply chain. Nefab balances four critical quadrants to minimize total expenditure and environmental footprint.
          </p>
        </div>

        {/* 4 Quadrants Interactive Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quadrants.map((q) => {
            const isSelected = selectedQuadrant === q.id;
            const Icon = q.icon;

            return (
              <button
                key={q.id}
                onClick={() => setSelectedQuadrant(q.id)}
                className={`text-left p-6 rounded-2xl transition-all border ${
                  isSelected
                    ? "bg-white border-emerald-500 shadow-xl ring-2 ring-emerald-500/20 translate-y-[-2px]"
                    : "bg-white/80 border-gray-200 hover:border-gray-300 hover:bg-white shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl ${
                      isSelected
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    Quadrant 0{q.id + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-950 mb-1">
                  {q.title}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{q.tag}</p>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-black text-emerald-700">
                    {q.kpi}
                  </span>
                  <span className="text-xs text-emerald-600 font-semibold flex items-center">
                    Details <ArrowRight className="w-3 h-3 ml-1" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Quadrant Focus Card */}
        <div className="mt-8 bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl">
                  <active.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    Quadrant 0{active.id + 1} Deep-Dive
                  </span>
                  <h3 className="text-2xl font-extrabold text-gray-950">
                    {active.title}
                  </h3>
                </div>
              </div>

              <h4 className="text-lg font-bold text-gray-800">
                {active.headline}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {active.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-colors"
                >
                  Conduct a Total Cost Audit
                </button>
                <span className="text-xs text-gray-400">
                  Calculated against your historical shipping & scrap data
                </span>
              </div>
            </div>

            {/* Right KPI Callout */}
            <div className="lg:col-span-4 bg-gray-950 text-white rounded-2xl p-6 sm:p-8 space-y-5 text-center">
              <div className="inline-block p-3 rounded-full bg-emerald-500/20 text-emerald-400 mb-1">
                <TrendingDown className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                  Target Outcome
                </p>
                <p className="text-3xl font-black text-white mt-1">
                  {active.kpi}
                </p>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                By optimizing all four quadrants simultaneously, Nefab avoids the common pitfall of cheap packaging that leads to expensive damaged goods or sky-high shipping rates.
              </p>
              <div className="pt-2">
                <span className="inline-block text-[11px] font-semibold text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-500/30">
                  Global Standard Since 1949
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
