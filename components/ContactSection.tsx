"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  Globe2,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "United States",
    service: "Packaging Solutions",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-200" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 text-emerald-700 text-xs font-bold tracking-wider uppercase bg-emerald-100 px-3 py-1 rounded-full mb-3">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Let&apos;s Get Acquainted</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
                Connect with our Global Supply Chain Team
              </h2>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                Whether you need a full site-wide packaging audit, custom dangerous goods battery engineering, or GreenCalc™ life-cycle modeling, our experts are here to help.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-2xl border border-gray-200/80 shadow-sm flex items-start space-x-4">
                <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl mt-0.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Global Corporate Headquarters
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Slottsgatan 2, Box 2184, SE-553 22 Jönköping, Sweden
                  </p>
                  <p className="text-xs text-emerald-700 font-semibold mt-1">
                    Phone: +46 (0) 771 590 000
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-gray-200/80 shadow-sm flex items-start space-x-4">
                <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Direct Email Inquiries
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    info@nefab.com (General & Corporate)
                  </p>
                  <p className="text-xs text-emerald-700 font-semibold mt-1">
                    greencalc@nefab.com (LCA Audit Support)
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-gray-200/80 shadow-sm flex items-start space-x-4">
                <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Fast Response Guarantee
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Our regional engineering teams respond to all commercial inquiries within 24 business hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Accreditations Trust */}
            <div className="p-4 rounded-2xl bg-emerald-950 text-white space-y-2">
              <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                Certified Quality Guarantee
              </span>
              <p className="text-xs text-gray-300">
                All customer designs undergo rigorous verification across certified ISTA drop, shock, vibration, and climatic testing chambers.
              </p>
            </div>
          </div>

          {/* Right Consultation Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-lg">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-950">
                  Inquiry Successfully Submitted!
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-gray-900">{formData.name}</span>. A Nefab packaging engineer from your designated territory will review your details and connect with you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-xs rounded-xl transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-gray-100 pb-3">
                  <h3 className="text-lg font-bold text-gray-950">
                    Request an Engineering Consultation
                  </h3>
                  <p className="text-xs text-gray-500">
                    Fill out the form below and we will route your inquiry to the relevant regional technical team.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Global Tech Corp"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Country / Region *
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    >
                      <option>United States & Canada</option>
                      <option>Germany, Austria, Switzerland</option>
                      <option>Sweden & Nordics</option>
                      <option>United Kingdom & Ireland</option>
                      <option>France & Benelux</option>
                      <option>China & East Asia</option>
                      <option>India & South Asia</option>
                      <option>Mexico & Latin America</option>
                      <option>Other / Global Territory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Primary Area of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    >
                      <option>Packaging Solutions (Outer/Inner/FiberFlute)</option>
                      <option>GreenCalc™ Life Cycle Analysis (LCA)</option>
                      <option>Returnable Packaging Pooling Loops</option>
                      <option>On-Site Contract Packing Operations</option>
                      <option>ISTA Laboratory Physical Testing</option>
                      <option>EU PPWR Compliance Audit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Describe your supply chain challenge / project requirements:
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Include product dimensions, weight, fragility rating, current materials, annual volume, or transit routes..."
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  ></textarea>
                </div>

                <div className="flex items-center space-x-2 text-[11px] text-gray-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    Your details are securely transmitted and processed in accordance with Nefab&apos;s GDPR privacy framework.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Consultation Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

