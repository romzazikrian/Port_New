"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Images,
  Maximize,
  Minimize,
} from "lucide-react";

import { Certificate, CertificateCategory } from "@/data/certificates";

import { useLanguage } from "@/context/LanguageContext";

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  /*
   * ============================
   * KEYBOARD NAVIGATION
   * ============================
   */
  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // ESC
      if (event.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }

        return;
      }

      // Previous image
      if (event.key === "ArrowLeft") {
        setCurrentIndex((prev) =>
          prev === 0 ? certificate.images.length - 1 : prev - 1,
        );

        return;
      }

      // Next image
      if (event.key === "ArrowRight") {
        setCurrentIndex((prev) =>
          prev === certificate.images.length - 1 ? 0 : prev + 1,
        );

        return;
      }

      // Fullscreen
      if (event.key.toLowerCase() === "f") {
        setIsFullscreen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, isFullscreen, onClose]);

  if (!certificate) {
    return null;
  }

  const totalImages = certificate.images.length;

  /*
   * ============================
   * BILINGUAL DATA
   * ============================
   */

  const title = isEnglish ? certificate.titleEn : certificate.titleId;

  const issuer = isEnglish ? certificate.issuerEn : certificate.issuerId;

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

  /*
   * ============================
   * IMAGE NAVIGATION
   * ============================
   */

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  /*
   * ============================
   * FULLSCREEN
   * ============================
   */

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  return (
    <div
      className={`
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/90
        p-3
        backdrop-blur-sm
        sm:p-6

        ${isFullscreen ? "p-0" : ""}
      `}
      onClick={onClose}
    >
      {/* ========================= */}
      {/* CLOSE BUTTON */}
      {/* ========================= */}

      <button
        type="button"
        onClick={onClose}
        className="
          absolute
          right-4
          top-4
          z-[120]

          flex
          h-11
          w-11
          items-center
          justify-center

          rounded-full

          border
          border-white/10

          bg-black/60

          text-white

          shadow-lg

          backdrop-blur-sm

          transition-all
          duration-200

          hover:scale-105
          hover:bg-white
          hover:text-black
        "
        aria-label={isEnglish ? "Close certificate" : "Tutup sertifikat"}
        title={isEnglish ? "Close" : "Tutup"}
      >
        <X className="h-6 w-6" />
      </button>

      {/* ========================= */}
      {/* MODAL */}
      {/* ========================= */}

      <div
        className={`
          relative
          flex
          flex-col
          overflow-hidden

          border
          border-slate-200

          bg-white

          shadow-2xl

          transition-all
          duration-300

          dark:border-[#1e334f]
          dark:bg-[#07101f]

          ${
            isFullscreen
              ? "h-screen w-screen rounded-none border-0"
              : "max-h-[95vh] w-full max-w-6xl rounded-2xl"
          }
        `}
        onClick={(event) => event.stopPropagation()}
      >
        {/* ========================= */}
        {/* FULLSCREEN BUTTON */}
        {/* ========================= */}

        <button
          type="button"
          onClick={toggleFullscreen}
          className="
            absolute
            right-20
            top-4
            z-[120]

            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full

            border
            border-slate-300

            bg-white/90

            text-slate-900

            shadow-lg

            backdrop-blur-md

            transition-all
            duration-200

            hover:scale-105
            hover:border-slate-400
            hover:bg-white
            hover:text-black

            dark:border-white/20
            dark:bg-black/60
            dark:text-white

            dark:hover:border-white/30
            dark:hover:bg-white
            dark:hover:text-black
          "
          aria-label={
            isFullscreen
              ? isEnglish
                ? "Exit fullscreen"
                : "Keluar layar penuh"
              : isEnglish
                ? "Fullscreen"
                : "Layar penuh"
          }
          title={
            isFullscreen
              ? isEnglish
                ? "Exit fullscreen"
                : "Keluar layar penuh"
              : isEnglish
                ? "Fullscreen"
                : "Layar penuh"
          }
        >
          {isFullscreen ? (
            <Minimize className="h-5 w-5" />
          ) : (
            <Maximize className="h-5 w-5" />
          )}
        </button>

        {/* ========================= */}
        {/* IMAGE AREA */}
        {/* ========================= */}

        <div
          className={`
            relative
            flex
            w-full
            items-center
            justify-center

            bg-slate-100

            p-4

            dark:bg-black

            ${
              isFullscreen
                ? "h-screen"
                : "h-[62vh] min-h-[400px] sm:h-[65vh] md:h-[68vh]"
            }
          `}
        >
          {/* IMAGE */}

          <div className="relative h-full w-full">
            <Image
              src={certificate.images[currentIndex]}
              alt={`${title} - ${currentIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* ========================= */}
          {/* PREVIOUS */}
          {/* ========================= */}

          {totalImages > 1 && (
            <button
              type="button"
              onClick={previousImage}
              className="
                absolute
                left-3
                top-1/2

                flex
                h-11
                w-11
                -translate-y-1/2

                items-center
                justify-center

                rounded-full

                bg-black/60

                text-white

                shadow-lg

                backdrop-blur-sm

                transition-all
                duration-200

                hover:scale-105
                hover:bg-black/80

                sm:left-5
              "
              aria-label={isEnglish ? "Previous image" : "Foto sebelumnya"}
              title={isEnglish ? "Previous image" : "Foto sebelumnya"}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* ========================= */}
          {/* NEXT */}
          {/* ========================= */}

          {totalImages > 1 && (
            <button
              type="button"
              onClick={nextImage}
              className="
                absolute
                right-3
                top-1/2

                flex
                h-11
                w-11
                -translate-y-1/2

                items-center
                justify-center

                rounded-full

                bg-black/60

                text-white

                shadow-lg

                backdrop-blur-sm

                transition-all
                duration-200

                hover:scale-105
                hover:bg-black/80

                sm:right-5
              "
              aria-label={isEnglish ? "Next image" : "Foto berikutnya"}
              title={isEnglish ? "Next image" : "Foto berikutnya"}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* ========================= */}
          {/* IMAGE COUNTER */}
          {/* ========================= */}

          {totalImages > 1 && (
            <div
              className="
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2

                rounded-full

                bg-black/70

                px-4
                py-2

                text-sm
                font-medium
                text-white

                shadow-lg

                backdrop-blur-sm
              "
            >
              {currentIndex + 1} / {totalImages}
            </div>
          )}
        </div>

        {/* ========================= */}
        {/* INFORMATION */}
        {/* ========================= */}

        {!isFullscreen && (
          <div
            className="
              border-t
              border-slate-200

              bg-white

              p-5

              md:p-6

              dark:border-[#1e334f]
              dark:bg-[#0b1628]
            "
          >
            <div
              className="
                flex
                flex-col
                gap-4

                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              {/* ========================= */}
              {/* CERTIFICATE INFORMATION */}
              {/* ========================= */}

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <Images
                    className="
                      h-4
                      w-4
                      shrink-0

                      text-blue-600

                      dark:text-[#60a5fa]
                    "
                  />

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.2em]

                      text-blue-600

                      dark:text-[#3b82f6]
                    "
                  >
                    {categoryLabel}
                  </p>
                </div>

                <h3
                  className="
                    mt-2

                    text-xl
                    font-semibold

                    text-slate-900

                    dark:text-[#e8f0fa]
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    mt-1

                    text-sm
                    leading-6

                    text-slate-600

                    dark:text-[#94a3b8]
                  "
                >
                  {issuer} • {certificate.year}
                </p>
              </div>

              {/* ========================= */}
              {/* IMAGE COUNT */}
              {/* ========================= */}

              {totalImages > 1 && (
                <div
                  className="
                    shrink-0

                    text-sm

                    text-slate-500

                    dark:text-[#94a3b8]
                  "
                >
                  {isEnglish
                    ? `${totalImages} certificate images`
                    : `${totalImages} foto sertifikat`}
                </div>
              )}
            </div>

            {/* ========================= */}
            {/* THUMBNAILS */}
            {/* ========================= */}

            {totalImages > 1 && (
              <div
                className="
                  mt-5
                  flex
                  gap-2
                  overflow-x-auto
                  pb-1
                "
              >
                {certificate.images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`
                        relative

                        h-16
                        w-24
                        shrink-0

                        overflow-hidden

                        rounded-lg

                        border-2

                        transition-all
                        duration-200

                        ${
                          currentIndex === index
                            ? "border-blue-500 opacity-100"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }
                      `}
                    aria-label={
                      isEnglish
                        ? `View image ${index + 1}`
                        : `Lihat foto ${index + 1}`
                    }
                  >
                    <Image
                      src={image}
                      alt={`${title} ${index + 1}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
