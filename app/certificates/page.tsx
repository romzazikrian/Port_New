"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";
import CertificateGrid from "@/components/certificates/CertificateGrid";

export default function CertificatesPage() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 transition-colors duration-300 dark:bg-[#07101f] dark:text-[#e8f0fa] lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-[#94a3b8] dark:hover:text-[#60a5fa]"
          >
            <ArrowLeft className="h-4 w-4" />
            {isEnglish ? "Back to Home" : "Kembali ke Beranda"}
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 mt-10"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {isEnglish ? "All Certificates" : "Semua Sertifikat"}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-[#94a3b8]">
            {isEnglish
              ? "Explore certificates and achievements from academic, professional, organizational, and other activities."
              : "Jelajahi sertifikat dan pencapaian dari kegiatan akademik, profesional, organisasi, dan kegiatan lainnya."}
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Total */}
          <div
            className="
      rounded-2xl
      border
      border-slate-200
      bg-white
      p-6
      dark:border-[#1e334f]
      dark:bg-[#0b1628]
    "
          >
            <p className="text-sm text-slate-500 dark:text-[#94a3b8]">
              {isEnglish ? "Total Certificates" : "Total Sertifikat"}
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-[#e8f0fa]">
              23
            </p>
          </div>

          {/* Akademik */}
          <div
            className="
      rounded-2xl
      border
      border-slate-200
      bg-white
      p-6
      dark:border-[#1e334f]
      dark:bg-[#0b1628]
    "
          >
            <p className="text-sm text-slate-500 dark:text-[#94a3b8]">
              {isEnglish ? "Academic" : "Akademik"}
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-[#e8f0fa]">
              13
            </p>
          </div>

          {/* Non Akademik */}
          <div
            className="
      rounded-2xl
      border
      border-slate-200
      bg-white
      p-6
      dark:border-[#1e334f]
      dark:bg-[#0b1628]
    "
          >
            <p className="text-sm text-slate-500 dark:text-[#94a3b8]">
              {isEnglish ? "Non-Academic" : "Non Akademik"}
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-[#e8f0fa]">
              4
            </p>
          </div>

          {/* Seminar */}
          <div
            className="
      rounded-2xl
      border
      border-slate-200
      bg-white
      p-6
      dark:border-[#1e334f]
      dark:bg-[#0b1628]
    "
          >
            <p className="text-sm text-slate-500 dark:text-[#94a3b8]">
              {isEnglish ? "Seminars" : "Seminar"}
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-[#e8f0fa]">
              6
            </p>
          </div>
        </motion.div>

        {/* All Certificates */}
        <CertificateGrid />
      </div>
    </main>
  );
}
