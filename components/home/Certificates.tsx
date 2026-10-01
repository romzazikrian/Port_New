"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import CertificateGrid from "@/components/certificates/CertificateGrid";
import { useLanguage } from "@/context/LanguageContext";

export default function Certificates() {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  return (
    <section
      id="certificates"
      className="
        border-b
        border-slate-200
        bg-slate-50
        px-6
        py-32
        text-slate-900
        transition-colors
        duration-300
        dark:border-[#1e334f]
        dark:bg-[#07101f]
        dark:text-[#e8f0fa]
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-[#e8f0fa] md:text-5xl">
            {isEnglish ? "Certificates" : "Sertifikat"}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-[#94a3b8]">
            {isEnglish
              ? "A collection of certificates, competencies, organizational activities, committees, seminars, and other activities I have participated in."
              : "Dokumentasi sertifikat, kompetensi, kegiatan organisasi, kepanitiaan, seminar, dan berbagai kegiatan yang telah saya ikuti."}
          </p>
        </motion.div>

        {/* Featured Certificates */}
        <div className="mt-14">
          <CertificateGrid featured />
        </div>

        {/* View All Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/certificates"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-blue-600
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-700
              dark:bg-[#3b82f6]
              dark:hover:bg-[#2563eb]
            "
          >
            {isEnglish ? "View All Certificates" : "Lihat Semua Sertifikat"}

            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
