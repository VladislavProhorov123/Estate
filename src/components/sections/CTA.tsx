"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[40px] bg-violet-600 px-8 py-16 text-center text-white md:px-16"
        >
          {/* Background */}

          <div className="absolute -left-24 -top-24 h-60 w-60 rounded-full bg-violet-400 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
              Find Your Dream Home
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Ready To Find Your Perfect Property?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-violet-100">
              Browse premium properties and connect with experienced real estate
              experts today.
            </p>

            <Link
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-violet-600 transition hover:scale-105"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}