"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

import { contacts } from "@/data/contact";
import ContactCard from "@/components/contact/ContactCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section
      id="contact"
      className="
        w-full
        overflow-x-clip
        border-b border-slate-200
        bg-white
        px-4 py-20
        text-slate-900
        transition-colors duration-300
        sm:px-6 sm:py-24
        lg:px-8 lg:py-32

        dark:border-[#1e334f]
        dark:bg-[#07101f]
        dark:text-[#e8f0fa]
      "
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">
        {/* =========================
            HEADING
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full min-w-0"
        >
          <h2
            className="
              break-words
              text-3xl
              font-semibold
              tracking-tight
              text-slate-900
              sm:text-4xl
              lg:text-5xl
              dark:text-[#e8f0fa]
            "
          >
            {isEnglish ? "Let's Connect" : "Mari Terhubung"}
          </h2>

          <p
            className="
              mt-4
              w-full
              max-w-2xl
              break-words
              text-base
              leading-7
              text-slate-600
              sm:mt-5
              sm:text-lg
              sm:leading-8
              dark:text-[#94a3b8]
            "
          >
            {isEnglish
              ? "Have a project, job opportunity, or collaboration in mind? Feel free to get in touch. I am always open to discussing technology, website development, and new opportunities."
              : "Memiliki project, peluang kerja, atau kesempatan kolaborasi? Jangan ragu untuk menghubungi saya. Saya terbuka untuk berdiskusi mengenai teknologi, pengembangan website, dan peluang baru."}
          </p>
        </motion.div>

        {/* =========================
            CONTENT
        ========================== */}
        <div
          className="
            mt-10
            grid
            w-full
            min-w-0
            grid-cols-1
            gap-6
            sm:mt-12
            sm:gap-8
            lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]
            lg:gap-10
          "
        >
          {/* =========================
              CONTACT INTRODUCTION
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              flex
              min-w-0
              w-full
              flex-col
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-5
              transition-all
              duration-300
              hover:border-blue-200
              hover:shadow-lg
              hover:shadow-slate-200/50
              sm:p-7
              md:p-8

              dark:border-[#1e334f]
              dark:bg-[#0b1628]
              dark:hover:border-[#3b82f6]/40
              dark:hover:shadow-blue-950/20
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-2xl
                border
                border-blue-200
                bg-blue-50
                text-blue-600
                sm:h-14
                sm:w-14

                dark:border-[#3b82f6]/20
                dark:bg-[#3b82f6]/10
                dark:text-[#60a5fa]
              "
            >
              <Code2 className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>

            {/* Content */}
            <div className="mt-5 min-w-0 sm:mt-6">
              <h3
                className="
                  break-words
                  text-lg
                  font-semibold
                  text-slate-900
                  sm:text-xl
                  dark:text-[#e8f0fa]
                "
              >
                {isEnglish ? "Let's Work Together" : "Mari Bekerja Sama"}
              </h3>

              <p
                className="
                  mt-3
                  break-words
                  text-sm
                  leading-6
                  text-slate-600
                  sm:text-base
                  sm:leading-7
                  dark:text-[#94a3b8]
                "
              >
                {isEnglish
                  ? "I am open to job opportunities, freelance projects, collaborations, website development, and IT Support services."
                  : "Saya terbuka untuk peluang kerja, proyek freelance, kolaborasi, pengembangan website, serta layanan IT Support."}
              </p>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/6288747607844"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6
                inline-flex
                w-full
                max-w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-4
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-blue-700
                hover:shadow-lg
                hover:shadow-blue-500/20
                sm:w-fit
                sm:px-5

                dark:bg-[#3b82f6]
                dark:hover:bg-[#2563eb]
              "
            >
              <span>{isEnglish ? "Contact Me" : "Hubungi Saya"}</span>

              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </a>
          </motion.div>

          {/* =========================
              CONTACT CARDS
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              grid
              min-w-0
              w-full
              grid-cols-1
              gap-4
              sm:grid-cols-2
            "
          >
            {contacts.map((contact) => (
              <div key={contact.name} className="min-w-0 w-full">
                <ContactCard contact={contact} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
