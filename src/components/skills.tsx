"use client";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";

const fadeInaAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 "
    >
      <SectionHeading text="My Skills" />
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInaAnimationVariants}
            className="dark:bg-white/10 bg-white  text-2xl relative  shadow-md dark:shadow-xl rounded-full h-14 w-14 sm:h-16 sm:w-16 grid place-items-center group"
            key={index}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {/* {skill} */}
            <Icon width={32} height={32} icon={skill.src} />
            <div className="opacity-0 invisible w-max group-hover:opacity-100 group-hover:visible absolute -top-8 rounded capitalize bg-slate-900/75 dark:bg-slate-700/90 text-white dark:text-slate-100 py-1 px-2 text-sm duration-200">
              {skill.name}
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
