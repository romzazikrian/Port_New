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
        border-b border-slate-200
        bg-white
        px-6 py-24
        text-slate-900
        transition-colors duration-300
        lg:px-8 lg:py-32

        dark:border-[#1e334f]
        dark:bg-[#07101f]
        dark:text-[#e8f0fa]
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-[#e8f0fa] sm:text-5xl">
            {isEnglish ? "Let's Connect" : "Mari Terhubung"}
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-[#94a3b8]">
            {isEnglish
              ? "Have a project, job opportunity, or collaboration in mind? Feel free to get in touch. I am always open to discussing technology, development, and new opportunities."
              : "Memiliki project, peluang kerja, atau kesempatan kolaborasi? Jangan ragu untuk menghubungi saya. Saya terbuka untuk berdiskusi mengenai teknologi, pengembangan aplikasi, dan peluang baru."}
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Contact Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              flex flex-col
              rounded-2xl
              border border-slate-200
              bg-slate-50
              p-7
              transition-all duration-300
              hover:border-blue-200
              hover:shadow-lg
              hover:shadow-slate-200/50
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
                h-14 w-14
                items-center
                justify-center
                rounded-2xl
                border border-blue-200
                bg-blue-50
                text-blue-600

                dark:border-[#3b82f6]/20
                dark:bg-[#3b82f6]/10
                dark:text-[#60a5fa]
              "
            >
              <Code2 className="h-7 w-7" />
            </div>

            {/* Content */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-[#e8f0fa]">
                {isEnglish ? "Let's Work Together" : "Mari Bekerja Sama"}
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-[#94a3b8]">
                {isEnglish
                  ? "I am open to job opportunities, freelance projects, collaborations, website and mobile application development, as well as IT Support needs."
                  : "Saya terbuka untuk peluang kerja, freelance, kolaborasi project, pengembangan website dan aplikasi mobile, maupun kebutuhan IT Support."}
              </p>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/6288747607844"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-7
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-5
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

                dark:bg-[#3b82f6]
                dark:hover:bg-[#2563eb]
              "
            >
              {isEnglish ? "Contact Me" : "Hubungi Saya"}

              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {contacts.map((contact) => (
              <ContactCard key={contact.name} contact={contact} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
