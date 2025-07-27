"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";
import { Icon } from "@iconify/react";

const About = () => {
  const { ref } = useSectionInView("About", 0.5);

  const highlights = [
    {
      icon: "carbon:development",
      title: "1.5+ Years",
      subtitle: "Experience",
    },
    {
      icon: "ion:rocket-outline",
      title: "4+",
      subtitle: "Deployed Apps",
    },
    {
      icon: "bi:stack",
      title: "Full-Stack",
      subtitle: "Web & Mobile",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading text="About me"></SectionHeading>

      <p className="text-lg mb-10 -mt-4">
        I build{" "}
        <span className="font-bold text-amber-600 dark:text-amber-400">
          pixel-perfect, robust applications
        </span>{" "}
        for both web and mobile platforms.
      </p>

      {/* --- HIGHLIGHT CARDS --- */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg bg-gray-100 dark:bg-white/10 shadow-md flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <Icon
              icon={highlight.icon}
              width="40"
              className="text-amber-600 dark:text-amber-400 mb-2"
            />
            <h3 className="text-2xl font-bold">{highlight.title}</h3>
            <p className="text-gray-600 dark:text-white/70">
              {highlight.subtitle}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="text-left sm:text-center">
        As a recent engineering graduate, I've immersed myself in the startup
        ecosystem, where I've honed my skills in{" "}
        <span className="font-semibold">
          React Native, Next.js, and Flutter
        </span>
        . My passion lies in solving complex problems and turning ideas into
        high-quality, scalable code that makes a real impact.
      </p>
    </motion.section>
  );
};

export default About;
