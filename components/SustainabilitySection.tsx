"use client";

import React from "react";
import Link from "next/link";
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
} from "lucide-react";

interface SustainabilitySectionProps {
  onOpenContact?: () => void;
}

export default function SustainabilitySection({ onOpenContact }: SustainabilitySectionProps) {
  const pillars = [
    {
      title: "100% Circular Portfolio",
      desc: "Phasing out single-use fossil-based plastics in favor of 100% recyclable fiber solutions (FiberFlute™) and closed-loop returnable pooling systems.",
      icon: Recycle,
      stat: "100% Recyclable Goal",
    },
    {
      title: "Certified GreenCalc™ LCA",
      desc: "Our proprietary, third-party certified software models cradle-to-grave CO₂eq emissions and financial savings with scientific precision.",
      icon: BarChart2,
      stat: "ISO 14040/44 Compliant",
    },
    {
      title: "Strategy 2030 Climate Targets",
      desc: "Committed to deep emissions reductions across Scopes 1, 2, and 3, transitioning all global factories to renewable solar and green energy.",
      icon: Globe2,
      stat: "Net-Zero by 2030",
    },
    {
      title: "EU PPWR Compliance",
      desc: "Providing global manufacturers with the exact structural engineering, recyclability documentation, and reuse ratios required by EU law.",
      icon: FileText,
      stat: "Full PPWR Readiness",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-emerald-50/20 to-white border-b border-gray-100" id="sustainability">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-emerald-800 text-xs font-bold tracking-wider uppercase bg-emerald-100 px-3 py-1 rounded-full">
            <Leaf className="w-3.5 h-3.5 text-emerald-600" />
            <span>Our Core Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            We Save Resources for a Better Tomorrow
          </h2>
          <p className="text-base text-gray-600">
            Sustainability isn&apos;t an add-on at Nefab—it is our founding reason for being. We innovate together with customers to eliminate waste, lower emissions, and advance circular supply chains.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {p.stat}
                  </span>
                  <h3 className="text-lg font-bold text-gray-950 mt-3 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Card: PPWR Readiness */}
        <div className="mt-12 bg-gray-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>EU Packaging & Packaging Waste Regulation (PPWR)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Is your packaging ready for upcoming European mandates?
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
                The EU PPWR introduces strict rules on maximum void space (40%), recyclability design criteria, and mandatory reuse targets for transport packaging. Nefab helps global enterprises audit, redesign, and certify their packaging fleet before enforcement deadlines.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/sustainability#ppwr"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors shadow-md"
                >
                  Download Free PPWR Whitepaper
                </Link>
                <button
                  onClick={onOpenContact}
                  className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold text-xs rounded-xl transition-colors"
                >
                  Request Site-Wide PPWR Review
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center space-y-3">
              <span className="text-xs text-gray-400 uppercase tracking-wider block">
                Nefab Environmental Score
              </span>
              <p className="text-4xl font-black text-emerald-400">
                EcoVadis Gold
              </p>
              <p className="text-xs text-gray-400">
                Ranked in the top 5% of companies worldwide for environmental sustainability, human rights, and ethical sourcing.
              </p>
              <div className="pt-2">
                <span className="inline-block text-[11px] font-semibold text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-500/30">
                  ISO 14001 Certified Globally
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
