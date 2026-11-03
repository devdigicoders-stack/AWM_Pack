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
      <div className="bg-[#002b49] border-b border-blue-900/60 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
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
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Direct Card Contact Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block bg-white p-2 rounded-xl">
              <div className="relative h-10 w-44">
                <Image
                  src="/logo.jpeg"
                  alt="AWMPACK Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-xs text-gray-300 leading-relaxed font-medium">
              <strong>Al Waad Manufacturing Packaging Company (AWMPC)</strong> is Qatar&apos;s leading provider of industrial-grade wooden pallets, custom boxes, export crates, and wood recycling solutions.
            </p>

            {/* Direct Client Contact Box from Business Card */}
            <div className="p-4 rounded-2xl bg-[#00223a] border border-blue-900/80 space-y-2 text-xs">
              <div className="flex items-center justify-between border-b border-blue-800/60 pb-2">
                <div>
                  <p className="font-bold text-white text-sm">Eng. Maher Marjy</p>
                  <p className="text-[#0099e5] font-semibold text-[11px]">Factory Manager</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Direct Factory Contact
                </span>
              </div>

              {/* Quick WhatsApp Pill */}
              <div className="pt-1">
                <a
                  href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20would%20like%20to%20inquire%20about%20pallets%20and%20crating"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-1.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs shadow-xs transition-all"
                >
                  <span>Chat on WhatsApp (+974 5119 1223)</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300 pt-1">
                <p className="flex items-center">
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-[#0099e5] shrink-0" />
                  <a href="tel:+97451191223" className="hover:text-white font-medium">+974 5119 1223 (Mobile)</a>
                </p>
                <p className="flex items-center">
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-[#0099e5] shrink-0" />
                  <a href="tel:+97440394581" className="hover:text-white font-medium">+974 4039 4581 (Office)</a>
                </p>
                <p className="flex items-center">
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-[#0099e5] shrink-0" />
                  <a href="tel:+97466864923" className="hover:text-white font-medium">+974 6686 4923 (Sales)</a>
                </p>
                <p className="flex items-center">
                  <Mail className="w-3.5 h-3.5 mr-1.5 text-[#0099e5] shrink-0" />
                  <a href="mailto:maher@awmpack.com" className="hover:text-white">maher@awmpack.com</a>
                </p>
                <p className="flex items-center">
                  <Mail className="w-3.5 h-3.5 mr-1.5 text-[#0099e5] shrink-0" />
                  <a href="mailto:info@awmpack.com" className="hover:text-white">info@awmpack.com</a>
                </p>
                <p className="flex items-center">
                  <Globe className="w-3.5 h-3.5 mr-1.5 text-[#0099e5] shrink-0" />
                  <a href="https://www.awmpack.com" target="_blank" rel="noreferrer" className="hover:text-white">www.awmpack.com</a>
                </p>
              </div>

              <div className="pt-2 border-t border-blue-800/60 text-gray-400 text-[11px] flex flex-col space-y-1">
                <div className="flex items-start space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0099e5] shrink-0 mt-0.5" />
                  <span>
                    Building No. 89, Street No. 3012, Zone No. 91, Birkat Al-Awamer, Al Wukair, State of Qatar (P.O. Box 12451)
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Birkat+Al-Awamer+Zone+91+Street+3012+Qatar"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0099e5] hover:underline font-bold text-[11px] pl-5"
                >
                  View on Google Maps →
                </a>
              </div>

              {/* Social Media Links */}
              <div className="pt-2 border-t border-blue-800/60 flex items-center space-x-3 text-xs text-gray-300">
                <span className="text-[10px] uppercase font-bold text-gray-400">Social:</span>
                <a
                  href="https://www.linkedin.com/company/awmpack"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-0.5 rounded bg-blue-900/40 text-blue-300 hover:text-white hover:bg-[#0099e5] transition-all font-semibold"
                >
                  LinkedIn
                </a>
                <a
                  href="https://wa.me/97451191223"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-0.5 rounded bg-emerald-900/40 text-emerald-300 hover:text-white hover:bg-emerald-600 transition-all font-semibold"
                >
                  WhatsApp
                </a>
                <a
                  href="https://www.awmpack.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-0.5 rounded bg-blue-900/40 text-blue-300 hover:text-white hover:bg-[#0099e5] transition-all font-semibold"
                >
                  awmpack.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 1: Products */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-900 pb-2">
              Products &amp; Crates
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/solutions#wooden-pallets" className="hover:text-[#0099e5] transition-colors">
                  Standard Wooden Pallets
                </Link>
              </li>
              <li>
                <Link href="/solutions#custom-pallets" className="hover:text-[#0099e5] transition-colors">
                  Custom / Special Pallets
                </Link>
              </li>
              <li>
                <Link href="/solutions#metal-pallets" className="hover:text-[#0099e5] transition-colors">
                  Heavy Steel Pallets
                </Link>
              </li>
              <li>
                <Link href="/solutions#wooden-boxes" className="hover:text-[#0099e5] transition-colors">
                  Heavy Wooden Boxes
                </Link>
              </li>
              <li>
                <Link href="/solutions#custom-crates" className="hover:text-[#0099e5] transition-colors">
                  Export Crates &amp; Skids
                </Link>
              </li>
              <li>
                <Link href="/solutions#pallet-collars" className="hover:text-[#0099e5] transition-colors">
                  Hinged Pallet Collars
                </Link>
              </li>
              <li>
                <Link href="/solutions#sawdust-blocks" className="hover:text-[#0099e5] transition-colors text-emerald-400 font-semibold">
                  Compressed Sawdust Blocks
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Services & Quality */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-900 pb-2">
              Services &amp; Compliance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/engineering#ispm15" className="hover:text-[#0099e5] transition-colors flex items-center">
                  <span>ISPM 15 Heat Treatment</span>
                  <span className="ml-1 text-[9px] bg-emerald-500/20 text-emerald-300 px-1 py-0.5 rounded">HT</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions#pallet-repair" className="hover:text-[#0099e5] transition-colors">
                  Pallet Repair &amp; Sorting
                </Link>
              </li>
              <li>
                <Link href="/solutions#pallet-pooling" className="hover:text-[#0099e5] transition-colors">
                  Closed-Loop Pallet Pooling
                </Link>
              </li>
              <li>
                <Link href="/sustainability#waste-to-product" className="hover:text-[#0099e5] transition-colors">
                  &quot;Waste to Usable Product&quot;
                </Link>
              </li>
              <li>
                <Link href="/solutions#consulting" className="hover:text-[#0099e5] transition-colors">
                  No-Cure No-Pay Consulting
                </Link>
              </li>
              <li>
                <Link href="/engineering#load-testing" className="hover:text-[#0099e5] transition-colors">
                  Heavy Load Testing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Qatar */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-900 pb-2">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#0099e5] transition-colors">
                  About Al Waad (AWMPC)
                </Link>
              </li>
              <li>
                <Link href="/about#made-in-qatar" className="hover:text-[#0099e5] transition-colors text-emerald-400 font-semibold">
                  Made in Qatar 🇶🇦
                </Link>
              </li>
              <li>
                <Link href="/about#icv" className="hover:text-[#0099e5] transition-colors">
                  In-Country Value (ICV)
                </Link>
              </li>
              <li>
                <Link href="/about#facility" className="hover:text-[#0099e5] transition-colors">
                  Birkat Al-Awamer Plant
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-[#0099e5] transition-colors">
                  News &amp; Factory Updates
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#0099e5] transition-colors">
                  Factory &amp; Product Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0099e5] transition-colors font-bold text-[#0099e5]">
                  Contact &amp; Factory Location
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditations Badges (Exact from Client Business Card) */}
        <div className="mt-14 pt-8 border-t border-blue-900/60 flex flex-wrap items-center justify-between gap-6 text-xs text-gray-400">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold text-white">Certified Accreditations:</span>
            <div className="flex items-center space-x-1.5 bg-[#00223a] border border-blue-800 px-3 py-1.5 rounded-md text-blue-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0099e5]" />
              <span>ISO 9001:2015</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#00223a] border border-blue-800 px-3 py-1.5 rounded-md text-emerald-200">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>ISO 14001:2015</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#00223a] border border-blue-800 px-3 py-1.5 rounded-md text-teal-200">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>ISO 45001:2018</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#00223a] border border-blue-800 px-3 py-1.5 rounded-md text-amber-200">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>ICV Certified (Qatar)</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#00223a] border border-blue-800 px-3 py-1.5 rounded-md text-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>ISPM 15 Heat Treated</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#00223a] border border-blue-800 px-3 py-1.5 rounded-md text-emerald-200">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>FSC® Certified</span>
            </div>
          </div>

          <div className="text-gray-300 font-semibold text-xs flex items-center space-x-2">
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
      </div>
    </footer>
  );
}