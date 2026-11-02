"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import TotalCostApproach from "../../components/TotalCostApproach";
import {
  FlaskConical,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  TrendingDown,
  Layers,
  Cpu,
  Boxes,
  Zap,
} from "lucide-react";

export default function EngineeringPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Engineering & Testing");

  const labCapabilities = [
    {
      title: "Rotational & Free-Fall Drop Testing",
      desc: "Simulating accidental dock drops and rough courier handling up to 2 meters with multi-axis acceleration measurement.",
      standard: "ISTA 1A, 2A, 3A & ASTM D5276",
    },
    {
      title: "Random & Sine Vibration Tables",
      desc: "Multi-ton hydraulic and electrodynamic shakers simulating rail harmonic bounce, highway vibration, and air-freight turbulence.",
      standard: "ISTA 3E & ASTM D4728",
    },
    {
      title: "Climatic Thermal Chambers",
      desc: "Temperature profiling from -40°C to +80°C and 10% to 98% relative humidity, validating adhesive bonds and desiccant performance.",
      standard: "ASTM D4332 & ISO 2233",
    },
    {
      title: "Dynamic & Static Compression",
      desc: "Hydraulic platen crush testing evaluating pallet stackability inside marine containers and multi-tier warehouse racks.",
      standard: "ASTM D642 & ISO 12048",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("Engineering Inquiries");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* Engineering Hero */}
        <div className="bg-gradient-to-b from-[#090d16] via-[#0f172a] to-[#0b1120] text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/40 rounded-full px-4 py-1 text-xs text-emerald-300">
                <FlaskConical className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold uppercase tracking-wider">
                  ISTA Certified Global Laboratories
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Precision Packaging Engineering & Certified Testing
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Over 200 dedicated packaging engineers and accredited test centers worldwide ensure your high-value equipment survives the most grueling global transit routes without over-packaging.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setContactTopic("Laboratory Testing Request");
                    setContactOpen(true);
                  }}
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg transition-all"
                >
                  Book a Test in Our ISTA Labs
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Total Cost Approach Component */}
        <TotalCostApproach
          onOpenContact={() => {
            setContactTopic("Total Cost Engineering Consultation");
            setContactOpen(true);
          }}
        />

        {/* ISTA Labs Showcase */}
        <section className="py-20 bg-white border-b border-gray-100" id="labs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                Laboratory Capabilities
              </span>
              <h2 className="text-3xl font-extrabold text-gray-950">
                Certified Testing & Validation Protocols
              </h2>
              <p className="text-sm text-gray-600">
                We simulate real-world logistics hazards—from severe forklift impacts and drop tests to arctic freezing and ocean humidity—before designs ever go into serial manufacturing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {labCapabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-emerald-300 hover:shadow-md transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {cap.standard}
                  </span>
                  <h3 className="text-xl font-bold text-gray-950">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-gray-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-800">
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">
                  Need a formal ISTA or UN Dangerous Goods Test Certificate?
                </h4>
                <p className="text-xs text-gray-400">
                  Our accredited labs in Sweden, the US, and China provide certified compliance reports recognized by international airlines and marine carriers.
                </p>
              </div>
              <button
                onClick={() => {
                  setContactTopic("ISTA Certification Inquiries");
                  setContactOpen(true);
                }}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl whitespace-nowrap shadow-md transition-colors"
              >
                Schedule Test Session
              </button>
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

