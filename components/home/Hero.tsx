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

      <div className="absolute inset-0 grid-background opacity-40 dark:opacity-100" />

      {/* =====================================================
          BLUE GLOW
      ====================================================== */}

      <div
        className="
          absolute
          left-1/4
          top-40
          h-72
          w-72
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
          max-w-7xl
          items-center
          gap-12
          px-6
          pb-20
          pt-25

          lg:grid-cols-[1.15fr_0.85fr]
          lg:px-8
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
        >
          {/* =================================================
              BADGE
          ================================================== */}

          <div
            className="
              mb-7
              inline-flex
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
                rounded-full
                bg-emerald-500
                shadow-[0_0_10px_#34d399]
              "
            />
            Full Stack Web & Mobile Developer
          </div>

          {/* =================================================
              NAME
          ================================================== */}

          <h1
            className="
              max-w-4xl
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
              text-xl
              font-medium
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

          <div className="mt-9 flex flex-wrap gap-4">
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
              Download CV
              <Download size={18} />
            </a>
          </div>

          {/* =================================================
              TECHNOLOGIES
          ================================================== */}

          <div
            className="
              mt-14
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

            <div className="flex flex-wrap gap-2">
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
          "
        >
          {/* =================================================
              OUTER CARD
          ================================================== */}

          <div
            className="
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
            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[22px]
              "
            >
              {/* Profile Image */}

              <Image
                src="/images/foto/romza.jpg"
                alt="M. Romza Zikrian"
                fill
                priority
                className="object-cover"
              />

              {/* =================================================
                  IMAGE GRADIENT
              ================================================== */}

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

              {/* =================================================
                  LOCATION
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  flex
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
                <MapPin size={17} />
                Lampung, Indonesia
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
                  items-center
                  gap-3
                  whitespace-nowrap
                  text-sm
                  font-medium
                  text-slate-600

                  dark:text-[#aebdd0]
                "
              >
                {/* Icon */}

                <Icon
                  className="
                    h-5
                    w-5
                    text-blue-600

                    dark:text-[#60a5fa]
                  "
                />

                {/* Skill Name */}

                <span>{skill.name}</span>

                {/* Separator */}

                <span
                  className="
                    ml-5
                    h-1.5
                    w-1.5
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
                    items-center
                    gap-3
                    whitespace-nowrap
                    text-sm
                    font-medium
                    text-slate-600

                    dark:text-[#aebdd0]
                  "
                >
                  {/* Icon */}

                  <Icon
                    className="
                      h-5
                      w-5
                      text-blue-600

                      dark:text-[#60a5fa]
                    "
                  />

                  {/* Skill Name */}

                  <span>{skill.name}</span>

                  {/* Separator */}

                  <span
                    className="
                      ml-5
                      h-1.5
                      w-1.5
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
