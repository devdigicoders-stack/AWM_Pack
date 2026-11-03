import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AWMPACK | Al Waad Manufacturing Packaging Company - Qatar",
  description:
    "Leading manufacturer of industrial wooden pallets, custom crates, boxes, ISPM 15 heat treatment, and sustainable wood recycling in Qatar. Birkat Al-Awamer, Al Wukair.",
  keywords: [
    "AWMPACK",
    "Al Waad Manufacturing Packaging Company",
    "Wooden Pallets Qatar",
    "ISPM 15 Heat Treatment Qatar",
    "Industrial Crates Doha",
    "Wood Recycling Qatar",
    "Pallet Collars Qatar",
    "Pallet Repair Pooling Qatar",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-sans bg-white text-[#0c2340] selection:bg-orange-100 selection:text-[#eb6608]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
