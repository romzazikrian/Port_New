"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Laptop, Server, Smartphone } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const techGroups = [
  {
    titleId: "Mobile Developer",
    titleEn: "Mobile Developer",
    icon: Smartphone,
    skills: ["Flutter", "Kotlin", "Java", "React Native"],
  },
  {
    titleId: "Web Developer",
    titleEn: "Web Developer",
    icon: Code2,
    skills: ["Next.js", "Laravel", "Vue.js", "CodeIgniter"],
  },
  {
    titleId: "Lainnya",
    titleEn: "Other",
    icon: Server,
    skills: ["Windows", "Linux", "IT Support"],
  },
];

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
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-slate-700 dark:text-[#b5c2d3]">
              {isEnglish
                ? "I am a Bachelor of Informatics graduate from Universitas Teknokrat Indonesia with experience in website development, mobile applications, and IT Support. I have the ability to build modern, responsive digital solutions that meet user needs."
                : "Lulusan S1 Informatika Universitas Teknokrat Indonesia yang memiliki pengalaman dalam pengembangan website, aplikasi mobile, serta IT Support. Memiliki kemampuan dalam membangun solusi digital yang modern, responsif, dan sesuai dengan kebutuhan pengguna."}
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-[#b5c2d3]">
              {isEnglish
                ? "In addition to technical competencies in information technology, I also have skills in administration, data processing, and Microsoft Office. I am accustomed to preparing documentation and reports systematically and working effectively in teams. Supported by good communication, time management, attention to detail, and responsibility to support smooth operations and contribute to achieving company goals."
                : "Selain memiliki kompetensi teknis di bidang teknologi informasi, saya juga memiliki keterampilan dalam administrasi, pengolahan data, dan penggunaan Microsoft Office. Terbiasa menyusun dokumentasi dan laporan secara sistematis serta mampu bekerja secara efektif dalam tim. Didukung dengan kemampuan komunikasi, manajemen waktu, ketelitian, dan tanggung jawab yang baik untuk mendukung kelancaran operasional dan pencapaian tujuan perusahaan."}
            </p>
          </motion.div>

          {/* Profile Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-colors dark:border-[#1e334f] dark:bg-[#0b1628]/70"
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

                  <p className="mt-1 font-medium text-slate-900 dark:text-[#e8f0fa]">
                    Full Stack Web & Mobile Developer
                  </p>

                  <p className="mt-1 text-sm text-slate-500 dark:text-[#94a3b8]">
                    IT Support
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
