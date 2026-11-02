"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  Globe2,
  Leaf,
  Package,
  Truck,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building2,
  Award,
  Zap,
  MapPin,
  Maximize2,
  Flame,
  Sun,
  Recycle,
  Trees,
} from "lucide-react";

interface NefabOfficialHomeProps {
  onOpenContactWithTopic: (topic: string) => void;
}

export default function NefabOfficialHome({ onOpenContactWithTopic }: NefabOfficialHomeProps) {
  const [activeIndustrySlide, setActiveIndustrySlide] = useState(0);

  const industries = [
    {
      id: "battery",
      title: "LiB & E-Mobility",
      desc: "UN-certified dangerous goods packaging engineered for lithium-ion battery cells, modules, and full EV packs.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop",
      tag: "Electric Vehicles",
    },
    {
      id: "datacom",
      title: "Datacom & Cloud",
      desc: "Server rack protection, high-shock mitigation, and 100% foam-free recyclable FiberFlute™ solutions.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      tag: "Cloud Infrastructure",
    },
    {
      id: "telecom",
      title: "Telecom",
      desc: "Weatherproof IP54 packaging for 5G radio base stations, antennas, and network hardware.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
      tag: "5G Infrastructure",
    },
    {
      id: "energy",
      title: "Energy & Grid",
      desc: "Heavy-duty project cargo crating for massive power transformers and wind turbine components.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
      tag: "Renewable Power",
    },
    {
      id: "medtech",
      title: "Healthcare & MedTech",
      desc: "Cleanroom precision packaging and shock-damped transit systems for medical devices.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
      tag: "Precision Healthcare",
    },
    {
      id: "semicon",
      title: "Semiconductors",
      desc: "Electrostatic discharge (ESD) safe packaging and zero-vibration containers for silicon wafers.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      tag: "Nanometer Precision",
    },
  ];

  return (
    <div className="w-full text-[#0c2340]">
      {/* =========================================================================
          SECTION 1: HERO (City / Harbor Light Trails at Dusk) + 4 Offerings List
          ========================================================================= */}
      <section className="relative w-full">
        {/* Hero Image Banner */}
        <div className="relative w-full h-[520px] sm:h-[600px] lg:h-[680px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop"
            alt="Nefab global logistics harbor with light trails"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>

          {/* Hero Typography */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                  Saving resources in supply chains,
                  <span className="block text-gray-200 font-semibold text-2xl sm:text-4xl lg:text-5xl mt-2">
                    for a better tomorrow.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars White Section Below Hero */}
        <div className="bg-white py-14 sm:py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg sm:text-xl font-bold text-[#0c2340] max-w-3xl mb-10 leading-snug">
              We save resources in supply chains, for a better tomorrow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 1. Packaging Solutions */}
              <div className="space-y-2 group">
                <Link
                  href="/solutions#packaging"
                  className="text-base sm:text-lg font-extrabold text-[#0c2340] group-hover:text-[#eb6608] transition-colors flex items-center"
                >
                  <span>Packaging Solutions</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 text-[#eb6608] group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Customized packaging solutions engineered to reduce total costs and environmental impact across international shipments.
                </p>
                <Link
                  href="/solutions#packaging"
                  className="inline-flex items-center text-xs font-bold text-[#eb6608] hover:text-[#d45600] pt-1"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </div>

              {/* 2. Logistics Services */}
              <div className="space-y-2 group">
                <Link
                  href="/solutions#logistics"
                  className="text-base sm:text-lg font-extrabold text-[#0c2340] group-hover:text-[#eb6608] transition-colors flex items-center"
                >
                  <span>Logistics Services</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 text-[#eb6608] group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Optimizing supply chains with on-site contract packing, global warehousing, and returnable container pooling loops.
                </p>
                <Link
                  href="/solutions#logistics"
                  className="inline-flex items-center text-xs font-bold text-[#eb6608] hover:text-[#d45600] pt-1"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </div>

              {/* 3. Digital Solutions */}
              <div className="space-y-2 group">
                <Link
                  href="/solutions#digital"
                  className="text-base sm:text-lg font-extrabold text-[#0c2340] group-hover:text-[#eb6608] transition-colors flex items-center"
                >
                  <span>Digital Solutions</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 text-[#eb6608] group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Connecting physical packaging with real-time IoT sensors tracking impact (G-force), tilt, temperature, and GPS.
                </p>
                <Link
                  href="/solutions#digital"
                  className="inline-flex items-center text-xs font-bold text-[#eb6608] hover:text-[#d45600] pt-1"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </div>

              {/* 4. Sustainability */}
              <div className="space-y-2 group">
                <Link
                  href="/sustainability"
                  className="text-base sm:text-lg font-extrabold text-[#0c2340] group-hover:text-[#eb6608] transition-colors flex items-center"
                >
                  <span>Sustainability</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 text-[#eb6608] group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Our commitment to people, circular economy models, and achieving Net-Zero carbon emissions by 2030.
                </p>
                <Link
                  href="/sustainability"
                  className="inline-flex items-center text-xs font-bold text-[#eb6608] hover:text-[#d45600] pt-1"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: "Sustainable packaging solutions for your industry"
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-gray-100" id="industries-carousel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight leading-tight">
              Sustainable packaging solutions for your industry
            </h2>
            <div>
              <Link
                href="/industries"
                className="inline-block bg-[#eb6608] hover:bg-[#d45600] text-white font-bold text-sm px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Find your industry
              </Link>
            </div>
          </div>

          {/* Industry Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.slice(0, 3).map((ind, idx) => (
              <div
                key={ind.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0c2340]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {ind.tag}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-extrabold text-[#0c2340] group-hover:text-[#eb6608] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {ind.desc}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/industries#${ind.id}`}
                      className="inline-flex items-center text-xs font-bold text-[#eb6608] group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore {ind.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Slider Indicator Bar */}
          <div className="mt-8 flex items-center justify-between">
            <div className="w-full max-w-xs h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-[#0c2340] rounded-full"></div>
            </div>
            <Link
              href="/industries"
              className="text-xs font-bold text-[#0c2340] hover:text-[#eb6608] flex items-center"
            >
              <span>View all 8 specialized sectors</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 text-[#eb6608]" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: "Is there untapped potential in your site's packaging?"
          (Full-width worker in warehouse background)
          ========================================================================= */}
      <section className="relative w-full py-28 sm:py-36 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop"
          alt="Packaging engineer conducting site review"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-6 text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Is there untapped potential in your site&apos;s packaging?
            </h2>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              A site-wide packaging review helps eliminate silos, uncover hidden transport costs, and optimize packaging materials across all manufacturing facilities.
            </p>
            <div>
              <button
                onClick={() => onOpenContactWithTopic("Book a Packaging Review")}
                className="bg-[#eb6608] hover:bg-[#d45600] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Book a packaging review
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: "Are you prepared for the PPWR?" (Cargo Container Ship at Sea)
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-gray-100" id="ppwr-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Image: Container Ship at Sea */}
          <div className="relative w-full h-[280px] sm:h-[400px] rounded-3xl overflow-hidden shadow-md mb-8">
            <Image
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1600&auto=format&fit=crop"
              alt="Cargo container ship in ocean"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute top-4 left-4 bg-[#0c2340]/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md backdrop-blur-sm">
              EU PPWR Compliance
            </div>
          </div>

          {/* Text and Button Below */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight">
              Are you prepared for the PPWR?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              European Packaging and Packaging Waste Regulation (PPWR) introduces mandatory void space limits (max 40%), strict recyclability criteria, and reusable transport quotas. Discover how Nefab guides global enterprises to full compliance without logistics disruption.
            </p>
            <div className="pt-2">
              <Link
                href="/sustainability#ppwr"
                className="inline-block bg-[#eb6608] hover:bg-[#d45600] text-white font-bold text-sm px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Read the PPWR guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: "Global Supply & Local Services" (Dark Hands Cradling)
          ========================================================================= */}
      <section className="relative w-full py-28 sm:py-36 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1600&auto=format&fit=crop"
          alt="Hands cradling and protecting"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6 text-white">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Global Supply & Local Services
            </h2>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              With operations in over 39 countries and 145 locations, we combine global packaging engineering standards with local agility and dedicated on-site teams.
            </p>
            <div>
              <Link
                href="/about#locations"
                className="inline-block bg-[#eb6608] hover:bg-[#d45600] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Find your nearest location
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: "With you wherever you are" (Sage Green Map Section)
          ========================================================================= */}
      <section className="py-20 bg-[#a3d9a5] border-b border-[#92c994]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stylized World Map Graphic */}
          <div className="relative w-full h-[240px] sm:h-[360px] bg-white/70 rounded-3xl p-6 sm:p-10 mb-8 border border-white/60 shadow-inner overflow-hidden flex items-center justify-center">
            {/* World Map SVG Representation */}
            <div className="relative w-full h-full max-w-4xl flex items-center justify-center opacity-85">
              <svg viewBox="0 0 1000 500" className="w-full h-full fill-[#0c2340]/25">
                {/* Continents path outline */}
                <path d="M150,120 Q180,80 260,90 T350,150 T280,240 T180,210 Z" />
                <path d="M220,260 Q260,250 300,310 T280,420 T210,380 Z" />
                <path d="M460,90 Q520,70 580,110 T560,200 T470,170 Z" />
                <path d="M460,200 Q530,220 540,310 T490,400 T450,320 Z" />
                <path d="M580,80 Q700,70 820,130 T800,280 T680,240 T580,170 Z" />
                <path d="M750,320 Q840,310 860,390 T760,420 Z" />
              </svg>

              {/* Location Pins */}
              <div className="absolute top-[28%] left-[22%] w-3 h-3 rounded-full bg-[#0c2340] ring-4 ring-white animate-pulse" title="Americas Hub (Dallas, USA)"></div>
              <div className="absolute top-[25%] left-[52%] w-3.5 h-3.5 rounded-full bg-[#eb6608] ring-4 ring-white animate-pulse" title="Global HQ (Jönköping, Sweden)"></div>
              <div className="absolute top-[32%] left-[55%] w-3 h-3 rounded-full bg-[#0c2340] ring-4 ring-white" title="Europe (Germany & France)"></div>
              <div className="absolute top-[35%] left-[78%] w-3 h-3 rounded-full bg-[#0c2340] ring-4 ring-white animate-pulse" title="Asia-Pacific (Shanghai, China)"></div>
              <div className="absolute top-[48%] left-[72%] w-3 h-3 rounded-full bg-[#0c2340] ring-4 ring-white" title="India (Bangalore & Pune)"></div>
              <div className="absolute top-[68%] left-[84%] w-2.5 h-2.5 rounded-full bg-[#0c2340] ring-4 ring-white" title="Australia"></div>
              <div className="absolute top-[58%] left-[27%] w-2.5 h-2.5 rounded-full bg-[#0c2340] ring-4 ring-white" title="Brazil (São Paulo)"></div>
            </div>

            <div className="absolute bottom-4 left-6 bg-[#0c2340] text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
              39 Countries • 145 Global Hubs
            </div>
          </div>

          {/* Heading and Button */}
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight">
              With you wherever you are
            </h2>
            <p className="text-sm sm:text-base text-[#1b3d20] leading-relaxed font-medium">
              Our global footprint ensures synchronized packaging engineering, fast-track local prototyping, and reliable just-in-time manufacturing across Europe, the Americas, and Asia-Pacific.
            </p>
            <div className="pt-2">
              <Link
                href="/about#locations"
                className="inline-block bg-[#eb6608] hover:bg-[#d45600] text-white font-bold text-sm px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Explore our locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: "About us" (Deep Royal Navy Blue with 4 Big Numbers)
          ========================================================================= */}
      <section className="py-24 bg-[#0c2340] text-white relative overflow-hidden" id="about-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              About us
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
              We save resources in supply chains, for a better tomorrow. Since 1949, we have grown into a global leader in engineered transport packaging and logistics services, optimizing customer costs while lowering carbon footprints.
            </p>
          </div>

          {/* 4 Big White Numbers exactly from the screenshot */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto py-6">
            <div className="space-y-1">
              <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                10.3B
              </p>
              <div className="w-8 h-1 bg-[#eb6608] mx-auto my-2 rounded-full"></div>
              <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                SEK Turnover
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                39
              </p>
              <div className="w-8 h-1 bg-[#eb6608] mx-auto my-2 rounded-full"></div>
              <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                Countries
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                145
              </p>
              <div className="w-8 h-1 bg-[#eb6608] mx-auto my-2 rounded-full"></div>
              <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                Locations
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                6,000
              </p>
              <div className="w-8 h-1 bg-[#eb6608] mx-auto my-2 rounded-full"></div>
              <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                Employees
              </p>
            </div>
          </div>

          <div>
            <Link
              href="/about"
              className="inline-block bg-[#eb6608] hover:bg-[#d45600] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Read more about Nefab
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: PORT CRANES LOGISTICS SECTION ("Optimizing your logistics flow")
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-gray-100" id="logistics-flow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Image: Port Shipping Cranes */}
          <div className="relative w-full h-[280px] sm:h-[400px] rounded-3xl overflow-hidden shadow-md mb-8">
            <Image
              src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1600&auto=format&fit=crop"
              alt="Harbor terminal container shipping cranes"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute top-4 left-4 bg-[#0c2340]/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md backdrop-blur-sm">
              Global Supply Chain Logistics
            </div>
          </div>

          {/* Text and Button Below */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight">
              Optimizing your logistics flow
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our contract packaging and logistics services help you streamline operations, eliminate production line bottlenecks, and ensure on-time delivery across domestic and international transit corridors.
            </p>
            <div className="pt-2">
              <Link
                href="/solutions#logistics"
                className="inline-block bg-[#eb6608] hover:bg-[#d45600] text-white font-bold text-sm px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Discover logistics services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: GREEN SUSTAINABILITY (Glass Globe & Floating Hexagons)
          ========================================================================= */}
      <section className="py-20 bg-[#a3d9a5] border-b border-[#92c994]" id="sustainability-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Image: Foliage with Eco Glass Icons */}
          <div className="relative w-full h-[280px] sm:h-[400px] rounded-3xl overflow-hidden shadow-md mb-8">
            <Image
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600&auto=format&fit=crop"
              alt="Sustainable circular packaging with eco icons"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-emerald-950/30 flex items-center justify-center p-6">
              {/* Floating Hexagonal Sustainability Badges */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-white text-center">
                <div className="p-3 sm:p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex flex-col items-center">
                  <Recycle className="w-6 h-6 text-emerald-300 mb-1" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Circularity</span>
                </div>
                <div className="p-3 sm:p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex flex-col items-center">
                  <Sun className="w-6 h-6 text-amber-300 mb-1" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Green Energy</span>
                </div>
                <div className="p-3 sm:p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex flex-col items-center">
                  <Leaf className="w-6 h-6 text-emerald-300 mb-1" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">100% Fiber</span>
                </div>
                <div className="p-3 sm:p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex flex-col items-center">
                  <Trees className="w-6 h-6 text-teal-300 mb-1" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">FSC® Timber</span>
                </div>
              </div>
            </div>
          </div>

          {/* Heading and Button */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight">
              We save resources for a better tomorrow
            </h2>
            <p className="text-sm sm:text-base text-[#1b3d20] leading-relaxed font-medium">
              We are committed to circular packaging systems, phasing out non-recyclable plastic foams with FiberFlute™, and driving deep CO₂ equivalent reductions across our customers&apos; global supply chains.
            </p>
            <div className="pt-2">
              <Link
                href="/sustainability"
                className="inline-block bg-[#eb6608] hover:bg-[#d45600] text-white font-bold text-sm px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Read sustainability report
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: "Solutions" (Modern Illuminated High-Tech Warehouse)
          ========================================================================= */}
      <section className="py-20 bg-white" id="solutions-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight">
              Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Customized multi-material packaging and logistics services tailored to your exact supply chain needs. Engineered to save resources and lower total costs.
            </p>
            <div>
              <Link
                href="/solutions"
                className="inline-block bg-[#eb6608] hover:bg-[#d45600] text-white font-bold text-sm px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                See all solutions
              </Link>
            </div>
          </div>

          {/* High-tech Warehouse Storage Facility */}
          <div className="relative w-full h-[300px] sm:h-[450px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop"
              alt="High-tech automated logistics warehouse facility"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                Nefab Multi-Material Engineering • Packaging Labs • On-Site Contract Operations
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
