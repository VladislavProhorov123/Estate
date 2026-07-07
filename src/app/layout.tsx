import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/scroolToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://estatery-demo.vercel.app"),

  title: {
    default: "Estatery | Modern Real Estate",
    template: "%s | Estatery",
  },

  description:
    "Buy, rent and sell premium properties with a modern real estate platform.",

  keywords: [
    "Real Estate",
    "Villa",
    "Apartment",
    "Rent",
    "Buy",
    "Property",
    "Luxury Homes",
    "rent apartment"
  ],

  openGraph: {
    title: "Estatery",
    description:
      "Find your dream property with our modern real estate platform.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Estatery",
    description: "Modern real estate platform built with Next.js.",
  },

  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Header />
        <main className="">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
