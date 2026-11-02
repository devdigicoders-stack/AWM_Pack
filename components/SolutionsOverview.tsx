"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Package,
  Truck,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  Leaf,
  Shield,
  Zap,
  RotateCcw,
  BarChart3,
  Boxes,
} from "lucide-react";

interface SolutionsOverviewProps {
  onOpenContact?: () => void;
}

export default function SolutionsOverview({ onOpenContact }: SolutionsOverviewProps) {
  const [activeTab, setActiveTab] = useState<"packaging" | "logistics" | "digital" | "multimaterial">("packaging");

  const solutions = {
    packaging: {
      tag: "Engineered Protection",
      title: "Packaging Solutions",
      subtitle: "Custom-engineered outer and inner packaging built to withstand severe transit conditions while minimizing weight, volume, and material waste.",
      features: [
        {
          name: "FiberFlute™ Eco Cushioning",
          desc: "100% recyclable, paper-based engineered cushion designed to replace polystyrene and polyurethane foam.",
          badge: "Circular Innovation",
        },
        {
          name: "ExPak Foldable Plywood Crates",
          desc: "High-strength, lightweight industrial plywood containers that arrive flat-packed, saving up to 80% storage space.",
          badge: "Nefab Flagship",
        },
        {
          name: "Dangerous Goods & LiB Containment",
          desc: "UN-certified packaging engineered specifically for lithium-ion battery modules, hazardous chemicals, and munitions.",
          badge: "UN Certified",
        },
        {
          name: "ESD & Anti-Corrosion Protection",
          desc: "Advanced VCI (Vapor Corrosion Inhibitor) films and electrostatic discharge protective inner layers for microelectronics.",
          badge: "Semicon & Tech",
        },
      ],
      stats: [
        { label: "Volume Reduction", value: "Up to 30%" },
        { label: "Product Damage Rate", value: "0.01%" },
        { label: "FSC Certified Sourcing", value: "100%" },
      ],
      href: "/solutions#packaging",
    },
    logistics: {
      tag: "Operational Excellence",
      title: "Logistics Services",
      subtitle: "From on-site contract packing to regional returnable pooling management, we run your packaging operations seamlessly.",
      features: [
        {
          name: "On-Site Contract Packing",
          desc: "Dedicated Nefab packing specialists embedded inside your plant, executing custom crating, blocking, and container loading.",
          badge: "Turnkey Operations",
        },
        {
          name: "Returnable Pooling Loops",
          desc: "Closed-loop logistics managing the collection, sorting, inspection, repair, and redistribution of reusable packaging.",
          badge: "Zero-Waste Flow",
        },
        {
          name: "Just-In-Time (JIT) Supply",
          desc: "Strategic warehousing near your manufacturing lines, delivering exact packaging quantities to match your shift schedule.",
          badge: "Lean Manufacturing",
        },
        {
          name: "Global Freight Integration",
          desc: "Coordinating multi-modal freight packaging optimization to maximize truck and ocean container cubing.",
          badge: "Freight Optimization",
        },
      ],
      stats: [
        { label: "Labor Time Saved", value: "45%" },
        { label: "Loop Reuse Cycles", value: "50+ Trips" },
        { label: "Global Service Centers", value: "145 Hubs" },
      ],
      href: "/solutions#logistics",
    },
    digital: {
      tag: "Connected Supply Chains",
      title: "Digital Solutions",
      subtitle: "Real-time visibility, IoT environmental tracking, and automated carbon accounting across your entire transit footprint.",
      features: [
        {
          name: "Smart IoT Transit Trackers",
          desc: "Sensor tags recording real-time impact (G-force), tilt, ambient temperature, humidity, and GPS location across routes.",
          badge: "Real-Time Telemetry",
        },
        {
          name: "Nefab Tracking Portal",
          desc: "Unified cloud dashboard displaying live container locations, delivery ETAs, and automatic shock threshold alarms.",
          badge: "Cloud Platform",
        },
        {
          name: "Automated LCA Data Pipeline",
          desc: "Direct integration into your ERP/WMS to calculate accurate Scope 3 supply chain carbon emissions automatically.",
          badge: "Scope 3 Reporting",
        },
        {
          name: "Asset Utilization Analytics",
          desc: "Identify bottlenecks, lost returnable crates, and idle containers across international transit lanes.",
          badge: "Fleet Optimization",
        },
      ],
      stats: [
        { label: "Asset Loss Reduction", value: "98%" },
        { label: "Telemetry Latency", value: "< 5 sec" },
        { label: "Alert Resolution Speed", value: "4x Faster" },
      ],
      href: "/solutions#digital",
    },
    multimaterial: {
      tag: "Unbiased Optimization",
      title: "Multi-Material Engineering",
      subtitle: "We are strictly material-neutral. We combine plywood, corrugated fiber, steel, aluminum, and engineered plastics for optimum performance.",
      features: [
        {
          name: "Hybrid Material Design",
          desc: "Balancing the lightweight flexibility of corrugated paper with the structural rigidity of steel and plywood.",
          badge: "Custom Engineering",
        },
        {
          name: "Foam-Free Transitions",
          desc: "Replacing petrochemical foams with bio-based fiber, molded pulp, and thermoformed recycled plastics.",
          badge: "Eco-Transition",
        },
        {
          name: "Lightweight High-Strength Wood",
          desc: "Sustainably harvested Scandinavian birch and pine engineered into ultra-thin yet impact-resistant crating.",
          badge: "Certified Timber",
        },
        {
          name: "Thermoformed Recycled Plastics",
          desc: "Precision component trays made from up to 100% post-consumer recycled plastics, washable and reusable.",
          badge: "Circular Polymer",
        },
      ],
      stats: [
        { label: "Average Weight Savings", value: "22%" },
        { label: "Recycled Content", value: "Up to 100%" },
        { label: "Material Options", value: "50+ Grades" },
      ],
      href: "/solutions#multimaterial",
    },
  };

  const current = solutions[activeTab];

  return (
    <section className="py-24 bg-white border-b border-gray-100" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-emerald-700 text-xs font-bold tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full">
            <Layers className="w-3.5 h-3.5" />
            <span>Complete Global Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            Integrated Solutions Designed to Save Resources
          </h2>
          <p className="text-base text-gray-600">
            From engineered outer boxes to global returnable logistics loops and digital track-and-trace, Nefab delivers end-to-end supply chain optimization.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-gray-100 border border-gray-200/80 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab("packaging")}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "packaging"
                  ? "bg-white text-emerald-700 shadow-md shadow-gray-200"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Packaging Solutions</span>
            </button>

            <button
              onClick={() => setActiveTab("logistics")}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "logistics"
                  ? "bg-white text-emerald-700 shadow-md shadow-gray-200"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>Logistics Services</span>
            </button>

            <button
              onClick={() => setActiveTab("digital")}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "digital"
                  ? "bg-white text-emerald-700 shadow-md shadow-gray-200"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Digital & IoT Tracking</span>
            </button>

            <button
              onClick={() => setActiveTab("multimaterial")}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "multimaterial"
                  ? "bg-white text-emerald-700 shadow-md shadow-gray-200"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Boxes className="w-4 h-4" />
              <span>Multi-Material</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="mt-12 bg-gradient-to-br from-gray-50 via-white to-emerald-50/20 rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  {current.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mt-1">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                  {current.subtitle}
                </p>
              </div>

              {/* 4 Feature Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {current.features.map((feat) => (
                  <div
                    key={feat.name}
                    className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100 transition-colors">
                        {feat.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-950 group-hover:text-emerald-700 transition-colors">
                      {feat.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-4 flex items-center space-x-4">
                <Link
                  href={current.href}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
                >
                  <span>Explore full {current.title} portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-gray-300">|</span>
                <button
                  onClick={onOpenContact}
                  className="text-sm font-semibold text-gray-700 hover:text-gray-900"
                >
                  Request Technical Consultation
                </button>
              </div>
            </div>

            {/* Right KPI Sidebar */}
            <div className="lg:col-span-5 bg-gray-950 text-white rounded-2xl p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl"></div>

              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <BarChart3 className="w-4 h-4" />
                <span>Validated Performance Impact</span>
              </div>

              <h4 className="text-lg font-bold text-white">
                Quantified Benefits with Nefab {current.title}
              </h4>

              <div className="space-y-4">
                {current.stats.map((st) => (
                  <div
                    key={st.label}
                    className="p-4 rounded-xl bg-gray-900/90 border border-gray-800 flex items-center justify-between"
                  >
                    <span className="text-xs font-medium text-gray-400">{st.label}</span>
                    <span className="text-lg font-black text-emerald-400">{st.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-gray-800/80">
                <p className="text-xs text-gray-400 mb-3">
                  All solutions are modeled through our certified GreenCalc™ LCA software to document financial and carbon savings.
                </p>
                <button
                  onClick={onOpenContact}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all shadow-md"
                >
                  Schedule Solution Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
