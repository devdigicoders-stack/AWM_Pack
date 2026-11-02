"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import GlobalFootprint from "../../components/GlobalFootprint";
import {
  ShieldCheck,
  Award,
  Globe2,
  Users,
  Building2,
  Calendar,
  CheckCircle2,
  Heart,
  TrendingUp,
  Leaf,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Scale,
  FileText,
  MapPin,
} from "lucide-react";

export default function AboutPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Corporate Inquiries");

  const leadershipTeam = [
    {
      name: "Per Nyquist",
      role: "President & Chief Executive Officer (CEO)",
      bio: "Over 20 years of global industrial leadership driving sustainable transformation, customer intimacy, and market expansion across Europe, Americas, and Asia.",
    },
    {
      name: "Karin Ekholm",
      role: "Chief Financial Officer (CFO)",
      bio: "Oversees global fiscal governance, long-term capital allocation, M&A integrations, and sustainability reporting compliance with CSRD.",
    },
    {
      name: "Olivier Delassus",
      role: "Executive Vice President, Packaging Solutions",
      bio: "Leads worldwide multi-material engineering centers, ISTA lab accreditations, and new material innovations such as FiberFlute™.",
    },
    {
      name: "Rui de Oliveira",
      role: "Executive Vice President, Global Logistics Services",
      bio: "Manages on-site contract packing operations, global warehousing networks, and closed-loop pooling container infrastructures.",
    },
  ];

  const acquiredBrands = [
    {
      name: "SIT Packaging",
      year: "2023",
      region: "Americas & Europe",
      specialty: "High-precision thermoformed plastics and returnable cushioning systems.",
    },
    {
      name: "Polyflex",
      year: "2022",
      region: "North America",
      specialty: "Injection molded and polyurethane returnable automotive handling containers.",
    },
    {
      name: "Reflex Packaging",
      year: "2021",
      region: "Global",
      specialty: "Thermoformed cushion engineering and 100% recycled plastic packaging.",
    },
    {
      name: "Speck Corrugated",
      year: "2020",
      region: "Europe",
      specialty: "Heavy-duty triple-wall corrugated export containers and honeycomb pallets.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0c2340] selection:bg-orange-100 selection:text-[#eb6608]">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("About Us Inquiries");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* =========================================================================
            ABOUT HERO
            ========================================================================= */}
        <section className="relative bg-[#0c2340] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop"
              alt="Global Nefab operations port"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <span className="inline-block bg-[#13294b] border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Swedish Industrial Heritage Since 1949
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Saving Resources in Supply Chains, for a Better Tomorrow
              </h1>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
                Founded in 1949 by brothers Sigurd and Lennart Nordgren in Alfta, Sweden, Nefab has grown into a world-leading global partner in sustainable packaging solutions and logistics services.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Big Numbers (Screenshot 5 / Mobile Section 7) */}
        <div className="bg-[#0c2340] border-t border-b border-blue-900/50 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">10.3B</p>
                <div className="w-8 h-1 bg-[#eb6608] mx-auto my-2 rounded-full"></div>
                <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">SEK Turnover</p>
              </div>
              <div>
                <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">39</p>
                <div className="w-8 h-1 bg-[#eb6608] mx-auto my-2 rounded-full"></div>
                <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">Countries</p>
              </div>
              <div>
                <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">145</p>
                <div className="w-8 h-1 bg-[#eb6608] mx-auto my-2 rounded-full"></div>
                <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">Locations</p>
              </div>
              <div>
                <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">6,000</p>
                <div className="w-8 h-1 bg-[#eb6608] mx-auto my-2 rounded-full"></div>
                <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">Employees</p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            ABOUT NEFAB: STRATEGY, POLICIES & ACQUIRED BRANDS
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="strategy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#eb6608]">
                  Our Strategy
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight">
                  Driving Sustainable Customer Value Through Packaging Optimization
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Our strategy is anchored in our purpose: saving resources in supply chains, for a better tomorrow. We partner with multinational corporations across high-tech, battery, automotive, telecom, and healthcare sectors to lower their environmental footprints while simultaneously reducing total logistics costs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-gray-200">
                    <h3 className="text-sm font-bold text-[#0c2340]">Customer Intimacy</h3>
                    <p className="text-xs text-gray-600 mt-1">Dedicated packaging engineering squads operating directly alongside customer manufacturing facilities.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-gray-200">
                    <h3 className="text-sm font-bold text-[#0c2340]">Material Neutrality</h3>
                    <p className="text-xs text-gray-600 mt-1">Unbiased multi-material selection ensuring optimal cost, shock protection, and PPWR compliance.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#edf2f7] p-8 rounded-3xl border border-gray-200/80 space-y-4" id="policies">
                <h3 className="text-lg font-black text-[#0c2340]">Corporate Certifications & Policies</h3>
                <p className="text-xs text-gray-600">Nefab operates under strict certified global quality and environmental standards:</p>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>ISO 9001:</strong> Certified Quality Management System</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>ISO 14001:</strong> Certified Environmental Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>ISO 45001:</strong> Occupational Health & Safety Standard</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>FSC® / PEFC:</strong> Certified Timber Chain of Custody</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>EcoVadis Gold:</strong> Top 5% Global ESG Sustainability Rating</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Acquired Brands */}
            <div className="mt-16 pt-12 border-t border-gray-200" id="brands">
              <h3 className="text-2xl font-black text-[#0c2340] mb-6">Acquired Brands & Family of Companies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {acquiredBrands.map((b) => (
                  <div key={b.name} className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#0c2340]">{b.name}</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-[#0066cc]">
                        {b.year}
                      </span>
                    </div>
                    <p className="text-[11px] font-semibold text-gray-500">{b.region}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{b.specialty}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            LOCATIONS: AMERICAS, ASIA-PACIFIC, EUROPE
            ========================================================================= */}
        <section className="py-20 bg-[#edf2f7] border-b border-gray-200" id="locations">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#eb6608]">
                Global Presence
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
                With You Wherever You Are: 39 Countries, 145 Locations
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Our global footprint ensures synchronized packaging engineering, fast-track local prototyping, and reliable just-in-time manufacturing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Americas */}
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center space-x-2 text-[#0c2340]">
                  <MapPin className="w-5 h-5 text-[#eb6608]" />
                  <h3 className="text-xl font-bold">Americas</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Headquartered in Lewisville (Dallas), TX, with comprehensive manufacturing and testing hubs in San Jose CA, Chicago, Phoenix, Mexico (Guadalajara, Monterrey), and Brazil (São Paulo).
                </p>
                <div className="text-xs text-gray-500 pt-2 space-y-1">
                  <p>• 45+ Production & Logistics Facilities</p>
                  <p>• Dedicated ISTA Testing Lab in Dallas</p>
                  <p>• Serving Datacom, EV, & Aerospace OEMs</p>
                </div>
              </div>

              {/* Europe */}
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center space-x-2 text-[#0c2340]">
                  <MapPin className="w-5 h-5 text-[#eb6608]" />
                  <h3 className="text-xl font-bold">Europe</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Headquartered in Jönköping, Sweden with original heritage manufacturing in Alfta. Extensive operations across Germany, France, Poland, UK, Spain, Italy, and the Netherlands.
                </p>
                <div className="text-xs text-gray-500 pt-2 space-y-1">
                  <p>• 65+ Facilities Across 20 European Nations</p>
                  <p>• Flagship FiberFlute™ & ExPak production</p>
                  <p>• Full PPWR Compliance Advisory Network</p>
                </div>
              </div>

              {/* Asia-Pacific */}
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center space-x-2 text-[#0c2340]">
                  <MapPin className="w-5 h-5 text-[#eb6608]" />
                  <h3 className="text-xl font-bold">Asia-Pacific</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Headquartered in Shanghai, China, with specialized engineering and production hubs in Wuxi, Dongguan, India (Bangalore, Pune, Chennai), Japan, Singapore, and Australia.
                </p>
                <div className="text-xs text-gray-500 pt-2 space-y-1">
                  <p>• 35+ Facilities Across Asia</p>
                  <p>• ISO 13485 MedTech cleanroom production</p>
                  <p>• Semiconductor & Electronics hub</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            ORGANIZATION & OWNERSHIP
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="organization">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#eb6608]">
                Governance & Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-1" id="leadership">
                Corporate Leadership Team
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Guiding Nefab's 6,000 global employees toward Net-Zero and resource-saving operational excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadershipTeam.map((m) => (
                <div key={m.name} className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#0c2340] text-white flex items-center justify-center font-bold text-sm mb-3">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="text-base font-bold text-[#0c2340]">{m.name}</h3>
                  <p className="text-xs font-semibold text-[#eb6608]">{m.role}</p>
                  <p className="text-xs text-gray-600 leading-relaxed pt-2 border-t border-gray-200">{m.bio}</p>
                </div>
              ))}
            </div>

            {/* Ownership 50/50 breakdown */}
            <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#0c2340] text-white" id="ownership">
              <div className="max-w-3xl space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                  Long-Term Industrial Stewardship
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  50/50 Joint Ownership: Nordgren/Pihl Family & FAM AB
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  Nefab is jointly owned 50/50 by the founding <strong>Nordgren/Pihl family</strong> and <strong>FAM AB</strong>, the asset management company of the three largest Wallenberg Foundations. This unique ownership structure pairs the entrepreneurial passion of our founders with the long-term industrial commitment of the Wallenberg ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CAREERS: WORKING AT NEFAB & TRAINEE PROGRAM
            ========================================================================= */}
        <section className="py-20 bg-[#edf2f7]" id="careers">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#eb6608]">
                Grow With Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
                Careers at Nefab
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Join our international team of over 6,000 passionate innovators saving resources in global supply chains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4" id="people">
                <Users className="w-8 h-8 text-[#eb6608]" />
                <h3 className="text-xl font-bold text-[#0c2340]">Meet Our People</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  From CAD packaging engineers designing FiberFlute™ structures to on-site packing specialists handling aerospace engines, meet the colleagues driving our vision.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4" id="trainee">
                <GraduationCap className="w-8 h-8 text-[#0066cc]" />
                <h3 className="text-xl font-bold text-[#0c2340]">Global Trainee Program</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  An intensive 18-month international leadership development program including overseas rotations in Europe, the Americas, and Asia for recent university graduates.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4" id="jobs">
                <Briefcase className="w-8 h-8 text-emerald-600" />
                <h3 className="text-xl font-bold text-[#0c2340]">Job Opportunities</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Explore open engineering, supply chain management, plant operations, sales, and sustainability roles across our 145 worldwide hubs.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setContactTopic("Career Application");
                      setContactOpen(true);
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#0c2340] hover:bg-[#13294b] text-white text-xs font-bold transition-all"
                  >
                    View Open Roles →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
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