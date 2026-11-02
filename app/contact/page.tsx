"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "Sweden",
    topic: "Packaging Solutions Review",
    message: "",
  });

  const hubs = [
    {
      region: "europe",
      title: "Global & European Headquarters",
      city: "Jönköping, Sweden",
      address: "Slottsgatan 2, Box 2184, SE-553 22 Jönköping",
      phone: "+46 (0) 771 590 000",
      email: "nordics@nefab.com",
      badge: "Global HQ",
    },
    {
      region: "europe",
      title: "Central Europe Engineering Hub",
      city: "Frankfurt / Cologne, Germany",
      address: "Gewerbepark Nord 12, D-53859 Niederkassel",
      phone: "+49 2208 9450 0",
      email: "germany@nefab.com",
      badge: "ISTA Certified Lab",
    },
    {
      region: "europe",
      title: "Western Europe Operations",
      city: "Paris / Lyon, France",
      address: "15 Rue du Pré Saint-Gervais, 93500 Pantin",
      phone: "+33 1 48 10 32 00",
      email: "france@nefab.com",
      badge: "Aerospace Hub",
    },
    {
      region: "americas",
      title: "Americas Headquarters",
      city: "Dallas (Lewisville), Texas, USA",
      address: "2515 E. State Hwy 121, Lewisville, TX 75056",
      phone: "+1 (800) 359 8652",
      email: "americas@nefab.com",
      badge: "LiB Dangerous Goods Lab",
    },
    {
      region: "americas",
      title: "Silicon Valley Tech Center",
      city: "San Jose, California, USA",
      address: "2150 Ringwood Ave, San Jose, CA 95131",
      phone: "+1 (408) 433 9800",
      email: "california@nefab.com",
      badge: "Datacom & Cloud",
    },
    {
      region: "americas",
      title: "Latin America Hub",
      city: "Guadalajara, Mexico",
      address: "Parque Industrial El Salto, Jalisco",
      phone: "+52 33 3688 0000",
      email: "mexico@nefab.com",
      badge: "Automotive Hub",
    },
    {
      region: "asia",
      title: "Asia-Pacific Headquarters",
      city: "Shanghai, China",
      address: "Building 2, No. 588 Ziyue Rd, Minhang District",
      phone: "+86 21 6128 3600",
      email: "china@nefab.com",
      badge: "APAC HQ & Lab",
    },
    {
      region: "asia",
      title: "India Technology Center",
      city: "Bangalore & Pune, India",
      address: "Plot 42, Electronic City Phase 2, Bangalore 560100",
      phone: "+91 80 4123 7800",
      email: "india@nefab.com",
      badge: "High-Tech Engineering",
    },
  ];

  const filteredHubs =
    selectedRegion === "all"
      ? hubs
      : hubs.filter((h) => h.region === selectedRegion);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0c2340] selection:bg-orange-100 selection:text-[#eb6608]">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      <main className="flex-1">
        {/* =========================================================================
            CONTACT HERO
            ========================================================================= */}
        <section className="relative bg-[#0c2340] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2000&auto=format&fit=crop"
              alt="Hands cradling symbolizing care and global support"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <span className="inline-block bg-[#13294b] border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Global Contact Network • 145 Locations
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Get in Touch with Nefab
              </h1>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
                Our global network of over 6,000 packaging specialists and certified test engineers is ready to support your operations across 39 countries. Connect with your local engineering squad today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Main Info */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Direct Inquiry Form */}
              <div className="lg:col-span-7 bg-[#f8fafc] border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-xs">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#eb6608]">
                    Send a Message
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0c2340] tracking-tight mt-1">
                    Connect with an Engineer
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Fill out the form below and a regional packaging specialist will respond within 1 business day.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="text-lg font-bold text-emerald-950">
                      Thank you for contacting Nefab!
                    </h3>
                    <p className="text-xs text-emerald-800 max-w-md mx-auto">
                      Your inquiry has been routed to our regional engineering team. We have sent a confirmation email to <strong>{formData.email}</strong>.
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
                        <label className="block text-xs font-bold text-[#0c2340] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Sigurd Nordgren"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#eb6608] focus:border-transparent outline-none bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#0c2340] mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sigurd@enterprise.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#eb6608] focus:border-transparent outline-none bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0c2340] mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Global Manufacturing AB"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#eb6608] focus:border-transparent outline-none bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#0c2340] mb-1">
                          Inquiry Topic *
                        </label>
                        <select
                          value={formData.topic}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#eb6608] focus:border-transparent outline-none bg-white"
                        >
                          <option>Packaging Solutions Review</option>
                          <option>EU PPWR Compliance Consultation</option>
                          <option>ISTA Lab Testing Request</option>
                          <option>FiberFlute™ Foam Replacement</option>
                          <option>Contract Logistics & Packing</option>
                          <option>Returnable Pooling Systems</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0c2340] mb-1">
                        Message / Project Specifications *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your cargo dimensions, annual shipping volume, destinations, and specific regulatory or shock limits..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#eb6608] focus:border-transparent outline-none bg-white"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-full bg-[#eb6608] hover:bg-[#d45600] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                      >
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Column: Key Contacts Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#0c2340] text-white p-8 rounded-3xl space-y-4">
                  <h3 className="text-xl font-black text-white">Direct Line to Specialists</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Need immediate assistance with a high-value shipment or international dangerous goods container? Call our dedicated client helpdesks:
                  </p>
                  <div className="space-y-3 pt-2 text-xs">
                    <div className="flex items-center space-x-3">
                      <PhoneCall className="w-4 h-4 text-orange-400 shrink-0" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Europe & Nordics:</span>
                        <a href="tel:+46771590000" className="font-bold text-white hover:text-orange-300">+46 (0) 771 590 000</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <PhoneCall className="w-4 h-4 text-orange-400 shrink-0" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">North & South America:</span>
                        <a href="tel:+18003598652" className="font-bold text-white hover:text-orange-300">+1 (800) 359 8652</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <PhoneCall className="w-4 h-4 text-orange-400 shrink-0" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Asia-Pacific:</span>
                        <a href="tel:+862161283600" className="font-bold text-white hover:text-orange-300">+86 21 6128 3600</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-[#edf2f7] border border-gray-200/80 space-y-3">
                  <h4 className="text-sm font-bold text-[#0c2340]">Certified Global Standards</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    All Nefab operating locations are audited annually under ISO 9001 (Quality), ISO 14001 (Environment), and ISO 45001 (Health & Safety).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Hubs Directory with Filter */}
        <section className="py-20 bg-[#edf2f7]" id="regional-directory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#eb6608]">
                  Global Operating Footprint
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0c2340] tracking-tight mt-1">
                  Regional Operating Headquarters
                </h2>
              </div>

              {/* Region Filter Buttons */}
              <div className="flex flex-wrap gap-2 text-xs font-bold">
                {[
                  { id: "all", label: "All Regions" },
                  { id: "europe", label: "Europe" },
                  { id: "americas", label: "Americas" },
                  { id: "asia", label: "Asia-Pacific" },
                ].map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRegion(r.id)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      selectedRegion === r.id
                        ? "bg-[#0c2340] text-white shadow-xs"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredHubs.map((hub) => (
                <div
                  key={hub.city}
                  className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-[#0066cc] border border-blue-100">
                      {hub.badge}
                    </span>
                    <h3 className="text-base font-bold text-[#0c2340]">
                      {hub.city}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {hub.address}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-1">
                    <p className="text-xs font-bold text-[#0c2340]">{hub.phone}</p>
                    <p className="text-xs text-[#eb6608] font-semibold">{hub.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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