"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";
import ExperienceCard from "./experienceCard";
import { experienceData } from "@/lib/data";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <motion.section
      ref={ref}
      id="experience"
      className="scroll-mt-28 mb-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading text="My Experience"></SectionHeading>

      {/* Re-introducing the timeline container with the vertical line for desktop */}
      <div className="mt-12 relative before:hidden sm:before:block before:absolute before:top-0 before:left-1/2 before:w-1 before:h-full before:-ml-[0.5px] before:bg-gray-200 dark:before:bg-white/10">
        {experienceData.map((experience, index) => (
          <ExperienceCard
            key={experience.title}
            experience={experience}
            index={index} // Pass index back in
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
