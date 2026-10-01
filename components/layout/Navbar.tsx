"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

const navItems = [
  {
    id: "about",
    idLabel: "Tentang",
    enLabel: "About",
  },
  {
    id: "experience",
    idLabel: "Pengalaman",
    enLabel: "Experience",
  },
  {
    id: "projects",
    idLabel: "Proyek",
    enLabel: "Projects",
  },
  {
    id: "certificates",
    idLabel: "Sertifikat",
    enLabel: "Certificates",
  },
  {
    id: "contact",
    idLabel: "Kontak",
    enLabel: "Contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  /* ========================================================
     DETEKSI SECTION AKTIF SAAT SCROLL
  ======================================================== */

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ========================================================
     CLOSE MOBILE MENU
  ======================================================== */

  const closeMenu = () => {
    setIsOpen(false);
  };

  /* ========================================================
     NAVIGATION CLICK
  ======================================================== */

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    closeMenu();
  };

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
        w-full
        max-w-full
      "
    >
      {/* ====================================================
          NAVBAR
      ===================================================== */}

      <div
        className="
          w-full
          max-w-full
          border-b
          border-slate-200/70
          bg-white/90
          backdrop-blur-xl
          transition-colors
          duration-300

          dark:border-[#1e334f]/70
          dark:bg-[#07101f]/95
        "
      >
        <nav
          className="
            mx-auto
            flex
            h-14
            w-full
            max-w-7xl
            min-w-0
            items-center
            justify-between
            px-4

            sm:h-16
            sm:px-6

            lg:h-[72px]
            lg:px-8
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            onClick={() => {
              setActiveSection("");
              closeMenu();
            }}
            className="
              flex
              min-w-0
              shrink-0
              items-center
            "
          >
            <Image
              src="/images/logo/loga.png"
              alt="M. Romza Zikrian Logo"
              width={72}
              height={72}
              priority
              className="
                h-10
                w-10
                object-contain

                sm:h-11
                sm:w-11

                lg:h-14
                lg:w-14
              "
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className="
                    relative
                    rounded-lg
                    px-3
                    py-2
                    text-sm
                    font-medium
                    transition-colors
                  "
                >
                  {/* Active Background */}

                  {isActive && (
                    <motion.span
                      layoutId="active-navbar"
                      className="
                        absolute
                        inset-0
                        rounded-lg
                        bg-blue-50

                        dark:bg-[#3b82f6]/10
                      "
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Active Line */}

                  {isActive && (
                    <motion.span
                      layoutId="active-navbar-line"
                      className="
                        absolute
                        bottom-0
                        left-3
                        right-3
                        h-0.5
                        rounded-full
                        bg-blue-600

                        dark:bg-[#60a5fa]
                      "
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span
                    className={`
                      relative
                      z-10
                      whitespace-nowrap
                      transition-colors
                      duration-200

                      ${
                        isActive
                          ? "text-blue-600 dark:text-[#60a5fa]"
                          : "text-slate-600 hover:text-blue-600 dark:text-[#94a3b8] dark:hover:text-[#60a5fa]"
                      }
                    `}
                  >
                    {language === "id" ? item.idLabel : item.enLabel}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================== */}

          <div className="hidden items-center gap-2 lg:flex">
            {/* Language */}

            <button
              type="button"
              onClick={toggleLanguage}
              className="
                flex
                h-10
                items-center
                gap-2
                rounded-lg
                border
                border-slate-200
                px-3
                text-sm
                font-medium
                text-slate-600
                transition-all
                duration-200

                hover:border-blue-500
                hover:text-blue-600

                dark:border-[#1e334f]
                dark:text-[#94a3b8]

                dark:hover:border-[#3b82f6]
                dark:hover:text-[#60a5fa]
              "
              aria-label="Ganti bahasa"
            >
              <span className="text-base">
                {language === "id" ? "🇮🇩" : "🇬🇧"}
              </span>

              {language === "id" ? "ID" : "EN"}
            </button>

            {/* Theme */}

            <button
              type="button"
              onClick={toggleTheme}
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                text-slate-600
                transition-all
                duration-200

                hover:border-blue-500
                hover:text-blue-600

                dark:border-[#1e334f]
                dark:text-[#94a3b8]

                dark:hover:border-[#3b82f6]
                dark:hover:text-[#60a5fa]
              "
              aria-label="Ganti tema"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* =================================================
              MOBILE / TABLET HAMBURGER
          ================================================== */}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              relative
              z-[60]

              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center

              rounded-xl

              border
              border-slate-300

              bg-white

              text-slate-800

              shadow-sm

              transition-all
              duration-200

              hover:border-blue-500
              hover:bg-blue-50
              hover:text-blue-600

              dark:border-[#29415f]
              dark:bg-[#0b1628]
              dark:text-[#e2e8f0]

              dark:hover:border-[#3b82f6]
              dark:hover:bg-[#10213a]
              dark:hover:text-[#60a5fa]

              lg:hidden
            "
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-5 w-5" strokeWidth={2.2} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2.2} />
            )}
          </button>
        </nav>

        {/* ==================================================
            MOBILE MENU
        =================================================== */}

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.22,
                ease: "easeOut",
              }}
              className="
                overflow-hidden
                border-t
                border-slate-200
                bg-white

                dark:border-[#1e334f]
                dark:bg-[#07101f]

                lg:hidden
              "
            >
              <div
                className="
                  mx-auto
                  w-full
                  max-w-7xl
                  px-4
                  py-4

                  sm:px-6
                "
              >
                {/* Navigation Links */}

                <div className="flex flex-col gap-1.5">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                      <Link
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => handleNavClick(item.id)}
                        className={`
                          relative
                          flex
                          min-h-11
                          w-full
                          items-center

                          rounded-lg

                          px-4
                          py-2.5

                          text-sm
                          font-medium

                          transition-all
                          duration-200

                          ${
                            isActive
                              ? "bg-blue-50 text-blue-600 dark:bg-[#0b1628] dark:text-[#60a5fa]"
                              : "text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-[#cbd5e1] dark:hover:bg-[#0b1628] dark:hover:text-[#60a5fa]"
                          }
                        `}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="mobile-active-navbar"
                            className="
                              absolute
                              left-0
                              top-1/2

                              h-6
                              w-1

                              -translate-y-1/2

                              rounded-full

                              bg-blue-600

                              dark:bg-[#60a5fa]
                            "
                          />
                        )}

                        {language === "id" ? item.idLabel : item.enLabel}
                      </Link>
                    );
                  })}
                </div>

                {/* Mobile Actions */}

                <div
                  className="
                    mt-4
                    flex
                    gap-2

                    border-t
                    border-slate-200

                    pt-4

                    dark:border-[#1e334f]
                  "
                >
                  {/* Language */}

                  <button
                    type="button"
                    onClick={toggleLanguage}
                    className="
                      flex
                      min-h-11
                      flex-1
                      items-center
                      justify-center
                      gap-2

                      rounded-lg

                      border
                      border-slate-200

                      px-3

                      text-sm
                      font-medium

                      text-slate-700

                      transition-all

                      hover:border-blue-500
                      hover:text-blue-600

                      dark:border-[#1e334f]
                      dark:text-[#cbd5e1]

                      dark:hover:border-[#3b82f6]
                      dark:hover:text-[#60a5fa]
                    "
                  >
                    <span>{language === "id" ? "🇮🇩" : "🇬🇧"}</span>

                    {language === "id" ? "Indonesia" : "English"}
                  </button>

                  {/* Theme */}

                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="
                      flex
                      min-h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center

                      rounded-lg

                      border
                      border-slate-200

                      transition-all

                      hover:border-blue-500

                      dark:border-[#1e334f]
                      dark:hover:border-[#3b82f6]
                    "
                    aria-label="Ganti tema"
                  >
                    {theme === "dark" ? (
                      <Sun className="h-4 w-4 text-yellow-400" />
                    ) : (
                      <Moon className="h-4 w-4 text-slate-700" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
