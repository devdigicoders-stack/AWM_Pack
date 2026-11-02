"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Send, PhoneCall, ShieldCheck, Globe } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export default function ContactModal({ isOpen, onClose, defaultTopic }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "Global / Other",
    service: defaultTopic || "Packaging Solutions",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultTopic) {
      setFormData((prev) => ({ ...prev, service: defaultTopic }));
    }
  }, [defaultTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-900 to-slate-900 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-1">
            <Globe className="w-3.5 h-3.5" />
            <span>Nefab Global Inquiries</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Connect with a Nefab Engineer
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">
            Let&apos;s discuss how to save resources, optimize total costs, and eliminate transit damage.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">
                Inquiry Received!
              </h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-gray-900">{formData.name}</span>. A specialized Nefab supply chain engineer from your region will contact you within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg shadow-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
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
                    className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
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
                    placeholder="Company Inc."
                    className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Country / Region *
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  >
                    <option>United States & Canada</option>
                    <option>Germany, Austria, Switzerland</option>
                    <option>Sweden & Nordics</option>
                    <option>United Kingdom & Ireland</option>
                    <option>France & Benelux</option>
                    <option>China & East Asia</option>
                    <option>India & South Asia</option>
                    <option>Latin America</option>
                    <option>Global / Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Primary Solution Needed
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                >
                  <option>Packaging Solutions (Outer/Inner/FiberFlute)</option>
                  <option>GreenCalc™ Life Cycle Analysis (LCA)</option>
                  <option>Contract Packing & Logistics Services</option>
                  <option>Returnable Packaging Pooling Systems</option>
                  <option>ISTA Testing & Engineering Validation</option>
                  <option>LiB Battery / Dangerous Goods Compliance</option>
                  <option>Other / General Partnership Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Message / Project Details
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide approximate volumes, current packaging challenges, or materials used..."
                  className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                ></textarea>
              </div>

              <div className="flex items-center space-x-2 text-[11px] text-gray-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Your information is protected under strict GDPR standards and never shared.</span>
              </div>

              <div className="pt-2 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg shadow-sm flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
