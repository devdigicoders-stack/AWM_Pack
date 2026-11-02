"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Languages,
  ChevronDown,
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
        className={`w-full transition-all duration-200 bg-white border-b border-gray-100 ${
          isScrolled ? "shadow-sm py-2" : "py-3"
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
            {/* 1. SOLUTIONS (WITH EXACT MEGA MENU FROM USER SCREENSHOT) */}
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

              {/* Exact Mega Menu Dropdown */}
              {activeDropdown === "solutions" && (
                <div className="absolute top-full -left-20 pt-2 w-[920px] z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 text-left animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="grid grid-cols-12 gap-8">
                      {/* Left Big Column: PACKAGING SOLUTIONS */}
                      <div className="col-span-9 space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340]">
                          PACKAGING SOLUTIONS
                        </h3>

                        <div className="grid grid-cols-4 gap-6">
                          {/* Col 1: By Type */}
                          <div className="space-y-3">
                            <h4 className="text-xs font-semibold text-gray-500">
                              By Type
                            </h4>
                            <ul className="space-y-2.5 text-sm font-medium">
                              <li>
                                <Link
                                  href="/solutions#inner"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[#0066cc] hover:underline"
                                >
                                  Inner Packaging
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/solutions#outer"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[#0066cc] hover:underline"
                                >
                                  Outer Packaging
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/solutions#trays"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[#0066cc] hover:underline"
                                >
                                  Trays
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/solutions#pallets"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[#0066cc] hover:underline"
                                >
                                  Pallets
                                </Link>
                              </li>
                            </ul>
                          </div>

                          {/* Col 2: By Material */}
                          <div className="space-y-3">
                            <h4 className="text-xs font-semibold text-gray-500">
                              By Material
                            </h4>
                            <ul className="space-y-2.5 text-sm font-medium">
                              <li>
                                <Link
                                  href="/solutions#fiber"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[#0066cc] hover:underline"
                                >
                                  Fiber Packaging
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/solutions#plastic"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[#0066cc] hover:underline"
                                >
                                  Plastic Packaging
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/solutions#plywood"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[#0066cc] hover:underline"
                                >
                                  Plywood Packaging
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/solutions#wood"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[#0066cc] hover:underline"
                                >
                                  Wood Packaging
                                </Link>
                              </li>
                            </ul>
                          </div>

                          {/* Col 3: By Requirement */}
                          <div className="space-y-3">
                            <h4 className="text-xs font-semibold text-gray-500">
                              By Requirement
                            </h4>
                            <ul className="space-y-2.5 text-sm font-medium">
                              <li>
                                <Link
                                  href="/solutions#returnable"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[#0066cc] hover:underline"
                                >
                                  Returnable Packaging
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/solutions#expendable"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[#0066cc] hover:underline"
                                >
                                  Expendable Packaging
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/solutions#dangerous-goods"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[#0066cc] hover:underline"
                                >
                                  Dangerous Goods Packaging
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/solutions"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[#0066cc] hover:underline"
                                >
                                  More
                                </Link>
                              </li>
                            </ul>
                          </div>

                          {/* Col 4: Packaging Optimization */}
                          <div className="space-y-3">
                            <h4 className="text-xs font-semibold text-gray-500">
                              Packaging Optimization
                            </h4>
                            <ul className="space-y-2.5 text-sm font-medium">
                              <li>
                                <Link
                                  href="/solutions#digital"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[#0066cc] hover:underline"
                                >
                                  Digital Solutions for Packaging
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/sustainability#greencalc"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[#0066cc] hover:underline"
                                >
                                  Life Cycle Analysis with GreenCalc
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/solutions#assessment"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[#0066cc] hover:underline"
                                >
                                  Packaging Assessment
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Right Column: LOGISTICS SERVICES (With Vertical Divider) */}
                      <div className="col-span-3 border-l border-gray-200 pl-8 space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340]">
                          LOGISTICS SERVICES
                        </h3>

                        <ul className="space-y-3 text-sm font-medium">
                          <li>
                            <Link
                              href="/solutions#logistics"
                              onClick={() => setActiveDropdown(null)}
                              className="text-[#0066cc] hover:underline block"
                            >
                              Contract Logistics
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions#packing"
                              onClick={() => setActiveDropdown(null)}
                              className="text-[#0066cc] hover:underline block"
                            >
                              Packing Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions#pooling"
                              onClick={() => setActiveDropdown(null)}
                              className="text-[#0066cc] hover:underline block"
                            >
                              Pooling Services
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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

              {activeDropdown === "industries" && (
                <div className="absolute top-full -left-20 pt-2 w-[600px] z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 text-left">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-5">
                      SECTOR-SPECIFIC PACKAGING SOLUTIONS
                    </h3>
                    <div className="grid grid-cols-2 gap-6 text-sm font-medium">
                      <ul className="space-y-2.5">
                        <li>
                          <Link
                            href="/industries#telecom"
                            onClick={() => setActiveDropdown(null)}
                            className="text-[#0066cc] hover:underline"
                          >
                            Telecom
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/industries#datacom"
                            onClick={() => setActiveDropdown(null)}
                            className="text-[#0066cc] hover:underline"
                          >
                            Datacom & Cloud
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/industries#energy"
                            onClick={() => setActiveDropdown(null)}
                            className="text-[#0066cc] hover:underline"
                          >
                            Energy
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/industries#battery"
                            onClick={() => setActiveDropdown(null)}
                            className="text-[#0066cc] hover:underline"
                          >
                            LiB & E-Mobility
                          </Link>
                        </li>
                      </ul>

                      <ul className="space-y-2.5">
                        <li>
                          <Link
                            href="/industries#medtech"
                            onClick={() => setActiveDropdown(null)}
                            className="text-[#0066cc] hover:underline"
                          >
                            Healthcare & MedTech
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/industries#mining"
                            onClick={() => setActiveDropdown(null)}
                            className="text-[#0066cc] hover:underline"
                          >
                            Mining & Construction
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/industries#semicon"
                            onClick={() => setActiveDropdown(null)}
                            className="text-[#0066cc] hover:underline"
                          >
                            Semicon
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/industries#aerospace"
                            onClick={() => setActiveDropdown(null)}
                            className="text-[#0066cc] hover:underline"
                          >
                            Aerospace & Defense
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
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

              {activeDropdown === "sustainability" && (
                <div className="absolute top-full -left-20 pt-2 w-[520px] z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 text-left">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-5">
                      SUSTAINABILITY STRATEGY & TOOLS
                    </h3>
                    <ul className="space-y-3 text-sm font-medium">
                      <li>
                        <Link
                          href="/sustainability#purpose"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[#0066cc] hover:underline block"
                        >
                          Our Purpose & Climate Targets
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sustainability#greencalc"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[#0066cc] hover:underline block"
                        >
                          GreenCalc™ Life Cycle Analysis Software
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sustainability#ppwr"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[#0066cc] hover:underline block"
                        >
                          Are you prepared for the PPWR?
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sustainability#circular"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[#0066cc] hover:underline block"
                        >
                          Circular Packaging Systems
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
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

              {activeDropdown === "engineering" && (
                <div className="absolute top-full -left-20 pt-2 w-[480px] z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 text-left">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-5">
                      PACKAGING ENGINEERING & TESTING
                    </h3>
                    <ul className="space-y-3 text-sm font-medium">
                      <li>
                        <Link
                          href="/engineering#total-cost"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[#0066cc] hover:underline block"
                        >
                          The Total Cost Approach
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/engineering#labs"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[#0066cc] hover:underline block"
                        >
                          ISTA Certified Testing Laboratories
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/engineering#engineers"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[#0066cc] hover:underline block"
                        >
                          Design & Prototyping Capabilities
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* 5. NEWS & INSIGHTS (Exact label from screenshot) */}
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

              {activeDropdown === "insights" && (
                <div className="absolute top-full -left-20 pt-2 w-[480px] z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 text-left">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-5">
                      NEWS, CASES & WHITEPAPERS
                    </h3>
                    <ul className="space-y-3 text-sm font-medium">
                      <li>
                        <Link
                          href="/insights"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[#0066cc] hover:underline block"
                        >
                          Articles & Press Releases
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/insights#cases"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[#0066cc] hover:underline block"
                        >
                          Customer Case Studies
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/insights#whitepapers"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[#0066cc] hover:underline block"
                        >
                          Technical Guides & Playbooks
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
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

              {activeDropdown === "about" && (
                <div className="absolute top-full -left-20 pt-2 w-[480px] z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 text-left">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#0c2340] mb-5">
                      ABOUT NEFAB GROUP
                    </h3>
                    <ul className="space-y-3 text-sm font-medium">
                      <li>
                        <Link
                          href="/about"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[#0066cc] hover:underline block"
                        >
                          Company Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about#history"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[#0066cc] hover:underline block"
                        >
                          History Since 1949
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about#ownership"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[#0066cc] hover:underline block"
                        >
                          Ownership: FAM AB & Nordgren/Pihl
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about#locations"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[#0066cc] hover:underline block"
                        >
                          Global Presence (39 Countries)
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Action Icons & Button (Matching Exact User Screenshot) */}
          <div className="flex items-center space-x-4">
            {/* Dark Navy Rounded "Contact" Button */}
            <button
              onClick={onOpenContact}
              className="bg-[#13294b] hover:bg-[#0c2340] text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
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
