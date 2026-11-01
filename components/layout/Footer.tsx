import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/romzazikrian",
    icon: <FaGithub className="h-5 w-5 text-slate-800 dark:text-white" />,
    hover:
      "hover:border-slate-400 hover:bg-slate-200 dark:hover:border-white/50 dark:hover:bg-white/10 dark:hover:shadow-[0_0_18px_rgba(255,255,255,0.15)]",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mromzazikrian",
    icon: <FaLinkedinIn className="h-5 w-5 text-[#0A66C2]" />,
    hover:
      "hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:shadow-[0_0_18px_rgba(10,102,194,0.15)]",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/mhmmdromza",
    icon: (
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-[#FFDC80] via-[#F77737] via-[#E1306C] to-[#833AB4]">
        <FaInstagram className="h-4 w-4 text-white" />
      </span>
    ),
    hover:
      "hover:border-[#E1306C] hover:bg-[#E1306C]/10 hover:shadow-[0_0_18px_rgba(225,48,108,0.15)]",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        w-full
        border-t border-slate-200
        bg-white
        px-4 py-8
        transition-colors duration-300
        sm:px-6 sm:py-10
        dark:border-[#1e334f]
        dark:bg-[#050b14]
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className="
            flex flex-col
            items-center justify-center
            gap-6
            text-center
            md:grid md:grid-cols-3
            md:items-center md:gap-4
            md:text-left
          "
        >
          {/* LOGO */}
          <div className="flex w-full justify-center md:justify-start">
            <Image
              src="/images/logo/romza.png"
              alt="M. Romza Zikrian Logo"
              width={180}
              height={180}
              className="
                h-24 w-auto max-w-[130px]
                object-contain
                sm:h-25 sm:max-w-[150px]
              "
            />
          </div>

          {/* COPYRIGHT */}
          <div className="w-full">
            <p
              className="
                px-2
                text-center
                text-xs leading-6
                text-slate-600
                transition-colors duration-300
                sm:text-sm
                dark:text-[#f3f6fa]
              "
            >
              © 2026 M. Romza Zikrian.
              <br className="sm:hidden" /> All rights reserved.
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div
            className="
              flex w-full
              items-center justify-center
              gap-3
              md:justify-end
            "
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className={`
                  group
                  flex h-11 w-11 shrink-0
                  items-center justify-center
                  rounded-xl
                  border border-slate-200
                  bg-slate-50
                  transition-all duration-300
                  hover:-translate-y-1
                  dark:border-[#1e334f]
                  dark:bg-[#0b1628]
                  ${social.hover}
                `}
              >
                <span
                  className="
                    flex items-center justify-center
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                >
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
