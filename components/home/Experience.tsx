"use client";

import { motion } from "framer-motion";
import { Briefcase, CalendarDays, ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";

import { experiences } from "@/data/experiences";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const [activeId, setActiveId] = useState<number | null>(1);

  const { language } = useLanguage();

  const isEnglish = language === "en";

  const toggleExperience = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-b border-slate-200 bg-white px-6 py-24 transition-colors duration-300 lg:px-8 lg:py-32 dark:border-[#1e334f] dark:bg-[#07101f]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-[#e8f0fa]">
            {isEnglish ? "Experience" : "Pengalaman"}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-[#94a3b8]">
            {isEnglish
              ? "Experiences that have contributed to the development of my technical, communication, administrative, and teamwork skills."
              : "Beberapa pengalaman yang membentuk kemampuan teknis, komunikasi, administrasi, dan kerja sama saya."}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical Line */}
          <div className="absolute left-[11px] top-0 hidden h-full w-px bg-slate-200 md:block dark:bg-[#1e334f]" />

          <div className="space-y-8">
            {experiences.map((experience, index) => {
              const isActive = activeId === experience.id;

              const period = isEnglish
                ? experience.periodEn
                : experience.periodId;

              const title = isEnglish ? experience.titleEn : experience.titleId;

              const company = isEnglish
                ? experience.companyEn
                : experience.companyId;

              const location = isEnglish
                ? experience.locationEn
                : experience.locationId;

              const description = isEnglish
                ? experience.descriptionEn
                : experience.descriptionId;

              const responsibilities = isEnglish
                ? experience.responsibilitiesEn
                : experience.responsibilitiesId;

              return (
                <motion.div
                  key={experience.id}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative md:pl-12"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 top-7 hidden h-6 w-6 items-center justify-center rounded-full border md:flex ${
                      isActive
                        ? "border-blue-500 bg-white dark:border-[#3b82f6] dark:bg-[#07101f]"
                        : "border-slate-300 bg-slate-100 dark:border-[#1e334f] dark:bg-[#0b1628]"
                    }`}
                  >
                    <div
                      className={`h-2 w-2 rounded-full ${
                        isActive
                          ? "bg-blue-500 dark:bg-[#3b82f6]"
                          : "bg-slate-400 dark:bg-[#64748b]"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? "border-blue-500/50 bg-slate-50 dark:border-[#3b82f6]/50 dark:bg-[#0b1628]"
                        : "border-slate-200 bg-slate-50 hover:border-slate-300 dark:border-[#1e334f] dark:bg-[#0b1628]/50 dark:hover:border-[#315277]"
                    }`}
                  >
                    {/* Card Header */}
                    <button
                      onClick={() => toggleExperience(experience.id)}
                      className="w-full text-left"
                    >
                      <div className="flex flex-col gap-5 p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex gap-4">
                          {/* Icon */}
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-blue-600 dark:border-[#1e334f] dark:bg-[#07101f] dark:text-[#3b82f6]">
                            <Briefcase size={21} />
                          </div>

                          <div>
                            {/* Period */}
                            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 dark:text-[#64748b]">
                              <CalendarDays size={14} />
                              {period}
                            </div>

                            {/* Title */}
                            <h3 className="mt-2 text-lg font-semibold text-slate-900 sm:text-xl dark:text-[#e8f0fa]">
                              {title}
                            </h3>

                            {/* Company */}
                            <p className="mt-1 text-sm text-slate-600 dark:text-[#94a3b8]">
                              {company}
                            </p>
                          </div>
                        </div>

                        {/* Location + Arrow */}
                        <div className="flex items-center gap-4">
                          <div className="hidden items-center gap-2 text-sm text-slate-400 sm:flex dark:text-[#64748b]">
                            <MapPin size={15} />
                            {location}
                          </div>

                          <ChevronDown
                            size={20}
                            className={`text-slate-400 transition-transform duration-300 dark:text-[#64748b] ${
                              isActive
                                ? "rotate-180 text-blue-600 dark:text-[#3b82f6]"
                                : ""
                            }`}
                          />
                        </div>
                      </div>
                    </button>

                    {/* Detail */}
                    {isActive && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="border-t border-slate-200 dark:border-[#1e334f]"
                      >
                        <div className="p-6 sm:p-7">
                          {/* Description */}
                          <p className="max-w-4xl text-sm leading-7 text-slate-600 sm:text-base dark:text-[#aebdd0]">
                            {description}
                          </p>

                          {/* Responsibilities */}
                          <div className="mt-7">
                            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-[#64748b]">
                              {isEnglish
                                ? "Responsibilities"
                                : "Tanggung Jawab"}
                            </p>

                            <div className="grid gap-3 lg:grid-cols-2">
                              {responsibilities.map(
                                (responsibility, responsibilityIndex) => (
                                  <div
                                    key={responsibilityIndex}
                                    className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 dark:border-[#1e334f] dark:bg-[#07101f]/60"
                                  >
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 dark:bg-[#3b82f6]" />

                                    <p className="text-sm leading-6 text-slate-600 dark:text-[#94a3b8]">
                                      {responsibility}
                                    </p>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
