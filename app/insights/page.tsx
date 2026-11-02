"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import CaseStudies from "../../components/CaseStudies";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Download,
  FileText,
  Tag,
  Search,
} from "lucide-react";

export default function InsightsPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Whitepapers");
  const [activeCategory, setActiveCategory] = useState("all");

  const articles = [
    {
      id: 1,
      category: "sustainability",
      tag: "EU PPWR 2026",
      title: "The Comprehensive Guide to PPWR Compliance for Global Transport Packaging",
      excerpt: "An in-depth breakdown of the European Packaging and Packaging Waste Regulation: void space caps, recyclability grades, and mandatory reuse quotas.",
      readTime: "8 min read",
      date: "October 2026",
    },
    {
      id: 2,
      category: "engineering",
      tag: "Material Science",
      title: "FiberFlute™ vs. Expanded Polystyrene: Life Cycle Assessment Comparison",
      excerpt: "How 100% curbside recyclable paper cushioning matches the dynamic cushioning curve of petrochemical EPS foam with 42% lower carbon footprint.",
      readTime: "6 min read",
      date: "September 2026",
    },
    {
      id: 3,
      category: "digital",
      tag: "Supply Chain IoT",
      title: "How Real-Time Telemetry Eliminates Multi-Million Dollar Semiconductor Losses",
      excerpt: "Deploying multi-sensor IoT tags measuring 3-axis G-force impact and tilt to pinpoint carrier mishandling and protect sensitive microchip tooling.",
      readTime: "5 min read",
      date: "August 2026",
    },
    {
      id: 4,
      category: "logistics",
      tag: "Battery Transport",
      title: "Navigating UN Dangerous Goods Class 9 Rules for Lithium-Ion Battery Returnable Loops",
      excerpt: "Designing returnable steel and thermoformed packaging loops that meet UN 3480 / 3481 fire containment standards across European gigafactories.",
      readTime: "7 min read",
      date: "July 2026",
    },
    {
      id: 5,
      category: "sustainability",
      tag: "LCA Methodology",
      title: "Demystifying Scope 3 Carbon Accounting in Heavy Industrial Logistics",
      excerpt: "How third-party verified Life Cycle Analysis (LCA) tools like GreenCalc™ turn complex transport packaging data into auditable ESG reports.",
      readTime: "6 min read",
      date: "June 2026",
    },
    {
      id: 6,
      category: "engineering",
      tag: "ISTA Testing",
      title: "Understanding ISTA 3E vs. ASTM D4169: Which Protocol Fits Your Cargo?",
      excerpt: "A technical guide for supply chain directors on choosing the right laboratory vibration, drop, and compression test protocols for unitized loads.",
      readTime: "9 min read",
      date: "May 2026",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("Insights Consultation");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* Insights Hero */}
        <div className="bg-gradient-to-b from-[#090d16] via-[#0f172a] to-[#0b1120] text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/40 rounded-full px-4 py-1 text-xs text-emerald-300">
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold uppercase tracking-wider">
                  Knowledge Hub & Whitepapers
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Nefab Insights & Thought Leadership
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Stay at the forefront of sustainable packaging engineering, EU environmental mandates, IoT logistics telemetry, and life cycle carbon accounting.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="border-b border-gray-200 bg-gray-50 py-4 sticky top-[72px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Topics" },
                { id: "sustainability", label: "Sustainability & PPWR" },
                { id: "engineering", label: "Packaging Engineering" },
                { id: "digital", label: "IoT & Digital" },
                { id: "logistics", label: "Circular Logistics" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat.id
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-semibold text-gray-600 hover:text-emerald-700 hover:border-emerald-300"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search knowledge base...</span>
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((art) => (
                <article
                  key={art.id}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800">
                        {art.tag}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span>{art.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-lg font-bold text-gray-950 group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {art.title}
                    </h2>

                    <p className="text-xs text-gray-500 mt-2 line-clamp-3 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-gray-400">{art.date}</span>
                    <button
                      onClick={() => {
                        setContactTopic(`Inquiry on ${art.title}`);
                        setContactOpen(true);
                      }}
                      className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1"
                    >
                      <span>Read paper</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Case Studies Component */}
        <CaseStudies
          onOpenContact={() => {
            setContactTopic("Case Study Consultation");
            setContactOpen(true);
          }}
        />

        {/* Download Handbook Banner */}
        <section className="py-16 bg-gray-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Official Nefab Publication
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                The 2026 Global Packaging & Sustainability Playbook
              </h2>
              <p className="text-xs sm:text-sm text-gray-400">
                Download the complete technical guide covering EU PPWR compliance, FiberFlute™ drop shock tables, and multi-material cost optimization frameworks.
              </p>
            </div>

            <button
              onClick={() => {
                setContactTopic("Playbook Download Request");
                setContactOpen(true);
              }}
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center space-x-2 transition-all whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span>Request Free PDF Copy</span>
            </button>
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
