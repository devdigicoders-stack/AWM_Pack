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

        {/* Accreditations Badges (Exact from Client Business Card) */}
        <div className="mt-14 pt-8 border-t border-blue-900/60 flex flex-wrap items-center justify-between gap-6 text-sm text-gray-300">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-bold text-white text-sm">Certified Accreditations:</span>
            <div className="flex items-center space-x-1.5 bg-[#00223a] border border-blue-800 px-3.5 py-1.5 rounded-md text-blue-200 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#0099e5]" />
              <span>ISO 9001:2015</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#00223a] border border-blue-800 px-3.5 py-1.5 rounded-md text-emerald-200 text-xs font-semibold">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span>ISO 14001:2015</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#00223a] border border-blue-800 px-3.5 py-1.5 rounded-md text-teal-200 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>ISO 45001:2018</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#00223a] border border-blue-800 px-3.5 py-1.5 rounded-md text-amber-200 text-xs font-semibold">
              <Award className="w-4 h-4 text-amber-400" />
              <span>ICV Certified (Qatar)</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#00223a] border border-blue-800 px-3.5 py-1.5 rounded-md text-emerald-200 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>ISPM 15 Heat Treated</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#00223a] border border-blue-800 px-3.5 py-1.5 rounded-md text-emerald-200 text-xs font-semibold">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span>FSC® Certified</span>
            </div>
          </div>

          <div className="text-gray-200 font-bold text-sm flex items-center space-x-2">
            <span>State of Qatar Industrial Excellence</span>
            <span>🇶🇦</span>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="mt-8 pt-6 border-t border-blue-950 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Al Waad Manufacturing Packaging Company (AWMPC / AWMPACK). All rights reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link href="/about" className="hover:text-gray-400">Quality Policy</Link>
            <Link href="/about" className="hover:text-gray-400">HSE Safety Charter</Link>
            <Link href="/sustainability" className="hover:text-gray-400">Environmental Policy</Link>
            <Link href="/contact" className="hover:text-gray-400">Factory Inquiries</Link>
          </div>
        </div>
        </FadeIn>
      </div>
    </footer>
  );
}