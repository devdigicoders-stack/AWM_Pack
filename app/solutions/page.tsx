"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import {
  Package,
  Layers,
  ShieldCheck,
  Boxes,
  Truck,
  RotateCcw,
  CheckCircle2,
  FileCheck,
  TrendingDown,
  ArrowRight,
  Flame,
  Leaf,
  Award,
  Factory,
  Sparkles,
  Recycle,
  Tag,
  HelpCircle,
} from "lucide-react";

export default function SolutionsPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Product Specifications");
  const [activeTab, setActiveTab] = useState("all");

  const products = [
    {
      id: "awmpc-pallets",
      category: "pallets",
      name: "AWMPC Pallets",
      badge: "Proprietary Line • Euro Alternative",
      description:
        "Branded with the official 'AWMPC' marking, these high-strength wooden pallets are engineered as a cost-effective, high-load alternative to standard Euro pallets while complying with all industrial warehouse standards.",
      specs: [
        "Dimensions: 1200 x 800 mm & 1200 x 1000 mm",
        "Load rating: Static 4,000 kg / Dynamic 1,500 kg",
        "Cost-effective alternative to standard Euro pallets",
        "Certified IPPC ISPM-15 heat-treated for export",
      ],
      icon: Package,
    },
    {
      id: "industrial-pallets",
      category: "pallets",
      name: "Industrial Pallets",
      badge: "Heavy-Duty Warehousing",
      description:
        "Standard industrial-grade pallets (1200 x 1000 x 145 mm) engineered for factories, heavy manufacturing, automated racking, and petrochemical handling across Qatar.",
      specs: [
        "Standard size: 1200 x 1000 x 145 mm (custom sizes available)",
        "Entry: 4-way forklift entry (or 2-way with heavy stringers)",
        "Materials: Pine, spruce, poplar, beech, and hardwoods",
        "Certified structural ring-shank nails & chamfered edges",
      ],
      icon: Factory,
    },
    {
      id: "used-pallets",
      category: "pallets",
      name: "Used Pallets",
      badge: "Cost-Effective & Sustainable",
      description:
        "Thoroughly inspected, sorted, and reconditioned pre-owned pallets designed to cycle 5 to 6 times. Offers significant cost savings for local warehouse storage while maintaining full ISPM 15 compliance.",
      specs: [
        "Graded into distinct quality tiers (Grade A & B)",
        "Cycles 5–6 times under proper warehouse handling",
        "Substantial cost savings vs. new timber pallets",
        "Inspected and certified for load safety & stability",
      ],
      icon: RotateCcw,
    },
    {
      id: "half-pallets",
      category: "pallets",
      name: "Half Pallets",
      badge: "Retail & POP Displays • DIN 15146",
      description:
        "Compact 600 x 800 x 144 mm footprint (including Düsseldorf Pallets DD adhering to DIN 15146). Perfect for retail restock, in-store Point of Purchase (POP) displays, and narrow door navigation without re-palletizing.",
      specs: [
        "Dimensions: 600 x 800 x 144 mm (Düsseldorf DD standard)",
        "Ideal for supermarket retail & in-store display stands",
        "Narrow door & compact corridor clearance",
        "IPPC ISPM-15 compliant and kiln-dried",
      ],
      icon: Boxes,
    },
    {
      id: "special-pallets",
      category: "pallets",
      name: "Special Pallets",
      badge: "Custom Engineering",
      description:
        "Tailor-made pallets built strictly to client payload dimensions, CAD drawings, and weight distribution. Engineered for chemical drums, heavy machinery, pipeline spools, and oversized project cargo.",
      specs: [
        "Custom dimensions, deckboard thickness & runner notches",
        "Engineered for Ras Laffan & Mesaieed heavy petrochemical cargo",
        "Reinforced bottom deckboards for four-drum CP-7 configurations",
        "Collaborative CAD 3D modeling and load simulation",
      ],
      icon: Layers,
    },
    {
      id: "one-way-pallets",
      category: "pallets",
      name: "One-Way-Pallets (OWP)",
      badge: "Lightweight Export Solutions",
      description:
        "Cost-optimized, single-trip wooden pallets engineered for outbound international air and sea freight where pallets are not returned. Low tare weight saves significant freight expenditure.",
      specs: [
        "Ultra-low tare weight to reduce air & ocean freight fees",
        "Eliminates pallet retrieval and reverse logistics costs",
        "Fully stamped with IPPC ISPM-15 heat treatment seal",
        "Available in standard 1200x800mm, 1200x1000mm & custom",
      ],
      icon: Truck,
    },
    {
      id: "pallet-collars",
      category: "crates",
      name: "Pallet Collars",
      badge: "Modular Foldable Storage",
      description:
        "Transform standard pallets into stackable, secure storage boxes. Constructed with solid softwood and galvanized steel corner hinges that fold completely flat during return logistics to save 75% warehouse space.",
      specs: [
        "Sizes: 1200x800mm, 800x600mm, 1200x1000mm & custom",
        "Heavy-duty galvanized steel corner hinges with interlocking pins",
        "Stackable up to 5 tiers for flexible bulk cargo depth",
        "Folds flat when empty for efficient reverse logistics",
      ],
      icon: Boxes,
    },
    {
      id: "wooden-boxes-crates",
      category: "crates",
      name: "Wooden Boxes & Crates",
      badge: "Seaworthy Maritime Packaging",
      description:
        "Solid timber heavy-duty boxes and export crates engineered to protect sensitive machinery, electrical switchgear, and fragile cargo during maritime transit through Hamad Port.",
      specs: [
        "Solid timber framing with plywood or solid board sheathing",
        "Seaworthy moisture protection with VCI barrier foil & desiccants",
        "Internal blocking, custom saddles, and cushioning bracing",
        "Crane lifting lug points and heavy-duty skid runners",
      ],
      icon: ShieldCheck,
    },
    {
      id: "compressed-sawdust-wood-blocks",
      category: "materials",
      name: "Compressed Sawdust Wood Blocks",
      badge: "Waste to Usable Product",
      description:
        "Manufactured in-house from 100% recycled industrial wood waste and sawdust under extreme heat and hydraulic pressure. Delivers twice the nail-gripping strength of standard solid wood and is naturally ISPM-15 exempt.",
      specs: [
        "Provides 2x nail withdrawal/gripping strength vs. solid wood",
        "Naturally ISPM-15 exempt (engineered composite wood product)",
        "Uniform density: zero knots, cracks, or warping splits",
        "Water-resistant, pest-proof, and 100% eco-friendly & recyclable",
      ],
      icon: Recycle,
    },
    {
      id: "heat-treatment",
      category: "services",
      name: "Heat Treatment (ISPM 15)",
      badge: "Certified Thermal Kilns • FAO IPPC",
      description:
        "Certified thermal heat-treatment kilns operating in Birkat Al-Awamer. Heats timber cores to a minimum of 56°C for 30 minutes, applying official IPPC 'HT' stamps and issuing Phytosanitary export certificates.",
      specs: [
        "Core heating: 56°C for at least 30 minutes in certified kilns",
        "Official IPPC seal stamped on two opposite pallet faces",
        "Eliminates customs quarantine delays worldwide (EU, USA, China, GCC)",
        "Complete Phytosanitary compliance documentation provided",
      ],
      icon: Flame,
    },
  ];

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#002b49] selection:bg-blue-100 selection:text-[#003366]">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("General Product & Solutions Inquiries");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* =========================================================================
            SOLUTIONS HERO
            ========================================================================= */}
        <section className="relative w-full h-[360px] sm:h-[400px] lg:h-[440px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
            alt="AWMPACK Industrial Wooden Pallets & Crates Facility"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001829]/95 via-[#00223a]/75 to-[#002b49]/35"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl space-y-3.5">
                <div className="inline-flex items-center space-x-2 bg-[#0099e5]/25 border border-[#0099e5]/40 text-blue-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                  <span>AWMPACK Product Portfolio • State of Qatar 🇶🇦</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                    Industrial Pallets, Custom Crates &amp; Wood Recycling Solutions
                  </h1>
                  <p className="text-blue-300 text-xs sm:text-sm font-bold tracking-wide uppercase">
                    Al Waad Manufacturing Packaging Company (AWMPC)
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                  Al Waad Manufacturing Packaging Company (AWMPC) supplies Qatar&apos;s leading oil &amp; gas, infrastructure, and manufacturing enterprises with certified ISPM 15 heat-treated pallets, heavy crates, and eco-friendly compressed wood blocks.
                </p>

                <div className="pt-1.5 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setContactTopic("Custom Pallet Engineering Consultation");
                      setContactOpen(true);
                    }}
                    className="px-6 py-2.5 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Request Technical Quotation
                  </button>
                  <Link
                    href="/engineering#ispm15"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    ISPM 15 Heat Treatment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            QUICK FILTER TABS & PRODUCT CATEGORY NAVIGATION
            ========================================================================= */}
        <div className="sticky top-[73px] z-30 bg-[#edf2f7] border-b border-gray-200 py-3 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto text-xs font-bold whitespace-nowrap gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 uppercase tracking-wider hidden sm:inline mr-2">Category:</span>
              {[
                { id: "all", label: "All Products & Services (10)" },
                { id: "pallets", label: "Pallets (6)" },
                { id: "crates", label: "Boxes & Collars (2)" },
                { id: "materials", label: "Recycled Wood Blocks (1)" },
                { id: "services", label: "ISPM 15 & Services (1)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full transition-all ${
                    activeTab === tab.id
                      ? "bg-[#002b49] text-white shadow-xs"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setContactTopic("Full Catalog Quotation");
                setContactOpen(true);
              }}
              className="text-[#0099e5] hover:underline font-bold"
            >
              Request Price List →
            </button>
          </div>
        </div>

        {/* =========================================================================
            THE COMPLETE 10 PRODUCTS & SERVICES PORTFOLIO (From awmpack.com)
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="catalog">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Complete Product Range
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight mt-1">
                Industrial Packaging &amp; Pallet Catalog
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Every product is manufactured in Birkat Al-Awamer, Qatar to strict international standards (ISO 9001, ISO 14001, IPPC ISPM-15, and FSC).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((prod) => {
                const IconComponent = prod.icon;
                return (
                  <div
                    key={prod.id}
                    id={prod.id}
                    className="bg-[#f8fafc] border border-gray-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:border-[#0099e5]/60 transition-all group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#003366] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                          <IconComponent className="w-6 h-6 text-[#0099e5]" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-[#003366] border border-blue-200/60">
                          {prod.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                        {prod.name}
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        {prod.description}
                      </p>

                      <div className="pt-3 border-t border-gray-200/80 space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                          Technical Specifications:
                        </span>
                        <ul className="space-y-1.5 text-xs text-gray-700">
                          {prod.specs.map((spec, sIdx) => (
                            <li key={sIdx} className="flex items-start space-x-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-tight">{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 mt-4 border-t border-gray-200/60">
                      {prod.id === "awmpc-pallets" ? (
                        <div className="space-y-2">
                          <Link
                            href="/solutions/awmpc-pallets"
                            className="w-full py-2.5 px-4 rounded-full bg-[#002b49] text-white text-xs font-bold hover:bg-[#0099e5] transition-all text-center flex items-center justify-center space-x-1.5 shadow-sm"
                          >
                            <span>View Full Blueprint &amp; Specs</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => {
                              setContactTopic(`Inquiry for ${prod.name}`);
                              setContactOpen(true);
                            }}
                            className="w-full py-2 px-3 rounded-full bg-white border border-gray-300 text-[11px] font-bold text-gray-700 hover:bg-gray-100 transition-all text-center"
                          >
                            Request Factory Quote
                          </button>
                        </div>
                      ) : prod.id === "industrial-pallets" ? (
                        <div className="space-y-2">
                          <Link
                            href="/solutions/industrial-pallets"
                            className="w-full py-2.5 px-4 rounded-full bg-[#002b49] text-white text-xs font-bold hover:bg-[#0099e5] transition-all text-center flex items-center justify-center space-x-1.5 shadow-sm"
                          >
                            <span>1200&times;1000 Specs &amp; Drawings</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => {
                              setContactTopic(`Inquiry for ${prod.name}`);
                              setContactOpen(true);
                            }}
                            className="w-full py-2 px-3 rounded-full bg-white border border-gray-300 text-[11px] font-bold text-gray-700 hover:bg-gray-100 transition-all text-center"
                          >
                            Request Factory Quote
                          </button>
                        </div>
                      ) : prod.id === "half-pallets" ? (
                        <div className="space-y-2">
                          <Link
                            href="/solutions/half-pallets"
                            className="w-full py-2.5 px-4 rounded-full bg-[#002b49] text-white text-xs font-bold hover:bg-[#0099e5] transition-all text-center flex items-center justify-center space-x-1.5 shadow-sm"
                          >
                            <span>Retail POP &amp; DIN 15146 Specs</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => {
                              setContactTopic(`Inquiry for ${prod.name}`);
                              setContactOpen(true);
                            }}
                            className="w-full py-2 px-3 rounded-full bg-white border border-gray-300 text-[11px] font-bold text-gray-700 hover:bg-gray-100 transition-all text-center"
                          >
                            Request Factory Quote
                          </button>
                        </div>
                      ) : prod.id === "used-pallets" ? (
                        <div className="space-y-2">
                          <Link
                            href="/solutions/used-pallets"
                            className="w-full py-2.5 px-4 rounded-full bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-600 transition-all text-center flex items-center justify-center space-x-1.5 shadow-sm"
                          >
                            <span>View Grades A &amp; B &amp; Buyback</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => {
                              setContactTopic(`Inquiry for ${prod.name}`);
                              setContactOpen(true);
                            }}
                            className="w-full py-2 px-3 rounded-full bg-white border border-gray-300 text-[11px] font-bold text-gray-700 hover:bg-gray-100 transition-all text-center"
                          >
                            Request Factory Quote
                          </button>
                        </div>
                      ) : prod.id === "special-pallets" ? (
                        <div className="space-y-2">
                          <Link
                            href="/solutions/special-pallets"
                            className="w-full py-2.5 px-4 rounded-full bg-blue-700 text-white text-xs font-bold hover:bg-blue-600 transition-all text-center flex items-center justify-center space-x-1.5 shadow-sm"
                          >
                            <span>Custom CAD &amp; Engineering Specs</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => {
                              setContactTopic(`Inquiry for ${prod.name}`);
                              setContactOpen(true);
                            }}
                            className="w-full py-2 px-3 rounded-full bg-white border border-gray-300 text-[11px] font-bold text-gray-700 hover:bg-gray-100 transition-all text-center"
                          >
                            Request Custom Quote
                          </button>
                        </div>
                      ) : prod.id === "heat-treatment" ? (
                        <div className="space-y-2">
                          <Link
                            href="/solutions/heat-treatment"
                            className="w-full py-2.5 px-4 rounded-full bg-amber-600 text-white text-xs font-bold hover:bg-amber-500 transition-all text-center flex items-center justify-center space-x-1.5 shadow-sm"
                          >
                            <span>View Kiln Facility &amp; Process</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => {
                              setContactTopic(`Inquiry for ${prod.name}`);
                              setContactOpen(true);
                            }}
                            className="w-full py-2 px-3 rounded-full bg-white border border-gray-300 text-[11px] font-bold text-gray-700 hover:bg-gray-100 transition-all text-center"
                          >
                            Book Kiln Batch
                          </button>
                        </div>
                      ) : prod.id === "pallet-collars" ? (
                        <div className="space-y-2">
                          <Link
                            href="/solutions/pallet-collars"
                            className="w-full py-2.5 px-4 rounded-full bg-[#002b49] text-white text-xs font-bold hover:bg-[#0099e5] transition-all text-center flex items-center justify-center space-x-1.5 shadow-sm"
                          >
                            <span>Collapsible Collars Specs</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => {
                              setContactTopic(`Inquiry for ${prod.name}`);
                              setContactOpen(true);
                            }}
                            className="w-full py-2 px-3 rounded-full bg-white border border-gray-300 text-[11px] font-bold text-gray-700 hover:bg-gray-100 transition-all text-center"
                          >
                            Request Factory Quote
                          </button>
                        </div>
                      ) : prod.id === "one-way-pallets" ? (
                        <div className="space-y-2">
                          <Link
                            href="/solutions/one-way-pallets"
                            className="w-full py-2.5 px-4 rounded-full bg-[#002b49] text-white text-xs font-bold hover:bg-[#0099e5] transition-all text-center flex items-center justify-center space-x-1.5 shadow-sm"
                          >
                            <span>Single-Trip Export Specs</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => {
                              setContactTopic(`Inquiry for ${prod.name}`);
                              setContactOpen(true);
                            }}
                            className="w-full py-2 px-3 rounded-full bg-white border border-gray-300 text-[11px] font-bold text-gray-700 hover:bg-gray-100 transition-all text-center"
                          >
                            Request Factory Quote
                          </button>
                        </div>
                      ) : prod.id === "wooden-boxes-crates" ? (
                        <div className="space-y-2">
                          <Link
                            href="/solutions/wooden-boxes-crates"
                            className="w-full py-2.5 px-4 rounded-full bg-[#002b49] text-white text-xs font-bold hover:bg-[#0099e5] transition-all text-center flex items-center justify-center space-x-1.5 shadow-sm"
                          >
                            <span>Seaworthy Crates &amp; Boxes Specs</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => {
                              setContactTopic(`Inquiry for ${prod.name}`);
                              setContactOpen(true);
                            }}
                            className="w-full py-2 px-3 rounded-full bg-white border border-gray-300 text-[11px] font-bold text-gray-700 hover:bg-gray-100 transition-all text-center"
                          >
                            Request Custom Quote
                          </button>
                        </div>
                      ) : prod.id === "compressed-sawdust-wood-blocks" ? (
                        <div className="space-y-2">
                          <Link
                            href="/solutions/compressed-sawdust-wood-blocks"
                            className="w-full py-2.5 px-4 rounded-full bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-600 transition-all text-center flex items-center justify-center space-x-1.5 shadow-sm"
                          >
                            <span>Eco Sawdust Blocks Specs</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => {
                              setContactTopic(`Inquiry for ${prod.name}`);
                              setContactOpen(true);
                            }}
                            className="w-full py-2 px-3 rounded-full bg-white border border-gray-300 text-[11px] font-bold text-gray-700 hover:bg-gray-100 transition-all text-center"
                          >
                            Request Blocks Quote
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            setContactTopic(`Inquiry for ${prod.name}`);
                            setContactOpen(true);
                          }}
                          className="w-full py-2.5 px-4 rounded-full bg-white border border-gray-300 text-xs font-bold text-[#002b49] hover:bg-[#002b49] hover:text-white hover:border-[#002b49] transition-all text-center flex items-center justify-center space-x-1.5 shadow-2xs"
                        >
                          <span>Request Quote &amp; Specs</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SERVICES & CONSULTING: PALLET REPAIR, POOLING & NO-CURE NO-PAY
            ========================================================================= */}
        <section className="py-20 bg-[#edf2f7] border-b border-gray-200" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Lifecycle Supply Chain Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight mt-1">
                Pallet Pooling, Repair &amp; Material Handling Consulting
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Beyond manufacturing, AWMPACK supports client supply chains with comprehensive return loops, sorting, and cost optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1: Pallet Repairing & Maintenance */}
              <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <RotateCcw className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-black text-[#002b49]">Pallet Repair &amp; Sorting</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    We collect damaged pallets directly from your warehouse, replace broken deckboards or stringers with certified components, and re-certify them to full load-bearing capacity.
                  </p>
                  <ul className="text-xs text-gray-700 space-y-1.5 pt-2 border-t border-gray-100">
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Extends pallet lifecycle by 5–6 rotations</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Reduces lumber disposal costs to zero</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setContactTopic("Pallet Repair Service Inquiry");
                      setContactOpen(true);
                    }}
                    className="w-full py-2 px-4 rounded-full bg-[#f8fafc] hover:bg-emerald-600 hover:text-white border border-gray-300 text-xs font-bold text-[#002b49] transition-all"
                  >
                    Inquire Pallet Repair
                  </button>
                </div>
              </div>

              {/* Service 2: Closed-Loop Pallet Pooling */}
              <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-[#0099e5]" />
                  </div>
                  <h3 className="text-lg font-black text-[#002b49]">Closed-Loop Pallet Pooling</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    A managed circulation loop across Qatar Free Zones, Hamad Port, and retail distribution centers, eliminating the need for single-use pallet purchases.
                  </p>
                  <ul className="text-xs text-gray-700 space-y-1.5 pt-2 border-t border-gray-100">
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Zero capital expenditure for pallet assets</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Guaranteed pallet availability on demand</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setContactTopic("Pallet Pooling Setup");
                      setContactOpen(true);
                    }}
                    className="w-full py-2 px-4 rounded-full bg-[#f8fafc] hover:bg-[#0099e5] hover:text-white border border-gray-300 text-xs font-bold text-[#002b49] transition-all"
                  >
                    Inquire Pallet Pooling
                  </button>
                </div>
              </div>

              {/* Service 3: "No-Cure No-Pay" Consulting */}
              <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-black text-[#002b49]">No-Cure No-Pay Consulting</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Our packaging engineers inspect your warehouse, freight loading patterns, and breakage data. If we cannot prove documented cost or carbon savings, you pay nothing.
                  </p>
                  <ul className="text-xs text-gray-700 space-y-1.5 pt-2 border-t border-gray-100">
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Identifies packaging waste &amp; freight void space</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Zero financial risk for your company</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setContactTopic("No-Cure No-Pay Packaging Audit");
                      setContactOpen(true);
                    }}
                    className="w-full py-2 px-4 rounded-full bg-[#f8fafc] hover:bg-amber-600 hover:text-white border border-gray-300 text-xs font-bold text-[#002b49] transition-all"
                  >
                    Request Free Audit
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
