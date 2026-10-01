"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Project } from "@/types/project";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectCardProps {
  project: Project;
  onImageClick: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onImageClick,
}: ProjectCardProps) {
  const { language } = useLanguage();

  const isEnglish = language === "en";

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
        hover:border-blue-500/50
        hover:shadow-lg
        dark:border-[#1e334f]
        dark:bg-[#0b1628]/70
        dark:hover:border-[#3b82f6]/50
      "
    >
      {/* ==================== IMAGE ==================== */}
      <button
        type="button"
        onClick={() => onImageClick(project)}
        className="
          relative
          block
          aspect-video
          w-full
          shrink-0
          overflow-hidden
          text-left
        "
        aria-label={
          isEnglish
            ? `View image of ${project.title}`
            : `Lihat gambar ${project.title}`
        }
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/0
            transition
            duration-300
            group-hover:bg-black/30
          "
        />

        {/* Category */}
        <div
          className="
            absolute
            left-4
            top-4
            rounded-md
            border
            border-white/20
            bg-slate-900/80
            px-3
            py-1.5
            text-xs
            font-medium
            text-blue-100
            backdrop-blur
          "
        >
          {project.category}
        </div>

        {/* Image Action */}
        <div
          className="
            absolute
            bottom-4
            right-4
            flex
            h-10
            w-10
            translate-y-2
            items-center
            justify-center
            rounded-full
            bg-white
            text-slate-900
            opacity-0
            shadow-lg
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <ArrowUpRight size={18} />
        </div>
      </button>

      {/* ==================== CONTENT ==================== */}
      <div className="flex flex-1 flex-col p-6">
        {/* Title */}
        <h3
          className="
            text-xl
            font-semibold
            leading-tight
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
            line-clamp-3
            min-h-[72px]
            text-sm
            leading-6
            text-slate-600
            dark:text-[#94a3b8]
          "
        >
          {isEnglish ? project.descriptionEn : project.descriptionId}
        </p>

        {/* ==================== BUTTONS ==================== */}
        <div
          className="
            mt-auto
            flex
            items-center
            gap-3
            pt-6
          "
        >
          {/* View Project */}
          <button
            type="button"
            onClick={() => onImageClick(project)}
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
              hover:bg-blue-700
              hover:shadow-md
              dark:bg-[#3b82f6]
              dark:hover:bg-[#2563eb]
            "
          >
            {isEnglish ? "View Project" : "Lihat Project"}

            <ArrowUpRight size={16} />
          </button>

          {/* GitHub */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-slate-200
                px-4
                py-2.5
                text-sm
                font-medium
                text-slate-600
                transition-all
                duration-300
                hover:border-blue-500
                hover:text-blue-600
                dark:border-[#1e334f]
                dark:text-[#cbd5e1]
                dark:hover:border-[#3b82f6]
                dark:hover:text-white
              "
            >
              <FaGithub size={16} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
