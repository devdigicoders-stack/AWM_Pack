"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, Package, Building2, Leaf, FlaskConical, FileText } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SEARCH_DATABASE = [
  {
    title: "FiberFlute™ Sustainable Cushioning",
    category: "Solutions",
    href: "/solutions#fiberflute",
    desc: "100% recyclable, paper-based cushion alternative to foam and polystyrene.",
    icon: Leaf,
  },
  {
    title: "ExPak Plywood Transport Crates",
    category: "Solutions",
    href: "/solutions#expak",
    desc: "Lightweight, foldable, high-strength industrial plywood packaging solutions.",
    icon: Package,
  },
  {
    title: "GreenCalc™ Life Cycle Analysis",
    category: "Sustainability",
    href: "/sustainability#greencalc",
    desc: "Certified digital LCA tool calculating CO2eq and financial savings across supply chains.",
    icon: Leaf,
  },
  {
    title: "Datacom & Cloud Server Packaging",
    category: "Industries",
    href: "/industries#datacom",
    desc: "Shock-tested server rack and sensitive cloud infrastructure packaging.",
    icon: Building2,
  },
  {
    title: "LiB Lithium-Ion Battery Packaging",
    category: "Industries",
    href: "/industries#battery",
    desc: "UN-certified dangerous goods solutions for EV and energy storage batteries.",
    icon: Building2,
  },
  {
    title: "The Total Cost Approach Methodology",
    category: "Engineering",
    href: "/engineering#total-cost",
    desc: "Holistic 4-pillar methodology balancing transport, handling, protection, and environment.",
    icon: FlaskConical,
  },
  {
    title: "Contract Packing & Logistics Services",
    category: "Services",
    href: "/solutions#logistics",
    desc: "On-site packing teams, warehousing, and returnable loop management.",
    icon: Package,
  },
  {
    title: "ISTA Certified Testing Laboratories",
    category: "Engineering",
    href: "/engineering#labs",
    desc: "Drop, vibration, thermal, and atmospheric testing simulating actual transport routes.",
    icon: FlaskConical,
  },
  {
    title: "EU PPWR Compliance Readiness Guide",
    category: "Insights",
    href: "/insights",
    desc: "How global manufacturers can prepare for European Packaging Waste Regulations.",
    icon: FileText,
  },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const filtered = query.trim()
    ? SEARCH_DATABASE.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.desc.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : SEARCH_DATABASE.slice(0, 5);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-gray-950/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -16 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Search Input Bar */}
            <div className="relative border-b border-gray-100 p-4 flex items-center">
              <Search className="w-5 h-5 text-emerald-600 ml-2" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search solutions, products, industries, GreenCalc..."
                className="w-full px-4 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-none"
              />
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Results List */}
            <div className="max-h-96 overflow-y-auto p-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-400 px-3 pb-1">
                <span>{query ? `Results for "${query}"` : "Suggested topics"}</span>
                <span>{filtered.length} found</span>
              </div>

              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-start justify-between p-3 rounded-xl hover:bg-emerald-50/70 transition-all border border-transparent hover:border-emerald-100"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-gray-100 group-hover:bg-emerald-100 rounded-lg text-gray-600 group-hover:text-emerald-700 transition-colors mt-0.5">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700">
                            {item.title}
                          </h4>
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 group-hover:bg-emerald-200/60 group-hover:text-emerald-800">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all mt-2" />
                  </Link>
                ))
              ) : (
                <div className="py-12 text-center text-gray-500 text-sm">
                  No results found for &ldquo;{query}&rdquo;. Try &ldquo;GreenCalc&rdquo;, &ldquo;FiberFlute&rdquo;, or &ldquo;Datacom&rdquo;.
                </div>
              )}
            </div>

            {/* Footer info */}
            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-100 text-xs text-gray-400 flex items-center justify-between">
              <span>Press ESC to exit</span>
              <span className="text-emerald-700 font-medium">Nefab Global Search</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

