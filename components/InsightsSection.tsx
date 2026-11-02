"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  ArrowRight,
  Clock,
  Calendar,
  Tag,
  Download,
  FileText,
} from "lucide-react";

interface InsightsSectionProps {
  onOpenContact?: () => void;
}

export default function InsightsSection({ onOpenContact }: InsightsSectionProps) {
  const [filter, setFilter] = useState("all");

  const articles = [
    {
      id: 1,
      category: "Sustainability",
      title: "EU PPWR 2026: The Essential Guide for Global Transport Packaging",
      excerpt: "Understanding the European Packaging and Packaging Waste Regulation: void space caps, recyclability performance grades, and mandatory reuse targets.",
      readTime: "7 min read",
      date: "October 2026",
      tag: "Regulatory Compliance",
    },
    {
      id: 2,
      category: "Engineering",
      title: "FiberFlute™ vs. Plastic Foam: A Cradle-to-Grave LCA Study",
      excerpt: "Independent laboratory testing reveals how 100% paper-based cushioning achieves identical shock absorption to EPS foam with 42% lower carbon footprint.",
      readTime: "5 min read",
      date: "September 2026",
      tag: "Material Science",
    },
    {
      id: 3,
      category: "Digital",
      title: "How Smart IoT Packaging Sensors Eliminate Supply Chain Blind Spots",
      excerpt: "Real-time telemetry measuring G-force shock, temperature, and tilt provides actionable data that prevents multi-million dollar semiconductor and server losses.",
      readTime: "6 min read",
      date: "August 2026",
      tag: "Connected Supply Chains",
    },
    {
      id: 4,
      category: "Logistics",
      title: "Designing Returnable Packaging Loops for Lithium-Ion Battery Flows",
      excerpt: "Navigating UN Dangerous Goods Class 9 transport rules while maintaining an efficient, circular pooling system across European assembly plants.",
      readTime: "8 min read",
      date: "July 2026",
      tag: "Circular Logistics",
    },
  ];

  const filtered =
    filter === "all"
      ? articles
      : articles.filter((a) => a.category.toLowerCase() === filter);

  return (
    <section className="py-24 bg-white border-b border-gray-100" id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-emerald-700 text-xs font-bold tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Nefab Supply Chain Knowledge</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Latest Insights & Whitepapers
            </h2>
            <p className="text-base text-gray-600">
              Expert analysis, technical whitepapers, and regulatory updates written by Nefab&apos;s global team of packaging engineers and sustainability experts.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["all", "sustainability", "engineering", "digital", "logistics"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  filter === cat
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((art) => (
            <article
              key={art.id}
              className="bg-white border border-gray-200/90 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <span className="font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                    {art.tag}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-gray-950 group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {art.title}
                </h3>

                <p className="text-xs text-gray-500 mt-2 line-clamp-3 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-400">{art.date}</span>
                <Link
                  href="/insights"
                  className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1"
                >
                  <span>Read article</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Free Technical Whitepaper Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-gray-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-800">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 hidden sm:block">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Download the 2026 Sustainable Supply Chain Handbook
              </h4>
              <p className="text-xs text-gray-300 mt-0.5">
                48 pages of benchmark LCA data, PPWR compliance frameworks, and returnable packaging ROI equations.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl whitespace-nowrap shadow-md flex items-center space-x-2 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download Free PDF</span>
          </button>
        </div>
      </div>
    </section>
  );
}
