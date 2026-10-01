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
      className="relative overflow-hidden border-b border-slate-200 bg-white px-6 py-24 transition-colors duration-300 lg:px-8 lg:py-32 dark:border-[#1e334f] dark:bg-[#07101f]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-[#e8f0fa]">
            {isEnglish ? "About Me" : "Tentang Saya"}
          </h2>
        </motion.div>

        {/* About Content */}
        {/* About Content */}
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-slate-700 dark:text-[#b5c2d3]">
              {isEnglish
                ? "I am a Bachelor of Informatics graduate from Universitas Teknokrat Indonesia with experience in website development and IT Support. I am skilled in building modern, responsive digital solutions tailored to user needs."
                : "Saya merupakan lulusan S1 Informatika Universitas Teknokrat Indonesia dengan pengalaman dalam pengembangan website dan IT Support. Saya memiliki kemampuan dalam membangun solusi digital yang modern, responsif, dan disesuaikan dengan kebutuhan pengguna."}
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-[#b5c2d3]">
              {isEnglish
                ? "Beyond my technical expertise in information technology, I also have skills in administration, data processing, and Microsoft Office. I am experienced in preparing documentation and reports systematically, collaborating effectively within teams, and supporting day-to-day operations. I bring strong communication, time management, attention to detail, adaptability, and a sense of responsibility to every task."
                : "Selain memiliki kompetensi teknis di bidang teknologi informasi, saya juga memiliki keterampilan dalam administrasi, pengolahan data, dan penggunaan Microsoft Office. Terbiasa menyusun dokumentasi dan laporan secara sistematis, bekerja secara efektif dalam tim, serta mendukung kelancaran operasional. Saya mengutamakan komunikasi yang baik, manajemen waktu, ketelitian, kemampuan beradaptasi, dan tanggung jawab dalam menyelesaikan setiap tugas."}
            </p>
          </motion.div>

          {/* Profile Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-colors dark:border-[#1e334f] dark:bg-[#0b1628]/70"
          >
            <div className="space-y-6">
              {/* Name */}
              <div className="flex items-start gap-4">
                <div className="rounded-lg border border-slate-200 bg-white p-3 text-blue-600 dark:border-[#1e334f] dark:bg-[#07101f] dark:text-[#3b82f6]">
                  <Laptop size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-[#64748b]">
                    {isEnglish ? "Name" : "Nama"}
                  </p>

                  <p className="mt-1 font-medium text-slate-900 dark:text-[#e8f0fa]">
                    M. Romza Zikrian
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-start gap-4">
                <div className="rounded-lg border border-slate-200 bg-white p-3 text-blue-600 dark:border-[#1e334f] dark:bg-[#07101f] dark:text-[#3b82f6]">
                  <GraduationCap size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-[#64748b]">
                    {isEnglish ? "Education" : "Pendidikan"}
                  </p>

                  <p className="mt-1 font-medium text-slate-900 dark:text-[#e8f0fa]">
                    {isEnglish ? "Bachelor of Informatics" : "S1 Informatika"}
                  </p>

                  <p className="mt-1 text-sm text-slate-500 dark:text-[#94a3b8]">
                    Universitas Teknokrat Indonesia
                  </p>
                </div>
              </div>

              {/* Profession */}
              <div className="flex items-start gap-4">
                <div className="rounded-lg border border-slate-200 bg-white p-3 text-blue-600 dark:border-[#1e334f] dark:bg-[#07101f] dark:text-[#3b82f6]">
                  <Code2 size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-[#64748b]">
                    {isEnglish ? "Profession" : "Profesi"}
                  </p>

                  <p className="mt-1 whitespace-nowrap text-slate-900 dark:text-[#e8f0fa]">
                    <span className="font-semibold">Web Developer</span>
                    <span className="font-normal"> | IT Support</span>
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
