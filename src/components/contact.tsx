"use client";
import React from "react";
import SectionHeading from "./sectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading text="Contact Me" />
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:kapilbadokar321@gmail.com  ">
          {" "}
          kapilbadokar321@gmail.com{" "}
        </a>{" "}
        or through this form below.
      </p>
      <form className="mt-10 flex flex-col  " action="">
        <input
          placeholder="Your email"
          className="h-14 px-4 rounded-lg borderBlack"
          type="email"
        />
        <textarea
          placeholder="Your message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
        />
        <button
          className=" group flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all "
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1
          focus:scale-110 hover:scale-110 
          hover:bg-gray-950
          active:scale-105
          "
          />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
