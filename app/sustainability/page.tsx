"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Users,
  Building2,
  Scale,
  Sparkles,
  Layers,
} from "lucide-react";

export default function SustainabilityPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Sustainability & PPWR");

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0c2340] selection:bg-orange-100 selection:text-[#eb6608]">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("Sustainability Consultation");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* =========================================================================
            SUSTAINABILITY HERO
            ========================================================================= */}
        <section className="relative bg-[#0c2340] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop"
              alt="Sustainable circular packaging forest"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <span className="inline-block bg-[#a3d9a5] text-[#0c2340] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                Our Purpose & Impact
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Saving Resources in Supply Chains, for a Better Tomorrow
              </h1>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
                We believe in creating a circular economy by eliminating void space, phasing out fossil-fuel plastics with FiberFlute™, and empowering global brands to comply with strict EU packaging directives.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#greencalc"
                  className="px-8 py-3.5 bg-[#eb6608] hover:bg-[#d45600] text-white font-bold text-sm rounded-full shadow-lg transition-all"
                >
                  Model with GreenCalc™ LCA
                </a>
                <a
                  href="#ppwr"
                  className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm rounded-full backdrop-blur-sm transition-all"
                >
                  Read PPWR Compliance Guide
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Core Pillars from Mega Menu (Screenshot 3) */}
        <section className="py-20 bg-[#edf2f7] border-b border-gray-200" id="framework">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#eb6608]">
                Strategic Sustainability Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
                Our 6 Pillars of Sustainable Impact
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Derived directly from our commitment to science-based targets, circular innovation, and corporate ethics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. OUR PURPOSE */}
              <div id="purpose" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#eb6608] flex items-center justify-center font-bold">
                  <Sparkles className="w-6 h-6 text-[#eb6608]" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-1">
                    OUR PURPOSE
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    Driving Value through Sustainability
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We look at supply chains holistically. By optimizing packaging materials and transport efficiency, we reduce both environmental impact and operational costs for our clients worldwide.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold text-[#0066cc]">Learn more about our purpose →</span>
                </div>
              </div>

              {/* 2. CUSTOMER SUPPLY CHAINS */}
              <div id="customer-chains" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <TrendingDown className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-1">
                    CUSTOMER SUPPLY CHAINS
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    Minimize Carbon Emissions by Improving Transport Efficiency
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Over 90% of packaging carbon emissions originate during actual transport. By engineering lighter crates, maximizing pallet cubing, and eliminating void space, we slash freight fuel consumption.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold text-[#0066cc]">Explore transport reduction models →</span>
                </div>
              </div>

              {/* 3. CIRCULAR BUSINESS MODELS */}
              <div id="circular" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0066cc] flex items-center justify-center font-bold">
                  <Recycle className="w-6 h-6 text-[#0066cc]" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-1">
                    CIRCULAR BUSINESS MODELS
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    With Sustainable Packaging and Services
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Transitioning from linear "take-make-waste" habits to returnable packaging loops. We supply durable containers, manage reverse logistics, and repair units across 145 worldwide hubs.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold text-[#0066cc]">Discover circular pooling systems →</span>
                </div>
              </div>

              {/* 4. OUR SUPPLY CHAIN */}
              <div id="our-chain" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <TreePine className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-1">
                    OUR SUPPLY CHAIN
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    Responsible Sourcing and Supplier Evaluation
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Every board of timber and sheet of plywood must satisfy strict FSC® / PEFC chain-of-custody standards. We evaluate 100% of strategic suppliers through EcoVadis ESG assessments.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold text-[#0066cc]">View supplier code of conduct →</span>
                </div>
              </div>

              {/* 5. PEOPLE & ETHICS */}
              <div id="ethics" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-1">
                    PEOPLE & ETHICS
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    Driven by our Core Values: Simplicity, Respect, Empowerment
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Creating safe, inclusive working environments for over 6,000 colleagues across 39 nations. We uphold human rights, zero tolerance for bribery, and empower frontline workers.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold text-[#0066cc]">Read our global ethics charter →</span>
                </div>
              </div>

              {/* 6. REPORTS, GOVERNANCE & COMPLIANCE */}
              <div id="governance" className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Scale className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-1">
                    REPORTS, GOVERNANCE & COMPLIANCE
                  </h3>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    Sustainability at the Heart of Nefab Corporate Governance
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Transparent disclosures conforming to EU CSRD standards, verified ISO 14001 environmental management, and full compliance support for PPWR and EUDR regulations.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold text-[#0066cc]">Download 2025 Sustainability Report →</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            PPWR & EUDR REGULATORY DEEP DIVE
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="ppwr">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#eb6608] bg-orange-50 px-3 py-1 rounded-full">
                  European Packaging Directives
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight">
                  EU Packaging and Packaging Waste Regulation (PPWR)
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  The newly enacted European PPWR mandates sweeping structural transformations for all goods transported within the EU:
                </p>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-200 flex items-start space-x-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0c2340]">Mandatory 40% Maximum Void Space Ratio</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Packaging cannot contain more than 40% empty void space or filler. Our custom-engineered right-sized packaging guarantees exact dimensional compliance.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-200 flex items-start space-x-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0c2340]">Design for Recycling (DfR) Grade Requirements</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        By 2030, all packaging must be recyclable at scale (Grade A or B). We replace complex multi-layer plastics with mono-material FiberFlute™ and paper pulp.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-200 flex items-start space-x-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0c2340]">Mandatory Reusable Transport Packaging Quotas</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Up to 40% of transport packaging between economic operators within the same member state must be returnable. Our pooling services provide instant compliance without capital expense.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setContactTopic("PPWR Compliance Audit");
                      setContactOpen(true);
                    }}
                    className="px-8 py-3.5 bg-[#eb6608] hover:bg-[#d45600] text-white font-bold text-sm rounded-full shadow-md transition-all"
                  >
                    Request a PPWR Readiness Review
                  </button>
                </div>
              </div>

              {/* Right Side: Container ship photo */}
              <div className="lg:col-span-5">
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                  <Image
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop"
                    alt="International cargo ship navigating European waters"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-300">EUDR Compliance</span>
                    <h3 className="text-lg font-black text-white mt-1">Zero Deforestation Regulation</h3>
                    <p className="text-xs text-gray-300 mt-1">
                      Nefab traces 100% of wood fiber back to geo-located forest plots with strict satellite monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            GREENCALC LCA CALCULATOR
            ========================================================================= */}
        <section id="greencalc" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GreenCalcCalculator
              onOpenContactWithTopic={(topic) => {
                setContactTopic(topic);
                setContactOpen(true);
              }}
            />
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