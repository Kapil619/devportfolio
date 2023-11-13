"use client";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React, { useState } from "react";
import Project from "./project";
import SectionHeading from "./sectionHeading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  const initialProjectsToShow = 3; // Set the initial number of projects to show
  const [projectsToShow, setProjectsToShow] = useState(initialProjectsToShow);

  const handleShowMore = () => {
    // Increase the number of projects to show when the "Show More" button is clicked
    setProjectsToShow((prevCount) => prevCount + 3); // You can adjust the increment as needed
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading text="My Projects" />
      <div>
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

      {/* "Show More" button */}
      {projectsToShow < projectsData.length && (
        <button
          className="text-purple-600 cursor-pointer mt-4 inline-block"
          onClick={handleShowMore}
        >
          Show More
        </button>
      )}
    </section>
  );
}
