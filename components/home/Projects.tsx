"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";
import ProjectGrid from "@/components/projects/ProjectGrid";

export default function Projects() {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  return (
    <section
      id="projects"
      className="bg-slate-50 py-24 text-slate-900 transition-colors duration-300 dark:bg-[#07101f] dark:text-[#e8f0fa]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {isEnglish ? "My Projects" : "Project Saya"}
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-[#94a3b8]">
            {isEnglish
              ? "A collection of websites and mobile applications that I have developed using various modern technologies."
              : "Kumpulan website dan aplikasi mobile yang telah saya kembangkan menggunakan berbagai teknologi modern."}
          </p>
        </motion.div>

        {/* Featured Projects */}
        <ProjectGrid featured />

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/projects"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-blue-600
              px-6 py-3
              text-sm font-semibold
              text-white
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-blue-700
              dark:bg-[#3b82f6]
              dark:hover:bg-[#2563eb]
            "
          >
            {isEnglish ? "View All Projects" : "Lihat Semua Project"}

            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
