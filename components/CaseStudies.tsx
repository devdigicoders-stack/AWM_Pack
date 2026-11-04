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
      client: "Ras Laffan Petrochemical Producer",
      sector: "Oil & Gas / Petrochemicals",
      title: "Standardizing ISPM 15 Heavy-Duty Drum Pallets with Zero Transit Failures",
      summary: "A major petrochemical refiner in Ras Laffan required heat-treated CP-7 and CP-9 standard chemical pallets capable of carrying four 200L steel drums (1,500+ kg dynamic payload) under extreme Arabian Gulf ambient temperatures exceeding 48°C.",
      solution: "AWMPACK engineered custom kiln-dried European softwood 4-way block pallets with reinforced chamfered base runners and official IPPC ISPM 15 thermal stamps, dispatched on rapid JIT delivery schedules from our Birkat Al-Awamer facility.",
      results: [
        { label: "Transit Damage Rate", value: "0.00%" },
        { label: "Loading Speed Efficiency", value: "+35%" },
        { label: "Annual Pallet Cost Savings", value: "22%" },
      ],
      quote: "AWMPACK's Birkat Al-Awamer plant delivered rigorous ISPM 15 compliance and the structural rigidity required for our overseas marine container shipments.",
      author: "Materials & Logistics Superintendent, Ras Laffan Industrial City",
    },
    {
      client: "Doha Infrastructure Consortium",
      sector: "Construction & Infrastructure",
      title: "Custom Heavy Timber Saddles & Skids for Mega Precast Transit",
      summary: "Transporting 12-meter precast concrete elements and delicate architectural facade panels across Qatar required specialized high-tensile cradles and timber skids to eliminate hairline fractures during crane rigging.",
      solution: "AWMPACK designed and fabricated bespoke 100mm x 100mm treated softwood skid runners and export-grade heavy wooden crates lined with moisture barriers, backed by ISO 9001 quality audits.",
      results: [
        { label: "Transit Breakage Incidents", value: "0 Incidents" },
        { label: "Design-to-Delivery Turnaround", value: "48 Hours" },
        { label: "In-Country Value (ICV) Score", value: "100% Local" },
      ],
      quote: "Having an ICV-certified industrial manufacturer right here in Birkat Al-Awamer gave our project team immediate prototyping and on-demand delivery.",
      author: "Project Procurement Director, Qatar National Vision 2030 Projects",
    },
    {
      client: "Hamad Port 3PL Freight Network",
      sector: "Logistics & Maritime Export",
      title: "Circular Compressed Sawdust Pallet Pooling Diverting 850 Tons of Waste",
      summary: "A premier 3PL hub operating at Hamad Port Free Zone sought to lower container tare weight, eliminate timber splintering, and comply with strict zero-waste sustainability mandates.",
      solution: "AWMPACK introduced our circular 'Waste to Usable Product' high-density compressed sawdust block pallets, backed by an active pallet recovery and pooling loop throughout Doha.",
      results: [
        { label: "Wood Waste Diverted Locally", value: "850 Tons" },
        { label: "Export Customs 1st Pass Rate", value: "100%" },
        { label: "Logistics Freight Cost Savings", value: "18%" },
      ],
      quote: "The compressed sawdust block pallets from AWMPACK solved our export customs clearance while advancing Qatar's circular economy.",
      author: "Operations General Manager, Hamad Port Logistics Hub",
    },
  ];

  const current = cases[activeCase];

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-200" id="cases">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[#002b49] text-xs font-bold tracking-wider uppercase bg-blue-100/70 px-3.5 py-1.5 rounded-full border border-blue-200">
            <Award className="w-3.5 h-3.5 text-[#0099e5]" />
            <span>Proven Industrial Performance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b49] tracking-tight">
            Customer Success Stories in Qatar
          </h2>
          <p className="text-base text-gray-600">
            Discover how leading industrial enterprises, petrochemical plants, and infrastructure contractors across Qatar rely on AWMPACK for certified pallets, crating, and circular waste-to-product solutions.
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
                    ? "bg-white border-[#0099e5] shadow-lg ring-2 ring-[#0099e5]/20 translate-y-[-2px]"
                    : "bg-white/70 border-gray-200 hover:bg-white text-gray-600"
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0099e5]">
                  {cs.sector}
                </span>
                <h4 className="text-sm font-bold text-[#002b49] mt-1 line-clamp-1">
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  Case Study: {current.client}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002b49] mt-3">
                  {current.title}
                </h3>
              </div>

              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <div>
                  <strong className="text-[#002b49] block text-xs uppercase tracking-wider mb-1">
                    The Challenge:
                  </strong>
                  <p>{current.summary}</p>
                </div>

                <div>
                  <strong className="text-[#002b49] block text-xs uppercase tracking-wider mb-1">
                    The AWMPACK Solution:
                  </strong>
                  <p>{current.solution}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="border-l-4 border-[#0099e5] pl-4 py-2 italic text-sm text-gray-700 bg-blue-50/50 rounded-r-xl">
                &ldquo;{current.quote}&rdquo;
                <div className="text-xs font-semibold text-[#002b49] mt-1.5 not-italic">
                  — {current.author}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/solutions"
                  className="inline-flex items-center space-x-2 text-sm font-bold text-[#0099e5] hover:text-[#002b49] transition-colors"
                >
                  <span>Explore All AWMPACK Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-gray-300">|</span>
                <button
                  onClick={onOpenContact}
                  className="text-sm font-semibold text-gray-700 hover:text-[#002b49]"
                >
                  Request Industrial Pallet Audit
                </button>
              </div>
            </div>

            {/* Right KPI Metrics */}
            <div className="lg:col-span-5 bg-[#00223a] text-white rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl border border-blue-900/40">
              <div className="flex items-center space-x-2 text-[#0099e5] text-xs font-bold uppercase tracking-wider">
                <TrendingDown className="w-4 h-4 text-emerald-400" />
                <span>Verified Field Results in Qatar</span>
              </div>

              <div className="space-y-3">
                {current.results.map((res) => (
                  <div
                    key={res.label}
                    className="p-4 rounded-xl bg-[#002b49] border border-blue-900/60 flex items-center justify-between"
                  >
                    <span className="text-xs text-gray-300 font-medium">{res.label}</span>
                    <span className="text-xl font-black text-emerald-400">{res.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-blue-900/80 text-center">
                <p className="text-xs text-gray-400 mb-3">
                  Certified under ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 & ICV Qatar standards.
                </p>
                <button
                  onClick={onOpenContact}
                  className="w-full py-2.5 bg-[#0099e5] hover:bg-blue-600 text-white text-xs font-bold rounded-lg shadow-md transition-colors"
                >
                  Request Technical Quotation & Specs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
