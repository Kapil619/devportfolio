"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./sectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import TimelineElement from "./TimelineElement";

export default function Experience() {
  const { ref } = useSectionInView("Education");
  return (
    <section
      ref={ref}
      id="education"
      className="mb-28 max-w-[60rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading text="My Experience"></SectionHeading>
      <VerticalTimeline lineColor="">
        {educationData.map((item, index) => {
          return <TimelineElement key={index} item={item}></TimelineElement>;
        })}
      </VerticalTimeline>
    </section>
  );
}
