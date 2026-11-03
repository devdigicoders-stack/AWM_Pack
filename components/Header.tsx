"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Search,
  Languages,
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface HeaderProps {
  onOpenSearch?: () => void;
  onOpenContact?: () => void;
}

export default function Header({ onOpenSearch, onOpenContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 280);
  };

  const closeDropdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(null);
  };

  const handleNavClick = (href: string) => {
    closeDropdown();
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const currentPath = pathname || "/";
      if (currentPath === path || (path === "" && hash)) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 50);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white transition-all duration-200">
      {/* Top Notification / Fast Contact Strip */}
      <div className="bg-[#002b49] text-white text-[11px] py-1.5 px-4 hidden md:block border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-blue-200 font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#0099e5]" />
              Birkat Al-Awamer, Al Wukair, State of Qatar
            </span>
            <span className="flex items-center text-blue-200 font-medium">
              <Phone className="w-3.5 h-3.5 mr-1 text-[#0099e5]" />
              +974 4039 4581 / +974 5119 1223
            </span>
            <span className="flex items-center text-blue-200 font-medium">
              <Mail className="w-3.5 h-3.5 mr-1 text-[#0099e5]" />
              maher@awmpack.com
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <span className="bg-[#0099e5]/20 text-[#0099e5] border border-[#0099e5]/40 px-2 py-0.5 rounded text-[10px] font-bold">
              ICV Certified
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded text-[10px] font-bold">
              ISPM 15 Heat Treated
            </span>
            <span className="text-gray-300">Made in Qatar 🇶🇦</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 bg-white border-b border-gray-100 relative ${
          isScrolled ? "shadow-sm py-2" : "py-3"
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo - AWMPACK (Al Waad Manufacturing Packaging Company) */}
          <Link
            href="/"
            onClick={closeDropdown}
            className="flex items-center space-x-3 group py-1"
          >
            <div className="relative h-10 sm:h-12 w-36 sm:w-48">
              <Image
                src="/logo.jpeg"
                alt="AWMPACK - Al Waad Manufacturing Packaging Company"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Center Navigation Links with Hover Bridge */}
          <div className="hidden xl:flex items-center space-x-1 py-1">
            {/* 1. PRODUCTS & SOLUTIONS */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/solutions"
                onClick={() => handleNavClick("/solutions")}
                className={`px-4 py-2 text-sm font-bold transition-all rounded-full ${
                  activeDropdown === "solutions"
                    ? "bg-[#edf2f7] text-[#003366]"
                    : "text-[#002b49] hover:text-[#0099e5]"
                }`}
              >
                Products & Solutions
              </Link>
            </div>

            {/* 2. INDUSTRIES */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/industries"
                onClick={() => handleNavClick("/industries")}
                className={`px-4 py-2 text-sm font-bold transition-all rounded-full ${
                  activeDropdown === "industries"
                    ? "bg-[#edf2f7] text-[#003366]"
                    : "text-[#002b49] hover:text-[#0099e5]"
                }`}
              >
                Industries Served
              </Link>
            </div>

            {/* 3. SUSTAINABILITY & RECYCLING */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("sustainability")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/sustainability"
                onClick={() => handleNavClick("/sustainability")}
                className={`px-4 py-2 text-sm font-bold transition-all rounded-full ${
                  activeDropdown === "sustainability"
                    ? "bg-[#edf2f7] text-[#003366]"
                    : "text-[#002b49] hover:text-[#0099e5]"
                }`}
              >
                Sustainability & Recycling
              </Link>
            </div>

            {/* 4. ISPM 15 & ENGINEERING */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("engineering")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/engineering"
                onClick={() => handleNavClick("/engineering")}
                className={`px-4 py-2 text-sm font-bold transition-all rounded-full ${
                  activeDropdown === "engineering"
                    ? "bg-[#edf2f7] text-[#003366]"
                    : "text-[#002b49] hover:text-[#0099e5]"
                }`}
              >
                ISPM 15 & Quality
              </Link>
            </div>

            {/* 5. NEWS & CASE STUDIES */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("insights")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/insights"
                onClick={() => handleNavClick("/insights")}
                className={`px-4 py-2 text-sm font-bold transition-all rounded-full ${
                  activeDropdown === "insights"
                    ? "bg-[#edf2f7] text-[#003366]"
                    : "text-[#002b49] hover:text-[#0099e5]"
                }`}
              >
                News & Projects
              </Link>
            </div>

            {/* 6. ABOUT US */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/about"
                onClick={() => handleNavClick("/about")}
                className={`px-4 py-2 text-sm font-bold transition-all rounded-full ${
                  activeDropdown === "about"
                    ? "bg-[#edf2f7] text-[#003366]"
                    : "text-[#002b49] hover:text-[#0099e5]"
                }`}
              >
                About AWMPACK
              </Link>
            </div>
          </div>

          {/* Right Action Icons & Button */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Dark Blue "Contact Us" Button */}
            <button
              onClick={() => {
                closeDropdown();
                onOpenContact?.();
              }}
              className="bg-[#003366] hover:bg-[#002244] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
            >
              Contact Factory
            </button>

            {/* Search Icon */}
            <button
              onClick={() => {
                closeDropdown();
                onOpenSearch?.();
              }}
              className="p-1.5 text-[#002b49] hover:text-[#0099e5] transition-colors"
              title="Search AWMPACK"
            >
              <Search className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Languages (A 文 Icon) */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="p-1.5 text-[#002b49] hover:text-[#0099e5] transition-colors flex items-center space-x-1"
                title="Select language"
              >
                <Languages className="w-5 h-5 stroke-[2.2]" />
                <span className="text-xs font-bold hidden sm:inline">EN / عربي</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-200 py-1.5 z-50 text-xs">
                  <button
                    onClick={() => {
                      setSelectedLanguage("English");
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 hover:bg-gray-50 ${
                      selectedLanguage === "English" ? "font-bold text-[#0099e5] bg-blue-50/50" : "text-gray-700"
                    }`}
                  >
                    English (Qatar & Global)
                  </button>
                  <button
                    onClick={() => {
                      setSelectedLanguage("العربية");
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-right px-3.5 py-2 hover:bg-gray-50 ${
                      selectedLanguage === "العربية" ? "font-bold text-[#0099e5] bg-blue-50/50" : "text-gray-700"
                    }`}
                  >
                    العربية (دولة قطر)
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#002b49] xl:hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* =========================================================================
            FULL-WIDTH MEGA MENU PANELS WITH HOVER BRIDGE (before:-top-5)
            ========================================================================= */}

        {/* 1. SOLUTIONS MEGA MENU */}
        {activeDropdown === "solutions" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-[#edf2f7] border-t border-b border-gray-200 py-8 px-4 sm:px-8 z-50 shadow-2xl before:content-[''] before:absolute before:-top-5 before:left-0 before:right-0 before:h-6"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-none p-8 border border-gray-200/80 shadow-sm">
                <div className="grid grid-cols-12 gap-8">
                  {/* Left Column: PACKAGING SOLUTIONS */}
                  <div className="col-span-9 space-y-6">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#003366]">
                      AWMPACK INDUSTRIAL PRODUCTS
                    </h3>

                    <div className="grid grid-cols-4 gap-6">
                      {/* Pallets */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase">Pallets</h4>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <Link
                              href="/solutions#wooden-pallets"
                              onClick={() => handleNavClick("/solutions#wooden-pallets")}
                              className="text-[#0066cc] hover:underline block"
                            >
                              Standard Wooden Pallets
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions#custom-pallets"
                              onClick={() => handleNavClick("/solutions#custom-pallets")}
                              className="text-[#0066cc] hover:underline block"
                            >
                              Custom / Special Pallets
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions#metal-pallets"
                              onClick={() => handleNavClick("/solutions#metal-pallets")}
                              className="text-[#0066cc] hover:underline block"
                            >
                              Heavy Metal Pallets
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions#one-way-pallets"
                              onClick={() => handleNavClick("/solutions#one-way-pallets")}
                              className="text-[#0066cc] hover:underline block"
                            >
                              One-Way & Half Pallets
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Boxes & Crates */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase">Boxes & Crates</h4>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <Link
                              href="/solutions#wooden-boxes"
                              onClick={() => handleNavClick("/solutions#wooden-boxes")}
                              className="text-[#0066cc] hover:underline block"
                            >
                              Heavy Wooden Boxes
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions#custom-crates"
                              onClick={() => handleNavClick("/solutions#custom-crates")}
                              className="text-[#0066cc] hover:underline block"
                            >
                              Custom Export Crates
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions#pallet-collars"
                              onClick={() => handleNavClick("/solutions#pallet-collars")}
                              className="text-[#0066cc] hover:underline block"
                            >
                              Hinged Pallet Collars
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions#metal-cages"
                              onClick={() => handleNavClick("/solutions#metal-cages")}
                              className="text-[#0066cc] hover:underline block"
                            >
                              Metal Cages & Stillages
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Materials & Blocks */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase">Materials & Recycled</h4>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <Link
                              href="/solutions#sawdust-blocks"
                              onClick={() => handleNavClick("/solutions#sawdust-blocks")}
                              className="text-[#0066cc] hover:underline block"
                            >
                              Compressed Sawdust Blocks
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions#heat-treated-wood"
                              onClick={() => handleNavClick("/solutions#heat-treated-wood")}
                              className="text-[#0066cc] hover:underline block"
                            >
                              ISPM 15 Treated Timber
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions#used-pallets"
                              onClick={() => handleNavClick("/solutions#used-pallets")}
                              className="text-[#0066cc] hover:underline block"
                            >
                              Used & Reconditioned
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/sustainability#waste-to-product"
                              onClick={() => handleNavClick("/sustainability#waste-to-product")}
                              className="text-[#0066cc] hover:underline block font-semibold text-emerald-700"
                            >
                              Waste to Usable Products
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Special Services */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase">Consulting & Care</h4>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <Link
                              href="/engineering#heat-treatment"
                              onClick={() => handleNavClick("/engineering#heat-treatment")}
                              className="text-[#0066cc] hover:underline block"
                            >
                              Heat Treatment (ISPM 15)
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions#pallet-repair"
                              onClick={() => handleNavClick("/solutions#pallet-repair")}
                              className="text-[#0066cc] hover:underline block"
                            >
                              Pallet Repair & Sorting
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions#pallet-pooling"
                              onClick={() => handleNavClick("/solutions#pallet-pooling")}
                              className="text-[#0066cc] hover:underline block"
                            >
                              Closed-Loop Pallet Pooling
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions#consulting"
                              onClick={() => handleNavClick("/solutions#consulting")}
                              className="text-[#0066cc] hover:underline block"
                            >
                              &quot;No-Cure No-Pay&quot; Logistics
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: QATAR FACTORY CAPABILITIES */}
                  <div className="col-span-3 border-l border-gray-200 pl-8 space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#003366]">
                      QATAR MANUFACTURING
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Operating in Birkat Al-Awamer, Al Wukair with high-capacity automated pallet assembly lines, certified thermal kilns, and wood recycling presses.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          closeDropdown();
                          onOpenContact?.();
                        }}
                        className="w-full py-2.5 px-4 rounded-full bg-[#003366] hover:bg-[#002244] text-white text-xs font-bold transition-all text-center block shadow-sm"
                      >
                        Request Quote / Factory Visit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. INDUSTRIES MEGA MENU */}
        {activeDropdown === "industries" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-[#edf2f7] border-t border-b border-gray-200 py-8 px-4 sm:px-8 z-50 shadow-2xl before:content-[''] before:absolute before:-top-5 before:left-0 before:right-0 before:h-6"
            onMouseEnter={() => handleMouseEnter("industries")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-4 gap-6">
                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366]">OIL & GAS / PETROCHEMICALS</h3>
                  <p className="text-xs text-gray-600 leading-snug">Heavy-duty timber crates, drum pallets, and ISPM 15 certified platforms for Ras Laffan, Mesaieed, and offshore projects.</p>
                  <Link
                    href="/industries#oil-gas"
                    onClick={() => handleNavClick("/industries#oil-gas")}
                    className="text-xs font-bold text-[#0066cc] hover:underline block pt-1"
                  >
                    Explore Oil & Gas →
                  </Link>
                </div>

                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366]">CONSTRUCTION & INFRASTRUCTURE</h3>
                  <p className="text-xs text-gray-600 leading-snug">Reinforced pallets, precast transport frames, and heavy skids supporting Qatar&apos;s National Vision 2030 developments.</p>
                  <Link
                    href="/industries#construction"
                    onClick={() => handleNavClick("/industries#construction")}
                    className="text-xs font-bold text-[#0066cc] hover:underline block pt-1"
                  >
                    Explore Construction →
                  </Link>
                </div>

                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366]">MANUFACTURING & METALS</h3>
                  <p className="text-xs text-gray-600 leading-snug">Heavy steel pallets, stillages, and customized crates for aluminum extrusions, cable drums, and machinery.</p>
                  <Link
                    href="/industries#manufacturing"
                    onClick={() => handleNavClick("/industries#manufacturing")}
                    className="text-xs font-bold text-[#0066cc] hover:underline block pt-1"
                  >
                    Explore Manufacturing →
                  </Link>
                </div>

                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366]">LOGISTICS, PORTS & FOOD</h3>
                  <p className="text-xs text-gray-600 leading-snug">Hamad Port seaworthy export packaging, air freight platforms, and hygienic cold-chain food grade pallets.</p>
                  <Link
                    href="/industries#logistics"
                    onClick={() => handleNavClick("/industries#logistics")}
                    className="text-xs font-bold text-[#0066cc] hover:underline block pt-1"
                  >
                    Explore Logistics & Ports →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. SUSTAINABILITY MEGA MENU */}
        {activeDropdown === "sustainability" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-[#edf2f7] border-t border-b border-gray-200 py-8 px-4 sm:px-8 z-50 shadow-2xl before:content-[''] before:absolute before:-top-5 before:left-0 before:right-0 before:h-6"
            onMouseEnter={() => handleMouseEnter("sustainability")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-3 gap-6">
                <Link
                  href="/sustainability#waste-to-product"
                  onClick={() => handleNavClick("/sustainability#waste-to-product")}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366] mb-2">
                    WASTE TO USABLE PRODUCT
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Our pioneering circular initiative converting industrial wood scraps and sawdust into high-density compressed pallet blocks.
                  </p>
                </Link>

                <Link
                  href="/sustainability#compressed-blocks"
                  onClick={() => handleNavClick("/sustainability#compressed-blocks")}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366] mb-2">
                    COMPRESSED SAWDUST WOOD BLOCKS
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Eco-friendly, nail-holding pallet corner blocks engineered from 100% recycled wood waste, eliminating fresh timber harvesting.
                  </p>
                </Link>

                <Link
                  href="/sustainability#pallet-pooling"
                  onClick={() => handleNavClick("/sustainability#pallet-pooling")}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366] mb-2">
                    CLOSED-LOOP PALLET POOLING
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Extending pallet lifecycles across Qatari distribution networks through professional inspection, sorting, and repair loops.
                  </p>
                </Link>

                <Link
                  href="/sustainability#fsc-timber"
                  onClick={() => handleNavClick("/sustainability#fsc-timber")}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366] mb-2">
                    FSC® CERTIFIED SOURCING
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Strict adherence to internationally certified sustainable forest management and legal chain of custody.
                  </p>
                </Link>

                <Link
                  href="/sustainability#icv"
                  onClick={() => handleNavClick("/sustainability#icv")}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366] mb-2">
                    IN-COUNTRY VALUE (ICV)
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Certified Qatari In-Country Value score supporting local industrial self-reliance and the Qatar National Vision 2030.
                  </p>
                </Link>

                <Link
                  href="/sustainability#iso14001"
                  onClick={() => handleNavClick("/sustainability#iso14001")}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366] mb-2">
                    ISO 14001 ENVIRONMENTAL GOVERNANCE
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Certified environmental management minimizing carbon footprint and optimizing industrial energy consumption.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 4. ISPM 15 & ENGINEERING MEGA MENU */}
        {activeDropdown === "engineering" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-[#edf2f7] border-t border-b border-gray-200 py-8 px-4 sm:px-8 z-50 shadow-2xl before:content-[''] before:absolute before:-top-5 before:left-0 before:right-0 before:h-6"
            onMouseEnter={() => handleMouseEnter("engineering")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-4 gap-6">
                <Link
                  href="/engineering#ispm15"
                  onClick={() => handleNavClick("/engineering#ispm15")}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366] mb-2">
                    CERTIFIED ISPM 15 HEAT TREATMENT
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    On-site certified thermal treatment heating core wood to 56°C for 30 minutes, stamped with official Qatar IPPC seal.
                  </p>
                </Link>

                <Link
                  href="/engineering#cad-design"
                  onClick={() => handleNavClick("/engineering#cad-design")}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366] mb-2">
                    CUSTOM PALLET CAD DESIGN
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Parametric 3D structural engineering ensuring optimal board spacing, stringer depth, and container fitting.
                  </p>
                </Link>

                <Link
                  href="/engineering#load-testing"
                  onClick={() => handleNavClick("/engineering#load-testing")}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366] mb-2">
                    LOAD CAPACITY TESTING
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Static, dynamic, and racking payload stress testing verifying safety for loads up to 4,000+ kg.
                  </p>
                </Link>

                <Link
                  href="/engineering#iso-standards"
                  onClick={() => handleNavClick("/engineering#iso-standards")}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366] mb-2">
                    ISO 9001 & 45001 STANDARDS
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Certified quality management and occupational safety protecting our factory workers and client equipment.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 5. NEWS & CASE STUDIES MEGA MENU */}
        {activeDropdown === "insights" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-[#edf2f7] border-t border-b border-gray-200 py-8 px-4 sm:px-8 z-50 shadow-2xl before:content-[''] before:absolute before:-top-5 before:left-0 before:right-0 before:h-6"
            onMouseEnter={() => handleMouseEnter("insights")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-4">
                NEWS, PROJECTS & INSIGHTS
              </span>
              <div className="grid grid-cols-3 gap-6">
                <Link
                  href="/insights#news"
                  onClick={() => handleNavClick("/insights#news")}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366] mb-2">
                    FACTORY EXPANSION & PRESS
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Updates on AWMPACK&apos;s Birkat Al-Awamer manufacturing capacity, new automated lines, and corporate achievements.
                  </p>
                </Link>

                <Link
                  href="/insights#projects"
                  onClick={() => handleNavClick("/insights#projects")}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366] mb-2">
                    CLIENT CASE STUDIES
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Documented supply chain savings for major Qatari oil & gas, construction, and manufacturing enterprises.
                  </p>
                </Link>

                <Link
                  href="/insights#guides"
                  onClick={() => handleNavClick("/insights#guides")}
                  className="bg-white p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow block text-left"
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366] mb-2">
                    ISPM 15 & EXPORT GUIDELINES
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Essential guidelines on international export requirements for wood packaging entering the EU, US, and GCC.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 6. ABOUT US MEGA MENU */}
        {activeDropdown === "about" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-[#edf2f7] border-t border-b border-gray-200 py-8 px-4 sm:px-8 z-50 shadow-2xl before:content-[''] before:absolute before:-top-5 before:left-0 before:right-0 before:h-6"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-5 gap-6">
                {/* Col 1 */}
                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366]">
                    ABOUT AWMPACK
                  </h3>
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <Link
                        href="/about#profile"
                        onClick={() => handleNavClick("/about#profile")}
                        className="text-[#0066cc] hover:underline block"
                      >
                        Company Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about#mission-vision"
                        onClick={() => handleNavClick("/about#mission-vision")}
                        className="text-[#0066cc] hover:underline block"
                      >
                        Mission & Vision
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about#made-in-qatar"
                        onClick={() => handleNavClick("/about#made-in-qatar")}
                        className="text-[#0066cc] hover:underline block font-semibold text-emerald-700"
                      >
                        Made in Qatar 🇶🇦
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Col 2 */}
                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366]">
                    FACILITY & LOCATION
                  </h3>
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <Link
                        href="/about#facility"
                        onClick={() => handleNavClick("/about#facility")}
                        className="text-[#0066cc] hover:underline block"
                      >
                        Birkat Al-Awamer Plant
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about#capacity"
                        onClick={() => handleNavClick("/about#capacity")}
                        className="text-[#0066cc] hover:underline block"
                      >
                        Production Capacity
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact#map"
                        onClick={() => handleNavClick("/contact#map")}
                        className="text-[#0066cc] hover:underline block"
                      >
                        Factory Location Map
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Col 3 */}
                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366]">
                    MANAGEMENT & TEAM
                  </h3>
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <Link
                        href="/about#leadership"
                        onClick={() => handleNavClick("/about#leadership")}
                        className="text-[#0066cc] hover:underline block"
                      >
                        Eng. Maher Marjy (Manager)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about#engineering-team"
                        onClick={() => handleNavClick("/about#engineering-team")}
                        className="text-[#0066cc] hover:underline block"
                      >
                        Factory Engineers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about#careers"
                        onClick={() => handleNavClick("/about#careers")}
                        className="text-[#0066cc] hover:underline block"
                      >
                        Careers at AWMPACK
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Col 4 */}
                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366]">
                    CERTIFICATIONS
                  </h3>
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <Link
                        href="/about#certifications"
                        onClick={() => handleNavClick("/about#certifications")}
                        className="text-[#0066cc] hover:underline block"
                      >
                        ISO 9001 / 14001 / 45001
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about#icv"
                        onClick={() => handleNavClick("/about#icv")}
                        className="text-[#0066cc] hover:underline block"
                      >
                        In-Country Value (ICV)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/engineering#ispm15"
                        onClick={() => handleNavClick("/engineering#ispm15")}
                        className="text-[#0066cc] hover:underline block"
                      >
                        ISPM 15 Certified
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Col 5 */}
                <div className="bg-white p-6 border border-gray-200/80 shadow-sm space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#003366]">
                    DIRECT CONTACT
                  </h3>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p className="font-bold text-[#003366]">Eng. Maher Marjy</p>
                    <p className="text-gray-500">Factory Manager</p>
                    <p className="text-[#0099e5] font-semibold pt-1">+974 5119 1223</p>
                    <p className="text-[#003366] font-semibold">+974 4039 4581</p>
                    <p className="text-gray-500">maher@awmpack.com</p>
                  </div>
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
                  AWMPACK PRODUCTS & SERVICES
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <Link
                    href="/solutions#wooden-pallets"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#002b49] hover:text-[#0099e5] py-1"
                  >
                    Wooden Pallets
                  </Link>
                  <Link
                    href="/solutions#custom-crates"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#002b49] hover:text-[#0099e5] py-1"
                  >
                    Custom Crates
                  </Link>
                  <Link
                    href="/solutions#sawdust-blocks"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#002b49] hover:text-[#0099e5] py-1"
                  >
                    Sawdust Blocks
                  </Link>
                  <Link
                    href="/engineering#ispm15"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#002b49] hover:text-[#0099e5] py-1"
                  >
                    ISPM 15 Heat Treatment
                  </Link>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-3">
                <p className="font-black text-xs uppercase tracking-wider text-gray-400 mb-2">
                  KEY SECTORS
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <Link
                    href="/industries#oil-gas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#002b49] hover:text-[#0099e5] py-1"
                  >
                    Oil & Gas
                  </Link>
                  <Link
                    href="/industries#construction"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#002b49] hover:text-[#0099e5] py-1"
                  >
                    Construction
                  </Link>
                  <Link
                    href="/industries#manufacturing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#002b49] hover:text-[#0099e5] py-1"
                  >
                    Manufacturing
                  </Link>
                  <Link
                    href="/industries#logistics"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#002b49] hover:text-[#0099e5] py-1"
                  >
                    Hamad Port Freight
                  </Link>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-3">
                <p className="font-black text-xs uppercase tracking-wider text-gray-400 mb-2">
                  QUICK LINKS
                </p>
                <div className="space-y-2 text-sm font-semibold">
                  <Link
                    href="/solutions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[#002b49] hover:text-[#0099e5]"
                  >
                    All Products
                  </Link>
                  <Link
                    href="/sustainability"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[#002b49] hover:text-[#0099e5]"
                  >
                    Waste to Usable Products
                  </Link>
                  <Link
                    href="/engineering"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[#002b49] hover:text-[#0099e5]"
                  >
                    ISPM 15 & Engineering
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[#002b49] hover:text-[#0099e5]"
                  >
                    About AWMPACK
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[#0099e5] font-bold"
                  >
                    Contact Factory (Doha, Qatar)
                  </Link>
                </div>
              </div>

              {/* Mobile Direct Call Card */}
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs space-y-1">
                <p className="font-bold text-[#003366]">Eng. Maher Marjy</p>
                <p className="text-gray-600">Factory Manager, AWMPACK</p>
                <p className="text-[#0099e5] font-bold">+974 5119 1223</p>
                <p className="text-gray-700 font-semibold">+974 4039 4581</p>
                <p className="text-gray-500">Birkat Al-Awamer, Al Wukair</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}