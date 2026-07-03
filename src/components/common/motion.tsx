"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const DURATION = 0.35; // 350ms — top of the spec's 250–350ms allowed range

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};

const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION, ease: EASE } },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** "up" = fade + slide-up (default, Spec 5.11 "Slide-up"). "fade" = opacity only. */
  type?: "up" | "fade";
};

/**
 * Reveal — scroll-triggered fade-in / slide-up for a single element.
 * Automatically collapses to a simple opacity fade (no movement) when the
 * user has requested reduced motion. Always renders a <div> — Reveal is
 * purely an animation wrapper, so the parent should supply any semantic
 * element (e.g. a <section>) around it rather than asking Reveal to render one.
 */
export function Reveal({ children, className, delay = 0, type = "up" }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? fadeVariants : type === "fade" ? fadeVariants : fadeUpVariants;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerGroup / StaggerItem — for grids of cards (services, projects,
 * testimonials) that should animate in with a staggered entrance rather
 * than all at once.
 */
export function StaggerGroup({
  children,
  className,
  staggerDelay = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        visible: {
          transition: { staggerChildren: shouldReduceMotion ? 0 : staggerDelay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={shouldReduceMotion ? fadeVariants : fadeUpVariants}
    >
      {children}
    </motion.div>
  );
}
