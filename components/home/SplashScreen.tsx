"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Code2,
  Headset,
  BriefcaseBusiness,
  Laptop2,
  ChevronDown,
  Sparkles,
  Wrench,
  FileSpreadsheet,
} from "lucide-react";

import {
  SiNextdotjs,
  SiAstro,
  SiVuedotjs,
  SiLaravel,
  SiCodeigniter,
} from "react-icons/si";

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3200;
    const interval = 30;
    const increment = (interval / duration) * 100;

    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + increment, 100));
    }, interval);

    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, duration + 300);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(splashTimer);
    };
  }, []);

  const roles = [
    { name: "Web Developer", icon: Code2 },
    { name: "IT Support", icon: Headset },
    { name: "Administrasi", icon: BriefcaseBusiness },
  ];

  const techItems = [
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-white",
      position: "left-[5%] top-[22%]",
      delay: 0,
    },
    {
      name: "Vue.js",
      icon: SiVuedotjs,
      color: "text-green-400",
      position: "left-[17%] top-[43%]",
      delay: 0.4,
    },
    {
      name: "Astro",
      icon: SiAstro,
      color: "text-orange-400",
      position: "left-[7%] top-[65%]",
      delay: 0.8,
    },
    {
      name: "Laravel",
      icon: SiLaravel,
      color: "text-red-400",
      position: "right-[17%] top-[23%]",
      delay: 0.3,
    },
    {
      name: "CodeIgniter",
      icon: SiCodeigniter,
      color: "text-orange-500",
      position: "right-[5%] top-[43%]",
      delay: 0.7,
    },
    {
      name: "Microsoft Office",
      icon: FileSpreadsheet,
      color: "text-blue-400",
      position: "right-[8%] top-[65%]",
      delay: 1,
    },
    {
      name: "IT Support",
      icon: Headset,
      color: "text-cyan-400",
      position: "left-[25%] top-[13%]",
      delay: 0.5,
    },
    {
      name: "Troubleshooting",
      icon: Wrench,
      color: "text-yellow-400",
      position: "right-[27%] top-[13%]",
      delay: 0.9,
    },
  ];

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[99999] flex min-h-screen items-center justify-center overflow-hidden bg-[#030817] text-white"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0c2450_0%,#030817_65%)]" />

          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:45px_45px]" />

          {/* Glow effects */}
          <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[110px]" />

          <div className="absolute bottom-0 left-0 h-40 w-full bg-blue-500/10 blur-3xl" />

          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -25, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 2 + (i % 4),
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="absolute h-1 w-1 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6]"
              style={{
                left: `${(i * 17 + 7) % 100}%`,
                top: `${(i * 23 + 8) % 90}%`,
              }}
            />
          ))}

          {/* Floating Technology Cards - Desktop */}
          <div className="pointer-events-none absolute inset-0 z-[5] hidden lg:block">
            {techItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.5, y: 30 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -12, 0],
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    opacity: {
                      duration: 0.7,
                      delay: item.delay,
                    },
                    scale: {
                      duration: 0.7,
                      delay: item.delay,
                    },
                    y: {
                      duration: 3 + item.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay,
                    },
                    rotate: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay,
                    },
                  }}
                  className={`absolute ${item.position} flex min-w-[125px] flex-col items-center gap-3 rounded-xl border border-blue-500/40 bg-[#0b1b35]/80 px-5 py-4 shadow-[0_0_25px_rgba(37,99,235,0.15)] backdrop-blur-md`}
                >
                  <Icon className={`h-8 w-8 ${item.color}`} />

                  <span className="text-xs font-semibold tracking-wide text-blue-100">
                    {item.name}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Main content */}
          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-10 text-center">
            {/* MZ Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mb-7 flex h-32 w-32 items-center justify-center sm:h-40 sm:w-40"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border border-blue-500/60 border-t-cyan-300 shadow-[0_0_35px_rgba(37,99,235,0.35)]"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-3 rounded-full border border-dashed border-blue-400/30"
              />

              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-blue-400/50 bg-[#07152d] shadow-[0_0_45px_rgba(0,119,255,0.35)] sm:h-32 sm:w-32">
                <span className="bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-5xl font-black tracking-tighter text-transparent sm:text-6xl">
                  MZ
                </span>
              </div>

              <motion.div
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute right-2 top-5 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_#22d3ee]"
              />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-3xl font-black tracking-tight sm:text-5xl md:text-6xl">
                M. ROMZA{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  ZIKRIAN
                </span>
              </h1>

              <div className="mx-auto mt-4 flex max-w-2xl items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500" />

                <p className="text-xs font-semibold tracking-[0.16em] text-blue-100 sm:text-base sm:tracking-[0.25em]">
                  Web Developer | IT Support | Administrasi
                </p>

                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500" />
              </div>
            </motion.div>

            {/* Role cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              {roles.map((role, index) => {
                const Icon = role.icon;

                return (
                  <motion.div
                    key={role.name}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="flex items-center gap-2 rounded-full border border-blue-500/50 bg-blue-500/10 px-4 py-3 text-xs font-medium text-blue-100 shadow-[0_0_20px_rgba(37,99,235,0.1)] sm:px-5 sm:text-sm"
                  >
                    <Icon className="h-4 w-4 text-cyan-400" />
                    {role.name}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Laptop decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex items-center gap-3 text-blue-300/80"
            >
              <Laptop2 className="h-6 w-6" />

              <span className="text-xs tracking-widest sm:text-sm">
                BUILDING A BETTER DIGITAL EXPERIENCE
              </span>

              <Sparkles className="h-5 w-5 text-cyan-400" />
            </motion.div>

            {/* Loading progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 w-full max-w-lg"
            >
              <div className="mb-3 flex items-center justify-between text-xs font-medium text-blue-200 sm:text-sm">
                <span>Loading Portfolio...</span>
                <span>{Math.round(progress)}%</span>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full border border-blue-400/50 bg-slate-900/80">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-300 shadow-[0_0_20px_#0ea5e9]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>

            {/* Bottom indicator */}
            <motion.div
              animate={{
                y: [0, 8, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="mt-8 text-cyan-400"
            >
              <ChevronDown className="h-7 w-7" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
