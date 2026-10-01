import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/romzazikrian",
    icon: <FaGithub className="h-4 w-4" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mromzazikrian",
    icon: <FaLinkedinIn className="h-4 w-4" />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/mhmmdromza",
    icon: <FaInstagram className="h-4 w-4" />,
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#1e334f] bg-[#050b14] px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-6
            text-center
            md:grid
            md:grid-cols-3
            md:items-center
            md:gap-4
            md:text-left
          "
        >
          {/* =========================
              LOGO
          ========================== */}
          <div className="flex w-full justify-center md:justify-start">
            <Image
              src="/images/logo/loga.png"
              alt="M. Romza Zikrian Logo"
              width={100}
              height={100}
              className="
                h-16
                w-auto
                max-w-[90px]
                object-contain
                sm:h-20
                sm:max-w-[100px]
              "
            />
          </div>

          {/* =========================
              COPYRIGHT
          ========================== */}
          <div className="w-full">
            <p
              className="
                px-2
                text-center
                text-xs
                leading-6
                text-[#f3f6fa]
                sm:text-sm
              "
            >
              © 2026 M. Romza Zikrian.
              <br className="sm:hidden" /> All rights reserved.
            </p>
          </div>

          {/* =========================
              SOCIAL LINKS
          ========================== */}
          <div
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              sm:gap-3
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
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#1e334f]
                  text-[#f3f8fe]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#3b82f6]
                  hover:bg-[#3b82f6]/10
                  hover:text-[#60a5fa]
                  sm:h-11
                  sm:w-11
                "
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
