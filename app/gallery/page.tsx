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
      id: "client-gallery-1",
      title: "Heavy-Duty 4-Way Solid Pine Pallet",
      category: "pallets",
      categoryName: "Pallets & Skids",
      image: "/gallery/1.png",
      badge: "4-Way Entry",
      description:
        "Precision-engineered 4-way solid pine timber pallet built with heavy-duty top deckboards, chamfered bottom runners, and high-tensile nailing for automated warehouse racking and heavy freight handling across Qatar.",
      link: "/solutions/awmpc-pallets",
    },
    {
      id: "client-gallery-2",
      title: "Custom Export Plywood Crates Lineup",
      category: "boxes",
      categoryName: "Boxes & Collars",
      image: "/gallery/2.png",
      badge: "ISPM 15 Stamped",
      description:
        "Full warehouse batch of custom-built vertical plywood and pine export packaging crates with international shipping and fragile handling stencils.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-3",
      title: "Heavy Industrial Machinery Skid (14,800 kg)",
      category: "pallets",
      categoryName: "Pallets & Heavy Skids",
      image: "/gallery/3.png",
      badge: "14.8 Ton Payload",
      description:
        "Heavy-duty reinforced timber skid with custom saddle chocks and ratchet tie-down straps securing a 14.8-ton hydraulic cutter for crane rigging and export transport.",
      link: "/solutions/special-pallets",
    },
    {
      id: "client-gallery-4",
      title: "Oversized Solid Timber Export Crate",
      category: "boxes",
      categoryName: "Boxes & Collars",
      image: "/gallery/4.png",
      badge: "Seaworthy Heavy Crate",
      description:
        "Full-length external solid timber shipping box engineered with perimeter batten reinforcement and certified phytosanitary heat-treatment marking.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-5",
      title: "A-Frame Wooden Glass & Panel Transport Rack",
      category: "boxes",
      categoryName: "Custom Crating & Racks",
      image: "/gallery/5.png",
      badge: "Custom A-Frame",
      description:
        "Engineered A-frame wooden transport cradle with diagonal lateral braces for vertical shipping of fragile architectural glass, solar panels, and stone slabs.",
      link: "/solutions/special-pallets",
    },
    {
      id: "client-gallery-6",
      title: "Precision Engineered Machinery Base Skid",
      category: "pallets",
      categoryName: "Pallets & Heavy Skids",
      image: "/gallery/6.png",
      badge: "Industrial Rigging Base",
      description:
        "Reinforced dimensional timber base with engineered bearer distribution blocks, built to support heavy hydraulic industrial machinery during factory moves.",
      link: "/solutions/special-pallets",
    },
    {
      id: "client-gallery-7",
      title: "Custom Internal Wooden Chocking & Bracing Crate",
      category: "boxes",
      categoryName: "Boxes & Collars",
      image: "/gallery/7.png",
      badge: "Internal Cushioning",
      description:
        "Top-down view of heavy export crate featuring bespoke internal wooden cradles and lock-in crossbeams holding precision machinery components immovably.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-8",
      title: "AWMPC Technical Export Crate Architecture",
      category: "certifications",
      categoryName: "Engineering & QA",
      image: "/gallery/8.png",
      badge: "Technical Blueprint",
      description:
        "Official 3D anatomical cutaway of an AWMPC seaworthy crate showing plywood skin, internal foam lining, reinforced pine frame, and ISPM 15 HT QA 006 stamp.",
      link: "/about",
    },
    {
      id: "client-gallery-9",
      title: "Heavy Equipment Transport Skid - Side Profile",
      category: "pallets",
      categoryName: "Pallets & Heavy Skids",
      image: "/gallery/9.png",
      badge: "Engineered Load-Bearing",
      description:
        "Profile inspection of multi-stringer reinforced timber skid engineered to withstand dynamic crane lifting tension and multi-ton industrial loads.",
      link: "/solutions/special-pallets",
    },
    {
      id: "client-gallery-10",
      title: "275-Ton SWL Crane Hook Heavy Duty Crate",
      category: "boxes",
      categoryName: "Boxes & Collars",
      image: "/gallery/10.png",
      badge: "275T SWL Marine Crate",
      description:
        "Bespoke heavy-duty wooden box with engineered timber blocking and high-tensile lashing straps securing a massive 275-ton safe-working-load crane hook assembly.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-11",
      title: "Factory Overhead Crane Rigging & Crate Lift",
      category: "boxes",
      categoryName: "Boxes & Collars",
      image: "/gallery/11.png",
      badge: "Crane Lift Tested",
      description:
        "Overhead crane hoisting an oversized fully enclosed pine export crate inside the AWMPC Birkat Al-Awamer manufacturing facility.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-12",
      title: "Certified Plywood Shipping Enclosures Facility",
      category: "boxes",
      categoryName: "Boxes & Collars",
      image: "/gallery/12.png",
      badge: "Birkat Al-Awamer Plant",
      description:
        "Aisle of completed export-grade wooden packaging cases awaiting phytosanitary certification stamps and dispatch to industrial clients across Qatar.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-13",
      title: "High-Strength Steel-Profile Plywood Export Crate",
      category: "boxes",
      categoryName: "Boxes & Collars",
      image: "/gallery/13.jpeg",
      badge: "Steel Profile Plywood",
      description: "Rigid nail-free plywood packaging crate reinforced with galvanized steel profile edges, engineered for optimal strength-to-weight ratio and international IPPC export shipments.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-14",
      title: "UN Certified Plywood Boxes & Heavy Transport Skids",
      category: "boxes",
      categoryName: "Boxes & Crates",
      image: "/gallery/14.jpeg",
      badge: "UN Certified & Defense",
      description: "Certified UN-grade plywood packaging boxes and heavy-duty shipping skids engineered for regulated defense equipment, precision hardware, and secure container handling.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-15",
      title: "Heavy Vertical Industrial Crating Assembly Line",
      category: "boxes",
      categoryName: "Boxes & Crates",
      image: "/gallery/15.jpeg",
      badge: "Birkat Al-Awamer Plant",
      description: "In-line manufacturing of tall custom vertical industrial plywood enclosures equipped with hinged access doors, interior bracing, and integrated pallet skid bases.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-16",
      title: "3D CAD Crate Design & Engineering System",
      category: "certifications",
      categoryName: "Engineering & QA",
      image: "/gallery/16.jpeg",
      badge: "CAD Engineering",
      description: "Proprietary 3D structural CAD modeling system calculating fastener distribution, cleat placement, skid load distribution, and panel shear strength before timber fabrication.",
      link: "/about",
    },
    {
      id: "client-gallery-17",
      title: "1200 x 1000 Wooden Pallet Cutaway Blueprint",
      category: "certifications",
      categoryName: "Engineering & QA",
      image: "/gallery/17.jpeg",
      badge: "Engineering Cutaway",
      description: "Comprehensive structural anatomy diagram of an AWMPC 1200 x 1000 mm wooden shipping pallet showing top deckboards, runners, chamfered bottom boards, and HT QA 006 stamp.",
      link: "/solutions/awmpc-pallets",
    },
    {
      id: "client-gallery-18",
      title: "Galvanized Steel Tongue-and-Rivet Corner Joint",
      category: "boxes",
      categoryName: "Boxes & Crates",
      image: "/gallery/18.jpeg",
      badge: "Galvanized Steel Joint",
      description: "Precision macro view of galvanized perforated steel corner profile with interlocking grip tongues, ensuring maximum corner impact resistance on plywood crates.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-19",
      title: "On-Site Heavy OSB Crate Fabrication (QAFCO Project)",
      category: "boxes",
      categoryName: "Boxes & Crates",
      image: "/gallery/19.jpeg",
      badge: "Project On-Site Crating",
      description: "AWMPC field packaging technicians in full safety gear assembling giant heavy-duty OSB export crates on-site for Qatar Fertilizer Company (QAFCO) industrial shipments.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-20",
      title: "12.9-Meter Seaworthy Mega OSB Box Blueprint",
      category: "certifications",
      categoryName: "Engineering & QA",
      image: "/gallery/20.jpeg",
      badge: "22-Ton Payload Blueprint",
      description: "Engineering master drawing for 12,900 x 2,500 x 3,000 mm seaworthy wooden box designed for 22,000 kg heavy industrial machinery export with full structural joint specs.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-21",
      title: "Digital Wooden Pallet Passport (QR Lifecycle Tracking)",
      category: "certifications",
      categoryName: "Engineering & QA",
      image: "/gallery/21.jpeg",
      badge: "Digital Traceability",
      description: "AWMPC Digital Pallet Passport providing instantaneous QR-code access to production date, Pinus Radiata wood species, ISPM 15 HT QA 006 certificate, and food-safe sanitization data.",
      link: "/about",
    },
    {
      id: "client-gallery-22",
      title: "AWMPC Logistics Fleet - Pallet Delivery Truck",
      category: "pallets",
      categoryName: "Logistics & Fleet",
      image: "/gallery/22.jpeg",
      badge: "Dedicated Fleet",
      description: "Heavy-duty articulated flatbed truck from the AWMPC transport fleet fully loaded with fresh certified timber pallets for rapid industrial delivery across Qatar.",
      link: "/solutions/awmpc-pallets",
    },
    {
      id: "client-gallery-23",
      title: "2-Way Solid Pine Notched Timber Stringer Pallet",
      category: "pallets",
      categoryName: "Pallets & Skids",
      image: "/gallery/23.jpeg",
      badge: "HT QA-006 Branded",
      description: "Heavy industrial 2-way solid pine pallet with precision forklift notches, flush side runners, and crisp IPPC heat-treatment stamp for seamless export logistics.",
      link: "/solutions/awmpc-pallets",
    },
    {
      id: "client-gallery-24",
      title: "Rapid Delivery Pallet Transport Fleet (Birkat Al-Awamer)",
      category: "pallets",
      categoryName: "Logistics & Fleet",
      image: "/gallery/24.jpeg",
      badge: "Same-Day Dispatch",
      description: "AWMPC branded commercial logistics carrier loaded to maximum legal height with timber pallets departing the Birkat Al-Awamer central manufacturing hub.",
      link: "/solutions/awmpc-pallets",
    },
    {
      id: "client-gallery-25",
      title: "Advanced Pallet Dynamic Stability Testing Bench",
      category: "certifications",
      categoryName: "Engineering & QA",
      image: "/gallery/25.jpeg",
      badge: "EUMOS 40509 Testing",
      description: "In-house automated dynamic stability test bench simulating real vehicle transport deceleration up to 0.8g with high-speed video load deformation analysis.",
      link: "/about",
    },
    {
      id: "client-gallery-26",
      title: "Seaworthy Heavy Machinery Crate - Exploded Architecture",
      category: "certifications",
      categoryName: "Engineering & QA",
      image: "/gallery/26.jpeg",
      badge: "Exploded 3D Model",
      description: "Detailed 3D exploded diagram of seaworthy crate with barrier foil, internal heavy equipment cradles, removable side panels, and ISPM 15 HT certification.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-27",
      title: "Oversized Heavy Export Crate on Multi-Axle Lowboy",
      category: "boxes",
      categoryName: "Boxes & Crates",
      image: "/gallery/27.jpeg",
      badge: "Oversized Marine Freight",
      description: "Full-length bespoke solid timber marine crate strapped onto a multi-axle heavy haulage lowboy trailer for direct port transport and vessel loading.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-28",
      title: "UN Plywood Boxes & Precision CNC Internal Fixtures",
      category: "boxes",
      categoryName: "Boxes & Crates",
      image: "/gallery/28.jpeg",
      badge: "Defense & Sensitive Cargo",
      description: "Heavy-duty UN certified birch plywood container boxes with customized CNC contour foam and timber cradles for delicate aerospace and defense hardware.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-29",
      title: "Plywood Export Crate Foam Lining Cutaway",
      category: "certifications",
      categoryName: "Engineering & QA",
      image: "/gallery/29.jpeg",
      badge: "Anatomical Cutaway",
      description: "Official AWMPC 3D cutaway showing the dual plywood skin, internal shock-dampening foam lining, reinforced pine frame, and ISPM 15 HT QA 006 seal.",
      link: "/about",
    },
    {
      id: "client-gallery-30",
      title: "Standard Plywood Box Export Solution Showcase",
      category: "boxes",
      categoryName: "Boxes & Crates",
      image: "/gallery/30.jpeg",
      badge: "Plywood Solutions",
      description: "Engineered multi-trip plywood shipping container mounted on heavy-duty 4-way entry timber skids with quick-latch closures and full ISO certification compliance.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-31",
      title: "EU PPWR 2025/40 Packaging Compliance Standard",
      category: "certifications",
      categoryName: "Engineering & QA",
      image: "/gallery/31.jpeg",
      badge: "EU PPWR Compliant",
      description: "Official documentation and export declarations certifying AWMPC timber crates and pallets conform to European Union Packaging and Packaging Waste Regulations (PPWR).",
      link: "/about",
    },
    {
      id: "client-gallery-32",
      title: "Warehouse Quality Barcode Inspection & Verification",
      category: "pallets",
      categoryName: "Quality Assurance",
      image: "/gallery/32.jpeg",
      badge: "Inventory QA Scan",
      description: "Quality assurance technician scanning RFID/barcode tracking tags on freshly assembled pallet stacks inside the Birkat Al-Awamer logistics depot.",
      link: "/solutions/awmpc-pallets",
    },
    {
      id: "client-gallery-33",
      title: "Custom Engineered Motorcycle Transport Crate",
      category: "boxes",
      categoryName: "Boxes & Crates",
      image: "/gallery/33.jpeg",
      badge: "Vehicle Crating",
      description: "Bespoke open-frame timber transport crate with integrated wheel chocks and high-tensile ratchet tie-down straps securing heavy adventure motorcycles for air/sea export.",
      link: "/solutions/special-pallets",
    },
    {
      id: "client-gallery-34",
      title: "Precision Timber Moisture Content Verification (< 18%)",
      category: "treatment",
      categoryName: "Heat Treatment",
      image: "/gallery/34.jpeg",
      badge: "Calibrated Moisture Test",
      description: "Quality control inspection using Testo 606 digital pin moisture meter verifying kiln-dried timber pallet moisture content at 16.2% for zero mold and maximum load strength.",
      link: "/solutions/heat-treatment",
    },
    {
      id: "client-gallery-35",
      title: "Heavy-Duty Open Slatted Wooden Storage & Shipping Bin",
      category: "boxes",
      categoryName: "Boxes & Crates",
      image: "/gallery/35.jpeg",
      badge: "Slatted Crate Bin",
      description: "High-capacity heavy-gauge slatted pine crate box with 4-way forklift pallet base, engineered for agricultural bulk produce, forged industrial castings, and heavy fittings.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-36",
      title: "Compressed Sawdust Pallet Block with IPPC QA-006 HT Stamp",
      category: "recycling",
      categoryName: "Recycled Blocks",
      image: "/gallery/36.jpeg",
      badge: "Eco Circular Block",
      description: "Macro view of eco-friendly extruded sawdust composite pallet block branded with official 'IPPC QA-006 HT' stamp, offering 2x nail holding power and water resistance.",
      link: "/solutions/compressed-sawdust-wood-blocks",
    },
    {
      id: "client-gallery-37",
      title: "Vertical Stack of 4-Way Solid Timber Block Pallets",
      category: "pallets",
      categoryName: "Pallets & Skids",
      image: "/gallery/37.jpeg",
      badge: "Automated Assembly",
      description: "Precision-aligned stack of brand new 4-way perimeter block timber pallets manufactured on automated nailing lines at our Birkat Al-Awamer plant.",
      link: "/solutions/awmpc-pallets",
    },
    {
      id: "client-gallery-38",
      title: "Finished Plywood Shipping Crates Warehouse Depot",
      category: "boxes",
      categoryName: "Boxes & Crates",
      image: "/gallery/38.jpeg",
      badge: "Pre-Export Staging",
      description: "Staging area in the AWMPC facility featuring varied sizes of fully assembled export-grade plywood crates ready for final customer labeling and seaport dispatch.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-39",
      title: "Heavy Solid Wood 2-Way Industrial Machinery Pallet",
      category: "pallets",
      categoryName: "Pallets & Heavy Skids",
      image: "/gallery/39.jpeg",
      badge: "Solid Timber Runners",
      description: "Heavy-duty 2-way reversible entry timber pallet with thick continuous dimensional runners, engineered for crane slings and ultra-high static warehouse loads.",
      link: "/solutions/special-pallets",
    },
    {
      id: "client-gallery-40",
      title: "Proprietary 4-Way Composite Block Industrial Pallet",
      category: "pallets",
      categoryName: "Pallets & Skids",
      image: "/gallery/40.jpeg",
      badge: "High-Density Composite",
      description: "High-strength 4-way pallet built with premium planed pine deckboards and extruded compressed wood blocks for maximum dimensional stability in high-humidity climates.",
      link: "/solutions/awmpc-pallets",
    },
    {
      id: "client-gallery-41",
      title: "Industrial Pallet Logistics Heritage & Provenance",
      category: "pallets",
      categoryName: "Pallets & Logistics",
      image: "/gallery/41.jpeg",
      badge: "Freight Heritage",
      description: "Historic documentary showcase of palletized road freight logistics, representing the foundational evolution of standardized industrial pallet distribution.",
      link: "/about",
    },
    {
      id: "client-gallery-42",
      title: "Certified Custom Plywood Case with Central HT Stamp",
      category: "boxes",
      categoryName: "Boxes & Crates",
      image: "/gallery/42.jpeg",
      badge: "ISPM 15 Branded",
      description: "Individual custom-dimension plywood export case with reinforced external pine framing and verified IPPC heat treatment stamp centered for customs visibility.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-43",
      title: "Perimeter Base 4-Way Compressed Block Pallet",
      category: "pallets",
      categoryName: "Pallets & Skids",
      image: "/gallery/43.jpeg",
      badge: "Full Perimeter Base",
      description: "Wide-format 4-way entry pallet engineered with bottom chamfered perimeter boards and high-density recycled wood blocks for smooth pallet jack and automated AGV operation.",
      link: "/solutions/industrial-pallets",
    },
    {
      id: "client-gallery-44",
      title: "Stack of 5 Precision 4-Way Heavy Industrial Pallets",
      category: "pallets",
      categoryName: "Pallets & Skids",
      image: "/gallery/44.jpeg",
      badge: "Heavy-Duty Stack",
      description: "Uniform stack of 5 industrial block pallets with consistent deck spacing, tight fastening tolerance, and sustainable compressed blocks.",
      link: "/solutions/awmpc-pallets",
    },
    {
      id: "client-gallery-45",
      title: "High-Tech Facility Clean Corridor Crate Deployment",
      category: "boxes",
      categoryName: "Boxes & Crates",
      image: "/gallery/45.jpeg",
      badge: "High-Tech Shipping",
      description: "Aisle of custom-built vertical plywood equipment containers lined along a cleanroom facility corridor with official serial project tags (ESB-560303) and handling indicators.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-46",
      title: "Heavy Solid Wood Sea-Freight Crates with Corner Braces",
      category: "boxes",
      categoryName: "Boxes & Crates",
      image: "/gallery/46.jpeg",
      badge: "Steel Corner Braced",
      description: "Stacked modular timber shipping boxes featuring vertical tongue-and-groove boards, heavy-duty skids, and hardened steel corner brackets for rough ocean container voyages.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-47",
      title: "Heavy-Duty Reversible Timber Base Pallet (Underside View)",
      category: "pallets",
      categoryName: "Pallets & Heavy Skids",
      image: "/gallery/47.jpeg",
      badge: "Engineered Underside",
      description: "Structural underside view of industrial 4-way pallet showing cross-cleat reinforcement, heavy solid blocks, and optimized nail clinching pattern.",
      link: "/solutions/special-pallets",
    },
    {
      id: "client-gallery-48",
      title: "Switchgear & Electrical Server Rack Packaging Cradling",
      category: "boxes",
      categoryName: "Boxes & Crates",
      image: "/gallery/48.jpeg",
      badge: "Critical Electronics",
      description: "Heavy electrical control cabinet and server rack wrapped in ESD protective stretch barrier film, secured to custom anti-vibration timber skid cradles.",
      link: "/solutions/special-pallets",
    },
    {
      id: "client-gallery-49",
      title: "25-Ton Heavy Industrial Roller Seaworthy Export Box",
      category: "boxes",
      categoryName: "Boxes & Crates",
      image: "/gallery/49.jpeg",
      badge: "25-Ton Payload Box",
      description: "Completed mammoth seaworthy timber case enclosing a 25-ton industrial steel roller with heavy timber chocks, lifting center-of-gravity markers, and international port markings.",
      link: "/solutions/wooden-boxes-crates",
    },
    {
      id: "client-gallery-50",
      title: "25-Ton Roller in Aluminum Barrier Foil Skid Mount",
      category: "pallets",
      categoryName: "Pallets & Heavy Skids",
      image: "/gallery/50.jpeg",
      badge: "Vacuum Foil Barrier",
      description: "25-ton heavy equipment roller resting on engineered multi-beam timber saddle skids, vacuum-sealed in multi-layer aluminum barrier foil with desiccant packs for corrosion protection.",
      link: "/solutions/special-pallets",
    },
    {
      id: "client-gallery-51",
      title: "Chamfered Base Board Architecture on 4-Way Pallet",
      category: "pallets",
      categoryName: "Pallets & Skids",
      image: "/gallery/51.jpeg",
      badge: "Chamfered Runners",
      description: "Close-up craftsmanship inspection of bottom chamfered deckboards allowing effortless hand pallet truck entry and exit without deckboard splintering.",
      link: "/solutions/awmpc-pallets",
    },
    {
      id: "client-gallery-52",
      title: "Extruded Compressed Sawdust Pallet Blocks Depot",
      category: "recycling",
      categoryName: "Recycled Blocks",
      image: "/gallery/52.jpeg",
      badge: "Sawdust Recycling",
      description: "Warehouse depot holding thousands of newly extruded and cured composite sawdust pallet blocks produced under the circular 'Waste to Usable Product' initiative.",
      link: "/solutions/compressed-sawdust-wood-blocks",
    },
    {
      id: "client-gallery-53",
      title: "Collapsible Hinged Wooden Pallet Collars Lineup",
      category: "boxes",
      categoryName: "Boxes & Collars",
      image: "/gallery/53.jpeg",
      badge: "Modular Tier Collars",
      description: "Modular hinged timber pallet collars stacked in 1, 2, 3, and 4-tier heights with galvanized interlocking steel hinges in front of high-density pallet warehouse reserves.",
      link: "/solutions/pallet-collars",
    },
    {
      id: "client-gallery-54",
      title: "Kiln-Dried Solid Pine 4-Way Pallet Tower",
      category: "pallets",
      categoryName: "Pallets & Skids",
      image: "/gallery/54.jpeg",
      badge: "Kiln-Dried Pine",
      description: "Ten-tier vertical stack of kiln-dried, heat-treated solid pine pallets engineered for pharmaceutical, food packaging, and sensitive cold-chain logistics.",
      link: "/solutions/awmpc-pallets",
    },
    {
      id: "client-gallery-55",
      title: "Notched Stringer Pallet Stack with Verified HT QA-006",
      category: "treatment",
      categoryName: "Heat Treatment",
      image: "/gallery/55.jpeg",
      badge: "Certified HT QA 006",
      description: "Uniform stack of notched 2-way/4-way timber stringer pallets with clear IPPC wheat-ear HT QA-006 stamps branded into every center stringer runner.",
      link: "/solutions/heat-treatment",
    },
    {
      id: "client-gallery-56",
      title: "Automated Compressed Wood Block Extrusion Facility",
      category: "recycling",
      categoryName: "Recycled Blocks",
      image: "/gallery/56.jpeg",
      badge: "Automated Extrusion",
      description: "Panoramic view of our high-pressure hydraulic wood waste extrusion plant at Birkat Al-Awamer converting wood shavings and sawdust into dense pallet blocks.",
      link: "/solutions/compressed-sawdust-wood-blocks",
    },
    {
      id: "client-gallery-57",
      title: "Delta Industrial Plywood Export Cases Storage Wall",
      category: "boxes",
      categoryName: "Boxes & Crates",
      image: "/gallery/57.jpeg",
      badge: "Delta Export Cases",
      description: "Multi-tier warehouse staging grid of certified Delta branded plywood shipping cases with integrated 4-way pallet skids ready for container stuffing and global delivery.",
      link: "/solutions/wooden-boxes-crates",
    },
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
    { id: "pallets", label: `Pallets & Skids (${galleryItems.filter((i) => i.category === "pallets").length})` },
    { id: "boxes", label: `Boxes & Crates (${galleryItems.filter((i) => i.category === "boxes").length})` },
    { id: "treatment", label: `Heat Treatment (${galleryItems.filter((i) => i.category === "treatment").length})` },
    { id: "recycling", label: `Recycled Blocks (${galleryItems.filter((i) => i.category === "recycling").length})` },
    { id: "certifications", label: `Certifications & QA (${galleryItems.filter((i) => i.category === "certifications").length})` },
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

