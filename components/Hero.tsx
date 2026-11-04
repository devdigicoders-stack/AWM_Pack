"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Play,
  CheckCircle2,
  ShieldCheck,
  TrendingDown,
  Globe2,
  Leaf,
  Layers,
  Award,
  X,
} from "lucide-react";

interface HeroProps {
  onOpenContact?: () => void;
  onScrollToGreenCalc?: () => void;
}

export default function Hero({ onOpenContact, onScrollToGreenCalc }: HeroProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-b from-[#090d16] via-[#0f172a] to-[#0b1120] text-white overflow-hidden">
      {/* Background Decorative Grid and Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[32rem] h-[32rem] bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/40 rounded-full px-4 py-1.5 text-xs text-emerald-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold tracking-wide uppercase">
                Purpose-Driven Supply Chain Engineering
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              We save resources in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                supply chains
              </span>
              , for a better tomorrow.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Nefab is a global leader in engineered transport packaging and logistics services. We innovate together with our customers to provide multi-material solutions that reduce environmental impact and lower total costs across 39 countries.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-900/30 hover:shadow-emerald-900/50 hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onScrollToGreenCalc}
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm rounded-xl backdrop-blur-md hover:-translate-y-0.5 transition-all"
              >
                <Calculator className="w-4 h-4 text-emerald-400" />
                <span>Calculate Savings (GreenCalc™)</span>
              </button>

              <button
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center space-x-2 px-4 py-3.5 text-gray-300 hover:text-white font-medium text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500/30 flex items-center justify-center text-emerald-400 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Our Purpose Story</span>
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-6 border-t border-gray-800/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-gray-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ISO 14001 & 9001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ISTA Certified Global Test Labs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span>100% Recyclable Fiber Innovations</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Showcase Card */}
              <div className="relative rounded-2xl bg-gradient-to-b from-gray-900/90 to-gray-950/90 border border-gray-700/80 p-6 shadow-2xl backdrop-blur-xl space-y-6">
                <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">Nefab Multi-Material Ecosystem</h4>
                      <p className="text-xs text-gray-400">Optimized for Total Supply Chain Cost</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold bg-emerald-950 border border-emerald-500/40 text-emerald-300 px-2.5 py-1 rounded-full">
                    GreenCalc™ Verified
                  </span>
                </div>

                {/* 3 Value Pillars */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-gray-800/60 border border-gray-700/50 flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 mt-0.5">
                      <Leaf className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-white">FiberFlute™ Cushioning</h5>
                      <p className="text-xs text-gray-300 mt-0.5">
                        Paper-based, 100% recyclable replacement for polyurethane and polystyrene foams.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-gray-800/60 border border-gray-700/50 flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-teal-950 text-teal-400 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-white">ExPak Foldable Plywood</h5>
                      <p className="text-xs text-gray-300 mt-0.5">
                        High-strength, lightweight industrial crates delivering up to 60% volume reduction in transit.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-gray-800/60 border border-gray-700/50 flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 mt-0.5">
                      <TrendingDown className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-white">Returnable Pooling Loops</h5>
                      <p className="text-xs text-gray-300 mt-0.5">
                        End-to-end loop management with IoT track-and-trace reducing single-use waste to zero.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Metric */}
                <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-emerald-300">Documented Client Savings:</span>
                    <p className="text-lg font-black text-white">34% CO₂eq & 22% Freight Cost</p>
                  </div>
                  <button
                    onClick={onOpenContact}
                    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-colors"
                  >
                    Get Audit
                  </button>
                </div>
              </div>

              {/* Floating Global Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gray-900 border border-gray-700 rounded-xl p-3 shadow-xl flex items-center space-x-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">39 Countries Active</span>
                  <span className="text-[10px] text-gray-400">145 Global Facilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Global Impact Stats Bar */}
      <div className="border-t border-b border-gray-800 bg-gray-950/90 backdrop-blur-md py-8">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
            <div className="pt-4 md:pt-0">
              <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">39</p>
              <p className="text-xs font-medium text-emerald-400 uppercase tracking-wider mt-1">
                Countries Presence
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5">Global with local support</p>
            </div>

            <div className="pt-4 md:pt-0">
              <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">6,000+</p>
              <p className="text-xs font-medium text-emerald-400 uppercase tracking-wider mt-1">
                Global Employees
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5">Dedicated packaging specialists</p>
            </div>

            <div className="pt-4 md:pt-0">
              <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">145</p>
              <p className="text-xs font-medium text-emerald-400 uppercase tracking-wider mt-1">
                Facilities & Hubs
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5">Manufacturing & Service Centers</p>
            </div>

            <div className="pt-4 md:pt-0">
              <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">10.3B</p>
              <p className="text-xs font-medium text-emerald-400 uppercase tracking-wider mt-1">
                SEK Turnover
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5">Strong financial stability</p>
            </div>

            <div className="col-span-2 md:col-span-1 pt-4 md:pt-0">
              <p className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">200+</p>
              <p className="text-xs font-medium text-emerald-400 uppercase tracking-wider mt-1">
                Packaging Engineers
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5">ISTA certified testing labs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-md">
          <div className="bg-gray-900 border border-gray-700 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-bold text-white">Nefab: Saving Resources for a Better Tomorrow</span>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-black flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-600/30 border border-emerald-500/50 flex items-center justify-center mb-4 text-emerald-400">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <h3 className="text-xl font-bold text-white">
                &ldquo;We save resources in supply chains, for a better tomorrow.&rdquo;
              </h3>
              <p className="text-sm text-gray-400 max-w-md mt-2">
                Explore how Nefab partners with industry leaders to engineer sustainable multi-material packaging and circular logistics flows.
              </p>
              <div className="mt-6 flex space-x-3">
                <button
                  onClick={() => {
                    setVideoModalOpen(false);
                    onOpenContact && onOpenContact();
                  }}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg"
                >
                  Contact Our Engineering Team
                </button>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold text-xs rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

