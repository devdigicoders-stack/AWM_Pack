"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SolutionsOverview from "../components/SolutionsOverview";
import TotalCostApproach from "../components/TotalCostApproach";
import GreenCalcCalculator from "../components/GreenCalcCalculator";
import IndustrySolutions from "../components/IndustrySolutions";
import SustainabilitySection from "../components/SustainabilitySection";
import CaseStudies from "../components/CaseStudies";
import GlobalFootprint from "../components/GlobalFootprint";
import InsightsSection from "../components/InsightsSection";
import ContactSection from "../components/ContactSection";
import SearchModal from "../components/SearchModal";
import ContactModal from "../components/ContactModal";

export default function HomePage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Packaging Solutions");

  const handleOpenContactWithTopic = (topic: string) => {
    setContactTopic(topic);
    setContactOpen(true);
  };

  const handleScrollToGreenCalc = () => {
    const el = document.getElementById("greencalc");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header */}
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("Packaging Solutions");
          setContactOpen(true);
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onOpenContact={() => {
            setContactTopic("General Solutions Inquiries");
            setContactOpen(true);
          }}
          onScrollToGreenCalc={handleScrollToGreenCalc}
        />

        {/* 2. Core Solutions Overview */}
        <SolutionsOverview
          onOpenContact={() => {
            setContactTopic("Packaging Solutions Assessment");
            setContactOpen(true);
          }}
        />

        {/* 3. Total Cost Approach (Methodology) */}
        <TotalCostApproach
          onOpenContact={() => {
            setContactTopic("Total Cost Approach Audit");
            setContactOpen(true);
          }}
        />

        {/* 4. Interactive GreenCalc™ Savings Calculator */}
        <GreenCalcCalculator
          onOpenContactWithTopic={handleOpenContactWithTopic}
        />

        {/* 5. Industry-Specific Solutions */}
        <IndustrySolutions
          onOpenContact={() => {
            setContactTopic("Industry Specific Solutions");
            setContactOpen(true);
          }}
        />

        {/* 6. Sustainability & Strategy 2030 */}
        <SustainabilitySection
          onOpenContact={() => {
            setContactTopic("Sustainability & PPWR Review");
            setContactOpen(true);
          }}
        />

        {/* 7. Real Customer Case Studies */}
        <CaseStudies
          onOpenContact={() => {
            setContactTopic("Customer Case Study Inquiries");
            setContactOpen(true);
          }}
        />

        {/* 8. Global Footprint (39 Countries, 145 Sites) */}
        <GlobalFootprint
          onOpenContact={() => {
            setContactTopic("Local Facility Contact");
            setContactOpen(true);
          }}
        />

        {/* 9. Latest Insights & Whitepapers */}
        <InsightsSection
          onOpenContact={() => {
            setContactTopic("Whitepaper & Research Consultation");
            setContactOpen(true);
          }}
        />

        {/* 10. Direct Contact / Consultation Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultTopic={contactTopic}
      />
    </div>
  );
}
