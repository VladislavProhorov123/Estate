"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { House, ShieldCheck, BadgeCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: House,
    title: "Premium Properties",
    description:
      "Discover handpicked apartments, villas and luxury homes in the best locations.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Agents",
    description:
      "Experienced professionals who guide you through every step of your purchase.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "Safe transactions with transparent pricing and verified properties.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our team is always available to answer your questions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-violet-200 blur-[130px]" />

      <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-pink-200 blur-[130px]" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-semibold uppercase tracking-wider text-violet-600">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Find Your Perfect Home With Confidence
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
            We combine premium properties, experienced agents and modern
            technology to help you find your dream home faster.
          </p>

          <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    x: 8,
                  }}
                  className="flex
gap-4
rounded-3xl
border
border-slate-200
bg-white
p-5
transition
hover:shadow-xl

sm:gap-5
sm:p-6
"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold sm:text-xl">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500 sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[40px]">
            <Image
              src="/images/villa2.webp"
              alt="Luxury House"
              width={700}
              height={850}
              className="h-[360px]
w-full
object-cover

sm:h-[500px]

lg:h-[650px]
"
            />
          </div>

          {/* Floating Card */}

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute
left-4
top-6
rounded-2xl
bg-white
p-4
shadow-2xl

sm:left-6
sm:top-8

lg:-left-8
lg:top-12
"
          >
            <h3 className="text-2xl font-bold text-violet-600 sm:text-3xl">250+</h3>

            <p className="text-sm text-slate-500 sm:text-base">Premium Properties</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute
right-4
bottom-6
rounded-2xl
bg-white
p-4
shadow-2xl

sm:right-6
sm:bottom-8

lg:-right-8
lg:bottom-16
"
          >
            <h3 className="text-2xl font-bold text-violet-600 sm:text-3xl">98%</h3>

            <p className="text-sm text-slate-500 sm:text-base">Happy Clients</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
