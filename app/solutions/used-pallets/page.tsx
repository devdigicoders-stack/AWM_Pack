"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SearchModal from "../../../components/SearchModal";
import ContactModal from "../../../components/ContactModal";
import {
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Flame,
  Leaf,
  Layers,
  DollarSign,
  Send,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Recycle,
  Award,
  Check,
} from "lucide-react";

export default function UsedPalletsPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Used Pallets & Pallet Buyback");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "500",
    service: "Grade A Reconditioned Used Pallets",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const whyChoosePillars = [
    {
      num: "01",
      title: "Quality & Safety",
      description:
        "We adhere to strict standards, inspecting and repairing pallets to ensure they meet industry benchmarks and are safe for all uses.",
      icon: ShieldCheck,
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      num: "02",
      title: "Compliance",
      description:
        "Our pallets comply with essential industry standards, including IPPC guidelines for heat treatment, making them safe and compliant for international shipping.",
      icon: Flame,
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      num: "03",
      title: "Sustainability",
      description:
        "By choosing our used pallets, you support crucial recycling and reuse practices, significantly reducing waste and the demand for new timber, and promoting environmental conservation.",
      icon: Leaf,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      num: "04",
      title: "Consistency",
      description:
        "Expect consistent quality, size, and type across our used pallet offerings, suitable for a wide range of shipping and storage needs.",
      icon: Layers,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    },
    {
      num: "05",
      title: "Traceability",
      description:
        "Our certification process includes tracking, so you'll know the origin and refurbishment history of your pallets.",
      icon: CheckCircle2,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200",
    },
    {
      num: "06",
      title: "Peace of Mind",
      description:
        "Rest assured that our pallets meet all necessary regulatory and safety standards, minimizing risks during use.",
      icon: Award,
      color: "text-purple-600 bg-purple-50 border-purple-200",
    },
    {
      num: "07",
      title: "Support",
      description:
        "Benefit from our dedicated customer service and support, always ready to assist with any questions or concerns.",
      icon: Phone,
      color: "text-sky-600 bg-sky-50 border-sky-200",
    },
    {
      num: "08",
      title: "Cost-Effective & Sustainable",
      description:
        "Save significantly compared to new pallets without compromising performance; reduce environmental footprint by opting for reused and recycled pallets.",
      icon: DollarSign,
      color: "text-teal-600 bg-teal-50 border-teal-200",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#002b49] selection:bg-blue-100 selection:text-[#003366]">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      <main className="flex-1">
        {/* HERO & BREADCRUMB */}
        <section className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=90&w=2400&auto=format&fit=crop"
            alt="Used Pallets Collection, Repair and Reconditioning in Qatar"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-105 contrast-105"
          />
          {/* High-clarity directional gradient: dark under text, crystal clear transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001424]/90 via-[#001c33]/60 via-50% to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#001424]/40 via-transparent to-black/20"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="max-w-3xl space-y-3.5">
                <div className="flex items-center space-x-2 text-xs font-semibold text-blue-200">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  <Link href="/solutions" className="hover:text-white transition-colors">Products &amp; Services</Link>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-[#0099e5] font-bold">Used Pallets</span>
                </div>

                <div className="inline-flex items-center space-x-2 bg-emerald-500/25 border border-emerald-400/40 text-emerald-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                  <Recycle className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Circular Wood Economy &bull; State of Qatar 🇶🇦</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    Used Pallets
                  </h1>
                  <p className="text-blue-300 text-sm sm:text-base font-bold tracking-wide uppercase">
                    Comprehensive Pallet Services &bull; Collection, Repair &amp; Buyback
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                  Certified reconditioned wooden pallets engineered to cycle 5&ndash;6 times. Supporting Qatar&apos;s leading logistics, manufacturing, and oil &amp; gas operators with cost-effective, sustainable material handling solutions.
                </p>

                <div className="pt-1.5 flex flex-wrap gap-3">
                  <button
                    onClick={() => setContactOpen(true)}
                    className="px-6 py-2.5 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Request Used Pallets Quote
                  </button>
                  <a
                    href="#categories"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    View Pallet Grades (A &amp; B)
                  </a>
                  <a
                    href="#buyback"
                    className="px-6 py-2.5 bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-400/40 text-emerald-200 font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    Sell Used Pallets (Buyback)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: COMPREHENSIVE PALLET SERVICES */}
        <section className="py-20 bg-white border-b border-gray-100" id="services">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div
                  className="relative w-full h-[340px] sm:h-[440px] bg-[#f8fafc] border border-gray-200 rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => setSelectedImage("/used-pallets-certified.png")}
                >
                  <Image
                    src="/used-pallets-certified.png"
                    alt="AWMPC Certified Used Pallets in Qatar"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#002b49]/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm flex items-center space-x-1.5">
                    <Recycle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Certified Reconditioned Pallets</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-200 shadow-md">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-[#002b49] block">100% Quality Inspected</span>
                        <span className="text-gray-500 text-[11px]">Birkat Al-Awamer Sorting &amp; Repair Facility</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        5&ndash;6 Reuse Cycles
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 text-center mt-2">
                  Click image to view high-resolution inspection details.
                </p>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5] block mb-1">
                    AWMPACK Circular Supply Chain
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                    Comprehensive Pallet Services
                  </h2>
                </div>

                <div className="prose text-sm text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    <strong>AWMPC provides a full suite of services for pallets</strong>, including collection, repair, and buyback. We manage pallets belonging to our own AWMPC exchange pool and those within our clients&rsquo; circulation. Our extensive network is designed to efficiently collect and repair used pallets, ensuring they&apos;re ready to be re-introduced to our clients at competitive prices.
                  </p>
                  <p>
                    We understand that quality and cost are paramount. That&apos;s why AWMPC offers <strong>two distinct categories of used pallets</strong> to meet diverse client expectations. These used pallets present a more cost-effective alternative to new ones, and with proper handling, they can cycle for an impressive <strong>5&ndash;6 times</strong>, offering excellent long-term value.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#edf2f7] border border-gray-200/80 space-y-1">
                    <div className="flex items-center space-x-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                      <DollarSign className="w-4 h-4" />
                      <span>Cost-Effective Solution</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Save significantly compared to new pallets without compromising performance.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 space-y-1">
                    <div className="flex items-center space-x-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                      <Leaf className="w-4 h-4" />
                      <span>Sustainable Choice</span>
                    </div>
                    <p className="text-xs text-emerald-900">
                      Reduce your environmental footprint by opting for reused and recycled pallets.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center space-x-4">
                  <button
                    onClick={() => {
                      setContactTopic("Used Pallets Collection & Reconditioning");
                      setContactOpen(true);
                    }}
                    className="px-6 py-3 bg-[#002b49] hover:bg-[#0099e5] text-white text-xs font-bold rounded-full transition-all shadow-md flex items-center space-x-2"
                  >
                    <span>Consult on Pallet Exchange Pool</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="tel:+97451191223"
                    className="text-xs font-bold text-[#0099e5] hover:underline flex items-center space-x-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+974 5119 1223</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: TWO DISTINCT CATEGORIES */}
        <section className="py-20 bg-[#edf2f7] border-b border-gray-200" id="categories">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Two Distinct Categories
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                Certified Used Pallet Grading System
              </h2>
              <p className="text-sm text-gray-600">
                AWMPC segregates all collected pallets into two clear grades, giving you the exact match for your requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 border-2 border-[#0099e5]/30 hover:border-[#0099e5] shadow-lg transition-all flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-[#0099e5] text-white text-[10px] font-black uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl">
                  Premium Reconditioned
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5] block mb-1">
                      Category 1
                    </span>
                    <h3 className="text-2xl font-black text-[#002b49]">
                      Grade A Used Pallets (Like-New)
                    </h3>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      Pristine condition pallets with clean wood, full deckboard integrity, and zero block damage. Ideal for FMCG, retail, and export logistics.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-gray-500">
                      Technical &amp; Quality Specifications:
                    </h4>
                    <ul className="space-y-2 text-xs text-gray-700">
                      <li className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Standard Dimensions:</strong> 1200 &times; 800 mm or 1200 &times; 1000 mm</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Structural Integrity:</strong> No companion stringers, 100% sound deckboards</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Safe Load Capacity:</strong> 1,500 kg dynamic / 4,000 kg static load</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Export Readiness:</strong> Certified IPPC ISPM-15 heat treated and stamped on demand</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Expected Life:</strong> 5&ndash;6 repeat warehouse and distribution cycles</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Cost Advantage</span>
                    <span className="text-lg font-black text-emerald-600">Up to 45% Savings</span>
                  </div>
                  <button
                    onClick={() => {
                      setContactTopic("Inquiry for Grade A Used Pallets");
                      setContactOpen(true);
                    }}
                    className="px-5 py-2.5 bg-[#002b49] group-hover:bg-[#0099e5] text-white text-xs font-bold rounded-full transition-all flex items-center space-x-1.5"
                  >
                    <span>Order Grade A</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-400 shadow-lg transition-all flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-gray-700 text-white text-[10px] font-black uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl">
                  Industrial Heavy Value
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">
                      Category 2
                    </span>
                    <h3 className="text-2xl font-black text-[#002b49]">
                      Grade B Used Pallets (Industrial)
                    </h3>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      Pallets with professionally installed companion stringers and repaired deckboards. Built for heavy manufacturing, construction, and domestic shipments.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-gray-500">
                      Technical &amp; Quality Specifications:
                    </h4>
                    <ul className="space-y-2 text-xs text-gray-700">
                      <li className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Standard Dimensions:</strong> 1200 &times; 800 mm or 1200 &times; 1000 mm heavy spec</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Structural Repair:</strong> EPAL certified companion stringers &amp; secure ring-shank nails</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Safe Load Capacity:</strong> 1,200 kg dynamic / 3,000 kg static load</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Application:</strong> Heavy industrial, blockwork, chemicals, one-way distribution</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Expected Life:</strong> 3&ndash;5 reliable heavy transport cycles</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Cost Advantage</span>
                    <span className="text-lg font-black text-emerald-600">Up to 65% Savings</span>
                  </div>
                  <button
                    onClick={() => {
                      setContactTopic("Inquiry for Grade B Used Pallets");
                      setContactOpen(true);
                    }}
                    className="px-5 py-2.5 bg-gray-800 hover:bg-[#002b49] text-white text-xs font-bold rounded-full transition-all flex items-center space-x-1.5"
                  >
                    <span>Order Grade B</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY CHOOSE CERTIFIED USED PALLETS */}
        <section className="py-20 bg-white border-b border-gray-100" id="why-choose">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Strict Engineering Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                Why Choose Certified Used Pallets from AWMPC?
              </h2>
              <p className="text-sm text-gray-600">
                Centralized purchasing, advanced pallet dismantling kilns, and stringent quality benchmarks to guarantee reliability on every delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoosePillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.num}
                    className="bg-[#f8fafc] border border-gray-200/90 rounded-3xl p-6 hover:shadow-xl hover:border-[#0099e5]/60 transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold border ${pillar.color} group-hover:scale-105 transition-transform`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-black text-gray-300 group-hover:text-[#0099e5] transition-colors">
                          {pillar.num}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-200/60 flex items-center text-[11px] font-bold text-[#0099e5]">
                      <span>AWMPC Certified Quality</span>
                      <CheckCircle2 className="w-3.5 h-3.5 ml-1.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: PALLET BUYBACK */}
        <section className="py-20 bg-[#001829] text-white" id="buyback">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-[#0099e5]/20 border border-[#0099e5]/40 text-[#0099e5] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>Turn Wood Surplus into Cash Flow</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Pallet Buyback Program &amp; Warehouse Exchange Loops
                </h2>

                <p className="text-sm text-gray-300 leading-relaxed">
                  Do you have surplus, used, or damaged wooden pallets occupying valuable warehouse yard space in Doha, Industrial Area, Mesaieed, or Ras Laffan?
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <strong className="text-white text-xs block">Guaranteed Pallet Buyback</strong>
                      <span className="text-xs text-gray-300">We purchase standard 1200 &times; 800 mm and 1200 &times; 1000 mm pallets at fair market valuations.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <strong className="text-white text-xs block">Free Warehouse Yard Collection</strong>
                      <span className="text-xs text-gray-300">Our heavy flatbed logistics fleet collects surplus batches of 100+ pallets directly from your facility across Qatar.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <strong className="text-white text-xs block">Closed-Loop Exchange Credit</strong>
                      <span className="text-xs text-gray-300">Trade damaged pallets for freshly inspected, heat-treated Grade A pallets at a fraction of the cost.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20have%20surplus%20used%20pallets%20for%20buyback%20in%20Qatar."
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-full shadow-lg transition-all flex items-center space-x-2"
                  >
                    <span>WhatsApp Pallet Buyback Photos (+974 5119 1223)</span>
                  </a>
                  <a
                    href="tel:+97440394581"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs rounded-full backdrop-blur-sm transition-all"
                  >
                    Call Office: +974 4039 4581
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="bg-[#002b49] p-6 rounded-3xl border border-blue-900/60 space-y-2">
                  <span className="text-3xl sm:text-4xl font-black text-[#0099e5]">5&ndash;6</span>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Reuse Cycles</p>
                  <p className="text-[11px] text-gray-300">Engineered and tested for multi-trip industrial durability.</p>
                </div>

                <div className="bg-[#002b49] p-6 rounded-3xl border border-blue-900/60 space-y-2">
                  <span className="text-3xl sm:text-4xl font-black text-emerald-400">60%</span>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Cost Reduction</p>
                  <p className="text-[11px] text-gray-300">Direct savings over purchasing new export timber pallets.</p>
                </div>

                <div className="bg-[#002b49] p-6 rounded-3xl border border-blue-900/60 space-y-2">
                  <span className="text-3xl sm:text-4xl font-black text-amber-400">ISPM 15</span>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Heat Treatment</p>
                  <p className="text-[11px] text-gray-300">Thermal kiln re-treatment available for export compliance.</p>
                </div>

                <div className="bg-[#002b49] p-6 rounded-3xl border border-blue-900/60 space-y-2">
                  <span className="text-3xl sm:text-4xl font-black text-cyan-400">24/7</span>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Factory Support</p>
                  <p className="text-[11px] text-gray-300">Rapid fleet delivery from Birkat Al-Awamer plant.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: GET A QUOTE FORM */}
        <section className="py-20 bg-white" id="quote">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 bg-[#f8fafc] border border-gray-200 p-8 sm:p-10 rounded-3xl shadow-sm">
                <div className="space-y-2 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                    Fast Factory Quotation
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#002b49]">
                    Get A Quote for Used Pallets
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Looking for customized packaging solutions? Get in touch with us today for a personalized quote. Our team is ready to provide competitive pricing and expert guidance tailored to your project needs.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-black">Quotation Request Received!</h4>
                    <p className="text-xs text-emerald-700">
                      Eng. Maher Marjy and our Birkat Al-Awamer sales department will review your specifications and send a formal commercial quotation within 2 business hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2 bg-emerald-600 text-white rounded-full text-xs font-bold hover:bg-emerald-700 transition-all"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company Name"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@company.qa"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+974 XXXX XXXX"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Select Pallet Service / Grade *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        >
                          <option value="Grade A Reconditioned Used Pallets">Grade A Used Pallets (Like-New, 1200x800)</option>
                          <option value="Grade B Industrial Used Pallets">Grade B Used Pallets (Industrial Heavy, 1200x800)</option>
                          <option value="Industrial 1200x1000 Used Pallets">Heavy Industrial 1200x1000 Used Pallets</option>
                          <option value="Used Pallets Collection & Buyback">Pallet Buyback (Sell Surplus Pallets)</option>
                          <option value="Pallet Repair & Sorting Service">Warehouse Sorting &amp; Repair Contract</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Estimated Quantity Required
                        </label>
                        <select
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        >
                          <option value="100-250">100 &ndash; 250 Units</option>
                          <option value="500">500 Units (Standard Batch)</option>
                          <option value="1000">1,000 Units (Volume Discount)</option>
                          <option value="2500+">2,500+ Units (Corporate Fleet)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Specific Dimension / Delivery Details
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please include delivery destination in Qatar, heat treatment stamping requirements, or buyback collection details."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#002b49] hover:bg-[#0099e5] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Used Pallet RFQ</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#00223a] text-white p-8 rounded-3xl space-y-5 border border-blue-900/60 shadow-xl">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0099e5] block mb-1">
                      Direct Manufacturing Plant
                    </span>
                    <h4 className="text-xl font-black text-white">Al Waad Manufacturing Packaging Company</h4>
                    <p className="text-xs text-blue-200 mt-1">Birkat Al-Awamer, Al Wukair &bull; State of Qatar</p>
                  </div>

                  <a
                    href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20would%20like%20to%20inquire%20about%20Certified%20Used%20Pallets"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs shadow-md transition-all"
                  >
                    <span>Instant WhatsApp Chat (+974 5119 1223)</span>
                  </a>

                  <div className="space-y-3 text-xs pt-1">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Mobile (Eng. Maher Marjy):</span>
                        <a href="tel:+97451191223" className="font-bold text-white hover:text-[#0099e5]">+974 5119 1223</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Office Telephone:</span>
                        <a href="tel:+97440394581" className="font-bold text-white hover:text-[#0099e5]">+974 4039 4581</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Sales Hotline:</span>
                        <a href="tel:+97466864923" className="font-bold text-white hover:text-[#0099e5]">+974 6686 4923</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Official Emails:</span>
                        <div className="flex flex-col space-y-0.5">
                          <a href="mailto:info@awmpack.com" className="font-bold text-white hover:text-[#0099e5]">info@awmpack.com</a>
                          <a href="mailto:maher@awmpack.com" className="text-blue-300 hover:text-white">maher@awmpack.com</a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 pt-2 border-t border-blue-800">
                      <MapPin className="w-4 h-4 text-[#0099e5] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Factory Address:</span>
                        <p className="text-gray-200 leading-relaxed">
                          Building No. 89, Street No. 3012, Zone No. 91,<br />
                          Birkat Al-Awamer, Al Wukair,<br />
                          State of Qatar (P.O. Box 12451)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-[#edf2f7] border border-gray-200 space-y-2 text-xs">
                  <h4 className="font-bold text-[#002b49]">Certified Quality Guarantee</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Every reconditioned pallet delivered by AWMPC undergoes rigorous weight and structural deflection testing. Any broken board is replaced with EPAL-standard kiln-dried timber and certified ring nails.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-[80vh]">
            <Image
              src={selectedImage}
              alt="Used Pallet Preview"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full text-xs font-bold transition-all"
            >
              &times; Close Preview
            </button>
          </div>
        </div>
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultTopic={contactTopic}
      />
    </div>
  );
}

