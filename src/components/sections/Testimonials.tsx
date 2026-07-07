"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Carter",
    role: "Business Owner",
    image: "/images/man1.jpg",
    text: "Estatery made buying our dream home incredibly easy. Professional team and excellent service.",
  },
  {
    name: "Sarah Wilson",
    role: "Interior Designer",
    image: "/images/woman.jpg",
    text: "Beautiful properties, smooth communication and a stress-free buying experience.",
  },
  {
    name: "Michael Brown",
    role: "Software Engineer",
    image: "/images/man2.jpg",
    text: "Highly recommend! Everything was transparent and the support was outstanding.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="font-semibold uppercase tracking-widest text-violet-600">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-slate-500">
            Thousands of happy clients trusted us to find their perfect home.
          </p>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="rounded-2xl bg-violet-100 p-3 text-violet-600 transition group-hover:rotate-12">
                    <Quote size={22} />
                  </div>
                </div>

                <p className="min-h-[140px] text-lg leading-8 text-slate-600">
                  "{item.text}"
                </p>

                <div className="mt-8 flex items-center gap-4 border-t pt-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover ring-4 ring-violet-100"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{item.name}</h3>

                    <p className="text-slate-500">{item.role}</p>
                  </div>

                  <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
                    Verified
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
