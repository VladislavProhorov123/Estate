"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-widest text-violet-600">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Let's Talk About Your Dream Home
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Fill out the form and our team will contact you shortly.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex gap-4 rounded-3xl shadow-md p-6">
              <Mail className="text-violet-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-slate-500">contact@estatery.com</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-3xl shadow-md p-6">
              <Phone className="text-violet-600" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-slate-500">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-3xl shadow-md p-6">
              <MapPin className="text-violet-600" />
              <div>
                <h3 className="font-semibold">Office</h3>
                <p className="text-slate-500">New York, United States</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px]  bg-white p-8 shadow-md"
          >
            <div className="grid gap-6">
              <input
                name="name"
                placeholder="Your Name"
                className="
    h-14
    rounded-2xl
    bg-slate-100
    px-5
    text-slate-900
    placeholder:text-slate-400
    outline-none
    transition-all
    focus:bg-white
    focus:ring-2
    focus:ring-violet-500
  "
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                className="
    h-14
    rounded-2xl
    bg-slate-100
    px-5
    text-slate-900
    placeholder:text-slate-400
    outline-none
    transition-all
    focus:bg-white
    focus:ring-2
    focus:ring-violet-500
  "
              />

              <input
                name="phone"
                placeholder="Phone"
                className="
    h-14
    rounded-2xl
    bg-slate-100
    px-5
    text-slate-900
    placeholder:text-slate-400
    outline-none
    transition-all
    focus:bg-white
    focus:ring-2
    focus:ring-violet-500
  "
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Message"
                className="
    h-14
    rounded-2xl
    bg-slate-100
    px-5
    text-slate-900
    placeholder:text-slate-400
    outline-none
    transition-all
    focus:bg-white
    focus:ring-2
    focus:ring-violet-500
  "
              />

              <button
                className="
                rounded-2xl
                bg-violet-600
                py-4
                font-semibold
                text-white
                transition
                hover:bg-violet-700
                "
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
