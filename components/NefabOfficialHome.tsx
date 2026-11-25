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
import { motion } from "framer-motion";
import {
  FadeIn,
  FadeInStagger,
  FadeInStaggerItem,
  HoverCard,
  AnimatedCounter,
} from "./motion/MotionComponents";

interface NefabOfficialHomeProps {
  onOpenContactWithTopic: (topic: string) => void;
}

export default function NefabOfficialHome({ onOpenContactWithTopic }: NefabOfficialHomeProps) {
  const industries = [
    {
      id: "oil-gas",
      title: "Oil, Gas & Petrochemicals",
      desc: "Heavy-duty certified timber skids, chemical drum pallets, and export crates engineered for Ras Laffan, Mesaieed, and offshore rigs.",
      image: "/oil-gas-petrochemicals.jpg",
      tag: "Qatar Energy & Heavy Industry",
    },
    {
      id: "construction",
      title: "Construction & Infrastructure",
      desc: "Reinforced wooden pallets and steel frames supporting precast concrete, structural steel, and Qatar National Vision 2030 mega-projects.",
      image: "/industry/mining.png",
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

  const homeGalleryPhotos = [
    {
      id: "gal-1",
      title: "Heavy-Duty 4-Way Solid Pine Pallet",
      category: "Industrial Pallets",
      image: "/gallery/1.png",
      badge: "4-Way Entry",
      description: "Solid pine timber pallet with heavy-duty deckboards, built for high-capacity warehouse racking and logistics.",
    },
    {
      id: "gal-3",
      title: "Heavy Industrial Machinery Skid (14,800 kg)",
      category: "Heavy Skids",
      image: "/gallery/3.png",
      badge: "14.8 Ton Payload",
      description: "Reinforced timber skid with custom saddle chocks and ratchet lashing securing a 14.8t hydraulic cutter.",
    },
    {
      id: "gal-2",
      title: "Custom Export Plywood Crates Lineup",
      category: "Export Crates",
      image: "/gallery/2.png",
      badge: "ISPM 15 Stamped",
      description: "Batch of vertical plywood and pine export packaging crates with international shipping stencils.",
    },
    {
      id: "gal-10",
      title: "275-Ton SWL Crane Hook Heavy Duty Crate",
      category: "Heavy Marine Crate",
      image: "/gallery/10.png",
      badge: "275T SWL Rated",
      description: "Bespoke heavy timber crate engineered to hold a massive 275-ton safe-working-load crane hook assembly.",
    },
    {
      id: "gal-5",
      title: "A-Frame Wooden Glass & Panel Transport Rack",
      category: "Custom A-Frames",
      image: "/gallery/5.png",
      badge: "Custom A-Frame",
      description: "Engineered A-frame wooden cradle for vertical shipping of fragile architectural glass and solar panels.",
    },
    {
      id: "gal-11",
      title: "Factory Overhead Crane Rigging & Crate Lift",
      category: "Plant Rigging",
      image: "/gallery/11.png",
      badge: "Crane Lift Tested",
      description: "Overhead crane hoisting an oversized fully enclosed pine export crate inside the Birkat Al-Awamer facility.",
    },
    {
      id: "gal-8",
      title: "AWMPC Technical Export Crate Architecture",
      category: "Engineering & QA",
      image: "/gallery/8.png",
      badge: "Technical Blueprint",
      description: "Official 3D cutaway showing plywood skin, internal foam lining, reinforced pine frame, and ISPM 15 QA stamp.",
    },
  ];

  return (
    <div className="w-full text-[#002b49]">
      {/* =========================================================================
          SECTION 1: HERO - AWMPACK (Al Waad Manufacturing Packaging Company)
          ========================================================================= */}
      <section className="relative w-full">
        {/* Hero Image Banner */}
        <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=90&w=2400&auto=format&fit=crop"
            alt="AWMPACK Industrial Wooden Pallets Warehouse Facility"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-105 contrast-105"
          />
          {/* High-clarity directional gradient: dark under text, crystal clear transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001424]/90 via-[#001c33]/60 via-50% to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#001424]/40 via-transparent to-black/20"></div>

          {/* Hero Typography */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
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
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
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

            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 1. Wooden & Steel Pallets */}
              <FadeInStaggerItem className="space-y-2 group">
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
              </FadeInStaggerItem>

              {/* 2. Custom Crates & Boxes */}
              <FadeInStaggerItem className="space-y-2 group">
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
              </FadeInStaggerItem>

              {/* 3. ISPM 15 Heat Treatment */}
              <FadeInStaggerItem className="space-y-2 group">
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
              </FadeInStaggerItem>

              {/* 4. Waste to Usable Product */}
              <FadeInStaggerItem className="space-y-2 group">
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
              </FadeInStaggerItem>
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: "Sustainable packaging solutions for Qatar's core industries"
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-gray-100" id="industries-carousel">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
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
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <FadeInStaggerItem key={ind.id}>
                <HoverCard lift={8} className="h-full">
                  <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between h-full">
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

                    <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="text-lg font-extrabold text-[#002b49] group-hover:text-[#0099e5] transition-colors leading-snug">
                          {ind.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {ind.desc}
                        </p>
                      </div>
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
                </HoverCard>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
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

        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <FadeIn direction="left" className="max-w-xl space-y-6 text-white">
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
                Book a factory review with Technical Team
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: "Are you prepared for international export quarantine (ISPM 15)?"
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-gray-100" id="ispm-banner">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Top Image: Container Ship at Hamad Port */}
          <FadeIn direction="up">
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
          </FadeIn>

          {/* Text and Button Below */}
          <FadeIn direction="up" delay={0.1} className="max-w-3xl space-y-4">
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
          </FadeIn>
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

        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <FadeIn direction="up" className="max-w-2xl mx-auto space-y-6 text-white">
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
          </FadeIn>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: "With you wherever you operate across Qatar & GCC"
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#e6f4fb] via-white to-[#edf7fc] border-b border-blue-100">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#002b49] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs">
              <Truck className="w-3.5 h-3.5 text-[#0099e5]" />
              <span>Nationwide Industrial Delivery Network • State of Qatar 🇶🇦</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002b49] tracking-tight">
              With you wherever you operate in Qatar
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              From our central manufacturing and certified ISPM 15 thermal kiln plant in <strong>Birkat Al-Awamer (Zone 91)</strong>, AWMPACK delivers rapid 24–48h pallet replenishment, buffer storage management, and customized on-site packaging crews across all Qatar industrial hubs.
            </p>
          </div>

          {/* Interactive Qatar Logistics & Hub Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
            {/* Visual Qatar Peninsula Map with True Geographic Landmarks */}
            <div className="lg:col-span-7 bg-[#001829] text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-blue-900/60 shadow-xl flex flex-col justify-between">
              {/* Background Radar / Tech grid */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0099e5_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-blue-900/60">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">
                    Live Dispatch Map • Central Plant Birkat Al-Awamer
                  </span>
                </div>
                <span className="text-[11px] text-[#0099e5] font-semibold bg-blue-950/80 px-2.5 py-1 rounded-full border border-blue-800">
                  Daily Express Routes
                </span>
              </div>

              {/* Geographic Representation of Qatar Peninsula */}
              <div className="relative z-10 w-full h-[320px] sm:h-[380px] my-4 flex items-center justify-center">
                <svg viewBox="0 0 500 600" className="w-full h-full filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                  <rect width="500" height="600" fill="transparent" />

                  {/* Qatar Peninsula Contour */}
                  <path
                    d="M 250,50 
                       C 275,60 295,85 300,110 
                       C 310,150 305,190 305,220 
                       C 312,260 320,290 312,325 
                       C 305,360 300,380 295,410 
                       C 285,445 275,475 255,495 
                       C 230,510 195,515 170,505 
                       C 160,470 155,420 162,380 
                       C 168,340 160,300 168,260 
                       C 172,220 180,165 195,120 
                       C 210,80 225,55 250,50 Z"
                    fill="#002b49"
                    stroke="#0099e5"
                    strokeWidth="2.5"
                    strokeDasharray="4 2"
                    className="opacity-90"
                  />

                  {/* Transit Route Lines from Birkat Al-Awamer */}
                  <line x1="290" y1="340" x2="295" y2="115" stroke="#0099e5" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
                  <line x1="290" y1="340" x2="270" y2="280" stroke="#0099e5" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
                  <line x1="290" y1="340" x2="305" y2="370" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.8" />
                  <line x1="290" y1="340" x2="290" y2="410" stroke="#0099e5" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
                </svg>

                {/* Hub Pin 1: Birkat Al-Awamer (Central Plant HQ) */}
                <div className="absolute top-[56%] left-[56%] z-20 flex items-center space-x-2">
                  <div className="relative">
                    <span className="w-5 h-5 rounded-full bg-[#0099e5] ring-4 ring-white animate-pulse block shadow-lg" />
                    <span className="absolute -top-1 -left-1 w-7 h-7 rounded-full border border-blue-400 animate-ping" />
                  </div>
                  <div className="bg-[#002b49]/95 text-white border border-[#0099e5] px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md">
                    <p className="text-xs font-black text-white flex items-center">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 inline-block" />
                      Birkat Al-Awamer
                    </p>
                    <p className="text-[10px] text-blue-200 font-semibold">Central Manufacturing Plant &amp; HQ</p>
                  </div>
                </div>

                {/* Hub Pin 2: Ras Laffan */}
                <div className="absolute top-[18%] left-[58%] z-10 flex items-center space-x-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-300 ring-2 ring-white block" />
                  <div className="bg-[#001829]/90 text-white border border-blue-800 px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-md">
                    Ras Laffan (55 min)
                  </div>
                </div>

                {/* Hub Pin 3: Doha Industrial Area */}
                <div className="absolute top-[46%] left-[52%] z-10 flex items-center space-x-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-300 ring-2 ring-white block" />
                  <div className="bg-[#001829]/90 text-white border border-blue-800 px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-md">
                    Doha Industrial (15 min)
                  </div>
                </div>

                {/* Hub Pin 4: Hamad Port */}
                <div className="absolute top-[62%] left-[62%] z-10 flex items-center space-x-1.5">
                  <span className="w-4 h-4 rounded-full bg-emerald-400 ring-2 ring-white block shadow-sm" />
                  <div className="bg-emerald-950/90 text-emerald-200 border border-emerald-600 px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-md">
                    Hamad Port (18 min)
                  </div>
                </div>

                {/* Hub Pin 5: Mesaieed */}
                <div className="absolute top-[68%] left-[57%] z-10 flex items-center space-x-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-300 ring-2 ring-white block" />
                  <div className="bg-[#001829]/90 text-white border border-blue-800 px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-md">
                    Mesaieed (22 min)
                  </div>
                </div>
              </div>

              {/* Bottom Quick Bar */}
              <div className="relative z-10 pt-3 border-t border-blue-900/60 flex flex-wrap items-center justify-between text-xs text-blue-200 gap-2">
                <span>Direct highway access via G-Ring, Orbital Highway &amp; Mesaieed Road</span>
                <span className="text-emerald-400 font-bold">24–48h Guaranteed Dispatch 🇶🇦</span>
              </div>
            </div>

            {/* Right Column: Strategic Hub Destination Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
              <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-xs hover:border-[#0099e5] hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-black uppercase text-[#002b49] flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0099e5] mr-2 inline-block" />
                    Hamad Port (Container Seaport)
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    18 Mins
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  ISPM 15 certified seaworthy timber platforms, export crates, and container dunnage for immediate export loading with zero customs fumigation quarantine.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-xs hover:border-[#0099e5] hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-black uppercase text-[#002b49] flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#002b49] mr-2 inline-block" />
                    Mesaieed Industrial City
                  </span>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                    22 Mins
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Heavy-duty timber and steel reinforced platforms tailored for petrochemical plants, steel mills, and aluminum export bundles.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-xs hover:border-[#0099e5] hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-black uppercase text-[#002b49] flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#002b49] mr-2 inline-block" />
                    Doha Industrial Area
                  </span>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                    15 Mins
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Daily just-in-time replenishment of standard wooden pallets (1200x1000 &amp; 1200x800mm), hinged pallet collars, and warehouse buffer inventory.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-xs hover:border-[#0099e5] hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-black uppercase text-[#002b49] flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#002b49] mr-2 inline-block" />
                    Ras Laffan Industrial City
                  </span>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                    55 Mins
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Certified chemical drum pallets, heavy offshore timber skids, and vapor-barrier preservation crating for critical energy infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Fleet & Manufacturing Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-3xl border border-blue-100 shadow-sm mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0099e5] flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-black text-[#002b49]">15,000 m²</p>
                <p className="text-[11px] text-gray-500 font-medium">Birkat Al-Awamer Plant</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-black text-[#002b49]">24–48 Hours</p>
                <p className="text-[11px] text-gray-500 font-medium">Rapid Highway Dispatch</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-black text-[#002b49]">ISPM 15 Certified</p>
                <p className="text-[11px] text-gray-500 font-medium">Thermal Kilns On-Site</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#002b49] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-black text-[#002b49]">On-Site Crews</p>
                <p className="text-[11px] text-gray-500 font-medium">Mobile Packing &amp; Rigging</p>
              </div>
            </div>
          </div>

          {/* CTA Link Button */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <span>View Factory Location &amp; Schedule Delivery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: "About us" (Deep Royal Navy Blue with 4 Big Numbers)
          ========================================================================= */}
      <section className="py-24 bg-[#00223a] text-white relative overflow-hidden" id="about-stats">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0099e5]">
              Al Waad Manufacturing Packaging Company (AWMPC)
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              About AWMPACK
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Under the visionary leadership of our CEO &amp; Founder <strong>Mr. Antonio</strong>, AWMPACK delivers superior packaging solutions through advanced automated technology, responsible FSC® timber sourcing, and groundbreaking wood recycling under the motto <em>&quot;Waste to Usable Product.&quot;</em>
            </p>
          </div>

          {/* 4 Big White Numbers */}
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto py-6">
            <FadeInStaggerItem className="space-y-1">
              <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                <AnimatedCounter target={15000} />
              </p>
              <div className="w-8 h-1 bg-[#0099e5] mx-auto my-2 rounded-full"></div>
              <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                m² Facility Area
              </p>
            </FadeInStaggerItem>

            <FadeInStaggerItem className="space-y-1">
              <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                <AnimatedCounter target={500} suffix="K+" />
              </p>
              <div className="w-8 h-1 bg-[#0099e5] mx-auto my-2 rounded-full"></div>
              <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                Pallets Capacity
              </p>
            </FadeInStaggerItem>

            <FadeInStaggerItem className="space-y-1">
              <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                <AnimatedCounter target={100} suffix="%" />
              </p>
              <div className="w-8 h-1 bg-[#0099e5] mx-auto my-2 rounded-full"></div>
              <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                ISPM 15 &amp; FSC® Compliant
              </p>
            </FadeInStaggerItem>

            <FadeInStaggerItem className="space-y-1">
              <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                ICV
              </p>
              <div className="w-8 h-1 bg-[#0099e5] mx-auto my-2 rounded-full"></div>
              <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                Certified Qatar Value
              </p>
            </FadeInStaggerItem>
          </FadeInStagger>

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
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
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
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Top Image: Eco Foliage with Wood Recycling */}
          <FadeIn direction="up">
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
          </FadeIn>

          {/* Heading and Button */}
          <FadeIn direction="up" delay={0.1} className="max-w-3xl space-y-4">
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
          </FadeIn>
        </div>
      </section>

            {/* =========================================================================
          FACTORY & PRODUCT GALLERY SHOWCASE (Real Client Production Photos)
          ========================================================================= */}
      <section className="py-20 bg-[#f8fafc] border-b border-gray-100" id="factory-gallery">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <FadeIn direction="up" className="space-y-3 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-wider text-[#0099e5] block">
                Visual Manufacturing Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                Factory &amp; Engineered Packaging Gallery
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Explore real production photos from our 15,000 m² Birkat Al-Awamer plant — including heavy machinery skids, custom seaworthy crates, overhead crane rigging, and certified ISPM-15 export packaging.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <Link
                href="/gallery"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#002b49] hover:bg-[#0099e5] text-white text-xs sm:text-sm font-bold transition-all shadow-md shrink-0"
              >
                <span>View Full 12+ Photo Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {homeGalleryPhotos.map((item, idx) => (
              <FadeIn key={item.id} direction="up" delay={idx * 0.08}>
                <Link
                  href="/gallery"
                  className="group block bg-white rounded-3xl overflow-hidden border border-gray-200/80 hover:border-[#0099e5]/60 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between"
                >
                  <div className="relative w-full h-64 sm:h-72 bg-gray-50 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#002b49]/90 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
                      {item.badge}
                    </div>
                  </div>
                  <div className="p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0099e5] block">
                        {item.category}
                      </span>
                      <h3 className="text-base font-black text-[#002b49] group-hover:text-[#0099e5] transition-colors line-clamp-1 mt-0.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0099e5] mt-2">
                      <span>View in Gallery</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

{/* =========================================================================
          SECTION 10: "Turnkey Packaging Solutions"
          ========================================================================= */}
      <section className="py-20 bg-white" id="solutions-banner">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <FadeIn direction="up" className="max-w-3xl space-y-4 mb-8">
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
          </FadeIn>

          {/* High-tech Warehouse Storage Facility */}
          <FadeIn direction="up" delay={0.15}>
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
          </FadeIn>
        </div>
      </section>
    </div>
  );
}