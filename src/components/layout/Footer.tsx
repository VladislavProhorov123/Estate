"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const links = [
  { title: "Home", href: "#" },
  { title: "Properties", href: "#properties" },
  { title: "Reviews", href: "#testimonials" },
  { title: "Contact", href: "#contact" },
];

const socials = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaXTwitter, href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}

          <div>
            <Link href="/" className="text-3xl font-bold text-violet-600">
              Estatery
            </Link>

            <p className="mt-5 leading-7 text-slate-500">
              Discover premium properties and find your perfect place with our
              experienced real estate team.
            </p>
          </div>

          {/* Links */}

          <div>
            <h3 className="mb-5 font-semibold">Navigation</h3>

            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-slate-500 transition hover:text-violet-600"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-5 font-semibold">Contact</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span className="text-slate-500">contact@estatery.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span className="text-slate-500">+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span className="text-slate-500">New York, USA</span>
              </div>
            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-5 font-semibold">Follow Us</h3>

            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{
                    y: -6,
                    scale: 1.1,
                  }}
                  className="rounded-2xl bg-white p-4 shadow transition hover:text-violet-600"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Estatery. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-violet-600">
              Privacy
            </Link>

            <Link href="#" className="hover:text-violet-600">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
