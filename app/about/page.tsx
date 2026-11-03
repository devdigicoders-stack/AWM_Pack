"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
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
  Phone,
  Mail,
  Recycle,
} from "lucide-react";

export default function AboutPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Corporate Inquiries");

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#002b49] selection:bg-blue-100 selection:text-[#003366]">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("About AWMPACK Corporate Inquiries");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* =========================================================================
            ABOUT HERO
            ========================================================================= */}
        <section className="relative w-full h-[360px] sm:h-[400px] lg:h-[440px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
            alt="AWMPACK Industrial Facility Birkat Al-Awamer"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001829]/95 via-[#00223a]/75 to-[#002b49]/35"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl space-y-3.5">
                <div className="inline-flex items-center space-x-2 bg-[#0099e5]/25 border border-[#0099e5]/40 text-blue-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                  <span>Al Waad Manufacturing Packaging Company (AWMPC) • Qatar 🇶🇦</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                    A New Era in Pallet Manufacturing &amp; Wood Waste Management
                  </h1>
                  <p className="text-blue-300 text-xs sm:text-sm font-bold tracking-wide uppercase">
                    Birkat Al-Awamer, Al Wukair • State of Qatar
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                  Operating in Birkat Al-Awamer, Al Wukair, AWMPACK is a premier Qatari industrial packaging manufacturer dedicated to superior quality, advanced automation, certified ISPM 15 compliance, and pioneering circular wood recycling.
                </p>

                <div className="pt-1.5 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="px-6 py-2.5 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Contact Factory Team
                  </Link>
                  <Link
                    href="/solutions"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    Explore Facilities &amp; Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Big Numbers */}
        <div className="bg-[#002b49] border-t border-b border-blue-900/60 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">15,000</p>
                <div className="w-8 h-1 bg-[#0099e5] mx-auto my-2 rounded-full"></div>
                <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">m² Manufacturing Facility</p>
              </div>
              <div>
                <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">500K+</p>
                <div className="w-8 h-1 bg-[#0099e5] mx-auto my-2 rounded-full"></div>
                <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">Annual Pallet Capacity</p>
              </div>
              <div>
                <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">100%</p>
                <div className="w-8 h-1 bg-[#0099e5] mx-auto my-2 rounded-full"></div>
                <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">ISPM 15 &amp; FSC® Compliant</p>
              </div>
              <div>
                <p className="text-4xl sm:text-6xl font-black text-white tracking-tight">ICV</p>
                <div className="w-8 h-1 bg-[#0099e5] mx-auto my-2 rounded-full"></div>
                <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">Qatar In-Country Value</p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            COMPANY PROFILE, MISSION & VISION
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="profile">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                  Company Profile
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                  Driving Qatar&apos;s Industrial Packaging Competitiveness
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Al Waad Manufacturing Packaging Company (AWMPC)</strong> is a leading wood and metal packaging manufacturing company based in the State of Qatar. Located in the strategically developed industrial zone of Birkat Al-Awamer, Al Wukair, we provide a robust production and distribution network serving the oil &amp; gas, infrastructure, logistics, petrochemical, and manufacturing sectors.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Our advanced facility integrates automated pallet nailing lines, certified ISPM 15 thermal heat-treatment kilns, and state-of-the-art wood recycling machinery that converts sawdust and wood waste into high-density pallet blocks under our signature initiative: <em>&quot;Waste to Usable Product.&quot;</em>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2" id="mission-vision">
                  <div className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0099e5] bg-blue-50 px-2 py-0.5 rounded">
                      Our Mission
                    </span>
                    <h3 className="text-base font-bold text-[#002b49]">
                      Innovation &amp; Advanced Technology
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      &quot;To offer a new era in pallet manufacturing and wood waste management, committed to providing the market with superior products through innovation and advanced technology that increases the competitiveness of our customers.&quot;
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Our Vision
                    </span>
                    <h3 className="text-base font-bold text-[#002b49]">
                      Major Global Player
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      &quot;To be one of the major players in pallet manufacturing and wood waste management, fully committed to continuous research and development of sustainable, total packaging solutions.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Factory Manager Visiting Card Showcase */}
              <div className="lg:col-span-5 bg-[#00223a] text-white p-8 sm:p-10 rounded-3xl space-y-6 border border-blue-900/60 shadow-xl" id="leadership">
                <div className="flex items-center justify-between border-b border-blue-800 pb-4">
                  <div>
                    <h3 className="text-2xl font-black text-white">Eng. Maher Marjy</h3>
                    <p className="text-[#0099e5] font-bold text-sm">Factory Manager</p>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    Executive Leadership
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  Leading our daily factory operations, technical engineering team, ISPM 15 compliance certifications, and customer consultations across Qatar.
                </p>

                <div className="space-y-3 pt-2 text-xs text-gray-200">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                    <div>
                      <span className="text-gray-400 block text-[10px]">Mobile / WhatsApp:</span>
                      <a href="tel:+97451191223" className="font-bold text-white hover:text-[#0099e5]">+974 5119 1223</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                    <div>
                      <span className="text-gray-400 block text-[10px]">Office Landline:</span>
                      <a href="tel:+97440394581" className="font-bold text-white hover:text-[#0099e5]">+974 4039 4581</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-[#0099e5] shrink-0" />
                    <div>
                      <span className="text-gray-400 block text-[10px]">Direct Email:</span>
                      <a href="mailto:maher@awmpack.com" className="font-bold text-white hover:text-[#0099e5]">maher@awmpack.com</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pt-1 border-t border-blue-800">
                    <MapPin className="w-4 h-4 text-[#0099e5] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-400 block text-[10px]">Plant Address:</span>
                      <p className="text-gray-200 leading-tight">
                        Building No. 89, Street No. 3012, Zone No. 91,<br />
                        Birkat Al-Awamer, Al Wukair, State of Qatar (P.O. Box 12451)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setContactTopic("Meeting with Eng. Maher Marjy");
                      setContactOpen(true);
                    }}
                    className="w-full py-2.5 px-4 rounded-full bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs shadow-md transition-all text-center"
                  >
                    Schedule Meeting / Plant Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CERTIFICATIONS & ACCREDITATIONS
            ========================================================================= */}
        <section className="py-20 bg-[#edf2f7]" id="certifications">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Quality Assurance
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight mt-1">
                Accreditations &amp; Certified Standards
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                All AWMPACK operations undergo rigorous third-party auditing to ensure compliance with Qatari laws and international trade protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-3">
                <ShieldCheck className="w-8 h-8 text-[#0099e5]" />
                <h3 className="text-base font-bold text-[#002b49]">ISO 9001:2015 Quality Management</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Rigorous quality control across timber selection, automated nailing tolerances, diagonal squareness, and load capacity testing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-3">
                <Leaf className="w-8 h-8 text-emerald-600" />
                <h3 className="text-base font-bold text-[#002b49]">ISO 14001:2015 Environmental Management</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Certified environmental protocols minimizing industrial carbon footprint and powering our &quot;Waste to Usable Product&quot; recycling.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-3">
                <Award className="w-8 h-8 text-teal-600" />
                <h3 className="text-base font-bold text-[#002b49]">ISO 45001:2018 Health &amp; Safety</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Industry-leading factory floor ergonomics and zero-harm workplace safety protecting our skilled manufacturing workforce.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-3" id="icv">
                <Award className="w-8 h-8 text-amber-500" />
                <h3 className="text-base font-bold text-[#002b49]">In-Country Value (ICV Certified)</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Certified Qatari In-Country Value score supporting domestic supply chain resilience in alignment with Qatar National Vision 2030.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                <h3 className="text-base font-bold text-[#002b49]">ISPM 15 Certified Heat Treatment</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Ministry-licensed thermal treatment kilns applying official Qatar IPPC &quot;HT&quot; stamps for border-free global maritime and air export.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                <h3 className="text-base font-bold text-[#002b49]">FSC® Certified Timber</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  100% of our solid wood lumber is responsibly sourced from sustainably managed, internationally certified global forests.
                </p>
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