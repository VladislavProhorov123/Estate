"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function ScrollToTop() {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 500);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            fixed
            bottom-6
            right-6
            z-50

            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-full

            bg-violet-600
            text-white

            shadow-xl

            transition
            hover:bg-violet-700
          "
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}