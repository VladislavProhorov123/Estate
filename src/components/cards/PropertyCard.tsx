"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bath, BedDouble, Heart, MapPin, Ruler, Star } from "lucide-react";

type Property = {
  title: string;
  location: string;
  type: string;
  status: string;
  rating: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: number;
  image: string;
};

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <motion.article
      whileHover="hover"
      initial="rest"
      className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl"
    >
      {/* IMAGE */}

      <div className="relative h-72 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="relative h-56 overflow-hidden sm:h-64 lg:h-72"
        />

        {/* overlay */}

        <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

        {/* Status */}

        <span className="absolute left-4 top-4 rounded-full bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-sm">
          {property.status}
        </span>

        {/* Favorite */}

        <button
          className="
          absolute
right-4
top-4
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-white/90
backdrop-blur
transition
hover:bg-red-500
hover:text-white

sm:right-5
sm:top-5
sm:h-11
sm:w-11

        "
        >
          <Heart size={20} />
        </button>

        {/* View */}

        <motion.button
          variants={{
            rest: {
              opacity: 0,
              y: 20,
            },
            hover: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            absolute
bottom-4
left-1/2
-w-fit
-translate-x-1/2
rounded-xl
bg-white
px-5
py-2.5
text-sm
font-semibold

sm:bottom-6
sm:px-6
sm:py-3
sm:text-base

          "
        >
          View Details
        </motion.button>
      </div>

      {/* CONTENT */}

      <div className="space-y-5 p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold sm:text-2xl">{property.title}</h3>

          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />

            <span>{property.rating}</span>
          </div>
        </div>

        <p className="flex items-center gap-2 text-sm text-slate-500 sm:text-base">
          <MapPin size={18} />
          {property.location}
        </p>

        <div
          className="grid
grid-cols-3
gap-2
border-y
border-slate-200
py-4
text-xs

sm:gap-3
sm:py-5
sm:text-sm
"
        >
          <div className="flex items-center gap-2">
            <BedDouble size={18} />
            {property.bedrooms}
          </div>

          <div className="flex items-center gap-2">
            <Bath size={18} />
            {property.bathrooms}
          </div>

          <div className="flex items-center gap-2">
            <Ruler size={18} />
            {property.area}
          </div>
        </div>

        <div
          className="flex
flex-col
gap-4

sm:flex-row
sm:items-center
sm:justify-between
"
        >
          <div>
            <span className="text-slate-400">Starting from</span>

            <h4 className="text-2xl font-bold text-violet-600 sm:text-3xl">
              ${property.price.toLocaleString()}
            </h4>
          </div>

          <button
            className="
              w-full
rounded-xl
border
border-violet-600
px-5
py-3
font-semibold
text-violet-600
transition
hover:bg-violet-600
hover:text-white

sm:w-auto

            "
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.article>
  );
}
