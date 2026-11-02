"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NefabOfficialHome from "../components/NefabOfficialHome";
import GreenCalcCalculator from "../components/GreenCalcCalculator";
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

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0c2340] selection:bg-orange-100 selection:text-[#eb6608]">
      {/* 1. Official Header */}
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => {
          setContactTopic("General Solutions Inquiries");
          setContactOpen(true);
        }}
      />

      {/* 2. Official Nefab 10-Section Homepage Matching Exact Screenshot */}
      <main className="flex-1">
        <NefabOfficialHome
          onOpenContactWithTopic={handleOpenContactWithTopic}
        />

        {/* Bonus Interactive GreenCalc™ LCA Calculator */}
        <div className="border-t border-gray-100">
          <GreenCalcCalculator
            onOpenContactWithTopic={handleOpenContactWithTopic}
          />
        </div>
      </main>

      {/* 3. Official Footer */}
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
