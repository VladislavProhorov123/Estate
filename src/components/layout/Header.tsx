"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navigation } from "@/constants/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl"
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.05 }}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-lg font-bold text-white shadow-lg shadow-violet-300"
          >
            E
          </motion.div>
          <span className="font-heading text-2xl font-bold">Estatery</span>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navigation.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="relative text-[15px] font-medium text-slate-600 transition hover:text-violet-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-violet-600 after:transition-all hover:after:w-full"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl border border-slate-200 px-5 py-3 font-medium transition hover:border-violet-600 hover:text-violet-600"
          >
            Login
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="rounded-xl bg-violet-600 px-5 py-3 font-medium text-white shadow-lg shadow-violet-300 transition hover:bg-violet-700"
          >
            Sign Up
          </motion.button>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        className="overflow-hidden lg:hidden"
      >
        <div className="container flex flex-col gap-6 py-6">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-slate-700"
            >
              {item.title}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-2">
            <button className="rounded-xl border border-slate-300 py-3">
              Login
            </button>

            <button className="rounded-xl bg-violet-600 py-3 font-medium text-white">
              Sign Up
            </button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
