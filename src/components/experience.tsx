"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";
import ExperienceCard from "./experienceCard";

const Experience = () => {
  const { ref } = useSectionInView("Experience");

  return (
    <motion.section
      ref={ref}
      className="h-full max-h-full flex relative overflow-x-hidden flex-col md:flex-col max-w-full px-14 justify-evenly items-center"
      initial={{
        opacity: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      transition={{
        duration: 1.5,
        stiffness: 100,
        delay: 0.3,
      }}
      id="experience"
    >
      <SectionHeading text="My Experience " />
      <div className="w-full mx-auto flex space-x-5 p-3 snap-x snap-mandatory">
        <ExperienceCard />
      </div>
    </motion.section>
  );
};

export default Experience;
