"use client";

import React from "react";
import Link from "next/link";
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
} from "lucide-react";

export default function ConsultingHubPage() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Top Breadcrumb Bar */}
      <div className="bg-[#002b49] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-blue-900">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0099e5] font-semibold">Consulting Services</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block bg-[#0099e5]/20 text-[#0099e5] border border-[#0099e5]/40 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
              Strategic Supply Chain Advisory • AWMPC Qatar
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Materials Handling Consulting
            </h1>
            <p className="mt-4 text-lg text-blue-100 leading-relaxed">
              Unlock proven financial ROI, total cost of ownership (TCO) optimization, and sustainable circular logistics across your packaging supply chain.
            </p>
          </div>
        </div>
      </div>

      {/* Two Consulting Pathways Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/40 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#0099e5] block mb-2">
              Our Advisory Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002b49]">
              Specialized Consulting Programs
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Choose between our risk-free 4% savings cost analysis or comprehensive materials handling advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pathway 1: Analysis – No-Cure-No-Pay */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:border-[#0099e5]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#002b49] text-[#0099e5] flex items-center justify-center group-hover:bg-[#0099e5] group-hover:text-white transition-colors">
                    <Percent className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Guaranteed 4% Savings
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#002b49] mb-3 group-hover:text-[#0099e5] transition-colors">
                  Analysis – No-Cure-No-Pay
                </h3>

                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Discover Your True Materials Handling Costs
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Do you really know how much money you spend on Materials Handling – and how much of this on Handling Materials? We present you with a guaranteed plan for how to improve your Total Costs of Ownership (TCO) with a guaranteed 4% savings – <strong>No-Cure-No-Pay!!</strong>
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-[#0099e5] mr-2 shrink-0" />
                    <span>Handling Materials Design Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-[#0099e5] mr-2 shrink-0" />
                    <span>Transparency Analysis &amp; True Costs</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-[#0099e5] mr-2 shrink-0" />
                    <span>Sustainability &amp; Carbon Footprint Analysis</span>
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

            {/* Pathway 2: Handling Materials Consulting */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:border-emerald-500">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Handshake className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#0099e5] border border-blue-200">
                    2 Flexible Engagement Models
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#002b49] mb-3 group-hover:text-emerald-600 transition-colors">
                  Handling Materials Consulting
                </h3>

                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Partner with AWMPC OR Arms-Length Expert Consulting
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Select AWMPC as your end-to-end handling partner with analysis at no further costs, or engage our independent advisory on an &ldquo;arms length&rdquo; contract leaving you free to implement recommendations with any vendor.
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                    <span>Sustainable Logistics &amp; Product Re-design</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                    <span>Value Chain Improvement &amp; Pallet Pooling</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                    <span>Digital Transformation &amp; Generation 5 Pallet Tracking</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                    <span>Automated Warehouse &amp; AGV Compatibility</span>
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
          </div>
        </div>
      </section>

      {/* CEO Quote Strip */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#002b49] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <Quote className="w-10 h-10 text-[#0099e5] mx-auto opacity-70" />
          <blockquote className="text-base sm:text-xl font-medium leading-relaxed italic text-blue-100">
            &ldquo;The main reason why clients are reluctant to carry out these analyses is the fear that they won&apos;t yield any tangible results and that the money and time spent on this will be wasted. Therefore, we provide a No-Cure-No-Pay proposition.&rdquo;
          </blockquote>
          <div className="pt-2">
            <p className="font-black text-white text-base tracking-wide">
              ANTONIO ROSTIROLLA
            </p>
            <p className="text-xs font-semibold text-[#0099e5] uppercase">
              CEO of Al Waad Manufacturing Packaging Company - Qatar
            </p>
          </div>
        </div>
      </section>

      {/* Fast Direct Contact Bar */}
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
            <Link
              href="/consulting/no-cure-no-pay#audit-form"
              className="px-6 py-3 rounded-full bg-[#002b49] hover:bg-[#0099e5] text-white font-bold text-xs shadow transition-all"
            >
              Request Free Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
