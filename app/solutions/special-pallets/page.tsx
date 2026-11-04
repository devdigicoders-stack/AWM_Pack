"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SearchModal from "../../../components/SearchModal";
import ContactModal from "../../../components/ContactModal";
import {
  Package,
  Layers,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Flame,
  Leaf,
  Scale,
  Sparkles,
  Send,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Boxes,
  FileCheck,
  Compass,
  Cpu,
  Check,
} from "lucide-react";

export default function SpecialPalletsPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Special Pallets Inquiry");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "100",
    service: "Custom Engineered Special Pallets",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const specializedServices = [
    {
      num: "01",
      title: "Pallet Design Tasks",
      description:
        "Comprehensive CAD and 3D finite-element design tasks to ensure optimal structure, load-bearing distribution, and automated handling functionality.",
      icon: Compass,
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      num: "02",
      title: "Quality Assurance & Certifications",
      description:
        "Comprehensive quality assurance, stress testing, and official certification approvals to meet all necessary international (ISO, EPAL, IPPC) standards.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      num: "03",
      title: "Full Life-Cycle Solutions",
      description:
        "Complete full life-cycle packaging solutions that support your products from factory floor packaging through sea freight, rigging, and job-site uncrating.",
      icon: Layers,
      color: "text-purple-600 bg-purple-50 border-purple-200",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#002b49] selection:bg-blue-100 selection:text-[#003366]">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      <main className="flex-1">
        {/* =========================================================================
            HERO & BREADCRUMB
            ========================================================================= */}
        <section className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=90&w=2400&auto=format&fit=crop"
            alt="Custom Special Pallets Manufacturing in Qatar"
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
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-xs font-semibold text-blue-200">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  <Link href="/solutions" className="hover:text-white transition-colors">Products &amp; Services</Link>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-[#0099e5] font-bold">Special Pallets</span>
                </div>

                <div className="inline-flex items-center space-x-2 bg-[#0099e5]/25 border border-[#0099e5]/40 text-blue-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                  <Wrench className="w-3.5 h-3.5 text-[#0099e5]" />
                  <span>Custom Engineering &bull; State of Qatar 🇶🇦</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    Special Pallets
                  </h1>
                  <p className="text-blue-300 text-sm sm:text-base font-bold tracking-wide uppercase">
                    Tailored Pallet Solutions for Unique Needs
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                  Crafted to precisely meet your unique heavy-machinery, aerospace, petrochemical, and construction specifications in Birkat Al-Awamer, Qatar.
                </p>

                <div className="pt-1.5 flex flex-wrap gap-3">
                  <button
                    onClick={() => setContactOpen(true)}
                    className="px-6 py-2.5 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Request Custom Pallet RFQ
                  </button>
                  <a
                    href="#specifications"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    View Specifications
                  </a>
                  <a
                    href="#services"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    Engineering Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 1: TAILORED PALLET SOLUTIONS (Exact awmpack.com Content)
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="overview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Custom Pallet Image */}
              <div className="lg:col-span-6">
                <div
                  className="relative w-full h-[340px] sm:h-[440px] bg-[#f8fafc] border border-gray-200 rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => setSelectedImage("/special-pallets-custom.png")}
                >
                  <Image
                    src="/special-pallets-custom.png"
                    alt="AWMPC Custom Engineered Special Pallets in Qatar"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-[#002b49]/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0099e5]" />
                    <span>Engineered To Client Spec</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-200 shadow-md">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-[#002b49] block">Custom Load Capacities</span>
                        <span className="text-gray-500 text-[11px]">Reinforced Solid Timber &bull; Birkat Al-Awamer Plant</span>
                      </div>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                        Up to 10,000+ kg
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 text-center mt-2">
                  Click image to view high-resolution custom engineering details.
                </p>
              </div>

              {/* Right Column: Exact Scraped Text */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5] block mb-1">
                    Bespoke Industrial Packaging
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                    Tailored Pallet Solutions for Unique Needs
                  </h2>
                </div>

                <div className="prose text-sm text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    At <strong>AWMPC</strong>, our <strong>Special Pallets</strong> are crafted to precisely meet your unique requirements. We produce them either from your finished specifications or through a collaborative product development process with your team. Our goal is to ensure the optimal pallet solution for your specific application.
                  </p>
                  <p>
                    Whether your operation requires extra-long skids for Qatar Energy gas pipelines, reinforced blocks for heavy power transformers, or specialized chemical-grade CP pallets for Mesaieed export, our Birkat Al-Awamer manufacturing facility delivers with precision.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#edf2f7] border border-gray-200/80 space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#002b49]">
                    Ready to discuss your custom pallet needs?
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Contact us with your specifications today, and we will provide an offer on how AWMPC can help. You can easily reach us via the contact form on our website, or by contacting the appropriate AWMPC regional office listed on our &ldquo;Contact&rdquo; page.
                  </p>
                </div>

                <div className="pt-2 flex items-center space-x-4">
                  <button
                    onClick={() => {
                      setContactTopic("Custom Pallet Engineering RFQ");
                      setContactOpen(true);
                    }}
                    className="px-6 py-3 bg-[#002b49] hover:bg-[#0099e5] text-white text-xs font-bold rounded-full transition-all shadow-md flex items-center space-x-2"
                  >
                    <span>Submit Your Pallet Drawing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="tel:+97451191223"
                    className="text-xs font-bold text-[#0099e5] hover:underline flex items-center space-x-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+974 5119 1223 (Eng. Maher)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: SPECIALIZED SERVICES (Exact Scraped Items)
            ========================================================================= */}
        <section className="py-20 bg-[#edf2f7] border-b border-gray-200" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                End-to-End Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                Our Specialized Services for Custom Pallets
              </h2>
              <p className="text-sm text-gray-600">
                AWMPC handles the complete engineering lifecycle from initial load-stress modeling to certified thermal heat-treatment and on-site assembly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specializedServices.map((srv) => {
                const IconComponent = srv.icon;
                return (
                  <div
                    key={srv.num}
                    className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-[#0099e5]/60 transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold border ${srv.color} group-hover:scale-105 transition-transform`}>
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-black text-gray-300 group-hover:text-[#0099e5] transition-colors">
                          {srv.num}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                        {srv.title}
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        {srv.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-gray-100 flex items-center text-xs font-bold text-[#0099e5]">
                      <span>Collaborative Development</span>
                      <CheckCircle2 className="w-4 h-4 ml-1.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: SPECIFICATIONS TABLE (Exact awmpack.com Content)
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="specifications">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Custom Engineering Matrix
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight mt-1">
                Special Pallets Specifications
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Manufactured to your exact CAD drawing, load specifications, timber choice, and delivery timelines.
              </p>
            </div>

            <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Dimensions
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700 font-semibold">
                    To client specifications (Length: 400 mm &ndash; 6,000+ mm | Width: 400 mm &ndash; 3,500+ mm)
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Standards
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700">
                    To client specifications (ISO 9001, IPPC ISPM-15, EPAL specifications, and ASTM D1185)
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Material
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700">
                    Soft and hard woods (e.g., pine, spruce, poplar, alder, beech, oak, and reinforced plywood)
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-white transition-colors">
                  <div className="md:col-span-4 font-black text-sm text-[#002b49]">
                    Additional Info
                  </div>
                  <div className="md:col-span-8 text-sm text-gray-700 leading-relaxed">
                    Special Pallets are developed in close collaboration with our clients and engineering team to ensure your optimal solution. Fully recyclable, optional heavy steel brackets, and ISPM 15 heat treated for global export.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: GET A QUOTE FORM (Exact awmpack.com Request Component)
            ========================================================================= */}
        <section className="py-20 bg-white" id="quote">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Quotation Form */}
              <div className="lg:col-span-7 bg-[#f8fafc] border border-gray-200 p-8 sm:p-10 rounded-3xl shadow-sm">
                <div className="space-y-2 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                    Fast Factory Quotation
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#002b49]">
                    Get A Quote for Special Pallets
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Looking for customized packaging solutions? Get in touch with us today for a personalized quote. Our team is ready to provide competitive pricing and expert guidance tailored to your project needs.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-black">Special Pallet Request Received!</h4>
                    <p className="text-xs text-emerald-700">
                      Our factory engineering team in Birkat Al-Awamer will examine your dimension parameters and respond with CAD design feedback and quotation within 2 business hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2 bg-emerald-600 text-white rounded-full text-xs font-bold hover:bg-emerald-700 transition-all"
                    >
                      Submit Another Specification
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company Name"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@company.qa"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+974 XXXX XXXX"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Custom Pallet Category *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        >
                          <option value="Custom Engineered Special Pallets">Heavy Machinery / Oversized Skids</option>
                          <option value="Chemical CP Standard Special Pallets">Chemical Industry CP Pallets</option>
                          <option value="Transformer & Generator Pallets">Generator &amp; Transformer Heavy Bases</option>
                          <option value="Long Length Steel/Pipe Pallets">Long Length Pipe &amp; Rebar Pallets</option>
                          <option value="Collaborative CAD Pallet Prototyping">Collaborative CAD Development</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Estimated Quantity Required
                        </label>
                        <select
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        >
                          <option value="10-50">10 &ndash; 50 Units (Prototype / Heavy Project)</option>
                          <option value="100-250">100 &ndash; 250 Units</option>
                          <option value="500">500 Units (Production Batch)</option>
                          <option value="1000+">1,000+ Units (Annual Contract)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Dimensions (L &times; W &times; H) &amp; Weight Load Requirement
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe dimensions, payload weight (kg), forklift/crane lifting points, and destination."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#002b49] hover:bg-[#0099e5] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Special Pallet RFQ</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Factory Contact Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#00223a] text-white p-8 rounded-3xl space-y-5 border border-blue-900/60 shadow-xl">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0099e5] block mb-1">
                      Direct Manufacturing Plant
                    </span>
                    <h4 className="text-xl font-black text-white">Al Waad Manufacturing Packaging Company</h4>
                    <p className="text-xs text-blue-200 mt-1">Birkat Al-Awamer, Al Wukair &bull; State of Qatar</p>
                  </div>

                  {/* Direct WhatsApp Callout */}
                  <a
                    href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20would%20like%20to%20discuss%20Special%20Pallets%20engineering"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs shadow-md transition-all"
                  >
                    <span>Instant WhatsApp Chat (+974 5119 1223)</span>
                  </a>

                  <div className="space-y-3 text-xs pt-1">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Mobile (Eng. Maher Marjy):</span>
                        <a href="tel:+97451191223" className="font-bold text-white hover:text-[#0099e5]">+974 5119 1223</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Office Telephone:</span>
                        <a href="tel:+97440394581" className="font-bold text-white hover:text-[#0099e5]">+974 4039 4581</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Sales Hotline:</span>
                        <a href="tel:+97466864923" className="font-bold text-white hover:text-[#0099e5]">+974 6686 4923</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-[#0099e5] shrink-0" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Official Emails:</span>
                        <div className="flex flex-col space-y-0.5">
                          <a href="mailto:info@awmpack.com" className="font-bold text-white hover:text-[#0099e5]">info@awmpack.com</a>
                          <a href="mailto:maher@awmpack.com" className="text-blue-300 hover:text-white">maher@awmpack.com</a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 pt-2 border-t border-blue-800">
                      <MapPin className="w-4 h-4 text-[#0099e5] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Factory Address:</span>
                        <p className="text-gray-200 leading-relaxed">
                          Building No. 89, Street No. 3012, Zone No. 91,<br />
                          Birkat Al-Awamer, Al Wukair,<br />
                          State of Qatar (P.O. Box 12451)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-[#edf2f7] border border-gray-200 space-y-2 text-xs">
                  <h4 className="font-bold text-[#002b49]">Custom Timber &amp; Fastener Selection</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Choose from European spruce, Nordic pine, Canadian hemlock, and Qatari certified steel plates. All timber components undergo IPPC ISPM 15 heat treatment for international border crossing compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox Modal Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-[80vh]">
            <Image
              src={selectedImage}
              alt="Special Pallet Preview"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full text-xs font-bold transition-all"
            >
              &times; Close Preview
            </button>
          </div>
        </div>
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultTopic={contactTopic}
      />
    </div>
  );
}

