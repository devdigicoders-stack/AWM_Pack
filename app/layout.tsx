import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nefab | Sustainable Packaging & Logistics Solutions",
  description:
    "We save resources in supply chains, for a better tomorrow. Global provider of engineered transport packaging and logistics services.",
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
