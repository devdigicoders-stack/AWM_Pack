"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SearchModal from "../../../components/SearchModal";
import ContactModal from "../../../components/ContactModal";
import {
  Flame,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Leaf,
  Layers,
  Thermometer,
  FileCheck,
  Award,
  Globe,
  Send,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Boxes,
  Check,
  Calendar,
  AlertCircle,
  Truck,
} from "lucide-react";

export default function HeatTreatmentPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("ISPM 15 Heat Treatment Batch");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    batchSize: "500 Pallets",
    materialType: "Assembled Pallets or Crating",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const processSteps = [
    {
      step: "01",
      title: "Wood Selection",
      description:
        "Inspection of raw timber, checking species, bark removal, and moisture content before entering the kiln process.",
      icon: Layers,
    },
    {
      step: "02",
      title: "Kiln Drying",
      description:
        "Gradual thermal conditioning to reduce unbound sap moisture, preventing warping, splitting, and internal mold spore growth.",
      icon: Flame,
    },
    {
      step: "03",
      title: "Heat Treatment",
      description:
        "Heating the wood packaging core temperature to a minimum of 56°C (133°F) continuously for at least 30 minutes.",
      icon: Thermometer,
    },
    {
      step: "04",
      title: "Temperature Monitoring",
      description:
        "Continuous digital sensor probes inserted into core timber blocks record heat curves for automated compliance reporting.",
      icon: ShieldCheck,
    },
    {
      step: "05",
      title: "Cooling & Certification",
      description:
        "Controlled cooling phase followed by official IPPC 'HT' branding stamp application and phytosanitary certificate issuance.",
      icon: Award,
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
            src="/heat-treatment-chamber.png"
            alt="AWMPC Industrial ISPM 15 Heat Treatment Kiln Chamber in Qatar"
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
                  <span className="text-[#0099e5] font-bold">Heat Treatment</span>
                </div>

                <div className="inline-flex items-center space-x-2 bg-amber-500/25 border border-amber-400/40 text-amber-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                  <Flame className="w-3.5 h-3.5 text-amber-300" />
                  <span>IPPC ISPM-15 Certified Thermal Kilns &bull; State of Qatar 🇶🇦</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    Heat Treatment
                  </h1>
                  <p className="text-blue-300 text-sm sm:text-base font-bold tracking-wide uppercase">
                    56&deg;C &bull; 30 Min Minimum Core Temperature &bull; Export Phytosanitary Certification
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                  Protecting global supply chains from invasive quarantine pests. AWMPC operates certified high-capacity thermal kilns in Birkat Al-Awamer, guaranteeing smooth border clearance worldwide.
                </p>

                <div className="pt-1.5 flex flex-wrap gap-3">
                  <button
                    onClick={() => setContactOpen(true)}
                    className="px-6 py-2.5 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Book Heat Treatment Batch
                  </button>
                  <a
                    href="#process"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    View 5-Step Process
                  </a>
                  <a
                    href="#gallery"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    Facility Kiln Photos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 1: OVERVIEW & EXACT SCRAPED COPY FROM AWMPACK.COM
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="overview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Image 1 - Pallets entering heat treatment chamber */}
              <div className="lg:col-span-6">
                <div
                  className="relative w-full h-[340px] sm:h-[440px] bg-[#f8fafc] border border-gray-200 rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => setSelectedImage("/heat-treatment-chamber.png")}
                >
                  <Image
                    src="/heat-treatment-chamber.png"
                    alt="Pallets entering the heat treatment chamber in Birkat Al-Awamer"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#002b49]/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm flex items-center space-x-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    <span>Thermal Kiln Chamber</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-200 shadow-md">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-[#002b49] block">
                          Pallets entering the heat treatment chamber
                        </span>
                        <span className="text-gray-500 text-[11px]">
                          Automated Rail Loading &bull; Birkat Al-Awamer Facility
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                        Min 56&deg;C / 30 Min
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 text-center mt-2">
                  Click to enlarge: Pallets entering the heat treatment chamber.
                </p>
              </div>

              {/* Right Column: Exact Scraped Text */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5] block mb-1">
                    Export Compliance &bull; Biosecurity
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                    Heat Treatment
                  </h2>
                </div>

                <div className="prose text-sm text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    <strong>Heat treatment is one of the services we provide to our customers.</strong> It is a process that involves the use of heating to extreme temperatures to achieve the desired result of hardening the material. Heat treating allows us to manipulate properties such as hardness, strength, toughness, ductility, and elasticity.
                  </p>
                  <p>
                    Our heat treatment services meet <strong>ISPM 15 standards</strong> and are available for:
                  </p>
                  <ul className="space-y-1.5 pl-2">
                    <li className="flex items-center space-x-2 text-xs font-bold text-[#002b49]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Assembled Pallets or Crating</span>
                    </li>
                    <li className="flex items-center space-x-2 text-xs font-bold text-[#002b49]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Dunnage (Cargo Bracing Timber)</span>
                    </li>
                    <li className="flex items-center space-x-2 text-xs font-bold text-[#002b49]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Wood Components</span>
                    </li>
                  </ul>
                  <p>
                    The <strong>ISPM 15 standard</strong> is performed by heating the wood packaging material in a schedule that attains a <strong>minimum core temperature of 56&deg; C (133&deg; F) for at least 30 minutes</strong>.
                  </p>
                  <p>
                    Your heat-treated wood products will be clearly marked with the <strong>&ldquo;HT&rdquo; stamp</strong> required for international export under ISPM 15 regulations, and you will receive the appropriate documentation to ship or sell your products.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
                  <div className="flex items-center space-x-2 font-bold uppercase tracking-wider text-emerald-800">
                    <Leaf className="w-4 h-4 text-emerald-600" />
                    <span>Safeguarding Global Ecosystems</span>
                  </div>
                  <p className="leading-relaxed">
                    Thanks to this process, there is no risk of transporting pests across borders. The treatment helps to safeguard ecosystems and agricultural industries from any invasive species and diseases.
                  </p>
                </div>

                <div className="pt-2 flex items-center space-x-4">
                  <button
                    onClick={() => {
                      setContactTopic("ISPM 15 Heat Treatment Batch Booking");
                      setContactOpen(true);
                    }}
                    className="px-6 py-3 bg-[#002b49] hover:bg-[#0099e5] text-white text-xs font-bold rounded-full transition-all shadow-md flex items-center space-x-2"
                  >
                    <span>Schedule Kiln Batch Today</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="tel:+97451191223"
                    className="text-xs font-bold text-[#0099e5] hover:underline flex items-center space-x-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+974 5119 1223</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: PROCESS STEPS (Exact 5 Steps from awmpack.com)
            ========================================================================= */}
        <section className="py-20 bg-[#edf2f7] border-b border-gray-200" id="process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Systematic Heat Treatment Flow
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                The Heat Treatment Process
              </h2>
              <p className="text-sm text-gray-600">
                The heat treatment process usually includes the below steps performed under calibrated sensor logging:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.step}
                    className="bg-white border border-gray-200/90 rounded-3xl p-6 hover:shadow-xl hover:border-[#0099e5]/60 transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-black text-gray-300 group-hover:text-[#0099e5] transition-colors">
                          {step.step}
                        </span>
                      </div>

                      <h3 className="text-base font-black text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center text-[10px] font-bold text-emerald-700">
                      <span>ISPM 15 Verified</span>
                      <CheckCircle2 className="w-3.5 h-3.5 ml-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: TWO KEY IMAGES & CERTIFICATES (From awmpack.com)
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="gallery">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Facility Visual Verification
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight">
                Kiln Operations &amp; Export Verification
              </h2>
              <p className="text-sm text-gray-600">
                Visual proof of thermal chamber operations, authentic IPPC stamps, and phytosanitary certificate compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Photo 1: Pallets entering heat treatment chamber */}
              <div
                className="bg-[#f8fafc] border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer"
                onClick={() => setSelectedImage("/heat-treatment-chamber.png")}
              >
                <div className="relative w-full h-[280px] sm:h-[340px]">
                  <Image
                    src="/heat-treatment-chamber.png"
                    alt="Pallets entering the heat treatment chamber"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#002b49]/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
                    In-Chamber Loading
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                    Pallets entering the heat treatment chamber
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Heavy-duty rail transport carts loading high-volume pallet batches into the Birkat Al-Awamer thermal kiln.
                  </p>
                </div>
              </div>

              {/* Photo 2: Heat-treated pallets ready for export */}
              <div
                className="bg-[#f8fafc] border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer"
                onClick={() => setSelectedImage("/heat-treated-export-ready.png")}
              >
                <div className="relative w-full h-[280px] sm:h-[340px]">
                  <Image
                    src="/heat-treated-export-ready.png"
                    alt="Heat-treated pallets ready for export with official ISPM 15 HT stamp"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
                    Export Ready &bull; ISPM 15 Stamped
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-[#002b49] group-hover:text-[#0099e5] transition-colors">
                    Heat-treated pallets ready for export
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Complete with official IPPC wheat ear &ldquo;HT&rdquo; brand mark and QA registry number for customs clearance.
                  </p>
                </div>
              </div>
            </div>

            {/* Official Certification Documents Callout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div
                className="bg-[#edf2f7] border border-gray-200 rounded-3xl p-6 flex items-center space-x-5 cursor-pointer hover:border-[#0099e5] transition-all group"
                onClick={() => setSelectedImage("/Phytosanitary%20Certification.png")}
              >
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-white border border-gray-300">
                  <Image
                    src="/Phytosanitary%20Certification.png"
                    alt="Phytosanitary Certification"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0099e5]">Official Regulation</span>
                  <h4 className="font-black text-sm text-[#002b49]">Phytosanitary Certification</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Compliance with ISPM standards for wooden pallets and spreaders used in international cargo shipments. Click to view.
                  </p>
                </div>
              </div>

              <div
                className="bg-[#edf2f7] border border-gray-200 rounded-3xl p-6 flex items-center space-x-5 cursor-pointer hover:border-[#0099e5] transition-all group"
                onClick={() => setSelectedImage("/ISPM%20Seal%20Requirement.png")}
              >
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-white border border-gray-300">
                  <Image
                    src="/ISPM%20Seal%20Requirement.png"
                    alt="ISPM Seal Requirement"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0099e5]">Customs Clearance</span>
                  <h4 className="font-black text-sm text-[#002b49]">ISPM Seal Requirement</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    All wooden packaging materials must be heat-treated and marked with the ISPM seal for approved export compliance. Click to view.
                  </p>
                </div>
              </div>
            </div>

            {/* Legal / Technical Disclaimer from awmpack.com */}
            <div className="mt-8 p-4 rounded-2xl bg-gray-50 border border-gray-200 text-[11px] text-gray-500 flex items-start space-x-2.5">
              <AlertCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <em>Every endeavor has been made to ensure that the information given herein is true and reliable but is given only for reference and guidance of our customers without any guarantee.</em>
              </p>
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
                    Kiln Scheduling &amp; RFQ
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#002b49]">
                    Get A Quote for Heat Treatment
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Looking for customized packaging solutions? Get in touch with us today for a personalized quote. Our team is ready to provide competitive pricing and expert guidance tailored to your project needs.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-black">Heat Treatment Inquiry Received!</h4>
                    <p className="text-xs text-emerald-700">
                      Our thermal kiln manager will confirm chamber batch scheduling and send an official phytosanitary quotation within 2 business hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2 bg-emerald-600 text-white rounded-full text-xs font-bold hover:bg-emerald-700 transition-all"
                    >
                      Submit Another Batch
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
                          Material Type to Treat *
                        </label>
                        <select
                          value={formData.materialType}
                          onChange={(e) => setFormData({ ...formData, materialType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        >
                          <option value="Assembled Pallets or Crating">Assembled Pallets or Crating</option>
                          <option value="Dunnage (Cargo Bracing Timber)">Dunnage (Cargo Bracing Timber)</option>
                          <option value="Wood Components & Deckboards">Wood Components &amp; Deckboards</option>
                          <option value="Client-Supplied Pallets for Treatment">Client-Supplied Pallets for HT Treatment</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Batch Volume
                        </label>
                        <select
                          value={formData.batchSize}
                          onChange={(e) => setFormData({ ...formData, batchSize: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                        >
                          <option value="100-250 Pallets">100 &ndash; 250 Units</option>
                          <option value="500 Pallets">500 Units (Full Kiln Chamber)</option>
                          <option value="1000 Pallets">1,000 Units (Multiple Batches)</option>
                          <option value="Recurring Monthly Batch">Recurring Monthly Export Contract</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Export Destination Country &amp; Timeline
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Specify destination country (e.g., Europe, USA, Australia, GCC) and desired completion date."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0099e5] bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#002b49] hover:bg-[#0099e5] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Heat Treatment Booking</span>
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
                    href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20would%20like%20to%20book%20ISPM%2015%20Heat%20Treatment"
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
                  <h4 className="font-bold text-[#002b49]">Official IPPC Stamping Included</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Every batch processed includes official phytosanitary treatment certificate documentation recognized by Hamad Port, Ras Laffan port authorities, and global customs agencies.
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
              alt="Heat Treatment Preview"
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

