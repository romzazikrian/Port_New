"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu, X, Moon, Sun, Languages } from "lucide-react";
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

  /*
  ==========================================================
  DETEKSI SECTION AKTIF

  Menggunakan posisi section terhadap viewport.
  Tidak bergantung pada intersectionRatio.
  ==========================================================
  */

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Jika sudah mencapai bagian paling bawah halaman,
    // aktifkan menu Kontak.
    if (scrollPosition + viewportHeight >= documentHeight - 8) {
      const lastSection = [...navItems]
        .reverse()
        .find((item) => document.getElementById(item.id));

      if (lastSection) {
        setActiveSection(lastSection.id);
        return;
      }
    }

    // Garis deteksi berada di bawah navbar.
    const detectionLine = 150;

    let currentSection = "";

    for (const item of navItems) {
      const section = document.getElementById(item.id);

      if (!section) continue;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      if (sectionTop <= scrollPosition + detectionLine) {
        currentSection = item.id;
      }
    }

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    let animationFrame = 0;

    const handleScroll = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        updateActiveSection();
        animationFrame = 0;
      });
    };

    // Deteksi saat pertama kali halaman dibuka.
    updateActiveSection();

    // Deteksi saat scroll.
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    // Deteksi saat ukuran viewport berubah.
    window.addEventListener("resize", handleScroll);

    // Deteksi saat hash URL berubah.
    window.addEventListener("hashchange", handleScroll);

    // Beri waktu untuk layout selesai dimuat.
    const initialTimer = window.setTimeout(() => {
      updateActiveSection();
    }, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", handleScroll);

      window.clearTimeout(initialTimer);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [updateActiveSection]);

  /*
  ==========================================================
  NAVIGATION CLICK
  ==========================================================
  */

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  /*
  ==========================================================
  TOGGLE MOBILE MENU
  ==========================================================
  */

  const toggleMenu = () => {
    setIsOpen((previous) => !previous);
  };

  /*
  ==========================================================
  LANGUAGE LABEL
  ==========================================================
  */

  const isIndonesian = language === "id";

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
        w-full
      "
    >
      {/* ==================================================
          NAVBAR CONTAINER
      ================================================== */}

      <div
        className="
          border-b
          border-slate-200/80
          bg-white/90
          backdrop-blur-xl
          transition-colors
          duration-300

          dark:border-[#1e334f]/80
          dark:bg-[#07101f]/95
        "
      >
        <nav
          className="
            mx-auto
            flex
            h-16
            w-full
            max-w-7xl
            items-center
            justify-between
            gap-3
            px-4

            sm:px-6

            lg:h-[72px]
            lg:px-8
          "
          aria-label={isIndonesian ? "Navigasi utama" : "Main navigation"}
        >
          {/* ==============================================
              LOGO
          ============================================== */}

          <Link
            href="/"
            onClick={() => {
              setActiveSection("");
              setIsOpen(false);
            }}
            className="
              flex
              shrink-0
              items-center
              rounded-lg
              outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
            "
            aria-label="M. Romza Zikrian - Home"
          >
            <Image
              src="/images/logo/loga.png"
              alt="M. Romza Zikrian"
              width={100}
              height={100}
              priority
              className="
                h-12
                w-12
                object-contain

                sm:h-14
                sm:w-14

                lg:h-16
                lg:w-16
              "
            />
          </Link>

          {/* ==============================================
              DESKTOP NAVIGATION
          ============================================== */}

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? "location" : undefined}
                  className="
                    group
                    relative
                    isolate
                    rounded-lg
                    px-3
                    py-2.5
                    text-sm
                    font-medium
                    outline-none
                    transition-colors
                    focus-visible:ring-2
                    focus-visible:ring-blue-500
                  "
                >
                  {/* ACTIVE BACKGROUND */}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-background"
                      className="
                        absolute
                        inset-0
                        -z-10
                        rounded-lg
                        bg-blue-50
                        dark:bg-[#3b82f6]/10
                      "
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}

                  {/* ACTIVE INDICATOR */}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-indicator"
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
                        stiffness: 380,
                        damping: 32,
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
                          : "text-slate-600 group-hover:text-blue-600 dark:text-[#94a3b8] dark:group-hover:text-[#60a5fa]"
                      }
                    `}
                  >
                    {isIndonesian ? item.idLabel : item.enLabel}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* ==============================================
              DESKTOP ACTIONS
          ============================================== */}

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            {/* LANGUAGE */}

            <button
              type="button"
              onClick={toggleLanguage}
              className="
                inline-flex
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
                transition-colors

                hover:border-blue-500
                hover:text-blue-600

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500

                dark:border-[#1e334f]
                dark:text-[#cbd5e1]
                dark:hover:border-blue-500
                dark:hover:text-[#60a5fa]
              "
              aria-label={
                isIndonesian ? "Switch to English" : "Ganti ke bahasa Indonesia"
              }
            >
              <Languages size={16} />

              <span>{isIndonesian ? "ID" : "EN"}</span>
            </button>

            {/* THEME */}

            <button
              type="button"
              onClick={toggleTheme}
              className="
                inline-flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                text-slate-600
                transition-colors

                hover:border-blue-500
                hover:text-blue-600

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500

                dark:border-[#1e334f]
                dark:text-[#cbd5e1]
                dark:hover:border-blue-500
                dark:hover:text-[#60a5fa]
              "
              aria-label={
                theme === "dark"
                  ? "Aktifkan mode terang"
                  : "Aktifkan mode gelap"
              }
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          {/* ==============================================
              MOBILE MENU BUTTON
          ============================================== */}

          <button
            type="button"
            onClick={toggleMenu}
            className="
              relative
              z-[60]
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              bg-white
              text-slate-800
              shadow-sm
              transition-colors

              hover:border-blue-500
              hover:bg-blue-50

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500

              dark:border-[#29415f]
              dark:bg-[#0b1628]
              dark:text-[#e2e8f0]
              dark:hover:border-[#3b82f6]
              dark:hover:bg-[#10213a]

              lg:hidden
            "
            aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "open"}
                initial={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 45,
                  scale: 0.7,
                }}
                transition={{ duration: 0.15 }}
                className="flex"
              >
                {isOpen ? <X size={21} /> : <Menu size={21} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>

        {/* ==============================================
            MOBILE NAVIGATION
        ============================================== */}

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
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
                duration: 0.24,
                ease: [0.22, 1, 0.36, 1],
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
                {/* MOBILE LINKS */}

                <div className="flex flex-col gap-1.5">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                      <Link
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => handleNavClick(item.id)}
                        aria-current={isActive ? "location" : undefined}
                        className={`
                          relative
                          flex
                          min-h-11
                          w-full
                          items-center
                          overflow-hidden
                          rounded-lg
                          px-4
                          py-3
                          text-sm
                          font-medium
                          transition-colors
                          duration-200

                          ${
                            isActive
                              ? "bg-blue-50 text-blue-600 dark:bg-[#0b1628] dark:text-[#60a5fa]"
                              : "text-slate-700 hover:bg-slate-100 dark:text-[#cbd5e1] dark:hover:bg-[#0b1628]"
                          }
                        `}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="mobile-navbar-active-indicator"
                            className="
                              absolute
                              bottom-2
                              left-0
                              top-2
                              w-1
                              rounded-r-full
                              bg-blue-600
                              dark:bg-[#60a5fa]
                            "
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 32,
                            }}
                          />
                        )}

                        <span className="relative z-10">
                          {isIndonesian ? item.idLabel : item.enLabel}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* MOBILE ACTIONS */}

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
                  {/* LANGUAGE */}

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
                      transition-colors

                      hover:border-blue-500
                      hover:text-blue-600

                      dark:border-[#1e334f]
                      dark:text-[#cbd5e1]
                      dark:hover:border-blue-500
                      dark:hover:text-[#60a5fa]
                    "
                  >
                    <Languages size={16} />

                    {isIndonesian ? "Indonesia" : "English"}
                  </button>

                  {/* THEME */}

                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="
                      flex
                      min-h-11
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-slate-200
                      text-slate-700
                      transition-colors

                      hover:border-blue-500

                      dark:border-[#1e334f]
                      dark:text-[#cbd5e1]
                      dark:hover:border-blue-500
                    "
                    aria-label={
                      theme === "dark"
                        ? "Aktifkan mode terang"
                        : "Aktifkan mode gelap"
                    }
                  >
                    {theme === "dark" ? (
                      <Sun size={17} className="text-amber-400" />
                    ) : (
                      <Moon size={17} />
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
