"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40  "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading text="About me" />
      <p className="mb-3">
        Hi, I'm Kapil and I'm a{" "}
        <span className="font-semibold">
          Full Stack developer & Application developer
        </span>
        , I create visually appealing and user friendly websites and
        applications. My core stack is{" "}
        <span className="font-medium">React, Next.js, Nodejs and MongoDB</span>{" "}
        for web Apps and <span className="font-medium">Flutter + Dart</span> for
        mobile applications. <br />
        I'm also familiar with other technologies like{" "}
        <span className="font-medium"> Django, SQL , RESTAPI, Python </span>&
        multiple UI frameworks.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games. <br />I am currently{" "}
        <span className="font-semibold">Open to work</span> and looking for new
        opportunities.
      </p>
    </motion.section>
  );
};

export default About;
