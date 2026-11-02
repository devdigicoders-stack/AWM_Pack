"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import {
  Package,
  Truck,
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
  Activity,
  Cpu,
  ChevronRight,
  Search,
} from "lucide-react";

export default function SolutionsPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Packaging Solutions");

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0c2340] selection:bg-orange-100 selection:text-[#eb6608]">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("Packaging Solutions Consultation");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* =========================================================================
            SOLUTIONS HERO (Nefab Navy Style with High-Res Image)
            ========================================================================= */}
        <section className="relative bg-[#0c2340] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2000&auto=format&fit=crop"
              alt="Nefab modern warehouse packaging facility"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <span className="inline-block bg-[#13294b] border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Nefab Solution Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Complete, Engineered Solutions for Global Supply Chains
              </h1>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
                We combine multi-material packaging engineering, on-site contract packing operations, and digital IoT tracking to eliminate transit damage and save financial and environmental resources worldwide.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setContactTopic("Technical Packaging Consultation");
                    setContactOpen(true);
                  }}
                  className="px-8 py-3.5 bg-[#eb6608] hover:bg-[#d45600] text-white font-bold text-sm rounded-full shadow-lg transition-all"
                >
                  Request Technical Consultation
                </button>
                <Link
                  href="/sustainability#greencalc"
                  className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm rounded-full backdrop-blur-sm transition-all"
                >
                  Model with GreenCalc™
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Nav Anchor Bar */}
        <div className="sticky top-[73px] z-30 bg-[#edf2f7] border-b border-gray-200 py-3 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto text-xs font-bold whitespace-nowrap gap-4">
            <span className="text-gray-400 uppercase tracking-wider hidden sm:inline">Jump to:</span>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <a href="#by-type" className="text-[#0c2340] hover:text-[#eb6608] px-2.5 py-1 rounded-md hover:bg-white/80">By Type</a>
              <a href="#by-material" className="text-[#0c2340] hover:text-[#eb6608] px-2.5 py-1 rounded-md hover:bg-white/80">By Material</a>
              <a href="#by-requirement" className="text-[#0c2340] hover:text-[#eb6608] px-2.5 py-1 rounded-md hover:bg-white/80">By Requirement</a>
              <a href="#optimization" className="text-[#0c2340] hover:text-[#eb6608] px-2.5 py-1 rounded-md hover:bg-white/80">Packaging Optimization</a>
              <a href="#logistics-services" className="text-[#0c2340] hover:text-[#eb6608] px-2.5 py-1 rounded-md hover:bg-white/80">Logistics Services</a>
            </div>
            <button
              onClick={() => {
                setContactTopic("Custom Solutions Quote");
                setContactOpen(true);
              }}
              className="text-[#eb6608] hover:underline font-bold"
            >
              Get Custom Quote →
            </button>
          </div>
        </div>

        {/* =========================================================================
            SECTION 1: PACKAGING SOLUTIONS BY TYPE
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="by-type">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#eb6608]">
                Packaging Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
                Packaging Solutions by Type
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Engineered protective systems custom-designed to match your exact transport mode, equipment dimensions, and fragile cargo specifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 1. Inner Packaging */}
              <div id="inner" className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0c2340] flex items-center justify-center font-bold">
                    <Layers className="w-6 h-6 text-[#0066cc]" />
                  </div>
                  <h3 className="text-xl font-black text-[#0c2340] group-hover:text-[#eb6608] transition-colors">
                    Inner Packaging
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Custom-engineered cushioning and blocking solutions that absorb shock, prevent abrasion, and eliminate internal load movement.
                  </p>
                  <ul className="text-xs text-gray-700 space-y-2 pt-2 border-t border-gray-200">
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>FiberFlute™ 100% paper cushion</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Thermoformed engineered inserts</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>ESD antistatic foams & bags</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setContactTopic("Inner Packaging Inquiry");
                      setContactOpen(true);
                    }}
                    className="w-full text-center py-2 px-4 rounded-full bg-white border border-gray-300 text-xs font-bold text-[#0c2340] hover:bg-[#eb6608] hover:text-white hover:border-[#eb6608] transition-all"
                  >
                    Inquire About Inner Packaging
                  </button>
                </div>
              </div>

              {/* 2. Outer Packaging */}
              <div id="outer" className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#eb6608] flex items-center justify-center font-bold">
                    <Package className="w-6 h-6 text-[#eb6608]" />
                  </div>
                  <h3 className="text-xl font-black text-[#0c2340] group-hover:text-[#eb6608] transition-colors">
                    Outer Packaging
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Rigid external transit containers designed to withstand external impacts, stacking loads, and extreme weather during ocean, air, and overland shipping.
                  </p>
                  <ul className="text-xs text-gray-700 space-y-2 pt-2 border-t border-gray-200">
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>ExPak collapsible plywood crates</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Heavy-duty wood crating & skids</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Triple-wall corrugated export boxes</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setContactTopic("Outer Packaging Inquiry");
                      setContactOpen(true);
                    }}
                    className="w-full text-center py-2 px-4 rounded-full bg-white border border-gray-300 text-xs font-bold text-[#0c2340] hover:bg-[#eb6608] hover:text-white hover:border-[#eb6608] transition-all"
                  >
                    Inquire About Outer Packaging
                  </button>
                </div>
              </div>

              {/* 3. Trays */}
              <div id="trays" className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Boxes className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-black text-[#0c2340] group-hover:text-[#eb6608] transition-colors">
                    Trays
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Precision thermoformed and molded trays engineered for robotic pick-and-place automation, automotive assembly lines, and medical kitting.
                  </p>
                  <ul className="text-xs text-gray-700 space-y-2 pt-2 border-t border-gray-200">
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Automated line nested stacking</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Static dissipative ESD materials</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>ISO 13485 cleanroom validation</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setContactTopic("Industrial Trays Inquiry");
                      setContactOpen(true);
                    }}
                    className="w-full text-center py-2 px-4 rounded-full bg-white border border-gray-300 text-xs font-bold text-[#0c2340] hover:bg-[#eb6608] hover:text-white hover:border-[#eb6608] transition-all"
                  >
                    Inquire About Trays
                  </button>
                </div>
              </div>

              {/* 4. Pallets */}
              <div id="pallets" className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                    <Truck className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-black text-[#0c2340] group-hover:text-[#eb6608] transition-colors">
                    Pallets
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    High-strength, dimensionally consistent transport pallets engineered to optimize container cubing and support heavy industrial payloads.
                  </p>
                  <ul className="text-xs text-gray-700 space-y-2 pt-2 border-t border-gray-200">
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Engineered lightweight plywood pallets</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Heat-treated ISPM 15 solid wood</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>100% recyclable paper fiber pallets</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setContactTopic("Transport Pallets Inquiry");
                      setContactOpen(true);
                    }}
                    className="w-full text-center py-2 px-4 rounded-full bg-white border border-gray-300 text-xs font-bold text-[#0c2340] hover:bg-[#eb6608] hover:text-white hover:border-[#eb6608] transition-all"
                  >
                    Inquire About Pallets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: PACKAGING SOLUTIONS BY MATERIAL
            ========================================================================= */}
        <section className="py-20 bg-[#edf2f7] border-b border-gray-200" id="by-material">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#eb6608]">
                Multi-Material Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
                Packaging Solutions by Material
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                We are material neutral. Rather than pushing a single substrate, we select and combine the optimal raw material based on structural performance, recyclability, and cost.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Fiber Packaging */}
              <div id="fiber" className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  100% Recyclable
                </span>
                <h3 className="text-lg font-black text-[#0c2340] mt-3">
                  Fiber Packaging
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mt-2">
                  Paper-based corrugated cartons, paper honeycomb sheets, and FiberFlute™ shock dampers. Certified curbside recyclable and fully aligned with EU PPWR circularity standards.
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-[#eb6608]">FSC® Certified Timber Sources</span>
                </div>
              </div>

              {/* Plastic Packaging */}
              <div id="plastic" className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-[#0066cc]">
                  Closed-Loop Returnable
                </span>
                <h3 className="text-lg font-black text-[#0c2340] mt-3">
                  Plastic Packaging
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mt-2">
                  High-density polyethylene (HDPE) and polypropylene (PP) collapsible sleeve boxes, vacuum-formed trays, and antistatic ESD conductive containers built for 50+ multi-trip rotations.
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-[#eb6608]">Washable & Reusable 10+ Years</span>
                </div>
              </div>

              {/* Plywood Packaging */}
              <div id="plywood" className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                  Engineered Timber
                </span>
                <h3 className="text-lg font-black text-[#0c2340] mt-3">
                  Plywood Packaging
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mt-2">
                  Scandinavian engineered birch and pine plywood boxes. Delivers high strength-to-weight ratio, nail-free steel tongue closure, and complete resistance to splintering and moisture warping.
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-[#eb6608]">ISPM 15 Exempt Globally</span>
                </div>
              </div>

              {/* Wood Packaging */}
              <div id="wood" className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-800">
                  Heavy Project Cargo
                </span>
                <h3 className="text-lg font-black text-[#0c2340] mt-3">
                  Wood Packaging
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mt-2">
                  Heavy-duty timber crates and skids constructed from sustainably harvested solid softwood. Capable of bearing concentrated dynamic loads up to 80 tons with integrated crane lifting brackets.
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-[#eb6608]">Full Heat-Treatment & Stamping</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: PACKAGING SOLUTIONS BY REQUIREMENT
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="by-requirement">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#eb6608]">
                Supply Chain Fit
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
                Packaging Solutions by Requirement
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Whether managing rapid one-way international export flows, high-velocity circular manufacturing loops, or dangerous materials, we configure complete end-to-end solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Returnable Packaging */}
              <div id="returnable" className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-8 space-y-4 hover:border-gray-300 transition-all">
                <div className="p-3 bg-blue-50 text-[#0066cc] rounded-xl w-fit">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-[#0c2340]">
                  Returnable Packaging
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Engineered for closed loops between suppliers and assembly plants. Our collapsible containers achieve up to 1:7 folding ratios, drastically lowering reverse logistics freight costs and carbon emissions.
                </p>
                <ul className="text-xs text-gray-700 space-y-2 pt-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Collapsible volume reduction up to 85%</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Nefab pooling hub maintenance & washing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Pay-per-use pooling financial model</span>
                  </li>
                </ul>
              </div>

              {/* Expendable Packaging */}
              <div id="expendable" className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-8 space-y-4 hover:border-gray-300 transition-all">
                <div className="p-3 bg-orange-50 text-[#eb6608] rounded-xl w-fit">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-[#0c2340]">
                  Expendable Packaging
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Optimized one-way packaging for cross-continental exports where container retrieval is uneconomical. Engineered with lightweight materials to slash air and ocean freight rates while guaranteeing zero transit damage.
                </p>
                <ul className="text-xs text-gray-700 space-y-2 pt-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% compliant with destination country import laws</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Maximized container cubing efficiency</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Easy roadside recycling for end-customer</span>
                  </li>
                </ul>
              </div>

              {/* Dangerous Goods */}
              <div id="dangerous-goods" className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-8 space-y-4 hover:border-gray-300 transition-all">
                <div className="p-3 bg-amber-50 text-amber-700 rounded-xl w-fit">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-[#0c2340]">
                  Dangerous Goods Packaging
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Certified UN-marked packaging engineered specifically for Class 9 lithium-ion batteries, defense electronics, pyrotechnics, and volatile industrial chemicals with integrated flame barriers.
                </p>
                <ul className="text-xs text-gray-700 space-y-2 pt-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>UN 3480 / UN 3481 certified configurations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Thermal runaway barrier insulation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>ADR, IMDG & IATA compliance documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: PACKAGING OPTIMIZATION
            ========================================================================= */}
        <section className="py-20 bg-[#0c2340] text-white" id="optimization">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Advanced Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-1 text-white">
                Packaging Optimization
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mt-2">
                Transforming packaging from a passive cost center into a strategic operational advantage with software simulations, IoT telemetry, and site audits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Digital Solutions */}
              <div id="digital" className="bg-[#13294b] p-8 rounded-3xl border border-blue-400/20 space-y-4">
                <Cpu className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-bold text-white">
                  Digital Solutions for Packaging
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Real-time IoT sensors monitor multi-axis shock (G-force), tilt, ambient temperature, relative humidity, and GPS location across maritime and air corridors.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs font-bold text-orange-400 hover:text-orange-300 pt-2"
                >
                  <span>Learn about Nefab Track & Trace</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>

              {/* Life Cycle Analysis */}
              <div id="greencalc-card" className="bg-[#13294b] p-8 rounded-3xl border border-blue-400/20 space-y-4">
                <BarChart3 className="w-8 h-8 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">
                  Life Cycle Analysis with GreenCalc™
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Our proprietary, third-party verified ISO 14040/14044 calculator models your current vs. proposed packaging system, proving exact CO₂ reductions and cost savings.
                </p>
                <Link
                  href="/sustainability#greencalc"
                  className="inline-flex items-center text-xs font-bold text-orange-400 hover:text-orange-300 pt-2"
                >
                  <span>Launch GreenCalc™ Calculator</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>

              {/* Packaging Assessment */}
              <div id="assessment" className="bg-[#13294b] p-8 rounded-3xl border border-blue-400/20 space-y-4">
                <Activity className="w-8 h-8 text-orange-400" />
                <h3 className="text-xl font-bold text-white">
                  Packaging Assessment
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Nefab packaging engineers conduct comprehensive on-site facility audits to uncover hidden handling damages, over-packaging, freight void space, and regulatory vulnerabilities.
                </p>
                <button
                  onClick={() => {
                    setContactTopic("Book a Site Packaging Assessment");
                    setContactOpen(true);
                  }}
                  className="inline-flex items-center text-xs font-bold text-orange-400 hover:text-orange-300 pt-2 text-left"
                >
                  <span>Book an on-site audit</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: LOGISTICS SERVICES
            ========================================================================= */}
        <section className="py-20 bg-white" id="logistics-services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#eb6608]">
                Supply Chain Integration
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
                Logistics Services
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Beyond manufacturing containers, we operate directly on your manufacturing floor and manage global reverse logistics loops.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contract Logistics */}
              <div id="contract-logistics" className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#0c2340]">
                    Contract Logistics
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Embedded teams running in-plant packaging lines, warehousing, kitting, sub-assembly, and container staging. Eliminates production line bottlenecks and cuts internal overhead.
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setContactTopic("Contract Logistics Inquiry");
                      setContactOpen(true);
                    }}
                    className="w-full py-2.5 px-4 rounded-full bg-[#0c2340] text-white text-xs font-bold hover:bg-[#13294b] transition-colors"
                  >
                    Learn More About Contract Logistics
                  </button>
                </div>
              </div>

              {/* Packing Services */}
              <div id="packing-services" className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#0c2340]">
                    Packing Services
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    On-site mobile packing crews equipped with specialized hoisting gear, vapor barrier heat sealers, and custom timber blocking for heavy industrial machinery, aerospace turbines, and power transformers.
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setContactTopic("On-Site Packing Services Inquiry");
                      setContactOpen(true);
                    }}
                    className="w-full py-2.5 px-4 rounded-full bg-[#0c2340] text-white text-xs font-bold hover:bg-[#13294b] transition-colors"
                  >
                    Learn More About Packing Services
                  </button>
                </div>
              </div>

              {/* Pooling Services */}
              <div id="pooling-services" className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#0c2340]">
                    Pooling Services
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Closed-loop asset pooling across our 145 worldwide logistics hubs. We track, collect from customer receiving docks, clean, inspect, repair, and restock containers just-in-time.
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setContactTopic("Pooling Services Inquiry");
                      setContactOpen(true);
                    }}
                    className="w-full py-2.5 px-4 rounded-full bg-[#0c2340] text-white text-xs font-bold hover:bg-[#13294b] transition-colors"
                  >
                    Learn More About Pooling Services
                  </button>
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