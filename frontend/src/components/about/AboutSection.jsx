/**
 * AboutSection.jsx
 *
 * Modern editorial-luxury "About" section for CIMAGE Group of Institutions.
 *
 * Features:
 *  ✦ Asymmetric two-column grid  (portrait left · bio/stats/CTA right)
 *  ✦ Spinning circular CSS text badge around portrait placeholder
 *  ✦ Animated live-status pulse dot  (Currently Admitting)
 *  ✦ Staggered fade-up entrance animations via Framer Motion
 *  ✦ Stat cards with hover lift transitions
 *  ✦ Skill / programme chips with hover accent
 *  ✦ Filled primary + ghost underline CTA buttons side by side
 *  ✦ Infinite horizontal marquee strip of disciplines at bottom
 *  ✦ Subtle noise texture overlay for tactile depth
 *  ✦ Asymmetric border-radius on portrait frame
 *  ✦ Responsive — single column stacked below 768 px
 *  ✦ Dark-mode support via prefers-color-scheme
 *  ✦ Accessible — semantic HTML, aria-labels, reduced-motion support
 */

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import "./AboutSection.css";

/* ─── Animation variants ────────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── Static data ───────────────────────────────────────────────── */

const STATS = [
  { value: "15+",  label: "Years of Excellence" },
  { value: "10K+", label: "Alumni Worldwide"    },
  { value: "500+", label: "Industry Partners"   },
];

const SKILL_CHIPS = [
  { label: "BCA",         primary: true },
  { label: "BBA"                        },
  { label: "MCA"                        },
  { label: "PGDM"                       },
  { label: "Data Science"               },
  { label: "B.Sc IT"                    },
  { label: "Management"                 },
];

const DISCIPLINES = [
  "Information Technology",
  "Business Administration",
  "Management Sciences",
  "Data Science",
  "Computer Applications",
  "PGDM",
  "Industry Placement",
  "IIT Bombay Partner",
  "Innovation Hub",
  "Digital Learning",
];

/* ─── Spinning circular text badge ─────────────────────────────── */
/**
 * SpinningBadge
 *
 * SVG textPath circle that orbits around the portrait frame.
 * The outer wrapper (360 × 360) is positioned absolutely so it
 * extends 40–60 px beyond each edge of the 240–270 px square frame.
 * CSS `animation: about-badge-spin` rotates the entire element.
 */
function SpinningBadge() {
  return (
    <div className="about-spinning-badge" aria-hidden="true">
      <svg
        viewBox="0 0 360 360"
        xmlns="http://www.w3.org/2000/svg"
        width="360"
        height="360"
        role="img"
      >
        <defs>
          {/*
           * Circular path centred at (180, 180) with r = 165.
           * The SVG arc trick (two arcs) keeps the text
           * running clockwise without a gap.
           */}
          <path
            id="ab-badge-circle"
            d="M 180,180 m -165,0
               a 165,165 0 1,1 330,0
               a 165,165 0 1,1 -330,0"
          />
        </defs>
        <text fontSize="10" fill="currentColor" letterSpacing="3">
          <textPath href="#ab-badge-circle">
            ✦ CIMAGE GROUP ✦ QUALITY EDUCATION ✦ SINCE 2009 ✦&nbsp;
          </textPath>
        </text>
      </svg>
    </div>
  );
}

/* ─── Infinite marquee strip ────────────────────────────────────── */
/**
 * Marquee
 *
 * Duplicates the discipline list so the CSS translateX(-50%)
 * animation produces a seamless infinite loop.
 */
function Marquee() {
  /* Duplicate for seamless loop */
  const items = [...DISCIPLINES, ...DISCIPLINES];

  return (
    <div
      className="about-marquee-outer"
      role="marquee"
      aria-label="Areas of study at CIMAGE"
    >
      <div className="about-marquee-track" aria-hidden="true">
        {items.map((item, i) => (
          <span key={i} className="about-marquee-item">
            {item}
            <span className="about-marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Main component ────────────────────────────────────────────── */
export default function AboutSection() {
  const ref    = useRef(null);
  /* Trigger animations when section enters the viewport */
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section
      ref={ref}
      className="about-section"
      aria-labelledby="about-section-heading"
    >
      {/* Subtle noise texture gives the parchment background tactile depth */}
      <div className="about-noise" aria-hidden="true" />

      <div className="about-container">
        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >

          {/* ══════════════════════════════════════
              LEFT COLUMN — Portrait + Spinning Badge
              ══════════════════════════════════════ */}
          <motion.div variants={fadeUp} className="about-portrait-col">

            {/* Section label: small uppercase tag · hairline · index number */}
            <div className="about-label-row" aria-hidden="true">
              <span className="about-label-tag">About Us</span>
              <span className="about-label-rule" />
              <span className="about-label-num">01</span>
            </div>

            {/*
             * Portrait wrapper:
             *  – .about-portrait-outer   relative, fixed square size
             *  – .about-portrait-frame   absolute inset-0, asymmetric radius
             *  – .about-spinning-badge   absolute, extends beyond frame
             *  – .about-portrait-deco    gold echo shape behind frame
             */}
            <div className="about-portrait-outer">
              <SpinningBadge />

              <div className="about-portrait-frame">
                <img
                  src="https://cimage.in/sitepanel/uploads/administration/Director-CIMAGE-Group-of-Institutions-1024x683.jpg"
                  alt="Prof. (Dr.) Neeraj Agrawal, Director – CIMAGE Group of Institutions"
                  className="about-portrait-img"
                  loading="lazy"
                />
              </div>

              {/* Gold decorative echo shape – positioned behind frame via z-index */}
              <div className="about-portrait-deco" aria-hidden="true" />
            </div>
          </motion.div>

          {/* ══════════════════════════════════════
              RIGHT COLUMN — Content
              ══════════════════════════════════════ */}
          <motion.div
            className="about-content-col"
            variants={containerVariants}
          >

            {/* Availability / admission status pill with live pulse dot */}
            <motion.div variants={fadeUp} className="about-pill-row">
              <span
                className="about-pill"
                role="status"
                aria-label="Admissions are currently open"
              >
                <span className="about-pulse" aria-hidden="true" />
                Currently Admitting
              </span>
            </motion.div>

            {/* Large editorial serif headline with one italic gold word */}
            <motion.h2
              id="about-section-heading"
              variants={fadeUp}
              className="about-headline"
            >
              Shaping Tomorrow's{" "}
              <em className="about-headline-em">Leaders</em>{" "}
              Since&nbsp;2009
            </motion.h2>

            {/* Bio: large serif lead + smaller muted body copy */}
            <motion.div variants={fadeUp} className="about-bio">
              <p className="about-bio-lead">
                Bihar's premier hub for quality education in IT and
                Management — built to bridge academia and industry.
              </p>
              <p className="about-bio-body">
                Founded by Vijayam Education Trust in Patna, CIMAGE doesn't
                just award degrees — it builds job-worthy professionals
                equipped with the latest tools, technology, and skills
                demanded by top organisations worldwide. Recognised as a
                Super Resource Centre by IIT Bombay and honoured with
                national excellence awards, CIMAGE stands as Bihar's
                benchmark for higher education.
              </p>
            </motion.div>

            {/* Stats bar: 3-column grid with hairline separators */}
            <motion.div
              variants={fadeUp}
              className="about-stats"
              role="list"
              aria-label="Key statistics"
            >
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  role="listitem"
                  className={
                    "about-stat" +
                    (i < STATS.length - 1 ? " about-stat--sep" : "")
                  }
                >
                  <span className="about-stat-val">{s.value}</span>
                  <span className="about-stat-lbl">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Skill chips: pill chips — one styled as filled primary */}
            <motion.div
              variants={fadeUp}
              className="about-chips"
              aria-label="Programmes offered"
            >
              {SKILL_CHIPS.map((chip) => (
                <span
                  key={chip.label}
                  className={
                    "about-chip" +
                    (chip.primary ? " about-chip--primary" : "")
                  }
                >
                  {chip.label}
                </span>
              ))}
            </motion.div>

            {/* CTA row: filled button + ghost underline button */}
            <motion.div variants={fadeUp} className="about-ctas">
              <Link
                to="/programme"
                className="about-cta about-cta--filled"
                aria-label="Explore CIMAGE programmes"
              >
                Explore Programmes
              </Link>
              <Link
                to="/contact"
                className="about-cta about-cta--ghost"
                aria-label="Contact CIMAGE"
              >
                Get in Touch
              </Link>
            </motion.div>

          </motion.div>
          {/* end right column */}

        </motion.div>
        {/* end grid */}

      </div>
      {/* end container */}

      {/* Infinite scrolling discipline marquee strip at section bottom */}
      <Marquee />
    </section>
  );
}
