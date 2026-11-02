"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Languages,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

interface HeaderProps {
  onOpenSearch?: () => void;
  onOpenContact?: () => void;
}

export default function Header({ onOpenSearch, onOpenContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("Global / English");
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white transition-all duration-200">
      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 bg-white border-b border-gray-100 relative ${
          isScrolled ? "shadow-sm py-2.5" : "py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo - Matching Exact Nefab Wordmark with Subtext */}
          <Link href="/" className="flex items-center space-x-2 group py-1">
            <div className="flex flex-col select-none">
              <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#0c2340] leading-none">
                NEFAB
              </span>
              <span className="text-[8.5px] font-extrabold uppercase tracking-[0.24em] text-[#0c2340] mt-0.5">
                SAVING RESOURCES
              </span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1.5">
            {/* 1. SOLUTIONS */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/solutions"
                className={`px-4 py-1.5 text-sm font-bold transition-all rounded-full ${
                  activeDropdown === "solutions"
                    ? "bg-gray-100 text-[#0c2340]"
                    : "text-[#0c2340] hover:text-[#0066cc]"
                }`}
              >
                Solutions
              </Link>
            </div>

            {/* 2. INDUSTRIES */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/industries"
                className={`px-4 py-1.5 text-sm font-bold transition-all rounded-full ${
                  activeDropdown === "industries"
                    ? "bg-gray-100 text-[#0c2340]"
                    : "text-[#0c2340] hover:text-[#0066cc]"
                }`}
              >
                Industries
              </Link>
            </div>

            {/* 3. SUSTAINABILITY */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("sustainability")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/sustainability"
                className={`px-4 py-1.5 text-sm font-bold transition-all rounded-full ${
                  activeDropdown === "sustainability"
                    ? "bg-gray-100 text-[#0c2340]"
                    : "text-[#0c2340] hover:text-[#0066cc]"
                }`}
              >
                Sustainability
              </Link>
            </div>

            {/* 4. ENGINEERING */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("engineering")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/engineering"
                className={`px-4 py-1.5 text-sm font-bold transition-all rounded-full ${
                  activeDropdown === "engineering"
                    ? "bg-gray-100 text-[#0c2340]"
                    : "text-[#0c2340] hover:text-[#0066cc]"
                }`}
              >
                Engineering
              </Link>
            </div>

            {/* 5. NEWS & INSIGHTS */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("insights")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/insights"
                className={`px-4 py-1.5 text-sm font-bold transition-all rounded-full ${
                  activeDropdown === "insights"
                    ? "bg-gray-100 text-[#0c2340]"
                    : "text-[#0c2340] hover:text-[#0066cc]"
                }`}
              >
                News & Insights
              </Link>
            </div>

            {/* 6. ABOUT US */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/about"
                className={`px-4 py-1.5 text-sm font-bold transition-all rounded-full ${
                  activeDropdown === "about"
                    ? "bg-gray-100 text-[#0c2340]"
                    : "text-[#0c2340] hover:text-[#0066cc]"
                }`}
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Right Action Icons & Button */}
          <div className="flex items-center space-x-4">
            {/* Dark Navy Rounded "Contact" Button */}
            <button
              onClick={onOpenContact}
              className="bg-[#13294b] hover:bg-[#0c2340] text-white font-bold text-sm px-6 py-2 rounded-full shadow-sm hover:shadow transition-all"
            >
              Contact
            </button>

            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="p-1.5 text-[#0c2340] hover:text-[#0066cc] transition-colors"
              title="Search"
            >
              <Search className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Languages (A 文 Icon) */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="p-1.5 text-[#0c2340] hover:text-[#0066cc] transition-colors"
                title="Select language"
              >
                <Languages className="w-5 h-5 stroke-[2.2]" />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-1.5 z-50 text-xs">
                  {["Global / English", "Europe / Deutsch", "Europe / Français", "Americas / English", "Americas / Español", "Asia-Pacific / English", "Nordics / Svenska"].map(
                    (lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setSelectedLanguage(lang);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-1.5 hover:bg-gray-50 hover:text-[#0066cc] ${
                          selectedLanguage === lang ? "font-bold text-[#0066cc] bg-blue-50/50" : "text-gray-700"
                        }`}
                      >
                        {lang}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#0c2340] xl:hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* =========================================================================
            FULL-WIDTH MEGA MENU PANELS (MATCHING EXACT USER SCREENSHOTS)
            ========================================================================= */}

        {/* 1. SOLUTIONS MEGA MENU */}
        {activeDropdown === "solutions" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-[#edf2f7] border-t border-b border-gray-200 py-8 px-4 sm:px-8 z-50 shadow-2xl animate-in fade-in duration-150"
            onMouseEnter={() => setActiveDropdown("solutions")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-none p-8 border border-gray-200/80 shadow-sm">
                <div className="grid grid-cols-12 gap-8">
                  {/* Left Column: PACKAGING SOLUTIONS */}
                  <div className="col-span-9 space-y-6">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340]">
                      PACKAGING SOLUTIONS
                    </h3>

                    <div className="grid grid-cols-4 gap-6">
                      {/* By Type */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-medium text-gray-500">By Type</h4>
                        <ul className="space-y-2 text-sm">
                          <li><Link href="/solutions#inner" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline">Inner Packaging</Link></li>
                          <li><Link href="/solutions#outer" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline">Outer Packaging</Link></li>
                          <li><Link href="/solutions#trays" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline">Trays</Link></li>
                          <li><Link href="/solutions#pallets" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline">Pallets</Link></li>
                        </ul>
                      </div>

                      {/* By Material */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-medium text-gray-500">By Material</h4>
                        <ul className="space-y-2 text-sm">
                          <li><Link href="/solutions#fiber" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline">Fiber Packaging</Link></li>
                          <li><Link href="/solutions#plastic" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline">Plastic Packaging</Link></li>
                          <li><Link href="/solutions#plywood" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline">Plywood Packaging</Link></li>
                          <li><Link href="/solutions#wood" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline">Wood Packaging</Link></li>
                        </ul>
                      </div>

                      {/* By Requirement */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-medium text-gray-500">By Requirement</h4>
                        <ul className="space-y-2 text-sm">
                          <li><Link href="/solutions#returnable" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline">Returnable Packaging</Link></li>
                          <li><Link href="/solutions#expendable" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline">Expendable Packaging</Link></li>
                          <li><Link href="/solutions#dangerous-goods" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline">Dangerous Goods Packaging</Link></li>
                          <li><Link href="/solutions" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline">More</Link></li>
                        </ul>
                      </div>

                      {/* Packaging Optimization */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-medium text-gray-500">Packaging Optimization</h4>
                        <ul className="space-y-2 text-sm">
                          <li><Link href="/solutions#digital" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline">Digital Solutions for Packaging</Link></li>
                          <li><Link href="/sustainability#greencalc" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline">Life Cycle Analysis with GreenCalc</Link></li>
                          <li><Link href="/solutions#assessment" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline">Packaging Assessment</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: LOGISTICS SERVICES */}
                  <div className="col-span-3 border-l border-gray-200 pl-8 space-y-6">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340]">
                      LOGISTICS SERVICES
                    </h3>

                    <ul className="space-y-3 text-sm">
                      <li><Link href="/solutions#logistics" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">Contract Logistics</Link></li>
                      <li><Link href="/solutions#packing" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">Packing Services</Link></li>
                      <li><Link href="/solutions#pooling" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">Pooling Services</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. INDUSTRIES MEGA MENU */}
        {activeDropdown === "industries" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-[#edf2f7] border-t border-b border-gray-200 py-8 px-4 sm:px-8 z-50 shadow-2xl animate-in fade-in duration-150"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-4 gap-6">
                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340]">DATACOM & CLOUD</h3>
                  <p className="text-xs text-gray-600 leading-snug">Server racks, AI accelerators and sensitive data infrastructure with zero foam.</p>
                  <Link href="/industries#datacom" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-[#0066cc] hover:underline block pt-1">Explore Datacom →</Link>
                </div>

                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340]">LIB & E-MOBILITY</h3>
                  <p className="text-xs text-gray-600 leading-snug">UN-certified dangerous goods solutions for EV lithium batteries and modules.</p>
                  <Link href="/industries#battery" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-[#0066cc] hover:underline block pt-1">Explore Batteries →</Link>
                </div>

                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340]">TELECOM & ENERGY</h3>
                  <p className="text-xs text-gray-600 leading-snug">Weatherproof 5G network towers and heavy-duty power transformer crating.</p>
                  <Link href="/industries#telecom" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-[#0066cc] hover:underline block pt-1">Explore Telecom & Energy →</Link>
                </div>

                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340]">MEDTECH & SEMICON</h3>
                  <p className="text-xs text-gray-600 leading-snug">ISO 13485 cleanroom medical packaging and ANSI/ESD static shielding.</p>
                  <Link href="/industries#semicon" onClick={() => setActiveDropdown(null)} className="text-xs font-bold text-[#0066cc] hover:underline block pt-1">Explore High-Tech →</Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. SUSTAINABILITY MEGA MENU (MATCHING EXACT SCREENSHOT 1) */}
        {activeDropdown === "sustainability" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-[#edf2f7] border-t border-b border-gray-200 py-8 px-4 sm:px-8 z-50 shadow-2xl animate-in fade-in duration-150"
            onMouseEnter={() => setActiveDropdown("sustainability")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-3 gap-6">
                {/* Row 1, Card 1 */}
                <Link
                  href="/sustainability#purpose"
                  onClick={() => setActiveDropdown(null)}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-2">
                    OUR PURPOSE
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Driving Value through Sustainability
                  </p>
                </Link>

                {/* Row 1, Card 2 */}
                <Link
                  href="/sustainability#customer-chains"
                  onClick={() => setActiveDropdown(null)}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-2">
                    CUSTOMER SUPPLY CHAINS
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Minimize carbon emissions by improving transport efficiency
                  </p>
                </Link>

                {/* Row 1, Card 3 */}
                <Link
                  href="/sustainability#circular"
                  onClick={() => setActiveDropdown(null)}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-2">
                    CIRCULAR BUSINESS MODELS
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    With sustainable packaging and services
                  </p>
                </Link>

                {/* Row 2, Card 4 */}
                <Link
                  href="/sustainability#our-chain"
                  onClick={() => setActiveDropdown(null)}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-2">
                    OUR SUPPLY CHAIN
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Responsible sourcing and supplier evaluation
                  </p>
                </Link>

                {/* Row 2, Card 5 */}
                <Link
                  href="/sustainability#ethics"
                  onClick={() => setActiveDropdown(null)}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-2">
                    PEOPLE & ETHICS
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Driven by our core values of Simplicity, Respect and Empowerment
                  </p>
                </Link>

                {/* Row 2, Card 6 */}
                <Link
                  href="/sustainability#governance"
                  onClick={() => setActiveDropdown(null)}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-2">
                    REPORTS, GOVERNANCE & COMPLIANCE
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Sustainability is at the heart of Nefab corporate governance
                  </p>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 4. ENGINEERING MEGA MENU (MATCHING EXACT SCREENSHOT 2) */}
        {activeDropdown === "engineering" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-[#edf2f7] border-t border-b border-gray-200 py-8 px-4 sm:px-8 z-50 shadow-2xl animate-in fade-in duration-150"
            onMouseEnter={() => setActiveDropdown("engineering")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-3 gap-6">
                {/* Row 1, Card 1 */}
                <Link
                  href="/engineering#our-approach"
                  onClick={() => setActiveDropdown(null)}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-2">
                    OUR APPROACH
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Engineered Solutions Tailored to Your Supply Chain
                  </p>
                </Link>

                {/* Row 1, Card 2 */}
                <Link
                  href="/engineering#multi-material"
                  onClick={() => setActiveDropdown(null)}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-2">
                    MULTI MATERIAL
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Save Resources with the Optimal Packaging Material
                  </p>
                </Link>

                {/* Row 1, Card 3 */}
                <Link
                  href="/engineering#design"
                  onClick={() => setActiveDropdown(null)}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-2">
                    PACKAGING DESIGN
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Designing Optimized Packaging
                  </p>
                </Link>

                {/* Row 2, Card 4 */}
                <Link
                  href="/engineering#testing"
                  onClick={() => setActiveDropdown(null)}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-2">
                    PACKAGING TESTING
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Safeguard Your Product through Packaging Testing
                  </p>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 5. NEWS & INSIGHTS MEGA MENU (MATCHING EXACT SCREENSHOT 3) */}
        {activeDropdown === "insights" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-[#edf2f7] border-t border-b border-gray-200 py-8 px-4 sm:px-8 z-50 shadow-2xl animate-in fade-in duration-150"
            onMouseEnter={() => setActiveDropdown("insights")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-7xl mx-auto">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-4">
                NEWS & INSIGHTS
              </span>
              <div className="grid grid-cols-3 gap-6">
                <Link
                  href="/insights#news"
                  onClick={() => setActiveDropdown(null)}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-2">
                    NEWS & PRESS RELEASES
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Global facility expansions, acquisitions, corporate milestones, and partnership announcements.
                  </p>
                </Link>

                <Link
                  href="/insights#cases"
                  onClick={() => setActiveDropdown(null)}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-2">
                    CUSTOMER CASES
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Documented success stories showcasing proven CO₂ reductions and freight cost savings for clients.
                  </p>
                </Link>

                <Link
                  href="/insights#articles-grid"
                  onClick={() => setActiveDropdown(null)}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-2">
                    ARTICLES & WHITEPAPERS
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Deep dives into EU PPWR regulatory compliance, FiberFlute™ drop shock tests, and circular logistics.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 6. ABOUT US MEGA MENU (MATCHING EXACT SCREENSHOT 4) */}
        {activeDropdown === "about" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-[#edf2f7] border-t border-b border-gray-200 py-8 px-4 sm:px-8 z-50 shadow-2xl animate-in fade-in duration-150"
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-5 gap-6">
                {/* Col 1: ABOUT NEFAB */}
                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340]">
                    ABOUT NEFAB
                  </h3>
                  <ul className="space-y-2.5 text-sm">
                    <li><Link href="/about#strategy" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">Strategy</Link></li>
                    <li><Link href="/about#policies" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">Policies</Link></li>
                    <li><Link href="/about#brands" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">Acquired Brands</Link></li>
                  </ul>
                </div>

                {/* Col 2: LOCATIONS */}
                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340]">
                    LOCATIONS
                  </h3>
                  <ul className="space-y-2.5 text-sm">
                    <li><Link href="/about#locations" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">Americas</Link></li>
                    <li><Link href="/about#locations" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">Asia-Pacific</Link></li>
                    <li><Link href="/about#locations" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">Europe</Link></li>
                  </ul>
                </div>

                {/* Col 3: ORGANIZATION */}
                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340]">
                    ORGANIZATION
                  </h3>
                  <ul className="space-y-2.5 text-sm">
                    <li><Link href="/about#leadership" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">Corporate Leadership Team</Link></li>
                    <li><Link href="/about#board" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">Board of Directors</Link></li>
                    <li><Link href="/about#ownership" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">Nefab&apos;s Owners</Link></li>
                  </ul>
                </div>

                {/* Col 4: CAREERS */}
                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340]">
                    CAREERS
                  </h3>
                  <ul className="space-y-2.5 text-sm">
                    <li><Link href="/about#careers" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">Working at Nefab</Link></li>
                    <li><Link href="/about#people" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">Meet Our People</Link></li>
                    <li><Link href="/about#trainee" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">Global Trainee program</Link></li>
                    <li><Link href="/about#jobs" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">Job opportunities</Link></li>
                  </ul>
                </div>

                {/* Col 5: COMPLIANCE */}
                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340]">
                    COMPLIANCE
                  </h3>
                  <ul className="space-y-2.5 text-sm">
                    <li><Link href="/sustainability#ppwr" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">PPWR</Link></li>
                    <li><Link href="/sustainability#eudr" onClick={() => setActiveDropdown(null)} className="text-[#0066cc] hover:underline block">EUDR</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="space-y-4">
              <div>
                <p className="font-black text-xs uppercase tracking-wider text-gray-400 mb-2">
                  PACKAGING SOLUTIONS
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <Link href="/solutions#inner" onClick={() => setMobileMenuOpen(false)} className="text-[#0066cc]">Inner Packaging</Link>
                  <Link href="/solutions#outer" onClick={() => setMobileMenuOpen(false)} className="text-[#0066cc]">Outer Packaging</Link>
                  <Link href="/solutions#trays" onClick={() => setMobileMenuOpen(false)} className="text-[#0066cc]">Trays</Link>
                  <Link href="/solutions#pallets" onClick={() => setMobileMenuOpen(false)} className="text-[#0066cc]">Pallets</Link>
                  <Link href="/solutions#fiber" onClick={() => setMobileMenuOpen(false)} className="text-[#0066cc]">Fiber Packaging</Link>
                  <Link href="/solutions#plastic" onClick={() => setMobileMenuOpen(false)} className="text-[#0066cc]">Plastic Packaging</Link>
                  <Link href="/solutions#plywood" onClick={() => setMobileMenuOpen(false)} className="text-[#0066cc]">Plywood Packaging</Link>
                  <Link href="/solutions#wood" onClick={() => setMobileMenuOpen(false)} className="text-[#0066cc]">Wood Packaging</Link>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-3">
                <p className="font-black text-xs uppercase tracking-wider text-gray-400 mb-2">
                  LOGISTICS SERVICES
                </p>
                <div className="space-y-1.5 text-sm">
                  <Link href="/solutions#logistics" onClick={() => setMobileMenuOpen(false)} className="text-[#0066cc] block">Contract Logistics</Link>
                  <Link href="/solutions#packing" onClick={() => setMobileMenuOpen(false)} className="text-[#0066cc] block">Packing Services</Link>
                  <Link href="/solutions#pooling" onClick={() => setMobileMenuOpen(false)} className="text-[#0066cc] block">Pooling Services</Link>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-3 flex flex-col space-y-2 text-sm font-bold text-[#0c2340]">
                <Link href="/industries" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
                <Link href="/sustainability" onClick={() => setMobileMenuOpen(false)}>Sustainability</Link>
                <Link href="/engineering" onClick={() => setMobileMenuOpen(false)}>Engineering</Link>
                <Link href="/insights" onClick={() => setMobileMenuOpen(false)}>News & Insights</Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact && onOpenContact();
                }}
                className="w-full bg-[#13294b] text-white font-bold py-3 rounded-full text-center text-sm shadow-md"
              >
                Contact Nefab
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
