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
  Boxes,
  Layers,
  Package,
  RotateCcw,
  Recycle,
  Leaf,
  Flame,
  Award,
  TrendingUp,
  Percent,
  Handshake,
  Factory,
  Building2,
  Globe,
  Sliders,
  BarChart3,
  FileText,
  Cpu,
  Truck,
  TreePine,
  ChevronRight,
  Quote,
  Sparkles,
  RefreshCw,
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
  const [isZoomedOrMobile, setIsZoomedOrMobile] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Proactive browser zoom & narrow viewport detection
  useEffect(() => {
    let initialDpr = 1;
    if (typeof window !== "undefined") {
      initialDpr = window.devicePixelRatio || 1;
    }

    const checkZoomAndViewport = () => {
      if (typeof window === "undefined") return;

      const innerW = window.innerWidth;
      const outerW = window.outerWidth || innerW;
      const currentDpr = window.devicePixelRatio || 1;
      const visualScale = window.visualViewport?.scale ?? 1;

      // In Chrome/Edge, zooming Ctrl + Plus causes outerW / innerW to exceed 1.0 (e.g. 1.10, 1.25, 1.50)
      const zoomRatio = outerW > 0 && innerW > 0 ? outerW / innerW : 1;
      // In Firefox or high-DPI displays, DPR increases compared to initial load
      const dprRatio = initialDpr > 0 ? currentDpr / initialDpr : 1;

      // Active zoom check: triggers when user zooms above 100% (threshold 1.05 accounts for scrollbars)
      const isZoomed = zoomRatio > 1.05 || dprRatio > 1.05 || visualScale > 1.05;

      // Viewport width check: when screen is narrower than comfortable desktop threshold (1320px)
      const isNarrow = innerW < 1320;

      setIsZoomedOrMobile(isZoomed || isNarrow);
    };

    checkZoomAndViewport();

    window.addEventListener("resize", checkZoomAndViewport);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", checkZoomAndViewport);
    }

    let mq: MediaQueryList | null = null;
    let mqHandler: (() => void) | null = null;
    try {
      mq = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
      mqHandler = () => checkZoomAndViewport();
      mq.addEventListener("change", mqHandler);
    } catch {
      // fallback
    }

    return () => {
      window.removeEventListener("resize", checkZoomAndViewport);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", checkZoomAndViewport);
      }
      if (mq && mqHandler) {
        mq.removeEventListener("change", mqHandler);
      }
    };
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
      <div className="bg-[#002b49] text-white text-xs py-1.5 px-4 sm:px-6 lg:px-8 xl:px-12 hidden md:block border-b border-blue-900/40">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex items-center space-x-4 lg:space-x-6 whitespace-nowrap overflow-hidden">
            <span className="flex items-center text-blue-200 font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#0099e5] flex-shrink-0" />
              Birkat Al-Awamer, Al Wukair, State of Qatar
            </span>
            <span className="flex items-center text-blue-200 font-medium">
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[#0099e5] flex-shrink-0" />
              +974 4039 4581 / +974 5119 1223
            </span>
            <span className="hidden xl:flex items-center text-blue-200 font-medium">
              <Mail className="w-3.5 h-3.5 mr-1.5 text-[#0099e5] flex-shrink-0" />
              maher@awmpack.com
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs whitespace-nowrap flex-shrink-0">
            <a
              href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20would%20like%20to%20inquire%20about%20pallets"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            >
              <span>WhatsApp: +974 5119 1223</span>
            </a>
            <span className="hidden lg:inline-block w-1 h-1 rounded-full bg-blue-700" />
            <span className="hidden lg:inline-flex items-center space-x-1.5 text-blue-200 font-semibold">
              <span className="text-[#0099e5] font-bold">ISPM 15 &amp; ICV Certified</span>
              <span>•</span>
              <span className="text-gray-300">Qatar 🇶🇦</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 bg-white border-b border-gray-100 relative ${isScrolled ? "shadow-sm py-2" : "py-2.5 sm:py-3"
          }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-3 xl:gap-6">
          {/* Logo - AWMPACK (Al Waad Manufacturing Packaging Company) */}
          <Link
            href="/"
            onClick={closeDropdown}
            className="flex items-center space-x-3 group py-1 shrink-0"
          >
            <div className="relative w-[110px] sm:w-[130px] xl:w-[145px] aspect-[1499/529] transition-all">
              <Image
                src="/logo.jpeg"
                alt="AWMPACK - Al Waad Manufacturing Packaging Company"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Center Navigation Links with Hover Bridge */}
          <div className={`${isZoomedOrMobile ? "hidden" : "hidden xl:flex"} items-center space-x-0.5 xl:space-x-1 py-1 flex-shrink-0`}>
            {/* 1. SOLUTIONS */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/solutions"
                onClick={() => handleNavClick("/solutions")}
                className={`px-2 xl:px-2.5 py-1.5 text-[12.5px] xl:text-[13.5px] font-semibold transition-all rounded-full whitespace-nowrap ${activeDropdown === "solutions"
                    ? "bg-[#edf2f7] text-[#002b49] font-bold shadow-2xs"
                    : "text-[#002b49] hover:text-[#0099e5] hover:bg-gray-100/70"
                  }`}
              >
                Solutions
              </Link>
            </div>

            {/* 2. CONSULTING */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("consulting")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/consulting"
                onClick={() => handleNavClick("/consulting")}
                className={`px-2 xl:px-2.5 py-1.5 text-[12.5px] xl:text-[13.5px] font-semibold transition-all rounded-full whitespace-nowrap ${activeDropdown === "consulting"
                    ? "bg-[#edf2f7] text-[#002b49] font-bold shadow-2xs"
                    : "text-[#002b49] hover:text-[#0099e5] hover:bg-gray-100/70"
                  }`}
              >
                Consulting
              </Link>
            </div>

            {/* 3. INDUSTRIES */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/industries"
                onClick={() => handleNavClick("/industries")}
                className={`px-2 xl:px-2.5 py-1.5 text-[12.5px] xl:text-[13.5px] font-semibold transition-all rounded-full whitespace-nowrap ${activeDropdown === "industries"
                    ? "bg-[#edf2f7] text-[#002b49] font-bold shadow-2xs"
                    : "text-[#002b49] hover:text-[#0099e5] hover:bg-gray-100/70"
                  }`}
              >
                Industries
              </Link>
            </div>

            {/* 3. SUSTAINABILITY */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("sustainability")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/sustainability"
                onClick={() => handleNavClick("/sustainability")}
                className={`px-2 xl:px-2.5 py-1.5 text-[12.5px] xl:text-[13.5px] font-semibold transition-all rounded-full whitespace-nowrap ${activeDropdown === "sustainability"
                    ? "bg-[#edf2f7] text-[#002b49] font-bold shadow-2xs"
                    : "text-[#002b49] hover:text-[#0099e5] hover:bg-gray-100/70"
                  }`}
              >
                Sustainability
              </Link>
            </div>

            {/* 4. ENGINEERING */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("engineering")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/engineering"
                onClick={() => handleNavClick("/engineering")}
                className={`px-2 xl:px-2.5 py-1.5 text-[12.5px] xl:text-[13.5px] font-semibold transition-all rounded-full whitespace-nowrap ${activeDropdown === "engineering"
                    ? "bg-[#edf2f7] text-[#002b49] font-bold shadow-2xs"
                    : "text-[#002b49] hover:text-[#0099e5] hover:bg-gray-100/70"
                  }`}
              >
                Engineering
              </Link>
            </div>

            {/* 5. NEWS & INSIGHTS */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("insights")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/insights"
                onClick={() => handleNavClick("/insights")}
                className={`px-2 xl:px-2.5 py-1.5 text-[12.5px] xl:text-[13.5px] font-semibold transition-all rounded-full whitespace-nowrap ${activeDropdown === "insights"
                    ? "bg-[#edf2f7] text-[#002b49] font-bold shadow-2xs"
                    : "text-[#002b49] hover:text-[#0099e5] hover:bg-gray-100/70"
                  }`}
              >
                News &amp; Insights
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
                className={`px-2 xl:px-2.5 py-1.5 text-[12.5px] xl:text-[13.5px] font-semibold transition-all rounded-full whitespace-nowrap ${activeDropdown === "about"
                    ? "bg-[#edf2f7] text-[#002b49] font-bold shadow-2xs"
                    : "text-[#002b49] hover:text-[#0099e5] hover:bg-gray-100/70"
                  }`}
              >
                About Us
              </Link>
            </div>

            {/* 7. GALLERY */}
            <div className="relative py-2">
              <Link
                href="/gallery"
                onClick={() => handleNavClick("/gallery")}
                className="px-2 xl:px-2.5 py-1.5 text-[12.5px] xl:text-[13.5px] font-semibold transition-all rounded-full whitespace-nowrap text-[#002b49] hover:text-[#0099e5] hover:bg-gray-100/70"
              >
                Gallery
              </Link>
            </div>
          </div>

          {/* Right Action Icons & Button */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
            {/* Dark Blue "Contact" Link Button */}
            <Link
              href="/contact"
              onClick={closeDropdown}
              className="bg-[#002b49] hover:bg-[#0099e5] text-white font-bold text-xs sm:text-[13px] px-3.5 xl:px-4.5 py-2 rounded-full shadow-xs hover:shadow transition-all whitespace-nowrap inline-flex items-center justify-center"
            >
              Contact
            </Link>

            {/* Search Icon */}
            <button
              onClick={() => {
                closeDropdown();
                onOpenSearch?.();
              }}
              className="p-1.5 text-[#002b49] hover:text-[#0099e5] hover:bg-gray-100/70 rounded-full transition-colors flex-shrink-0"
              title="Search AWMPACK"
            >
              <Search className="w-4.5 h-4.5 stroke-[2.2]" />
            </button>

            {/* Languages Icon */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="p-1.5 text-[#002b49] hover:text-[#0099e5] hover:bg-gray-100/70 rounded-full transition-colors flex items-center justify-center flex-shrink-0"
                title="Select language"
              >
                <Languages className="w-4.5 h-4.5 stroke-[2.2]" />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-1.5 z-50 text-xs">
                  <button
                    onClick={() => {
                      setSelectedLanguage("English");
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 hover:bg-gray-50 flex items-center justify-between ${selectedLanguage === "English" ? "font-bold text-[#0099e5] bg-blue-50/50" : "text-gray-700"
                      }`}
                  >
                    <span>English (Qatar & Global)</span>
                    {selectedLanguage === "English" && <CheckCircle2 className="w-3.5 h-3.5 text-[#0099e5]" />}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedLanguage("العربية");
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-right px-3.5 py-2 hover:bg-gray-50 flex items-center justify-between ${selectedLanguage === "العربية" ? "font-bold text-[#0099e5] bg-blue-50/50" : "text-gray-700"
                      }`}
                  >
                    <span>العربية (دولة قطر)</span>
                    {selectedLanguage === "العربية" && <CheckCircle2 className="w-3.5 h-3.5 text-[#0099e5]" />}
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => {
                closeDropdown();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className={`p-1.5 text-[#002b49] hover:bg-gray-100 rounded-lg transition-colors ${
                isZoomedOrMobile ? "flex items-center" : "xl:hidden"
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* =========================================================================
            MODERN ELEVATED MEGA MENU PANELS (Crisp White, Rich Icons & Cards)
            ========================================================================= */}

        {/* 1. SOLUTIONS MEGA MENU */}
        {activeDropdown === "solutions" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-white/98 backdrop-blur-xl border-b border-gray-200/90 shadow-2xl py-6 px-4 sm:px-6 lg:px-8 xl:px-12 z-50 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-5 transition-all duration-200"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full max-w-[1600px] mx-auto">
              {/* Header Title & Link */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-gray-100">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0099e5] animate-pulse"></span>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#002b49]">
                    AWMPACK Industrial Product Portfolio • Doha, Qatar
                  </h3>
                </div>
                <Link
                  href="/solutions"
                  onClick={() => handleNavClick("/solutions")}
                  className="text-xs font-bold text-[#0099e5] hover:text-[#002b49] flex items-center group transition-colors"
                >
                  <span>Explore All Products &amp; Services</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-12 gap-8">
                {/* Column 1: Wooden Pallets Line */}
                <div className="col-span-4 space-y-1">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-2 block mb-2">
                    Wooden Pallets Line
                  </span>

                  <Link
                    href="/solutions/awmpc-pallets"
                    onClick={() => handleNavClick("/solutions/awmpc-pallets")}
                    className="group flex items-start space-x-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                      <Boxes className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-sm font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors truncate">
                          AWMPC Pallets
                        </span>
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-blue-100 text-[#0066cc]">
                          Proprietary
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 leading-snug line-clamp-1 mt-0.5">
                        Euro-pallet alternative with official AWMPC stamp
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/solutions/industrial-pallets"
                    onClick={() => handleNavClick("/solutions/industrial-pallets")}
                    className="group flex items-start space-x-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                      <Layers className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block truncate">
                        Industrial Pallets (1200x1000)
                      </span>
                      <p className="text-xs text-gray-500 leading-snug line-clamp-1 mt-0.5">
                        Heavy-duty 4-way perimeter base for Qatar logistics
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/solutions/used-pallets"
                    onClick={() => handleNavClick("/solutions/used-pallets")}
                    className="group flex items-start space-x-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                      <RotateCcw className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block truncate">
                        Used &amp; Certified Pallets
                      </span>
                      <p className="text-xs text-gray-500 leading-snug line-clamp-1 mt-0.5">
                        Grade A inspected &amp; repaired exchange circulation
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/solutions/half-pallets"
                    onClick={() => handleNavClick("/solutions/half-pallets")}
                    className="group flex items-start space-x-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                      <Package className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block truncate">
                        Half Pallets (DIN 15146)
                      </span>
                      <p className="text-xs text-gray-500 leading-snug line-clamp-1 mt-0.5">
                        Compact 800x600 mm retail &amp; display platforms
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/solutions/special-pallets"
                    onClick={() => handleNavClick("/solutions/special-pallets")}
                    className="group flex items-start space-x-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                      <Sliders className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block truncate">
                        Special / Custom CAD Pallets
                      </span>
                      <p className="text-xs text-gray-500 leading-snug line-clamp-1 mt-0.5">
                        Custom engineered skids for oversized machinery
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/solutions/one-way-pallets"
                    onClick={() => handleNavClick("/solutions/one-way-pallets")}
                    className="group flex items-start space-x-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                      <Truck className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block truncate">
                        One-Way-Pallets (OWP)
                      </span>
                      <p className="text-xs text-gray-500 leading-snug line-clamp-1 mt-0.5">
                        Lightweight cost-efficient export freight platforms
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Column 2: Crates, Blocks & Services */}
                <div className="col-span-4 space-y-1">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-2 block mb-2">
                    Crates, Collars &amp; Circular Wood
                  </span>

                  <Link
                    href="/solutions/wooden-boxes-crates"
                    onClick={() => handleNavClick("/solutions/wooden-boxes-crates")}
                    className="group flex items-start space-x-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                      <ShieldCheck className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block truncate">
                        Wooden Boxes &amp; Crates
                      </span>
                      <p className="text-xs text-gray-500 leading-snug line-clamp-1 mt-0.5">
                        Custom heavy timber seaworthy export crates &amp; skids
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/solutions/pallet-collars"
                    onClick={() => handleNavClick("/solutions/pallet-collars")}
                    className="group flex items-start space-x-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                      <Boxes className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block truncate">
                        Hinged Pallet Collars
                      </span>
                      <p className="text-xs text-gray-500 leading-snug line-clamp-1 mt-0.5">
                        Folding wooden collars converting pallets to bulk boxes
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/solutions/compressed-sawdust-wood-blocks"
                    onClick={() => handleNavClick("/solutions/compressed-sawdust-wood-blocks")}
                    className="group flex items-start space-x-3 p-2.5 rounded-xl hover:bg-emerald-50/70 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                      <Recycle className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-sm font-bold text-[#002b49] group-hover:text-emerald-700 transition-colors truncate">
                          Compressed Sawdust Blocks
                        </span>
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800">
                          100% Recycled
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 leading-snug line-clamp-1 mt-0.5">
                        Eco-friendly nail-holding corner blocks from wood waste
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/solutions/heat-treatment"
                    onClick={() => handleNavClick("/solutions/heat-treatment")}
                    className="group flex items-start space-x-3 p-2.5 rounded-xl hover:bg-amber-50/70 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                      <Flame className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-sm font-bold text-[#002b49] group-hover:text-amber-600 transition-colors truncate">
                          ISPM 15 Heat Treatment
                        </span>
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-800">
                          Certified HT
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 leading-snug line-clamp-1 mt-0.5">
                        On-site thermal kilns heating core timber to 56°C
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/sustainability#pallet-pooling"
                    onClick={() => handleNavClick("/sustainability#pallet-pooling")}
                    className="group flex items-start space-x-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                      <RotateCcw className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block truncate">
                        Pallet Pooling &amp; Repair
                      </span>
                      <p className="text-xs text-gray-500 leading-snug line-clamp-1 mt-0.5">
                        Closed-loop exchange network extending asset lifespan
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Column 3: Qatar Manufacturing Showcase Card */}
                <div className="col-span-4 pl-4 border-l border-gray-100 flex flex-col justify-between">
                  <div className="bg-gradient-to-br from-[#001f35] via-[#002b49] to-[#003865] rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-[#0099e5]/10 rounded-bl-full pointer-events-none"></div>

                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#0099e5]/25 text-[#0099e5] border border-[#0099e5]/40">
                        Made in Qatar 🇶🇦
                      </span>
                      <span className="text-xs font-semibold text-emerald-400">
                        ICV Certified
                      </span>
                    </div>

                    <h4 className="text-base font-black text-white tracking-tight mb-1">
                      Birkat Al-Awamer Plant
                    </h4>
                    <p className="text-xs text-blue-200/90 leading-relaxed mb-4">
                      High-capacity automated nailing lines, certified ISPM 15 thermal chambers, and circular wood recycling in Zone 91, Al Wukair.
                    </p>

                    <div className="border-t border-blue-900/80 pt-3 space-y-1.5 text-xs text-gray-300">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Factory Manager:</span>
                        <span className="font-bold text-white">Eng. Maher Marjy</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Direct WhatsApp:</span>
                        <span className="font-bold text-emerald-400">+974 5119 1223</span>
                      </div>
                    </div>

                    <div className="pt-4 mt-2">
                      <Link
                        href="/contact"
                        onClick={closeDropdown}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#0099e5] hover:bg-[#0077b6] text-white text-xs font-bold transition-all text-center block shadow-sm"
                      >
                        Request Quote / Factory Visit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. CONSULTING MEGA MENU */}
        {activeDropdown === "consulting" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-white/98 backdrop-blur-xl border-b border-gray-200/90 shadow-2xl py-6 px-4 sm:px-6 lg:px-8 xl:px-12 z-50 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-5 transition-all duration-200"
            onMouseEnter={() => handleMouseEnter("consulting")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full max-w-[1600px] mx-auto">
              {/* Header Title & Link */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-gray-100">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#002b49]">
                    Strategic Materials Handling Advisory • Doha, Qatar
                  </h3>
                </div>
                <Link
                  href="/consulting"
                  onClick={() => handleNavClick("/consulting")}
                  className="text-xs font-bold text-[#0099e5] hover:text-[#002b49] flex items-center group transition-colors"
                >
                  <span>Explore Consulting Overview</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-12 gap-8">
                {/* Column 1: Analysis No-Cure No-Pay */}
                <div className="col-span-5 space-y-2">
                  <div className="flex items-center space-x-2 px-2 mb-1">
                    <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                      Guaranteed 4% Savings
                    </span>
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#002b49]">
                      Analysis – No-Cure-No-Pay
                    </h4>
                  </div>
                  <p className="text-xs text-gray-500 px-2 leading-relaxed mb-3">
                    Discover your true materials handling costs. We present a guaranteed plan to improve TCO – guaranteed 4% savings or pay nothing!
                  </p>

                  <div className="space-y-1">
                    <Link
                      href="/consulting/no-cure-no-pay"
                      onClick={() => handleNavClick("/consulting/no-cure-no-pay")}
                      className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-emerald-50/60 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <Sliders className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold text-[#002b49] group-hover:text-emerald-700 transition-colors block">
                          Handling Materials Design Analysis
                        </span>
                        <p className="text-[11px] text-gray-500 line-clamp-1">
                          Equipment fit, forklift compatibility &amp; load safety
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/consulting/no-cure-no-pay"
                      onClick={() => handleNavClick("/consulting/no-cure-no-pay")}
                      className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-emerald-50/60 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <Search className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold text-[#002b49] group-hover:text-emerald-700 transition-colors block">
                          Transparency Analysis (True Spend Audit)
                        </span>
                        <p className="text-[11px] text-gray-500 line-clamp-1">
                          Full cost breakdown eliminating unnecessary markup
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/consulting/no-cure-no-pay"
                      onClick={() => handleNavClick("/consulting/no-cure-no-pay")}
                      className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-emerald-50/60 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <Leaf className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold text-[#002b49] group-hover:text-emerald-700 transition-colors block">
                          Sustainability &amp; CO2 Reduction
                        </span>
                        <p className="text-[11px] text-gray-500 line-clamp-1">
                          Responsible FSC sourcing and circular recycling loops
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/consulting/no-cure-no-pay"
                      onClick={() => handleNavClick("/consulting/no-cure-no-pay")}
                      className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-emerald-50/60 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold text-[#002b49] group-hover:text-emerald-700 transition-colors block">
                          Tender Consultant Support (20+ Years)
                        </span>
                        <p className="text-[11px] text-gray-500 line-clamp-1">
                          Procurement RFP optimization &amp; contract assistance
                        </p>
                      </div>
                    </Link>
                  </div>

                  <div className="pt-2 px-2">
                    <Link
                      href="/consulting/no-cure-no-pay"
                      onClick={() => handleNavClick("/consulting/no-cure-no-pay")}
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center"
                    >
                      <span>Explore No-Cure-No-Pay Details</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>

                {/* Column 2: Handling Materials Consulting */}
                <div className="col-span-4 border-l border-gray-100 pl-6 space-y-2">
                  <div className="flex items-center space-x-2 px-2 mb-1">
                    <span className="bg-blue-50 text-[#0099e5] text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-200">
                      2 Strategic Models
                    </span>
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#002b49]">
                      Materials Consulting
                    </h4>
                  </div>
                  <p className="text-xs text-gray-500 px-2 leading-relaxed mb-3">
                    Choose the partnership model that best suits your operational governance and scale.
                  </p>

                  <div className="space-y-1">
                    <Link
                      href="/consulting/material-handling"
                      onClick={() => handleNavClick("/consulting/material-handling")}
                      className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-blue-50/70 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <Handshake className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block">
                          Model 1: Partner with AWMPC
                        </span>
                        <p className="text-[11px] text-gray-500 line-clamp-1">
                          Full manufacturing &amp; supply with zero analysis fee
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/consulting/material-handling"
                      onClick={() => handleNavClick("/consulting/material-handling")}
                      className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-blue-50/70 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block">
                          Model 2: Arms-Length Expert Consulting
                        </span>
                        <p className="text-[11px] text-gray-500 line-clamp-1">
                          Independent advisory with complete vendor autonomy
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/consulting/material-handling"
                      onClick={() => handleNavClick("/consulting/material-handling")}
                      className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-blue-50/70 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <RefreshCw className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block">
                          Sustainable Logistics &amp; Re-design
                        </span>
                        <p className="text-[11px] text-gray-500 line-clamp-1">
                          Value chain improvement &amp; closed-loop pooling
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/consulting/material-handling"
                      onClick={() => handleNavClick("/consulting/material-handling")}
                      className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-blue-50/70 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block">
                          Supply Chain Gen 5 Automation
                        </span>
                        <p className="text-[11px] text-gray-500 line-clamp-1">
                          Digital pallet tracking &amp; automated warehouse AGVs
                        </p>
                      </div>
                    </Link>
                  </div>

                  <div className="pt-2 px-2">
                    <Link
                      href="/consulting/material-handling"
                      onClick={() => handleNavClick("/consulting/material-handling")}
                      className="text-xs font-bold text-[#0099e5] hover:text-[#002b49] inline-flex items-center"
                    >
                      <span>Explore Advisory Models</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>

                {/* Column 3: CEO Quote & Direct Audit Booking */}
                <div className="col-span-3 border-l border-gray-100 pl-6 flex flex-col justify-between">
                  <div className="bg-gradient-to-br from-blue-50/60 to-white rounded-2xl p-5 border border-blue-100 shadow-xs relative">
                    <Quote className="w-6 h-6 text-[#0099e5]/40 mb-2" />
                    <p className="text-xs text-gray-700 italic leading-relaxed mb-3">
                      &ldquo;The main reason why clients are reluctant is fear that analyses won&apos;t yield tangible results. Therefore, we provide a No-Cure-No-Pay proposition.&rdquo;
                    </p>
                    <div className="border-t border-blue-100/80 pt-2">
                      <span className="text-xs font-black text-[#002b49] block">
                        ANTONIO ROSTIROLLA
                      </span>
                      <span className="text-[10px] font-bold text-gray-500 uppercase">
                        CEO, AWMPC - Qatar
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4">
                    <Link
                      href="/consulting/no-cure-no-pay#audit-form"
                      onClick={() => handleNavClick("/consulting/no-cure-no-pay#audit-form")}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#002b49] hover:bg-[#0099e5] text-white text-xs font-bold transition-all text-center block shadow-sm"
                    >
                      Book No-Cure-No-Pay Audit
                    </Link>
                    <a
                      href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20would%20like%20to%20inquire%20about%20Materials%20Consulting"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2 px-3 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-600 hover:text-white border border-emerald-200 text-xs font-bold transition-all text-center block"
                    >
                      WhatsApp: +974 5119 1223
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. INDUSTRIES MEGA MENU */}
        {activeDropdown === "industries" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-white/98 backdrop-blur-xl border-b border-gray-200/90 shadow-2xl py-6 px-4 sm:px-6 lg:px-8 xl:px-12 z-50 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-5 transition-all duration-200"
            onMouseEnter={() => handleMouseEnter("industries")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full max-w-[1600px] mx-auto">
              {/* Header Title & Link */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-gray-100">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0099e5]"></span>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#002b49]">
                    Packaging Engineered for Critical Industrial Sectors • Qatar
                  </h3>
                </div>
                <Link
                  href="/industries"
                  onClick={() => handleNavClick("/industries")}
                  className="text-xs font-bold text-[#0099e5] hover:text-[#002b49] flex items-center group transition-colors"
                >
                  <span>Explore All Sectors</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-4 gap-6">
                {/* 1. Oil & Gas */}
                <Link
                  href="/industries#oil-gas"
                  onClick={() => handleNavClick("/industries#oil-gas")}
                  className="group bg-gradient-to-b from-gray-50/70 to-white hover:from-amber-50/50 hover:to-white p-5 rounded-2xl border border-gray-200/80 hover:border-amber-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <Flame className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#002b49] group-hover:text-amber-700 transition-colors">
                        Oil &amp; Gas / Petrochemicals
                      </h4>
                      <p className="text-[11px] font-semibold text-gray-400 mt-0.5">
                        Ras Laffan, Mesaieed &amp; Offshore
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Heavy-duty timber crates, drum pallets, and ISPM 15 certified platforms engineered for extreme industrial environments.
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-gray-100 flex items-center text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform">
                    <span>Explore Oil &amp; Gas</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>

                {/* 2. Construction */}
                <Link
                  href="/industries#construction"
                  onClick={() => handleNavClick("/industries#construction")}
                  className="group bg-gradient-to-b from-gray-50/70 to-white hover:from-blue-50/50 hover:to-white p-5 rounded-2xl border border-gray-200/80 hover:border-blue-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0099e5] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                        Construction &amp; Infrastructure
                      </h4>
                      <p className="text-[11px] font-semibold text-gray-400 mt-0.5">
                        Qatar National Vision 2030
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Reinforced precast transport frames, heavy timber skids, and durable platforms for large-scale mega-projects.
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-gray-100 flex items-center text-xs font-bold text-[#0099e5] group-hover:translate-x-1 transition-transform">
                    <span>Explore Construction</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>

                {/* 3. Manufacturing */}
                <Link
                  href="/industries#manufacturing"
                  onClick={() => handleNavClick("/industries#manufacturing")}
                  className="group bg-gradient-to-b from-gray-50/70 to-white hover:from-purple-50/50 hover:to-white p-5 rounded-2xl border border-gray-200/80 hover:border-purple-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <Factory className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#002b49] group-hover:text-purple-700 transition-colors">
                        Manufacturing &amp; Metals
                      </h4>
                      <p className="text-[11px] font-semibold text-gray-400 mt-0.5">
                        Aluminium, Cables &amp; Machinery
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Custom heavy steel pallets, stillages, and machinery crating engineered for high-tonnage industrial payloads.
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-gray-100 flex items-center text-xs font-bold text-purple-700 group-hover:translate-x-1 transition-transform">
                    <span>Explore Manufacturing</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>

                {/* 4. Logistics & Ports */}
                <Link
                  href="/industries#logistics"
                  onClick={() => handleNavClick("/industries#logistics")}
                  className="group bg-gradient-to-b from-gray-50/70 to-white hover:from-emerald-50/50 hover:to-white p-5 rounded-2xl border border-gray-200/80 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#002b49] group-hover:text-emerald-700 transition-colors">
                        Logistics, Ports &amp; Food
                      </h4>
                      <p className="text-[11px] font-semibold text-gray-400 mt-0.5">
                        Hamad Port &amp; Cold-Chain
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Seaworthy export packaging, air freight platforms, and hygienic food-grade pallets for global distribution loops.
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-gray-100 flex items-center text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                    <span>Explore Logistics</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 4. SUSTAINABILITY MEGA MENU */}
        {activeDropdown === "sustainability" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-white/98 backdrop-blur-xl border-b border-gray-200/90 shadow-2xl py-6 px-4 sm:px-6 lg:px-8 xl:px-12 z-50 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-5 transition-all duration-200"
            onMouseEnter={() => handleMouseEnter("sustainability")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full max-w-[1600px] mx-auto">
              {/* Header Title & Link */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-gray-100">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#002b49]">
                    Circular Resource Management • Waste to Usable Product
                  </h3>
                </div>
                <Link
                  href="/sustainability"
                  onClick={() => handleNavClick("/sustainability")}
                  className="text-xs font-bold text-[#0099e5] hover:text-[#002b49] flex items-center group transition-colors"
                >
                  <span>Explore Sustainability Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-5">
                <Link
                  href="/sustainability#waste-to-product"
                  onClick={() => handleNavClick("/sustainability#waste-to-product")}
                  className="group p-4 rounded-2xl border border-gray-200/80 hover:border-emerald-300 hover:bg-emerald-50/40 transition-all flex items-start space-x-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Recycle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#002b49] group-hover:text-emerald-700 transition-colors">
                      Waste to Usable Product
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      Our pioneering circular initiative converting industrial wood scraps into high-density compressed pallet blocks.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/sustainability#compressed-blocks"
                  onClick={() => handleNavClick("/sustainability#compressed-blocks")}
                  className="group p-4 rounded-2xl border border-gray-200/80 hover:border-teal-300 hover:bg-teal-50/40 transition-all flex items-start space-x-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#002b49] group-hover:text-teal-700 transition-colors">
                      Compressed Sawdust Blocks
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      Eco-friendly, nail-holding pallet corner blocks engineered from 100% recycled wood waste.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/sustainability#pallet-pooling"
                  onClick={() => handleNavClick("/sustainability#pallet-pooling")}
                  className="group p-4 rounded-2xl border border-gray-200/80 hover:border-blue-300 hover:bg-blue-50/40 transition-all flex items-start space-x-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0099e5] flex items-center justify-center shrink-0 group-hover:bg-[#002b49] group-hover:text-white transition-colors">
                    <RotateCcw className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                      Closed-Loop Pallet Pooling
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      Extending pallet lifecycles across Qatari distribution networks through inspection, sorting &amp; repair loops.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/sustainability#fsc-timber"
                  onClick={() => handleNavClick("/sustainability#fsc-timber")}
                  className="group p-4 rounded-2xl border border-gray-200/80 hover:border-green-300 hover:bg-green-50/40 transition-all flex items-start space-x-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-50 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-green-700 group-hover:text-white transition-colors">
                    <TreePine className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#002b49] group-hover:text-green-800 transition-colors">
                      FSC® Certified Sourcing
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      Strict adherence to internationally certified sustainable forest management and verified legal chain of custody.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/sustainability#icv"
                  onClick={() => handleNavClick("/sustainability#icv")}
                  className="group p-4 rounded-2xl border border-gray-200/80 hover:border-amber-300 hover:bg-amber-50/40 transition-all flex items-start space-x-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#002b49] group-hover:text-amber-700 transition-colors">
                      In-Country Value (ICV)
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      Certified Qatari In-Country Value score supporting local industrial self-reliance and the Qatar Vision 2030.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/sustainability#iso14001"
                  onClick={() => handleNavClick("/sustainability#iso14001")}
                  className="group p-4 rounded-2xl border border-gray-200/80 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all flex items-start space-x-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#002b49] group-hover:text-indigo-700 transition-colors">
                      ISO 14001 Environmental Governance
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      Certified environmental management minimizing carbon footprint and optimizing industrial energy consumption.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 5. ISPM 15 & ENGINEERING MEGA MENU */}
        {activeDropdown === "engineering" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-white/98 backdrop-blur-xl border-b border-gray-200/90 shadow-2xl py-6 px-4 sm:px-6 lg:px-8 xl:px-12 z-50 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-5 transition-all duration-200"
            onMouseEnter={() => handleMouseEnter("engineering")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full max-w-[1600px] mx-auto">
              {/* Header Title & Link */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-gray-100">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#002b49]">
                    Packaging Engineering, Testing &amp; ISPM 15 Standards
                  </h3>
                </div>
                <Link
                  href="/engineering"
                  onClick={() => handleNavClick("/engineering")}
                  className="text-xs font-bold text-[#0099e5] hover:text-[#002b49] flex items-center group transition-colors"
                >
                  <span>Explore Engineering Services</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-4 gap-6">
                <Link
                  href="/engineering#ispm15"
                  onClick={() => handleNavClick("/engineering#ispm15")}
                  className="group bg-gradient-to-b from-gray-50/70 to-white hover:from-amber-50/50 hover:to-white p-5 rounded-2xl border border-gray-200/80 hover:border-amber-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <Flame className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#002b49] group-hover:text-amber-700 transition-colors">
                        Certified ISPM 15 Heat Treatment
                      </h4>
                      <p className="text-[11px] font-semibold text-gray-400 mt-0.5">
                        Official Qatar IPPC HT Seal
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      On-site thermal kilns heating core timber to 56°C for 30 minutes, certified for global phytosanitary export.
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-gray-100 flex items-center text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform">
                    <span>Explore ISPM 15</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>

                <Link
                  href="/engineering#cad-design"
                  onClick={() => handleNavClick("/engineering#cad-design")}
                  className="group bg-gradient-to-b from-gray-50/70 to-white hover:from-blue-50/50 hover:to-white p-5 rounded-2xl border border-gray-200/80 hover:border-blue-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0099e5] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <Sliders className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                        Custom Pallet CAD Design
                      </h4>
                      <p className="text-[11px] font-semibold text-gray-400 mt-0.5">
                        3D Parametric Modeling
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Optimized stringer dimensions, deckboard spacing, and container stuffing software modeling for zero cargo movement.
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-gray-100 flex items-center text-xs font-bold text-[#0099e5] group-hover:translate-x-1 transition-transform">
                    <span>Explore CAD Design</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>

                <Link
                  href="/engineering#load-testing"
                  onClick={() => handleNavClick("/engineering#load-testing")}
                  className="group bg-gradient-to-b from-gray-50/70 to-white hover:from-indigo-50/50 hover:to-white p-5 rounded-2xl border border-gray-200/80 hover:border-indigo-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#002b49] group-hover:text-indigo-700 transition-colors">
                        Load Capacity Testing
                      </h4>
                      <p className="text-[11px] font-semibold text-gray-400 mt-0.5">
                        Static, Dynamic &amp; Racking
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Certified stress tests verifying structural integrity for heavy payloads exceeding 4,000+ kg.
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-gray-100 flex items-center text-xs font-bold text-indigo-700 group-hover:translate-x-1 transition-transform">
                    <span>Explore Testing</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>

                <Link
                  href="/engineering#iso-standards"
                  onClick={() => handleNavClick("/engineering#iso-standards")}
                  className="group bg-gradient-to-b from-gray-50/70 to-white hover:from-emerald-50/50 hover:to-white p-5 rounded-2xl border border-gray-200/80 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#002b49] group-hover:text-emerald-700 transition-colors">
                        ISO 9001 &amp; 45001 Standards
                      </h4>
                      <p className="text-[11px] font-semibold text-gray-400 mt-0.5">
                        International Factory Governance
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Certified quality management and occupational health and safety protecting our factory workers and client equipment.
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-gray-100 flex items-center text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                    <span>Explore ISO Standards</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 6. NEWS & INSIGHTS MEGA MENU */}
        {activeDropdown === "insights" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-white/98 backdrop-blur-xl border-b border-gray-200/90 shadow-2xl py-6 px-4 sm:px-6 lg:px-8 xl:px-12 z-50 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-5 transition-all duration-200"
            onMouseEnter={() => handleMouseEnter("insights")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full max-w-[1600px] mx-auto">
              {/* Header Title & Link */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-gray-100">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0099e5]"></span>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#002b49]">
                    News, Case Studies &amp; Technical Export Insights
                  </h3>
                </div>
                <Link
                  href="/insights"
                  onClick={() => handleNavClick("/insights")}
                  className="text-xs font-bold text-[#0099e5] hover:text-[#002b49] flex items-center group transition-colors"
                >
                  <span>Explore All Insights</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <Link
                  href="/insights#news"
                  onClick={() => handleNavClick("/insights#news")}
                  className="group bg-gradient-to-b from-gray-50/70 to-white hover:from-blue-50/50 hover:to-white p-5 rounded-2xl border border-gray-200/80 hover:border-blue-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0099e5] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <Factory className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                        Factory Expansion &amp; Press
                      </h4>
                      <p className="text-[11px] font-semibold text-gray-400 mt-0.5">
                        AWMPACK Birkat Al-Awamer
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Updates on AWMPACK&apos;s manufacturing capacity, new automated assembly lines, and local corporate achievements.
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-gray-100 flex items-center text-xs font-bold text-[#0099e5] group-hover:translate-x-1 transition-transform">
                    <span>Read Press Updates</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>

                <Link
                  href="/insights#projects"
                  onClick={() => handleNavClick("/insights#projects")}
                  className="group bg-gradient-to-b from-gray-50/70 to-white hover:from-emerald-50/50 hover:to-white p-5 rounded-2xl border border-gray-200/80 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#002b49] group-hover:text-emerald-700 transition-colors">
                        Client Case Studies
                      </h4>
                      <p className="text-[11px] font-semibold text-gray-400 mt-0.5">
                        Supply Chain ROI Documentation
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Documented supply chain cost savings and damage reduction for major Qatari oil &amp; gas, infrastructure and retail clients.
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-gray-100 flex items-center text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                    <span>View Case Studies</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>

                <Link
                  href="/insights#guides"
                  onClick={() => handleNavClick("/insights#guides")}
                  className="group bg-gradient-to-b from-gray-50/70 to-white hover:from-amber-50/50 hover:to-white p-5 rounded-2xl border border-gray-200/80 hover:border-amber-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#002b49] group-hover:text-amber-700 transition-colors">
                        ISPM 15 &amp; Export Guidelines
                      </h4>
                      <p className="text-[11px] font-semibold text-gray-400 mt-0.5">
                        Global Trade Phytosanitary Rules
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Essential regulatory guidelines on international export requirements for wood packaging entering the EU, US, and GCC.
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-gray-100 flex items-center text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform">
                    <span>Read Export Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 7. ABOUT US MEGA MENU */}
        {activeDropdown === "about" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-white/98 backdrop-blur-xl border-b border-gray-200/90 shadow-2xl py-6 px-4 sm:px-6 lg:px-8 xl:px-12 z-50 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-5 transition-all duration-200"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full max-w-[1600px] mx-auto">
              {/* Header Title & Link */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-gray-100">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0099e5]"></span>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#002b49]">
                    Al Waad Manufacturing Packaging Company (AWMPC) • State of Qatar
                  </h3>
                </div>
                <Link
                  href="/about"
                  onClick={() => handleNavClick("/about")}
                  className="text-xs font-bold text-[#0099e5] hover:text-[#002b49] flex items-center group transition-colors"
                >
                  <span>Explore About Us</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-12 gap-8">
                {/* Col 1: About AWMPACK */}
                <div className="col-span-3 space-y-2">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-2 block mb-1">
                    Company Profile
                  </span>
                  <div className="space-y-1">
                    <Link
                      href="/about#profile"
                      onClick={() => handleNavClick("/about#profile")}
                      className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-blue-50/70 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block">
                          Company Profile
                        </span>
                        <p className="text-[11px] text-gray-500">History &amp; Qatari leadership</p>
                      </div>
                    </Link>

                    <Link
                      href="/about#mission-vision"
                      onClick={() => handleNavClick("/about#mission-vision")}
                      className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-blue-50/70 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block">
                          Mission &amp; Vision
                        </span>
                        <p className="text-[11px] text-gray-500">Circularity &amp; zero waste</p>
                      </div>
                    </Link>

                    <Link
                      href="/about#made-in-qatar"
                      onClick={() => handleNavClick("/about#made-in-qatar")}
                      className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-emerald-50/70 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-emerald-700 group-hover:text-emerald-900 transition-colors block">
                          Made in Qatar 🇶🇦
                        </span>
                        <p className="text-[11px] text-gray-500">Supporting Vision 2030</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Col 2: Facility & Location */}
                <div className="col-span-3 border-l border-gray-100 pl-4 space-y-2">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-2 block mb-1">
                    Facility &amp; Location
                  </span>
                  <div className="space-y-1">
                    <Link
                      href="/about#facility"
                      onClick={() => handleNavClick("/about#facility")}
                      className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-blue-50/70 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <Factory className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block">
                          Birkat Al-Awamer Plant
                        </span>
                        <p className="text-[11px] text-gray-500">Zone 91, Street 3012</p>
                      </div>
                    </Link>

                    <Link
                      href="/about#capacity"
                      onClick={() => handleNavClick("/about#capacity")}
                      className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-blue-50/70 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block">
                          Production Capacity
                        </span>
                        <p className="text-[11px] text-gray-500">Automated nailing lines</p>
                      </div>
                    </Link>

                    <Link
                      href="/contact#map"
                      onClick={() => handleNavClick("/contact#map")}
                      className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-blue-50/70 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block">
                          Factory Map &amp; Access
                        </span>
                        <p className="text-[11px] text-gray-500">Directions &amp; truck access</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Col 3: Quality & Certifications */}
                <div className="col-span-3 border-l border-gray-100 pl-4 space-y-2">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-2 block mb-1">
                    Quality &amp; Certifications
                  </span>
                  <div className="space-y-1">
                    <Link
                      href="/about#certifications"
                      onClick={() => handleNavClick("/about#certifications")}
                      className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-blue-50/70 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0099e5] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#002b49] group-hover:text-[#0099e5] transition-colors block">
                          ISO 9001 / 14001 / 45001
                        </span>
                        <p className="text-[11px] text-gray-500">Triple certified management</p>
                      </div>
                    </Link>

                    <Link
                      href="/about#icv"
                      onClick={() => handleNavClick("/about#icv")}
                      className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-amber-50/70 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-amber-700 group-hover:text-amber-900 transition-colors block">
                          In-Country Value (ICV)
                        </span>
                        <p className="text-[11px] text-gray-500">Qatar Tawteen compliant</p>
                      </div>
                    </Link>

                    <Link
                      href="/engineering#ispm15"
                      onClick={() => handleNavClick("/engineering#ispm15")}
                      className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-amber-50/70 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <Flame className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-amber-700 group-hover:text-amber-900 transition-colors block">
                          ISPM 15 Certified
                        </span>
                        <p className="text-[11px] text-gray-500">IPPC thermal stamp</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Col 4: Direct Factory Contact Card */}
                <div className="col-span-3 border-l border-gray-100 pl-4 flex flex-col justify-between">
                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200/80 space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0099e5] block">
                      Direct Factory Management
                    </span>
                    <div>
                      <h5 className="font-bold text-[#002b49] text-sm">
                        Eng. Maher Marjy
                      </h5>
                      <p className="text-xs text-gray-500">Factory Manager</p>
                    </div>

                    <div className="space-y-1.5 text-xs text-gray-600 pt-1 border-t border-gray-200/60">
                      <p className="font-bold text-[#0099e5] flex items-center">
                        <Phone className="w-3.5 h-3.5 mr-1 shrink-0" />
                        +974 5119 1223
                      </p>
                      <p className="text-gray-700 flex items-center">
                        <Phone className="w-3.5 h-3.5 mr-1 shrink-0 text-gray-400" />
                        +974 4039 4581
                      </p>
                      <p className="text-gray-500 flex items-center truncate">
                        <Mail className="w-3.5 h-3.5 mr-1 shrink-0 text-gray-400" />
                        maher@awmpack.com
                      </p>
                    </div>

                    <div className="pt-2">
                      <a
                        href="https://wa.me/97451191223?text=Hello%20Eng.%20Maher,%20I%20would%20like%20to%20discuss%20packaging%20at%20AWMPACK"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all text-center block shadow-xs"
                      >
                        WhatsApp Factory Manager
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className={`${isZoomedOrMobile ? "block" : "xl:hidden"} bg-white border-t border-gray-200 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl`}>
            <div className="space-y-4">
              <div>
                <p className="font-black text-xs uppercase tracking-wider text-gray-400 mb-2">
                  AWMPACK PRODUCTS & SERVICES
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <Link
                    href="/solutions/awmpc-pallets"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#0099e5] font-bold py-1"
                  >
                    ★ AWMPC Pallets
                  </Link>
                  <Link
                    href="/solutions/industrial-pallets"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#002b49] hover:text-[#0099e5] py-1 font-semibold"
                  >
                    Industrial Pallets
                  </Link>
                  <Link
                    href="/solutions/used-pallets"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#002b49] hover:text-[#0099e5] py-1"
                  >
                    Used Pallets
                  </Link>
                  <Link
                    href="/solutions/wooden-boxes-crates"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#002b49] hover:text-[#0099e5] py-1"
                  >
                    Custom Crates
                  </Link>
                  <Link
                    href="/solutions/compressed-sawdust-wood-blocks"
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
                    ISPM 15 Treatment
                  </Link>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-3">
                <p className="font-black text-xs uppercase tracking-wider text-[#0099e5] mb-2 flex items-center justify-between">
                  <span>CONSULTING &amp; COST AUDIT</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">4% Savings</span>
                </p>
                <div className="grid grid-cols-1 gap-1.5 text-sm">
                  <Link
                    href="/consulting/no-cure-no-pay"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#002b49] hover:text-[#0099e5] py-1 font-bold flex items-center justify-between"
                  >
                    <span>→ Analysis No-Cure No-Pay</span>
                    <span className="text-xs text-emerald-600 font-semibold">Guaranteed ROI</span>
                  </Link>
                  <Link
                    href="/consulting/material-handling"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#002b49] hover:text-[#0099e5] py-1 font-semibold"
                  >
                    → Handling Materials Consulting (2 Models)
                  </Link>
                  <Link
                    href="/consulting"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs text-[#0099e5] hover:underline font-bold pt-0.5"
                  >
                    View Consulting Hub &rarr;
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
                    href="/gallery"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[#002b49] hover:text-[#0099e5]"
                  >
                    Factory Gallery
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