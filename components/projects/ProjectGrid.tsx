"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { projects } from "@/data/projects";
import { Project, ProjectCategory } from "@/types/project";

import { useLanguage } from "@/context/LanguageContext";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

type Filter = "All" | ProjectCategory;

interface ProjectGridProps {
  featured?: boolean;
}

export default function ProjectGrid({ featured = false }: ProjectGridProps) {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { language } = useLanguage();

  const isEnglish = language === "en";

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  /**
   * Homepage:
   * 4 = Pesona Lampung
   * 6 = PKBI Lampung
   * 9 = Sanggar Tapis
   */
  const featuredProjects = [4, 6, 9]
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is Project => Boolean(project));

  const displayedProjects = featured ? featuredProjects : filteredProjects;

  return (
    <div>
      {/* Filter */}
      {!featured && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {(["All", "Website", "Android"] as Filter[]).map((item) => {
            const active = filter === item;

            const label = item === "All" ? (isEnglish ? "All" : "Semua") : item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-lg px-5 py-2.5 text-sm font-medium transition ${
                  active
                    ? "bg-blue-600 text-white dark:bg-[#3b82f6]"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-500 hover:text-blue-600 dark:border-[#1e334f] dark:bg-[#0b1628] dark:text-[#94a3b8] dark:hover:border-[#3b82f6] dark:hover:text-white"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid */}
      <motion.div
        layout
        className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {displayedProjects.map((project) => (
          <motion.div
            layout
            key={project.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="h-full"
          >
            <ProjectCard project={project} onImageClick={setSelectedProject} />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {displayedProjects.length === 0 && (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-12 text-center dark:border-[#1e334f] dark:bg-[#0b1628]">
          <p className="text-slate-500 dark:text-[#94a3b8]">
            {isEnglish
              ? "There are no projects in this category yet."
              : "Belum ada project pada kategori ini."}
          </p>
        </div>
      )}

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
