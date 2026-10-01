"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

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
     DETEKSI SECTION YANG SEDANG AKTIF
  ======================================================== */

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

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

    sections.forEach((section) => observer.observe(section));

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
     HANDLE NAV CLICK
  ======================================================== */

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    closeMenu();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ====================================================
          NAVBAR CONTAINER
      ===================================================== */}

      <div
        className="
          border-b
          border-slate-200/70
          bg-white/80
          backdrop-blur-xl
          transition-colors
          duration-300

          dark:border-[#1e334f]/70
          dark:bg-[#07101f]/80
        "
      >
        <nav
          className="
            mx-auto
            flex
            h-[72px]
            max-w-7xl
            items-center
            justify-between
            px-6

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
              setIsOpen(false);
            }}
            className="flex items-center gap-3"
          >
            <Image
              src="/images/logo/loga.png"
              alt="M. Romza Zikrian Logo"
              width={70}
              height={70}
              className="h-20 w-20 object-contain"
              priority
            />

            <div className="hidden sm:block"></div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden items-center gap-2 md:flex">
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

                  {/* Active Bottom Line */}

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

                  {/* Text */}

                  <span
                    className={`
                      relative
                      z-10
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

          <div className="hidden items-center gap-2 md:flex">
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
                transition

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
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                text-slate-600
                transition

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
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-slate-200
              text-slate-700

              md:hidden

              dark:border-[#1e334f]
              dark:text-[#cbd5e1]
            "
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* ==================================================
            MOBILE MENU
        =================================================== */}

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
              duration: 0.25,
            }}
            className="
              overflow-hidden
              border-t
              border-slate-200
              bg-white
              px-6
              py-5

              dark:border-[#1e334f]
              dark:bg-[#07101f]

              md:hidden
            "
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      relative
                      rounded-lg
                      px-4
                      py-3
                      text-sm
                      font-medium
                      transition-all

                      ${
                        isActive
                          ? "bg-blue-50 text-blue-600 dark:bg-[#0b1628] dark:text-[#60a5fa]"
                          : "text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-[#cbd5e1] dark:hover:bg-[#0b1628] dark:hover:text-[#60a5fa]"
                      }
                    `}
                  >
                    {/* Active indicator */}

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

            {/* =================================================
                MOBILE ACTIONS
            ================================================== */}

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
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-slate-200
                  py-3
                  text-sm
                  text-slate-700
                  transition

                  hover:border-blue-500
                  hover:text-blue-600

                  dark:border-[#1e334f]
                  dark:text-[#cbd5e1]
                  dark:hover:border-[#3b82f6]
                  dark:hover:text-[#60a5fa]
                "
              >
                <span className="text-base">
                  {language === "id" ? "🇮🇩" : "🇬🇧"}
                </span>

                {language === "id" ? "Indonesia" : "English"}
              </button>

              {/* Theme */}

              <button
                type="button"
                onClick={toggleTheme}
                className="
                  flex
                  w-12
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-slate-200
                  transition

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
          </motion.div>
        )}
      </div>
    </header>
  );
}
