"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Mail,
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Leaf,
  Building2,
  Phone,
  MapPin,
  Flame,
  Recycle,
} from "lucide-react";
import { FadeIn } from "./motion/MotionComponents";

const certificateLogos = [
  {
    name: "ISO 9001:2015",
    standard: "Quality Management System",
    src: "/certificates/ISO9001.png",
    widthClass: "w-16 sm:w-20 md:w-22",
  },
  {
    name: "ISO 14001:2015",
    standard: "Environmental Management",
    src: "/certificates/ISO14001.png",
    widthClass: "w-16 sm:w-20 md:w-22",
  },
  {
    name: "ISO 45001:2018",
    standard: "Occupational Health & Safety",
    src: "/certificates/ISO45001.png",
    widthClass: "w-16 sm:w-20 md:w-22",
  },
  {
    name: "ICV Certified (Qatar)",
    standard: "In-Country Value Certified",
    src: "/certificates/ICV.png",
    widthClass: "w-28 sm:w-32 md:w-36",
  },
  {
    name: "ISPM 15 Heat Treated",
    standard: "IPPC Phyto-Sanitary Compliance",
    src: "/certificates/ISPM.png",
    widthClass: "w-22 sm:w-26 md:w-30",
  },
  {
    name: "FSC® Certified",
    standard: "Responsible Sustainable Forestry",
    src: "/certificates/FSC.png",
    widthClass: "w-16 sm:w-20 md:w-22",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#001829] text-gray-300 border-t border-blue-950">
      {/* Newsletter & Highlight Banner */}
      <div className="bg-[#002b49] border-b border-blue-900/60 py-12 px-4 sm:px-6 lg:px-8 xl:px-12">
        <FadeIn direction="up">
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center space-x-2 text-[#0099e5] text-xs font-semibold tracking-wider uppercase mb-2">
                <Leaf className="w-3.5 h-3.5" />
                <span>AWMPACK Industrial Packaging &amp; Wood Recycling</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Waste to Usable Product: Sustainable Pallets &amp; Crates
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Get our technical updates on ISPM 15 export heat treatment compliance, custom industrial packaging engineering, and circular wood recycling across Qatar and the GCC.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              {subscribed ? (
                <div className="flex items-center space-x-2 bg-emerald-900/60 border border-emerald-500/50 text-emerald-300 px-5 py-3 rounded-full text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Thank you for subscribing to AWMPACK updates!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your corporate email..."
                    className="px-4 py-3 bg-[#001f35] border border-blue-800 text-white rounded-full text-sm focus:outline-none focus:border-[#0099e5] focus:ring-1 focus:ring-[#0099e5] w-full"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-sm rounded-full whitespace-nowrap transition-colors flex items-center justify-center space-x-2 shadow-md"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
              <p className="text-[11px] text-gray-400 mt-2">
                Al Waad Manufacturing Packaging Company • Birkat Al-Awamer, Qatar
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Main Footer Links */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <FadeIn direction="up" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Direct Card Contact Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-block bg-white px-3 py-1.5 rounded-xl shadow-xs hover:shadow-md transition-all shrink-0"
            >
              <div className="relative w-[125px] sm:w-[140px] xl:w-[155px] aspect-[1499/529] transition-all">
                <Image
                  src="/logo.jpeg"
                  alt="AWMPACK - Al Waad Manufacturing Packaging Company"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-sm sm:text-[15px] text-gray-200 leading-relaxed font-normal">
              <strong className="text-white font-semibold">Al Waad Manufacturing Packaging Company (AWMPC)</strong> is Qatar&apos;s leading provider of industrial-grade wooden pallets, custom boxes, export crates, and wood recycling solutions.
            </p>

            {/* Trust Badges & Contact Button */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3.5 py-1.5 rounded-full bg-blue-900/40 text-blue-200 border border-blue-800 text-xs font-semibold">
                  Zone 91, Birkat Al-Awamer, Qatar
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-800/80 text-xs font-semibold">
                  ISPM 15 &amp; ICV Certified
                </span>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#0099e5] hover:bg-[#0077b6] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <span>Contact Factory &amp; Sales</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 font-medium">
                P.O. Box: 12451 • Direct Hotline:{" "}
                <a href="tel:+97451191223" className="text-white hover:text-[#0099e5] font-bold">
                  +974 5119 1223
                </a>
              </p>
            </div>
          </div>

          {/* Col 1: Products */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-b border-blue-900/80 pb-2.5">
              Products &amp; Crates
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/solutions#wooden-pallets" className="hover:text-white transition-colors block">
                  Standard Wooden Pallets
                </Link>
              </li>
              <li>
                <Link href="/solutions#custom-pallets" className="hover:text-white transition-colors block">
                  Custom / Special Pallets
                </Link>
              </li>
              <li>
                <Link href="/solutions#metal-pallets" className="hover:text-white transition-colors block">
                  Heavy Steel Pallets
                </Link>
              </li>
              <li>
                <Link href="/solutions#wooden-boxes" className="hover:text-white transition-colors block">
                  Heavy Wooden Boxes
                </Link>
              </li>
              <li>
                <Link href="/solutions#custom-crates" className="hover:text-white transition-colors block">
                  Export Crates &amp; Skids
                </Link>
              </li>
              <li>
                <Link href="/solutions#pallet-collars" className="hover:text-white transition-colors block">
                  Hinged Pallet Collars
                </Link>
              </li>
              <li>
                <Link href="/solutions#sawdust-blocks" className="hover:text-emerald-300 transition-colors text-emerald-400 font-semibold block">
                  Compressed Sawdust Blocks
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Services & Quality */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-b border-blue-900/80 pb-2.5">
              Services &amp; Compliance
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/engineering#ispm15" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>ISPM 15 Heat Treatment</span>
                  <span className="ml-1.5 text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold">HT</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions#pallet-repair" className="hover:text-white transition-colors block">
                  Pallet Repair &amp; Sorting
                </Link>
              </li>
              <li>
                <Link href="/solutions#pallet-pooling" className="hover:text-white transition-colors block">
                  Closed-Loop Pallet Pooling
                </Link>
              </li>
              <li>
                <Link href="/sustainability#waste-to-product" className="hover:text-white transition-colors block">
                  &quot;Waste to Usable Product&quot;
                </Link>
              </li>
              <li>
                <Link href="/consulting/no-cure-no-pay" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>No-Cure-No-Pay Analysis</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold">4% Save</span>
                </Link>
              </li>
              <li>
                <Link href="/consulting/material-handling" className="hover:text-white transition-colors block">
                  Handling Materials Consulting
                </Link>
              </li>
              <li>
                <Link href="/engineering#load-testing" className="hover:text-white transition-colors block">
                  Heavy Load Testing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Qatar */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-b border-blue-900/80 pb-2.5">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors block">
                  About Al Waad (AWMPC)
                </Link>
              </li>
              <li>
                <Link href="/about#made-in-qatar" className="hover:text-emerald-300 transition-colors text-emerald-400 font-semibold block">
                  Made in Qatar 🇶🇦
                </Link>
              </li>
              <li>
                <Link href="/about#icv" className="hover:text-white transition-colors block">
                  In-Country Value (ICV)
                </Link>
              </li>
              <li>
                <Link href="/about#facility" className="hover:text-white transition-colors block">
                  Birkat Al-Awamer Plant
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors block">
                  News &amp; Factory Updates
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors block">
                  Factory &amp; Product Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300 transition-colors font-bold text-[#0099e5] block">
                  Contact &amp; Factory Location
                </Link>
              </li>
            </ul>
          </div>
        </div>

        </FadeIn>
      </div>

      {/* =========================================================================
          1. FULL-WIDTH WHITE PATTI - CERTIFIED ACCREDITATIONS & GLOBAL STANDARDS
          ========================================================================= */}
      <div className="w-full bg-white text-[#002b49] border-t-2 border-b border-gray-200 py-6 sm:py-7 px-4 sm:px-6 lg:px-8 xl:px-12 shadow-xs">
        <div className="w-full flex flex-col xl:flex-row items-center justify-between gap-6 sm:gap-8">
          
          {/* Left Title / Badge */}
          <div className="flex items-center space-x-3.5 text-center xl:text-left shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse hidden sm:inline-block" />
            <div>
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#002b49] block">
                Certified Accreditations &amp; Global Standards
              </span>
              <span className="text-[11px] sm:text-xs text-gray-500 font-semibold flex items-center justify-center xl:justify-start gap-1.5 mt-0.5">
                <span>State of Qatar Industrial Supply Chain Excellence</span>
                <span>•</span>
                <span>ICV &amp; ISPM 15 Certified 🇶🇦</span>
              </span>
            </div>
          </div>

          {/* 6 Official Certificate Logos */}
          <div className="flex flex-wrap items-center justify-center xl:justify-end gap-6 sm:gap-8 md:gap-10">
            {certificateLogos.map((cert) => (
              <div
                key={cert.name}
                className="group relative flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1"
                title={`${cert.name} - ${cert.standard}`}
              >
                <div className={`relative h-11 sm:h-13 md:h-14 ${cert.widthClass} transition-transform group-hover:scale-105 duration-300`}>
                  <Image
                    src={cert.src}
                    alt={cert.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 120px, 160px"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* =========================================================================
          2. BOTTOM LEGAL COPYRIGHT BAR (Dark Sleek Finish)
          ========================================================================= */}
      <div className="w-full bg-[#001220] py-5 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-blue-950/80">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p className="text-center sm:text-left">
            © 2026 Al Waad Manufacturing Packaging Company (AWMPC / AWMPACK). All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-medium text-gray-400">
            <Link href="/about" className="hover:text-white transition-colors">Quality Policy</Link>
            <Link href="/about" className="hover:text-white transition-colors">HSE Safety Charter</Link>
            <Link href="/sustainability" className="hover:text-white transition-colors">Environmental Policy</Link>
            <Link href="/engineering#ispm15" className="hover:text-white transition-colors">ISPM 15 Compliance</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Factory Inquiries</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}