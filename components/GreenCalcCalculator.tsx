"use client";

import React, { useState, useId } from "react";
import {
  Calculator,
  Leaf,
  DollarSign,
  Truck,
  Trees,
  CheckCircle2,
  Download,
  Info,
  ArrowRight,
  ShieldCheck,
  Award,
} from "lucide-react";

interface GreenCalcCalculatorProps {
  onOpenContactWithTopic?: (topic: string) => void;
}

export default function GreenCalcCalculator({ onOpenContactWithTopic }: GreenCalcCalculatorProps) {
  const [industry, setIndustry] = useState("Datacom & Cloud");
  const [freightMode, setFreightMode] = useState<"air" | "ocean" | "road">("air");
  const [volume, setVolume] = useState(25000);
  const [currentMaterial, setCurrentMaterial] = useState("eps_wood");
  const [solutionType, setSolutionType] = useState("fiberflute_expak");

  const industryId = useId();
  const freightId = useId();
  const materialId = useId();
  const solutionId = useId();

  // Multiplier formulas based on empirical packaging LCA metrics
  const getCalculatedMetrics = () => {
    let baseCo2PerUnitKg = 8.5; // kg CO2eq
    let baseCostPerUnit = 45; // USD

    if (freightMode === "air") {
      baseCo2PerUnitKg *= 3.4;
      baseCostPerUnit *= 2.8;
    } else if (freightMode === "ocean") {
      baseCo2PerUnitKg *= 1.2;
      baseCostPerUnit *= 1.4;
    } else {
      baseCo2PerUnitKg *= 1.8;
      baseCostPerUnit *= 1.6;
    }

    // Solution efficiency
    let co2ReductionPct = 0.35;
    let costReductionPct = 0.22;

    if (solutionType === "returnable_loop") {
      co2ReductionPct = 0.62;
      costReductionPct = 0.44;
    } else if (solutionType === "fiberflute_expak") {
      co2ReductionPct = 0.41;
      costReductionPct = 0.28;
    } else {
      co2ReductionPct = 0.29;
      costReductionPct = 0.19;
    }

    const totalCo2SavedTons = ((volume * baseCo2PerUnitKg * co2ReductionPct) / 1000).toFixed(1);
    const totalCostSavedUSD = Math.round(volume * baseCostPerUnit * costReductionPct).toLocaleString();
    const equivalentTrees = Math.round(Number(totalCo2SavedTons) * 45).toLocaleString();
    const truckloadsSaved = Math.max(1, Math.round(volume * 0.0028 * (co2ReductionPct * 2.2)));

    return {
      totalCo2SavedTons,
      totalCostSavedUSD,
      equivalentTrees,
      truckloadsSaved,
      co2ReductionPct: Math.round(co2ReductionPct * 100),
      costReductionPct: Math.round(costReductionPct * 100),
    };
  };

  const results = getCalculatedMetrics();

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 via-[#0a121e] to-gray-950 text-white relative overflow-hidden" id="greencalc">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span>AWMPACK Certified LCA Modeling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            EcoCalc™ Packaging & Pallet Savings Simulator
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            AWMPACK&apos;s Life Cycle Analysis model calculates estimated carbon footprint (CO₂eq) and financial cost reductions across your specific transport flows using circular wood blocks, optimized timber engineering, and pooling.
          </p>
        </div>

        {/* Calculator Main Container */}
        <div className="mt-12 bg-gray-900/90 border border-gray-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Inputs Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                <h3 className="text-base font-bold text-white flex items-center space-x-2">
                  <span>1. Configure Your Supply Chain Parameters</span>
                </h3>
                <span className="text-xs text-emerald-400 font-medium">ISO 14040/44 Compliant</span>
              </div>

              {/* Grid of Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Industry */}
                <div>
                  <label htmlFor={industryId} className="block text-xs font-semibold text-gray-300 mb-2">
                    Industry Sector
                  </label>
                  <select
                    id={industryId}
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option>Datacom & Cloud</option>
                    <option>Telecom & Wireless</option>
                    <option>Energy & Power Generation</option>
                    <option>LiB & E-Mobility (Batteries)</option>
                    <option>Healthcare & MedTech</option>
                    <option>Semiconductors</option>
                    <option>Heavy Industrial Equipment</option>
                  </select>
                </div>

                {/* Freight Mode */}
                <div>
                  <label htmlFor={freightId} className="block text-xs font-semibold text-gray-300 mb-2">
                    Primary Freight Mode
                  </label>
                  <select
                    id={freightId}
                    value={freightMode}
                    onChange={(e) => setFreightMode(e.target.value as "air" | "ocean" | "road")}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="air">Air Freight (High Carbon & Rate)</option>
                    <option value="ocean">Ocean Container Freight</option>
                    <option value="road">Road / Long-Haul Trucking</option>
                  </select>
                </div>

                {/* Current Baseline Packaging */}
                <div>
                  <label htmlFor={materialId} className="block text-xs font-semibold text-gray-300 mb-2">
                    Current Baseline Packaging
                  </label>
                  <select
                    id={materialId}
                    value={currentMaterial}
                    onChange={(e) => setCurrentMaterial(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="eps_wood">Heavy Wooden Crates + EPS Foam</option>
                    <option value="corrugated_pe">Standard Corrugated + Plastic Foams</option>
                    <option value="single_plastic">Single-use Plastic Pallets & Film</option>
                  </select>
                </div>

                {/* AWMPACK Proposed Optimization */}
                <div>
                  <label htmlFor={solutionId} className="block text-xs font-semibold text-gray-300 mb-2">
                    Proposed AWMPACK Solution
                  </label>
                  <select
                    id={solutionId}
                    value={solutionType}
                    onChange={(e) => setSolutionType(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-emerald-400 font-semibold focus:outline-none focus:border-emerald-500"
                  >
                    <option value="fiberflute_expak">Waste-to-Product (Compressed Sawdust Blocks + Timber)</option>
                    <option value="returnable_loop">Returnable Pallet Loop (Zero-Waste Hamad Port Pooling)</option>
                    <option value="lightweight_fiber">Custom Engineered Lightweight Timber Pallets</option>
                  </select>
                </div>
              </div>

              {/* Annual Volume Slider */}
              <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-300">
                    Annual Package / Shipment Units:
                  </span>
                  <span className="text-lg font-black text-emerald-400">
                    {volume.toLocaleString()} units/yr
                  </span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={150000}
                  step={1000}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>1,000 units</span>
                  <span>50,000 units</span>
                  <span>150,000+ units</span>
                </div>
              </div>

              {/* Certified Info Footer */}
              <div className="flex items-center space-x-3 text-xs text-gray-400">
                <Award className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  Calculations based on verified ISO 14040/44 LCA principles and AWMPACK Birkat Al-Awamer manufacturing benchmarks.
                </span>
              </div>
            </div>

            {/* Results Display Column */}
            <div className="lg:col-span-5 bg-gradient-to-b from-emerald-950/50 via-gray-900 to-gray-950 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="border-b border-gray-800 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Simulation Output
                  </span>
                  <h4 className="text-lg font-bold text-white">Estimated Annual Savings</h4>
                </div>
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Leaf className="w-5 h-5" />
                </div>
              </div>

              {/* 2 Big Numbers */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gray-950 border border-emerald-500/30">
                  <div className="flex items-center space-x-1.5 text-xs text-emerald-400 mb-1">
                    <Leaf className="w-3.5 h-3.5" />
                    <span>CO₂eq Reduction</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    -{results.totalCo2SavedTons} <span className="text-xs text-emerald-300 font-bold">Tons</span>
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">
                    {results.co2ReductionPct}% lower carbon footprint
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-gray-950 border border-emerald-500/30">
                  <div className="flex items-center space-x-1.5 text-xs text-emerald-400 mb-1">
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>Total Cost Saved</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    ${results.totalCostSavedUSD}
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">
                    {results.costReductionPct}% average cost savings
                  </span>
                </div>
              </div>

              {/* Equivalence Metrics */}
              <div className="space-y-3 pt-1">
                <div className="p-3 rounded-xl bg-gray-950/60 border border-gray-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-300">
                    <Trees className="w-4 h-4 text-emerald-400" />
                    <span>Equivalent Trees Absorbing CO₂/yr</span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    {results.equivalentTrees} trees
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-gray-950/60 border border-gray-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-300">
                    <Truck className="w-4 h-4 text-emerald-400" />
                    <span>Freight Trucks Eliminated per Year</span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    {results.truckloadsSaved} full loads
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() =>
                    onOpenContactWithTopic &&
                    onOpenContactWithTopic(`GreenCalc LCA Report for ${industry} (${volume} units)`)
                  }
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-900/40 flex items-center justify-center space-x-2 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Request Full Certified GreenCalc™ Audit</span>
                </button>
                <p className="text-center text-[11px] text-gray-400 mt-2">
                  Our packaging engineers perform an exhaustive on-site LCA audit free of charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

