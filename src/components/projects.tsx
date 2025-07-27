"use client";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useState } from "react";
import Project from "./project";
import SectionHeading from "./sectionHeading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  const [filter, setFilter] = useState<"All" | "Web" | "Mobile">("All");

  const initialProjectsToShow = 3;
  const [projectsToShow, setProjectsToShow] = useState(initialProjectsToShow);

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  const handleFilterChange = (newFilter: "All" | "Web" | "Mobile") => {
    setFilter(newFilter);
    setProjectsToShow(initialProjectsToShow);
  };

  const handleToggleShow = () => {
    setProjectsToShow((prevCount) =>
      prevCount === initialProjectsToShow
        ? filteredProjects.length
        : initialProjectsToShow
    );
  };
  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 flex flex-col items-center"
    >
      <SectionHeading text="My Projects"></SectionHeading>

      <div className="flex flex-row justify-center items-center gap-4 my-8">
        <button
          className={`filter-btn ${filter === "All" ? "active" : ""}`}
          onClick={() => handleFilterChange("All")}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === "Web" ? "active" : ""}`}
          onClick={() => handleFilterChange("Web")}
        >
          Web
        </button>
        <button
          className={`filter-btn ${filter === "Mobile" ? "active" : ""}`}
          onClick={() => handleFilterChange("Mobile")}
        >
          Mobile
        </button>
      </div>

      <div className="flex flex-col items-center">
        {filteredProjects.slice(0, projectsToShow).map((project) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full mb-3 sm:mb-8"
          >
            <Project {...project} />
          </motion.div>
        ))}
      </div>

      {filteredProjects.length > initialProjectsToShow && (
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
          className=" cursor-pointer mt-4 inline-block bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 h-[3rem] w-[8rem]"
          onClick={handleToggleShow}
        >
          {projectsToShow === initialProjectsToShow ? "Show More" : "Show Less"}
        </motion.button>
      )}
    </section>
  );
}
