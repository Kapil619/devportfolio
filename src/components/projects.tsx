"use client";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Project from "./project";
import SectionHeading from "./sectionHeading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  //for show more btn
  const initialProjectsToShow = 3;
  const [projectsToShow, setProjectsToShow] = useState(initialProjectsToShow);

  const handleToggleShow = () => {
    setProjectsToShow((prevCount) =>
      prevCount === initialProjectsToShow
        ? projectsData.length
        : initialProjectsToShow
    );
  };
  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 flex flex-col items-center"
    >
      <SectionHeading text="My Projects" />
      <div>
        {/* TO IMPLEMENT: FILTERING BY PLATFORM */}
        {/* <div className="flex flex-row justify-center items-center gap-2 py-4">
          <button className="rounded-full border-2 border-purple-500 px-6 py-3 cursor-pointer hover:border-white">
            All
          </button>
          <button className="rounded-full border-2 border-purple-500 px-6 py-3 cursor-pointer hover:border-white">
            Web
          </button>
          <button className="rounded-full border-2 border-purple-500 px-6 py-3 cursor-pointer hover:border-white">
            Mobile
          </button>
        </div> */}

        {projectsData.slice(0, projectsToShow).map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      {projectsData.length > initialProjectsToShow && (
        <motion.button
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          whileHover={{ scale: 1.1 }}
          className=" cursor-pointer mt-4 inline-block bg-gray-900 text-white rounded-full outline-none transition-all  focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10
          h-[3rem] w-[8rem]
          "
          onClick={handleToggleShow}
        >
          {projectsToShow === initialProjectsToShow ? "Show More" : "Show Less"}
        </motion.button>
      )}
    </section>
  );
}
