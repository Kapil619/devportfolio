"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import { Splash, Island_Moments } from "next/font/google";

// Fonts
const splash = Splash({
  subsets: ["latin"],
  weight: "400",
});

const island_moments = Island_Moments({
  subsets: ["latin"],
  weight: "400",
});

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

      {/* prev styles  className="sm:hidden fixed  top-[0.15rem] right-0  h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0" */}

      <motion.div
        className="fixed top-0 left-1/2 h-[3rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-20 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]  dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 sm:hidden"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="sm:hidden fixed  top-[0.15rem] h-12 flex justify-between w-full px-4 items-center">
        <h1 className="capitalize text-2xl relative">
          <a
            href="/#"
            className={`block ${splash.className} dark:text-purple-200 text-purple-950 `}
          >
            Kapil Badokar
          </a>
        </h1>

        {/* <div className="text-lg italic font- ">Kapil Badokar</div> */}
        <button
          className={`text-2xl mb-3 px-3  flex `}
          onClick={handleMobileMenuToggle}
        >
          {/* {isMobileMenuOpen ? "✕" : "☰"}
           */}
          <Hamburger
            rounded
            toggled={isMobileMenuOpen}
            toggle={setMobileMenuOpen}
          />
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-12 w-full bg-white shadow-lg bg-opacity-80 backdrop-blur-[0.5rem] dark:bg-gray-900">
          <ul className="flex flex-col items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-900 py-3">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "block px-4 py-3 transition dark:text-gray-500 dark:hover:text-gray-300",
                    {
                      "text-gray-950 dark:text-gray-200":
                        activeSection === link.name,
                      "text-red-500 dark:text-white":
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
