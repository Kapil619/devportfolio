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
          return (
            // <div
            //   key={index}
            //   ref={ref}
            //   className="vertical-timeline-element w-full"
            // >
            //   <VerticalTimelineElement
            //     contentStyle={{
            //       background: "#f3f4f6",
            //       boxShadow: "none",
            //       border: "1px solid rgba(0, 0, 0, 0.05)",
            //       textAlign: "left",
            //       padding: "1.3rem 2rem",
            //     }}
            //     contentArrowStyle={{
            //       borderRight: "0.4rem solid #9ca3af",
            //     }}
            //     visible={inView}
            //     date={item.date}
            //     icon={item.icon}
            //     iconStyle={{
            //       background: "white",
            //       fontSize: "1.5rem",
            //     }}
            //   >
            //     <h3 className="font-semibold capitalize">{item.title}</h3>
            //     <p className="!mt-0 font-normal">{item.location}</p>
            //     <p className="!mt-1 !font-normal text-gray-700">
            //       {item.description}
            //     </p>
            //   </VerticalTimelineElement>
            // </div>
            <TimelineElement key={index} item={item}></TimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
