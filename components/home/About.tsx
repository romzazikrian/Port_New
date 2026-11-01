"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Laptop } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden border-b border-slate-200 bg-white px-4 py-16 transition-colors duration-300 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-32 dark:border-[#1e334f] dark:bg-[#07101f]"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-[#e8f0fa]">
            {isEnglish ? "About Me" : "Tentang Saya"}
          </h2>
        </motion.div>

        {/* About Content */}
        <div className="mt-8 grid w-full grid-cols-1 items-start gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full min-w-0"
          >
            <p className="break-words text-base leading-7 text-slate-700 sm:text-lg sm:leading-8 dark:text-[#b5c2d3]">
              {isEnglish
                ? "I am a Bachelor of Informatics graduate from Universitas Teknokrat Indonesia with experience in website development using Next.js, Laravel, Vue.js, and Astro, as well as IT support and troubleshooting. I am able to build responsive digital solutions that meet user needs."
                : "Saya merupakan lulusan S1 Informatika Universitas Teknokrat Indonesia dengan pengalaman dalam pengembangan website menggunakan Next.js, Laravel, Vue.js, dan Astro, serta IT Support dan troubleshooting. Saya mampu membangun solusi digital yang responsif dan sesuai dengan kebutuhan pengguna."}
            </p>

            <p className="mt-5 break-words text-base leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8 dark:text-[#b5c2d3]">
              {isEnglish
                ? "In addition to my technical skills in information technology, I have skills in administration, data processing, and Microsoft Office. I am accustomed to preparing documentation and reports systematically, working collaboratively in teams, and supporting smooth operations. I value good communication, time management, attention to detail, adaptability, and responsibility in completing every task."
                : "Selain kompetensi teknis di bidang teknologi informasi, saya memiliki keterampilan dalam administrasi, pengolahan data, dan penggunaan Microsoft Office. Saya terbiasa menyusun dokumentasi dan laporan secara sistematis, bekerja sama dalam tim, serta mendukung kelancaran operasional. Saya mengutamakan komunikasi yang baik, manajemen waktu, ketelitian, adaptabilitas, dan tanggung jawab dalam menyelesaikan setiap tugas."}
            </p>
          </motion.div>

          {/* Profile Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full min-w-0 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors duration-300 sm:p-6 dark:border-[#1e334f] dark:bg-[#0b1628]/70"
          >
            <div className="space-y-6 sm:space-y-7">
              {/* Name */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 rounded-lg border border-slate-200 bg-white p-2.5 text-blue-600 sm:p-3 dark:border-[#1e334f] dark:bg-[#07101f] dark:text-[#3b82f6]">
                  <Laptop size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-[#64748b]">
                    {isEnglish ? "Name" : "Nama"}
                  </p>

                  <p className="mt-1 break-words font-medium text-slate-900 dark:text-[#e8f0fa]">
                    M. Romza Zikrian
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 rounded-lg border border-slate-200 bg-white p-2.5 text-blue-600 sm:p-3 dark:border-[#1e334f] dark:bg-[#07101f] dark:text-[#3b82f6]">
                  <GraduationCap size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-[#64748b]">
                    {isEnglish ? "Education" : "Pendidikan"}
                  </p>

                  <p className="mt-1 break-words font-medium text-slate-900 dark:text-[#e8f0fa]">
                    {isEnglish ? "Bachelor of Informatics" : "S1 Informatika"}
                  </p>

                  <p className="mt-1 break-words text-sm leading-relaxed text-slate-500 dark:text-[#94a3b8]">
                    Universitas Teknokrat Indonesia
                  </p>
                </div>
              </div>

              {/* Profession */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 rounded-lg border border-slate-200 bg-white p-2.5 text-blue-600 sm:p-3 dark:border-[#1e334f] dark:bg-[#07101f] dark:text-[#3b82f6]">
                  <Code2 size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-[#64748b]">
                    {isEnglish ? "Profession" : "Profesi"}
                  </p>

                  <p className="mt-1 text-sm leading-7 text-slate-900 sm:text-base dark:text-[#e8f0fa]">
                    <span className="font-semibold">Web Developer</span>
                    <span className="mx-1.5 text-slate-400 dark:text-[#64748b]">
                      |
                    </span>
                    <span className="font-semibold">IT Support</span>
                    <span className="mx-1.5 text-slate-400 dark:text-[#64748b]">
                      |
                    </span>
                    <span className="font-semibold">
                      {isEnglish ? "Administration" : "Administrasi"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
