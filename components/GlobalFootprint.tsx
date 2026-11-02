"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe2,
  MapPin,
  Building2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

interface GlobalFootprintProps {
  onOpenContact?: () => void;
}

export default function GlobalFootprint({ onOpenContact }: GlobalFootprintProps) {
  const [activeRegion, setActiveRegion] = useState<"europe" | "americas" | "apac" | "mea">("europe");

  const regions = {
    europe: {
      name: "Europe & Nordics",
      countriesCount: "21 Countries",
      sitesCount: "68 Facilities",
      headquarters: "Jönköping, Sweden (Global HQ)",
      keyLocations: [
        { country: "Sweden", cities: "Jönköping, Alfta, Kista, Gothenburg" },
        { country: "Germany", cities: "Munich, Stuttgart, Frankfurt, Hamburg" },
        { country: "France", cities: "Paris, Lyon, Toulouse" },
        { country: "United Kingdom", cities: "Manchester, Northampton, Glasgow" },
        { country: "Netherlands", cities: "Eindhoven, Rotterdam" },
        { country: "Poland & CEE", cities: "Wroclaw, Warsaw, Katowice" },
      ],
      features: "Primary European engineering headquarters, central GreenCalc development lab, and major automated plywood manufacturing plants.",
    },
    americas: {
      name: "The Americas",
      countriesCount: "6 Countries",
      sitesCount: "42 Facilities",
      headquarters: "Dallas, Texas, USA",
      keyLocations: [
        { country: "United States", cities: "Dallas, San Jose, Austin, Chicago, Atlanta" },
        { country: "Mexico", cities: "Guadalajara, Monterrey, Queretaro" },
        { country: "Canada", cities: "Toronto, Montreal, Vancouver" },
        { country: "Brazil", cities: "São Paulo, Curitiba" },
      ],
      features: "Specialized hyper-scale datacom engineering lab in Silicon Valley, lithium-ion battery testing hubs in Texas and Mexico.",
    },
    apac: {
      name: "Asia-Pacific",
      countriesCount: "9 Countries",
      sitesCount: "29 Facilities",
      headquarters: "Shanghai, China & Singapore",
      keyLocations: [
        { country: "China", cities: "Shanghai, Shenzhen, Wuxi, Dongguan, Beijing" },
        { country: "India", cities: "Bangalore, Chennai, Pune, Delhi NCR" },
        { country: "Singapore", cities: "Singapore Regional APAC Hub" },
        { country: "Malaysia & Vietnam", cities: "Penang, Ho Chi Minh City" },
      ],
      features: "Advanced cleanroom manufacturing for semiconductor wafer pods, heavy contract packaging for telecom and electronics exports.",
    },
    mea: {
      name: "Middle East & Africa",
      countriesCount: "3 Countries",
      sitesCount: "6 Facilities",
      headquarters: "Dubai, United Arab Emirates",
      keyLocations: [
        { country: "UAE", cities: "Dubai, Abu Dhabi" },
        { country: "Saudi Arabia", cities: "Riyadh, Dammam" },
        { country: "South Africa", cities: "Johannesburg, Durban" },
      ],
      features: "Heavy project cargo crating for oil & gas infrastructure, electrical grid transformers, and mining machinery.",
    },
  };

  const current = regions[activeRegion];

  return (
    <section className="py-24 bg-white border-b border-gray-100" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-emerald-700 text-xs font-bold tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Global Reach, Local Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            Operating in 39 Countries Across 145 Locations
          </h2>
          <p className="text-base text-gray-600">
            Wherever your production lines and supply chains operate, Nefab provides synchronized global engineering standards coupled with local manufacturing agility.
          </p>
        </div>

        {/* Region Switcher Buttons */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-gray-100 border border-gray-200">
            <button
              onClick={() => setActiveRegion("europe")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeRegion === "europe"
                  ? "bg-white text-emerald-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Europe & Nordics (68)
            </button>
            <button
              onClick={() => setActiveRegion("americas")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeRegion === "americas"
                  ? "bg-white text-emerald-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              The Americas (42)
            </button>
            <button
              onClick={() => setActiveRegion("apac")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeRegion === "apac"
                  ? "bg-white text-emerald-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Asia-Pacific (29)
            </button>
            <button
              onClick={() => setActiveRegion("mea")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeRegion === "mea"
                  ? "bg-white text-emerald-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Middle East & Africa (6)
            </button>
          </div>
        </div>

        {/* Active Region Display */}
        <div className="mt-10 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Regional Infrastructure
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {current.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {current.features}
              </p>

              {/* Key Location Badges */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                  Key Country Hubs & Service Centers:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.keyLocations.map((loc) => (
                    <div
                      key={loc.country}
                      className="p-3 rounded-xl bg-gray-900 border border-gray-800"
                    >
                      <h4 className="text-xs font-bold text-white flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>{loc.country}</span>
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        {loc.cities}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
                >
                  Locate Nearest {current.name} Facility
                </button>
                <Link
                  href="/about#locations"
                  className="text-xs font-semibold text-gray-300 hover:text-white flex items-center"
                >
                  <span>View Full Global Directory</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            {/* Right Stat Highlight */}
            <div className="lg:col-span-5 bg-gray-900/90 border border-gray-800 rounded-2xl p-8 space-y-6 text-center">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                  Regional Strength
                </span>
                <p className="text-4xl font-black text-white mt-1">
                  {current.sitesCount}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Active Manufacturing & Service Hubs
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-950 border border-gray-800 text-left space-y-1">
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                  Regional Headquarters
                </span>
                <p className="text-xs font-semibold text-white">
                  {current.headquarters}
                </p>
              </div>

              <div className="pt-2 border-t border-gray-800 text-xs text-gray-400 text-left space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Synchronized ISTA Testing Protocols</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Unified ERP/WMS Global Supply Contracts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Localized Sourcing of FSC Timber & Fiber</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
