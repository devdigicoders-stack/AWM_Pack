"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SearchModal from "../../../components/SearchModal";
import ContactModal from "../../../components/ContactModal";
import {
  ShieldCheck,
  TrendingUp,
  Percent,
  CheckCircle2,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  FileCheck,
  Search,
  Leaf,
  Layers,
  ArrowRight,
  Quote,
  Building2,
  Calculator,
  ChevronRight,
  Send,
} from "lucide-react";

export default function NoCureNoPayPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("No-Cure-No-Pay Audit");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    annualSpend: "QAR 500,000 - 1,000,000",
    service: "No-Cure-No-Pay Cost Audit",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello AWMPC Qatar, I would like to request a No-Cure-No-Pay Materials Handling Analysis for my company.\nName: ${formData.name || "N/A"}\nCompany: ${formData.company || "N/A"}\nAnnual Spend: ${formData.annualSpend}`
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#002b49] selection:bg-blue-100 selection:text-[#003366]">
      {/* 1. Global Header */}
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("No-Cure-No-Pay Audit");
          setContactOpen(true);
        }}
      />

      <main className="flex-1">
        {/* =========================================================================
            HERO & BREADCRUMB
            ========================================================================= */}
        <section className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=90&w=2400&auto=format&fit=crop"
            alt="AWMPC Qatar No-Cure No-Pay Pallet and Packaging Cost Analysis"
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
                  <Link href="/consulting" className="hover:text-white transition-colors">
                    Consulting
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-[#0099e5] font-bold">Analysis No-Cure No-Pay</span>
                </div>

                <div className="inline-flex items-center space-x-2 bg-[#0099e5]/25 border border-[#0099e5]/40 text-blue-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                  <span>Guaranteed Cost Reduction • AWMPC Qatar 🇶🇦</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    Analysis – No-Cure-No-Pay
                  </h1>
                  <p className="text-blue-300 text-sm sm:text-base font-bold tracking-wide uppercase">
                    Discover Your True Materials Handling Costs • Guaranteed 4% Savings
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                  Do you really know how much money you spend on Materials Handling – and how much of this you spend on Handling Materials? We present you with a guaranteed plan for how to improve your Total Costs of Ownership (TCO).
                </p>

                <div className="pt-1.5 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/97451191223?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all flex items-center"
                  >
                    <span>WhatsApp Audit Request</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="#audit-form"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    Book Free Assessment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            HERO VALUE PROPOSITION
            ========================================================================= */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 text-[#003366] font-bold text-xs uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-full">
                  <TrendingUp className="w-3.5 h-3.5 text-[#0099e5]" />
                  <span>Materials Handling Optimization</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#002b49] leading-tight">
                  Do you really know how much money you spend on Materials Handling — and how much of this you spend on Handling Materials?
                </h2>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Not only will we help you find out — we will also present you with a guaranteed plan for how to improve your <strong>Total Costs of Ownership (TCO)</strong> of your Handling Materials.
                </p>

                {/* Big Guaranteed 4% Banner */}
                <div className="bg-gradient-to-r from-[#002b49] via-[#003366] to-[#0099e5] p-6 sm:p-8 rounded-2xl text-white shadow-xl">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
                      <Percent className="w-8 h-8 text-emerald-400 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                        Risk-Free Commercial Guarantee
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-white">
                        GUARANTEED 4% SAVINGS
                      </h3>
                    </div>
                  </div>
                  <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-medium">
                    AND BEST OF ALL – we will make sure you will get a <strong>4% SAVINGS</strong> from our work – <strong>No-Cure-No-Pay!!</strong> If our strategic analysis does not yield actionable savings of at least 4%, you owe us nothing.
                  </p>
                </div>

                {/* 2 Key Proposition Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm hover:border-[#0099e5] transition-colors">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0099e5] flex items-center justify-center font-bold">
                        <FileCheck className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-[#002b49] text-base">Tender Consultant Support</h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      If you are currently using a Tender Consultant to assist you with your purchasing, this service is fully included in our proposition to you.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm hover:border-[#0099e5] transition-colors">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                        <Clock className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-[#002b49] text-base">20+ Years of Experience</h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Our consulting practice has more than 20 years of experience delivering guaranteed ROI for our clients within packaging and handling materials.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: CEO Quote & High-Impact Visual */}
              <div className="lg:col-span-5 space-y-6">
                {/* Executive Quote Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-blue-200/80 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none" />
                  <Quote className="w-10 h-10 text-[#0099e5]/30 mb-4" />
                  
                  <blockquote className="text-gray-800 text-sm sm:text-base leading-relaxed italic mb-6">
                    &ldquo;The main reason why clients are reluctant to carry out these analyses is the fear that they won&apos;t yield any tangible results and that the money and time spent on this will be wasted. Therefore, we provide a <strong>No-Cure-No-Pay</strong> proposition.&rdquo;
                  </blockquote>

                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs text-gray-600 leading-relaxed italic mb-3">
                      &ldquo;AWMPC is working professionally and has extensive knowledge within the wood packaging area. Our cooperation with AWMPC has resulted in an optimization of Qatar&apos;s wood packaging solutions.&rdquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-11 h-11 rounded-full bg-[#002b49] text-[#0099e5] flex items-center justify-center font-black text-sm">
                        AR
                      </div>
                      <div>
                        <h5 className="font-black text-[#002b49] text-sm tracking-wide">
                          ANTONIO ROSTIROLLA
                        </h5>
                        <p className="text-[11px] font-bold text-gray-500 uppercase">
                          CEO of Al Waad Manufacturing Packaging Company - Qatar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Start Saving Today Callout */}
                <div className="p-6 rounded-2xl bg-[#002b49] text-white">
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                    <Award className="w-5 h-5 text-amber-400 mr-2" />
                    Start Saving Today!
                  </h4>
                  <p className="text-xs text-blue-200 leading-relaxed mb-4">
                    What holds you back? Start saving on your packaging &amp; handling by letting us optimize your supply chain!
                  </p>
                  <div className="flex items-center space-x-2 text-xs text-emerald-300 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Zero upfront financial commitment required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            WHAT WE ARE OFFERING - 3 ANALYSES
            ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-widest text-[#0099e5] block mb-2">
                Three-Pillar Evaluation Framework
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49]">
                What We Are Offering
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Our audit inspects the full lifecycle of your pallets, crates, and logistics infrastructure across design, pricing transparency, and carbon emissions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1: Handling Materials Design Analysis */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0099e5] flex items-center justify-center mb-6 group-hover:bg-[#002b49] group-hover:text-white transition-colors">
                    <Layers className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-[#0099e5] uppercase tracking-wider block mb-1">
                    Pillar 01
                  </span>
                  <h3 className="text-xl font-black text-[#002b49] mb-4">
                    Handling Materials Design Analysis
                  </h3>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4">
                    The right form, fit and function of your Handling Materials.
                  </p>
                  <ul className="space-y-3.5 text-xs text-gray-600 leading-relaxed">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#0099e5] mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Equipment Compatibility:</strong> Will the pallets work seamlessly with your existing forklifts, pallet jacks, and automated conveyors? (Some pallet jacks and forklifts use a different design).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#0099e5] mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Load Capacity Precision:</strong> Can your pallets handle the load that they will be expected to carry? Both too weak and too strong pallets will have a negative financial impact.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#0099e5] mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Special Transport Conditions:</strong> Are special considerations for transport requirements (e.g., fragility, hygiene) handled in the optimal way?
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-[#0099e5] flex items-center">
                    Engineered CAD Optimization &rarr;
                  </span>
                </div>
              </div>

              {/* Pillar 2: Transparency Analysis */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-[#002b49] group-hover:text-white transition-colors">
                    <Search className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                    Pillar 02
                  </span>
                  <h3 className="text-xl font-black text-[#002b49] mb-4">
                    Transparency Analysis
                  </h3>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4">
                    Do you pay the right price for the right Handling Materials?
                  </p>
                  <ul className="space-y-3.5 text-xs text-gray-600 leading-relaxed">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Complete Cost Transparency:</strong> An analysis of what you are really paying for each handling material and services you are using - we will provide complete transparency.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Versatile Specification Matching:</strong> Despite being relatively simple in design, pallets are very versatile and can come in many different shapes and sizes.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Optimal Spend Selection:</strong> Selecting the right type of pallet and other handling materials is key to ensure an optimal spend across your operations.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-emerald-600 flex items-center">
                    Full Cost Breakdown &rarr;
                  </span>
                </div>
              </div>

              {/* Pillar 3: Sustainability Analysis */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:bg-[#002b49] group-hover:text-white transition-colors">
                    <Leaf className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block mb-1">
                    Pillar 03
                  </span>
                  <h3 className="text-xl font-black text-[#002b49] mb-4">
                    Sustainability Analysis
                  </h3>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4">
                    Identify largest potential to reduce your CO2 impact.
                  </p>
                  <ul className="space-y-3.5 text-xs text-gray-600 leading-relaxed">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Responsible Sourcing Verification:</strong> How sustainable are you in your usage of Handling Materials – do you know where your pallets come from? How were they sourced? Are the handling materials sustainably sourced?
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Circular Economy &amp; Wood Recycling:</strong> By asking the right questions, we ensure everyone is working on the same goal and identifying potential for circular solutions.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>National Vision 2030 Alignment:</strong> Direct alignment with Qatar&apos;s ICV, local manufacturing self-reliance, and corporate decarbonization targets.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-teal-600 flex items-center">
                    Carbon Reduction Roadmap &rarr;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            AUDIT REQUEST & CONTACT SECTION
            ========================================================================= */}
        <section id="audit-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Form */}
              <div className="lg:col-span-7 bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
                <span className="text-xs font-black uppercase tracking-wider text-[#0099e5] block mb-2">
                  Get A Quote
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#002b49] mb-3">
                  Looking for customized packaging solutions?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-8 leading-relaxed">
                  Get in touch with us today for a personalized quote. Our team is ready to provide competitive pricing and expert guidance tailored to your project needs.
                </p>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-bold text-emerald-900">
                      Audit Request Submitted Successfully!
                    </h4>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      Thank you. Our Factory Manager Eng. Maher Marjy and senior consulting team will review your requirements and reach out within 24 hours.
                    </p>
                    <div className="pt-2">
                      <a
                        href={`https://wa.me/97451191223?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 rounded-full transition-all"
                      >
                        Instant WhatsApp Confirmation (+974 5119 1223)
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g., Mohammed Al-Kuwari"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#0099e5] focus:ring-1 focus:ring-[#0099e5] bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g., Qatar Industrial Logistics LLC"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#0099e5] focus:ring-1 focus:ring-[#0099e5] bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.qa"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#0099e5] focus:ring-1 focus:ring-[#0099e5] bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+974 XXXX XXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#0099e5] focus:ring-1 focus:ring-[#0099e5] bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Estimated Annual Pallet Spend
                        </label>
                        <select
                          value={formData.annualSpend}
                          onChange={(e) => setFormData({ ...formData, annualSpend: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#0099e5] focus:ring-1 focus:ring-[#0099e5] bg-white"
                        >
                          <option value="Under QAR 250,000">Under QAR 250,000</option>
                          <option value="QAR 250,000 - 500,000">QAR 250,000 - 500,000</option>
                          <option value="QAR 500,000 - 1,000,000">QAR 500,000 - 1,000,000</option>
                          <option value="QAR 1,000,000 - 5,000,000">QAR 1,000,000 - 5,000,000</option>
                          <option value="Over QAR 5,000,000">Over QAR 5,000,000</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Select A Service
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#0099e5] focus:ring-1 focus:ring-[#0099e5] bg-white"
                        >
                          <option value="No-Cure-No-Pay Cost Audit">Service 1: No-Cure-No-Pay Cost Audit</option>
                          <option value="Handling Materials Design Analysis">Service 2: Handling Materials Design Analysis</option>
                          <option value="Transparency & Pricing Audit">Service 3: Transparency &amp; Pricing Audit</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Current Packaging Challenges / Pallet Types
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Describe your current pallet sizes (1200x1000, 1200x800), load weights, failure rates, or export destinations..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#0099e5] focus:ring-1 focus:ring-[#0099e5] bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full bg-[#002b49] hover:bg-[#0099e5] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                    >
                      Submit No-Cure No-Pay Audit Request
                    </button>
                  </form>
                )}
              </div>

              {/* Contact info from scraping */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#002b49] text-white p-8 rounded-3xl space-y-6 shadow-xl border border-blue-900">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0099e5] block">
                    Our Location &amp; Contact
                  </span>

                  <div>
                    <h4 className="text-xl font-bold text-white">
                      Al Waad Manufacturing Packaging Company
                    </h4>
                    <p className="text-xs text-blue-200 mt-1">
                      Visit us at our office location in Qatar
                    </p>
                  </div>

                  <div className="space-y-4 text-xs text-blue-100 border-t border-blue-800/80 pt-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-[#0099e5] shrink-0 mt-0.5" />
                      <span>
                        Street No. 3012, Birket Al-Awamer, Zone No. 91, Al Wukair, PO Box:12451, Doha-Qatar
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <a href="tel:+97440394581" className="hover:text-white font-semibold">
                        (+974) 40394581 (Office)
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <a href="tel:+97466864923" className="hover:text-white font-semibold">
                        (+974) 66864923 (Sales)
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                      <a href="tel:+97451191223" className="hover:text-white font-semibold text-emerald-300">
                        (+974) 5119 1223 (Eng. Maher Marjy - Factory Manager)
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <a href="mailto:info@awmpack.com" className="hover:text-white">
                        info@awmpack.com / maher@awmpack.com
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-blue-800/80">
                    <a
                      href={`https://wa.me/97451191223?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs shadow-md transition-all"
                    >
                      <span>Instant WhatsApp Chat (+974 5119 1223)</span>
                    </a>
                  </div>
                </div>

                {/* Related Link to Handling Materials Consulting */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[#002b49] text-sm">
                      Handling Materials Consulting
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Explore our two engagement models: Partner with AWMPC or Arms-Length Consulting.
                    </p>
                  </div>
                  <Link
                    href="/consulting/material-handling"
                    className="px-4 py-2 rounded-lg bg-[#002b49] text-white hover:bg-[#0099e5] text-xs font-bold transition-all shrink-0 ml-4"
                  >
                    View Service &rarr;
                  </Link>
                </div>
              </div>
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
