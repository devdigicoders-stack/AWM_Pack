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
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Flame,
  Leaf,
  Layers,
  Scale,
  RotateCcw,
  Feather,
  Send,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

export default function AwmpcPalletsPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "500",
    service: "AWMPC Pallets (1200 x 800 x 140 mm)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

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
            alt="AWMPC Pallets Manufacturing in Qatar"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-105 contrast-105"
          />
          {/* High-clarity directional gradient: dark under text, crystal clear transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001424]/90 via-[#001c33]/60 via-50% to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#001424]/40 via-transparent to-black/20"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="max-w-3xl space-y-3.5">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-xs font-semibold text-blue-200">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  <Link href="/solutions" className="hover:text-white transition-colors">Products &amp; Services</Link>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-[#0099e5] font-bold">AWMPC Pallets</span>
                </div>

                <div className="inline-flex items-center space-x-2 bg-[#0099e5]/25 border border-[#0099e5]/40 text-blue-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                  <span>Proprietary Pallet Innovation • State of Qatar 🇶🇦</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    AWMPC Pallets
                  </h1>
                  <p className="text-blue-300 text-sm sm:text-base font-bold tracking-wide uppercase">
                    Our Unique Pallet Solution • Cost-Effective Alternative to Euro Pallets
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                  Engineered and manufactured by Al Waad Manufacturing Packaging Company in Birkat Al-Awamer, Qatar. Identifiable by the official &quot;AWMPC&quot; stamp, offering superior load capacity at competitive market pricing.
                </p>

                <div className="pt-1.5 flex flex-wrap gap-3">
                  <button
                    onClick={() => setContactOpen(true)}
                    className="px-6 py-2.5 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Request AWMPC Pallet Quote
                  </button>
                  <a
                    href="#specifications"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    View Technical Specifications
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 1: OUR UNIQUE PALLET SOLUTION (With User Image)
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="unique-solution">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Image with Lightbox Preview */}
              <div className="lg:col-span-6">
                <div
                  className="relative w-full h-[320px] sm:h-[420px] bg-[#f8fafc] border border-gray-200 rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => setSelectedImage("/Our%20Unique%20Pallet%20Solution.png")}
                >
                  <Image
                    src="/Our%20Unique%20Pallet%20Solution.png"
                    alt="AWMPC Pallets - Our Unique Pallet Solution"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#002b49]/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
                    Our Unique Pallet Solution
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 text-[#002b49] text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs border border-gray-200 backdrop-blur-sm">
                    Click to Enlarge 🔍
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Official Text */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    Proprietary Engineering
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight mt-3">
                    Our Unique Pallet Solution
                  </h2>
                </div>

                <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                  <p>
                    The <strong>AWMPC Pallets</strong> are our own signature pallet product, designed to be an ideal alternative to Euro Pallets. The pallet is easily identified by <strong>&ldquo;AWMPC&rdquo;</strong>.
                  </p>
                  <p>
                    The pallets are constructed with just the right combination of elements to achieve a <strong>lower cost than Euro Pallets</strong>, without compromising on quality or strength. The same manufacturing technology as with Euro Pallets is applied, and the pallets are heat treated to <strong>IPPC ISPM-15 standards</strong>, making them ideal for cross-border and export usage.
                  </p>
                  <p className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 text-[#002b49] font-medium text-xs leading-relaxed">
                    These pallets are fully recyclable and designed to last for <strong>5–6 cycles</strong>, with a slightly lighter weight, leading to reduced transport and handling costs across Qatar and global trade lanes.
                  </p>
                </div>

                {/* 3 Core Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#f8fafc] border border-gray-200">
                    <Feather className="w-5 h-5 text-[#0099e5] mb-2" />
                    <h4 className="text-xs font-bold text-[#002b49]">Lightweight Design</h4>
                    <p className="text-[11px] text-gray-500 mt-1">Optimized for reduced transport costs and easier handling.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f8fafc] border border-gray-200">
                    <Flame className="w-5 h-5 text-amber-500 mb-2" />
                    <h4 className="text-xs font-bold text-[#002b49]">Heat Treated Quality</h4>
                    <p className="text-[11px] text-gray-500 mt-1">Meets IPPC ISPM-15 standards for international shipping.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f8fafc] border border-gray-200">
                    <RotateCcw className="w-5 h-5 text-emerald-600 mb-2" />
                    <h4 className="text-xs font-bold text-[#002b49]">Durable &amp; Recyclable</h4>
                    <p className="text-[11px] text-gray-500 mt-1">Designed for 5–6 cycles, fully recyclable for sustainability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: SPECIFICATIONS (With User Technical Blueprint Image)
            ========================================================================= */}
        <section className="py-20 bg-[#edf2f7] border-b border-gray-200" id="specifications">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                Engineering Data
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002b49] tracking-tight mt-1">
                AWMPC Pallet Technical Specifications
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Engineered with precise structural dimensions, certified structural fasteners, and high-load softwood and hardwood components.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Blueprint Image */}
              <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
                <div
                  className="relative w-full h-[320px] sm:h-[400px] overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage("/specification.png")}
                >
                  <Image
                    src="/specification.png"
                    alt="AWMPC Pallet Technical Drawing and Specifications"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 right-2 bg-[#002b49]/80 text-white text-[11px] px-3 py-1 rounded-lg backdrop-blur-sm">
                    Click to Expand Diagram 🔍
                  </div>
                </div>
                <p className="text-center text-xs text-gray-500 mt-3 font-medium">
                  Official Dimension Blueprint • 1200 x 800 x 140 mm
                </p>
              </div>

              {/* Right Column: Specification Data Table */}
              <div className="lg:col-span-6 space-y-4">
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
                  <div className="p-5 bg-[#002b49] text-white flex items-center justify-between">
                    <h3 className="text-sm font-bold uppercase tracking-wider">Specifications Breakdown</h3>
                    <span className="text-xs text-[#0099e5] font-bold">Standard 1200 x 800</span>
                  </div>

                  <div className="divide-y divide-gray-100 text-xs">
                    <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-bold text-[#002b49] w-36">Dimensions:</span>
                      <span className="text-gray-700 font-semibold sm:text-right">1200 x 800 x 140 mm</span>
                    </div>

                    <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                      <span className="font-bold text-[#002b49] w-36 shrink-0">Standards:</span>
                      <span className="text-gray-700 sm:text-right leading-relaxed">
                        Same outside dimensions as Euro Pallets (1200 x 800 mm), but optimized on inside dimensions. EPAL certified nails are used for Al Waad Manufacturing &amp; Packaging Company.
                      </span>
                    </div>

                    <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-bold text-[#002b49] w-36">Material:</span>
                      <span className="text-gray-700 sm:text-right font-medium">Soft and hard woods (e.g. pine, spruce, poplar)</span>
                    </div>

                    <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                      <span className="font-bold text-[#002b49] w-36 shrink-0">Additional Info:</span>
                      <span className="text-gray-700 sm:text-right leading-relaxed">
                        Unique in design and easily identifiable. A great cost-alternative to Euro Pallets. Fully recyclable.
                      </span>
                    </div>

                    <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-blue-50/40">
                      <span className="font-bold text-[#002b49] w-36">Heat Treatment:</span>
                      <span className="text-emerald-700 font-bold sm:text-right flex items-center sm:justify-end">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                        IPPC ISPM-15 Certified (Export Ready)
                      </span>
                    </div>

                    <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-blue-50/40">
                      <span className="font-bold text-[#002b49] w-36">Durability:</span>
                      <span className="text-[#002b49] font-bold sm:text-right">Designed for 5–6 rotations/cycles</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-gray-200 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <ShieldCheck className="w-5 h-5 text-[#0099e5]" />
                    <span>EPAL certified structural nails &amp; ISO 9001 quality audit</span>
                  </div>
                  <button
                    onClick={() => setContactOpen(true)}
                    className="text-[#0099e5] font-bold hover:underline"
                  >
                    Request Spec Sheet PDF →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: GET A QUOTE FORM
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100" id="quote">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Form Column */}
              <div className="lg:col-span-7 bg-[#f8fafc] border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-xs">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5]">
                    Fast Turnaround
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#002b49] tracking-tight mt-1">
                    Get A Quote for AWMPC Pallets
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                    Looking for customized packaging solutions? Get in touch with us today for a personalized quote. Our team is ready to provide competitive pricing and expert guidance tailored to your project needs.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-bold text-emerald-950">
                      Quote Request Received!
                    </h4>
                    <p className="text-xs text-emerald-800 max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Technical Team and our production team in Birkat Al-Awamer will calculate your volume pricing and email you at <strong>{formData.email}</strong> shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-3 px-6 py-2 rounded-full bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#002b49] mb-1">Full Name *</label>
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
                        <label className="block text-xs font-bold text-[#002b49] mb-1">Company Email *</label>
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
                        <label className="block text-xs font-bold text-[#002b49] mb-1">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+974 5119 1223"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#002b49] mb-1">Estimated Quantity (Units) *</label>
                        <input
                          type="number"
                          required
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          placeholder="e.g. 500"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002b49] mb-1">Select A Service / Product</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none bg-white font-semibold text-[#002b49]"
                      >
                        <option>AWMPC Pallets (1200 x 800 x 140 mm)</option>
                        <option>AWMPC Pallets (Custom Dimensions)</option>
                        <option>ISPM 15 Heat Treated Export Pallets</option>
                        <option>Continuous Pallet Pooling Loop</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002b49] mb-1">Project Details / Delivery Schedule</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please state expected delivery location in Qatar (e.g. Ras Laffan, Mesaieed, Hamad Port, Doha) and required dispatch dates..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-full bg-[#003366] hover:bg-[#002244] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Submit Quote Request</span>
                      <Send className="w-4 h-4" />
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
                    <p className="text-xs text-blue-200 mt-1">Birkat Al-Awamer, Al Wukair • State of Qatar</p>
                  </div>

                  {/* Direct WhatsApp Callout */}
                  <a
                    href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20would%20like%20to%20inquire%20about%20AWMPC%20Pallets"
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
                        <span className="text-gray-400 block text-[10px]">Mobile (Technical Team):</span>
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
                  <h4 className="font-bold text-[#002b49]">Compare vs. Standard Euro Pallets</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Save up to 25% on procurement without sacrificing static or dynamic load safety. All AWMPC Pallets are produced with EPAL certified structural nails and precision automated nailing.
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
              alt="Pallet Specification Preview"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full text-xs font-bold transition-all"
            >
              ✕ Close Preview
            </button>
          </div>
        </div>
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultTopic="AWMPC Pallets (1200 x 800 x 140 mm)"
      />
    </div>
  );
}

