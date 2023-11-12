"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* mobile navbar code below */}
      <nav className="sm:hidden fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <button className="text-2xl px-3 py-2" onClick={handleMobileMenuToggle}>
          ☰
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-12 left-0 w-full bg-white shadow-lg">
          <ul className="flex flex-col items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 py-3">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "block px-4 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                    {
                      "text-gray-950 dark:text-gray-200":
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setMobileMenuOpen(false); // Close the mobile menu on click
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNav;
