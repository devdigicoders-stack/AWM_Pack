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
  const [selectedRegion, setSelectedRegion] = useState("Global | English");
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
      icon: Package,
      dropdown: [
        {
          title: "Packaging Solutions",
          desc: "Engineered outer & inner packaging, fiber-based FiberFlute™, and ExPak plywood crates.",
          href: "/solutions#packaging",
        },
        {
          title: "Logistics Services",
          desc: "On-site contract packing, global pooling, warehousing, and loop management.",
          href: "/solutions#logistics",
        },
        {
          title: "Digital Solutions",
          desc: "IoT track-and-trace, environmental monitoring sensors, and supply chain transparency.",
          href: "/solutions#digital",
        },
        {
          title: "Multi-Material Engineering",
          desc: "Material-neutral optimization combining wood, fiber, returnable plastics, and steel.",
          href: "/solutions#multimaterial",
        },
      ],
    },
    {
      name: "Industries",
      href: "/industries",
      icon: Building2,
      dropdown: [
        {
          title: "Datacom & Cloud",
          desc: "Rack-level protection, high-shock mitigation, and foam-free recyclable solutions.",
          href: "/industries#datacom",
        },
        {
          title: "Telecom",
          desc: "Radio base stations, antennas, and scalable deployment packaging worldwide.",
          href: "/industries#telecom",
        },
        {
          title: "Energy & Grid",
          desc: "Heavy-duty crates for transformers, turbines, and grid infrastructure.",
          href: "/industries#energy",
        },
        {
          title: "LiB & E-Mobility",
          desc: "UN-certified dangerous goods packaging for lithium-ion battery cells and packs.",
          href: "/industries#battery",
        },
        {
          title: "Healthcare & MedTech",
          desc: "Cleanroom packaging and high-precision protection for life-critical devices.",
          href: "/industries#medtech",
        },
        {
          title: "Semicon & High-Tech",
          desc: "Ultra-clean ESD and vibration protection for sensitive wafers and equipment.",
          href: "/industries#semicon",
        },
      ],
    },
    {
      name: "Sustainability",
      href: "/sustainability",
      icon: Leaf,
      dropdown: [
        {
          title: "Our Purpose & 2030 Strategy",
          desc: "Committed to saving environmental and financial resources in global supply chains.",
          href: "/sustainability#purpose",
        },
        {
          title: "GreenCalc™ LCA Tool",
          desc: "Proprietary ISO-certified software to quantify CO₂eq and cost reductions.",
          href: "/sustainability#greencalc",
        },
        {
          title: "Circular Packaging Systems",
          desc: "Closed-loop pooling, repair, sorting, and 100% recyclable fiber innovations.",
          href: "/sustainability#circular",
        },
        {
          title: "EU PPWR Compliance",
          desc: "Navigating European Packaging and Packaging Waste Regulations seamlessly.",
          href: "/sustainability#ppwr",
        },
      ],
    },
    {
      name: "Engineering",
      href: "/engineering",
      icon: FlaskConical,
      dropdown: [
        {
          title: "The Total Cost Approach",
          desc: "Optimizing transport, handling, protection, and environmental costs simultaneously.",
          href: "/engineering#total-cost",
        },
        {
          title: "ISTA Certified Testing Labs",
          desc: "Drop, vibration, compression, and thermal shock testing across global facilities.",
          href: "/engineering#labs",
        },
        {
          title: "200+ Packaging Engineers",
          desc: "Global network of structural and material engineers solving complex logistical challenges.",
          href: "/engineering#engineers",
        },
      ],
    },
    {
      name: "Insights",
      href: "/insights",
      icon: BookOpen,
      dropdown: [
        {
          title: "Articles & Knowledge Hub",
          desc: "Latest trends in circular supply chains, material science, and regulatory shifts.",
          href: "/insights",
        },
        {
          title: "Customer Case Studies",
          desc: "Quantified results achieved with leading global corporations.",
          href: "/insights#cases",
        },
        {
          title: "Whitepapers & Guides",
          desc: "Technical whitepapers on battery safety, PPWR, and LCA methodology.",
          href: "/insights#whitepapers",
        },
      ],
    },
    {
      name: "About Us",
      href: "/about",
      icon: ShieldCheck,
      dropdown: [
        {
          title: "Company Overview",
          desc: "Global provider founded in 1949, operating in 39 countries with 6,000+ employees.",
          href: "/about",
        },
        {
          title: "History Since 1949",
          desc: "From the innovative bread-box invention to a global packaging powerhouse.",
          href: "/about#history",
        },
        {
          title: "Ownership & FAM AB",
          desc: "Strong backing by the Nordgren/Pihl family and Wallenberg Investments.",
          href: "/about#ownership",
        },
        {
          title: "Global Locations",
          desc: "Over 145 operational sites and design centers around the world.",
          href: "/about#locations",
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#0f172a] text-xs text-gray-300 border-b border-gray-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-emerald-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
              Saving resources in supply chains, for a better tomorrow
            </span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-300">Global Turnover: 10.3B SEK</span>
          </div>

          <div className="flex items-center space-x-5">
            {/* Region Selector */}
            <div className="relative">
              <button
                onClick={() => setRegionMenuOpen(!regionMenuOpen)}
                className="flex items-center space-x-1.5 hover:text-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>{selectedRegion}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {regionMenuOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-white text-gray-900 rounded-md shadow-xl border border-gray-200 py-1 z-50">
                  {["Global | English", "Europe | Deutsch", "Europe | Français", "Americas | English", "Americas | Español", "Asia-Pacific | English", "Nordics | Svenska"].map(
                    (reg) => (
                      <button
                        key={reg}
                        onClick={() => {
                          setSelectedRegion(reg);
                          setRegionMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs hover:bg-emerald-50 hover:text-emerald-700 ${
                          selectedRegion === reg ? "font-semibold text-emerald-600 bg-emerald-50/50" : ""
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
            <Link href="/insights" className="hover:text-white transition-colors">
              Media & Press
            </Link>
            <button
              onClick={onOpenContact}
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
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
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white border-b border-gray-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-950 font-sans group-hover:text-emerald-700 transition-colors">
                NEFAB
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ml-1.5 inline-block group-hover:scale-125 transition-transform"></span>
            </div>
            <div className="hidden lg:flex flex-col border-l border-gray-200 pl-2.5 ml-1 leading-tight">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-500">
                Saving Resources
              </span>
              <span className="text-[9px] text-emerald-600 font-medium">
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
                    className={`flex items-center space-x-1 px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                      isActive
                        ? "text-emerald-700 bg-emerald-50/60"
                        : "text-gray-700 hover:text-emerald-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isHovered ? "rotate-180 text-emerald-600" : "text-gray-400"
                      }`}
                    />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {isHovered && (
                    <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            className="block p-2.5 rounded-lg hover:bg-emerald-50/70 transition-colors group/item"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-gray-900 group-hover/item:text-emerald-700">
                                {sub.title}
                              </span>
                              <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover/item:text-emerald-600 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all" />
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
                          className="font-medium text-emerald-700 hover:text-emerald-800 flex items-center"
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

          {/* Right Utility Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-gray-600 hover:text-emerald-700 hover:bg-gray-100 rounded-full transition-colors"
              title="Search nefab.com"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Quick Contact CTA */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 text-gray-600 hover:text-emerald-700 hover:bg-gray-100 rounded-full"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-emerald-700 hover:bg-gray-100 rounded-md"
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
                      className="font-bold text-gray-900 text-base flex items-center space-x-2"
                    >
                      <item.icon className="w-4 h-4 text-emerald-600" />
                      <span>{item.name}</span>
                    </Link>
                  </div>
                  <div className="pl-6 space-y-1.5 pt-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs text-gray-600 hover:text-emerald-700 py-1"
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
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg text-center text-sm shadow-sm"
              >
                Get in Touch with Nefab
              </button>
              <Link
                href="/about#locations"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 rounded-lg text-center text-xs"
              >
                Find Local Facility (39 Countries)
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

