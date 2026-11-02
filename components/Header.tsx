"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Globe,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Package,
  Truck,
  Cpu,
  Leaf,
  FlaskConical,
  BookOpen,
  Building2,
  ShieldCheck,
  PhoneCall,
} from "lucide-react";

interface HeaderProps {
  onOpenSearch?: () => void;
  onOpenContact?: () => void;
}

export default function Header({ onOpenSearch, onOpenContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState("Global / English");
  const [regionMenuOpen, setRegionMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Solutions",
      href: "/solutions",
      dropdown: [
        {
          title: "Packaging Solutions",
          desc: "Complete multi-material packaging engineered for transport protection.",
          href: "/solutions#packaging",
        },
        {
          title: "Logistics Services",
          desc: "On-site packing, returnable pooling loops, and 3PL coordination.",
          href: "/solutions#logistics",
        },
        {
          title: "Digital Solutions",
          desc: "IoT sensors and real-time tracking across international supply chains.",
          href: "/solutions#digital",
        },
        {
          title: "FiberFlute™ & ExPak",
          desc: "Eco-friendly recyclable cushioning and foldable plywood crates.",
          href: "/solutions#fiberflute",
        },
      ],
    },
    {
      name: "Industries",
      href: "/industries",
      dropdown: [
        {
          title: "LiB & E-Mobility",
          desc: "UN-certified hazardous containment for electric vehicle batteries.",
          href: "/industries#battery",
        },
        {
          title: "Datacom & Cloud",
          desc: "Zero-damage server rack shock isolation and foam-free cushions.",
          href: "/industries#datacom",
        },
        {
          title: "Telecom",
          desc: "Weatherproof 5G base station and antenna field packaging.",
          href: "/industries#telecom",
        },
        {
          title: "Energy & Grid",
          desc: "Heavy project cargo crating for massive power transformers.",
          href: "/industries#energy",
        },
        {
          title: "Healthcare & MedTech",
          desc: "ISO 13485 cleanroom precision medical device protection.",
          href: "/industries#medtech",
        },
        {
          title: "Semiconductors",
          desc: "Electrostatic discharge (ESD) safe packaging for silicon wafers.",
          href: "/industries#semicon",
        },
      ],
    },
    {
      name: "Sustainability",
      href: "/sustainability",
      dropdown: [
        {
          title: "Our Sustainability Strategy",
          desc: "Committed to circularity, climate targets, and Net-Zero 2030.",
          href: "/sustainability#purpose",
        },
        {
          title: "GreenCalc™ LCA Tool",
          desc: "Certified Life Cycle Analysis software calculating CO₂ and cost savings.",
          href: "/sustainability#greencalc",
        },
        {
          title: "Are You Prepared for PPWR?",
          desc: "European Packaging and Packaging Waste Regulation compliance.",
          href: "/sustainability#ppwr",
        },
      ],
    },
    {
      name: "Engineering",
      href: "/engineering",
      dropdown: [
        {
          title: "The Total Cost Approach",
          desc: "Balancing transport, protection, handling, and environment.",
          href: "/engineering#total-cost",
        },
        {
          title: "ISTA Certified Test Labs",
          desc: "Vibration, drop, compression, and thermal shock chambers.",
          href: "/engineering#labs",
        },
      ],
    },
    {
      name: "Insights",
      href: "/insights",
      dropdown: [
        {
          title: "Articles & Knowledge Hub",
          desc: "Expert analysis on PPWR, material science, and supply chains.",
          href: "/insights",
        },
        {
          title: "Customer Success Cases",
          desc: "Quantified savings achieved with leading global enterprises.",
          href: "/insights#cases",
        },
      ],
    },
    {
      name: "About Us",
      href: "/about",
      dropdown: [
        {
          title: "Company History (1949)",
          desc: "From the Swedish bread-box invention to a global packaging leader.",
          href: "/about#history",
        },
        {
          title: "Global Presence (39 Countries)",
          desc: "145 facilities providing local support with global consistency.",
          href: "/about#locations",
        },
        {
          title: "Ownership: FAM AB & Founders",
          desc: "Backed by the Wallenberg Foundations and Nordgren/Pihl family.",
          href: "/about#ownership",
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-[#0c2340] text-xs text-gray-200 border-b border-[#1b3a60] hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-medium text-white tracking-wide">
              Saving resources in supply chains, for a better tomorrow.
            </span>
          </div>

          <div className="flex items-center space-x-6">
            {/* Region Selector */}
            <div className="relative">
              <button
                onClick={() => setRegionMenuOpen(!regionMenuOpen)}
                className="flex items-center space-x-1.5 hover:text-white transition-colors text-xs text-gray-300"
              >
                <Globe className="w-3.5 h-3.5 text-[#eb6608]" />
                <span>{selectedRegion}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {regionMenuOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-white text-gray-900 rounded-md shadow-xl border border-gray-200 py-1 z-50">
                  {["Global / English", "Europe / Deutsch", "Europe / Français", "Americas / English", "Americas / Español", "Asia-Pacific / English", "Nordics / Svenska"].map(
                    (reg) => (
                      <button
                        key={reg}
                        onClick={() => {
                          setSelectedRegion(reg);
                          setRegionMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs hover:bg-orange-50 hover:text-[#eb6608] ${
                          selectedRegion === reg ? "font-bold text-[#eb6608] bg-orange-50/70" : ""
                        }`}
                      >
                        {reg}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            <Link href="/about#careers" className="hover:text-white transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Find Locations
            </Link>
            <button
              onClick={onOpenContact}
              className="text-[#eb6608] hover:text-[#ff7f2a] font-semibold transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3.5"
            : "bg-white border-b border-gray-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <span className="text-3xl font-black tracking-tight text-[#0c2340] font-sans">
              NEFAB
            </span>
            <div className="flex flex-col border-l-2 border-gray-200 pl-2.5 ml-1 leading-tight">
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#eb6608]">
                Saving Resources
              </span>
              <span className="text-[9px] text-gray-400 font-medium">
                Since 1949
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              const isHovered = activeDropdown === item.name;

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 px-3.5 py-2 text-sm font-bold rounded-lg transition-colors ${
                      isActive
                        ? "text-[#eb6608]"
                        : "text-[#0c2340] hover:text-[#eb6608]"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isHovered ? "rotate-180 text-[#eb6608]" : "text-gray-400"
                      }`}
                    />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {isHovered && (
                    <div className="absolute top-full left-0 mt-1 w-84 bg-white rounded-xl shadow-2xl border border-gray-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            className="block p-2.5 rounded-lg hover:bg-orange-50/70 transition-colors group/item"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-[#0c2340] group-hover/item:text-[#eb6608]">
                                {sub.title}
                              </span>
                              <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover/item:text-[#eb6608] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                              {sub.desc}
                            </p>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between px-2 text-xs">
                        <Link
                          href={item.href}
                          className="font-bold text-[#eb6608] hover:text-[#d45600] flex items-center"
                          onClick={() => setActiveDropdown(null)}
                        >
                          View all {item.name} <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenSearch}
              className="p-2 text-gray-600 hover:text-[#eb6608] hover:bg-gray-100 rounded-full transition-colors"
              title="Search nefab.com"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Signature Nefab Orange Rounded Button */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center space-x-2 bg-[#eb6608] hover:bg-[#d45600] text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 text-gray-600 hover:text-[#eb6608] rounded-full"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0c2340] hover:text-[#eb6608] rounded-md"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              {navLinks.map((item) => (
                <div key={item.name} className="border-b border-gray-100 pb-2">
                  <div className="flex items-center justify-between py-2">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-bold text-[#0c2340] text-base"
                    >
                      {item.name}
                    </Link>
                  </div>
                  <div className="pl-4 space-y-1.5 pt-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs text-gray-600 hover:text-[#eb6608] py-1"
                      >
                        • {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact && onOpenContact();
                }}
                className="w-full bg-[#eb6608] hover:bg-[#d45600] text-white font-bold py-3 rounded-full text-center text-sm shadow-md"
              >
                Contact Nefab Worldwide
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
