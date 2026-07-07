"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchBar() {
  return (
    <section id="search" className="relative mt-6 lg:-mt-16 z-20">
      <div className="container">

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="
            rounded-[30px]
            bg-white
            shadow-xl
            p-4
            lg:p-6
          "
        >
          <div className="grid gap-6 lg:grid-cols-4">

            <div>
              <label className="text-sm text-slate-500">
                Location
              </label>

              <select
                name="location"
                className="mt-2 w-full outline-none"
              >
                <option>All</option>
                <option>Dubai</option>
                <option>Miami</option>
                <option>New York</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-slate-500">
                Property Type
              </label>

              <select
                name="type"
                className="mt-2 w-full outline-none"
              >
                <option>All</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>House</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-slate-500">
                Max Price
              </label>

              <input
                type="number"
                placeholder="$500000"
                name="price"
                className="mt-2 w-full outline-none"
              />
            </div>

            <button
              className="
                flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-violet-600
                text-white
                font-semibold
                transition
                hover:bg-violet-700
              "
            >
              <Search size={20} />

              Search
            </button>

          </div>
        </motion.form>

      </div>
    </section>
  );
}