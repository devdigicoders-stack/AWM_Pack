"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send, PhoneCall, ShieldCheck, Globe, MapPin } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export default function ContactModal({ isOpen, onClose, defaultTopic }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: defaultTopic || "Standard Wooden Pallets",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/75 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#00223a] to-[#003366] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2 text-[#0099e5] text-xs font-semibold tracking-wider uppercase mb-1">
            <Globe className="w-3.5 h-3.5" />
            <span>AWMPACK Factory Inquiries • State of Qatar 🇶🇦</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Connect with Technical Team
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 mt-1">
            Factory Manager, Al Waad Manufacturing Packaging Company (AWMPC)
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
                Inquiry Received by AWMPACK Factory!
              </h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-gray-900">{formData.name}</span>. Technical Team and our production team in Birkat Al-Awamer will review your specifications and contact you at <span className="font-semibold">{formData.email}</span> within 1 business day.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#003366] hover:bg-[#002244] text-white font-semibold text-sm rounded-full shadow-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#002b49] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ahmed Al-Kuwari"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#002b49] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ahmed@company.qa"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#002b49] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+974 5555 1234"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#002b49] mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Qatar Logistics WLL"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#002b49] mb-1">
                  Product / Service of Interest *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none bg-white"
                >
                  <option>Standard Wooden Pallets (Euro / GMA)</option>
                  <option>Custom Industrial Pallets</option>
                  <option>Heavy Wooden Boxes & Export Crates</option>
                  <option>Pallet Collars & Metal Stillages</option>
                  <option>ISPM 15 Certified Heat Treatment</option>
                  <option>Compressed Sawdust Wood Blocks</option>
                  <option>Pallet Repair & Pooling Service</option>
                  <option>Wood Waste Recycling Program</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#002b49] mb-1">
                  Message / Dimensions / Volume *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify required pallet dimensions (e.g. 1200x1000mm), payload weight, quantities, or export destination..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0099e5] outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[11px] text-gray-500 space-y-0.5 w-full sm:w-auto">
                  <p className="flex items-center">
                    <PhoneCall className="w-3 h-3 mr-1 text-[#0099e5]" />
                    Direct: +974 5119 1223 / +974 4039 4581
                  </p>
                  <a
                    href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20would%20like%20to%20inquire%20about%20pallets"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-bold text-[11px]"
                  >
                    Chat on WhatsApp (+974 5119 1223) →
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#002b49] hover:bg-[#0099e5] text-white text-xs font-bold shadow-md transition-all flex items-center justify-center space-x-1.5 whitespace-nowrap"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
  );
}