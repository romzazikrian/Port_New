import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/romzazikrian",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mromzazikrian",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/mhmmdromza",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#050b14] px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between">
          {/* Logo - Kiri */}
          <div className="flex items-center">
            <Image
              src="/images/logo/loga.png"
              alt="M. Romza Zikrian Logo"
              width={80}
              height={80}
              className="h-20 w-20 object-contain"
              priority
            />
          </div>

          {/* Copyright - Tengah */}
          <p className="absolute left-1/2 -translate-x-1/2 text-center text-sm text-[#f3f6fa]">
            © 2026 M. Romza Zikrian. All rights reserved.
          </p>

          {/* Social Links - Kanan */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-lg
                  border border-[#1e334f]
                  text-[#f3f8fe]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-[#3b82f6]
                  hover:bg-[#3b82f6]/5
                  hover:text-[#60a5fa]
                "
              >
                {social.name === "GitHub" && <FaGithub className="h-4 w-4" />}

                {social.name === "LinkedIn" && (
                  <FaLinkedinIn className="h-4 w-4" />
                )}

                {social.name === "Instagram" && (
                  <FaInstagram className="h-4 w-4" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
