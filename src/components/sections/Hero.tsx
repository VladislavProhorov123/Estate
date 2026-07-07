"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="overflow-hidden bg-[#F7F7FD]">
      <div className="container grid min-h-[calc(100vh-80px)] items-center gap-16 py-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Find Your Dream Home
          </span>
          <h1 className="mt-6 max-w-xl font-heading text-5xl font-bold leading-tight text-[#000929] md:text-6xl">
            Discover a Place You'll Love to Live
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-500">
            Explore premium apartments, luxury villas and modern homes carefully
            selected for comfortable living.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#properties"
              className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-7 py-4 font-semibold text-white transition hover:bg-violet-700"
            >
              Explore Properties
              <ArrowRight size={20} />
            </Link>

            <Link
              href="#contact"
              className="rounded-xl border border-slate-300 px-7 py-4 text-center font-semibold transition hover:border-violet-600 hover:text-violet-600"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-violet-600">250+</h2>

              <p className="mt-2 text-slate-500">Properties</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-violet-600">98%</h2>

              <p className="mt-2 text-slate-500">Happy Clients</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-violet-600">15+</h2>

              <p className="mt-2 text-slate-500">Years Experience</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[40px] shadow-2xl">
            <Image
              src="/images/villa.webp"
              alt="Luxury Villa"
              width={700}
              height={850}
              priority
              className="h-[350px]
    w-full
    object-cover

    sm:h-[450px]

    md:h-[550px]

    lg:h-[650px]"
            />
          </div>

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -left-8 top-12 hidden rounded-3xl bg-white p-5 shadow-xl lg:block"
          >
            <p className="text-sm text-slate-500">Starting From</p>

            <h3 className="mt-2 text-2xl font-bold">$450,000</h3>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute -right-8 bottom-12 hidden rounded-3xl bg-white p-5 shadow-xl lg:block"
          >
            <p className="text-sm text-slate-500">Premium Location</p>

            <h3 className="mt-2 font-semibold">Dubai Marina</h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
