import { projectsData } from "@/lib/data";
import React from "react";
import SectionHeading from "./sectionHeading";
import Project from "./project";

export default function Projects() {
  return (
    <section>
      <SectionHeading text="My Projects" />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
