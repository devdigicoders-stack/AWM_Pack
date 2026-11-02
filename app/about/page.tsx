"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import GlobalFootprint from "../../components/GlobalFootprint";
import {
  ShieldCheck,
  Award,
  Globe2,
  Users,
  Building2,
  Calendar,
  CheckCircle2,
  Heart,
  TrendingUp,
  Leaf,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Corporate Inquiries");

  const milestones = [
    {
      year: "1949",
      title: "The Founding Invention",
      desc: "Brothers Sigurd and Lennart Nordgren invent the revolutionary Nefab collapsible plywood bread box in Alfta, Sweden.",
    },
    {
      year: "1960s",
      title: "Industrial Crating & ExPak Patent",
      desc: "Nefab pivots from bakery boxes to heavy industrial packaging, patenting the steel-banded foldable ExPak container.",
    },
    {
      year: "1980s",
      title: "European & Global Expansion",
      desc: "Opening dedicated subsidiaries across France, Germany, the UK, the United States, and Asia to support global electronics manufacturers.",
    },
    {
      year: "2000s",
      title: "Multi-Material & Sourcing",
      desc: "Transitioning to a complete multi-material approach and offering on-site contract packing operations inside client factories.",
    },
    {
      year: "2015",
      title: "Launch of GreenCalc™ LCA",
      desc: "Pioneering the first certified digital Life Cycle Analysis tool specifically built to quantify supply chain packaging carbon footprints.",
    },
    {
      year: "Today",
      title: "Joint Ownership with FAM AB & Net-Zero 2030",
      desc: "Jointly owned 50/50 by the founding Nordgren/Pihl family and Wallenberg Investments (FAM AB), driving global sustainable circular flows with 10.3B SEK turnover.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("About Us Inquiries");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* About Hero */}
        <div className="bg-gradient-to-b from-[#090d16] via-[#0f172a] to-[#0b1120] text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/40 rounded-full px-4 py-1 text-xs text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold uppercase tracking-wider">
                  Swedish Heritage Since 1949
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                About Nefab Group
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                We are a global provider of sustainable packaging solutions and logistics services. For over 75 years, we have innovated together with leading global corporations to save environmental and financial resources in supply chains.
              </p>
            </div>
          </div>
        </div>

        {/* Key Corporate Metrics */}
        <div className="bg-emerald-900 text-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-black text-white">39</p>
                <p className="text-xs uppercase tracking-wider text-emerald-200 mt-1 font-semibold">
                  Countries Worldwide
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-white">6,000+</p>
                <p className="text-xs uppercase tracking-wider text-emerald-200 mt-1 font-semibold">
                  Global Employees
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-white">145</p>
                <p className="text-xs uppercase tracking-wider text-emerald-200 mt-1 font-semibold">
                  Operating Hubs
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-white">10.3B</p>
                <p className="text-xs uppercase tracking-wider text-emerald-200 mt-1 font-semibold">
                  SEK Annual Turnover
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ownership & Stability */}
        <section className="py-20 bg-white border-b border-gray-100" id="ownership">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  Financial Stability & Governance
                </span>
                <h2 className="text-3xl font-extrabold text-gray-950">
                  Backed by Long-Term Industrial Stewardship
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nefab is jointly owned (50/50) by the founding <strong>Nordgren/Pihl family</strong> and <strong>FAM AB</strong>, the asset management company of the three largest Wallenberg Foundations.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  This unique ownership structure combines the passionate entrepreneurial heritage of the founding family with the immense financial stability and long-term industrial commitment of the Wallenberg ecosystem. It allows Nefab to make multi-decade investments in sustainability, automation, and global test laboratories.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <h3 className="text-sm font-bold text-gray-900">
                      The Nordgren/Pihl Family (50%)
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Descendants of founder Sigurd Nordgren, committed to customer intimacy, innovation, and company values.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <h3 className="text-sm font-bold text-gray-900">
                      FAM AB / Wallenberg (50%)
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Swedish industrial holding powerhouse managing long-term assets of the Wallenberg Foundations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gray-950 text-white rounded-3xl p-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Our Core Values
                </span>
                <h3 className="text-2xl font-bold text-white">
                  The Principles That Guide Us
                </h3>
                <div className="space-y-3 pt-2">
                  <div className="p-3 bg-gray-900 border border-gray-800 rounded-xl">
                    <h4 className="text-xs font-bold text-emerald-400">Simplicity</h4>
                    <p className="text-xs text-gray-300 mt-0.5">We make complex global supply chains easy to understand and manage.</p>
                  </div>
                  <div className="p-3 bg-gray-900 border border-gray-800 rounded-xl">
                    <h4 className="text-xs font-bold text-emerald-400">Respect</h4>
                    <p className="text-xs text-gray-300 mt-0.5">We care deeply for people, ethical conduct, human rights, and the planet.</p>
                  </div>
                  <div className="p-3 bg-gray-900 border border-gray-800 rounded-xl">
                    <h4 className="text-xs font-bold text-emerald-400">Empowerment</h4>
                    <p className="text-xs text-gray-300 mt-0.5">We trust our 6,000+ local specialists to make agile decisions that benefit customers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-20 bg-gray-50 border-b border-gray-200" id="history">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                75+ Years of Innovation
              </span>
              <h2 className="text-3xl font-extrabold text-gray-950">
                The Journey of Nefab
              </h2>
              <p className="text-sm text-gray-600">
                From a small workshop in Alfta, Sweden, to an international engineering partner spanning 39 countries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((m) => (
                <div
                  key={m.year}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <span className="text-2xl font-black text-emerald-600">
                    {m.year}
                  </span>
                  <h3 className="text-base font-bold text-gray-950 mt-2 mb-1">
                    {m.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Locations Component */}
        <GlobalFootprint
          onOpenContact={() => {
            setContactTopic("Global Location Directory Inquiries");
            setContactOpen(true);
          }}
        />
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
