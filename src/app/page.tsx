import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import Hero from "@/components/sections/Hero";
import SearchBar from "@/components/sections/SearchBar";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <SearchBar />
      <FeaturedProperties />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Contact />
    </div>        
  );
}
