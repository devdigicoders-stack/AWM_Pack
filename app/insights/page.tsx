"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  Calendar,
  Sparkles,
  TrendingUp,
  Share2,
} from "lucide-react";

export default function InsightsPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("AWMPACK Insights");
  const [activeCategory, setActiveCategory] = useState("all");

  const articles = [
    {
      id: 1,
      category: "articles",
      tag: "Export Compliance",
      title: "ISPM 15 Heat Treatment Compliance Guide for GCC & Global Maritime Exports",
      excerpt: "Understanding the FAO IPPC ISPM 15 standard: core heating requirements of 56°C for 30 minutes, official HT stamping protocols, and how to eliminate customs quarantine risks at destination ports worldwide.",
      readTime: "7 min read",
      date: "October 2026",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "cases",
      tag: "Customer Case",
      title: "Standardizing 50,000 Heavy Chemical Drum Pallets for Ras Laffan Petrochemical Complex",
      excerpt: "How AWMPACK engineered custom CP-7 chemical block pallets with zero transit failures and full ISPM 15 compliance under severe Arabian Gulf weather conditions.",
      readTime: "5 min read",
      date: "September 2026",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "news",
      tag: "Press Release",
      title: "AWMPACK Expands Birkat Al-Awamer Plant with Automated Pallet Assembly Line",
      excerpt: "Al Waad Manufacturing Packaging Company scales production to 2,000 pallets per day with state-of-the-art hydraulic block compression and automated pneumatic nailing.",
      readTime: "4 min read",
      date: "August 2026",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      category: "articles",
      tag: "Circular Economy",
      title: "Waste to Usable Product: Converting Wood Residue into High-Density Pallet Blocks",
      excerpt: "A deep dive into AWMPACK's circular manufacturing: transforming tons of discarded timber and sawdust into moisture-resistant, heavy-load compressed wooden blocks.",
      readTime: "6 min read",
      date: "July 2026",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      category: "cases",
      tag: "Customer Case",
      title: "Hamad Port 3PL Cuts Packaging Procurement Costs by 24% with Pallet Pooling",
      excerpt: "Transitioning single-use wooden pallets into a closed-loop pooling model across Doha Free Zones, reducing warehouse congestion and lumber consumption.",
      readTime: "5 min read",
      date: "June 2026",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      category: "news",
      tag: "Corporate",
      title: "AWMPACK Re-Certified with In-Country Value (ICV) and Triple ISO Accreditations in Qatar",
      excerpt: "Demonstrating excellence in quality, environmental responsibility, and occupational safety with ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications.",
      readTime: "3 min read",
      date: "May 2026",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#002b49] selection:bg-blue-100 selection:text-[#002b49]">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("AWMPACK Insights & Case Studies");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* =========================================================================
            INSIGHTS HERO
            ========================================================================= */}
        <section className="relative bg-[#00223a] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
              alt="Industrial packaging production facility"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <span className="inline-block bg-[#002b49] border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                AWMPACK Knowledge Hub & Press
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                News & Industrial Insights
              </h1>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
                Stay updated with the latest in wooden pallet engineering, ISPM 15 heat treatment standards, circular wood recycling, and customer case studies across Qatar&apos;s leading industrial sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Navigation Bar */}
        <div className="border-b border-gray-200 bg-[#edf2f7] py-3.5 sticky top-[73px] z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              {[
                { id: "all", label: "All Insights" },
                { id: "news", label: "News & Press Releases" },
                { id: "cases", label: "Customer Cases" },
                { id: "articles", label: "Technical Guides" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#002b49] text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-full text-xs font-bold text-gray-700 hover:text-[#0099e5] hover:border-[#0099e5]"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search articles...</span>
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <section className="py-20 bg-white" id="articles-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item) => (
                <article
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#002b49]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {item.tag}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.readTime}</span>
                      </div>
                      <h2 className="text-lg font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors leading-snug">
                        {item.title}
                      </h2>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setContactTopic(`Inquiry about ${item.title}`);
                        setContactOpen(true);
                      }}
                      className="inline-flex items-center text-xs font-bold text-[#0099e5] group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </button>
                    <button
                      onClick={() => {
                        setContactTopic(`Download spec: ${item.title}`);
                        setContactOpen(true);
                      }}
                      title="Download PDF"
                      className="p-1 text-gray-400 hover:text-[#002b49]"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Cases Interactive Showcase */}
        <div id="cases" className="border-t border-gray-200">
          <CaseStudies
            onOpenContact={() => {
              setContactTopic("Customer Case Studies");
              setContactOpen(true);
            }}
          />
        </div>
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
