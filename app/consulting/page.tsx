"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import {
  TrendingUp,
  Percent,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  Search,
  Leaf,
  Cpu,
  Handshake,
  FileCheck,
  Quote,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Sliders,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerItem, HoverCard } from "../../components/motion/MotionComponents";

export default function ConsultingHubPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Consulting - No-Cure-No-Pay");

  const handleOpenContact = (topic: string) => {
    setContactTopic(topic);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#002b49] selection:bg-blue-100 selection:text-[#003366]">
      {/* 1. Global Header */}
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => handleOpenContact("General Consulting Inquiries")}
      />

      <main className="flex-1">
        {/* =========================================================================
            CONSULTING HERO BANNER
            ========================================================================= */}
        <section className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=90&w=2400&auto=format&fit=crop"
            alt="AWMPC Qatar Packaging and Supply Chain Consulting"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-105 contrast-105"
          />
          {/* High-clarity directional gradient: dark under text, crystal clear transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001424]/90 via-[#001c33]/60 via-50% to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#001424]/40 via-transparent to-black/20"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl space-y-3.5">
                {/* Breadcrumbs */}
                <div className="flex items-center space-x-2 text-xs font-semibold text-blue-200">
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-[#0099e5] font-bold">Consulting Services</span>
                </div>

                <div className="inline-flex items-center space-x-2 bg-[#0099e5]/25 border border-[#0099e5]/40 text-blue-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                  <span>Strategic Supply Chain Advisory • AWMPC Qatar 🇶🇦</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    Materials Handling Consulting
                  </h1>
                  <p className="text-blue-300 text-sm sm:text-base font-bold tracking-wide uppercase">
                    Guaranteed 4% Savings (No-Cure-No-Pay) • Strategic Logistics Advisory
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                  Discover your true materials handling costs, optimize Total Cost of Ownership (TCO), and eliminate packaging waste with Qatar&apos;s leading wood packaging engineers and senior supply chain consultants.
                </p>

                <div className="pt-1.5 flex flex-wrap gap-3">
                  <button
                    onClick={() => handleOpenContact("No-Cure-No-Pay Audit")}
                    className="px-6 py-2.5 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Request No-Cure No-Pay Audit
                  </button>
                  <a
                    href="#offerings"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    Explore Consulting Programs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            01-04 PILLARS QUICK STRIP
            ========================================================================= */}
        <section className="bg-white border-b border-gray-100 py-6 sm:py-8 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInStagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <FadeInStaggerItem className="p-4 sm:p-5 rounded-2xl bg-[#f8fafc] border border-gray-200/80 hover:border-[#0099e5] transition-all group">
                <span className="text-2xl sm:text-3xl font-black text-[#0099e5] block group-hover:scale-105 transition-transform">
                  01
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[#002b49] mt-1">
                  Guaranteed 4% Savings
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  No-Cure-No-Pay assurance: you only pay if we deliver documented savings.
                </p>
              </FadeInStaggerItem>

              <FadeInStaggerItem className="p-4 sm:p-5 rounded-2xl bg-[#f8fafc] border border-gray-200/80 hover:border-[#0099e5] transition-all group">
                <span className="text-2xl sm:text-3xl font-black text-[#0099e5] block group-hover:scale-105 transition-transform">
                  02
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[#002b49] mt-1">
                  20+ Years Experience
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Proven track record delivering measurable ROI for industrial clients across Qatar.
                </p>
              </FadeInStaggerItem>

              <FadeInStaggerItem className="p-4 sm:p-5 rounded-2xl bg-[#f8fafc] border border-gray-200/80 hover:border-[#0099e5] transition-all group">
                <span className="text-2xl sm:text-3xl font-black text-[#0099e5] block group-hover:scale-105 transition-transform">
                  03
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[#002b49] mt-1">
                  2 Engagement Models
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Partner directly with AWMPC or engage vendor-neutral expert advisory.
                </p>
              </FadeInStaggerItem>

              <FadeInStaggerItem className="p-4 sm:p-5 rounded-2xl bg-[#f8fafc] border border-gray-200/80 hover:border-[#0099e5] transition-all group">
                <span className="text-2xl sm:text-3xl font-black text-[#0099e5] block group-hover:scale-105 transition-transform">
                  04
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[#002b49] mt-1">
                  Generation 5 Ready
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Digital pallet serialization, automated warehouse scanning &amp; AGV compatibility.
                </p>
              </FadeInStaggerItem>
            </FadeInStagger>
          </div>
        </section>

        {/* =========================================================================
            TWO CONSULTING PROGRAMS
            ========================================================================= */}
        <section id="offerings" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black uppercase tracking-widest text-[#0099e5] block mb-2">
                Specialized Consulting Programs
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49]">
                Choose Your Consulting Pathway
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Choose between our risk-free 4% savings cost analysis or comprehensive materials handling advisory.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Program 1: Analysis – No-Cure-No-Pay */}
              <FadeIn direction="up">
                <HoverCard lift={8} className="h-full">
                  <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#0099e5] h-full">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#002b49] text-[#0099e5] flex items-center justify-center group-hover:bg-[#0099e5] group-hover:text-white transition-colors">
                          <Percent className="w-7 h-7" />
                        </div>
                        <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Guaranteed 4% Savings
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-[#002b49] mb-1.5 group-hover:text-[#0099e5] transition-colors">
                        Analysis – No-Cure-No-Pay
                      </h3>

                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                        Discover Your True Materials Handling Costs
                      </p>

                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        Do you really know how much money you spend on Materials Handling – and how much of this you spend on Handling Materials? Not only will we help you find out – we will also present you with a guaranteed plan for how to improve your Total Costs of Ownership (TCO) with guaranteed 4% savings – <strong>No-Cure-No-Pay!!</strong>
                      </p>

                      <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-600">
                        <div className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-[#0099e5] mr-2 shrink-0" />
                          <span>Handling Materials Design Analysis (Fit &amp; Function)</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-[#0099e5] mr-2 shrink-0" />
                          <span>Transparency Analysis (True Spend &amp; Invoice Breakdown)</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-[#0099e5] mr-2 shrink-0" />
                          <span>Sustainability Analysis (CO2 Footprint &amp; Wood Recycling)</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-[#0099e5] mr-2 shrink-0" />
                          <span>Tender Consultant Support &amp; 20+ Years Experience</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <Link
                        href="/consulting/no-cure-no-pay"
                        className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-full bg-[#002b49] hover:bg-[#0099e5] text-white font-bold text-xs shadow-md transition-all group-hover:shadow-lg"
                      >
                        <span>Explore No-Cure-No-Pay Audit</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </HoverCard>
              </FadeIn>

              {/* Program 2: Handling Materials Consulting */}
              <FadeIn direction="up" delay={0.15}>
                <HoverCard lift={8} className="h-full">
                  <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-emerald-500 h-full">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                          <Handshake className="w-7 h-7" />
                        </div>
                        <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#0099e5] border border-blue-200">
                          2 Flexible Engagement Models
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-[#002b49] mb-1.5 group-hover:text-emerald-700 transition-colors">
                        Handling Materials Consulting
                      </h3>

                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                        Partner with AWMPC OR Arms-Length Expert Consulting
                      </p>

                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        Select AWMPC as your end-to-end handling partner with analysis at no further costs, or engage our independent advisory on an &ldquo;arms length&rdquo; contract leaving you free to implement recommendations with any vendor of your choosing.
                      </p>

                      <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-600">
                        <div className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                          <span>Sustainable Logistics &amp; Material Handling Re-design</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                          <span>Value Chain Improvement &amp; Closed-Loop Pooling</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                          <span>Digital Transformation &amp; Generation 5 Pallet Tracking</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                          <span>Warehouse Automation Compatibility &amp; AGV Specs</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <Link
                        href="/consulting/material-handling"
                        className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition-all group-hover:shadow-lg"
                      >
                        <span>Explore Materials Consulting</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </HoverCard>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CEO TESTIMONIAL QUOTE SECTION
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#002b49] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Quote className="w-12 h-12 text-[#0099e5] mx-auto opacity-70" />
            <blockquote className="text-base sm:text-xl font-medium leading-relaxed italic text-blue-100 max-w-3xl mx-auto">
              &ldquo;The main reason why clients are reluctant to carry out these analyses is the fear that they won&apos;t yield any tangible results and that the money and time spent on this will be wasted. Therefore, we provide a No-Cure-No-Pay proposition.&rdquo;
            </blockquote>
            <div className="border-t border-blue-800/80 pt-6 max-w-md mx-auto">
              <p className="text-xs text-blue-200 italic mb-2">
                &ldquo;AWMPC is working professionally and has extensive knowledge within the wood packaging area. Our cooperation with AWMPC has resulted in an optimization of Qatar&apos;s wood packaging solutions.&rdquo;
              </p>
              <h5 className="font-black text-white text-base tracking-wide">
                ANTONIO ROSTIROLLA
              </h5>
              <p className="text-xs font-semibold text-[#0099e5] uppercase">
                CEO OF ALWAAD MANUFACTURING PACKAGING COMPANY - QATAR
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            FAST DIRECT CONTACT STRIP
            ========================================================================= */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 border-t border-gray-200">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-[#002b49]">
                Ready to optimize your packaging operations?
              </h4>
              <p className="text-xs text-gray-600 mt-1">
                Connect directly with Factory Manager Eng. Maher Marjy (+974 5119 1223) or our Doha office (+974 4039 4581).
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <a
                href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20would%20like%20to%20discuss%20Packaging%20Consulting"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition-all"
              >
                Chat on WhatsApp
              </a>
              <button
                onClick={() => handleOpenContact("Free Assessment")}
                className="px-6 py-3 rounded-full bg-[#002b49] hover:bg-[#0099e5] text-white font-bold text-xs shadow transition-all"
              >
                Request Free Audit
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 3. Global Footer */}
      <Footer />

      {/* Modals */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultTopic={contactTopic}
      />
    </div>
  );
}
