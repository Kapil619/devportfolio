"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

// Animation variants for the container and its children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

// --- REFINED ACTION BUTTON COMPONENT ---
const ActionButton = React.forwardRef<
  HTMLAnchorElement,
  {
    href: string;
    download?: boolean;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
  }
>(({ href, download, children, className = "", onClick }, ref) => (
  <a
    ref={ref}
    href={href}
    download={download}
    onClick={onClick}
    className={`group flex items-center justify-center gap-2 rounded-full px-7 py-3 text-lg font-medium outline-none transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:scale-110 hover:scale-105 active:scale-100 ${className}`}
  >
    {children}
  </a>
));
ActionButton.displayName = "ActionButton";

// --- REFINED SOCIAL LINK COMPONENT ---
const SocialLink = ({
  href,
  icon: Icon,
  tooltip,
}: {
  href: string;
  icon: React.ElementType;
  tooltip: string;
}) => (
  <div className="relative group">
    <a
      href={href}
      target="_blank"
      className="bg-white p-4 text-gray-700 flex items-center rounded-full shadow-md hover:shadow-lg focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition-all duration-300 borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
    >
      <Icon className="h-6 w-6" />
    </a>
    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
      {tooltip}
    </div>
  </div>
);

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const roles = [
    "React Native Engineer",
    "Full-Stack Developer",
    "Mobile Architect",
  ];

  return (
    <motion.section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="flex justify-center mb-6">
        <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded-full px-4 py-1 text-sm font-semibold">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Available for new opportunities
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center mb-4"
      >
        <div className="relative">
          <Image
            src={
              "https://images.unsplash.com/photo-1596727147705-61a532a659bd?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={192}
            height={192}
            quality={95}
            priority={true}
            alt="My Image"
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.5,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl font-bold tracking-tighter !leading-tight"
        variants={itemVariants}
      >
        Kapil Badokar
      </motion.h1>

      <motion.div
        variants={itemVariants}
        className="flex flex-wrap justify-center items-center gap-2 md:gap-3 my-6"
      >
        {roles.map((role) => (
          <span
            key={role}
            className="bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white/80 rounded-full px-4 py-1 text-sm md:text-base font-medium border border-black/5"
          >
            {role}
          </span>
        ))}
      </motion.div>

      <motion.p
        className="max-w-2xl mx-auto mb-10 text-lg text-gray-700 dark:text-slate-300"
        variants={itemVariants}
      >
        Building innovative solutions with React Native, Flutter & Next.js.
      </motion.p>

      {/* --- REFINED ACTION GROUP --- */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
        variants={itemVariants}
      >
        <ActionButton
          href="#contact"
          className="bg-gray-900 text-white hover:bg-gray-950"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </ActionButton>

        <ActionButton
          href="/CV.pdf"
          download
          className="bg-white text-gray-800 hover:bg-gray-50 borderBlack dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20"
        >
          Resume{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-0.5 transition" />
        </ActionButton>

        <div className="flex gap-4">
          <SocialLink
            href="https://www.linkedin.com/in/kapilbadokar/"
            icon={BsLinkedin}
            tooltip="LinkedIn"
          />
          <SocialLink
            href="https://github.com/Kapil619"
            icon={FaGithubSquare}
            tooltip="GitHub"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Intro;
