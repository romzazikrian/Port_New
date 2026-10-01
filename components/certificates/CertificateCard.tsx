"use client";

import Image from "next/image";
import { Award, Maximize2 } from "lucide-react";

import { Certificate, CertificateCategory } from "@/data/certificates";

import { useLanguage } from "@/context/LanguageContext";

interface CertificateCardProps {
  certificate: Certificate;
  onImageClick: (certificate: Certificate) => void;
}

export default function CertificateCard({
  certificate,
  onImageClick,
}: CertificateCardProps) {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  /*
   * ============================
   * BILINGUAL DATA
   * ============================
   */

  const title = isEnglish ? certificate.titleEn : certificate.titleId;

  const issuer = isEnglish ? certificate.issuerEn : certificate.issuerId;

  /*
   * ============================
   * CATEGORY TRANSLATION
   * ============================
   */

  const getCategoryLabel = (category: CertificateCategory) => {
    if (!isEnglish) {
      return category;
    }

    const translations: Record<CertificateCategory, string> = {
      Akademik: "Academic",
      "Non Akademik": "Non-Academic",
      Seminar: "Seminar",
    };

    return translations[category];
  };

  const categoryLabel = getCategoryLabel(certificate.category);

  return (
    <article
      className="
        group
        flex
        h-full
        min-h-[500px]
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-blue-400
        hover:shadow-xl

        dark:border-[#1e334f]
        dark:bg-[#0b1628]
        dark:hover:border-[#3b82f6]
      "
    >
      {/* ========================= */}
      {/* IMAGE */}
      {/* ========================= */}

      <button
        type="button"
        onClick={() => onImageClick(certificate)}
        className="
          relative
          block
          h-60
          w-full
          shrink-0
          overflow-hidden

          bg-slate-100

          dark:bg-[#050b14]
        "
        aria-label={
          isEnglish ? `View certificate ${title}` : `Lihat sertifikat ${title}`
        }
      >
        <Image
          src={certificate.images[0]}
          alt={title}
          fill
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw
          "
          className="
            object-cover

            transition
            duration-500

            group-hover:scale-105
          "
        />

        {/* ========================= */}
        {/* IMAGE OVERLAY */}
        {/* ========================= */}

        <div
          className="
            absolute
            inset-0

            flex
            items-center
            justify-center

            bg-black/0

            transition
            duration-300

            group-hover:bg-black/50
          "
        >
          <div
            className="
              rounded-full
              bg-white/10
              p-3

              opacity-0

              backdrop-blur-sm

              transition
              duration-300

              group-hover:opacity-100
            "
          >
            <Maximize2
              className="
                h-5
                w-5
                text-white
              "
            />
          </div>
        </div>

        {/* ========================= */}
        {/* NUMBER OF IMAGES */}
        {/* ========================= */}

        {certificate.images.length > 1 && (
          <div
            className="
              absolute
              bottom-4
              right-4

              rounded-full

              bg-black/70

              px-3
              py-1.5

              text-xs
              font-medium
              text-white

              backdrop-blur-sm
            "
          >
            {certificate.images.length} {isEnglish ? "Images" : "Foto"}
          </div>
        )}
      </button>

      {/* ========================= */}
      {/* CONTENT */}
      {/* ========================= */}

      <div
        className="
          flex
          flex-1
          flex-col
          p-5
        "
      >
        {/* ========================= */}
        {/* CATEGORY + YEAR */}
        {/* ========================= */}

        <div
          className="
            mb-3
            flex
            items-center
            justify-between
            gap-3
          "
        >
          <span
            className="
              inline-flex
              items-center
              gap-1

              rounded-full

              border
              border-blue-200

              bg-blue-50

              px-3
              py-1

              text-xs
              font-medium
              text-blue-600

              dark:border-[#3b82f6]/30
              dark:bg-[#3b82f6]/10
              dark:text-[#60a5fa]
            "
          >
            <Award className="h-3.5 w-3.5" />

            {categoryLabel}
          </span>

          <span
            className="
              text-xs
              text-slate-500

              dark:text-[#64748b]
            "
          >
            {certificate.year}
          </span>
        </div>

        {/* ========================= */}
        {/* TITLE */}
        {/* ========================= */}

        <h3
          className="
            line-clamp-2

            text-lg
            font-semibold

            text-slate-900

            dark:text-[#e8f0fa]
          "
        >
          {title}
        </h3>

        {/* ========================= */}
        {/* ISSUER */}
        {/* ========================= */}

        <p
          className="
            mt-2

            line-clamp-2
            min-h-[48px]

            text-sm
            leading-6

            text-slate-600

            dark:text-[#94a3b8]
          "
        >
          {issuer}
        </p>

        {/* ========================= */}
        {/* BUTTON */}
        {/* ========================= */}

        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={() => onImageClick(certificate)}
            className="
              inline-flex
              items-center
              gap-2

              rounded-lg

              bg-blue-600

              px-4
              py-2.5

              text-sm
              font-semibold
              text-white

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-blue-700
              hover:shadow-md

              dark:bg-[#3b82f6]
              dark:hover:bg-[#2563eb]
            "
          >
            <Maximize2 className="h-4 w-4" />

            {isEnglish ? "View Certificate" : "Lihat Sertifikat"}
          </button>
        </div>
      </div>
    </article>
  );
}
