"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { properties } from "@/data/properties";
import PropertyCard from "../cards/PropertyCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-28">
      <div className="container">
        <div className="mb-14 flex items-center justify-between">
          <div>
            <p className="font-semibold text-violet-600">PROPERTIES</p>

            <h2 className="mt-3 text-5xl font-bold">
              Featured Properties
            </h2>
          </div>

          <Link
            href="#"
            className="font-semibold text-violet-600 transition hover:text-violet-700"
          >
            View All →
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden gap-8 lg:grid lg:grid-cols-3"
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              variants={itemVariants}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>

        <div className="lg:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {properties.map((property) => (
              <SwiperSlide key={property.id}>
                <PropertyCard property={property} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}