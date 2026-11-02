"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe,
  Mail,
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Leaf,
  Building,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      {/* Newsletter & Highlight Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-gray-950 border-b border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <Leaf className="w-3.5 h-3.5" />
              <span>Nefab Supply Chain Intelligence</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Stay informed on circular packaging & PPWR regulations
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Get our quarterly insights on reducing carbon footprints, Life Cycle Analyses (LCA), and engineered logistics innovations.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center space-x-2 bg-emerald-900/60 border border-emerald-500/50 text-emerald-300 px-5 py-3 rounded-xl text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Thank you for subscribing to Nefab Insights!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your corporate email..."
                  className="px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 w-full"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-lg whitespace-nowrap transition-colors flex items-center justify-center space-x-2 shadow-sm"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
            <p className="text-[11px] text-gray-500 mt-2">
              By subscribing, you agree to our privacy policy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2">
              <span className="text-3xl font-black tracking-tight text-white">NEFAB</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              We save resources in supply chains, for a better tomorrow. Global leader in engineered packaging and logistics services since 1949.
            </p>
            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <p className="font-semibold text-white">Global Headquarters</p>
              <p>Slottsgatan 2, SE-553 22</p>
              <p>Jönköping, Sweden</p>
            </div>
            <div className="pt-2 flex items-center space-x-3 text-gray-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-gray-900 hover:bg-emerald-950 hover:text-emerald-400 transition-colors"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8V10.9M7.86 6.3a1.63 1.63 0 1 0 1.63 1.63 1.63 1.63 0 0 0-1.63-1.63Z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-gray-900 hover:bg-emerald-950 hover:text-emerald-400 transition-colors"
                title="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.42-4.81ZM10 15V9l5.2 3-5.2 3Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-gray-900 hover:bg-emerald-950 hover:text-emerald-400 transition-colors"
                title="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 1: Solutions */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/solutions#packaging" className="hover:text-emerald-400 transition-colors">
                  Packaging Solutions
                </Link>
              </li>
              <li>
                <Link href="/solutions#fiberflute" className="hover:text-emerald-400 transition-colors">
                  FiberFlute™ Cushioning
                </Link>
              </li>
              <li>
                <Link href="/solutions#expak" className="hover:text-emerald-400 transition-colors">
                  ExPak Plywood Crates
                </Link>
              </li>
              <li>
                <Link href="/solutions#logistics" className="hover:text-emerald-400 transition-colors">
                  Contract Packing Services
                </Link>
              </li>
              <li>
                <Link href="/solutions#pooling" className="hover:text-emerald-400 transition-colors">
                  Returnable Pooling Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions#digital" className="hover:text-emerald-400 transition-colors">
                  Digital IoT Track & Trace
                </Link>
              </li>
              <li>
                <Link href="/solutions#multimaterial" className="hover:text-emerald-400 transition-colors">
                  Multi-Material Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Industries */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              Industries
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/industries#datacom" className="hover:text-emerald-400 transition-colors">
                  Datacom & Cloud
                </Link>
              </li>
              <li>
                <Link href="/industries#telecom" className="hover:text-emerald-400 transition-colors">
                  Telecom & Networks
                </Link>
              </li>
              <li>
                <Link href="/industries#energy" className="hover:text-emerald-400 transition-colors">
                  Energy & Power Grid
                </Link>
              </li>
              <li>
                <Link href="/industries#battery" className="hover:text-emerald-400 transition-colors">
                  LiB & E-Mobility (Batteries)
                </Link>
              </li>
              <li>
                <Link href="/industries#medtech" className="hover:text-emerald-400 transition-colors">
                  Healthcare & MedTech
                </Link>
              </li>
              <li>
                <Link href="/industries#mining" className="hover:text-emerald-400 transition-colors">
                  Mining & Construction
                </Link>
              </li>
              <li>
                <Link href="/industries#semicon" className="hover:text-emerald-400 transition-colors">
                  Semiconductors
                </Link>
              </li>
              <li>
                <Link href="/industries#aerospace" className="hover:text-emerald-400 transition-colors">
                  Aerospace & Defense
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sustainability & Engineering */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              Sustainability & Labs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/sustainability#purpose" className="hover:text-emerald-400 transition-colors">
                  Saving Resources Purpose
                </Link>
              </li>
              <li>
                <Link href="/sustainability#greencalc" className="hover:text-emerald-400 transition-colors flex items-center">
                  <span>GreenCalc™ LCA Tool</span>
                  <span className="ml-1 text-[9px] bg-emerald-500/20 text-emerald-400 px-1 py-0.2 rounded">LCA</span>
                </Link>
              </li>
              <li>
                <Link href="/sustainability#circular" className="hover:text-emerald-400 transition-colors">
                  Circular Economy Models
                </Link>
              </li>
              <li>
                <Link href="/sustainability#ppwr" className="hover:text-emerald-400 transition-colors">
                  EU PPWR Regulatory Guide
                </Link>
              </li>
              <li>
                <Link href="/engineering#total-cost" className="hover:text-emerald-400 transition-colors">
                  The Total Cost Approach
                </Link>
              </li>
              <li>
                <Link href="/engineering#labs" className="hover:text-emerald-400 transition-colors">
                  ISTA Certified Test Labs
                </Link>
              </li>
              <li>
                <Link href="/engineering#engineers" className="hover:text-emerald-400 transition-colors">
                  200+ Packaging Engineers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: About & Global */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Nefab Group
                </Link>
              </li>
              <li>
                <Link href="/about#history" className="hover:text-emerald-400 transition-colors">
                  History (Founded 1949)
                </Link>
              </li>
              <li>
                <Link href="/about#ownership" className="hover:text-emerald-400 transition-colors">
                  Owners: FAM AB & Nordgren/Pihl
                </Link>
              </li>
              <li>
                <Link href="/about#locations" className="hover:text-emerald-400 transition-colors">
                  39 Countries & 145 Sites
                </Link>
              </li>
              <li>
                <Link href="/about#careers" className="hover:text-emerald-400 transition-colors">
                  Careers & Job Openings
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-emerald-400 transition-colors">
                  Press Releases & News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors font-medium text-emerald-400">
                  Global Contact Directory
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditations Badges */}
        <div className="mt-14 pt-8 border-t border-gray-800 flex flex-wrap items-center justify-between gap-6 text-xs text-gray-400">
          <div className="flex flex-wrap items-center gap-6">
            <span className="font-semibold text-gray-300">Certified Standards:</span>
            <div className="flex items-center space-x-2 bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ISO 9001 Quality</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-md">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>ISO 14001 Environmental</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-md">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>ISTA Certified Labs</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-md">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>FSC® Certified Sourcing</span>
            </div>
          </div>

          <div className="text-gray-400 text-xs">
            Global Net-Zero Commitment by 2030
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Nefab Group. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link href="/about" className="hover:text-gray-400">Privacy Policy</Link>
            <Link href="/about" className="hover:text-gray-400">Cookie Settings</Link>
            <Link href="/about" className="hover:text-gray-400">Whistleblowing Channel</Link>
            <Link href="/about" className="hover:text-gray-400">Code of Conduct</Link>
            <Link href="/about" className="hover:text-gray-400">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
