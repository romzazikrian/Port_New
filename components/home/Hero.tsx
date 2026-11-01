"use client";

import {
  ArrowDown,
  BrainCircuit,
  Computer,
  Download,
  Globe2,
  MapPin,
  MonitorCog,
  Wrench,
} from "lucide-react";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  SiAstro,
  SiCodeigniter,
  SiLaravel,
  SiNextdotjs,
  SiVuedotjs,
  SiPrisma,
  SiMysql,
} from "react-icons/si";

import {
  Palette,
  BriefcaseBusiness,
  Image as PhotoshopIcon,
  Video as PremiereIcon,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const skills = [
  {
    name: "Web Developer",
    icon: Globe2,
    color: "text-teal-600 dark:text-teal-400",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-slate-900 dark:text-white",
  },
  {
    name: "Astro",
    icon: SiAstro,
    color: "text-orange-500 dark:text-orange-400",
  },
  {
    name: "Vue.js",
    icon: SiVuedotjs,
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    color: "text-red-600 dark:text-red-400",
  },
  {
    name: "CodeIgniter",
    icon: SiCodeigniter,
    color: "text-orange-600 dark:text-orange-400",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "text-slate-700 dark:text-slate-200",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    name: "Canva",
    icon: Palette,
    color: "text-cyan-500",
  },
  {
    name: "Microsoft Office",
    icon: BriefcaseBusiness,
    color: "text-red-500",
  },
  {
    name: "Photoshop",
    icon: PhotoshopIcon,
    color: "text-blue-500",
  },
  {
    name: "Premiere Pro",
    icon: PremiereIcon,
    color: "text-purple-500",
  },
];

const itSupportSkills = [
  {
    name: "Hardware Troubleshooting",
    icon: Computer,
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    name: "Software Troubleshooting",
    icon: MonitorCog,
    color: "text-amber-500 dark:text-amber-400",
  },
  {
    name: "Computer Maintenance",
    icon: Wrench,
    color: "text-cyan-600 dark:text-cyan-400",
  },
  {
    name: "Technical Problem Solving",
    icon: BrainCircuit,
    color: "text-violet-600 dark:text-violet-400",
  },
  {
    name: "IT Support",
    icon: Computer,
    color: "text-sky-600 dark:text-sky-400",
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
        isolate
        w-full
        overflow-hidden
        border-b
        border-slate-200
        bg-white
        transition-colors
        duration-300
        dark:border-[#1e334f]
        dark:bg-[#0b1220]
      "
    >
      {/* =========================================
          GRID BACKGROUND
      ========================================= */}

      <div
        aria-hidden="true"
        className="
          grid-background
          pointer-events-none
          absolute
          inset-0
          z-[-2]
        "
      />

      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[15%]
          top-24
          z-[-1]
          h-72
          w-72
          rounded-full
          bg-blue-500/10
          blur-[110px]
        "
      />

      {/* =========================================
          HERO CONTENT
      ========================================= */}

      <div
        className="
          relative
          mx-auto
          grid
          min-h-[calc(100svh-5.5rem)]
          w-full
          max-w-7xl
          grid-cols-1
          items-center
          gap-12
          px-5
          pb-16
          pt-28
          sm:px-8
          lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]
          lg:gap-16
          lg:px-10
          lg:pb-20
          lg:pt-24
          xl:gap-20
        "
      >
        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 min-w-0 w-full"
        >
          {/* STATUS BADGE */}

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
              bg-white/70
              px-4
              py-2.5
              text-sm
              text-slate-600
              shadow-sm
              backdrop-blur-md
              dark:border-[#29384d]
              dark:bg-[#111c2d]/80
              dark:text-[#b4c1d3]
            "
          >
            <span
              className="
                h-2
                w-2
                shrink-0
                rounded-full
                bg-emerald-500
                shadow-[0_0_10px_rgba(16,185,129,0.6)]
              "
            />

            <span>
              {isEnglish
                ? "Web Developer | IT Support | Administration"
                : "Web Developer | IT Support | Administrasi"}
            </span>
          </div>

          {/* NAME */}

          <h1
            className="
              max-w-full
              break-words
              text-5xl
              font-semibold
              leading-[0.98]
              tracking-[-0.055em]
              text-slate-900
              sm:text-6xl
              lg:text-6xl
              xl:text-[76px]
              dark:text-[#e5ebf5]
            "
          >
            M. Romza{" "}
            <span className="text-slate-500 dark:text-[#a7b5c9]">Zikrian.</span>
          </h1>

          {/* PROFESSION */}

          <h2
            className="
              mt-7
              text-xl
              font-medium
              leading-relaxed
              text-slate-700
              sm:text-2xl
              dark:text-[#c0cddd]
            "
          >
            {isEnglish
              ? "Web Developer | IT Support | Administration"
              : "Web Developer | IT Support | Administrasi"}
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-slate-600
              sm:text-lg
              dark:text-[#9caabe]
            "
          >
            {isEnglish
              ? "I focus on developing modern, responsive websites and digital solutions tailored to user needs. I also have experience in IT support, troubleshooting, administration, data processing, documentation, and Microsoft Office."
              : "Berfokus pada pengembangan website dan solusi digital yang modern, responsif, serta disesuaikan dengan kebutuhan pengguna. Berpengalaman dalam IT Support, troubleshooting, administrasi, pengolahan data, dokumentasi, dan Microsoft Office."}
          </p>

          {/* BUTTONS */}

          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="#projects"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-lg
                bg-blue-600
                px-5
                py-4
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-blue-700
                sm:px-6
                dark:bg-[#4f78ff]
                dark:hover:bg-[#4169ed]
              "
            >
              {isEnglish ? "Explore My Projects" : "Jelajahi karya saya"}

              <ArrowDown
                size={18}
                className="transition-transform group-hover:translate-y-1"
              />
            </a>

            <a
              href="/cv/Curriculum Vitae (CV).pdf"
              download
              className="
                inline-flex
                items-center
                gap-3
                rounded-lg
                border
                border-slate-300
                bg-white/60
                px-5
                py-4
                text-sm
                font-semibold
                text-slate-700
                transition
                hover:border-blue-500
                hover:text-blue-600
                sm:px-6
                dark:border-[#34445c]
                dark:bg-[#0b1220]/70
                dark:text-[#c5d0e0]
                dark:hover:border-blue-500
                dark:hover:text-blue-400
              "
            >
              {isEnglish ? "Download CV" : "Unduh CV"}

              <Download size={18} />
            </a>
          </div>

          {/* TECHNOLOGY TAGS */}

          <div
            className="
              mt-12
              max-w-2xl
              border-t
              border-slate-200
              pt-6
              dark:border-[#29384d]
            "
          >
            <p
              className="
                mb-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-slate-500
                dark:text-[#8292aa]
              "
            >
              {isEnglish
                ? "Technologies I Work With"
                : "Teknologi yang Saya Gunakan"}
            </p>

            <div className="flex flex-wrap gap-2">
              {skills
                .slice(1)
                .filter(
                  (skill) =>
                    ![
                      "Prisma",
                      "MySQL",
                      "Canva",
                      "Microsoft Office",
                      "Photoshop",
                      "Premiere Pro",
                    ].includes(skill.name),
                )
                .map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <span
                      key={skill.name}
                      className="
            inline-flex
            items-center
            gap-2
            rounded-md
            border
            border-slate-200
            bg-white/60
            px-3
            py-2
            text-xs
            font-medium
            text-slate-700
            transition-colors
            dark:border-[#29384d]
            dark:bg-[#111c2d]/70
            dark:text-[#b7c5d8]
          "
                    >
                      <Icon className={`h-3.5 w-3.5 ${skill.color}`} />
                      {skill.name}
                    </span>
                  );
                })}
            </div>
          </div>
        </motion.div>

        {/* =========================================
            RIGHT CONTENT: DECORATIVE LINES + PHOTO
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="
            relative
            mx-auto
            flex
            w-full
            max-w-[390px]
            min-w-0
            items-center
            justify-center
            lg:max-w-[360px]
            xl:max-w-[390px]
          "
        >
          {/* DECORATIVE CURVED LINES */}

          <svg
            aria-hidden="true"
            viewBox="0 0 500 680"
            fill="none"
            className="
              pointer-events-none
              absolute
              -left-20
              top-1/2
              z-0
              hidden
              h-[125%]
              w-[135%]
              -translate-y-1/2
              overflow-visible
              lg:block
            "
          >
            <path
              d="
                M 285 -20
                C 255 15, 250 30, 275 65
                C 310 110, 360 115, 390 145
                C 420 170, 450 165, 475 185
                C 505 210, 520 235, 545 255
                C 570 280, 585 300, 580 345
                C 575 395, 555 440, 525 475
                C 495 510, 450 555, 410 570
                C 370 585, 320 560, 275 535
                C 225 510, 175 475, 140 435
                C 100 390, 90 345, 85 300
                C 80 255, 65 205, 65 155
                C 65 115, 80 100, 110 85
              "
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              className="text-blue-400/40 dark:text-blue-400/35"
            />

            <path
              d="
                M 285 -20
                C 255 15, 250 30, 275 65
                C 310 110, 360 115, 390 145
              "
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-indigo-500/50 dark:text-indigo-400/50"
            />

            <circle
              cx="110"
              cy="85"
              r="4"
              fill="currentColor"
              className="text-blue-500 dark:text-blue-400"
            />
          </svg>

          {/* PHOTO CARD */}

          <div
            className="
              relative
              z-10
              w-full
              rounded-[27px]
              border
              border-slate-200
              bg-slate-100/90
              p-2
              shadow-[0_20px_70px_rgba(15,23,42,0.12)]
              backdrop-blur-xl
              dark:border-[#1c293b]
              dark:bg-[#131d2c]
              dark:shadow-[0_20px_80px_rgba(0,0,0,0.3)]
            "
          >
            <div
              className="
                relative
                aspect-[4/5]
                w-full
                overflow-hidden
                rounded-[20px]
                bg-slate-200
                dark:bg-[#0b1220]
              "
            >
              <Image
                src="/images/foto/romza.jpg"
                alt="M. Romza Zikrian"
                fill
                priority
                sizes="(max-width: 1023px) 85vw, 390px"
                className="object-cover object-center"
              />

              {/* PHOTO OVERLAY */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-transparent
                  to-black/5
                "
              />

              {/* LOCATION */}

              <div
                className="
                  absolute
                  bottom-3
                  left-3
                  right-3
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  bg-black/40
                  px-3
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  backdrop-blur-md
                  sm:text-sm
                "
              >
                <MapPin size={16} className="shrink-0" />

                <span className="truncate">Lampung, Indonesia</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =========================================
          FIRST MARQUEE: DEVELOPMENT SKILLS
      ========================================= */}

      <div
        className="
          relative
          w-full
          overflow-hidden
          border-t
          border-slate-200
          bg-slate-50/70
          py-5
          dark:border-[#29384d]
          dark:bg-[#0b1220]
        "
      >
        {/* Left Gradient */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-10
            h-full
            w-16
            bg-gradient-to-r
            from-slate-50
            to-transparent
            dark:from-[#0b1220]
          "
        />

        {/* Right Gradient */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-10
            h-full
            w-16
            bg-gradient-to-l
            from-slate-50
            to-transparent
            dark:from-[#0b1220]
          "
        />

        {/* Skills Animation */}

        <motion.div
          className="flex w-max items-center gap-8"
          animate={{ x: ["0%", "-50%"] }}
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
                  sm:text-base
                  dark:text-[#b7c5d8]
                "
              >
                <Icon
                  className={`h-6 w-6 shrink-0 sm:h-[26px] sm:w-[26px] ${skill.color}`}
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
                    dark:bg-[#34445c]
                  "
                />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* =========================================
          SECOND MARQUEE: IT SUPPORT
      ========================================= */}

      <div
        className="
          relative
          w-full
          overflow-hidden
          border-t
          border-slate-200
          bg-white
          py-5
          dark:border-[#29384d]
          dark:bg-[#0b1220]
        "
      >
        {/* Left Gradient */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-10
            h-full
            w-16
            bg-gradient-to-r
            from-white
            to-transparent
            dark:from-[#0b1220]
          "
        />

        {/* Right Gradient */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-10
            h-full
            w-16
            bg-gradient-to-l
            from-white
            to-transparent
            dark:from-[#0b1220]
          "
        />

        {/* IT Support Animation */}

        <motion.div
          className="flex w-max items-center gap-8"
          animate={{ x: ["-50%", "0%"] }}
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
                    sm:text-base
                    dark:text-[#b7c5d8]
                  "
                >
                  <Icon
                    className={`h-6 w-6 shrink-0 sm:h-[26px] sm:w-[26px] ${skill.color}`}
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
                      dark:bg-[#34445c]
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
