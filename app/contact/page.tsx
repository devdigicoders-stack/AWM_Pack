"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowRight,
  Send,
  Globe,
  ExternalLink,
  MessageSquare,
  Truck,
  Flame,
  Award,
  Factory,
  Check,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import {
  FadeIn,
  FadeInStagger,
  FadeInStaggerItem,
  HoverCard,
} from "../../components/motion/MotionComponents";

export default function ContactPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    topic: "AWMPC Pallets (Euro Alternative)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: "How quickly can AWMPACK deliver standard pallets across Qatar?",
      a: "With our 15,000 m² manufacturing plant and extensive buffer stock in Birkat Al-Awamer, standard industrial pallets (1200x1000mm and 1200x800mm) are ready for immediate dispatch across Doha, Mesaieed, Ras Laffan, and Hamad Port within 24 to 48 hours.",
    },
    {
      q: "Are AWMPACK pallets fully certified for international export under ISPM 15?",
      a: "Yes. We operate official thermal heat treatment kilns certified to ISPM 15 standards. Every pallet or export crate is treated to reach a minimum 56°C core temperature for at least 30 minutes and clearly branded with the official IPPC 'HT' stamp for zero customs quarantine delays globally.",
    },
    {
      q: "Can we schedule a factory visit to inspect production facilities?",
      a: "Absolutely. Industrial procurement managers, supply chain directors, and logistics engineers are welcome to tour our automated assembly lines and thermal kilns in Birkat Al-Awamer. You can schedule a visit directly with Factory Manager Eng. Maher Marjy (+974 5119 1223).",
    },
    {
      q: "Do you offer custom dimensions and CAD-engineered heavy crating?",
      a: "Yes. Our engineering department designs and manufactures bespoke timber packaging, heavy-gauge steel skids, and vapor-barrier export crates tailored for petrochemical equipment, transformers, precast concrete, and heavy machinery.",
    },
    {
      q: "What is your wood recycling and pallet buyback program?",
      a: "Under our 'Waste to Usable Product' circular initiative, we collect used pallets from client circulation, repair and re-certify usable units, and process non-repairable wood scraps into high-density compressed sawdust blocks, helping clients achieve carbon reduction and zero-landfill goals.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#002b49] selection:bg-blue-100 selection:text-[#003366]">
      {/* 1. Global Header */}
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      <main className="flex-1">
        {/* =========================================================================
            CONTACT HERO SECTION
            ========================================================================= */}
        <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#001424] text-white">
          <Image
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=90&w=2400&auto=format&fit=crop"
            alt="AWMPACK Birkat Al-Awamer Factory & Logistics Complex"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-105 contrast-105"
          />
          {/* High-clarity directional gradient: dark under text, crystal clear transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001424]/90 via-[#001c33]/60 via-50% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001424]/40 via-transparent to-black/20" />

          <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <FadeIn direction="up">
              <div className="max-w-3xl space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0099e5]/20 text-[#0099e5] border border-[#0099e5]/40 backdrop-blur-md">
                    <Factory className="w-3.5 h-3.5" />
                    <span>Direct Factory Contact • State of Qatar 🇶🇦</span>
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    ICV &amp; ISPM 15 Certified
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Connect with AWMPACK Factory &amp; Operations
                </h1>

                <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl">
                  Reach out directly to our 15,000 m² industrial facility in Birkat Al-Awamer, Al Wukair. Led by Factory Manager <strong>Eng. Maher Marjy</strong>, our technical team provides rapid quotes, custom pallet engineering, and verified export crating solutions.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20would%20like%20to%20inquire%20about%20pallets%20and%20crating"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp (+974 5119 1223)</span>
                  </a>

                  <a
                    href="tel:+97451191223"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Factory (+974 5119 1223)</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* =========================================================================
            3 TOP EXECUTIVE CONTACT CARDS (Highlighting User Details)
            ========================================================================= */}
        <section className="py-12 bg-gray-50 border-b border-gray-200/80 -mt-8 relative z-20">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Factory Manager Direct */}
              <FadeInStaggerItem>
                <HoverCard lift={6} className="h-full">
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-blue-100 shadow-md flex flex-col justify-between h-full group hover:border-[#0099e5] transition-all">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0099e5] flex items-center justify-center group-hover:bg-[#002b49] group-hover:text-white transition-colors">
                          <Factory className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Direct Factory Contact
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-black text-[#002b49]">Eng. Maher Marjy</h3>
                        <p className="text-xs font-bold text-[#0099e5] mt-0.5">Factory Manager</p>
                        <p className="text-xs text-gray-500 mt-1">Al Waad Manufacturing Packaging Company</p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-gray-100 text-xs">
                        <a
                          href="tel:+97451191223"
                          className="flex items-center space-x-2 text-gray-700 hover:text-[#0099e5] font-semibold"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#0099e5] shrink-0" />
                          <span>+974 5119 1223 (Mobile)</span>
                        </a>
                        <a
                          href="mailto:maher@awmpack.com"
                          className="flex items-center space-x-2 text-gray-700 hover:text-[#0099e5] font-medium"
                        >
                          <Mail className="w-3.5 h-3.5 text-[#0099e5] shrink-0" />
                          <span>maher@awmpack.com</span>
                        </a>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <a
                        href="https://wa.me/97451191223?text=Hello%20Eng.%20Maher,%20I%20would%20like%20to%20inquire%20about%20pallets%20and%20crating"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all text-center flex items-center justify-center space-x-2 shadow-xs"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </HoverCard>
              </FadeInStaggerItem>

              {/* Card 2: Office, Sales & Procurement */}
              <FadeInStaggerItem>
                <HoverCard lift={6} className="h-full">
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-blue-100 shadow-md flex flex-col justify-between h-full group hover:border-[#0099e5] transition-all">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#002b49] flex items-center justify-center group-hover:bg-[#002b49] group-hover:text-white transition-colors">
                          <Building2 className="w-6 h-6 text-[#0099e5] group-hover:text-white" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-[#002b49] border border-blue-200">
                          Office &amp; Sales Desk
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-black text-[#002b49]">Doha Headquarters</h3>
                        <p className="text-xs font-bold text-gray-500 mt-0.5">Commercial &amp; Procurement Desk</p>
                        <p className="text-xs text-gray-500 mt-1">Sun – Thu: 7:00 AM – 5:00 PM</p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-gray-100 text-xs">
                        <a
                          href="tel:+97440394581"
                          className="flex items-center space-x-2 text-gray-700 hover:text-[#0099e5] font-semibold"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#0099e5] shrink-0" />
                          <span>+974 4039 4581 (Office)</span>
                        </a>
                        <a
                          href="tel:+97466864923"
                          className="flex items-center space-x-2 text-gray-700 hover:text-[#0099e5] font-semibold"
                        >
                          <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>+974 6686 4923 (Sales)</span>
                        </a>
                        <a
                          href="mailto:info@awmpack.com"
                          className="flex items-center space-x-2 text-gray-700 hover:text-[#0099e5] font-medium"
                        >
                          <Mail className="w-3.5 h-3.5 text-[#0099e5] shrink-0" />
                          <span>info@awmpack.com</span>
                        </a>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <a
                        href="tel:+97466864923"
                        className="w-full py-2.5 px-4 rounded-xl bg-[#002b49] hover:bg-[#0099e5] text-white text-xs font-bold transition-all text-center flex items-center justify-center space-x-2 shadow-xs"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Sales Hotline</span>
                      </a>
                    </div>
                  </div>
                </HoverCard>
              </FadeInStaggerItem>

              {/* Card 3: Factory Location & Dispatch */}
              <FadeInStaggerItem>
                <HoverCard lift={6} className="h-full">
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-blue-100 shadow-md flex flex-col justify-between h-full group hover:border-[#0099e5] transition-all">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0099e5] flex items-center justify-center group-hover:bg-[#002b49] group-hover:text-white transition-colors">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                          Zone 91 • Birkat Al-Awamer
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-black text-[#002b49]">Plant &amp; Dispatch Hub</h3>
                        <p className="text-xs font-bold text-gray-500 mt-0.5">15,000 m² Complex • P.O. Box: 12451</p>
                        <p className="text-xs text-gray-500 mt-1">Al Wukair, State of Qatar</p>
                      </div>

                      <div className="pt-2 border-t border-gray-100 text-xs text-gray-600 space-y-1.5">
                        <p className="leading-relaxed">
                          Building No. 89, Street No. 3012, Zone No. 91, Birkat Al-Awamer, Al Wukair
                        </p>
                        <div className="flex items-center space-x-2 pt-1">
                          <span className="text-[10px] font-bold text-gray-400 uppercase">Website:</span>
                          <a
                            href="https://www.awmpack.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#0099e5] font-bold hover:underline"
                          >
                            www.awmpack.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Birkat+Al-Awamer+Zone+91+Street+3012+Qatar"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-[#002b49] hover:text-white text-[#002b49] text-xs font-bold transition-all text-center flex items-center justify-center space-x-2 border border-blue-200"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>View on Google Maps →</span>
                      </a>
                    </div>
                  </div>
                </HoverCard>
              </FadeInStaggerItem>
            </FadeInStagger>
          </div>
        </section>

        {/* =========================================================================
            MAIN SECTION: DIRECT CONSULTATION FORM + OFFICIAL BUSINESS CARD
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column (7 cols): Consultation Form */}
              <div className="lg:col-span-7 bg-[#f8fafc] border border-gray-200/90 rounded-3xl p-8 sm:p-10 shadow-xs">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                    Request a Quotation / Technical Specifications
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#002b49] tracking-tight mt-1">
                    Direct Factory Consultation
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Send your required dimensions, load requirements (dynamic/static), export destinations, or monthly delivery volumes.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="text-lg font-bold text-emerald-950">
                      Inquiry Received by AWMPACK Factory!
                    </h3>
                    <p className="text-xs text-emerald-800 max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Eng. Maher Marjy and our production team in Birkat Al-Awamer will review your specifications and contact you at <strong>{formData.email}</strong> shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-6 py-2 rounded-full bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#002b49] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#002b49] mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.qa"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#002b49] mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+974 5555 1234"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#002b49] mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company W.L.L"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002b49] mb-1">
                        Inquiry Topic / Required Solution *
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none bg-white"
                      >
                        <option value="AWMPC Pallets (Euro Alternative)">AWMPC Pallets (Euro Alternative - 1200x800)</option>
                        <option value="Standard Wooden Pallets">Standard Industrial Pallets (1200x1000)</option>
                        <option value="Certified Used Pallets (Grade A/B)">Certified Used Pallets (Grade A / B)</option>
                        <option value="Special Custom CAD Pallets">Special Custom CAD Pallets (Oil &amp; Gas)</option>
                        <option value="ISPM 15 Certified Heat Treatment">ISPM 15 Certified Heat Treatment</option>
                        <option value="Wooden Boxes & Heavy Crates">Wooden Boxes &amp; Heavy Export Crates</option>
                        <option value="Pallet Collars">Hinged Wooden Pallet Collars</option>
                        <option value="One-Way Export Pallets">One-Way Export Pallets (Lightweight)</option>
                        <option value="Compressed Sawdust Wood Blocks">Compressed Sawdust Wood Blocks</option>
                        <option value="Consulting: No-Cure-No-Pay Audit">No-Cure-No-Pay Supply Chain Audit (4% Savings)</option>
                        <option value="Pallet Pooling & Repair Contract">Pallet Pooling &amp; Repair Contract</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002b49] mb-1">
                        Cargo Specifications / Quantity / Dimensions *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please specify dimensions (e.g., 1200x1000 mm), static & dynamic load rating, export destination, monthly requirement..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none bg-white resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-full bg-[#002b49] hover:bg-[#0099e5] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                      >
                        <span>Submit to Factory Manager</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Column (5 cols): Official Executive Business Card & Details */}
              <div className="lg:col-span-5 space-y-6">
                {/* Official AWMPACK Business Card Box */}
                <div className="bg-[#00223a] text-white p-7 sm:p-9 rounded-3xl space-y-5 border border-blue-900/80 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0099e5]/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Header in Card */}
                  <div className="border-b border-blue-800/80 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#0099e5]">
                        Direct Factory Contact
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Qatar Facility HQ
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-white">Eng. Maher Marjy</h3>
                    <p className="text-xs text-[#0099e5] font-semibold">Factory Manager</p>
                    <p className="text-[11px] text-gray-300">Al Waad Manufacturing Packaging Company (AWMPC)</p>
                  </div>

                  {/* WhatsApp Big Button */}
                  <div>
                    <a
                      href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20would%20like%20to%20inquire%20about%20pallets%20and%20crating"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp (+974 5119 1223)</span>
                    </a>
                  </div>

                  {/* Phone Numbers & Communication */}
                  <div className="space-y-2.5 text-xs text-gray-200">
                    <div className="flex items-center space-x-2.5">
                      <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <span className="text-gray-400">Mobile:</span>
                      <a href="tel:+97451191223" className="font-bold text-white hover:text-[#0099e5]">
                        +974 5119 1223
                      </a>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <span className="text-gray-400">Office:</span>
                      <a href="tel:+97440394581" className="font-bold text-white hover:text-[#0099e5]">
                        +974 4039 4581
                      </a>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-gray-400">Sales:</span>
                      <a href="tel:+97466864923" className="font-bold text-white hover:text-emerald-400">
                        +974 6686 4923
                      </a>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <Mail className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <span className="text-gray-400">Direct Email:</span>
                      <a href="mailto:maher@awmpack.com" className="font-semibold text-white hover:text-[#0099e5]">
                        maher@awmpack.com
                      </a>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <Mail className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <span className="text-gray-400">Inquiries:</span>
                      <a href="mailto:info@awmpack.com" className="font-semibold text-white hover:text-[#0099e5]">
                        info@awmpack.com
                      </a>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <Globe className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <span className="text-gray-400">Website:</span>
                      <a
                        href="https://www.awmpack.com"
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-white hover:text-[#0099e5]"
                      >
                        www.awmpack.com
                      </a>
                    </div>
                  </div>

                  {/* Postal Address & Maps Link */}
                  <div className="pt-3 border-t border-blue-800/80 text-[11px] text-gray-300 space-y-1.5">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-[#0099e5] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        Building No. 89, Street No. 3012, Zone No. 91, Birkat Al-Awamer, Al Wukair, State of Qatar (P.O. Box 12451)
                      </p>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Birkat+Al-Awamer+Zone+91+Street+3012+Qatar"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-[#0099e5] hover:underline font-bold pl-6 text-xs"
                    >
                      <span>View on Google Maps →</span>
                    </a>
                  </div>

                  {/* Social Media Links */}
                  <div className="pt-3 border-t border-blue-800/80 flex items-center space-x-2.5 text-xs">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Social:</span>
                    <a
                      href="https://www.linkedin.com/company/awmpack"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 rounded-lg bg-blue-900/60 hover:bg-[#0099e5] text-blue-200 hover:text-white transition-all font-semibold"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://wa.me/97451191223"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 rounded-lg bg-emerald-900/60 hover:bg-emerald-600 text-emerald-300 hover:text-white transition-all font-semibold"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="https://www.awmpack.com"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 rounded-lg bg-blue-900/60 hover:bg-[#0099e5] text-blue-200 hover:text-white transition-all font-semibold"
                    >
                      awmpack.com
                    </a>
                  </div>
                </div>

                {/* Industrial Capabilities Badge Box */}
                <div className="bg-[#f0f9ff] border border-blue-200 p-6 rounded-3xl space-y-3 text-xs">
                  <div className="flex items-center space-x-2 text-[#002b49] font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Direct Factory Guarantees</span>
                  </div>
                  <ul className="space-y-1.5 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Certified ISPM 15 thermal treatment with recognized IPPC stamp</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>In-Country Value (ICV) certified supporting Qatar National Vision</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Rapid highway dispatch to Hamad Port, Mesaieed &amp; Ras Laffan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            MAP & FACTORY DISPATCH LOCATION
            ========================================================================= */}
        <section className="py-16 bg-[#f8fafc] border-b border-gray-200/80">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Logistics Connectivity
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002b49]">
                Birkat Al-Awamer Industrial Location
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Strategic presence in Zone 91 with fast access to major arterial highways and industrial hubs across Qatar.
              </p>
            </div>

            {/* Map Frame */}
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg bg-white">
              <iframe
                title="AWMPACK Factory Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115582.43853110998!2d51.4880556!3d25.1375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45cf71589d3d37%3A0x6b7b2827170e5b38!2sBirkat%20Al%20Awamer%2C%20Qatar!5e0!3m2!1sen!2sqa!4v1700000000000!5m2!1sen!2sqa"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Transit Times Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-xl sm:text-2xl font-black text-[#0099e5] block">15 min</span>
                <span className="text-xs font-bold text-[#002b49]">Hamad Port</span>
                <p className="text-[10px] text-gray-500 mt-0.5">Seaworthy export container staging</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-xl sm:text-2xl font-black text-[#0099e5] block">20 min</span>
                <span className="text-xs font-bold text-[#002b49]">Mesaieed Industrial</span>
                <p className="text-[10px] text-gray-500 mt-0.5">Petrochemical &amp; steel heavy skids</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-xl sm:text-2xl font-black text-[#0099e5] block">15 min</span>
                <span className="text-xs font-bold text-[#002b49]">Doha Industrial Area</span>
                <p className="text-[10px] text-gray-500 mt-0.5">Distribution &amp; warehousing loops</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-xl sm:text-2xl font-black text-[#0099e5] block">55 min</span>
                <span className="text-xs font-bold text-[#002b49]">Ras Laffan Energy Hub</span>
                <p className="text-[10px] text-gray-500 mt-0.5">Orbital Highway direct link</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            FREQUENTLY ASKED QUESTIONS (FAQ)
            ========================================================================= */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Common Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002b49]">
                Frequently Asked Procurement Questions
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Everything you need to know about working with Qatar&apos;s leading pallet manufacturer.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#002b49] hover:bg-gray-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#0099e5] shrink-0 transition-transform duration-200 ${
                        activeFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeFaq === idx && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#f8fafc]/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-[#002b49] text-white text-center space-y-3">
              <h3 className="text-xl font-bold">Have a custom packaging inquiry?</h3>
              <p className="text-xs text-blue-200 max-w-md mx-auto">
                Call Eng. Maher Marjy directly or start a quick WhatsApp chat to discuss technical drawings, load simulations, or urgent orders.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <a
                  href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20have%20a%20custom%20packaging%20requirement"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md"
                >
                  WhatsApp Factory Manager
                </a>
                <a
                  href="tel:+97451191223"
                  className="px-6 py-2.5 rounded-full bg-white text-[#002b49] hover:bg-gray-100 font-bold text-xs transition-all shadow-md"
                >
                  Direct Call (+974 5119 1223)
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultTopic={formData.topic}
      />
    </div>
  );
}
