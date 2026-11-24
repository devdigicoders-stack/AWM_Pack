"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchModal from "../../components/SearchModal";
import ContactModal from "../../components/ContactModal";
import {
  Boxes,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Flame,
  Leaf,
  Layers,
  Send,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Sparkles,
  Maximize2,
  Package,
  Award,
  Factory,
  Check,
  Eye,
} from "lucide-react";
import { FadeInStagger, FadeInStaggerItem, HoverCard } from "../../components/motion/MotionComponents";

export default function GalleryPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    category: string;
    description: string;
    link?: string;
  } | null>(null);

  const galleryItems = [
    {
      id: "awmpc-pallets",
      title: "AWMPC Pallets (Our Unique Pallet Solution)",
      category: "pallets",
      categoryName: "Pallets",
      image: "/Our%20Unique%20Pallet%20Solution.png",
      badge: "Proprietary Innovation",
      description:
        "1200 x 800 x 140 mm proprietary pallet engineered as a superior, cost-effective alternative to Euro pallets with EPAL certified nails.",
      link: "/solutions/awmpc-pallets",
    },
    {
      id: "industrial-pallets",
      title: "1200 x 1000 Heavy Industrial Pallets",
      category: "pallets",
      categoryName: "Pallets",
      image: "/industrial-pallets-heavy.png",
      badge: "Heavy Duty 2500 kg",
      description:
        "High-load perimeter base pallets engineered for automated warehouse racking, heavy manufacturing, and petrochemical storage.",
      link: "/solutions/industrial-pallets",
    },
    {
      id: "used-pallets",
      title: "Certified Reconditioned Used Pallets",
      category: "pallets",
      categoryName: "Pallets",
      image: "/used-pallets-certified.png",
      badge: "Grades A & B",
      description:
        "Inspected and repaired multi-trip pallets engineered to cycle 5–6 times. Part of our warehouse buyback and exchange loop.",
      link: "/solutions/used-pallets",
    },
    {
      id: "half-pallets",
      title: "Half Pallets (Düsseldorf DIN 15146)",
      category: "pallets",
      categoryName: "Pallets",
      image: "/half-pallets-compact.png",
      badge: "Retail POP Display",
      description:
        "Compact 600 x 800 mm pallets transportable directly onto supermarket floors without unboxing, eliminating case picking.",
      link: "/solutions/half-pallets",
    },
    {
      id: "special-pallets",
      title: "Custom Engineered Special Pallets",
      category: "pallets",
      categoryName: "Pallets",
      image: "/special-pallets-custom.png",
      badge: "Bespoke CAD Design",
      description:
        "Engineered for heavy oilfield valves, power transformers, chemical skids, and oversized machinery payloads up to 10+ tons.",
      link: "/solutions/special-pallets",
    },
    {
      id: "one-way-pallets",
      title: "One-Way Export Pallets (OWP)",
      category: "pallets",
      categoryName: "Pallets",
      image: "/one-way-pallets-export.png",
      badge: "Lowest Freight Tare",
      description:
        "Lightweight pine pallets built for single-trip ocean container and air freight shipments with zero return logistics costs.",
      link: "/solutions/one-way-pallets",
    },
    {
      id: "pallet-collars",
      title: "Hinged Wooden Pallet Collars",
      category: "boxes",
      categoryName: "Boxes & Collars",
      image: "/pallet-collars-hinged.png",
      badge: "Collapsible Hinged",
      description:
        "Modular wooden collars with galvanized corner hinges. Stackable 1 to 5 tiers high, folding flat to save 80% return volume.",
      link: "/solutions/pallet-collars",
    },
    {
      id: "wooden-boxes-crates",
      title: "Heavy-Duty Seaworthy Export Crates",
      category: "boxes",
      categoryName: "Boxes & Collars",
      image: "/wooden-boxes-crates-heavy.png",
      badge: "Seaworthy Certified",
      description:
        "Fully enclosed solid timber and birch plywood packaging featuring internal shock cradles and VCI corrosion barrier protection.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "heat-chamber",
      title: "Pallets Entering Thermal Heat Treatment Chamber",
      category: "treatment",
      categoryName: "Heat Treatment",
      image: "/heat-treatment-chamber.png",
      badge: "Chamber Loading",
      description:
        "High-capacity industrial kiln chambers heating timber cores to a minimum of 56°C for 30 continuous minutes in Birkat Al-Awamer.",
      link: "/solutions/heat-treatment",
    },
    {
      id: "heat-export-ready",
      title: "Heat-Treated Pallets Ready for Export",
      category: "treatment",
      categoryName: "Heat Treatment",
      image: "/heat-treated-export-ready.png",
      badge: "IPPC HT Stamped",
      description:
        "Freshly treated pallet stacks stamped with authentic IPPC wheat ear 'QA - HT' marks for worldwide customs clearance.",
      link: "/solutions/heat-treatment",
    },
    {
      id: "sawdust-blocks",
      title: "High-Density Compressed Sawdust Wood Blocks",
      category: "recycling",
      categoryName: "Recycled Blocks",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
      badge: "2x Nail Grip",
      description:
        "Eco-friendly pallet blocks molded from recycled sawdust under extreme heat and hydraulic pressure. Naturally ISPM-15 exempt.",
      link: "/solutions/compressed-sawdust-wood-blocks",
    },
    {
      id: "phytosanitary-cert",
      title: "Phytosanitary Certification Regulations",
      category: "certifications",
      categoryName: "Certifications",
      image: "/Phytosanitary%20Certification.png",
      badge: "Global Regulation",
      description:
        "Official phytosanitary compliance documentation map for international cross-border cargo shipping and port biosecurity.",
      link: "/about",
    },
    {
      id: "ispm-seal",
      title: "ISPM Seal Requirement & Customs Compliance",
      category: "certifications",
      categoryName: "Certifications",
      image: "/ISPM%20Seal%20Requirement.png",
      badge: "Customs Clearance",
      description:
        "Certified thermal treatment stamp specifications required by international customs, quarantine, and phytosanitary authorities.",
      link: "/about",
    },
    {
      id: "awmpc-specification-drawing",
      title: "AWMPC Pallet Technical Blueprint & Drawing",
      category: "pallets",
      categoryName: "Pallets",
      image: "/specification.png",
      badge: "Engineering Drawing",
      description:
        "Detailed CAD blueprint showing exact top deckboard layout, stringer blocks, and chamfered bottom boards of AWMPC Pallets.",
      link: "/solutions/awmpc-pallets",
    },
  ];

  const categories = [
    { id: "all", label: `All Facilities & Products (${galleryItems.length})` },
    { id: "pallets", label: "Pallets (7)" },
    { id: "boxes", label: "Boxes & Collars (2)" },
    { id: "treatment", label: "Heat Treatment & Kilns (2)" },
    { id: "recycling", label: "Recycled Blocks (1)" },
    { id: "certifications", label: "Certifications (2)" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

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
            alt="AWMPACK Industrial Manufacturing Plant Gallery in Qatar"
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
                  <span className="text-[#0099e5] font-bold">Factory Gallery</span>
                </div>

                <div className="inline-flex items-center space-x-2 bg-[#0099e5]/25 border border-[#0099e5]/40 text-blue-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                  <Factory className="w-3.5 h-3.5 text-[#0099e5]" />
                  <span>Manufacturing &bull; Kilns &bull; Testing &bull; Birkat Al-Awamer 🇶🇦</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    Factory &amp; Product Gallery
                  </h1>
                  <p className="text-blue-300 text-sm sm:text-base font-bold tracking-wide uppercase">
                    Al Waad Manufacturing Packaging Company (AWMPC) &bull; State of Qatar
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                  Visual portfolio of our industrial wooden pallet production lines, automated thermal heat-treatment kilns, seaworthy export crating, and compressed sawdust recycling operations.
                </p>

                <div className="pt-1.5 flex flex-wrap gap-3">
                  <button
                    onClick={() => setContactOpen(true)}
                    className="px-6 py-2.5 bg-[#0099e5] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Schedule Factory Visit
                  </button>
                  <a
                    href="#gallery-grid"
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all"
                  >
                    Browse Visual Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            FILTER TABS
            ========================================================================= */}
        <div className="sticky top-[73px] z-30 bg-[#edf2f7] border-b border-gray-200 py-3 shadow-xs" id="gallery-grid">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between overflow-x-auto text-xs font-bold whitespace-nowrap gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 uppercase tracking-wider hidden sm:inline mr-2">Category:</span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#002b49] text-white shadow-xs"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setContactOpen(true)}
              className="text-[#0099e5] hover:underline font-bold shrink-0"
            >
              Request Custom Batch Quote &rarr;
            </button>
          </div>
        </div>

        {/* =========================================================================
            GALLERY GRID
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <FadeInStaggerItem key={item.id}>
                  <HoverCard lift={8} className="h-full">
                    <div
                      className="bg-[#f8fafc] border border-gray-200/90 rounded-3xl overflow-hidden hover:shadow-xl hover:border-[#0099e5]/60 transition-all flex flex-col justify-between group h-full"
                    >
                  {/* Image container */}
                  <div
                    className="relative w-full h-[260px] sm:h-[300px] bg-white cursor-pointer overflow-hidden"
                    onClick={() =>
                      setSelectedImage({
                        src: item.image,
                        title: item.title,
                        category: item.categoryName,
                        description: item.description,
                        link: item.link,
                      })
                    }
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute top-4 left-4 bg-[#002b49]/90 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
                      {item.badge}
                    </div>

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-white/90 text-[#002b49] rounded-full text-xs font-bold shadow-lg flex items-center space-x-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Click to Enlarge</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0099e5]">
                        {item.categoryName}
                      </span>
                      <h3 className="text-lg font-black text-[#002b49] group-hover:text-[#0099e5] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                      {item.link ? (
                        <Link
                          href={item.link}
                          className="text-xs font-bold text-[#002b49] hover:text-[#0099e5] flex items-center space-x-1"
                        >
                          <span>View Product Specs</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      ) : (
                        <span className="text-xs text-gray-400 font-semibold">Official Regulation</span>
                      )}

                      <button
                        onClick={() => {
                          setSelectedImage({
                            src: item.image,
                            title: item.title,
                            category: item.categoryName,
                            description: item.description,
                            link: item.link,
                          });
                        }}
                        className="p-2 text-gray-400 hover:text-[#0099e5] hover:bg-white rounded-full transition-colors"
                        title="Enlarge"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
          </div>
        </section>

        {/* =========================================================================
            FACILITY HIGHLIGHTS BANNER
            ========================================================================= */}
        <section className="py-20 bg-[#001829] text-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0099e5] block">
                  Birkat Al-Awamer Plant
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  15,000 m&sup2; Modern Industrial Packaging Complex
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Located strategically in Zone 91, Street 3012, Al Wukair, AWMPC operates Qatar&apos;s most advanced wooden pallet and crating facility. Equipped with high-capacity ISPM-15 thermal chambers, automated pneumatic nailing jigs, and circular sawdust recycling extruders.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  <div className="bg-[#002b49] p-4 rounded-2xl border border-blue-900/60 text-center">
                    <span className="text-2xl sm:text-3xl font-black text-[#0099e5] block">500K+</span>
                    <span className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold">Annual Pallets</span>
                  </div>
                  <div className="bg-[#002b49] p-4 rounded-2xl border border-blue-900/60 text-center">
                    <span className="text-2xl sm:text-3xl font-black text-emerald-400 block">346+</span>
                    <span className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold">Projects Done</span>
                  </div>
                  <div className="bg-[#002b49] p-4 rounded-2xl border border-blue-900/60 text-center">
                    <span className="text-2xl sm:text-3xl font-black text-amber-400 block">315+</span>
                    <span className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold">Happy Clients</span>
                  </div>
                  <div className="bg-[#002b49] p-4 rounded-2xl border border-blue-900/60 text-center">
                    <span className="text-2xl sm:text-3xl font-black text-cyan-400 block">100%</span>
                    <span className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold">Qatari Owned</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/97451191223?text=Hello%20AWMPACK,%20I%20would%20like%20to%20schedule%20a%20factory%20tour"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-full shadow-lg transition-all flex items-center space-x-2"
                  >
                    <span>WhatsApp Factory Tour (+974 5119 1223)</span>
                  </a>
                  <a
                    href="tel:+97440394581"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs rounded-full backdrop-blur-sm transition-all"
                  >
                    Call Office: +974 4039 4581
                  </a>
                </div>
              </div>

              {/* Direct Card Contact Box */}
              <div className="lg:col-span-5 bg-[#00223a] p-8 rounded-3xl border border-blue-900/80 space-y-5 shadow-2xl">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0099e5] block mb-1">
                    Direct Contact
                  </span>
                  <h4 className="text-xl font-black text-white">Technical Team</h4>
                  <p className="text-xs text-blue-300">Factory Manager &bull; AWMPC Qatar</p>
                </div>

                <div className="space-y-3 text-xs pt-1">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                    <div>
                      <span className="text-gray-400 block text-[10px]">Mobile (Direct &amp; WhatsApp):</span>
                      <a href="tel:+97451191223" className="font-bold text-white hover:text-[#0099e5]">+974 5119 1223</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-[#0099e5] shrink-0" />
                    <div>
                      <span className="text-gray-400 block text-[10px]">Factory Landline:</span>
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
                      <span className="text-gray-400 block text-[10px]">Plant Address:</span>
                      <p className="text-gray-200 leading-relaxed">
                        Building No. 89, Street No. 3012, Zone No. 91,<br />
                        Birkat Al-Awamer, Al Wukair,<br />
                        State of Qatar (P.O. Box 12451)
                      </p>
                    </div>
                  </div>
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
          <div className="relative max-w-4xl max-h-[90vh] w-full bg-[#001829] rounded-3xl overflow-hidden border border-blue-900/60 shadow-2xl flex flex-col">
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain p-4"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full text-xs font-bold transition-all z-10"
              >
                &times; Close Preview
              </button>
            </div>

            <div className="p-6 bg-[#00223a] text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-blue-900/60">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0099e5]">
                  {selectedImage.category}
                </span>
                <h4 className="text-lg font-black text-white">{selectedImage.title}</h4>
                <p className="text-xs text-gray-300 max-w-2xl">{selectedImage.description}</p>
              </div>

              {selectedImage.link && (
                <Link
                  href={selectedImage.link}
                  className="px-5 py-2.5 bg-[#0099e5] hover:bg-[#0077b6] text-white rounded-full text-xs font-bold whitespace-nowrap transition-colors flex items-center space-x-1.5 shrink-0"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultTopic="Factory Tour & Gallery Inquiry"
      />
    </div>
  );
}

