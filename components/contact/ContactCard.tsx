"use client";

import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { ContactItem } from "@/data/contact";
import { useLanguage } from "@/context/LanguageContext";

interface ContactCardProps {
  contact: ContactItem;
}

export default function ContactCard({ contact }: ContactCardProps) {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  const description = isEnglish ? contact.descriptionEn : contact.descriptionId;

  return (
    <a
      href={contact.href}
      target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={contact.href.startsWith("mailto:") ? undefined : "noreferrer"}
      className="
        group
        flex
        h-full
        min-h-[138px]
        w-full
        items-center
        justify-between
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-400
        hover:shadow-lg
        dark:border-[#1e334f]
        dark:bg-[#0b1628]
        dark:hover:border-[#3b82f6]
        dark:hover:bg-[#0d1b30]
      "
    >
      <div className="flex min-w-0 flex-1 items-center gap-4">
        {/* Icon */}
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            transition-all
            duration-300
            group-hover:scale-105
            dark:border-[#1e334f]
            dark:bg-[#07101f]
          "
        >
          {contact.name === "WhatsApp" && (
            <MessageCircle className="h-5 w-5" style={{ color: "#25D366" }} />
          )}

          {contact.name === "Email" && (
            <Mail className="h-5 w-5" style={{ color: "#EA4335" }} />
          )}

          {contact.name === "Instagram" && (
            <FaInstagram className="h-5 w-5" style={{ color: "#E1306C" }} />
          )}

          {contact.name === "GitHub" && (
            <FaGithub className="h-5 w-5 text-[#181717] dark:text-white" />
          )}

          {contact.name === "LinkedIn" && (
            <FaLinkedinIn className="h-5 w-5" style={{ color: "#0A66C2" }} />
          )}

          {!["WhatsApp", "Email", "Instagram", "GitHub", "LinkedIn"].includes(
            contact.name,
          ) && (
            <ArrowUpRight className="h-5 w-5 text-blue-600 dark:text-[#60a5fa]" />
          )}
        </div>

        {/* Information */}
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-slate-900 dark:text-[#e8f0fa]">
            {contact.name}
          </h3>

          <p className="mt-1 line-clamp-2 break-all text-sm text-blue-600 dark:text-[#60a5fa]">
            {contact.username}
          </p>

          <p className="mt-1 line-clamp-2 text-xs text-slate-500 dark:text-[#64748b]">
            {description}
          </p>
        </div>
      </div>

      {/* Arrow */}
      <ArrowUpRight
        className="
          ml-3
          h-5
          w-5
          shrink-0
          text-slate-400
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:translate-x-1
          group-hover:text-blue-600
          dark:text-[#64748b]
          dark:group-hover:text-[#60a5fa]
        "
      />
    </a>
  );
}
