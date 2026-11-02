"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import {
  Package,
  Truck,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Leaf,
  Boxes,
  RotateCcw,
  Zap,
  BarChart3,
  Award,
  Download,
} from "lucide-react";

export default function SolutionsPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Packaging Solutions");

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("Solutions Consultation");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* Solutions Hero */}
        <div className="bg-gradient-to-b from-[#090d16] via-[#0f172a] to-[#0b1120] text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/40 rounded-full px-4 py-1 text-xs text-emerald-300">
                <Package className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold uppercase tracking-wider">
                  Nefab Solution Portfolio
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                Complete, Engineered Solutions for Global Supply Chains
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                We combine multi-material packaging engineering, on-site contract packing operations, and digital IoT tracking to eliminate transit damage and save resources worldwide.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setContactTopic("Solutions Assessment");
                    setContactOpen(true);
                  }}
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg transition-all"
                >
                  Request Technical Consultation
                </button>
                <Link
                  href="/sustainability#greencalc"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm rounded-xl transition-all"
                >
                  Model with GreenCalc™
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 1: Packaging Solutions */}
        <section className="py-20 border-b border-gray-100" id="packaging">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Core Offering 01
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                  Industrial Packaging Solutions
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mb-12">
              Whether you need single-use export boxes or returnable multi-trip containers, we engineer solutions from wood, plywood, corrugated paper, and thermoformed plastics to match your exact shipping requirements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: ExPak */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Nefab Flagship
                </span>
                <h3 className="text-lg font-bold text-gray-950">
                  ExPak Foldable Plywood Crates
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Engineered Scandinavian plywood panels with galvanized steel tongue-and-slot closures. Ships flat to save up to 80% warehouse space, and assembles without nails in seconds.
                </p>
                <ul className="text-xs text-gray-700 space-y-1.5 pt-2">
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Up to 30% lighter than standard wood</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Nail-free ergonomic fast assembly</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>ISPM 15 export compliant globally</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: FiberFlute */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition-all" id="fiberflute">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Circular Cushioning
                </span>
                <h3 className="text-lg font-bold text-gray-950">
                  FiberFlute™ Paper Cushion
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  A 100% recyclable paper cushion engineered to replace polyurethane and polystyrene (EPS) foam. Delivers equivalent G-force shock absorption while complying with all EU PPWR mandates.
                </p>
                <ul className="text-xs text-gray-700 space-y-1.5 pt-2">
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Zero fossil-fuel plastics</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Recyclable in standard paper streams</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>ISTA 3A shock certified</span>
                  </li>
                </ul>
              </div>

              {/* Card 3: Dangerous Goods & LiB */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Hazardous Materials
                </span>
                <h3 className="text-lg font-bold text-gray-950">
                  UN-Certified Dangerous Goods (LiB)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Certified containment boxes for Class 9 lithium-ion batteries, chemicals, and sensitive defense electronics. Includes integrated thermal barrier insulation and fire-retardant liners.
                </p>
                <ul className="text-xs text-gray-700 space-y-1.5 pt-2">
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>UN 3480 / UN 3481 certified</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Thermal runaway containment</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Full regulatory documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 2: Logistics Services */}
        <section className="py-20 bg-gray-50 border-b border-gray-200" id="logistics">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Core Offering 02
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                  Contract Packing & Logistics Services
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mb-12">
              We relieve your manufacturing teams of complex packing burdens. From embedded in-plant packing crews to regional returnable pooling loops, we manage packaging flows from end to end.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3 shadow-sm">
                <h3 className="text-base font-bold text-gray-950">
                  On-Site Contract Packing
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Trained Nefab packers stationed directly at your end-of-line manufacturing facility. We assemble custom crates, apply inner cushioning, secure equipment, and prepare freight documents.
                </p>
                <div className="pt-2 text-xs font-semibold text-emerald-700">
                  Eliminates packaging bottlenecks & labor overhead.
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3 shadow-sm" id="pooling">
                <h3 className="text-base font-bold text-gray-950">
                  Returnable Packaging Pooling Loops
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Turn capital expenditure into a smooth service. We manage the collection, inspection, chemical sanitization, repair, and replenishment of reusable containers across international shipping loops.
                </p>
                <div className="pt-2 text-xs font-semibold text-emerald-700">
                  Achieves 50+ reuse cycles per container.
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3 shadow-sm">
                <h3 className="text-base font-bold text-gray-950">
                  Just-in-Time (JIT) Line Supply
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our regional warehouses stock your customized flat-pack inventory and deliver exactly what is needed for each production shift, eliminating floor clutter in your manufacturing plants.
                </p>
                <div className="pt-2 text-xs font-semibold text-emerald-700">
                  Guaranteed 2-hour JIT replenishment SLA.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 3: Digital Solutions */}
        <section className="py-20 border-b border-gray-100" id="digital">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Core Offering 03
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                  Digital IoT Solutions & Telemetry
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mb-12">
              Transform physical boxes into intelligent, connected assets. Real-time sensor telemetry tracks impact, tilt, temperature, and GPS locations across oceans and continents.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white rounded-2xl p-8 space-y-4 shadow-xl">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-4 h-4" />
                  <span>Real-Time Sensor Hardware</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Smart Transit Telemetry Tags
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Multi-sensor IoT devices embedded inside crates record G-force shocks on 3 axes, temperature spikes, tilt angles, and atmospheric humidity. Alerts are automatically transmitted via cellular and satellite networks.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                    G-Force Shock Profiling
                  </span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                    Live GPS Geofencing
                  </span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                    3-Year Battery Life
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white rounded-2xl p-8 space-y-4 shadow-xl">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <BarChart3 className="w-4 h-4" />
                  <span>Cloud Analytics Platform</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Nefab Supply Chain Cloud
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Unified enterprise dashboard showing all active shipments worldwide. Automated carrier accountability: pinpoint the exact minute and latitude where transit mishandling or drop occurred.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                    Automated Scope 3 LCA Reports
                  </span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                    ERP / SAP API Integration
                  </span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                    Instant Carrier Claim Proof
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Bar */}
        <div className="bg-emerald-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to modernize your packaging and logistics?
            </h2>
            <p className="text-sm text-emerald-100 max-w-xl mx-auto">
              Our packaging engineers are ready to evaluate your current boxes, materials, and shipping lanes to deliver documented cost and CO₂ savings.
            </p>
            <div className="pt-2 flex justify-center space-x-4">
              <button
                onClick={() => {
                  setContactTopic("Solutions Engineering Consultation");
                  setContactOpen(true);
                }}
                className="px-6 py-3 bg-white text-emerald-900 font-bold text-sm rounded-xl hover:bg-emerald-50 shadow-md transition-colors"
              >
                Schedule Technical Review
              </button>
            </div>
          </div>
        </div>
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

