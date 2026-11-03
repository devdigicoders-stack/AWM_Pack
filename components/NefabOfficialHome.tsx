"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  Globe2,
  Leaf,
  Package,
  Truck,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building2,
  Award,
  Zap,
  MapPin,
  Flame,
  Recycle,
  Trees,
  Phone,
  Mail,
  Scale,
  Sparkles,
} from "lucide-react";

interface NefabOfficialHomeProps {
  onOpenContactWithTopic: (topic: string) => void;
}

export default function NefabOfficialHome({ onOpenContactWithTopic }: NefabOfficialHomeProps) {
  const industries = [
    {
      id: "oil-gas",
      title: "Oil, Gas & Petrochemicals",
      desc: "Heavy-duty certified timber skids, chemical drum pallets, and export crates engineered for Ras Laffan, Mesaieed, and offshore rigs.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
      tag: "Qatar Energy & Heavy Industry",
    },
    {
      id: "construction",
      title: "Construction & Infrastructure",
      desc: "Reinforced wooden pallets and steel frames supporting precast concrete, structural steel, and Qatar National Vision 2030 mega-projects.",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?q=80&w=1200&auto=format&fit=crop",
      tag: "Mega Projects & Infrastructure",
    },
    {
      id: "manufacturing",
      title: "Manufacturing & Heavy Metals",
      desc: "Heavy-gauge metal pallets, custom stillages, and export crates for aluminum extrusions, cable drums, and precision machinery.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      tag: "Industrial Fabrications",
    },
    {
      id: "logistics",
      title: "Logistics, Ports & Cold Chain",
      desc: "Hamad Port seaworthy export packaging, air cargo platforms, and hygienic food-grade pallets for Qatar&apos;s distribution networks.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      tag: "Hamad Port & Supply Chain",
    },
  ];

  return (
    <div className="w-full text-[#002b49]">
      {/* =========================================================================
          SECTION 1: HERO - AWMPACK (Al Waad Manufacturing Packaging Company)
          ========================================================================= */}
      <section className="relative w-full">
        {/* Hero Image Banner */}
        <div className="relative w-full h-[360px] sm:h-[400px] lg:h-[440px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
            alt="AWMPACK Industrial Wooden Pallets Warehouse Facility"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001829]/95 via-[#00223a]/75 to-[#002b49]/35"></div>

          {/* Hero Typography */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl space-y-3.5">
                <div className="inline-flex items-center space-x-2 bg-[#0099e5]/25 border border-[#0099e5]/40 text-blue-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                  <span>Waste to Usable Product • State of Qatar 🇶🇦</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                    Quality, Durability, and Reliability in Every Pallet
                  </h1>
                  <p className="text-blue-300 text-xs sm:text-sm font-bold tracking-wide uppercase">
                    Al Waad Manufacturing Packaging Company (AWMPC)
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                  Qatar&apos;s foremost manufacturer of industrial wooden pallets, custom export crates, certified ISPM 15 heat treatment, and compressed sawdust wood blocks. Based in Birkat Al-Awamer, Al Wukair.
                </p>

                <div className="pt-1.5 flex flex-wrap gap-3">
                  <button
                    onClick={() => onOpenContactWithTopic("Pallet & Crating Quote Request")}
                    className="px-6 py-2.5 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Request Factory Quote
                  </button>
                  <Link
                    href="/solutions"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    Explore Product Range
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars White Section Below Hero */}
        <div className="bg-white py-8 sm:py-10 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                  Core Industrial Capabilities
                </span>
                <p className="text-lg sm:text-xl font-black text-[#002b49] leading-snug mt-0.5">
                  Pioneering Pallet Manufacturing &amp; Wood Recycling in Qatar
                </p>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-gray-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>ISO 9001 / 14001 / 45001 &amp; ICV Certified</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 1. Wooden & Steel Pallets */}
              <div className="space-y-2 group">
                <Link
                  href="/solutions#wooden-pallets"
                  className="text-base sm:text-lg font-extrabold text-[#002b49] group-hover:text-[#0099e5] transition-colors flex items-center"
                >
                  <span>Industrial Pallets</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 text-[#0099e5] group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Precision Euro, GMA, and custom-engineered 2-way and 4-way wooden and metal pallets built for extreme payload capacity.
                </p>
                <Link
                  href="/solutions#wooden-pallets"
                  className="inline-flex items-center text-xs font-bold text-[#0099e5] hover:text-[#0077b6] pt-1"
                >
                  <span>View pallet specs</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </div>

              {/* 2. Custom Crates & Boxes */}
              <div className="space-y-2 group">
                <Link
                  href="/solutions#custom-crates"
                  className="text-base sm:text-lg font-extrabold text-[#002b49] group-hover:text-[#0099e5] transition-colors flex items-center"
                >
                  <span>Crates &amp; Boxes</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 text-[#0099e5] group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Heavy timber crates, seaworthy boxes with vapor barriers, and collapsible pallet collars engineered for safe global export.
                </p>
                <Link
                  href="/solutions#custom-crates"
                  className="inline-flex items-center text-xs font-bold text-[#0099e5] hover:text-[#0077b6] pt-1"
                >
                  <span>View crating solutions</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </div>

              {/* 3. ISPM 15 Heat Treatment */}
              <div className="space-y-2 group">
                <Link
                  href="/engineering#ispm15"
                  className="text-base sm:text-lg font-extrabold text-[#002b49] group-hover:text-[#0099e5] transition-colors flex items-center"
                >
                  <span>ISPM 15 Heat Treatment</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 text-[#0099e5] group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Certified thermal treatment kilns (56°C for 30 minutes) ensuring full international quarantine compliance with official IPPC stamping.
                </p>
                <Link
                  href="/engineering#ispm15"
                  className="inline-flex items-center text-xs font-bold text-[#0099e5] hover:text-[#0077b6] pt-1"
                >
                  <span>Learn about ISPM 15</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </div>

              {/* 4. Waste to Usable Product */}
              <div className="space-y-2 group">
                <Link
                  href="/sustainability#waste-to-product"
                  className="text-base sm:text-lg font-extrabold text-[#002b49] group-hover:text-[#0099e5] transition-colors flex items-center"
                >
                  <span>Waste to Usable Product</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 text-[#0099e5] group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Transforming wood scraps and sawdust into high-density compressed wood blocks, lowering landfill waste across Qatar.
                </p>
                <Link
                  href="/sustainability#waste-to-product"
                  className="inline-flex items-center text-xs font-bold text-[#0099e5] hover:text-[#0077b6] pt-1"
                >
                  <span>Explore recycling program</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: "Sustainable packaging solutions for Qatar's core industries"
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-gray-100" id="industries-carousel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
              Specialized Industrial Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight leading-tight">
              Packaging &amp; Pallet Solutions for Qatar&apos;s Core Industries
            </h2>
            <div>
              <Link
                href="/industries"
                className="inline-block bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-sm px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Find your industry
              </Link>
            </div>
          </div>

          {/* Industry Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#002b49]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {ind.tag}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-extrabold text-[#002b49] group-hover:text-[#0099e5] transition-colors leading-snug">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {ind.desc}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/industries#${ind.id}`}
                      className="inline-flex items-center text-xs font-bold text-[#0099e5] group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore solutions</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: "Is there untapped potential in your site's packaging?"
          ========================================================================= */}
      <section className="relative w-full py-28 sm:py-36 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop"
          alt="AWMPACK engineer conducting site review"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001829]/95 via-[#00223a]/80 to-[#002b49]/60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-6 text-white">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0099e5] bg-[#0099e5]/20 px-3 py-1 rounded-full border border-[#0099e5]/40">
              No-Cure No-Pay Consulting
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Is there untapped potential in your site&apos;s packaging &amp; pallets?
            </h2>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              AWMPACK provides on-site material handling assessments across Qatari manufacturing, oil &amp; gas, and logistics facilities. We identify damaged pallets, reduce freight void space, and set up closed-loop repair programs.
            </p>
            <div>
              <button
                onClick={() => onOpenContactWithTopic("Book a Site Packaging & Pallet Review")}
                className="bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Book a factory review with Eng. Maher Marjy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: "Are you prepared for international export quarantine (ISPM 15)?"
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-gray-100" id="ispm-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Image: Container Ship at Hamad Port */}
          <div className="relative w-full h-[280px] sm:h-[400px] rounded-3xl overflow-hidden shadow-md mb-8">
            <Image
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1600&auto=format&fit=crop"
              alt="Hamad Port export container shipping"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute top-4 left-4 bg-[#002b49]/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md backdrop-blur-sm flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>ISPM 15 Export Certified • State of Qatar</span>
            </div>
          </div>

          {/* Text and Button Below */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
              Are you prepared for international export quarantine?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Global customs authorities require all solid wood packaging to undergo certified thermal treatment (ISPM 15) to prevent cross-border pest migration. AWMPACK operates official heat treatment kilns in Birkat Al-Awamer, applying recognized IPPC stamps and export documentation for zero border delays.
            </p>
            <div className="pt-2">
              <Link
                href="/engineering#ispm15"
                className="inline-block bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-sm px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Read ISPM 15 Export Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: "Qatari Manufacturing Excellence & Local Agility"
          ========================================================================= */}
      <section className="relative w-full py-28 sm:py-36 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
          alt="AWMPACK manufacturing line in Qatar"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001829]/90 via-[#00223a]/75 to-[#002b49]/40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6 text-white">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
              Made in Qatar 🇶🇦
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Local Manufacturing Agility with Global Quality Standards
            </h2>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              Operating directly in Birkat Al-Awamer, Al Wukair, we eliminate international lead times, providing fast delivery of heavy-duty pallets, boxes, and custom crates to clients across Qatar.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-block bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Connect with our Factory Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: "With you wherever you operate across Qatar & GCC"
          ========================================================================= */}
      <section className="py-20 bg-[#e6f4fb] border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Qatar Industrial Map Graphic */}
          <div className="relative w-full h-[260px] sm:h-[380px] bg-white/90 rounded-3xl p-6 sm:p-10 mb-8 border border-blue-200 shadow-inner overflow-hidden flex items-center justify-center">
            {/* Stylized Qatar Peninsula SVG Representation */}
            <div className="relative w-full h-full max-w-2xl flex items-center justify-center">
              <svg viewBox="0 0 500 600" className="w-full h-full fill-[#003366]/20 stroke-[#003366]/40 stroke-2">
                {/* Qatar Peninsula outline */}
                <path d="M260,80 Q290,140 280,220 T290,320 T270,420 T220,500 L170,510 Q190,440 210,360 T200,240 T220,130 Z" />
              </svg>

              {/* Location Pins across Qatar */}
              <div className="absolute top-[68%] left-[54%] flex items-center space-x-1.5" title="Birkat Al-Awamer Factory HQ">
                <div className="w-4 h-4 rounded-full bg-[#0099e5] ring-4 ring-white animate-pulse"></div>
                <span className="text-[11px] font-black text-[#002b49] bg-white/90 px-2 py-0.5 rounded shadow-xs">
                  Birkat Al-Awamer (Factory HQ)
                </span>
              </div>

              <div className="absolute top-[28%] left-[56%] flex items-center space-x-1.5" title="Ras Laffan Industrial City">
                <div className="w-3 h-3 rounded-full bg-[#003366] ring-2 ring-white"></div>
                <span className="text-[10px] font-bold text-gray-700 bg-white/80 px-1.5 py-0.5 rounded">
                  Ras Laffan
                </span>
              </div>

              <div className="absolute top-[78%] left-[58%] flex items-center space-x-1.5" title="Mesaieed Industrial City">
                <div className="w-3 h-3 rounded-full bg-[#003366] ring-2 ring-white"></div>
                <span className="text-[10px] font-bold text-gray-700 bg-white/80 px-1.5 py-0.5 rounded">
                  Mesaieed
                </span>
              </div>

              <div className="absolute top-[58%] left-[52%] flex items-center space-x-1.5" title="Doha Industrial Area">
                <div className="w-3 h-3 rounded-full bg-[#003366] ring-2 ring-white"></div>
                <span className="text-[10px] font-bold text-gray-700 bg-white/80 px-1.5 py-0.5 rounded">
                  Doha Industrial Area
                </span>
              </div>

              <div className="absolute top-[72%] left-[62%] flex items-center space-x-1.5" title="Hamad Port">
                <div className="w-3 h-3 rounded-full bg-[#003366] ring-2 ring-white"></div>
                <span className="text-[10px] font-bold text-gray-700 bg-white/80 px-1.5 py-0.5 rounded">
                  Hamad Port
                </span>
              </div>
            </div>

            <div className="absolute bottom-4 left-6 bg-[#002b49] text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center space-x-1">
              <span>National Delivery Across Qatar</span>
              <span>🇶🇦</span>
            </div>
          </div>

          {/* Heading and Button */}
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
              With you wherever you operate in Qatar
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              Our central manufacturing and heat-treatment plant in Birkat Al-Awamer ensures rapid just-in-time pallet replenishment and customized packing teams dispatched directly to your project site.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-sm px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                View Factory Location &amp; Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: "About us" (Deep Royal Navy Blue with 4 Big Numbers)
          ========================================================================= */}
      <section className="py-24 bg-[#00223a] text-white relative overflow-hidden" id="about-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0099e5]">
              Al Waad Manufacturing Packaging Company (AWMPC)
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              About AWMPACK
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Under the leadership of Factory Manager <strong>Eng. Maher Marjy</strong>, AWMPACK delivers superior packaging solutions through advanced automated technology, responsible FSC® timber sourcing, and groundbreaking wood recycling under the motto <em>&quot;Waste to Usable Product.&quot;</em>
            </p>
          </div>

          {/* 4 Big White Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto py-6">
            <div className="space-y-1">
              <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                15,000
              </p>
              <div className="w-8 h-1 bg-[#0099e5] mx-auto my-2 rounded-full"></div>
              <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                m² Facility Area
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                500K+
              </p>
              <div className="w-8 h-1 bg-[#0099e5] mx-auto my-2 rounded-full"></div>
              <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                Pallets Capacity
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                100%
              </p>
              <div className="w-8 h-1 bg-[#0099e5] mx-auto my-2 rounded-full"></div>
              <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                ISPM 15 &amp; FSC® Compliant
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                ICV
              </p>
              <div className="w-8 h-1 bg-[#0099e5] mx-auto my-2 rounded-full"></div>
              <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                Certified Qatar Value
              </p>
            </div>
          </div>

          <div>
            <Link
              href="/about"
              className="inline-block bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Read more about AWMPACK
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: LOGISTICS & POOLING ("Optimizing your logistics flow")
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-gray-100" id="logistics-flow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Image: Port Shipping Cranes */}
          <div className="relative w-full h-[280px] sm:h-[400px] rounded-3xl overflow-hidden shadow-md mb-8">
            <Image
              src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1600&auto=format&fit=crop"
              alt="Hamad Port shipping terminal and pallet handling"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute top-4 left-4 bg-[#002b49]/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md backdrop-blur-sm">
              Supply Chain &amp; Pallet Pooling
            </div>
          </div>

          {/* Text and Button Below */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
              Optimizing your material handling &amp; logistics flow
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our closed-loop pallet pooling, on-site sorting, and reconditioning services help Qatari enterprises cut material handling costs by up to 40%, eliminate warehouse clutter, and guarantee undamaged cargo arrivals.
            </p>
            <div className="pt-2">
              <Link
                href="/solutions#pallet-repair"
                className="inline-block bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-sm px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Discover Pallet Pooling &amp; Repair
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CIRCULAR SUSTAINABILITY (Compressed Sawdust Blocks)
          ========================================================================= */}
      <section className="py-20 bg-[#e8f6f0] border-b border-emerald-100" id="sustainability-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Image: Eco Foliage with Wood Recycling */}
          <div className="relative w-full h-[280px] sm:h-[400px] rounded-3xl overflow-hidden shadow-md mb-8">
            <Image
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600&auto=format&fit=crop"
              alt="Wood waste recycling into compressed sawdust blocks"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-emerald-950/40 flex items-center justify-center p-6">
              <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-white text-center">
                <div className="p-3 sm:p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex flex-col items-center">
                  <Recycle className="w-6 h-6 text-emerald-300 mb-1" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Waste to Product</span>
                </div>
                <div className="p-3 sm:p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex flex-col items-center">
                  <Flame className="w-6 h-6 text-amber-300 mb-1" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">ISPM 15 Treated</span>
                </div>
                <div className="p-3 sm:p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex flex-col items-center">
                  <Leaf className="w-6 h-6 text-emerald-300 mb-1" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">100% Recycled Blocks</span>
                </div>
                <div className="p-3 sm:p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex flex-col items-center">
                  <Trees className="w-6 h-6 text-teal-300 mb-1" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">FSC® Timber</span>
                </div>
              </div>
            </div>
          </div>

          {/* Heading and Button */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-200/60 px-3 py-1 rounded-full">
              Circular Economy in Qatar
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
              &quot;Waste to Usable Product&quot; — A Greener Future for Qatar
            </h2>
            <p className="text-sm sm:text-base text-[#1b3d20] leading-relaxed font-medium">
              We collect industrial wood scraps, timber off-cuts, and sawdust, converting them via high-pressure hydraulic presses into dense, water-resistant compressed wood pallet blocks. This saves valuable timber, diverts waste from landfills, and reduces carbon emissions.
            </p>
            <div className="pt-2">
              <Link
                href="/sustainability#waste-to-product"
                className="inline-block bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-sm px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Read Wood Recycling Report
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: "Turnkey Packaging Solutions"
          ========================================================================= */}
      <section className="py-20 bg-white" id="solutions-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
              Full Industrial Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
              Complete Industrial Packaging &amp; Pallet Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              From high-capacity automated wooden pallet manufacturing to custom seaworthy crating and thermal treatment, AWMPACK delivers the reliability your supply chain demands.
            </p>
            <div>
              <Link
                href="/solutions"
                className="inline-block bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-sm px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                See all AWMPACK solutions
              </Link>
            </div>
          </div>

          {/* High-tech Warehouse Storage Facility */}
          <div className="relative w-full h-[300px] sm:h-[450px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop"
              alt="AWMPACK automated pallet production facility"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                AWMPACK Birkat Al-Awamer Plant • ISPM 15 Certified Thermal Kilns • Automated Assembly
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}