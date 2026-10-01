"use client";

import { useEffect, useState } from "react";
import { X, Maximize, Minimize } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

import { Project } from "@/types/project";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  const [isFullscreen, setIsFullscreen] = useState(false);

  /*
   * ============================
   * KEYBOARD CONTROLS
   * ============================
   */

  useEffect(() => {
    if (!project) return;

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

      // F
      if (event.key.toLowerCase() === "f") {
        setIsFullscreen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, isFullscreen, onClose]);

  if (!project) {
    return null;
  }

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

        bg-black/80
        p-4
        backdrop-blur-sm

        sm:p-8

        dark:bg-black/90

        ${isFullscreen ? "p-0" : ""}
      `}
      onClick={onClose}
    >
      {/* ============================ */}
      {/* MODAL */}
      {/* ============================ */}

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
          dark:bg-[#0b1628]

          ${
            isFullscreen
              ? `
                h-screen
                w-screen
                rounded-none
                border-0
              `
              : `
                max-h-[95vh]
                w-full
                max-w-6xl
                rounded-2xl
              `
          }
        `}
        onClick={(event) => event.stopPropagation()}
      >
        {/* ============================ */}
        {/* CLOSE BUTTON */}
        {/* ============================ */}

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
          aria-label={isEnglish ? "Close" : "Tutup"}
          title={isEnglish ? "Close" : "Tutup"}
        >
          <X className="h-5 w-5" />
        </button>

        {/* ============================ */}
        {/* FULLSCREEN BUTTON */}
        {/* ============================ */}

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

        {/* ============================ */}
        {/* IMAGE */}
        {/* ============================ */}

        <div
          className={`
            relative
            flex
            w-full
            items-center
            justify-center

            bg-slate-100

            dark:bg-[#050b14]

            ${
              isFullscreen
                ? "h-screen"
                : `
                  h-[65vh]
                  min-h-[300px]

                  sm:h-[68vh]
                  sm:min-h-[500px]
                `
            }
          `}
        >
          <div
            className="
              relative
              h-full
              w-full
            "
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>

        {/* ============================ */}
        {/* INFORMATION */}
        {/* ============================ */}

        {!isFullscreen && (
          <div
            className="
              border-t
              border-slate-200

              bg-white

              p-6

              sm:p-8

              dark:border-[#1e334f]
              dark:bg-[#0b1628]
            "
          >
            <div
              className="
                flex
                flex-col
                gap-5

                sm:flex-row
                sm:items-start
                sm:justify-between
              "
            >
              {/* ============================ */}
              {/* PROJECT INFO */}
              {/* ============================ */}

              <div className="min-w-0">
                {/* Category */}

                <span
                  className="
                    inline-flex
                    rounded-md

                    border
                    border-slate-200

                    bg-slate-50

                    px-3
                    py-1.5

                    text-xs
                    font-medium
                    text-slate-600

                    dark:border-[#1e334f]
                    dark:bg-[#07101f]
                    dark:text-[#94a3b8]
                  "
                >
                  {project.category}
                </span>

                {/* Title */}

                <h3
                  className="
                    mt-4

                    text-2xl
                    font-semibold

                    text-slate-900

                    dark:text-[#e8f0fa]
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-3

                    text-sm
                    leading-6

                    text-slate-600

                    dark:text-[#94a3b8]
                  "
                >
                  {isEnglish ? project.descriptionEn : project.descriptionId}
                </p>
              </div>

              {/* ============================ */}
              {/* GITHUB */}
              {/* ============================ */}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    shrink-0
                    items-center
                    justify-center
                    gap-2

                    rounded-lg

                    border
                    border-slate-200

                    px-5
                    py-3

                    text-sm
                    font-medium

                    text-slate-700

                    transition

                    hover:border-blue-500
                    hover:text-blue-600

                    dark:border-[#1e334f]
                    dark:text-[#e8f0fa]

                    dark:hover:border-[#3b82f6]
                    dark:hover:text-white
                  "
                >
                  <FaGithub size={17} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
