"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Boxes,
  Handshake,
  Cpu,
  RefreshCw,
  TrendingUp,
  Target,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Zap,
  Sliders,
  BarChart3,
  Layers,
  Award,
} from "lucide-react";

export default function HandlingMaterialsConsultingPage() {
  const [selectedModel, setSelectedModel] = useState<"partner" | "consulting">("partner");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    model: "Model 1: Partner with AWMPC",
    focusArea: "Sustainable Logistics & Re-design",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello AWMPC Qatar, I would like to consult with your Materials Handling advisory team.\nName: ${formData.name || "N/A"}\nCompany: ${formData.company || "N/A"}\nPreferred Model: ${formData.model}\nFocus: ${formData.focusArea}`
  );

  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Top Breadcrumb Bar */}
      <div className="bg-[#002b49] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-blue-900">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/consulting" className="hover:text-white transition-colors">
              Consulting
            </Link>
            <span>/</span>
            <span className="text-[#0099e5] font-semibold">Handling Materials Consulting</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="inline-block bg-[#0099e5]/20 text-[#0099e5] border border-[#0099e5]/40 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
                Strategic Advisory • Supply Chain Transformation
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Handling Materials Consulting
              </h1>
              <p className="mt-3 text-lg sm:text-xl text-blue-100 max-w-3xl leading-relaxed">
                Choose the partnership model that best suits your business needs — from full supply chain partnership to independent advisory.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`https://wa.me/97451191223?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                <span>Direct WhatsApp Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="#consultation-form"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
              >
                Schedule Meeting
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Engagement Models: "You Have A Choice" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/40 via-white to-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#0099e5] block mb-2">
              Flexible Commercial Collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002b49]">
              You Have A Choice
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              Choose the partnership model that best matches your organization’s procurement governance, operational scale, and logistics structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Model 1: Partner with AWMPC */}
            <div
              onClick={() => {
                setSelectedModel("partner");
                setFormData({ ...formData, model: "Model 1: Partner with AWMPC" });
              }}
              className={`cursor-pointer rounded-3xl p-8 sm:p-10 border-2 transition-all duration-300 relative bg-white flex flex-col justify-between ${
                selectedModel === "partner"
                  ? "border-[#0099e5] shadow-2xl scale-[1.02] ring-4 ring-[#0099e5]/10"
                  : "border-gray-200 shadow-md hover:border-gray-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#002b49] text-[#0099e5] flex items-center justify-center text-2xl font-black">
                    1
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#0099e5] border border-blue-200">
                    Recommended Model
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#002b49] mb-3">
                  Partner with AWMPC
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed mb-6 font-medium">
                  You can use AWMPC as your Handling Materials partner – we will ensure that you get all the benefits discovered in the analysis we have performed – <strong>at no further costs</strong>.
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-600">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#0099e5] mr-2 shrink-0 mt-0.5" />
                    <span><strong>End-to-End Execution:</strong> We engineer, manufacture in Birkat Al-Awamer, supply, and maintain your entire fleet.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#0099e5] mr-2 shrink-0 mt-0.5" />
                    <span><strong>Analysis Fully Subsidized:</strong> Zero consulting fees charged when sourcing packaging through AWMPC.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#0099e5] mr-2 shrink-0 mt-0.5" />
                    <span><strong>Guaranteed Quality &amp; SLA:</strong> Direct factory backed warranty, ISPM 15 compliance, and rapid emergency restocking.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#002b49]">
                  {selectedModel === "partner" ? "✓ Selected Option" : "Click to select Model 1"}
                </span>
                <span className="text-xs font-bold text-[#0099e5] flex items-center">
                  Select Partner Model &rarr;
                </span>
              </div>
            </div>

            {/* Model 2: Expert Consulting */}
            <div
              onClick={() => {
                setSelectedModel("consulting");
                setFormData({ ...formData, model: "Model 2: Expert Consulting (Arms-Length)" });
              }}
              className={`cursor-pointer rounded-3xl p-8 sm:p-10 border-2 transition-all duration-300 relative bg-white flex flex-col justify-between ${
                selectedModel === "consulting"
                  ? "border-emerald-500 shadow-2xl scale-[1.02] ring-4 ring-emerald-500/10"
                  : "border-gray-200 shadow-md hover:border-gray-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-emerald-200 flex items-center justify-center text-2xl font-black">
                    2
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Pure Advisory
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#002b49] mb-3">
                  Expert Consulting
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed mb-6 font-medium">
                  You can take advantage of our proven experience as Handling Materials professionals and get our expert advice and recommendation – on an <strong>&ldquo;arms length&rdquo; consulting contract</strong> – which will leave you free to implement the recommendations with any provider of your choosing.
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-600">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                    <span><strong>100% Vendor-Neutral:</strong> Unbiased assessments of your current suppliers and market rates in Qatar.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                    <span><strong>Tender &amp; RFP Architecture:</strong> We prepare bulletproof technical specs and RFP guidelines for procurement.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                    <span><strong>Complete Autonomy:</strong> Implement recommendations in-house or tender out to global vendors freely.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#002b49]">
                  {selectedModel === "consulting" ? "✓ Selected Option" : "Click to select Model 2"}
                </span>
                <span className="text-xs font-bold text-emerald-600 flex items-center">
                  Select Advisory Model &rarr;
                </span>
              </div>
            </div>
          </div>

          {/* Value Anchor Callout */}
          <div className="mt-12 text-center max-w-3xl mx-auto p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-semibold">
              &ldquo;It is critical to trust a team of expert consultants to manage your supply chain and material handling needs. This will not only bring financial but also operational value to your entire organization.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 4 Strategic Pillars of Materials Handling Consulting */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#0099e5] block mb-2">
              Four Core Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002b49]">
              Materials Handling Consulting
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Our consulting team brings multi-decade senior expertise spanning factory floors, automated warehouses, and intermodal transport corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1: Strategic Approach */}
            <div className="bg-gradient-to-b from-blue-50/60 to-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#002b49] text-[#0099e5] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#002b49] mb-2">
                  Strategic Approach
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed font-medium mb-3">
                  Handling Materials is but a small part of your overall Materials Handling set-up!
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We look at the complete ecosystem: pallet racking heights, automated forklift paths, conveyor transfer points, and container stuffing optimization.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-100 text-[11px] font-bold text-[#0099e5]">
                Holistic Logistics View &rarr;
              </div>
            </div>

            {/* Pillar 2: Pre-analysis Excellence */}
            <div className="bg-gradient-to-b from-emerald-50/60 to-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-emerald-200 flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#002b49] mb-2">
                  Pre-analysis Excellence
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed font-medium mb-3">
                  Based on our very competitive Pre-analysis – with a Team of senior consultants – we will outline your improvement and savings potentials.
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Rigorous data mining identifies hidden waste, supplier pricing variance, and structural damage hotspots before making recommendations.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-100 text-[11px] font-bold text-emerald-600">
                Actionable Savings Roadmaps &rarr;
              </div>
            </div>

            {/* Pillar 3: Implementation Support */}
            <div className="bg-gradient-to-b from-amber-50/60 to-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-600 text-amber-100 flex items-center justify-center mb-6">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#002b49] mb-2">
                  Implementation Support
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed font-medium mb-3">
                  We are confident that – whatever improvement/savings potential we will uncover – we will be able and willing to assist your organization with the implementation of the necessary initiatives to harvest the benefits.
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We stay hands-on during roll-out, assisting warehouse managers and procurement teams to lock in actual cost reductions.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-100 text-[11px] font-bold text-amber-700">
                Hands-On Execution &rarr;
              </div>
            </div>

            {/* Pillar 4: Client-Focused Solutions */}
            <div className="bg-gradient-to-b from-purple-50/60 to-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-700 text-purple-200 flex items-center justify-center mb-6">
                  <Handshake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#002b49] mb-2">
                  Client-Focused Solutions
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed font-medium mb-3">
                  The key aspect of our services is the end objective. Those always vary depending on the specific client case and ensuring each client received the correct focus is what achieves the ultimate win-win.
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Tailored specifically for Qatari industrial dynamics, GCC maritime routes, oilfield specifications, and retail distribution centers.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-100 text-[11px] font-bold text-purple-700">
                Custom Win-Win Strategy &rarr;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Are Offering: Sustainable Logistics & Supply Chain Optimization */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#0099e5] block mb-2">
              Transformative Advisory Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002b49]">
              What We Are Offering
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Two specialized consulting verticals bridging sustainability with modern digital logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Domain A: Sustainable Logistics */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-md space-y-6">
              <div className="inline-flex items-center space-x-2 text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Domain 01: Eco-Efficiency &amp; Circularity</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#002b49]">
                Sustainable Logistics
              </h3>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <h4 className="text-base font-bold text-[#002b49] mb-1.5 flex items-center">
                    <Layers className="w-4 h-4 text-[#0099e5] mr-2" />
                    Material Handling Re-design
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    The re-design of your packaging and handling products will not only optimize the general spend on these assets, but will also have an impact on your entire Material&apos;s Handling process and set-up. We eliminate redundant timber weight, optimize deckboard configurations, and integrate recycled compressed sawdust blocks.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <h4 className="text-base font-bold text-[#002b49] mb-1.5 flex items-center">
                    <TrendingUp className="w-4 h-4 text-emerald-600 mr-2" />
                    Value Chain Improvement
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Having the right products and implementing the right schemes within your logistics will inevitably lead to improvement in your entire value chain. We establish repair-and-pooling loops that recover pallets from distribution centers across Doha, reducing both raw timber consumption and landfill disposal fees.
                  </p>
                </div>
              </div>
            </div>

            {/* Domain B: Supply Chain Optimization */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-md space-y-6">
              <div className="inline-flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                <Cpu className="w-3.5 h-3.5 text-[#0099e5]" />
                <span>Domain 02: Next-Gen Smart Operations</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#002b49]">
                Supply Chain Optimization
              </h3>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <h4 className="text-base font-bold text-[#002b49] mb-1.5 flex items-center">
                    <Zap className="w-4 h-4 text-[#0099e5] mr-2" />
                    Digital Transformation &amp; Generation 5
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>Generation 5 is coming</strong> – digitization is important not only in your daily commercial business operations, but also throughout the entire organizational structure. We guide companies through serialized barcoding, QR asset identification, and automated pallet scanning across warehouses.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <h4 className="text-base font-bold text-[#002b49] mb-1.5 flex items-center">
                    <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
                    Automation Benefits
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Investing in pallet and packaging digitization will mean increasing your pallet tracking and warehouse automation, which leads to big savings in time, work efficiency and expenditures. We ensure pallet dimensions match AGV (Automated Guided Vehicle) sensors and automated high-bay racking systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Consultation Form Section */}
      <section id="consultation-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
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
                    Consultation Request Received!
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Thank you. Eng. Maher Marjy and our senior logistics consultants will contact you shortly to schedule an initial briefing.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/97451191223?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 rounded-full transition-all"
                    >
                      Connect on WhatsApp (+974 5119 1223)
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
                        placeholder="e.g., Salem Al-Marri"
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
                        placeholder="e.g., Doha Logistics & Distribution"
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
                        placeholder="salam@doha-logistics.qa"
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
                        Selected Partnership Model
                      </label>
                      <select
                        value={formData.model}
                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#0099e5] focus:ring-1 focus:ring-[#0099e5] bg-white"
                      >
                        <option value="Model 1: Partner with AWMPC">Model 1: Partner with AWMPC</option>
                        <option value="Model 2: Expert Consulting (Arms-Length)">Model 2: Expert Consulting (Arms-Length)</option>
                        <option value="Combination / Exploratory Consultation">Combination / Exploratory Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Select A Service
                      </label>
                      <select
                        value={formData.focusArea}
                        onChange={(e) => setFormData({ ...formData, focusArea: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#0099e5] focus:ring-1 focus:ring-[#0099e5] bg-white"
                      >
                        <option value="Sustainable Logistics & Re-design">Sustainable Logistics &amp; Re-design</option>
                        <option value="Supply Chain Optimization & Generation 5">Supply Chain Optimization &amp; Generation 5</option>
                        <option value="Warehouse Automation Compatibility">Warehouse Automation Compatibility</option>
                        <option value="Value Chain & Pallet Pooling Setup">Value Chain &amp; Pallet Pooling Setup</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Specific Requirements / Project Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Outline current material handling pain points, volume requirements, automated equipment in use..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#0099e5] focus:ring-1 focus:ring-[#0099e5] bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#002b49] hover:bg-[#0099e5] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    Request Consultation Proposal
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#002b49] text-white p-8 rounded-3xl space-y-6 shadow-xl border border-blue-900">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0099e5] block">
                  Office &amp; Plant Location
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
                      Street No. 3012, Birket Al-Awamer, Zone No. 91, Al Wukair, PO Box: 12451, Doha - State of Qatar
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                    <a href="tel:+97440394581" className="hover:text-white font-semibold">
                      (+974) 4039 4581 (Office)
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                    <a href="tel:+97466864923" className="hover:text-white font-semibold">
                      (+974) 6686 4923 (Sales)
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
                      info@awmpack.com
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-blue-800/80">
                  <a
                    href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20would%20like%20to%20discuss%20Handling%20Materials%20Consulting"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs shadow-md transition-all"
                  >
                    <span>Instant WhatsApp Chat (+974 5119 1223)</span>
                  </a>
                </div>
              </div>

              {/* Related Link to No-Cure No-Pay */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#002b49] text-sm">
                    Analysis – No-Cure-No-Pay
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Discover your true materials handling costs with a guaranteed 4% savings guarantee.
                  </p>
                </div>
                <Link
                  href="/consulting/no-cure-no-pay"
                  className="px-4 py-2 rounded-lg bg-blue-50 text-[#0099e5] hover:bg-[#0099e5] hover:text-white text-xs font-bold transition-all shrink-0 ml-4"
                >
                  View Audit &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
