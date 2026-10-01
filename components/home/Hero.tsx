"use client";

import {
  ArrowDown,
  BrainCircuit,
  Computer,
  Download,
  Globe2,
  MapPin,
  MonitorCog,
  Smartphone,
  Wrench,
} from "lucide-react";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  SiAstro,
  SiCodeigniter,
  SiFlutter,
  SiKotlin,
  SiLaravel,
  SiNextdotjs,
  SiVuedotjs,
} from "react-icons/si";

import { FaJava, FaReact } from "react-icons/fa";

import { useLanguage } from "@/context/LanguageContext";

/* =========================================================
   WEB & MOBILE SKILLS
========================================================= */

const skills = [
  {
    name: "Web Developer",
    icon: Globe2,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Astro",
    icon: SiAstro,
  },
  {
    name: "Vue.js",
    icon: SiVuedotjs,
  },
  {
    name: "Laravel",
    icon: SiLaravel,
  },
  {
    name: "CodeIgniter",
    icon: SiCodeigniter,
  },
  {
    name: "Mobile Developer",
    icon: Smartphone,
  },
  {
    name: "Flutter",
    icon: SiFlutter,
  },
  {
    name: "Kotlin",
    icon: SiKotlin,
  },
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "React Native",
    icon: FaReact,
  },
];

/* =========================================================
   IT SUPPORT SKILLS
========================================================= */

const itSupportSkills = [
  {
    name: "Hardware Troubleshooting",
    icon: Computer,
  },
  {
    name: "Software Troubleshooting",
    icon: MonitorCog,
  },
  {
    name: "Computer Maintenance",
    icon: Wrench,
  },
  {
    name: "Technical Problem Solving",
    icon: BrainCircuit,
  },
  {
    name: "IT Support",
    icon: Computer,
  },
];

export default function Hero() {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  return (
    <section
      id="home"
      className="
        relative
        w-full
        max-w-full
        overflow-hidden
        border-b
        border-slate-200
        bg-white
        transition-colors
        duration-300

        dark:border-[#1e334f]
        dark:bg-[#07101f]
      "
    >
      {/* =====================================================
          GRID BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 grid-background opacity-40 dark:opacity-100" />

      {/* =====================================================
          BLUE GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/4
          top-40
          h-72
          w-72
          max-w-[70vw]
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          grid
          min-h-screen
          w-full
          max-w-7xl
          min-w-0
          items-center
          gap-12
          overflow-hidden
          px-4
          pb-20
          pt-24

          sm:px-6

          lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]
          lg:px-8
          lg:pt-28
        "
      >
        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            min-w-0
            w-full
          "
        >
          {/* =================================================
              BADGE
          ================================================== */}

          <div
            className="
              mb-7
              inline-flex
              max-w-full
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-slate-50/80
              px-4
              py-2
              text-sm
              text-slate-600
              backdrop-blur

              dark:border-[#1e334f]
              dark:bg-[#0b1628]/80
              dark:text-[#aebdd0]
            "
          >
            <span
              className="
                h-2
                w-2
                shrink-0
                rounded-full
                bg-emerald-500
                shadow-[0_0_10px_#34d399]
              "
            />

            <span className="min-w-0">Full Stack Web & Mobile Developer</span>
          </div>

          {/* =================================================
              NAME
          ================================================== */}

          <h1
            className="
              max-w-full
              break-words
              text-5xl
              font-semibold
              leading-[0.95]
              tracking-[-0.04em]
              text-slate-900

              sm:text-6xl

              lg:text-7xl

              xl:text-[82px]

              dark:text-[#e8f0fa]
            "
          >
            M. Romza{" "}
            <span className="text-slate-500 dark:text-[#9eb3cf]">Zikrian.</span>
          </h1>

          {/* =================================================
              PROFESSION
          ================================================== */}

          <h2
            className="
              mt-7
              max-w-full
              text-xl
              font-medium
              leading-relaxed
              text-slate-700

              sm:text-2xl

              dark:text-[#b9c7d9]
            "
          >
            Full Stack Web & Mobile Developer{" "}
            <span className="text-blue-600 dark:text-[#3b82f6]">|</span> IT
            Support
          </h2>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-600

              sm:text-lg

              dark:text-[#94a3b8]
            "
          >
            {isEnglish
              ? "I develop websites and mobile applications to build modern, responsive digital solutions that meet user needs. I also have experience in IT Support, administration, data processing, and documentation."
              : "Saya mengembangkan website dan aplikasi mobile untuk membangun solusi digital yang modern, responsif, dan sesuai dengan kebutuhan pengguna. Saya juga berpengalaman dalam IT Support, administrasi, pengolahan data, dan dokumentasi."}
          </p>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <div
            className="
              mt-9
              flex
              w-full
              max-w-full
              flex-wrap
              gap-4
            "
          >
            {/* Project */}

            <a
              href="#projects"
              className="
                group
                flex
                items-center
                gap-3
                rounded-lg
                bg-blue-600
                px-6
                py-4
                font-semibold
                text-white
                transition

                hover:bg-blue-700

                dark:bg-[#3b82f6]
                dark:hover:bg-[#2563eb]
              "
            >
              {isEnglish ? "View Projects" : "Lihat Project"}

              <ArrowDown
                size={18}
                className="
                  transition-transform
                  group-hover:translate-y-1
                "
              />
            </a>

            {/* CV */}

            <a
              href="/cv/CV_M_RomzaZikrian.pdf"
              download
              className="
                flex
                items-center
                gap-3
                rounded-lg
                border
                border-slate-200
                bg-white
                px-6
                py-4
                font-semibold
                text-slate-700
                transition

                hover:border-blue-500
                hover:bg-slate-50
                hover:text-blue-600

                dark:border-[#1e334f]
                dark:bg-transparent
                dark:text-[#cbd5e1]
                dark:hover:border-[#3b82f6]
                dark:hover:bg-[#0b1628]
                dark:hover:text-white
              "
            >
              {isEnglish ? "Download CV" : "Download CV"}

              <Download size={18} />
            </a>
          </div>

          {/* =================================================
              TECHNOLOGIES
          ================================================== */}

          <div
            className="
              mt-14
              w-full
              max-w-full
              border-t
              border-slate-200
              pt-7

              dark:border-[#1e334f]
            "
          >
            <p
              className="
                mb-4
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-slate-400

                dark:text-[#64748b]
              "
            >
              {isEnglish
                ? "Technologies I Work With"
                : "Teknologi yang Saya Gunakan"}
            </p>

            <div
              className="
                flex
                max-w-full
                flex-wrap
                gap-2
              "
            >
              {["Flutter", "Next.js", "Laravel", "Vue.js", "React Native"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="
                    rounded-md
                    border
                    border-slate-200
                    bg-slate-50
                    px-3
                    py-2
                    text-sm
                    text-slate-600
                    transition-colors

                    dark:border-[#1e334f]
                    dark:bg-[#0b1628]/80
                    dark:text-[#aebdd0]
                  "
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            RIGHT CONTENT
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="
            relative
            mx-auto
            w-full
            max-w-xl
            min-w-0
          "
        >
          {/* =================================================
              OUTER CARD
          ================================================== */}

          <div
            className="
              w-full
              max-w-full
              rounded-[28px]
              border
              border-slate-200
              bg-slate-50/80
              p-3
              shadow-2xl
              backdrop-blur
              transition-colors

              dark:border-[#1e334f]
              dark:bg-[#0b1628]/80
            "
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
  <Image
    src="/images/foto/romza.jpg"
    alt="M. Romza Zikrian"
    fill
    className="object-cover"
  />
              {/* Image Gradient */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/50
                  via-transparent
                  to-transparent

                  dark:from-[#07101f]
                  dark:via-transparent
                  dark:to-transparent
                "
              />

              {/* Location */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  flex
                  max-w-[calc(100%-2.5rem)]
                  items-center
                  gap-2
                  rounded-lg
                  bg-black/50
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-white
                  backdrop-blur-md
                "
              >
                <MapPin size={17} className="shrink-0" />

                <span className="truncate">Lampung, Indonesia</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          FIRST MARQUEE
          WEB & MOBILE
      ====================================================== */}

      <div
        className="
          relative
          w-full
          max-w-full
          overflow-hidden
          border-t
          border-slate-200
          bg-slate-50/70
          py-5
          transition-colors
          duration-300

          dark:border-[#1e334f]
          dark:bg-[#07101f]
        "
      >
        {/* LEFT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-10
            h-full
            w-20

            bg-gradient-to-r
            from-slate-50
            to-transparent

            dark:from-[#07101f]
          "
        />

        {/* RIGHT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-10
            h-full
            w-20

            bg-gradient-to-l
            from-slate-50
            to-transparent

            dark:from-[#07101f]
          "
        />

        {/* MOVING WEB & MOBILE SKILLS */}

        <motion.div
          className="
            flex
            w-max
            max-w-none
            items-center
            gap-8
          "
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={`${skill.name}-${index}`}
                className="
                  flex
                  shrink-0
                  items-center
                  gap-3
                  whitespace-nowrap
                  text-sm
                  font-medium
                  text-slate-600

                  dark:text-[#aebdd0]
                "
              >
                <Icon
                  className="
                    h-5
                    w-5
                    shrink-0
                    text-blue-600

                    dark:text-[#60a5fa]
                  "
                />

                <span>{skill.name}</span>

                <span
                  className="
                    ml-5
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-slate-300

                    dark:bg-[#334155]
                  "
                />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* =====================================================
          SECOND MARQUEE
          IT SUPPORT
      ====================================================== */}

      <div
        className="
          relative
          w-full
          max-w-full
          overflow-hidden
          border-t
          border-slate-200
          bg-white
          py-5
          transition-colors
          duration-300

          dark:border-[#1e334f]
          dark:bg-[#07101f]
        "
      >
        {/* LEFT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-10
            h-full
            w-20

            bg-gradient-to-r
            from-white
            to-transparent

            dark:from-[#07101f]
          "
        />

        {/* RIGHT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-10
            h-full
            w-20

            bg-gradient-to-l
            from-white
            to-transparent

            dark:from-[#07101f]
          "
        />

        {/* MOVING IT SUPPORT SKILLS */}

        <motion.div
          className="
            flex
            w-max
            max-w-none
            items-center
            gap-8
          "
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            x: {
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[...itSupportSkills, ...itSupportSkills, ...itSupportSkills].map(
            (skill, index) => {
              const Icon = skill.icon;

              return (
                <div
                  key={`${skill.name}-${index}`}
                  className="
                  flex
                  shrink-0
                  items-center
                  gap-3
                  whitespace-nowrap
                  text-sm
                  font-medium
                  text-slate-600

                  dark:text-[#aebdd0]
                "
                >
                  <Icon
                    className="
                    h-5
                    w-5
                    shrink-0
                    text-blue-600

                    dark:text-[#60a5fa]
                  "
                  />

                  <span>{skill.name}</span>

                  <span
                    className="
                    ml-5
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-slate-300

                    dark:bg-[#334155]
                  "
                  />
                </div>
              );
            },
          )}
        </motion.div>
      </div>
    </section>
  );
}
