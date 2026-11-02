"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import GreenCalcCalculator from "../../components/GreenCalcCalculator";
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
  TreePine,
  Sun,
  Flame,
} from "lucide-react";

export default function SustainabilityPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Sustainability & PPWR");

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("Sustainability Consultation");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* Sustainability Hero */}
        <div className="bg-gradient-to-b from-[#061811] via-[#0b271d] to-[#090d16] text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/40 rounded-full px-4 py-1 text-xs text-emerald-300">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold uppercase tracking-wider">
                  Our Corporate Mission
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Saving Resources in Supply Chains, for a Better Tomorrow
              </h1>
              <p className="text-base sm:text-lg text-emerald-100 leading-relaxed">
                By optimizing packaging designs, replacing single-use plastics with circular paper solutions, and deploying returnable logistics loops, Nefab helps businesses lower their carbon footprints and total costs simultaneously.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#greencalc"
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg transition-all"
                >
                  Explore GreenCalc™ LCA Software
                </a>
                <button
                  onClick={() => {
                    setContactTopic("PPWR Compliance Audit");
                    setContactOpen(true);
                  }}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm rounded-xl transition-all"
                >
                  Request PPWR Readiness Review
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Nefab Sustainability */}
        <section className="py-20 border-b border-gray-100" id="purpose">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                Core Strategy
              </span>
              <h2 className="text-3xl font-extrabold text-gray-950">
                Our 4-Point Climate & Circularity Framework
              </h2>
              <p className="text-sm text-gray-600">
                How we turn sustainability from a marketing buzzword into measurable, third-party certified metric savings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h3 className="text-base font-bold text-gray-950">
                  Reduce & Optimize
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Eliminating excess void space, reducing container tare weight, and optimizing dimensional sizing to lower fuel burned per unit shipped.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h3 className="text-base font-bold text-gray-950">
                  Reuse with Pooling
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Deploying durable multi-trip containers (ExPak, steel, thermoformed trays) managed through closed-loop pooling hubs with 50+ reuse cycles.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h3 className="text-base font-bold text-gray-950">
                  Recycle in Closed Loops
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Designing all expendable products from 100% curbside-recyclable Scandinavian paper, corrugated fiber, and FSC® certified timber.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                  04
                </div>
                <h3 className="text-base font-bold text-gray-950">
                  Replace Fossil Plastics
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Phasing out expanded polystyrene (EPS) and polyurethane foams with our patented 100% paper FiberFlute™ shock cushioning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GreenCalc Section */}
        <GreenCalcCalculator
          onOpenContactWithTopic={(topic) => {
            setContactTopic(topic);
            setContactOpen(true);
          }}
        />

        {/* EU PPWR Regulatory Section */}
        <section className="py-20 bg-gray-50 border-b border-gray-200" id="ppwr">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center space-x-2 text-emerald-700 text-xs font-bold uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Regulatory Compliance</span>
                </div>
                <h2 className="text-3xl font-extrabold text-gray-950 tracking-tight">
                  European Packaging and Packaging Waste Regulation (PPWR)
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The European Union has mandated aggressive new legal thresholds for all transport packaging entering or moving within Europe:
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 bg-white rounded-xl border border-gray-200 flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">Maximum 40% Empty Space Ratio</h4>
                      <p className="text-xs text-gray-500">Packaging must eliminate empty void filler and fit products closely.</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-gray-200 flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">Mandatory Recyclability Assessment</h4>
                      <p className="text-xs text-gray-500">All materials must be recyclable in at-scale municipal waste streams (Design for Recycling).</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-gray-200 flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">Target Reuse Ratios for B2B Transport</h4>
                      <p className="text-xs text-gray-500">Gradual phase-in of mandatory reusable pallet, box, and crate quotas.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setContactTopic("PPWR Site Audit");
                      setContactOpen(true);
                    }}
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
                  >
                    Request a PPWR Packaging Audit
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-emerald-950 text-white rounded-3xl p-8 space-y-4">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>The Nefab PPWR Advantage</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Audit your entire fleet with our regulatory specialists
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Nefab provides complete technical dossier generation, void-space redesigns, and automated LCA calculations to ensure your global operations remain 100% compliant without shipping disruptions.
                </p>
                <div className="pt-3 border-t border-emerald-800 text-xs text-emerald-200 space-y-1">
                  <p>✓ 100% FiberFlute™ PPWR Curbside Certified</p>
                  <p>✓ Turnkey Reusable Container Pooling Infrastructure</p>
                  <p>✓ Documented Ecoinvent Recyclability Grading</p>
                </div>
              </div>
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

