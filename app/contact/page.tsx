"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import ContactSection from "../../components/ContactSection";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  Globe2,
} from "lucide-react";

export default function ContactPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      <main className="flex-1">
        {/* Contact Hero */}
        <div className="bg-gradient-to-b from-[#090d16] via-[#0f172a] to-[#0b1120] text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/40 rounded-full px-4 py-1 text-xs text-emerald-300">
                <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold uppercase tracking-wider">
                  Global Contact Network
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Get in Touch with Nefab
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Our global network of 6,000+ packaging specialists and engineers is ready to support your operations across 39 countries. Connect with your local team today.
              </p>
            </div>
          </div>
        </div>

        {/* Regional Hubs Grid */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-950 mb-8">
              Regional Operating Headquarters
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Global & Europe HQ
                </span>
                <h3 className="text-base font-bold text-gray-900">
                  Jönköping, Sweden
                </h3>
                <p className="text-xs text-gray-500">
                  Slottsgatan 2, Box 2184<br />
                  SE-553 22 Jönköping, Sweden
                </p>
                <p className="text-xs text-emerald-700 font-semibold pt-2">
                  +46 (0) 771 590 000
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Americas HQ
                </span>
                <h3 className="text-base font-bold text-gray-900">
                  Dallas, Texas, USA
                </h3>
                <p className="text-xs text-gray-500">
                  2515 E. State Hwy 121<br />
                  Lewisville, TX 75056, USA
                </p>
                <p className="text-xs text-emerald-700 font-semibold pt-2">
                  +1 (800) 359 8652
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Asia-Pacific HQ
                </span>
                <h3 className="text-base font-bold text-gray-900">
                  Shanghai, China
                </h3>
                <p className="text-xs text-gray-500">
                  Building 2, No. 588 Ziyue Rd<br />
                  Minhang District, Shanghai, China
                </p>
                <p className="text-xs text-emerald-700 font-semibold pt-2">
                  +86 21 6128 3600
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Middle East & Africa HQ
                </span>
                <h3 className="text-base font-bold text-gray-900">
                  Dubai, UAE
                </h3>
                <p className="text-xs text-gray-500">
                  Jebel Ali Free Zone<br />
                  PO Box 18234, Dubai, UAE
                </p>
                <p className="text-xs text-emerald-700 font-semibold pt-2">
                  +971 4 883 4500
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Consultation Section */}
        <ContactSection />
      </main>

      <Footer />

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}

