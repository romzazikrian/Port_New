"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  certificates,
  Certificate,
  CertificateCategory,
} from "@/data/certificates";

import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";

import { useLanguage } from "@/context/LanguageContext";

type Filter = "Semua" | CertificateCategory;

interface CertificateGridProps {
  featured?: boolean;
}

const filters: Filter[] = ["Semua", "Akademik", "Non Akademik", "Seminar"];

export default function CertificateGrid({
  featured = false,
}: CertificateGridProps) {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  const [activeFilter, setActiveFilter] = useState<Filter>("Semua");

  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  /*
   * ============================
   * FILTER CERTIFICATES
   * ============================
   */

  const filteredCertificates =
    activeFilter === "Semua"
      ? certificates
      : certificates.filter(
          (certificate) => certificate.category === activeFilter,
        );

  /*
   * ============================
   * FEATURED CERTIFICATES
   * ============================
   *
   * Homepage hanya menampilkan
   * 3 sertifikat utama.
   */

  const featuredCertificates = [1, 2, 3]
    .map((id) => certificates.find((certificate) => certificate.id === id))
    .filter((certificate): certificate is Certificate => Boolean(certificate));

  const displayedCertificates = featured
    ? featuredCertificates
    : filteredCertificates;

  /*
   * ============================
   * FILTER TRANSLATION
   * ============================
   */

  const getFilterLabel = (filter: Filter) => {
    if (!isEnglish) {
      return filter;
    }

    const translations: Record<Filter, string> = {
      Semua: "All",
      Akademik: "Academic",
      "Non Akademik": "Non-Academic",
      Seminar: "Seminar",
    };

    return translations[filter];
  };

  return (
    <>
      {/* ============================ */}
      {/* FILTER */}
      {/* ============================ */}

      {!featured && (
        <div
          className="
            mb-10
            flex
            flex-wrap
            justify-center
            gap-3
          "
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`
                rounded-full
                border
                px-4
                py-2
                text-sm
                font-medium

                transition-all
                duration-300

                ${
                  activeFilter === filter
                    ? `
                      border-blue-500
                      bg-blue-500
                      text-white
                    `
                    : `
                      border-slate-200
                      bg-white
                      text-slate-600

                      hover:border-blue-400
                      hover:text-blue-600

                      dark:border-[#1e334f]
                      dark:bg-[#0b1628]
                      dark:text-[#94a3b8]

                      dark:hover:border-[#3b82f6]
                      dark:hover:text-white
                    `
                }
              `}
            >
              {getFilterLabel(filter)}
            </button>
          ))}
        </div>
      )}

      {/* ============================ */}
      {/* CERTIFICATE GRID */}
      {/* ============================ */}

      <motion.div
        layout
        className="
          grid
          grid-cols-1
          items-stretch
          gap-6

          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        <AnimatePresence mode="popLayout">
          {displayedCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              layout
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="h-full"
            >
              <CertificateCard
                certificate={certificate}
                onImageClick={setSelectedCertificate}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ============================ */}
      {/* EMPTY STATE */}
      {/* ============================ */}

      {displayedCertificates.length === 0 && (
        <div
          className="
            rounded-2xl
            border
            border-dashed
            border-slate-300
            bg-white
            py-16
            text-center

            dark:border-[#1e334f]
            dark:bg-[#0b1628]
          "
        >
          <p
            className="
              text-slate-500
              dark:text-[#94a3b8]
            "
          >
            {isEnglish
              ? "There are no certificates in this category yet."
              : "Belum ada sertifikat pada kategori ini."}
          </p>
        </div>
      )}

      {/* ============================ */}
      {/* CERTIFICATE MODAL */}
      {/* ============================ */}

      <CertificateModal
        key={selectedCertificate?.id ?? "certificate-modal"}
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
}
