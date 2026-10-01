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
    <footer className="bg-[#050b14] px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            grid items-center
            gap-6
            md:grid-cols-3
          "
        >
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/logo/loga.png"
              alt="M. Romza Zikrian Logo"
              width={100}
              height={100}
              className="h-20 w-auto object-contain"
              priority
            />
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm leading-6 text-[#f3f6fa]">
              © 2026 M. Romza Zikrian.
              <br className="sm:hidden" /> All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 md:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="
                  flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  border border-[#1e334f]
                  text-[#f3f8fe]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#3b82f6]
                  hover:bg-[#3b82f6]/10
                  hover:text-[#60a5fa]
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
