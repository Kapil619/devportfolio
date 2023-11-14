"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";

const About = () => {
  const { ref } = useSectionInView("About", 0.2);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40  scroll-mt-28 "
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
      id="about"
    >
      <SectionHeading text="About me" />
      <p className="mb-3">
        Hi, I'm <span className="dark:text-red-600 text-green-950">Kapil</span>{" "}
        and I'm a{" "}
        <span className="font-semibold dark:text-yellow-400 hover:underline text-fuchsia-950">
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
        <span className="font-semibold text-blue-600 no-underline hover:underline ">
          Open to work
        </span>{" "}
        and looking for new opportunities.
      </p>
    </motion.section>
  );
};

export default About;
