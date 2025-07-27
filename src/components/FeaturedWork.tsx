"use client";

import { featuredWorkData } from "@/lib/data"; // We will update this file next
import SectionHeading from "./sectionHeading";
import WorkCard from "./WorkCard";

const FeaturedWork = () => {
  return (
    <section className="scroll-mt-28 mb-28">
      <SectionHeading text="Featured Work"></SectionHeading>
      <div className="mt-12 grid grid-cols-1 gap-12">
        {featuredWorkData.map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
